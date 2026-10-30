/*!
 * West Coast Charts chart.describe() v1.1.3
 * (c) 2026 West Coast Software - MIT License
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.WestCoastChartsDescribe = factory());
})(this, (function () { 'use strict';

  /*
   * West Coast Charts - used by the side-effect entries (import
   * 'west-coast-charts/types/gauge', script tags): installs the plugin into
   * the core loaded on the page, or parks it until the core loads. Works for
   * ES modules, CommonJS and script tags alike, without the plugin bundle
   * importing (and duplicating) the core.
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  function autoInstall(plugin) {
    const g = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : {};
    if (typeof g.__wccInstallFeature === 'function') {
      g.__wccInstallFeature(plugin);
    } else {
      (g.__wccPendingFeatures = g.__wccPendingFeatures || []).push(plugin);
    }
    return plugin;
  }

  /**
   * West Coast Charts - radial column: how the column values combine in generated text
   * (centre, description, tooltip footers, filter note). Only additive measures (counts,
   * amounts) may be summed into a "Total"; a p95 latency, a rate or a score may not.
   *   aggregate: 'sum' (default, unchanged output) | 'mean' | 'max' | 'min' | 'none'
   * Copyright (c) 2026 West Coast Software - MIT License
   */

  /** label of the combined value ('Total', 'Average', 'Highest', 'Lowest'; '' for none) */
  function aggLabel(mode) {
    return {
      sum: 'Total',
      mean: 'Average',
      max: 'Highest',
      min: 'Lowest'
    }[mode] || '';
  }

  /** the values combined by mode; null when there is nothing (or mode 'none') */
  function aggOf(vals, mode) {
    const v = [];
    (vals || []).forEach(x => x !== null && x !== undefined && Number.isFinite(+x) && v.push(+x));
    if (mode === 'none' || !v.length && mode !== 'sum') return null;
    if (mode === 'mean') return v.reduce((a, x) => a + x, 0) / v.length;
    if (mode === 'max') return Math.max(...v);
    if (mode === 'min') return Math.min(...v);
    return v.reduce((a, x) => a + x, 0);
  }

  /*
   * West Coast Charts - chart.describe(): what a chart actually drew, as data
   * (agent module, west-coast-charts/agent/describe; never part of core/premium).
   * Single source with the accessible text: the description is the a11y
   * text(), the table is the a11y tableModel(), values / categories come from
   * the same a11y accessors (type hooks included), radialColumn aggregates from
   * the renderer's own agg()/catVal()/colAgg()/centerDefault().
   * Schema: dist/schema/wcc-describe.schema.json ('wcc-describe/1').
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  const SCHEMA_ID = 'wcc-describe/1';
  const num = v => typeof v === 'number' && Number.isFinite(v) ? v : null;
  const str = v => v == null ? '' : String(v);
  // an empty axis keeps ±Number.MAX_VALUE as min / max: no domain
  const dom = v => num(v) === null || Math.abs(v) > 1e300 ? null : v;
  const iso = v => num(v) === null || Math.abs(v) > 8.64e15 ? null : new Date(v).toISOString();
  function table(m) {
    if (!m) return {
      caption: '',
      columns: [],
      rows: [],
      total: 0,
      truncated: false
    };
    return {
      caption: str(m.caption),
      columns: m.head.map(str),
      rows: m.rows.map(r => r.map((c, k) => k && m.cell ? m.cell(c, k) : c == null ? '–' : String(c))),
      total: m.total,
      truncated: m.total > m.rows.length
    };
  }
  function extremaOf(series) {
    let lo = null;
    let hi = null;
    series.forEach(s => {
      // hidden series carry no min / max
      if (s.min && (!lo || s.min.value < lo.value)) lo = {
        value: s.min.value,
        series: s.name,
        category: s.min.category
      };
      if (s.max && (!hi || s.max.value > hi.value)) hi = {
        value: s.max.value,
        series: s.name,
        category: s.max.category
      };
    });
    return lo ? {
      min: lo,
      max: hi
    } : null;
  }

  /** min / max (first occurrence) of numeric values with their category */
  function range(vals, cat) {
    let lo = -1;
    let hi = -1;
    vals.forEach((v, j) => {
      if (num(v) === null) return;
      if (lo < 0 || v < vals[lo]) lo = j;
      if (hi < 0 || v > vals[hi]) hi = j;
    });
    return lo < 0 ? [null, null] : [{
      value: vals[lo],
      category: cat(lo)
    }, {
      value: vals[hi],
      category: cat(hi)
    }];
  }
  function filtersOf(ctx, WCC) {
    const out = [];
    const hf = ctx.highlightFilter;
    if (hf && typeof hf.isActive === 'function' && hf.isActive()) out.push({
      kind: 'highlight',
      active: true
    });
    const link = ctx.w.config.chart.link;
    if (link && link.enabled !== false && WCC && typeof WCC.getCrossfilter === 'function') {
      try {
        const st = WCC.getCrossfilter(link.group);
        const sel = st && (st.selection || st.filters || st.state);
        if (sel && (Array.isArray(sel) ? sel.length : Object.keys(sel).length)) out.push({
          kind: 'crossfilter',
          active: true,
          group: link.group || null,
          selection: JSON.parse(JSON.stringify(sel))
        });
      } catch (e) {
        /* a crossfilter state that is not plain data: not reported */
      }
    }
    return out;
  }

  /* ---------- core (and WCC types on the core pipeline) ---------- */

  function coreModel(ctx, max) {
    const w = ctx.w;
    const gl = w.globals;
    const a = ctx.a11y;
    const type = w.config.chart.type;
    const collapsed = (gl.collapsedSeriesIndices || []).concat(gl.ancillaryCollapsedSeriesIndices || []);
    const pie = a.isPie();
    const radial = a.isRadial();
    const nSeries = pie ? 1 : (gl.series || []).length;
    const visible = a.seriesList();
    // heatmap / calendar cells without a value as a named state (plotOptions.heatmap.empty)
    const he = gl.wccHeatEmpty;
    const series = [];
    const marks = [];
    let marksTotal = 0;
    for (let s = 0; s < nSeries; s++) {
      const hidden = !pie && collapsed.indexOf(s) > -1;
      const name = pie ? w.config.title && w.config.title.text || 'Series 1' : a.seriesName(s);
      const vals = hidden ? gl.series[s] || [] : a.values(s);
      const raw = Array.from(vals || [], num);
      const cat = j => hidden ? null : a.category(s, j);
      const [mn, mx] = hidden ? [null, null] : range(raw, cat);
      series.push({
        index: s,
        name,
        hidden,
        count: raw.length,
        unit: null,
        min: mn,
        max: mx,
        aggregate: pie ? {
          mode: 'sum',
          value: aggOf(raw, 'sum'),
          label: 'Total'
        } : null
      });
      if (hidden || visible.indexOf(s) < 0) continue;
      marksTotal = Math.max(marksTotal, raw.length);
      for (let j = 0; j < Math.min(raw.length, max); j++) {
        marks.push({
          series: name,
          seriesIndex: s,
          category: str(a.category(s, j)),
          value: raw[j],
          formatted: raw[j] === null ? he ? he.label : '–' : a.value(s, j)
        });
      }
    }
    const hidden = pie ? (gl.seriesNames || []).filter((n, j) => collapsed.indexOf(j) > -1) : series.filter(s => s.hidden).map(s => s.name);
    let aggregate = null;
    if (pie) aggregate = {
      mode: 'sum',
      value: series[0].aggregate.value,
      label: 'Total',
      formatted: null
    };
    const tot = radial && w.config.plotOptions.radialBar.dataLabels && w.config.plotOptions.radialBar.dataLabels.total;
    if (tot && tot.show) {
      const vs = visible.map(s => gl.series[s]);
      aggregate = {
        mode: 'mean',
        value: aggOf(vs, 'mean'),
        label: tot.label || 'Total',
        formatted: null
      };
    }
    const f = gl.yLabelFormatters && gl.yLabelFormatters[0];
    if (aggregate && aggregate.value !== null) aggregate.formatted = String(typeof f === 'function' ? f(aggregate.value, {
      w
    }) : aggregate.value);
    let scales = null;
    if (gl.axisCharts && !pie && !radial) {
      const xt = w.config.xaxis.convertedCatToNumeric ? 'category' : w.config.xaxis.type || 'category';
      // category domain as drawn (same labels as the table: a11y category())
      const s0 = visible.length ? visible[0] : 0;
      const nCat = visible.length ? Math.max(...visible.map(s => a.count(s))) : 0;
      const xTitle = w.config.xaxis.title && w.config.xaxis.title.text || null;
      const x = xt === 'datetime' ? {
        type: 'datetime',
        min: dom(gl.minX),
        max: dom(gl.maxX),
        minISO: iso(gl.minX),
        maxISO: iso(gl.maxX),
        title: xTitle
      } : gl.isXNumeric && xt !== 'category' ? {
        type: 'numeric',
        min: dom(gl.minX),
        max: dom(gl.maxX),
        title: xTitle
      } : {
        type: 'category',
        min: null,
        max: null,
        count: nCat,
        first: nCat ? str(a.category(s0, 0)) : null,
        last: nCat ? str(a.category(s0, nCat - 1)) : null,
        title: xTitle
      };
      const yax = Array.isArray(w.config.yaxis) ? w.config.yaxis : [w.config.yaxis];
      const map = gl.seriesYAxisMap || [];
      const y = yax.map((ya, i) => ({
        index: i,
        min: dom(gl.minYArr && gl.minYArr[i]),
        max: dom(gl.maxYArr && gl.maxYArr[i]),
        title: ya.title && ya.title.text || null,
        logarithmic: !!ya.logarithmic,
        series: (map[i] || []).map(s => a.seriesName(s))
      }));
      scales = {
        x,
        y
      };
    }
    const filters = filtersOf(ctx, ctx.constructor);
    if (gl.zoomed) filters.push({
      kind: 'zoom',
      active: true,
      min: dom(gl.minX),
      max: dom(gl.maxX)
    });
    const text = a.text().replace(' ' + a.strings().keysHint, '') + (he && he.count ? ` ${he.count} cells without a value: ${he.label}.` : '');
    const out = {
      type: w.config.chart.requestedType || type,
      premium: false,
      text,
      series,
      marks,
      marksTotal,
      aggregate,
      scales,
      filters,
      hidden,
      table: table(a.tableModel(max))
    };
    // stacked: the per-category totals (the a11y table / text carry them too)
    const sums = a.totals && a.totals();
    if (sums) out.categories = sums.map((value, j) => ({
      category: str(a.category(visible[0], j)),
      value
    }));
    return out;
  }

  /* ---------- premium renderers ---------- */

  function radialColumn(r, model) {
    const w = r.w;
    const cats = r.M && r.M.cats || [];
    const vis = r.hasCols ? r.vis || [] : [];
    const mode = r.agg();
    const visNames = vis.map(x => x.name);
    const cfgSeries = (w.config.series || []).filter(s => s && typeof s === 'object' && 'data' in s);
    const series = vis.map((x, i) => {
      const raw = (x.vals || []).map(num);
      const [mn, mx] = range(raw, j => str(cats[j]));
      return {
        index: i,
        name: x.name,
        hidden: false,
        count: raw.length,
        unit: null,
        min: mn,
        max: mx,
        aggregate: {
          mode,
          value: aggOf(raw, mode),
          label: mode === 'none' ? '' : aggLabel(mode)
        }
      };
    });
    cfgSeries.forEach((s, i) => {
      if (s.name !== undefined && visNames.indexOf(s.name) < 0 && !s.layer && !s.type) series.push({
        index: vis.length + i,
        name: str(s.name),
        hidden: true,
        count: (s.data || []).length,
        unit: null,
        min: null,
        max: null,
        aggregate: null
      });
    });
    const marks = [];
    vis.forEach((x, i) => (x.vals || []).forEach((v, j) => marks.push({
      series: x.name,
      seriesIndex: i,
      category: str(cats[j]),
      value: num(v),
      formatted: num(v) === null ? '–' : r.fmt(v)
    })));
    model.series = series;
    model.marks = marks;
    model.marksTotal = cats.length;
    if (r.hasCols) {
      const value = mode === 'sum' ? r.centerDefault() : mode === 'none' ? null : r.colAgg();
      const mName = r.measureName();
      model.aggregate = {
        mode,
        value: num(value),
        label: mode === 'sum' ? 'Total' : mode === 'none' ? mName : aggLabel(mode) + ' ' + mName,
        formatted: num(value) === null ? null : r.fmt(value)
      };
      // per category: what tooltips / centre use (stacked sum or the aggregate across series)
      model.categories = cats.map((c, j) => ({
        category: str(c),
        value: num(r.catVal(j))
      }));
    }
    model.hidden = series.filter(s => s.hidden).map(s => s.name);
    const F = r.fseg;
    const A = r.all;
    if (F && A && r.hasCols) model.filters.push({
      kind: 'radialColumn',
      active: true,
      path: (F.path || [F.name]).map(str),
      shown: num(A[1]),
      unfiltered: num(A[2])
    });
    const u = r.opts && r.opts();
    model.units = {
      category: u && u.link && u.link.unit || null,
      value: null
    };
  }
  function premiumModel(ctx, host, max) {
    const r = host.renderer;
    const a = host.a11y;
    const w = ctx.w;
    const tm = a ? a.tableModel(max) : null;
    const model = {
      type: host.w.globals.wccPremium || w.config.chart.type,
      premium: true,
      text: a ? a.text() : str(r.describe()),
      series: [],
      marks: [],
      marksTotal: 0,
      aggregate: null,
      scales: null,
      filters: filtersOf(ctx, ctx.constructor),
      hidden: [],
      table: table(tm)
    };
    if (model.type === 'radialColumn' && typeof r.agg === 'function') {
      radialColumn(r, model);
      return model;
    }
    // generic premium type: series from the options, marks from the drawn table
    const cs = (w.config.series || []).filter(s => s && typeof s === 'object');
    model.series = cs.map((s, i) => ({
      index: i,
      name: str(s.name || 'Series ' + (i + 1)),
      hidden: false,
      count: Array.isArray(s.data) ? s.data.length : 0,
      unit: null,
      min: null,
      max: null,
      aggregate: null
    }));
    const cols = model.table.columns;
    (tm && tm.rows || []).forEach(row => row.slice(1).forEach((c, k) => model.marks.push({
      series: str(cols[k + 1]),
      seriesIndex: k,
      category: str(row[0]),
      value: num(c),
      formatted: tm.cell ? tm.cell(c, k + 1) : str(c)
    })));
    model.marksTotal = tm ? tm.total : 0;
    return model;
  }

  /** the describe model of a rendered chart (format 'json') */
  function describeModel(ctx, opts) {
    const o = opts || {};
    const w = ctx.w;
    const gl = w.globals;
    const a11yOpt = w.config.wcc && w.config.wcc.a11y || {};
    const max = Math.max(1, o.maxRows || a11yOpt.dataTableMaxRows || 500);
    const host = ctx._wccPremium;
    const premium = !!(host && host.renderer && gl.wccPremium);
    if (!premium && !ctx.a11y) throw new Error('describe(): render the chart first (await chart.render())');
    const m = premium ? premiumModel(ctx, host, max) : coreModel(ctx, max);
    const out = {
      schema: SCHEMA_ID,
      type: m.type,
      premium: m.premium,
      title: w.config.title && w.config.title.text || null,
      subtitle: w.config.subtitle && w.config.subtitle.text || null,
      text: str(m.text),
      deterministic: !!gl.wccDet,
      noData: !!gl.noData,
      series: m.series,
      marks: m.marks,
      marksTotal: m.marksTotal,
      marksTruncated: m.marksTotal > max,
      aggregate: m.aggregate,
      scales: m.scales,
      extrema: extremaOf(m.series),
      units: m.units || {
        category: null,
        value: m.scales && m.scales.y[0] && m.scales.y[0].title || null
      },
      filters: m.filters,
      hidden: m.hidden,
      table: m.table
    };
    if (m.categories) out.categories = m.categories;
    return out;
  }

  /*
   * West Coast Charts - chart.describe() serializers: 'table' and 'markdown'
   * from the 'json' model (agent module).
   * Copyright (c) 2026 West Coast Software - MIT License
   */

  /** the drawn data table: {caption, columns, rows, total, truncated} */
  function toTable(model) {
    const t = model.table;
    return {
      caption: t.caption,
      columns: t.columns.slice(),
      rows: t.rows.map(r => r.slice()),
      total: t.total,
      truncated: t.truncated
    };
  }
  const cell = v => String(v == null ? '' : v).replace(/\\/g, '\\\\').replace(/\|/g, '\\|').replace(/\r?\n/g, ' ');
  const n = v => v == null ? '–' : String(v);

  /** GitHub-flavoured markdown: heading, description, aggregate / scales / filters, the table */
  function toMarkdown(model) {
    const out = [];
    out.push(`### ${cell(model.title || model.table.caption || model.type)}`);
    if (model.text) out.push('', model.text);
    const facts = [];
    const ag = model.aggregate;
    const pt = e => `${n(e.value)} (${cell(e.series)}, ${cell(e.category)})`;
    if (ag) facts.push(`- ${ag.label || 'Aggregate'} (${ag.mode}): ${ag.formatted != null ? ag.formatted : n(ag.value)}`);
    if (model.extrema) facts.push(`- Range: ${pt(model.extrema.min)} to ${pt(model.extrema.max)}`);
    const sc = model.scales;
    if (sc && sc.x) facts.push(`- x (${sc.x.type})${sc.x.title ? ' ' + cell(sc.x.title) : ''}: ${sc.x.type === 'category' ? `${sc.x.count} categories` : sc.x.type === 'datetime' ? `${n(sc.x.minISO)} to ${n(sc.x.maxISO)}` : `${n(sc.x.min)} to ${n(sc.x.max)}`}`);
    if (sc) sc.y.forEach(y => facts.push(`- y${sc.y.length > 1 ? y.index + 1 : ''}${y.title ? ' ' + cell(y.title) : ''}: ${n(y.min)} to ${n(y.max)}${y.logarithmic ? ' (log)' : ''}`));
    if (model.hidden.length) facts.push(`- Hidden series: ${model.hidden.map(cell).join(', ')}`);
    model.filters.forEach(f => facts.push(`- Filter (${f.kind}): ${f.path ? f.path.map(cell).join(' › ') : 'active'}`));
    if (facts.length) out.push('', ...facts);
    const t = model.table;
    if (t.columns.length) {
      out.push('', '| ' + t.columns.map(cell).join(' | ') + ' |', '|' + t.columns.map(() => ' --- |').join(''));
      t.rows.forEach(r => out.push('| ' + r.map(cell).join(' | ') + ' |'));
      if (t.truncated) out.push('', `_${t.rows.length} of ${t.total} rows._`);
    }
    return out.join('\n') + '\n';
  }

  /*
   * West Coast Charts - chart.describe() (west-coast-charts/agent/describe).
   *   import 'west-coast-charts/agent/describe'     // or <script src="dist/agent/describe.js"> after the core
   *   await chart.render()
   *   chart.describe()                       // { schema: 'wcc-describe/1', ... } (format 'json')
   *   chart.describe({ format: 'table' })    // { caption, columns, rows, total, truncated }
   *   chart.describe({ format: 'markdown' }) // string
   * What was drawn, from the same code as the accessible description and data table.
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  const FORMATS = ['json', 'table', 'markdown'];
  function describe(chart, opts) {
    const o = typeof opts === 'string' ? {
      format: opts
    } : opts || {};
    const f = o.format || 'json';
    if (FORMATS.indexOf(f) < 0) throw new Error(`describe(): unknown format "${f}" (${FORMATS.join(', ')})`);
    const m = describeModel(chart, o);
    return f === 'table' ? toTable(m) : f === 'markdown' ? toMarkdown(m) : m;
  }
  const plugin = {
    name: 'agent/describe',
    install(WCC, hook) {
      hook.api('describe', (ctx, opts) => describe(ctx, opts));
    }
  };

  /*
   * west-coast-charts/agent/describe as a side-effect / script-tag entry:
   * installs chart.describe() into the core on the page (or waits for it).
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  autoInstall(plugin);
  plugin.describe = describe;
  plugin.toMarkdown = toMarkdown;
  plugin.toTable = toTable;
  plugin.SCHEMA_ID = SCHEMA_ID;
  plugin.FORMATS = FORMATS;

  return plugin;

}));
