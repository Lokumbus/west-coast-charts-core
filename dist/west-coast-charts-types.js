/*!
 * West Coast Charts chart types v1.1.4
 * Plugin for West Coast Charts: WestCoastCharts.use(types)
 * (c) 2026 West Coast Software - Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.WestCoastChartsTypes = factory());
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

  let _0$7;
  function __bind$c(m) { _0$7 = m["default"]; }

  let _0$6;
  function __bind$b(m) { _0$6 = m["default"]; }

  let _0$5;
  function __bind$a(m) { _0$5 = m["default"]; }

  let _0$4;
  function __bind$9(m) { _0$4 = m["default"]; }

  let _0$3, _2$2, _3$1, _10, _21;
  function __bind$8(m) { _0$3 = m["SANS"]; m["TOKEN_VARS"]; _2$2 = m["MOTION_TOKENS"]; _3$1 = m["PRESETS"]; m["EXTRA_PRESETS"]; m["CVD_NAMES"]; m["presetNames"]; m["EASINGS"]; m["cubicBezier"]; m["registerEasing"]; _10 = m["resolveEasing"]; m["isThemedPreset"]; m["resolveMode"]; m["readCssTokens"]; m["REGISTERED"]; m["registerTheme"]; m["unregisterTheme"]; m["resolveTokens"]; m["optionsFromTokens"]; m["themedCss"]; m["tokensToStyle"]; _21 = m["CVD_PALETTES"]; }

  let _0$2, _1$1, _2$1;
  function __bind$7(m) { _0$2 = m["radialDomain"]; _1$1 = m["formatDomainValue"]; _2$1 = m["usesGaugeRenderer"]; }

  let _0$1;
  function __bind$6(m) { _0$1 = m["default"]; }

  let _1, _2, _3, _4, _5, _7;
  function __bind$5(m) { m["default"]; _1 = m["markDefault"]; _2 = m["isUserFn"]; _3 = m["escapeHtml"]; _4 = m["cssColor"]; _5 = m["safeImageHref"]; m["setText"]; _7 = m["trustedHTML"]; m["sanitizeToFragment"]; m["sanitizeHtml"]; m["setHtml"]; m["setContent"]; }

  function __bind$4(m) { m["mediaQuery"]; m["mediaMatches"]; }

  let _0;
  function __bind$3(m) { _0 = m["default"]; }

  function __bind$2(m) { m["tidyNumber"]; }

  function __bind$1(m) { m["default"]; m["KNOWN_FEATURES"]; m["isUsed"]; m["importPath"]; m["installPlaceholders"]; m["attach"]; m["configure"]; m["_resetForTests"]; m["has"]; m["run"]; m["filter"]; m["veto"]; m["use"]; m["isInstalled"]; }

  function __bind(m) { m["default"]; m["add"]; m["remove"]; m["all"]; m["inGroup"]; m["byElement"]; m["byId"]; m["groupState"]; m["dropGroupState"]; m["_resetForTests"]; }

  function bindCore(modules) {
    if (!modules) throw new Error('WestCoastCharts: this plugin needs a West Coast Charts core with plugin support')
    __bind$c(modules["modules/Animations"] || {});
    __bind$b(modules["modules/Fill"] || {});
    __bind$a(modules["modules/Filters"] || {});
    __bind$9(modules["modules/Graphics"] || {});
    __bind$8(modules["modules/themes/Presets"] || {});
    __bind$7(modules["modules/types/GaugeMath"] || {});
    __bind$6(modules["utils/DateTime"] || {});
    __bind$5(modules["utils/Html"] || {});
    __bind$4(modules["utils/Media"] || {});
    __bind$3(modules["utils/Utils"] || {});
    __bind$2(modules["utils/TidyNumber"] || {});
    __bind$1(modules["features/hook"] || {});
    __bind(modules["features/registry"] || {});
  }

  /*
   * West Coast Charts - tooltip markup for the chart types (used as their
   * preset tooltip.custom; a user tooltip.custom replaces it).
   * Copyright (c) 2026 West Coast Software - MIT License
   */

  /**
   * rows: [{ color, name, value, muted }]
   */
  function tooltipHTML(title, rows) {
    const r = rows.map(row => `<div class="wcc-tt-row${row.muted ? ' wcc-tt-muted' : ''}">` + (row.color ? `<span class="wcc-tt-dot" style="background:${_4(row.color)}"></span>` : '<span class="wcc-tt-dot wcc-tt-dot-none"></span>') + `<span class="wcc-tt-name">${_3(row.name)}</span>` + `<span class="wcc-tt-value">${_3(row.value)}</span>` + '</div>').join('');
    return '<div class="wcc-tt">' + (title !== undefined && title !== null && title !== '' ? `<div class="apexcharts-tooltip-title wcc-tt-title">${_3(title)}</div>` : '') + `<div class="wcc-tt-body">${r}</div></div>`;
  }

  /** value formatter for tooltips: tooltip.y.formatter, else the y axis one */
  function tooltipValueFormatter(w, seriesIndex) {
    const ty = w.config.tooltip && w.config.tooltip.y;
    const yf = Array.isArray(ty) ? ty[seriesIndex] && ty[seriesIndex].formatter : ty && ty.formatter;
    if (typeof yf === 'function') {
      return (v, j) => String(yf(v, {
        series: w.globals.series,
        seriesIndex,
        dataPointIndex: j,
        w
      }));
    }
    const f = w.globals.yLabelFormatters && w.globals.yLabelFormatters[0];
    return v => String(f ? f(v) : v);
  }

  /*
   * West Coast Charts - calendar heatmap (WCC extension; no spec file).
   * One value per day, laid out as weeks (columns) x weekdays (rows) on the
   * heatmap renderer. Input: one series of {x: date, y} / [date, y] /
   * {date, value}; dates as 'YYYY-MM-DD' strings, Date objects or timestamps
   * (local calendar day). The transform emits 7 weekday series (bottom-up,
   * the heatmap draws the last series on top) with one cell per week.
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  const DAY = 864e5;
  const isObj$5 = v => v !== null && typeof v === 'object' && !Array.isArray(v);
  const finite$i = v => typeof v === 'number' && isFinite(v);
  const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const MAX_WEEKS = 160;

  /** calendar day number (days since 1970-01-01) of a date-ish value, or null */
  function dayOf(x) {
    if (x === null || x === undefined || x === '') return null;
    if (typeof x === 'string') {
      const m = /^(\d{4})-(\d{1,2})-(\d{1,2})/.exec(x.trim());
      if (m) return Math.round(Date.UTC(+m[1], +m[2] - 1, +m[3]) / DAY);
      const t = Date.parse(x);
      if (!isFinite(t)) return null;
      x = t;
    }
    const d = x instanceof Date ? x : typeof x === 'number' && isFinite(x) ? new Date(x) : null;
    if (!d || !isFinite(d.getTime())) return null;
    return Math.round(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / DAY);
  }
  const dowOf = day => ((day + 4) % 7 + 7) % 7; // 1970-01-01 was a Thursday
  function isoOf(day) {
    const d = new Date(day * DAY);
    return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}-${String(d.getUTCDate()).padStart(2, '0')}`;
  }
  const partsOf = day => {
    const d = new Date(day * DAY);
    return {
      y: d.getUTCFullYear(),
      m: d.getUTCMonth(),
      d: d.getUTCDate(),
      dow: d.getUTCDay()
    };
  };
  function pointOf(p) {
    if (Array.isArray(p)) return [p[0], p[1]];
    if (isObj$5(p)) return [p.x !== undefined ? p.x : p.date, p.y !== undefined ? p.y : p.value];
    return [undefined, undefined];
  }

  /**
   * Build the week grid. Returns {series (7 weekday rows, bottom-up), grid}.
   * opts: {weekStart 0..6, start, end, aggregate 'sum'|'max'|'mean'|'last', dayNames}
   */
  function calendarLayout(points, opts = {}) {
    const ws = finite$i(opts.weekStart) ? (Math.round(opts.weekStart) % 7 + 7) % 7 : 1;
    const agg = opts.aggregate || 'sum';
    const by = new Map();
    const counts = new Map();
    (Array.isArray(points) ? points : []).forEach(p => {
      const [x, y] = pointOf(p);
      const day = dayOf(x);
      if (day === null) return;
      const v = typeof y === 'string' && y.trim() !== '' && isFinite(+y) ? +y : y;
      if (!finite$i(v)) {
        if (!by.has(day)) by.set(day, null);
        return;
      }
      const old = by.get(day);
      const n = (counts.get(day) || 0) + 1;
      counts.set(day, n);
      if (!finite$i(old)) by.set(day, v);else if (agg === 'max') by.set(day, Math.max(old, v));else if (agg === 'min') by.set(day, Math.min(old, v));else if (agg === 'last') by.set(day, v);else if (agg === 'mean') by.set(day, old + (v - old) / n);else by.set(day, old + v);
    });
    const days = Array.from(by.keys());
    let start = dayOf(opts.start);
    let end = dayOf(opts.end);
    if (start === null) start = days.length ? Math.min(...days) : null;
    if (end === null) end = days.length ? Math.max(...days) : null;
    if (start === null || end === null) return {
      series: [],
      grid: null
    };
    if (end < start) [start, end] = [end, start];
    if (end - start > MAX_WEEKS * 7) start = end - MAX_WEEKS * 7 + 1;
    const firstCol = start - (dowOf(start) - ws + 7) % 7;
    const weeks = Math.floor((end - firstCol) / 7) + 1;
    const names = Array.isArray(opts.dayNames) && opts.dayNames.length === 7 ? opts.dayNames : DAY_NAMES;
    const rows = [];
    let max = -Infinity;
    let min = Infinity;
    let total = 0;
    let count = 0;
    for (let r = 0; r < 7; r++) {
      const data = [];
      for (let c = 0; c < weeks; c++) {
        const day = firstCol + c * 7 + r;
        const inRange = day >= start && day <= end;
        const v = inRange && by.has(day) ? by.get(day) : null;
        if (finite$i(v)) {
          max = Math.max(max, v);
          min = Math.min(min, v);
          total += v;
          count++;
        }
        data.push({
          x: isoOf(firstCol + c * 7),
          y: v,
          wcc: {
            day,
            inRange,
            iso: isoOf(day)
          }
        });
      }
      rows.push({
        name: String(names[(ws + r) % 7]),
        data,
        wccDow: (ws + r) % 7
      });
    }
    const grid = {
      ws,
      start,
      end,
      firstCol,
      weeks,
      min: count ? min : null,
      max: count ? max : null,
      total,
      count,
      days: end - start + 1,
      // r: weekday row from the top, c: week column
      cell: (r, c) => {
        const day = firstCol + c * 7 + r;
        return {
          day,
          inRange: day >= start && day <= end,
          v: day >= start && day <= end && by.has(day) ? by.get(day) : null
        };
      }
    };
    return {
      series: rows.reverse(),
      grid
    };
  }

  /**
   * Month label of week column i (x axis formatter): the month whose 1st day
   * falls inside the range in that week; the first column names its month
   * unless a month starts within the next two columns.
   */
  function weekLabel(cal, i, monthNames) {
    if (!cal || !(i >= 0) || i >= cal.weeks) return '';
    const names = Array.isArray(monthNames) && monthNames.length === 12 ? monthNames : MONTH_NAMES;
    const sy = partsOf(cal.start).y;
    const ey = partsOf(cal.end).y;
    const firstOfMonth = col => {
      for (let k = 0; k < 7; k++) {
        const day = cal.firstCol + col * 7 + k;
        if (day < cal.start || day > cal.end) continue;
        const p = partsOf(day);
        if (p.d === 1) return p;
      }
      return null;
    };
    const name = p => p.m === 0 && sy !== ey ? `${names[0]} ${p.y}` : names[p.m];
    const p = firstOfMonth(i);
    if (p) return name(p);
    if (i === 0 && !firstOfMonth(1) && !firstOfMonth(2)) {
      const q = partsOf(Math.max(cal.start, cal.firstCol));
      return sy !== ey && q.m === 0 ? `${names[0]} ${q.y}` : names[q.m];
    }
    return '';
  }
  function formatDay(day, monthNames) {
    const names = Array.isArray(monthNames) && monthNames.length === 12 ? monthNames : MONTH_NAMES;
    const p = partsOf(day);
    return `${DAY_NAMES[p.dow]}, ${p.d} ${names[p.m]} ${p.y}`;
  }

  /** ISO 8601 day with its weekday (accessible text, data table): "2026-03-02 (Mon)" */
  function isoDay(day) {
    const p = partsOf(day);
    const z = n => String(n).padStart(2, '0');
    return `${p.y}-${z(p.m + 1)}-${z(p.d)} (${DAY_NAMES[p.dow]})`;
  }

  /*
   * West Coast Charts - heatmap cells without a value (plotOptions.heatmap.empty).
   * A null cell is a state, not the lowest value: with `empty: { label }` it is
   * drawn with a neutral hatch, never takes a colour of the scale, gets a legend
   * entry next to the colour ranges and reads as the label in the tooltip, the
   * data table and describe() ("closed" instead of a light "< 50 %" cell).
   * Works on heatmap and calendar. Copyright (c) 2026 West Coast Software - MIT
   */
  const SVGNS$c = 'http://www.w3.org/2000/svg';
  const finite$h = v => typeof v === 'number' && isFinite(v);

  /** { label, color, legend } of an `empty` option, or null */
  function emptyOpts(e) {
    if (!e) return null;
    const o = typeof e === 'object' ? e : {};
    return {
      label: o.label === undefined || o.label === null ? 'No value' : String(o.label),
      color: o.color,
      legend: o.legend !== false
    };
  }
  function emptyOf(w) {
    return w && w.config.chart.type === 'heatmap' ? emptyOpts((w.config.plotOptions.heatmap || {}).empty) : null;
  }

  /** preset layer of a heatmap with `empty`: the tooltip reads the label instead of hiding the row */
  function emptyPreset(e) {
    const o = emptyOpts(e);
    if (!o) return null;
    const f = (v, x) => finite$h(v) ? x && x.w && x.w.globals.yLabelFormatters[0] ? x.w.globals.yLabelFormatters[0](v, x) : v : o.label;
    return {
      tooltip: {
        y: {
          formatter: _1(f)
        }
      }
    };
  }

  /**
   * colour ranges: one range that never matches carries the legend entry. Runs
   * in normalizeType on the working copy of the options (before the legend is
   * drawn, for heatmap and calendar alike); the user's arrays stay untouched.
   */
  function emptyRanges(opts) {
    const h = opts.plotOptions && opts.plotOptions.heatmap;
    const cs = h && h.colorScale;
    if (!cs || !Array.isArray(cs.ranges)) return;
    const e = emptyOpts(h.empty);
    const keep = cs.ranges.filter(r => !(r && r.wccEmpty));
    const dark = opts.theme && opts.theme.mode === 'dark';
    const ranges = e && e.legend && keep.length ? keep.concat({
      from: Infinity,
      to: -Infinity,
      color: ink(dark, e),
      name: e.label,
      wccEmpty: true
    }) : keep;
    opts.plotOptions = {
      ...opts.plotOptions,
      heatmap: {
        ...h,
        colorScale: {
          ...cs,
          ranges
        }
      }
    };
  }
  const isDark = w => !!(w.config.theme && w.config.theme.mode === 'dark');
  function ink(dark, e) {
    return e.color || (dark ? 'rgba(148,163,184,0.55)' : 'rgba(100,116,139,0.55)');
  }

  /** null value of a cell (calendar: the day's own value; days outside the range are not cells) */
  function isEmpty(w, rc) {
    const i = +rc.getAttribute('i');
    const j = +rc.getAttribute('j');
    const s = w.config.series[i];
    const d = s && s.data && s.data[j];
    if (d && d.wcc) return d.wcc.inRange && !finite$h(d.y);
    const v = w.globals.series[i] && w.globals.series[i][j];
    return !finite$h(v);
  }

  /** after drawing: hatch the empty cells, mark the legend entry */
  function decorateEmpty(ctx) {
    const w = ctx.w;
    const gl = w.globals;
    const e = emptyOf(w);
    const root = gl.dom && gl.dom.baseEl;
    const svg = gl.dom && gl.dom.Paper && gl.dom.Paper.node;
    if (!e || !root || !svg) return;
    const id = 'wccHeatEmpty' + gl.cuid;
    let defs = svg.querySelector('defs');
    if (!defs) defs = svg.insertBefore(document.createElementNS(SVGNS$c, 'defs'), svg.firstChild);
    let p = defs.querySelector('#' + id);
    if (!p) {
      p = document.createElementNS(SVGNS$c, 'pattern');
      p.setAttribute('id', id);
      p.setAttribute('patternUnits', 'userSpaceOnUse');
      p.setAttribute('width', 6);
      p.setAttribute('height', 6);
      p.setAttribute('patternTransform', 'rotate(45)');
      const el = (tag, at) => {
        const n = p.appendChild(document.createElementNS(SVGNS$c, tag));
        Object.keys(at).forEach(k => n.setAttribute(k, at[k]));
      };
      el('rect', {
        width: 6,
        height: 6
      });
      el('line', {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 6,
        'stroke-width': 2
      });
      defs.appendChild(p);
    }
    const dark = w.config.theme && w.config.theme.mode === 'dark';
    p.firstChild.setAttribute('fill', dark ? 'rgba(148,163,184,0.10)' : 'rgba(100,116,139,0.07)');
    p.lastChild.setAttribute('stroke', ink(isDark(w), e));
    const fill = `url(#${id})`;
    let n = 0;
    root.querySelectorAll('rect.apexcharts-heatmap-rect').forEach(rc => {
      const on = isEmpty(w, rc);
      rc.classList.toggle('wcc-heat-empty', on);
      if (!on) return;
      n++;
      rc.style.fill = fill;
      rc.setAttribute('data-wcc-empty', e.label);
    });
    gl.wccHeatEmpty = {
      label: e.label,
      count: n
    };
    // the legend entry of the never-matching range: hatch swatch, no toggle
    const ranges = w.config.plotOptions.heatmap.colorScale.ranges || [];
    const k = ranges.findIndex(r => r && r.wccEmpty);
    const item = k > -1 && root.querySelector(`.apexcharts-legend-series[rel="${k + 1}"]`);
    if (item) {
      item.classList.add('apexcharts-no-click', 'wcc-legend-empty');
      const mk = item.querySelector('.apexcharts-legend-marker');
      const shapes = mk ? mk.querySelectorAll('path, circle, rect') : [];
      if (shapes.length) shapes.forEach(m => m.setAttribute('fill', fill));else if (mk) mk.style.background = `repeating-linear-gradient(45deg, ${ink(isDark(w), e)} 0 1.5px, transparent 1.5px 4px)`;
    }
  }

  /** data table of a plain heatmap with `empty`: the core table writes '–' for null, this one the label */
  function emptyTable(w) {
    const gl = w.globals;
    const he = gl.wccHeatEmpty;
    const st = w.config.wcc && w.config.wcc.a11y && w.config.wcc.a11y.strings || {};
    const list = gl.series.map((_, i) => i).filter(i => gl.collapsedSeriesIndices.indexOf(i) === -1);
    const f = w.config.tooltip.y && w.config.tooltip.y.formatter;
    const cell = (i, j) => {
      const v = gl.series[i][j];
      if (!finite$h(v)) return he.label;
      const r = typeof f === 'function' ? f(v, {
        seriesIndex: i,
        dataPointIndex: j,
        w
      }) : gl.yLabelFormatters[0](v);
      return String(r);
    };
    const n = Math.max(0, ...list.map(i => gl.series[i].length));
    const rows = [];
    for (let j = 0; j < n; j++) rows.push([String(gl.labels[j] === undefined ? j + 1 : gl.labels[j])].concat(list.map(i => cell(i, j))));
    return {
      head: [st.category || 'Category'].concat(list.map(i => gl.seriesNames[i] || `Series ${i + 1}`)),
      rows
    };
  }

  /*
   * West Coast Charts - default formatters and tooltips of the chart types.
   * All of them are preset defaults: user formatters / tooltip.custom win.
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  const finite$g = v => typeof v === 'number' && isFinite(v);

  // Plugin modules must not call core imports while they load (the types
  // bundle may load before the core binds them, docs/architecture/plugins.md):
  // the preset defaults are collected here and marked on install.
  const DEFAULTS = [];
  const preset = fn => (DEFAULTS.push(fn), fn);

  /** mark the preset default formatters (called by installBase) */
  function markTypeDefaults() {
    DEFAULTS.forEach(_1);
  }

  /** typographic minus (U+2212) for a leading hyphen-minus: '-2.4B' -> '−2.4B' */
  const MINUS = '\u2212';
  function typoMinus(s) {
    if (typeof s !== 'string') return s;
    return s.replace(/(^|[\s(+=:/~≈<>\u2013\u2014[])-(?=[\d.,]|[^\s\d]{1,3}\d)/g, `$1${MINUS}`);
  }

  /** '8786000.5' -> '8,786,000.5' (string or number in, string out) */
  function groupDigits(v) {
    const s = String(v);
    const m = /^([-\u2212]?)(\d+)(\.\d+)?$/.exec(s);
    if (!m) return s;
    const out = m[2].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (m[3] || '');
    if (m[1] && /^[0.]+$/.test(out)) return out;
    return (m[1] ? MINUS : '') + out;
  }
  const COMPACT = {};
  /**
   * compact notation of the locale without a space before the unit
   * (en: 182.7K, 9.8B, −2.4B; numbers below 10 000 stay grouped), minus sign
   * typographic. `decimals` caps the fraction digits (default 1).
   */
  function compactNumber$1(v, opts = {}) {
    if (!finite$g(v)) return v === null || v === undefined ? '' : String(v);
    const dec = finite$g(opts.decimals) ? Math.max(0, Math.min(4, opts.decimals)) : 1;
    const below = finite$g(opts.min) ? opts.min : 1e4;
    if (Math.abs(v) < below) return groupedNumber(v, Math.abs(v) < 10 ? Math.max(dec, 1) : dec);
    const locale = opts.locale || 'en-US';
    const key = locale + '|' + dec;
    let out;
    try {
      if (!COMPACT[key]) COMPACT[key] = new Intl.NumberFormat(locale, {
        notation: 'compact',
        maximumFractionDigits: dec
      });
      out = COMPACT[key].format(v);
    } catch (e) {
      const units = [[1e12, 'T'], [1e9, 'B'], [1e6, 'M'], [1e3, 'k']];
      const u = units.find(([n]) => Math.abs(v) >= n);
      out = u ? String(Math.round(v / u[0] * Math.pow(10, dec)) / Math.pow(10, dec)) + u[1] : String(v);
    }
    // en-style compact units sit tight to the number; one unit set for every
    // type and sample: k (thousand, lower case like the SI prefix), M, B, T
    if (/^en\b/i.test(locale)) out = out.replace(/(\d)\s*([KMBT])$/, (m, d, u) => d + (u === 'K' ? 'k' : u));
    return typoMinus(out);
  }

  /** the chart's locale name for Intl ('en' unless chart.defaultLocale says otherwise) */
  function chartLocale(w) {
    const l = w && w.config && w.config.chart && w.config.chart.defaultLocale;
    return typeof l === 'string' && l ? l : 'en-US';
  }

  /** compact decimals: integers stay integers, others get up to `max` places */
  function groupedNumber(v, max = 2) {
    if (!finite$g(v)) return v === null || v === undefined ? '' : String(v);
    const r = Math.round(v * Math.pow(10, max)) / Math.pow(10, max);
    return groupDigits(String(r === 0 ? 0 : r));
  }
  preset(groupedNumber);
  const GROUPED_TYPES = {
    waterfall: 1,
    histogram: 1,
    dumbbell: 1,
    violin: 1,
    raincloud: 1,
    beeswarm: 1
  };

  /** hook in Formatters.defaultYFormatter: digit grouping (and % for relative histograms) */
  function typeYLabel(w, v) {
    const type = w.config.chart.requestedType;
    const wcc = !!type && (type !== w.config.chart.type || GROUPED_TYPES[type]);
    return wcc ? typoMinus(typeYLabelRaw(w, v)) : v;
  }
  function typeYLabelRaw(w, v) {
    const type = w.config.chart.requestedType;
    if (!GROUPED_TYPES[type]) {
      // other WCC types: grouped digits, compact units from 100 000
      if (!type || type === w.config.chart.type) return v;
      if (typeof v === 'number') {
        if (!finite$g(v)) return v;
        return Math.abs(v) >= 1e5 ? compactNumber$1(v, {
          locale: chartLocale(w)
        }) : groupDigits(String(v));
      }
      const n = parseFloat(v);
      if (!finite$g(n) || typeof v !== 'string' || !/^-?\d+(\.\d+)?$/.test(v)) return v;
      return Math.abs(n) >= 1e5 ? compactNumber$1(n, {
        locale: chartLocale(w)
      }) : groupDigits(v);
    }
    if (type === 'histogram') {
      const ho = w.config.plotOptions.histogram || {};
      const n = parseFloat(v);
      if (!finite$g(n)) return v;
      if (ho.normalize === 'relative') return groupedNumber(n, 1) + '%';
      if (ho.normalize === 'density') return groupedNumber(n, 4);
      return groupedNumber(n, 2);
    }
    if (type === 'violin' || type === 'raincloud' || type === 'beeswarm') {
      const n = parseFloat(v);
      return finite$g(n) ? groupedNumber(n, 2) : v;
    }
    // waterfall / dumbbell: the same rule as every other type, compact from
    // 100 000 (10M, not 10,000,000), so ticks match the compact bar labels
    const n = typeof v === 'number' ? v : parseFloat(v);
    if (finite$g(n) && Math.abs(n) >= 1e5 && (typeof v === 'number' || /^-?\d+(\.\d+)?$/.test(v))) {
      return compactNumber$1(n, {
        locale: chartLocale(w)
      });
    }
    return groupDigits(v);
  }

  // ---------------------------------------------------------------- waterfall
  function wPoint(w, i, j) {
    const s = w.config.series[i];
    const d = s && s.data && s.data[j];
    return d && d.wcc ? d : null;
  }
  function waterfallValue(w, i, j) {
    const d = wPoint(w, i, j);
    return d ? d.wcc.value : null;
  }
  const waterfallLabelFormatter = preset(function (val, opts) {
    const w = opts && opts.w;
    if (!w) return val;
    const v = waterfallValue(w, opts.seriesIndex, opts.dataPointIndex);
    if (v === null || v === undefined) return '';
    const d = wPoint(w, opts.seriesIndex, opts.dataPointIndex);
    if (d && d.wcc.kind === 'empty') return '';
    const userY = w.config.yaxis[0] && w.config.yaxis[0].labels && w.config.yaxis[0].labels.formatter;
    if (typeof userY === 'function') return String(userY(v, opts));
    return groupedNumber(v);
  });
  const KIND_LABEL = {
    positive: 'Increase',
    negative: 'Decrease',
    subtotal: 'Subtotal',
    total: 'Total',
    empty: 'No data'
  };
  const waterfallTooltip = function ({
    seriesIndex,
    dataPointIndex,
    w
  }) {
    const d = wPoint(w, seriesIndex, dataPointIndex);
    if (!d) return '';
    const fmt = tooltipValueFormatter(w, seriesIndex);
    const fmtLevel = v => typeof (w.config.tooltip.y && w.config.tooltip.y.formatter) === 'function' ? fmt(v, dataPointIndex) : groupedNumber(v);
    const value = typeof (w.config.tooltip.y && w.config.tooltip.y.formatter) === 'function' ? fmt(d.wcc.value, dataPointIndex) : (d.wcc.value > 0 && d.wcc.kind === 'positive' ? '+' : '') + groupedNumber(d.wcc.value);
    const color = w.globals.wccWaterfallColors && w.globals.wccWaterfallColors[dataPointIndex] || w.globals.colors[seriesIndex];
    const rows = [{
      color,
      name: KIND_LABEL[d.wcc.kind] || '',
      value
    }];
    if (d.wcc.kind === 'positive' || d.wcc.kind === 'negative') {
      rows.push({
        name: 'Running total',
        value: fmtLevel(d.wcc.level),
        muted: true
      });
    }
    return tooltipHTML(String(d.x), rows);
  };

  // ---------------------------------------------------------------- histogram
  function edgeDecimals(width) {
    if (!(width > 0)) return 0;
    const d = Math.ceil(-Math.log10(width)) + 1;
    return Math.max(0, Math.min(6, d));
  }
  function formatEdge(w, v) {
    const h = w.globals.wccHistogram;
    if (!finite$g(v)) return v;
    const dec = h ? edgeDecimals(h.width) : 2;
    const r = Number(v.toFixed(dec));
    return groupDigits(String(r === 0 ? 0 : r));
  }
  const histogramEdgeFormatter = preset(function (val, ts, opts) {
    const w = opts && opts.w || ts && ts.w;
    const v = typeof val === 'string' ? parseFloat(val) : val;
    if (!w || !finite$g(v)) return val;
    return formatEdge(w, v);
  });
  function histogramValue(w, v) {
    const n = w.config.plotOptions.histogram.normalize;
    if (n === 'relative') return groupedNumber(v, 1) + '%';
    if (n === 'density') return groupedNumber(v, 4);
    return groupedNumber(v);
  }
  const histogramTooltip = function ({
    dataPointIndex,
    w
  }) {
    const h = w.globals.wccHistogram;
    if (!h || !h.edges.length) return '';
    const j = dataPointIndex;
    const a = h.edges[j];
    const b = h.edges[j + 1];
    if (a === undefined || b === undefined) return '';
    const last = j === h.count - 1;
    const title = `[${formatEdge(w, a)}, ${formatEdge(w, b)}${last ? ']' : ')'}`;
    const ty = w.config.tooltip.y;
    const userFmt = ty && !Array.isArray(ty) && typeof ty.formatter === 'function';
    const rows = [];
    w.config.series.forEach((s, i) => {
      if (w.globals.collapsedSeriesIndices.indexOf(i) > -1) return;
      const d = s.data && s.data[j];
      if (!d || !d.wcc) return;
      const v = d.y;
      rows.push({
        color: w.globals.colors[i],
        name: w.globals.seriesNames[i] || (w.config.series.length > 1 ? `Series ${i + 1}` : 'Count'),
        value: userFmt ? String(ty.formatter(v, {
          seriesIndex: i,
          dataPointIndex: j,
          w
        })) : histogramValue(w, v)
      });
      const norm = w.config.plotOptions.histogram.normalize;
      if (norm && norm !== 'count' && !w.config.plotOptions.histogram.cumulative) {
        rows.push({
          name: 'Count',
          value: groupedNumber(d.wcc.count),
          muted: true
        });
      }
    });
    return tooltipHTML(title, rows);
  };

  // ---------------------------------------------------------------- dumbbell
  function dumbbellFormat(w, v, i, j) {
    const o = (w.config.plotOptions.bar.dumbbell || {}).dataLabels || {};
    if (typeof o.formatter === 'function') return String(o.formatter(v, {
      seriesIndex: i,
      dataPointIndex: j,
      w
    }));
    const ty = w.config.tooltip.y;
    if (ty && !Array.isArray(ty) && typeof ty.formatter === 'function') {
      return String(ty.formatter(v, {
        seriesIndex: i,
        dataPointIndex: j,
        w
      }));
    }
    return groupedNumber(v);
  }
  const dumbbellTooltip = function ({
    dataPointIndex,
    w
  }) {
    const j = dataPointIndex;
    const hidden = w.globals.collapsedSeriesIndices || [];
    const rows = [];
    const vals = [];
    let title;
    w.config.series.forEach((s, i) => {
      const d = s.data && s.data[j];
      if (d && title === undefined) title = d.x;
      if (hidden.indexOf(i) > -1 || !d || !d.wcc || !finite$g(d.wcc.value)) return;
      vals.push(d.wcc.value);
      rows.push({
        color: w.globals.colors[i],
        name: w.globals.seriesNames[i],
        value: dumbbellFormat(w, d.wcc.value, i, j)
      });
    });
    if (!rows.length) return '';
    if (vals.length === 2) {
      const diff = vals[1] - vals[0];
      const label = ((w.config.plotOptions.bar.dumbbell || {}).tooltip || {}).differenceLabel;
      rows.push({
        name: label === undefined ? 'Difference' : label,
        value: (diff > 0 ? '+' : '') + dumbbellFormat(w, diff, -1, j),
        muted: true
      });
    }
    return tooltipHTML(title === undefined ? '' : String(title), rows);
  };

  // ---------------------------------------------------------------- violin
  function violinStatsAt(w, i, j) {
    const s = w.config.series[i];
    const d = s && s.data && s.data[j];
    return d && d.wcc && d.wcc.stats ? {
      d,
      st: d.wcc.stats
    } : null;
  }
  function violinFmt(w, v, i, j) {
    const ty = w.config.tooltip.y;
    if (ty && !Array.isArray(ty) && typeof ty.formatter === 'function') {
      return String(ty.formatter(v, {
        seriesIndex: i,
        dataPointIndex: j,
        w
      }));
    }
    return groupedNumber(v, 2);
  }
  const violinTooltip = function ({
    seriesIndex,
    dataPointIndex,
    w
  }) {
    const r = violinStatsAt(w, seriesIndex, dataPointIndex);
    if (!r) return '';
    const {
      d,
      st
    } = r;
    const f = v => violinFmt(w, v, seriesIndex, dataPointIndex);
    const rows = [];
    const name = w.globals.seriesNames[seriesIndex];
    rows.push({
      color: w.globals.colors[seriesIndex],
      name: w.config.series.length > 1 ? name : 'Observations',
      value: st.n ? groupedNumber(st.n) : '–'
    });
    if (st.summary) {
      const [lo, q1, med, q3, hi] = st.summary;
      rows.push({
        name: 'Median',
        value: f(med)
      });
      rows.push({
        name: 'Q1 – Q3',
        value: `${f(q1)} – ${f(q3)}`,
        muted: true
      });
      const tukey = ((w.config.plotOptions.violin || {}).box || {}).whiskers === 'tukey';
      rows.push({
        name: tukey ? 'Whiskers' : 'Min – max',
        value: `${f(lo)} – ${f(hi)}`,
        muted: true
      });
    }
    return tooltipHTML(String(d.x), rows);
  };

  /** beeswarm: the violin summary plus the dot under the pointer */
  const beeswarmTooltip = function ({
    seriesIndex,
    dataPointIndex,
    w
  }) {
    const r = violinStatsAt(w, seriesIndex, dataPointIndex);
    if (!r) return '';
    const {
      d,
      st
    } = r;
    const f = v => violinFmt(w, v, seriesIndex, dataPointIndex);
    const rows = [];
    const hv = w.globals.wccSwarmHover;
    const name = w.globals.seriesNames[seriesIndex];
    if (hv && hv.i === seriesIndex && hv.row === dataPointIndex && finite$g(hv.v)) {
      rows.push({
        color: w.globals.colors[seriesIndex],
        name: w.config.series.length > 1 ? name : 'Value',
        value: f(hv.v)
      });
      rows.push({
        name: 'Observations',
        value: groupedNumber(st.n),
        muted: true
      });
    } else {
      rows.push({
        color: w.globals.colors[seriesIndex],
        name: w.config.series.length > 1 ? name : 'Observations',
        value: st.n ? groupedNumber(st.n) : '–'
      });
    }
    if (st.summary) {
      rows.push({
        name: 'Median',
        value: f(st.summary[2]),
        muted: !!hv
      });
      rows.push({
        name: 'Min – max',
        value: `${f(st.points[0])} – ${f(st.points[st.points.length - 1])}`,
        muted: true
      });
    }
    return tooltipHTML(String(d.x), rows);
  };

  // ---------------------------------------------------------------- slope
  function slopeFmt(w, v, i, j) {
    if (!finite$g(v)) return '–';
    const lo = (w.config.plotOptions.slope || {}).labels || {};
    if (typeof lo.formatter === 'function') return String(lo.formatter(v, {
      seriesIndex: i,
      dataPointIndex: j,
      w
    }));
    const ty = w.config.tooltip && w.config.tooltip.y;
    const yf = Array.isArray(ty) ? ty[i] && ty[i].formatter : ty && ty.formatter;
    if (typeof yf === 'function') return String(yf(v, {
      seriesIndex: i,
      dataPointIndex: j,
      w
    }));
    return groupedNumber(v, 2);
  }
  const slopeCats = w => (w.globals.categoryLabels && w.globals.categoryLabels.length ? w.globals.categoryLabels : w.globals.labels) || [];

  /** change between the first and last period (absolute and relative) */
  function slopeChange(w, i) {
    const s = w.globals.series[i] || [];
    const vals = s.map((v, j) => [v, j]).filter(p => finite$g(p[0]));
    if (vals.length < 2) return null;
    const a = vals[0][0];
    const b = vals[vals.length - 1][0];
    return {
      a,
      b,
      delta: b - a,
      pct: a !== 0 ? (b - a) / Math.abs(a) * 100 : null,
      ja: vals[0][1],
      jb: vals[vals.length - 1][1]
    };
  }
  const slopeTooltip = function ({
    seriesIndex,
    dataPointIndex,
    w
  }) {
    const i = seriesIndex;
    const name = w.globals.seriesNames[i];
    const cats = slopeCats(w);
    const ch = slopeChange(w, i);
    const rows = [];
    const v = w.globals.series[i] && w.globals.series[i][dataPointIndex];
    rows.push({
      color: w.globals.colors[i],
      name: String(cats[dataPointIndex] !== undefined ? cats[dataPointIndex] : dataPointIndex + 1),
      value: slopeFmt(w, v, i, dataPointIndex)
    });
    if (ch) {
      const sign = ch.delta > 0 ? '+' : ch.delta < 0 ? '−' : '±';
      const pct = ch.pct === null ? '' : ` (${sign}${groupedNumber(Math.abs(ch.pct), 1)}%)`;
      rows.push({
        name: `${cats[ch.ja] !== undefined ? cats[ch.ja] : ''} → ${cats[ch.jb] !== undefined ? cats[ch.jb] : ''}`.trim(),
        value: `${sign}${slopeFmt(w, Math.abs(ch.delta), i, ch.jb)}${pct}`,
        muted: true
      });
    }
    return tooltipHTML(String(name), rows);
  };

  // ---------------------------------------------------------------- streamgraph
  function streamFmt(w, v, i, j) {
    if (!finite$g(v)) return '–';
    const ty = w.config.tooltip && w.config.tooltip.y;
    const yf = Array.isArray(ty) ? ty[i] && ty[i].formatter : ty && ty.formatter;
    if (typeof yf === 'function') return String(yf(v, {
      seriesIndex: i,
      dataPointIndex: j,
      w
    }));
    return groupedNumber(v, 2);
  }

  /** readable x of a streamgraph column (categories, dates, numbers) */
  function streamXLabel(w, x, format) {
    const gl = w.globals;
    if (x instanceof Date) x = x.getTime();
    if (w.config.xaxis.type === 'datetime' && typeof x === 'number') {
      try {
        const fmt = format || w.config.tooltip.x && w.config.tooltip.x.format || 'dd MMM yyyy';
        return new _0$1({
          w
        }).formatDate(new Date(x), fmt);
      } catch (e) {
        return new Date(x).toISOString().slice(0, 10);
      }
    }
    const lf = w.config.xaxis.labels && w.config.xaxis.labels.formatter;
    if (typeof x === 'number' && typeof lf === 'function') {
      try {
        const out = lf(x, undefined, {
          w
        });
        if (out !== undefined && out !== null && out !== '') return Array.isArray(out) ? out.join(' ') : String(out);
      } catch (e) {
        // fall through
      }
    }
    if (typeof x === 'number' && gl.categoryLabels && gl.categoryLabels[x - 1] !== undefined) {
      return String(gl.categoryLabels[x - 1]);
    }
    if (typeof x === 'number') return groupedNumber(x, 3).replace(/,/g, x >= 1000 && x < 10000 && Number.isInteger(x) ? '' : ',');
    return String(x);
  }

  /** shared column tooltip: user values top-down as drawn, plus a total */
  const streamTooltip = function ({
    dataPointIndex,
    w
  }) {
    const st = w.globals.wccStreamgraph;
    const j = dataPointIndex;
    if (!st || j < 0 || j >= st.xs.length) return '';
    const rows = st.order.slice().reverse().map(i => ({
      color: w.globals.colors[i],
      name: w.globals.seriesNames[i],
      value: streamFmt(w, st.raw[i][j], i, j)
    }));
    if (st.offset !== 'expand' && rows.length > 1) {
      const total = st.order.reduce((a, i) => a + (finite$g(st.raw[i][j]) ? st.raw[i][j] : 0), 0);
      rows.push({
        name: 'Total',
        value: streamFmt(w, total, -1, j),
        muted: true,
        total: true
      });
    }
    return tooltipHTML(streamXLabel(w, st.xs[j], 'MMM yyyy'), rows);
  };

  // ---------------------------------------------------------------- calendar
  /** the calendar cell behind a heatmap point (series i is a weekday row) */
  function calendarCell(w, i, j) {
    const cal = w.globals.wccCalendar;
    const s = w.config.series[i];
    const d = s && s.data && s.data[j];
    if (!cal || !d || !d.wcc) return null;
    return {
      day: d.wcc.day,
      inRange: d.wcc.inRange,
      v: d.y
    };
  }
  function calendarFmt(w, v, i, j) {
    if (!finite$g(v)) return (emptyOf(w) || {
      label: 'No data'
    }).label;
    const co = w.config.plotOptions.calendar || {};
    if (typeof co.formatter === 'function') return String(co.formatter(v, {
      seriesIndex: i,
      dataPointIndex: j,
      w
    }));
    const ty = w.config.tooltip && w.config.tooltip.y;
    const yf = Array.isArray(ty) ? ty[0] && ty[0].formatter : ty && ty.formatter;
    if (typeof yf === 'function') return String(yf(v, {
      seriesIndex: i,
      dataPointIndex: j,
      w
    }));
    return groupedNumber(v, 2);
  }
  const calendarTooltip = function ({
    seriesIndex,
    dataPointIndex,
    w
  }) {
    const c = calendarCell(w, seriesIndex, dataPointIndex);
    if (!c || !c.inRange) return '';
    const cal = w.globals.wccCalendar;
    const co = w.config.plotOptions.calendar || {};
    const color = w.globals.colors[seriesIndex];
    const rows = [{
      color,
      name: cal.name || 'Value',
      value: calendarFmt(w, c.v, seriesIndex, dataPointIndex)
    }];
    return tooltipHTML(formatDay(c.day, co.monthNames), rows);
  };

  // ---------------------------------------------------------------- a11y
  /** [category, value text] per point, for aria labels and the data table */
  function raceValueFmt(w, v, j) {
    const f = ((w.config.plotOptions.barRace || {}).values || {}).formatter;
    if (typeof f === 'function') {
      try {
        return String(f(v, {
          w,
          dataPointIndex: j
        }));
      } catch (e) {
        // fall through
      }
    }
    return v === 0 ? '0' : compactNumber$1(v, {
      decimals: 2,
      locale: chartLocale(w)
    });
  }

  /**
   * Real numbers behind a type's points (agent/a11y descriptions): the drawn
   * series of these types hold layout values (stacking offsets, kernel-density
   * positions, weekday rows). val: the point's value, ext: the extremes it
   * covers (whole distribution), fmt: the type's own number formatter.
   */
  const violinNums = {
    val: (w, i, j) => {
      const r = violinStatsAt(w, i, j);
      return r && r.st.summary && finite$g(r.st.summary[2]) ? r.st.summary[2] : null;
    },
    ext: (w, i, j) => {
      const r = violinStatsAt(w, i, j);
      if (!r) return null;
      const {
        points: p,
        summary: m
      } = r.st;
      return p && p.length ? [p[0], p[p.length - 1]] : m ? [m[0], m[4]] : null;
    },
    fmt: violinFmt
  };
  const NUMBERS = {
    // the signed amounts (start, changes, totals), not the drawn bar spans
    waterfall: {
      val: (w, i, j) => {
        const d = wPoint(w, i, j);
        return d && d.wcc.kind !== 'empty' && finite$g(d.wcc.value) ? d.wcc.value : null;
      },
      fmt: (w, v) => groupedNumber(v)
    },
    violin: violinNums,
    raincloud: violinNums,
    beeswarm: violinNums,
    streamgraph: {
      val: (w, i, j) => {
        const st = w.globals.wccStreamgraph;
        const v = st && st.raw && st.raw[i] ? st.raw[i][j] : null;
        return finite$g(v) ? v : null;
      },
      fmt: streamFmt
    },
    calendar: {
      val: (w, i, j) => {
        const c = calendarCell(w, i, j);
        return c && c.inRange && finite$g(c.v) ? c.v : null;
      },
      fmt: calendarFmt
    }
  };
  const DESCRIBERS = {
    calendar(w, i, j) {
      const c = calendarCell(w, i, j);
      if (!c) return [String(j + 1), '–'];
      if (!c.inRange) return [isoDay(c.day), 'outside the range'];
      return [isoDay(c.day), calendarFmt(w, c.v, i, j)];
    },
    streamgraph(w, i, j) {
      const st = w.globals.wccStreamgraph;
      if (!st || !st.xs || j >= st.xs.length) return [String(j + 1), '–'];
      // ISO 8601 as the core text: months when every x is a 1st of a month, else days
      return [streamXLabel(w, st.xs[j], st.xs.every(x => new Date(x).getUTCDate() === 1) ? 'yyyy-MM' : 'yyyy-MM-dd'), streamFmt(w, st.raw[i] ? st.raw[i][j] : null, i, j)];
    },
    barRace(w, i, j) {
      const d = w.config.series[0] && w.config.series[0].data || [];
      const p = d[j];
      if (!p) return [String(j + 1), '–'];
      if (!finite$g(p.y)) return [String(p.x), 'no value'];
      return [String(p.x), `${raceValueFmt(w, p.y, j)}, rank ${j + 1} of ${d.length}`];
    },
    raincloud: (w, i, j) => DESCRIBERS.violin(w, i, j),
    beeswarm: (w, i, j) => DESCRIBERS.violin(w, i, j),
    slope(w, i, j) {
      const cats = slopeCats(w);
      const v = w.globals.series[i] && w.globals.series[i][j];
      let txt = slopeFmt(w, v, i, j);
      const ch = slopeChange(w, i);
      if (ch && j === ch.jb) {
        const sign = ch.delta > 0 ? 'up' : ch.delta < 0 ? 'down' : 'unchanged';
        txt += `, ${sign}${ch.delta ? ' ' + slopeFmt(w, Math.abs(ch.delta), i, j) : ''}${ch.pct !== null && ch.delta ? ` (${groupedNumber(Math.abs(ch.pct), 1)}%)` : ''} since ${cats[ch.ja] !== undefined ? cats[ch.ja] : 'start'}`;
      }
      return [cats[j] === undefined ? String(j + 1) : String(cats[j]), txt];
    },
    waterfall(w, i, j) {
      const d = wPoint(w, i, j);
      if (!d) return [String(j + 1), '–'];
      const k = KIND_LABEL[d.wcc.kind] || '';
      const v = d.wcc.kind === 'empty' ? '–' : groupedNumber(d.wcc.value);
      const extra = d.wcc.kind === 'positive' || d.wcc.kind === 'negative' ? `, running total ${groupedNumber(d.wcc.level)}` : '';
      return [String(d.x), `${k} ${v}${extra}`.trim()];
    },
    dumbbell(w, i, j) {
      const s = w.config.series[i];
      const d = s && s.data && s.data[j];
      if (!d || !d.wcc) return [String(j + 1), '–'];
      return [String(d.x), finite$g(d.wcc.value) ? dumbbellFormat(w, d.wcc.value, i, j) : '–'];
    },
    violin(w, i, j) {
      const r = violinStatsAt(w, i, j);
      const s = w.config.series[i];
      const d = s && s.data && s.data[j];
      if (!r) return [d ? String(d.x) : String(j + 1), '–'];
      const {
        st
      } = r;
      const f = v => violinFmt(w, v, i, j);
      if (!st.summary) return [String(r.d.x), `${st.n} observations`];
      const [lo, q1, med, q3, hi] = st.summary;
      return [String(r.d.x), `median ${f(med)}, quartiles ${f(q1)} to ${f(q3)}, range ${f(lo)} to ${f(hi)}` + (st.n ? `, ${st.n} observations` : '')];
    },
    histogram(w, i, j) {
      const h = w.globals.wccHistogram;
      const s = w.config.series[i];
      const d = s && s.data && s.data[j];
      if (!h || !d || !d.wcc) return [String(j + 1), '–'];
      const last = j === h.count - 1;
      const range = `${formatEdge(w, d.wcc.from)} to ${formatEdge(w, d.wcc.to)}${last ? '' : ' (exclusive)'}`;
      return [range, histogramValue(w, d.y)];
    }
  };

  /*
   * West Coast Charts - unit / waffle layouts (docs/spec/02-chart-types/unit-waffle.md).
   * Pure geometry: every layout takes the marks [{ id, cat, ... }] and a
   * rect { x, y, width, height } and returns { points: [{ id, x, y, r }],
   * clusters: [{ cat, cx, cy, r, top, bottom }], size } - it knows nothing
   * about drawing or animation.
   * The shapes kit (outlines marks can fill) is WCC's own artwork: every
   * outline is generated from simple geometry here (source 'original').
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  const GOLDEN = Math.PI * (3 - Math.sqrt(5)); // 137.508 deg
  const finite$f = v => typeof v === 'number' && isFinite(v);

  // ---------------------------------------------------------------- counts
  /** largest-remainder allocation of `total` over `weights` (sum exact) */
  function largestRemainder(weights, total) {
    const w = weights.map(v => finite$f(v) && v > 0 ? v : 0);
    const sum = w.reduce((a, b) => a + b, 0);
    if (!(sum > 0) || !(total > 0)) return w.map(() => 0);
    const raw = w.map(v => v / sum * total);
    const out = raw.map(Math.floor);
    let left = Math.round(total - out.reduce((a, b) => a + b, 0));
    raw.map((v, i) => ({
      i,
      r: v - Math.floor(v)
    })).sort((a, b) => b.r - a.r || a.i - b.i).forEach(({
      i
    }) => {
      if (left > 0 && w[i] > 0) {
        out[i]++;
        left--;
      }
    });
    return out;
  }

  // ---------------------------------------------------------------- phyllotaxis
  /** sunflower spiral offsets for n marks of radius r (centre first) */
  function phyllotaxis(n, r, spacing = 1.05) {
    const c = 1.9 * r * spacing;
    const pts = [];
    for (let k = 0; k < n; k++) {
      const rho = c * Math.sqrt(k + 0.5);
      const th = k * GOLDEN;
      pts.push({
        x: rho * Math.cos(th),
        y: rho * Math.sin(th)
      });
    }
    return {
      pts,
      radius: n ? c * Math.sqrt(n - 0.5) + r : 0
    };
  }
  const clusterRadius = (n, r, spacing) => n ? 1.9 * r * spacing * Math.sqrt(Math.max(0, n - 0.5)) + r : 0;
  function byCat(marks, ncat) {
    const groups = Array.from({
      length: ncat
    }, () => []);
    marks.forEach(m => groups[m.cat] && groups[m.cat].push(m));
    return groups;
  }

  // ---------------------------------------------------------------- grouped
  function grouped(marks, rect, o) {
    const ncat = o.categories.length;
    const groups = byCat(marks, ncat);
    const sp = o.spacing || 1.05;
    const labelH = o.labelSpace || 0;
    const gap = 14;
    const live = groups.map((g, i) => i).filter(i => groups[i].length > 0);
    let best = null;
    // try 1..n rows of clusters; keep the arrangement with the biggest marks
    for (let rows = 1; rows <= Math.max(1, live.length); rows++) {
      const perRow = Math.ceil(live.length / rows);
      const rowsOf = [];
      for (let k = 0; k < live.length; k += perRow) rowsOf.push(live.slice(k, k + perRow));
      // per unit mark radius: cluster radius = r * (1.9 sp sqrt(n) + 1)
      const unit = i => clusterRadius(groups[i].length, 1, sp);
      let r = Infinity;
      rowsOf.forEach(row => {
        const wsum = row.reduce((a, i) => a + 2 * unit(i), 0);
        r = Math.min(r, (rect.width - gap * (row.length - 1)) / wsum);
      });
      const hsum = rowsOf.reduce((a, row) => a + 2 * Math.max(...row.map(unit)), 0);
      r = Math.min(r, (rect.height - rows * labelH - gap * (rows - 1)) / hsum);
      if (o.size && finite$f(o.size)) r = Math.min(r, o.size);
      if (!best || r > best.r + 1e-9) best = {
        r,
        rowsOf
      };
    }
    const r = Math.max(0.5, Math.min(best ? best.r : 1, o.maxSize || 40));
    const points = [];
    const clusters = [];
    if (!best) return {
      points,
      clusters,
      size: r
    };
    const heights = best.rowsOf.map(row => 2 * Math.max(...row.map(i => clusterRadius(groups[i].length, r, sp))));
    const totalH = heights.reduce((a, b) => a + b, 0) + best.rowsOf.length * labelH + gap * (best.rowsOf.length - 1);
    let y = rect.y + (rect.height - totalH) / 2;
    best.rowsOf.forEach((row, ri) => {
      const radii = row.map(i => clusterRadius(groups[i].length, r, sp));
      const free = rect.width - radii.reduce((a, b) => a + 2 * b, 0);
      const g = row.length > 1 ? Math.min(free / (row.length - 1), Math.max(gap, free / row.length)) : 0;
      let x = rect.x + (rect.width - (radii.reduce((a, b) => a + 2 * b, 0) + g * (row.length - 1))) / 2;
      const top = y + (o.labelPosition === 'bottom' ? 0 : labelH);
      const cy = top + heights[ri] / 2;
      row.forEach((i, k) => {
        const R = radii[k];
        const cx = x + R;
        const ph = phyllotaxis(groups[i].length, r, sp);
        groups[i].forEach((m, j) => points.push({
          id: m.id,
          x: cx + ph.pts[j].x,
          y: cy + ph.pts[j].y,
          r
        }));
        clusters.push({
          cat: i,
          cx,
          cy,
          r: R,
          top: cy - R,
          bottom: cy + R
        });
        x += 2 * R + g;
      });
      y += heights[ri] + labelH + gap;
    });
    return {
      points,
      clusters,
      size: r
    };
  }

  // ---------------------------------------------------------------- packed
  function packed$1(marks, rect, o) {
    const sp = o.spacing || 1.05;
    let list = marks.slice();
    if (o.sortByGroup !== false) {
      const counts = {};
      list.forEach(m => counts[m.cat] = (counts[m.cat] || 0) + 1);
      list.sort((a, b) => counts[a.cat] - counts[b.cat] || a.cat - b.cat || a.k - b.k);
    }
    const n = list.length;
    let r = Math.min(rect.width, rect.height) / 2 / clusterRadius(Math.max(1, n), 1, sp);
    if (o.size && finite$f(o.size)) r = Math.min(r, o.size);
    r = Math.max(0.5, Math.min(r, o.maxSize || 40));
    const ph = phyllotaxis(n, r, sp);
    const cx = rect.x + rect.width / 2;
    const cy = rect.y + rect.height / 2;
    const points = list.map((m, k) => ({
      id: m.id,
      x: cx + ph.pts[k].x,
      y: cy + ph.pts[k].y,
      r
    }));
    const R = clusterRadius(n, r, sp);
    return {
      points,
      clusters: [{
        cat: -1,
        cx,
        cy,
        r: R,
        top: cy - R,
        bottom: cy + R
      }],
      size: r
    };
  }

  // ---------------------------------------------------------------- columns
  function columns(marks, rect, o) {
    const ncat = o.categories.length;
    const groups = byCat(marks, ncat);
    const labelH = o.labelSpace || 0;
    const slot = rect.width / Math.max(1, ncat);
    const H = rect.height - labelH;
    const maxN = Math.max(1, ...groups.map(g => g.length));
    // fit: per column `per` dots a row; the tallest column fills the height
    let best = {
      r: 0,
      per: 1
    };
    for (let per = 1; per <= 60; per++) {
      const r = Math.min(slot * 0.72 / (2 * per), H / (2 * Math.ceil(maxN / per)));
      if (r > best.r) best = {
        r,
        per
      };
    }
    let r = best.r * 0.92;
    const fixed = o.columns && finite$f(o.columns.size) ? o.columns.size : null;
    if (fixed) r = fixed / 2;else if (o.size && finite$f(o.size)) r = Math.min(r, o.size);
    r = Math.max(0.5, Math.min(r, o.maxSize || 40));
    const per = fixed ? Math.max(1, Math.floor(slot * 0.72 / (2 * r))) : best.per;
    const pitch = 2 * r / 0.92;
    const points = [];
    const clusters = [];
    const bottom = rect.y + rect.height - (o.labelPosition === 'top' ? 0 : labelH);
    groups.forEach((g, i) => {
      const cx = rect.x + slot * (i + 0.5);
      const x0 = cx - (per - 1) * pitch / 2;
      g.forEach((m, k) => {
        const row = Math.floor(k / per);
        const col = k % per;
        points.push({
          id: m.id,
          x: x0 + col * pitch,
          y: bottom - r - row * pitch,
          r
        });
      });
      const rows = Math.ceil(g.length / per);
      clusters.push({
        cat: i,
        cx,
        cy: bottom - rows * pitch / 2,
        r: per * pitch / 2,
        top: bottom - rows * pitch,
        bottom
      });
    });
    return {
      points,
      clusters,
      size: r
    };
  }

  // ---------------------------------------------------------------- grid (waffle)
  function grid(marks, rect, o) {
    const go = o.grid || {};
    const C = Math.max(1, Math.round(go.columns || 10));
    const n = marks.length;
    const cells = Math.max(n, finite$f(go.total) && go.total > 0 ? Math.round(go.total) : n);
    const rows = Math.max(1, Math.ceil(cells / C));
    const pitch = Math.min(rect.width / C, rect.height / rows);
    const s = pitch * 0.86;
    const x0 = rect.x + (rect.width - pitch * C) / 2;
    const y0 = rect.y + (rect.height - pitch * rows) / 2;
    const fromTop = go.fillFrom === 'top';
    const pos = k => {
      const row = Math.floor(k / C);
      const col = k % C;
      const ry = fromTop ? row : rows - 1 - row;
      return {
        x: x0 + (col + 0.5) * pitch,
        y: y0 + (ry + 0.5) * pitch
      };
    };
    const points = marks.map((m, k) => ({
      id: m.id,
      ...pos(k),
      r: s / 2
    }));
    const track = [];
    for (let k = n; k < cells; k++) track.push({
      id: `track:${k}`,
      ...pos(k),
      r: s / 2
    });
    return {
      points,
      clusters: [{
        cat: -1,
        cx: rect.x + rect.width / 2,
        cy: rect.y + rect.height / 2,
        r: 0,
        top: y0,
        bottom: y0 + rows * pitch
      }],
      track,
      size: s / 2
    };
  }

  /** grid.split: one mini waffle per category, value / max of `total` cells */
  function splitGrid(marks, rect, o) {
    const go = o.grid || {};
    const ncat = o.categories.length;
    const groups = byCat(marks, ncat);
    const total = finite$f(go.total) && go.total > 0 ? Math.round(go.total) : 100;
    const C = Math.max(1, Math.round(go.columns || 10));
    const rows = Math.ceil(total / C);
    const labelH = o.labelSpace || 0;
    const tiles = Math.max(1, ncat);
    let tc = finite$f(go.tileColumns) && go.tileColumns > 0 ? Math.round(go.tileColumns) : 0;
    if (!tc) {
      // near-square tiles: pick the column count with the largest cells
      let best = 0;
      for (let k = 1; k <= tiles; k++) {
        const tr = Math.ceil(tiles / k);
        const p = Math.min(rect.width / k * 0.86 / C, (rect.height - tr * labelH) / tr * 0.86 / rows);
        if (p > best) {
          best = p;
          tc = k;
        }
      }
    }
    const tr = Math.ceil(tiles / tc);
    const tileW = rect.width / tc;
    const tileH = rect.height / tr;
    const pitch = Math.min(tileW * 0.86 / C, (tileH - labelH) * 0.9 / rows);
    const s = pitch * 0.84;
    const points = [];
    const track = [];
    const clusters = [];
    const max = finite$f(go.max) && go.max > 0 ? go.max : Math.max(1, ...o.values);
    groups.forEach((g, i) => {
      const tx = rect.x + i % tc * tileW;
      const ty = rect.y + Math.floor(i / tc) * tileH;
      const gx = tx + (tileW - C * pitch) / 2;
      const top = ty + (tileH - labelH - rows * pitch) / 2 + (o.labelPosition === 'bottom' ? 0 : labelH);
      const pos = k => {
        const row = Math.floor(k / C);
        const col = k % C;
        const ry = go.fillFrom === 'top' ? row : rows - 1 - row;
        return {
          x: gx + (col + 0.5) * pitch,
          y: top + (ry + 0.5) * pitch
        };
      };
      const filled = Math.max(0, Math.min(total, Math.round((o.values[i] || 0) / max * total)));
      g.forEach((m, k) => {
        if (k < filled) points.push({
          id: m.id,
          ...pos(k),
          r: s / 2
        });else points.push({
          id: m.id,
          ...pos(Math.min(k, total - 1)),
          r: 0
        });
      });
      for (let k = Math.min(g.length, filled); k < total; k++) track.push({
        id: `track:${i}:${k}`,
        ...pos(k),
        r: s / 2
      });
      clusters.push({
        cat: i,
        cx: tx + tileW / 2,
        cy: top + rows * pitch / 2,
        r: C * pitch / 2,
        top,
        bottom: top + rows * pitch
      });
    });
    return {
      points,
      clusters,
      track,
      size: s / 2
    };
  }

  // ---------------------------------------------------------------- arc (parliament)
  const rad = deg => deg * Math.PI / 180;
  /** Fit a measured two-line label inside the empty upper semicircle. */
  function fitArcLabelBox(box, cx, cy, inner) {
    const {
      x,
      y,
      width: W,
      height: H
    } = box;
    const R = inner - 2;
    const B = 4;
    if (![x, y, W, H, cx, cy, R].every(finite$f) || !(W > 0 && H > 0 && R > B)) return null;
    const corners = [[x, y], [x + W, y], [x, y + H], [x + W, y + H]];
    if (corners.every(([px, py]) => py <= cy - B && Math.hypot(px - cx, py - cy) <= R)) return null;
    const A = W * W / 4 + H * H;
    const b = 2 * B * H;
    const k = Math.min(1, 2 * (R * R - B * B) / (Math.sqrt(b * b + 4 * A * (R * R - B * B)) + b));
    return {
      k,
      x: cx - k * (x + W / 2),
      y: cy - B - k * (y + H)
    };
  }
  function arc(marks, rect, o) {
    const ao = o.arc || {};
    const a0 = rad(finite$f(ao.startAngle) ? ao.startAngle : -90);
    const a1 = rad(finite$f(ao.endAngle) ? ao.endAngle : 90);
    const ratio = finite$f(ao.innerRadiusRatio) ? Math.max(0.05, Math.min(0.95, ao.innerRadiusRatio)) : 0.4;
    const n = marks.length;
    // bounding box of the sector (unit radius) to fit the rect
    const xs = [0];
    const ys = [0];
    const probe = [a0, a1];
    for (let k = -4; k <= 4; k++) {
      const a = k * Math.PI / 2;
      if (a > a0 && a < a1) probe.push(a);
    }
    probe.forEach(a => {
      xs.push(Math.sin(a));
      ys.push(-Math.cos(a));
    });
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);
    const R = Math.min(rect.width / (maxX - minX || 1), rect.height / (maxY - minY || 1)) * 0.98;
    const cx = rect.x + rect.width / 2 - (minX + maxX) / 2 * R;
    const cy = rect.y + rect.height / 2 - (minY + maxY) / 2 * R;
    const r0 = R * ratio;
    const sweep = a1 - a0;
    // rows: the count whose seat pitch matches the row pitch best
    let rows = ao.rows && ao.rows !== 'auto' ? Math.max(1, Math.round(ao.rows)) : 0;
    const seatsFor = k => {
      const pitch = (R - r0) / k;
      let sum = 0;
      for (let j = 0; j < k; j++) sum += Math.floor(sweep * (r0 + pitch * (j + 0.5)) / pitch);
      return sum;
    };
    if (!rows) {
      rows = 1;
      while (rows < 60 && seatsFor(rows) < n) rows++;
    }
    const pitch = (R - r0) / rows;
    const radii = Array.from({
      length: rows
    }, (_, j) => r0 + pitch * (j + 0.5));
    const lens = radii.map(rr => rr * sweep);
    const L = lens.reduce((a, b) => a + b, 0);
    const per = largestRemainder(lens, n);
    const seats = [];
    radii.forEach((rr, j) => {
      const m = per[j];
      for (let k = 0; k < m; k++) {
        const a = m === 1 ? (a0 + a1) / 2 : a0 + sweep * k / (m - 1);
        seats.push({
          a,
          rr
        });
      }
    });
    // wedges: categories in order sweep from start to end angle
    seats.sort((p, q) => p.a - q.a || p.rr - q.rr);
    const maxSeat = Math.min(pitch, L / Math.max(1, n) || pitch) * 0.42;
    const r = Math.max(0.5, Math.min(maxSeat, o.size && finite$f(o.size) ? o.size : Infinity, o.maxSize || 40));
    const points = marks.map((m, k) => {
      const s = seats[k] || {
        a: (a0 + a1) / 2,
        rr: r0
      };
      return {
        id: m.id,
        x: cx + s.rr * Math.sin(s.a),
        y: cy - s.rr * Math.cos(s.a),
        r
      };
    });
    return {
      points,
      clusters: [{
        cat: -1,
        cx,
        cy,
        r: R,
        top: cy - R,
        bottom: cy,
        inner: r0
      }],
      size: r
    };
  }

  // ---------------------------------------------------------------- shapes kit
  /*
   * An outline is a polygon in a unit box (0..1). Marks fill it on a lattice
   * whose pitch is found by bisection so that at least n lattice points fall
   * inside; then n of them are taken in the outline's fill order.
   */
  function pointInPoly(x, y, poly) {
    let inside = false;
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      const [xi, yi] = poly[i];
      const [xj, yj] = poly[j];
      if (yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi || 1e-12) + xi) inside = !inside;
    }
    return inside;
  }
  function insideAll(x, y, polys) {
    // even-odd over all rings (holes)
    let k = 0;
    polys.forEach(p => pointInPoly(x, y, p) && k++);
    return k % 2 === 1;
  }
  const ORDERS = {
    rows: (a, b) => a.y - b.y || a.x - b.x,
    rowsUp: (a, b) => b.y - a.y || a.x - b.x,
    cols: (a, b) => a.x - b.x || b.y - a.y,
    colsRev: (a, b) => b.x - a.x || b.y - a.y,
    centerOut: (a, b, c) => Math.hypot(a.x - c.x, a.y - c.y) - Math.hypot(b.x - c.x, b.y - c.y) || a.y - b.y,
    centerIn: (a, b, c) => Math.hypot(b.x - c.x, b.y - c.y) - Math.hypot(a.x - c.x, a.y - c.y) || a.y - b.y
  };
  function fillOutline(shape, n, rect) {
    var _shape$cx, _shape$cy;
    const polys = shape.rings;
    const aspect = shape.aspect || 1; // width / height of the outline box
    let w = rect.width;
    let h = w / aspect;
    if (h > rect.height) {
      h = rect.height;
      w = h * aspect;
    }
    const ox = rect.x + (rect.width - w) / 2;
    const oy = rect.y + (rect.height - h) / 2;
    const lattice = p => {
      const pts = [];
      const rowH = p * 0.866; // hexagonal rows
      for (let y = rowH / 2, row = 0; y < h; y += rowH, row++) {
        for (let x = row % 2 ? p : p / 2; x < w; x += p) {
          if (insideAll(x / w, y / h, polys)) pts.push({
            x: ox + x,
            y: oy + y
          });
        }
      }
      return pts;
    };
    if (n <= 0) return {
      points: [],
      size: 0,
      box: {
        x: ox,
        y: oy,
        width: w,
        height: h
      }
    };
    let lo = 0.5;
    let hi = Math.max(w, h);
    for (let it = 0; it < 28; it++) {
      const mid = (lo + hi) / 2;
      if (lattice(mid).length >= n) lo = mid;else hi = mid;
    }
    let pts = lattice(lo);
    const c = {
      x: ox + w * ((_shape$cx = shape.cx) !== null && _shape$cx !== void 0 ? _shape$cx : 0.5),
      y: oy + h * ((_shape$cy = shape.cy) !== null && _shape$cy !== void 0 ? _shape$cy : 0.5)
    };
    const cmp = ORDERS[shape.order] || ORDERS.rows;
    pts = pts.sort((a, b) => cmp(a, b, c)).slice(0, n);
    return {
      points: pts,
      size: lo * 0.42,
      box: {
        x: ox,
        y: oy,
        width: w,
        height: h
      }
    };
  }
  const SHAPES$1 = {};
  function polyCircle(cx, cy, r, steps = 72, start = 0) {
    return Array.from({
      length: steps
    }, (_, k) => {
      const a = start + k / steps * Math.PI * 2;
      return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
    });
  }
  function heartPoly(steps = 120) {
    // parametric heart, normalised into the unit box
    const raw = Array.from({
      length: steps
    }, (_, k) => {
      const t = k / steps * Math.PI * 2;
      return [16 * Math.pow(Math.sin(t), 3), -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t))];
    });
    const xs = raw.map(p => p[0]);
    const ys = raw.map(p => p[1]);
    const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)];
    return raw.map(([x, y]) => [(x - x0) / (x1 - x0), (y - y0) / (y1 - y0)]);
  }
  function starPoly(points = 5, inner = 0.45) {
    const out = [];
    for (let k = 0; k < points * 2; k++) {
      const a = -Math.PI / 2 + k * Math.PI / points;
      const r = k % 2 ? inner * 0.5 : 0.5;
      out.push([0.5 + r * Math.cos(a), 0.52 + r * Math.sin(a)]);
    }
    return out;
  }
  function dropPoly(steps = 96) {
    // teardrop: round bottom, cusp on top
    const pts = [];
    for (let k = 0; k < steps; k++) {
      const t = k / steps * Math.PI * 2;
      pts.push([0.5 + 0.5 * Math.sin(t) * Math.pow(Math.sin(t / 2), 1.2), 0.5 - 0.5 * Math.cos(t)]);
    }
    return pts;
  }
  function define(name, category, kind, rings, extra = {}) {
    const base = {
      name,
      category,
      kind,
      rings,
      source: 'original',
      minUnits: extra.minUnits || 12,
      aspect: extra.aspect || 1,
      order: extra.order || 'rows',
      cx: extra.cx,
      cy: extra.cy
    };
    SHAPES$1[name] = makeShape(base);
    return SHAPES$1[name];
  }
  function makeShape(meta) {
    const shape = {
      ...meta,
      shape: {
        name: meta.name,
        category: meta.category,
        kind: meta.kind,
        minUnits: meta.minUnits,
        order: meta.order,
        source: meta.source
      },
      with(opts) {
        return makeShape({
          ...meta,
          ...(opts || {})
        });
      },
      outlined(thickness = 0.16) {
        // hollow variant: the outline minus an inset copy (even-odd ring)
        const inset = meta.rings.map(ring => {
          const cx = ring.reduce((a, p) => a + p[0], 0) / ring.length;
          const cy = ring.reduce((a, p) => a + p[1], 0) / ring.length;
          return ring.map(([x, y]) => [cx + (x - cx) * (1 - thickness), cy + (y - cy) * (1 - thickness)]);
        });
        return makeShape({
          ...meta,
          name: meta.name + '-outlined',
          kind: 'stroke',
          rings: meta.rings.concat(inset)
        });
      },
      fill(n, rect) {
        return fillOutline(shape, n, rect);
      },
      isUnitShape: true
    };
    return shape;
  }

  /** user outline: polygon(s) in any coordinates, normalised to a unit box */
  function shapeFrom(rings, meta = {}) {
    const list = Array.isArray(rings[0][0]) ? rings : [rings];
    const all = list.flat();
    const xs = all.map(p => p[0]);
    const ys = all.map(p => p[1]);
    const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)];
    const sw = x1 - x0 || 1;
    const sh = y1 - y0 || 1;
    const norm = list.map(ring => ring.map(([x, y]) => [(x - x0) / sw, (y - y0) / sh]));
    return makeShape({
      name: meta.name || 'custom',
      category: meta.category || 'custom',
      kind: 'silhouette',
      rings: norm,
      source: 'user',
      minUnits: meta.minUnits || 1,
      aspect: sw / sh,
      order: meta.order || 'rows'
    });
  }
  define('circle', 'geometric', 'silhouette', [polyCircle(0.5, 0.5, 0.5)], {
    order: 'centerOut'
  });
  define('globe', 'generated', 'generated', [polyCircle(0.5, 0.5, 0.5), polyCircle(0.5, 0.5, 0.32)], {
    order: 'rows'
  });
  define('target', 'generated', 'generated', [polyCircle(0.5, 0.5, 0.5), polyCircle(0.5, 0.5, 0.36), polyCircle(0.5, 0.5, 0.22)], {
    order: 'centerOut'
  });
  define('heart', 'symbol', 'silhouette', [heartPoly()], {
    aspect: 1.1,
    order: 'rowsUp'
  });
  define('star', 'symbol', 'silhouette', [starPoly()], {
    order: 'centerOut',
    minUnits: 20
  });
  define('drop', 'nature', 'silhouette', [dropPoly()], {
    aspect: 0.8,
    order: 'rowsUp'
  });
  define('diamond', 'geometric', 'silhouette', [[[0.5, 0], [1, 0.5], [0.5, 1], [0, 0.5]]], {
    order: 'centerOut'
  });
  define('pyramid', 'generated', 'generated', [[[0.5, 0], [1, 1], [0, 1]]], {
    aspect: 1.15,
    order: 'rowsUp'
  });
  define('house', 'building', 'silhouette', [[[0.5, 0], [1, 0.45], [0.88, 0.45], [0.88, 1], [0.12, 1], [0.12, 0.45], [0, 0.45]]], {
    order: 'rowsUp'
  });
  define('arrow', 'symbol', 'silhouette', [[[0, 0.32], [0.58, 0.32], [0.58, 0.08], [1, 0.5], [0.58, 0.92], [0.58, 0.68], [0, 0.68]]], {
    aspect: 1.6,
    order: 'cols'
  });
  define('cross', 'symbol', 'silhouette', [[[0.35, 0], [0.65, 0], [0.65, 0.35], [1, 0.35], [1, 0.65], [0.65, 0.65], [0.65, 1], [0.35, 1], [0.35, 0.65], [0, 0.65], [0, 0.35], [0.35, 0.35]]], {
    order: 'centerOut'
  });
  define('shield', 'symbol', 'silhouette', [[[0.5, 0], [1, 0.14], [0.95, 0.55], [0.5, 1], [0.05, 0.55], [0, 0.14]]], {
    aspect: 0.85,
    order: 'rowsUp'
  });
  define('rocket', 'transport', 'silhouette', [[[0.5, 0], [0.68, 0.2], [0.7, 0.62], [0.92, 0.82], [0.92, 1], [0.66, 0.88], [0.34, 0.88], [0.08, 1], [0.08, 0.82], [0.3, 0.62], [0.32, 0.2]]], {
    aspect: 0.6,
    order: 'rowsUp',
    minUnits: 30
  });
  define('plane', 'transport', 'silhouette', [[[0.5, 0], [0.56, 0.08], [0.57, 0.36], [1, 0.56], [1, 0.64], [0.57, 0.54], [0.56, 0.82], [0.7, 0.94], [0.7, 1], [0.5, 0.95], [0.3, 1], [0.3, 0.94], [0.44, 0.82], [0.43, 0.54], [0, 0.64], [0, 0.56], [0.43, 0.36], [0.44, 0.08]]], {
    aspect: 0.9,
    order: 'rows',
    minUnits: 60
  });
  define('tree', 'nature', 'silhouette', [[[0.5, 0], [0.85, 0.4], [0.7, 0.4], [0.95, 0.72], [0.58, 0.72], [0.58, 1], [0.42, 1], [0.42, 0.72], [0.05, 0.72], [0.3, 0.4], [0.15, 0.4]]], {
    aspect: 0.8,
    order: 'rowsUp',
    minUnits: 20
  });
  define('battery', 'device', 'silhouette', [[[0, 0.1], [0.88, 0.1], [0.88, 0.32], [1, 0.32], [1, 0.68], [0.88, 0.68], [0.88, 0.9], [0, 0.9]]], {
    aspect: 1.8,
    order: 'cols'
  });
  define('bolt', 'symbol', 'silhouette', [[[0.62, 0], [0.1, 0.58], [0.46, 0.58], [0.36, 1], [0.9, 0.4], [0.54, 0.4]]], {
    aspect: 0.65,
    order: 'rowsUp',
    minUnits: 20
  });
  define('person', 'people', 'silhouette', [polyCircle(0.5, 0.15, 0.15), [[0.16, 0.34], [0.84, 0.34], [0.96, 0.68], [0.76, 0.68], [0.7, 1], [0.3, 1], [0.24, 0.68], [0.04, 0.68]]], {
    aspect: 0.55,
    order: 'rowsUp',
    minUnits: 20
  });
  const unitShapes = SHAPES$1;

  // shapes passed by reference in options are swapped for a name before the
  // options are merged (deep merges do not keep their methods)
  const REFS = {};
  function shapeRef(name) {
    return REFS[name] || null;
  }

  // ---------------------------------------------------------------- pictogram marks
  /** registered pictogram marks: { path, viewBox: [x, y, w, h], fillRule } */
  const MARKS = {
    // simple person glyph (head + body), WCC original
    person: {
      path: 'M12 2.2a3.3 3.3 0 1 1 0 6.6a3.3 3.3 0 0 1 0-6.6ZM7.4 10.4h9.2a2 2 0 0 1 2 2v5.2a1.1 1.1 0 0 1-2.2 0v-4.1h-.9v8.6a1.3 1.3 0 0 1-2.6 0v-5h-1.8v5a1.3 1.3 0 0 1-2.6 0v-8.6h-.9v4.1a1.1 1.1 0 0 1-2.2 0v-5.2a2 2 0 0 1 2-2Z',
      viewBox: [0, 0, 24, 24]
    },
    heart: {
      path: 'M12 21s-7.5-4.6-9.6-9.4C.9 8 3 4.2 6.6 4.2c2.2 0 3.6 1.2 5.4 3.2c1.8-2 3.2-3.2 5.4-3.2c3.6 0 5.7 3.8 4.2 7.4C19.5 16.4 12 21 12 21Z',
      viewBox: [0, 0, 24, 24]
    },
    house: {
      path: 'M12 3l9 7.6h-2.6V21h-4.9v-6h-3v6H5.6V10.6H3Z',
      viewBox: [0, 0, 24, 24]
    },
    drop: {
      path: 'M12 2.5c3.8 5 6.6 8.6 6.6 12a6.6 6.6 0 0 1-13.2 0c0-3.4 2.8-7 6.6-12Z',
      viewBox: [0, 0, 24, 24]
    },
    star: {
      path: 'M12 2.6l2.8 6.1l6.6.7l-5 4.5l1.4 6.6L12 17.2l-5.8 3.3l1.4-6.6l-5-4.5l6.6-.7Z',
      viewBox: [0, 0, 24, 24]
    }
  };
  function registerUnitMark(name, mark) {
    if (name && mark && typeof mark.path === 'string') MARKS[name] = {
      viewBox: [0, 0, 24, 24],
      ...mark
    };
  }
  // inline marks are registered under a generated name before the option merge
  const MARK_REFS = new Map();
  function markName(m) {
    if (!m || typeof m !== 'object') return m;
    if (typeof m.path !== 'string') return m.name || m;
    const key = `${m.path}|${m.viewBox}|${m.fillRule || ''}`;
    if (!MARK_REFS.has(key)) {
      const name = `wcc-mark-${MARK_REFS.size + 1}`;
      MARK_REFS.set(key, name);
      const u = unitMark(m);
      MARKS[name] = u;
    }
    return MARK_REFS.get(key);
  }
  function unitMark(m) {
    if (!m) return null;
    if (typeof m === 'string') return MARKS[m] || null;
    if (Array.isArray(m)) return unitMark(m[0]);
    if (typeof m.path === 'string') {
      let vb = m.viewBox;
      if (typeof vb === 'string') vb = vb.trim().split(/[\s,]+/).map(Number);
      return {
        ...m,
        viewBox: Array.isArray(vb) && vb.length === 4 ? vb : [0, 0, 24, 24]
      };
    }
    if (m.name) return MARKS[m.name] || null;
    return null;
  }
  const CUSTOM = {};
  function registerUnitLayout(name, fn) {
    if (typeof name === 'string' && typeof fn === 'function') CUSTOM[name] = fn;
  }
  function customLayout(name) {
    return CUSTOM[name] || null;
  }

  // ---------------------------------------------------------------- sized marks
  const valOf = m => {
    const d = m.datum;
    const v = d ? finite$f(d.value) ? d.value : finite$f(d.y) ? d.y : finite$f(d.z) ? d.z : 1 : 1;
    return Math.max(0, v);
  };
  function radiiFor(vals, o) {
    const sb = o.sizeByValue || {};
    const max = Math.max(1e-9, ...vals);
    const lin = sb.scale === 'linear';
    return vals.map(v => {
      const t = lin ? v / max : Math.sqrt(v / max);
      return Math.max(sb.minRatio || 0.18, t);
    });
  }
  /** greedy spiral packing of circles with relative radii; returns unit-free positions */
  function spiralPack(radii, gap) {
    const order = radii.map((r, i) => i).sort((a, b) => radii[b] - radii[a]);
    const placed = [];
    const pos = new Array(radii.length);
    order.forEach(i => {
      const r = radii[i];
      if (!placed.length) {
        pos[i] = {
          x: 0,
          y: 0
        };
        placed.push({
          x: 0,
          y: 0,
          r
        });
        return;
      }
      for (let s = 0, a = 0; s < 40000; s++) {
        a += 0.35;
        const d = 0.12 * a;
        const x = d * Math.cos(a);
        const y = d * Math.sin(a);
        if (placed.every(p => Math.hypot(p.x - x, p.y - y) >= p.r + r + gap)) {
          pos[i] = {
            x,
            y
          };
          placed.push({
            x,
            y,
            r
          });
          return;
        }
      }
      pos[i] = {
        x: 0,
        y: 0
      };
    });
    return pos;
  }
  function fitCircles(list, rect) {
    // list: [{x, y, r}] in arbitrary units -> scale into rect, centred
    const x0 = Math.min(...list.map(p => p.x - p.r));
    const x1 = Math.max(...list.map(p => p.x + p.r));
    const y0 = Math.min(...list.map(p => p.y - p.r));
    const y1 = Math.max(...list.map(p => p.y + p.r));
    const s = Math.min(rect.width / Math.max(1e-9, x1 - x0), rect.height / Math.max(1e-9, y1 - y0));
    const ox = rect.x + (rect.width - (x1 - x0) * s) / 2 - x0 * s;
    const oy = rect.y + (rect.height - (y1 - y0) * s) / 2 - y0 * s;
    return {
      s,
      map: p => ({
        x: ox + p.x * s,
        y: oy + p.y * s,
        r: p.r * s
      })
    };
  }
  /** sizeByValue for packed (one blob) and grouped (one blob per category) */
  function sizedLayout(marks, rect, o, perCategory) {
    if (!marks.length) return {
      points: [],
      clusters: [],
      size: 0
    };
    const radii = radiiFor(marks.map(valOf), o);
    const gap = 0.04;
    if (!perCategory) {
      const pos = spiralPack(radii, gap);
      const f = fitCircles(pos.map((p, i) => ({
        ...p,
        r: radii[i]
      })), rect);
      const points = marks.map((m, i) => ({
        id: m.id,
        ...f.map({
          ...pos[i],
          r: radii[i]
        })
      }));
      return {
        points,
        clusters: [{
          cat: -1,
          cx: rect.x + rect.width / 2,
          cy: rect.y + rect.height / 2,
          r: 0,
          top: rect.y,
          bottom: rect.y + rect.height
        }],
        size: Math.max(...points.map(p => p.r))
      };
    }
    // grouped: pack each category, lay the packs out in a row with label space
    const cats = [...new Set(marks.map(m => m.cat))];
    const packs = cats.map(c => {
      const idx = marks.map((m, i) => m.cat === c ? i : -1).filter(i => i >= 0);
      const pos = spiralPack(idx.map(i => radii[i]), gap);
      const R = Math.max(...pos.map((p, j) => Math.hypot(p.x, p.y) + radii[idx[j]]));
      return {
        c,
        idx,
        pos,
        R
      };
    });
    const lab = o.labelSpace || 0;
    const total = packs.reduce((a, p) => a + 2 * p.R, 0) * 1.12;
    const s = Math.min(rect.width / total, (rect.height - lab) / (2 * Math.max(...packs.map(p => p.R))));
    let x = rect.x + (rect.width - total * s) / 2;
    const points = [];
    const clusters = [];
    const top = o.labelPosition !== 'bottom';
    packs.forEach(p => {
      const cx = x + p.R * s * 1.06;
      const cy = rect.y + (top ? lab : 0) + (rect.height - lab) / 2;
      p.idx.forEach((i, j) => points.push({
        id: marks[i].id,
        x: cx + p.pos[j].x * s,
        y: cy + p.pos[j].y * s,
        r: radii[i] * s
      }));
      clusters.push({
        cat: p.c,
        cx,
        cy,
        r: p.R * s,
        top: cy - p.R * s,
        bottom: cy + p.R * s
      });
      x += 2 * p.R * s * 1.12;
    });
    return {
      points,
      clusters,
      size: Math.max(...points.map(q => q.r))
    };
  }

  // ---------------------------------------------------------------- scatter
  function niceTicks(lo, hi, n = 5) {
    if (!(hi > lo)) hi = lo + 1;
    const raw = (hi - lo) / Math.max(1, n);
    const mag = Math.pow(10, Math.floor(Math.log10(raw)));
    const step = [1, 2, 2.5, 5, 10].map(f => f * mag).find(s => s >= raw) || 10 * mag;
    const a = Math.floor(lo / step) * step;
    const b = Math.ceil(hi / step) * step;
    const out = [];
    for (let v = a; v <= b + step / 2; v += step) out.push(Math.round(v / step) * step);
    return out;
  }
  /** marks on real value axes: lanes (beeswarm per category) or 2-D values */
  function scatterLayout(marks, rect, o) {
    const so = o.scatter || {};
    const twoD = so.y === 'value';
    const xs = marks.map(m => m.datum && finite$f(m.datum.x) ? m.datum.x : valOf(m));
    const ys = marks.map(m => m.datum && finite$f(m.datum.y) ? m.datum.y : 0);
    const fmtX = so.xFormatter || (v => String(+v.toFixed(6)));
    const fmtY = so.yFormatter || (v => String(+v.toFixed(6)));
    const cats = o.categories || [];
    // orientation 'vertical' (lanes only): lanes become columns, the value axis runs up
    const vert = !twoD && so.orientation === 'vertical';
    const xt = niceTicks(finite$f(so.xMin) ? so.xMin : Math.min(...xs), finite$f(so.xMax) ? so.xMax : Math.max(...xs), so.tickAmount || 5);
    // vertical: the left margin fits the value tick labels
    const laneW = twoD ? 44 : vert ? Math.max(44, ...xt.map(v => fmtX(v).length * 6.2 + 10)) : Math.min(140, so.laneLabelWidth || Math.max(40, ...cats.map(c => String(c).length * 6.6 + 12)));
    const bottom = 22 + (so.xTitle && !vert ? 16 : 0);
    const left = laneW + (twoD && so.yTitle || vert && so.xTitle ? 16 : 0);
    const plot = {
      x: rect.x + left,
      y: rect.y + 8,
      width: Math.max(10, rect.width - left - 12),
      height: Math.max(10, rect.height - bottom - 8)
    };
    const frac = v => (v - xt[0]) / (xt[xt.length - 1] - xt[0] || 1);
    const X = v => vert ? plot.y + plot.height - frac(v) * plot.height : plot.x + frac(v) * plot.width;
    let r = finite$f(o.size) ? o.size : Math.max(2, Math.min(7, Math.sqrt(plot.width * plot.height / Math.max(1, marks.length)) * 0.28));
    const points = [];
    const vt = {
      ticks: xt.map(v => ({
        px: X(v),
        label: fmtX(v)
      })),
      title: so.xTitle,
      off: laneW + 4
    };
    const axes = {
      plot,
      x: vert ? {
        ticks: []
      } : vt,
      y: vert ? vt : null,
      lanes: null,
      gridlines: so.gridlines !== false
    };
    if (twoD) {
      const yt = niceTicks(finite$f(so.yMin) ? so.yMin : Math.min(...ys), finite$f(so.yMax) ? so.yMax : Math.max(...ys), so.yTickAmount || 5);
      const Y = v => plot.y + plot.height - (v - yt[0]) / (yt[yt.length - 1] - yt[0] || 1) * plot.height;
      axes.y = {
        ticks: yt.map(v => ({
          px: Y(v),
          label: fmtY(v)
        })),
        title: so.yTitle
      };
      const zs = marks.map(m => m.datum && finite$f(m.datum[so.sizeField || 'z']) ? m.datum[so.sizeField || 'z'] : null);
      const zmax = Math.max(0, ...zs.filter(finite$f));
      const [r0, r1] = so.sizeRange || [r * 0.6, r * 2.6];
      marks.forEach((m, i) => points.push({
        id: m.id,
        x: X(xs[i]),
        y: Y(ys[i]),
        r: zs[i] !== null && zmax > 0 ? r0 + (r1 - r0) * Math.sqrt(zs[i] / zmax) : r
      }));
      return {
        points,
        clusters: [],
        size: r,
        axes
      };
    }
    // lanes with swarm (or jitter) spread; a = value pixel, b = across the lane
    const nl = Math.max(1, cats.length);
    const b0 = vert ? plot.x : plot.y;
    const lh = (vert ? plot.width : plot.height) / nl;
    axes.lanes = cats.map((name, i) => ({
      name,
      [vert ? 'x' : 'y']: b0 + lh * (i + 0.5)
    }));
    r = Math.min(r, lh / 6);
    // vertical columns are short on value room: size marks for the fullest lane
    if (vert && !finite$f(o.size)) r = Math.max(2, Math.min(r, Math.sqrt(lh * plot.height / Math.max(1, ...cats.map((_, c) => marks.filter(m => m.cat === c).length)) / 16)));
    for (let c = 0; c < nl; c++) {
      const own = marks.map((m, i) => m.cat === c ? i : -1).filter(i => i >= 0).sort((a, b) => xs[a] - xs[b]);
      const cb = b0 + lh * (c + 0.5);
      const done = [];
      own.forEach(i => {
        const a = X(xs[i]);
        let b = cb;
        if (so.spread === 'jitter') b = cb + (i * 2654435761 % 1000 / 1000 - 0.5) * lh * 0.7;else {
          for (let k = 0; k < 200; k++) {
            b = cb + Math.ceil(k / 2) * r * 0.5 * (k % 2 ? 1 : -1);
            if (done.every(p => Math.hypot(p.a - a, p.b - b) >= 2 * r + 0.6)) break;
          }
          b = Math.max(cb - lh / 2 + r, Math.min(cb + lh / 2 - r, b));
        }
        done.push({
          a,
          b
        });
        points.push({
          id: marks[i].id,
          x: vert ? b : a,
          y: vert ? a : b,
          r
        });
      });
    }
    return {
      points,
      clusters: [],
      size: r,
      axes
    };
  }

  /*
   * West Coast Charts - chart type presets.
   *
   * New chart types are presets on top of an existing renderer, as described
   * in docs/spec/02-chart-types: `chart.type: 'gauge'` is normalised to
   * `'radialBar'`, `'funnel'`/`'pyramid'`/`'histogram'` to `'bar'`,
   * `'waterfall'`/`'dumbbell'` to `'rangeBar'`. The requested type stays
   * readable on `chart.requestedType`.
   *
   * Three layers per type:
   *   - forced options: required for the type to work (e.g. funnel is always
   *     a horizontal bar). Written into the user options.
   *   - preset defaults: nicer defaults for the type. Sit below window.Apex
   *     and the user options, so user values always win.
   *   - series transforms (TypeTransforms.js) for types whose series hold raw
   *     input (deltas, observations, one series per measure).
   *
   * Copyright (c) 2026 West Coast Software - MIT License
   */

  const TYPE_ALIASES = {
    gauge: 'radialBar',
    funnel: 'bar',
    pyramid: 'bar',
    histogram: 'bar',
    waterfall: 'rangeBar',
    dumbbell: 'rangeBar',
    violin: 'rangeBar',
    sunburst: 'treemap',
    icicle: 'treemap',
    raincloud: 'rangeBar',
    beeswarm: 'rangeBar',
    slope: 'line',
    calendar: 'heatmap',
    streamgraph: 'rangeArea',
    unit: 'treemap',
    waffle: 'treemap',
    barRace: 'bar'
  };
  const isObj$4 = v => v !== null && typeof v === 'object' && !Array.isArray(v);

  // set a nested value, cloning every object on the way (never mutates
  // objects the caller might still hold)
  function setPath(obj, path, value) {
    const keys = path.split('.');
    let o = obj;
    for (let i = 0; i < keys.length - 1; i++) {
      const k = keys[i];
      o[k] = isObj$4(o[k]) ? {
        ...o[k]
      } : {};
      o = o[k];
    }
    o[keys[keys.length - 1]] = value;
    return obj;
  }

  /**
   * Deep merge for the preset layer: unlike Utils.extend, an object in `src`
   * replaces a non-object in `target` (e.g. Defaults.rangeBar sets
   * animateGradually: false, the waterfall preset needs { enabled, delay }).
   * Arrays and functions are taken as they are.
   */
  function mergeLayer(target, src) {
    if (!isObj$4(src)) return target;
    const out = isObj$4(target) ? {
      ...target
    } : {};
    Object.keys(src).forEach(k => {
      const v = src[k];
      out[k] = isObj$4(v) ? mergeLayer(out[k], v) : v;
    });
    return out;
  }
  function getPath(obj, path) {
    return path.split('.').reduce((o, k) => o && typeof o === 'object' ? o[k] : undefined, obj);
  }

  /**
   * Resolve the requested type of an options object.
   * `prev` is the current resolved chart config (updateOptions).
   */
  function resolveRequestedType(opts, prev) {
    const type = opts && opts.chart && opts.chart.type;
    if (!type) return prev ? prev.chart.requestedType : undefined;
    if (TYPE_ALIASES[type]) return type;
    // a base type: keep a preset only when it maps onto this base type
    // (idempotent re-normalisation of an already normalised config)
    const req = opts.chart && opts.chart.requestedType || undefined;
    if (req && TYPE_ALIASES[req] === type) return req;
    return type;
  }

  /**
   * Normalise `opts` in place (shallow-cloning the parts it changes).
   * Returns the preset defaults layer for the requested type, or null.
   */
  function normalizeType(opts, prev) {
    if (!opts || !isObj$4(opts.chart)) return null;
    const requested = resolveRequestedType(opts, prev);
    if (!opts.chart.type) return null;
    opts.chart = {
      ...opts.chart
    };
    opts.chart.requestedType = requested;
    if (TYPE_ALIASES[requested]) opts.chart.type = TYPE_ALIASES[requested];
    applyForced(opts, requested);
    leavePreviousType(opts, prev, requested);
    // heatmap / calendar `empty`: legend entry as a never matching colour range
    if (opts.chart.type === 'heatmap') emptyRanges(opts);
    return presetLayer(requested, opts);
  }

  // undo what a previous type forced or derived when switching away from it
  function leavePreviousType(opts, prev, requested) {
    const before = prev && prev.chart && prev.chart.requestedType;
    if (!before || before === requested) return;
    if (before === 'histogram') {
      const xa = isObj$4(opts.xaxis) ? {
        ...opts.xaxis
      } : {};
      if (xa.type === undefined) xa.type = 'category';
      ['min', 'max', 'tickAmount'].forEach(k => {
        if (!(k in xa)) xa[k] = undefined;
      });
      opts.xaxis = xa;
    }
    if (before === 'barRace') {
      if (getPath(prev, 'chart.animations.dynamicAnimation.wccForced') && getPath(opts, 'chart.animations.dynamicAnimation.enabled') === undefined) {
        setPath(opts, 'chart.animations.dynamicAnimation.enabled', true);
        setPath(opts, 'chart.animations.dynamicAnimation.wccForced', false);
      }
      if (getPath(opts, 'plotOptions.bar.horizontal') === undefined) setPath(opts, 'plotOptions.bar.horizontal', false);
    }
    // slope hid the value axis, calendar named the weekdays: for themselves only
    if ((before === 'slope' || before === 'calendar') && opts.yaxis === undefined) {
      const py = prev.yaxis && (Array.isArray(prev.yaxis) ? prev.yaxis[0] : prev.yaxis);
      if (py && py.wccForced) opts.yaxis = {
        show: true,
        labels: {
          formatter: undefined
        },
        wccForced: false
      };
    }
  }

  // unit / waffle: no category axis conversion (it would empty opts.labels);
  // unit shape values stay chart-owned; Utils.extend replaces their branded value atomically
  function unitForced(opts) {
    setPath(opts, 'xaxis.tickPlacement', 'between');
    const mark = getPath(opts, 'plotOptions.unit.pictogram.mark');
    if (mark && typeof mark === 'object' && !Array.isArray(mark)) setPath(opts, 'plotOptions.unit.pictogram.mark', markName(mark));
  }
  function unitLabelled(opts, type) {
    const layout = getPath(opts, 'plotOptions.unit.layout') || (type === 'waffle' ? 'grid' : 'grouped');
    const show = getPath(opts, 'plotOptions.unit.clusterLabels.show');
    if (show !== undefined) return show !== false;
    if (getPath(opts, 'plotOptions.unit.positions')) return false;
    return layout === 'grouped' || layout === 'columns' || layout === 'grid' && getPath(opts, 'plotOptions.unit.grid.split') === true;
  }

  // calendar weekday labels (the y axis lives in an array after the option
  // merge, so the label formatter is written into the user options)
  function calendarForced(opts) {
    const co = getPath(opts, 'plotOptions.calendar') || {};
    const names = Array.isArray(co.dayNames) && co.dayNames.length === 7 ? co.dayNames.map(String) : DAY_NAMES;
    const show = co.dayLabels === undefined ? 'alternate' : co.dayLabels;
    const formatter = val => {
      if (show === false) return '';
      if (show === 'all') return val;
      const dow = names.indexOf(String(val));
      return dow === 1 || dow === 3 || dow === 5 ? val : '';
    };
    formatter.wccDefault = true;
    if (opts.yaxis === undefined) opts.yaxis = {
      labels: {
        formatter
      },
      wccForced: true
    };else if (isObj$4(opts.yaxis) && getPath(opts, 'yaxis.labels.formatter') === undefined) setPath(opts, 'yaxis.labels.formatter', formatter);
  }
  function applyForced(opts, type) {
    switch (type) {
      case 'funnel':
        setPath(opts, 'plotOptions.bar.horizontal', true);
        setPath(opts, 'plotOptions.bar.isFunnel', true);
        if (getPath(opts, 'plotOptions.funnel.shape') === 'trapezoid') {
          // stages touch already: no 3D shadow pass (spec funnel.md)
          setPath(opts, 'plotOptions.bar.isFunnel3d', false);
        }
        break;
      case 'pyramid':
        setPath(opts, 'plotOptions.bar.horizontal', true);
        setPath(opts, 'plotOptions.bar.isFunnel', true);
        setPath(opts, 'plotOptions.bar.isFunnel3d', false);
        break;
      case 'waterfall':
      case 'dumbbell':
      case 'violin':
      case 'raincloud':
      case 'beeswarm':
        setPath(opts, 'chart.stacked', false);
        break;
      case 'streamgraph':
        setPath(opts, 'chart.stacked', false);
        break;
      case 'slope':
        setPath(opts, 'chart.stacked', false);
        if (getPath(opts, 'xaxis.type') === undefined) setPath(opts, 'xaxis.type', 'category');
        setPath(opts, 'xaxis.tickPlacement', 'on');
        // the end labels carry the values: no value axis unless asked for
        if (opts.yaxis === undefined) opts.yaxis = {
          show: false,
          wccForced: true
        };
        break;
      case 'unit':
        unitForced(opts);
        break;
      case 'calendar':
        calendarForced(opts);
        break;
      case 'waffle':
        unitForced(opts);
        // spec: waffle = unit with the grid layout and square marks
        setPath(opts, 'plotOptions.unit.layout', 'grid');
        if (getPath(opts, 'plotOptions.unit.shape') === undefined) setPath(opts, 'plotOptions.unit.shape', 'square');
        break;
      case 'histogram':
        setPath(opts, 'chart.stacked', false);
        setPath(opts, 'xaxis.type', 'numeric');
        break;
      case 'barRace':
        // sorted horizontal bars; the race draws its own labels and motion
        // (the core morph would tween bar j between two different names)
        setPath(opts, 'chart.stacked', false);
        setPath(opts, 'plotOptions.bar.horizontal', true);
        setPath(opts, 'plotOptions.bar.distributed', false);
        setPath(opts, 'dataLabels.enabled', false);
        if (getPath(opts, 'chart.animations.dynamicAnimation.enabled') === undefined) {
          setPath(opts, 'chart.animations.dynamicAnimation.enabled', false);
          setPath(opts, 'chart.animations.dynamicAnimation.wccForced', true);
        }
        break;
    }
  }

  // rough text width (preset time: nothing is measured yet)
  const estW = (str, fs) => String(str).length * fs * 0.6;
  function slopePreset(opts) {
    const series = Array.isArray(opts && opts.series) ? opts.series : [];
    const fs = getPath(opts, 'plotOptions.slope.labels.fontSize') || 12;
    const num = d => isObj$4(d) ? d.y : Array.isArray(d) ? d[1] : d;
    const userFmt = getPath(opts, 'plotOptions.slope.labels.formatter');
    const fmtLen = v => {
      if (!(typeof v === 'number' && isFinite(v))) return '';
      if (typeof userFmt === 'function') {
        try {
          return String(userFmt(v, {}));
        } catch (e) {
          // formatter needs the chart context: fall back to the raw number
        }
      }
      return v.toLocaleString('en-US', {
        maximumFractionDigits: 2
      });
    };
    let left = 0;
    let right = 0;
    series.forEach(s => {
      if (!isObj$4(s) || !Array.isArray(s.data) || !s.data.length) return;
      const a = num(s.data[0]);
      const b = num(s.data[s.data.length - 1]);
      left = Math.max(left, estW(fmtLen(a), fs));
      right = Math.max(right, estW(`${s.name || ''}  ${fmtLen(b)}`, fs));
    });
    const leftMode = getPath(opts, 'plotOptions.slope.labels.left');
    if (leftMode === 'both' || leftMode === 'name') {
      series.forEach(s => isObj$4(s) && (left = Math.max(left, estW(`${s.name || ''}  0000`, fs))));
    }
    return {
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2.5,
        curve: 'straight',
        lineCap: 'round'
      },
      markers: {
        size: 5,
        strokeWidth: 2,
        hover: {
          sizeOffset: 2
        }
      },
      chart: {
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      yaxis: {
        show: false
      },
      xaxis: {
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        tooltip: {
          enabled: false
        },
        crosshairs: {
          show: false
        }
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        },
        padding: {
          left: Math.min(220, Math.ceil(left) + 18),
          right: Math.min(260, Math.ceil(right) + 18),
          top: 22,
          bottom: 4
        }
      },
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      },
      tooltip: {
        shared: false,
        intersect: true,
        custom: slopeTooltip
      }
    };
  }
  function calendarPreset(opts) {
    const co = getPath(opts, 'plotOptions.calendar') || {};
    const ranges = getPath(opts, 'plotOptions.heatmap.colorScale.ranges');
    const hasRanges = Array.isArray(ranges) && ranges.length > 0;
    return {
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 3
      },
      chart: {
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        heatmap: {
          radius: 2,
          enableShades: !hasRanges,
          shadeIntensity: 0.65
        }
      },
      states: {
        hover: {
          filter: {
            type: 'darken',
            value: 0.85
          }
        }
      },
      xaxis: {
        position: 'top',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        tooltip: {
          enabled: false
        },
        crosshairs: {
          show: false
        },
        labels: {
          rotate: 0,
          rotateAlways: false,
          hideOverlappingLabels: false,
          trim: false,
          formatter: (val, _t, o) => o && o.w ? weekLabel(o.w.globals.wccCalendar, o.i, co.monthNames) : ''
        }
      },
      grid: {
        show: false,
        padding: {
          top: 0,
          right: 8,
          bottom: 0,
          left: 4
        }
      },
      tooltip: {
        shared: false,
        intersect: true,
        custom: calendarTooltip
      }
    };
  }
  function presetLayer(type, opts) {
    switch (type) {
      case 'calendar':
        return calendarPreset(opts);
      case 'heatmap':
        return emptyPreset(getPath(opts, 'plotOptions.heatmap.empty'));
      case 'treemap':
        {
          // nested treemap: headers and the breadcrumb name the groups
          const nested = Array.isArray(opts.series) && opts.series.some(s => isObj$4(s) && Array.isArray(s.data) && s.data.some(d => isObj$4(d) && Array.isArray(d.children)));
          return nested ? {
            legend: {
              show: false
            }
          } : null;
        }
      case 'gauge':
        return {
          stroke: {
            lineCap: 'round'
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: '74%',
                margin: 0
              },
              track: {
                strokeWidth: '100%',
                margin: 0
              },
              dataLabels: {
                name: {
                  show: false,
                  fontSize: '13px',
                  fontWeight: 500
                },
                value: {
                  fontSize: 'auto',
                  fontWeight: 600,
                  offsetY: 0
                }
              }
            }
          }
        };
      case 'funnel':
        return {
          plotOptions: {
            bar: {
              barHeight: '86%',
              borderRadius: 3
            }
          }
        };
      case 'pyramid':
        return {
          plotOptions: {
            bar: {
              barHeight: '100%'
            }
          },
          stroke: {
            width: 1.5
          }
        };
      case 'waterfall':
        return {
          dataLabels: {
            enabled: true,
            background: {
              enabled: false
            },
            dropShadow: {
              enabled: false
            },
            formatter: waterfallLabelFormatter,
            style: {
              fontWeight: 600
            }
          },
          legend: {
            show: false
          },
          chart: {
            zoom: {
              enabled: false
            },
            animations: {
              animateGradually: {
                enabled: true,
                delay: 90
              }
            }
          },
          tooltip: {
            shared: false,
            intersect: false,
            custom: waterfallTooltip
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '60%',
              barHeight: '60%',
              borderRadius: 2,
              dataLabels: {
                hideOverflowingLabels: false
              }
            }
          }
        };
      case 'dumbbell':
        return {
          legend: {
            show: true,
            showForSingleSeries: true,
            position: 'bottom',
            markers: {
              shape: 'circle'
            }
          },
          dataLabels: {
            enabled: false
          },
          chart: {
            zoom: {
              enabled: false
            }
          },
          markers: {
            size: 6
          },
          tooltip: {
            shared: false,
            intersect: false,
            followCursor: true,
            custom: dumbbellTooltip
          },
          grid: getPath(opts, 'plotOptions.bar.horizontal') === false ? {
            yaxis: {
              lines: {
                show: true
              }
            },
            xaxis: {
              lines: {
                show: false
              }
            }
          } : {
            yaxis: {
              lines: {
                show: false
              }
            },
            xaxis: {
              lines: {
                show: true
              }
            }
          },
          plotOptions: {
            bar: {
              horizontal: true,
              barHeight: 3,
              columnWidth: 3,
              dumbbell: {
                dataLabels: {
                  enabled: true
                }
              }
            }
          }
        };
      case 'sunburst':
      case 'icicle':
        return {
          legend: {
            show: false
          },
          chart: {
            zoom: {
              enabled: false
            }
          },
          states: {
            hover: {
              filter: {
                type: 'none'
              }
            },
            active: {
              filter: {
                type: 'none'
              }
            }
          },
          plotOptions: type === 'sunburst' ? {
            sunburst: {
              borderRadius: 3,
              spacing: 2
            }
          } : {
            icicle: {
              borderRadius: 3,
              spacing: 1.5
            }
          }
        };
      case 'violin':
      case 'raincloud':
        {
          const horizontal = getPath(opts, 'plotOptions.bar.horizontal') === true;
          const series = opts && opts.series || [];
          const rain = type === 'raincloud';
          return {
            legend: {
              show: Array.isArray(series) && series.length > 1,
              position: 'top',
              horizontalAlign: 'left',
              markers: {
                shape: 'circle'
              }
            },
            dataLabels: {
              enabled: false
            },
            chart: {
              zoom: {
                enabled: false
              }
            },
            tooltip: {
              shared: false,
              intersect: false,
              followCursor: true,
              custom: violinTooltip
            },
            xaxis: {
              tickPlacement: 'between',
              tooltip: {
                enabled: false
              },
              crosshairs: {
                show: false
              }
            },
            grid: horizontal ? {
              yaxis: {
                lines: {
                  show: false
                }
              },
              xaxis: {
                lines: {
                  show: true
                }
              }
            } : {
              yaxis: {
                lines: {
                  show: true
                }
              },
              xaxis: {
                lines: {
                  show: false
                }
              }
            },
            plotOptions: rain ? {
              bar: {
                horizontal: getPath(opts, 'plotOptions.bar.horizontal') === true
              },
              violin: {
                side: 'right',
                box: {
                  show: true,
                  whiskers: 'tukey',
                  width: '15%'
                },
                points: {
                  position: 'left',
                  laneWidth: '40%'
                }
              }
            } : {
              bar: {
                horizontal
              }
            }
          };
        }
      case 'slope':
        return slopePreset(opts);
      case 'barRace':
        {
          const s0 = Array.isArray(opts && opts.series) && opts.series[0];
          const max = +getPath(opts, 'plotOptions.barRace.maxBars') || 10;
          const n = Math.min(max, s0 && Array.isArray(s0.data) ? s0.data.length : max);
          return {
            legend: {
              show: false
            },
            chart: {
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              countUp: {
                enabled: true
              }
            },
            // few bars stay bar-shaped instead of filling the plot
            plotOptions: {
              bar: {
                barHeight: n <= 1 ? '40%' : n <= 3 ? '58%' : '78%',
                borderRadius: 3,
                borderRadiusApplication: 'end'
              }
            },
            states: {
              active: {
                filter: {
                  type: 'none'
                }
              }
            },
            tooltip: {
              shared: false,
              intersect: true
            },
            grid: {
              padding: {
                right: 64
              },
              yaxis: {
                lines: {
                  show: false
                }
              },
              xaxis: {
                lines: {
                  show: true
                }
              }
            },
            yaxis: {
              labels: {
                maxWidth: 200
              }
            }
          };
        }
      case 'beeswarm':
        {
          const horizontal = getPath(opts, 'plotOptions.bar.horizontal') === true;
          const series = opts && opts.series || [];
          return {
            legend: {
              show: Array.isArray(series) && series.length > 1,
              position: 'top',
              horizontalAlign: 'left',
              markers: {
                shape: 'circle'
              }
            },
            dataLabels: {
              enabled: false
            },
            chart: {
              zoom: {
                enabled: false
              }
            },
            states: {
              hover: {
                filter: {
                  type: 'none'
                }
              },
              active: {
                filter: {
                  type: 'none'
                }
              }
            },
            tooltip: {
              shared: false,
              intersect: false,
              followCursor: true,
              custom: beeswarmTooltip
            },
            xaxis: {
              tickPlacement: 'between',
              tooltip: {
                enabled: false
              },
              crosshairs: {
                show: false
              }
            },
            grid: horizontal ? {
              yaxis: {
                lines: {
                  show: false
                }
              },
              xaxis: {
                lines: {
                  show: true
                }
              }
            } : {
              yaxis: {
                lines: {
                  show: true
                }
              },
              xaxis: {
                lines: {
                  show: false
                }
              }
            },
            plotOptions: {
              bar: {
                horizontal
              }
            }
          };
        }
      case 'unit':
      case 'waffle':
        return {
          // cluster labels name the groups already: no legend next to them
          legend: {
            show: !unitLabelled(opts, type),
            position: 'bottom',
            markers: {
              shape: type === 'waffle' ? 'square' : 'circle'
            }
          },
          dataLabels: {
            enabled: false
          },
          chart: {
            zoom: {
              enabled: false
            }
          },
          states: {
            hover: {
              filter: {
                type: 'none'
              }
            },
            active: {
              filter: {
                type: 'none'
              }
            }
          },
          tooltip: {
            enabled: true
          }
        };
      case 'streamgraph':
        return {
          yaxis: {
            show: false
          },
          stroke: {
            curve: 'monotoneCubic',
            width: 0
          },
          fill: {
            opacity: 1,
            type: 'solid'
          },
          dataLabels: {
            enabled: false
          },
          markers: {
            size: 0,
            hover: {
              size: 0
            }
          },
          legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'left',
            markers: {
              shape: 'circle'
            }
          },
          chart: {
            zoom: {
              enabled: false
            },
            animations: {
              animateGradually: {
                enabled: false
              }
            }
          },
          grid: {
            yaxis: {
              lines: {
                show: false
              }
            },
            xaxis: {
              lines: {
                show: false
              }
            },
            padding: {
              left: 18,
              right: 18
            }
          },
          states: {
            hover: {
              filter: {
                type: 'none'
              }
            },
            active: {
              filter: {
                type: 'none'
              }
            }
          },
          tooltip: {
            shared: true,
            intersect: false,
            custom: streamTooltip
          },
          xaxis: {
            tooltip: {
              enabled: false
            },
            crosshairs: {
              show: true,
              stroke: {
                dashArray: 0
              }
            }
          }
        };
      case 'histogram':
        {
          const series = opts && opts.series || [];
          const overlap = getPath(opts, 'plotOptions.histogram.overlap') !== false;
          const multi = Array.isArray(series) && series.length > 1;
          return {
            dataLabels: {
              enabled: false
            },
            plotOptions: {
              bar: {
                columnWidth: '100%',
                borderRadius: 0
              }
            },
            stroke: {
              width: multi && overlap ? 0 : 1
            },
            fill: multi && overlap ? {
              opacity: 0.55
            } : {},
            chart: {
              zoom: {
                enabled: false
              }
            },
            legend: {
              showForSingleSeries: false
            },
            tooltip: {
              shared: true,
              intersect: false,
              custom: histogramTooltip
            },
            xaxis: {
              tickPlacement: 'between',
              labels: {
                formatter: histogramEdgeFormatter,
                rotate: 0,
                hideOverlappingLabels: true
              },
              tooltip: {
                enabled: false
              },
              crosshairs: {
                show: false
              }
            }
          };
        }
      default:
        return null;
    }
  }

  /*
   * West Coast Charts - option defaults for the chart types added on top of
   * the 4.7.0 baseline (gauge, funnel/pyramid, waterfall, dumbbell, histogram).
   * Option names follow docs/spec/02-chart-types/*.md (clean-room spec).
   * Copyright (c) 2026 West Coast Software - MIT License
   */

  function typeOptionDefaults() {
    return {
      chart: {
        // the type the user asked for ('gauge', 'funnel', ...); chart.type
        // holds the renderer it is normalised to ('radialBar', 'bar', ...)
        requestedType: undefined,
        animations: {
          // tween between chart types on updateOptions({chart:{type}})
          // (treemap / sunburst / icicle, violin / beeswarm)
          chartTypeMorph: {
            enabled: true,
            speed: 600
          }
        }
      },
      plotOptions: {
        // raw-sample box plots (data[].points); summaries are drawn as given
        boxPlot: {
          whiskers: 'minmax',
          // 'minmax' | 'tukey' | 'percentile'
          whiskerPercentiles: [5, 95],
          points: {
            show: false,
            // false | true / 'all' | 'outliers'
            shape: 'circle',
            // 'circle' | 'square'
            size: 2.5,
            jitter: 0.5,
            maxPoints: 3000,
            opacity: 0.9,
            fillColor: 'series-dark',
            // 'series-dark' | 'series' | colour
            strokeColor: '#fff',
            strokeWidth: 1,
            colorScale: {
              colors: undefined,
              min: undefined,
              max: undefined,
              steps: undefined
            }
          }
        },
        radialBar: {
          shape: 'arc',
          // 'arc' | 'needle'
          min: 0,
          max: 100,
          bands: [],
          bandsStyle: {
            strokeWidth: '40%',
            gap: 0,
            // px along the arc
            hideTrackWhenPresent: false,
            linecap: 'butt',
            // WCC: 'outer' (default) aligns bands to the outer edge of the
            // track, 'center' centres them on the track radius
            align: 'outer'
          },
          ticks: {
            show: false,
            major: {
              count: 11,
              length: 10,
              width: 1.5,
              color: undefined,
              placement: 'outside'
            },
            minor: {
              count: 4,
              length: 5,
              width: 1,
              color: undefined,
              placement: undefined // same as major
            },
            labels: {
              show: true,
              offset: 6,
              fontSize: undefined,
              fontFamily: undefined,
              fontWeight: 500,
              color: undefined,
              formatter: undefined
            }
          },
          needle: {
            color: undefined,
            length: undefined,
            // auto: clear of the ring's inner edge (max 82% of the radius)
            baseWidth: 8,
            tipWidth: 1.5,
            showValueArc: false,
            offsetY: 0,
            animation: {
              enabled: true,
              duration: undefined,
              easing: undefined
            }
          }
        },
        funnel: {
          shape: 'rectangle',
          // 'rectangle' | 'trapezoid'
          lastShape: 'flat' // 'flat' | 'taper'
        },
        waterfall: {
          colors: {
            positive: '#00A86F',
            negative: '#FF4560',
            subtotal: undefined,
            total: undefined
          },
          connectors: {
            show: true,
            color: undefined,
            strokeWidth: 1,
            strokeDashArray: 3
          }
        },
        sunburst: {
          offsetX: 0,
          offsetY: 0,
          startAngle: 0,
          endAngle: 360,
          innerSize: '15%',
          borderRadius: 0,
          spacing: 1,
          leaf: 'extend',
          // 'extend' | 'stop'
          partition: 'normalize',
          // 'normalize' | 'strict'
          tint: 0.14,
          colorBy: 'branch',
          // WCC: 'branch' | 'name'
          zoomOnClick: true,
          dataLabels: {
            show: true,
            minAngleToShow: 8,
            showValue: true,
            // WCC: value under the name on roomy arcs
            style: {
              fontSize: '12px',
              fontFamily: undefined,
              fontWeight: 500,
              colors: undefined
            }
          }
        },
        icicle: {
          direction: 'down',
          // 'down' | 'up' | 'right' | 'left'
          levelSize: 'equal',
          maxDepth: 'auto',
          spacing: 1,
          borderRadius: 0,
          leaf: 'stop',
          partition: 'normalize',
          sort: 'none',
          // 'none' | 'value' | 'name'
          tint: 0,
          colorBy: 'branch',
          // WCC: 'branch' (palette per top-level node, tinted) | 'name'
          zoomOnClick: true,
          zoomType: 'value',
          // 'value' | 'both'
          dataLabels: {
            show: true,
            minSizeToShow: 30,
            align: 'center',
            rotate: 'auto',
            // 'auto' | 'always' | 'never'
            showValue: false,
            style: {
              fontSize: '12px',
              fontFamily: undefined,
              fontWeight: 500,
              colors: undefined
            }
          }
        },
        unit: {
          layout: 'grouped',
          // grouped | packed | columns | grid | scatter (gap) | arc | custom
          positions: undefined,
          // fn(objects, rect) | registered layout name | unit shape
          transition: 'group',
          // group | flow | identity
          shape: 'circle',
          // circle | square | image | pictogram
          image: {
            src: undefined,
            width: undefined,
            height: undefined,
            tint: false
          },
          pictogram: {
            mark: undefined,
            fit: 'contain',
            scale: 1,
            padding: 0,
            fallback: 'circle',
            outline: false,
            outlineWidth: 1.5
          },
          size: 'auto',
          columns: {
            size: 'inherit'
          },
          grid: {
            columns: 10,
            total: undefined,
            fillFrom: 'bottom',
            split: false,
            tileColumns: undefined,
            max: undefined,
            trackColor: undefined
          },
          arc: {
            startAngle: -90,
            endAngle: 90,
            innerRadiusRatio: 0.4,
            rows: 'auto'
          },
          gather: {
            easing: 'outCubic',
            overshoot: 1.70158,
            enter: 'burst',
            motion: 'auto',
            spring: 'crisp'
          },
          sizeByValue: {
            enabled: false,
            maxRadius: 'auto',
            minRadius: undefined,
            scale: 'area'
          },
          spacing: 1.05,
          borderRadius: undefined,
          unitValue: 1,
          maxUnits: 5000,
          sortByGroup: true,
          clusterLabels: {
            show: undefined,
            position: undefined,
            curved: false,
            color: undefined,
            offsetY: 0,
            formatter: undefined,
            fontSize: '12px',
            fontFamily: undefined,
            fontWeight: 600,
            external: {
              show: false,
              offsetX: 0,
              offsetY: 0,
              connector: {
                show: true,
                width: 1,
                color: undefined,
                gap: 4,
                length: 16
              }
            }
          },
          tooltip: {
            formatter: undefined
          }
        },
        streamgraph: {
          offset: 'wiggle',
          // 'wiggle' | 'silhouette' | 'zero' | 'expand'
          order: 'inside-out',
          // 'inside-out' | 'inverse' | 'none'
          hover: {
            show: true,
            opacity: 0.35
          },
          labels: {
            show: true,
            minWidth: 24,
            minFontSize: 9,
            maxFontSize: 30,
            style: {
              fontSize: 'auto',
              fontFamily: undefined,
              fontWeight: 600,
              colors: undefined
            }
          }
        },
        heatmap: {
          // 'rect' | 'hexagon' | 'circle' | 'diamond' (spec 01, 7.2)
          shape: 'rect',
          // WCC: hexagons 'regular' (letterboxed) or 'fill' (stretched)
          shapeAspect: 'regular'
          // WCC: `empty` ({ label, color, legend }: null cells as a state) has no default key here;
          // Utils.extend would turn a user object merged into `undefined` into {}
        },
        calendar: {
          weekStart: 1,
          // 0 = Sunday ... 6 = Saturday
          start: undefined,
          // first day ('YYYY-MM-DD' | Date | timestamp), default first data day
          end: undefined,
          aggregate: 'sum',
          // several values on one day: 'sum' | 'max' | 'min' | 'mean' | 'last'
          dayLabels: 'alternate',
          // 'alternate' (Mon/Wed/Fri) | 'all' | false
          dayNames: undefined,
          // 7 names starting with Sunday
          monthNames: undefined,
          // 12 names
          emptyColor: undefined,
          // in-range days without a value; default from the theme
          color: undefined,
          formatter: undefined
        },
        barRace: {
          maxBars: 10,
          // bars shown; the rest wait below the cut
          sort: 'desc',
          // 'desc' | 'asc'
          nulls: 'dash',
          // 'dash': the row stays with values.nullLabel | 'hide': dropped
          speed: 750,
          // ms per update (chart.animations.speed for the first draw)
          colors: undefined,
          // palette by name (default: the theme colours)
          labels: {
            show: true,
            fontSize: 12.5
          },
          // names beside the bars
          values: {
            show: true,
            fontSize: undefined,
            decimals: undefined,
            formatter: undefined,
            nullLabel: '\u2013'
          },
          // default: the locale's compact notation // counts up with dataLabels.countUp
          ticker: {
            show: true,
            text: undefined,
            fontSize: undefined,
            color: undefined,
            opacity: 0.55
          },
          // period label, string | fn({ w })
          cut: {
            show: 'auto',
            label: undefined,
            color: undefined
          } // the maxBars cut line: 'auto' = when names wait below it; label: string | fn({ shown, total }) | false
        },
        slope: {
          colorBy: 'series',
          // 'series' | 'direction'
          upColor: '#16a34a',
          downColor: '#dc2626',
          flatColor: '#94a3b8',
          flatThreshold: 0.005,
          // |last - first| / |first| below this = flat
          highlight: undefined,
          // series names drawn in colour, the rest muted
          mutedColor: undefined,
          // auto: neutral grey for the mode
          labels: {
            show: true,
            left: 'value',
            right: 'both',
            fontSize: 12,
            minGap: 0,
            formatter: undefined
          },
          // left/right: 'value' | 'name' | 'both' | false
          periods: {
            show: true,
            fontSize: 12
          },
          hover: {
            opacity: 0.22
          }
        },
        beeswarm: {
          size: 3.5,
          // dot radius (px); shrinks to minSize when a swarm is too wide
          minSize: 1.5,
          padding: 1,
          // gap between dots (px)
          width: '88%',
          // of the category slot
          side: 'both',
          // 'both' | 'left' | 'right' | 'top' | 'bottom'
          maxPoints: 2000,
          // per category, stride-thinned
          opacity: 0.92,
          strokeWidth: undefined,
          // auto: min(1, 0.3 r)
          strokeColor: '#fff',
          // '#fff' = the surface colour (follows dark mode)
          colorScale: {
            colors: undefined,
            min: undefined,
            max: undefined
          },
          median: {
            show: true,
            color: undefined,
            strokeWidth: 1.75
          }
        },
        violin: {
          bandwidthScale: 1,
          kde: {
            bandwidth: undefined,
            resolution: 64
          },
          normalize: 'individual',
          // 'individual' | 'group'
          side: 'both',
          // 'both' | 'left' | 'right' | 'top' | 'bottom'
          box: {
            show: false,
            width: '15%',
            whiskers: 'minmax',
            // 'minmax' | 'tukey' | 'percentile' (whiskerPercentiles, default [5, 95])
            strokeWidth: 1,
            fillColor: undefined,
            capWidth: 0.5
          },
          points: {
            show: true,
            shape: 'circle',
            // 'circle' | 'square'
            size: 2.5,
            jitter: 0.5,
            constrainToViolin: true,
            position: 'center',
            // 'center' | 'left' | 'right' | 'top' | 'bottom'
            laneWidth: '40%',
            maxPoints: 3000,
            opacity: 0.9,
            fillColor: 'series-dark',
            // 'series-dark' | 'series' | colour
            strokeColor: '#fff',
            strokeWidth: 1,
            colorScale: {
              colors: undefined,
              min: undefined,
              max: undefined,
              steps: 24
            }
          }
        },
        histogram: {
          bins: 'auto',
          binWidth: undefined,
          range: undefined,
          normalize: 'count',
          // 'count' | 'relative' | 'density'
          cumulative: false,
          overlap: true,
          // WCC extension: round rule-based bin widths to 1/2/2.5/5 steps
          // and align edges to them (false = exact rule width from the min)
          niceEdges: true
        },
        bar: {
          dumbbell: {
            connector: {
              color: undefined,
              opacity: 0.55
            },
            dataLabels: {
              enabled: false,
              offset: 6,
              colorFromMarker: true,
              formatter: undefined,
              style: {
                fontSize: '12px',
                fontFamily: undefined,
                fontWeight: 600,
                colors: undefined
              }
            },
            tooltip: {
              differenceLabel: 'Difference'
            }
          }
        }
      }
    };
  }

  /*
   * West Coast Charts - histogram binning (standard statistics; formulas from
   * docs/spec/02-chart-types/histogram.md, implementation our own).
   * Copyright (c) 2026 West Coast Software - MIT License
   */

  const finite$e = v => typeof v === 'number' && isFinite(v);

  /** numeric observations of raw histogram data (numbers or {y}) */
  function observations(data) {
    const out = [];
    (Array.isArray(data) ? data : []).forEach(d => {
      let v = d;
      if (d !== null && typeof d === 'object' && !Array.isArray(d)) v = d.y;
      if (typeof v === 'string' && v.trim() !== '') v = Number(v);
      if (finite$e(v)) out.push(v);
    });
    return out;
  }

  /** quantile with linear interpolation between ranks (R type 7) */
  function quantile(sorted, p) {
    const n = sorted.length;
    if (!n) return NaN;
    if (n === 1) return sorted[0];
    const h = (n - 1) * p;
    const lo = Math.floor(h);
    const hi = Math.min(n - 1, lo + 1);
    return sorted[lo] + (h - lo) * (sorted[hi] - sorted[lo]);
  }
  function stddev(values) {
    const n = values.length;
    if (n < 2) return 0;
    let mean = 0;
    values.forEach(v => mean += v);
    mean /= n;
    let s = 0;
    values.forEach(v => s += (v - mean) * (v - mean));
    return Math.sqrt(s / (n - 1));
  }

  /** bin count for a rule (number of bins over `extent`) */
  function binCount(rule, values, extent) {
    const n = values.length;
    if (!n || !(extent > 0)) return 1;
    const fromWidth = h => h > 0 && isFinite(h) ? Math.max(1, Math.ceil(extent / h)) : null;
    const sturges = Math.ceil(Math.log2(n)) + 1;
    if (finite$e(rule)) return Math.max(1, Math.round(rule));
    const sorted = values.slice().sort((a, b) => a - b);
    const iqr = quantile(sorted, 0.75) - quantile(sorted, 0.25);
    const fdWidth = 2 * iqr * Math.pow(n, -1 / 3);
    switch (rule) {
      case 'sturges':
        return Math.max(1, sturges);
      case 'rice':
        return Math.max(1, Math.ceil(2 * Math.cbrt(n)));
      case 'sqrt':
        return Math.max(1, Math.ceil(Math.sqrt(n)));
      case 'scott':
        return fromWidth(3.49 * stddev(values) * Math.pow(n, -1 / 3)) || sturges;
      case 'fd':
        return fromWidth(fdWidth) || sturges;
      case 'auto':
      default:
        {
          // the narrower of FD and Sturges = the larger bin count
          if (!(iqr > 0)) return Math.max(1, sturges);
          const fd = fromWidth(fdWidth) || sturges;
          return Math.max(fd, sturges);
        }
    }
  }

  /** the 1 / 2 / 2.5 / 5 x 10^k step nearest to `raw` (log scale) */
  function niceStep(raw) {
    if (!(raw > 0) || !isFinite(raw)) return 1;
    const p = Math.pow(10, Math.floor(Math.log10(raw)));
    let best = p;
    [1, 2, 2.5, 5, 10].forEach(m => {
      if (Math.abs(Math.log(m * p) - Math.log(raw)) < Math.abs(Math.log(best) - Math.log(raw))) {
        best = m * p;
      }
    });
    return best;
  }
  const clean = v => Number(v.toPrecision(12));

  /**
   * Shared bin edges for several observation arrays.
   * opts: { bins, binWidth, range, niceEdges }
   */
  function binEdges(allValues, opts = {}) {
    let lo;
    let hi;
    if (Array.isArray(opts.range) && finite$e(+opts.range[0]) && finite$e(+opts.range[1])) {
      lo = Math.min(+opts.range[0], +opts.range[1]);
      hi = Math.max(+opts.range[0], +opts.range[1]);
    } else if (allValues.length) {
      lo = Infinity;
      hi = -Infinity;
      allValues.forEach(v => {
        if (v < lo) lo = v;
        if (v > hi) hi = v;
      });
    } else {
      return {
        start: 0,
        width: 1,
        count: 0,
        edges: []
      };
    }
    if (hi === lo) {
      // one distinct value: one bin of width 1 centred on it
      const width = finite$e(+opts.binWidth) && +opts.binWidth > 0 ? +opts.binWidth : 1;
      return {
        start: lo - width / 2,
        width,
        count: 1,
        edges: [lo - width / 2, lo + width / 2]
      };
    }
    const extent = hi - lo;
    let width;
    let count;
    if (finite$e(+opts.binWidth) && +opts.binWidth > 0) {
      width = +opts.binWidth;
      count = Math.max(1, Math.ceil(extent / width));
    } else {
      count = binCount(opts.bins === undefined ? 'auto' : opts.bins, allValues, extent);
      width = extent / count;
    }
    let start = lo;
    const hasRange = Array.isArray(opts.range);
    const fixedCount = finite$e(opts.bins) && !(finite$e(+opts.binWidth) && +opts.binWidth > 0);
    if (opts.niceEdges && !hasRange && !fixedCount) {
      // WCC: round the width to a 1/2/2.5/5 step (unless binWidth is given)
      // and align the edges to multiples of it
      if (!(finite$e(+opts.binWidth) && +opts.binWidth > 0)) width = niceStep(width);
      start = clean(Math.floor(lo / width + 1e-9) * width);
      count = Math.max(1, Math.ceil((hi - start) / width - 1e-9));
      // max must fall into the last (right-closed) bin
      if (clean(start + count * width) < hi) count++;
    } else if (finite$e(+opts.binWidth) && start + count * width < hi) {
      count++;
    }
    // guard against absurd bin counts (huge extent with a tiny binWidth)
    if (count > 5000) {
      count = 5000;
      width = extent / count;
      start = lo;
    }
    const edges = [];
    for (let k = 0; k <= count; k++) edges.push(clean(start + k * width));
    return {
      start,
      width,
      count,
      edges
    };
  }

  /** counts per bin; values outside [first, last] edge are ignored */
  function countBins(values, e) {
    const counts = new Array(e.count).fill(0);
    const end = e.start + e.count * e.width;
    values.forEach(v => {
      if (v < e.start || v > end) return;
      let k = Math.floor((v - e.start) / e.width);
      if (k >= e.count) k = e.count - 1; // last bin is closed on the right
      if (k < 0) k = 0;
      counts[k]++;
    });
    return counts;
  }

  /** apply normalize ('count' | 'relative' | 'density') and cumulative */
  function shapeCounts(counts, n, width, normalize, cumulative) {
    let vals = counts.slice();
    if (cumulative) {
      let run = 0;
      vals = vals.map(c => run += c);
    }
    if (normalize === 'relative') {
      vals = vals.map(c => n > 0 ? c / n * 100 : 0);
    } else if (normalize === 'density') {
      vals = vals.map(c => n > 0 && width > 0 ? c / (n * width) : 0);
    }
    return vals;
  }

  /**
   * Histogram series transform. All series share one set of edges, computed
   * from every series' observations (legend-hidden ones included, so hiding
   * a series never re-bins the others).
   */
  function binSeries(w, series, rawData) {
    const ho = w.config.plotOptions.histogram || {};
    const hidden = w.globals.collapsedSeriesIndices || [];
    const raws = series.map(s => rawData(s));
    // legend-hidden series have data: [] but keep their raw data in wccSource
    const obs = series.map((s, i) => hidden.indexOf(i) > -1 && s.wccSource ? observations(s.wccSource.data) : observations(raws[i]));
    const all = [].concat(...obs);
    const e = binEdges(all, ho);
    w.globals.wccHistogram = {
      ...e,
      n: obs.map(o => o.length)
    };
    return series.map((s, i) => {
      const isHidden = hidden.indexOf(i) > -1;
      const visible = isHidden ? [] : obs[i];
      const counts = countBins(visible, e);
      const vals = shapeCounts(counts, visible.length, e.width, ho.normalize, ho.cumulative);
      const data = vals.map((v, k) => ({
        x: e.start + (k + 0.5) * e.width,
        y: v,
        wcc: {
          from: e.edges[k],
          to: e.edges[k + 1],
          count: counts[k]
        }
      }));
      if (isHidden) return s;
      return {
        ...s,
        data,
        wccSource: {
          data: raws[i]
        }
      };
    });
  }

  var binning = /*#__PURE__*/Object.freeze({
    __proto__: null,
    binCount: binCount,
    binEdges: binEdges,
    binSeries: binSeries,
    countBins: countBins,
    niceStep: niceStep,
    observations: observations,
    quantile: quantile,
    shapeCounts: shapeCounts,
    stddev: stddev
  });

  /*
   * West Coast Charts - violin statistics: Gaussian KDE with Silverman's rule,
   * five-number summaries (R type 7 quartiles, min/max or Tukey whiskers).
   * Standard formulas, own implementation (docs/spec/02-chart-types/violin.md).
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  const finite$d = v => typeof v === 'number' && isFinite(v);
  function silverman(sorted) {
    const n = sorted.length;
    if (n < 2) return 1;
    const sd = stddev(sorted);
    const iqr = quantile(sorted, 0.75) - quantile(sorted, 0.25);
    let s = Math.min(sd, iqr / 1.34);
    if (!(s > 0)) s = sd > 0 ? sd : iqr > 0 ? iqr / 1.34 : 0;
    if (!(s > 0)) {
      // all observations equal: a narrow bump proportional to the magnitude
      const m = Math.abs(sorted[0]) || 1;
      return m * 0.05;
    }
    return 0.9 * s * Math.pow(n, -1 / 5);
  }
  function evalKde(sorted, h, lo, hi, k) {
    const n = sorted.length;
    const out = [];
    const norm = 1 / (n * h * Math.sqrt(2 * Math.PI));
    for (let s = 0; s < k; s++) {
      const x = lo + (hi - lo) * s / (k - 1);
      let sum = 0;
      // sorted sample: kernels further than 6h contribute nothing visible
      for (let i = 0; i < n; i++) {
        const u = (x - sorted[i]) / h;
        if (u > 6) continue;
        if (u < -6) break;
        sum += Math.exp(-0.5 * u * u);
      }
      out.push([x, sum * norm]);
    }
    return out;
  }

  /**
   * [[value, density], ...] at `resolution` points. The grid spans the data
   * range +- 3h; WCC then trims the near-zero tails (below 0.5 % of the peak)
   * and re-evaluates at full resolution over the trimmed span, so the outline
   * closes softly without long hairlines stretching the axis.
   */
  function kde(sorted, {
    bandwidth,
    resolution = 64
  } = {}) {
    const n = sorted.length;
    if (!n) return [];
    const h = finite$d(bandwidth) && bandwidth > 0 ? bandwidth : silverman(sorted);
    const k = Math.max(8, Math.round(resolution) || 64);
    let lo = sorted[0] - 3 * h;
    let hi = sorted[n - 1] + 3 * h;
    const coarse = evalKde(sorted, h, lo, hi, 256);
    let peak = 0;
    coarse.forEach(p => peak = Math.max(peak, p[1]));
    const th = peak * 0.005;
    let a = 0;
    while (a < coarse.length - 1 && coarse[a + 1][1] < th) a++;
    let b = coarse.length - 1;
    while (b > 0 && coarse[b - 1][1] < th) b--;
    if (b - a >= 3) {
      lo = Math.min(coarse[a][0], sorted[0]);
      hi = Math.max(coarse[b][0], sorted[n - 1]);
    }
    return evalKde(sorted, h, lo, hi, k);
  }

  /** [whiskerLow, q1, median, q3, whiskerHigh]; whiskers 'minmax' | 'tukey' (1.5 IQR) | 'percentile' (pct, default [5, 95]) */
  function summary(sorted, whiskers = 'minmax', pct) {
    const n = sorted.length;
    if (!n) return null;
    const q1 = quantile(sorted, 0.25);
    const med = quantile(sorted, 0.5);
    const q3 = quantile(sorted, 0.75);
    let lo = sorted[0];
    let hi = sorted[n - 1];
    if (whiskers === 'percentile') {
      const p = Array.isArray(pct) ? pct : [5, 95];
      lo = quantile(sorted, Math.max(0, Math.min(0.25, p[0] / 100)));
      hi = quantile(sorted, Math.min(1, Math.max(0.75, p[1] / 100)));
    } else if (whiskers === 'tukey') {
      const f = 1.5 * (q3 - q1);
      lo = sorted.find(v => v >= q1 - f);
      for (let i = n - 1; i >= 0; i--) {
        if (sorted[i] <= q3 + f) {
          hi = sorted[i];
          break;
        }
      }
    }
    return [lo, q1, med, q3, hi];
  }

  /** raw sample of a violin datum (y: number[] | points | y.points) */
  function samplesOf(d) {
    if (!d || typeof d !== 'object') return [];
    if (Array.isArray(d.y)) return observations(d.y);
    if (Array.isArray(d.points)) return observations(d.points);
    if (d.y && Array.isArray(d.y.points)) return observations(d.y.points);
    return [];
  }

  /**
   * Everything the renderer needs for one violin:
   * { density: [[v, w]], peak, summary, points (sorted sample), n, min, max }
   */
  function violinStats(d, opts = {}) {
    const pts = samplesOf(d).sort((a, b) => a - b);
    const given = d && d.y && !Array.isArray(d.y) && Array.isArray(d.y.density) ? d.y.density : null;
    let density;
    if (given) {
      density = given.filter(p => Array.isArray(p) && finite$d(+p[0]) && finite$d(+p[1])).map(p => [+p[0], Math.max(0, +p[1])]).sort((a, b) => a[0] - b[0]);
    } else {
      density = kde(pts, opts.kde);
    }
    const givenSummary = d && d.y && !Array.isArray(d.y) && Array.isArray(d.y.summary) && d.y.summary.length >= 5 ? d.y.summary.slice(0, 5).map(Number) : null;
    let sum = givenSummary || summary(pts, opts.whiskers, opts.pct);
    if (!sum && density.length) {
      // derive a summary from the density alone (weighted quantiles)
      sum = densitySummary(density);
    }
    let peak = 0;
    density.forEach(p => peak = Math.max(peak, p[1]));
    const vals = density.map(p => p[0]).concat(pts);
    if (sum) vals.push(...sum.filter(finite$d));
    const min = vals.length ? Math.min(...vals) : null;
    const max = vals.length ? Math.max(...vals) : null;
    return {
      density,
      peak,
      summary: sum,
      points: pts,
      n: pts.length,
      min,
      max
    };
  }
  function densitySummary(density) {
    const cum = [];
    let total = 0;
    for (let k = 0; k < density.length; k++) {
      if (k > 0) total += (density[k][1] + density[k - 1][1]) / 2 * (density[k][0] - density[k - 1][0]);
      cum.push(total);
    }
    if (!(total > 0)) return null;
    const at = p => {
      const target = p * total;
      for (let k = 1; k < cum.length; k++) {
        if (cum[k] >= target) {
          const f = (target - cum[k - 1]) / (cum[k] - cum[k - 1] || 1);
          return density[k - 1][0] + f * (density[k][0] - density[k - 1][0]);
        }
      }
      return density[density.length - 1][0];
    };
    return [density[0][0], at(0.25), at(0.5), at(0.75), density[density.length - 1][0]];
  }

  /*
   * West Coast Charts - small frame-based tween helper for chart types that
   * animate values (not paths): gauge arc + needle + counting label, etc.
   * - respects prefers-reduced-motion (jumps to the end state)
   * - every tween is bound to a chart instance and cancelled on redraw and
   *   destroy, and stops by itself when its element left the document
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  const raf = fn => typeof window !== 'undefined' && window.requestAnimationFrame ? window.requestAnimationFrame(fn) : setTimeout(() => fn(Date.now()), 16);
  const caf = id => typeof window !== 'undefined' && window.cancelAnimationFrame ? window.cancelAnimationFrame(id) : clearTimeout(id);
  const now = () => typeof performance !== 'undefined' && performance.now ? performance.now() : Date.now();
  const easeOutCubic = t => 1 - Math.pow(1 - t, 3);
  // gentle overshoot (first needle sweep)
  const easeOutBackSoft = t => {
    const s = 0.9;
    const u = t - 1;
    return 1 + (s + 1) * u * u * u + s * u * u;
  };
  function easingFor(w, dynamic, fallback = easeOutCubic) {
    const a = w.config.chart.animations || {};
    const name = dynamic && a.dynamicAnimation && a.dynamicAnimation.easing || a.easing;
    return _10(name) || fallback;
  }

  /**
   * Animation timing for a chart draw: {duration, dynamic}.
   * duration 0 = draw the end state directly (resize, no animation, reduced
   * motion).
   */
  function drawTiming(w) {
    const a = w.config.chart.animations || {};
    const g = w.globals;
    // motion policy of the core (prefers-reduced-motion with
    // animations.respectReducedMotion, largeDatasetThreshold)
    if (g.wccMotion === undefined) _0$7.computeMotion(w);
    if (!a.enabled || !_0$7.on(w)) return {
      duration: 0
    };
    if (g.dataChanged) {
      if (!a.dynamicAnimation || !_0$7.dynOn(w)) {
        return {
          duration: 0,
          dynamic: true
        };
      }
      if (g.shouldAnimate === false) return {
        duration: 0,
        dynamic: true
      };
      return {
        duration: a.dynamicAnimation.speed,
        dynamic: true
      };
    }
    if (g.resized) return {
      duration: 0
    };
    return {
      duration: a.speed,
      dynamic: false
    };
  }

  /** duration of an interaction transition (zoom, drill): 0 when motion is off */
  function interactionDuration(w, max = 650) {
    const a = w.config.chart.animations || {};
    if (w.globals.wccMotion === undefined) _0$7.computeMotion(w);
    if (!a.enabled || !_0$7.on(w)) return 0;
    return Math.min(a.speed || 500, max);
  }
  function registry(ctx) {
    if (!ctx._wccTweens) ctx._wccTweens = new Set();
    return ctx._wccTweens;
  }

  /**
   * tween(ctx, {duration, delay, easing, node, onUpdate(t, e), onDone})
   * onUpdate receives the eased progress; it is called once with 1 when the
   * duration is 0.
   */
  function tween(ctx, opts) {
    const {
      duration = 0,
      delay = 0,
      easing = easeOutCubic,
      node
    } = opts;
    const reg = registry(ctx);
    let id = null;
    let done = false;
    const handle = {
      cancel() {
        if (id !== null) caf(id);
        done = true;
        reg.delete(handle);
      }
    };
    const finish = () => {
      if (done) return;
      opts.onUpdate(1, 1);
      done = true;
      reg.delete(handle);
      if (opts.onDone) opts.onDone();
    };
    if (!(duration > 0)) {
      finish();
      return handle;
    }
    reg.add(handle);
    opts.onUpdate(0, easing(0));
    const start = now() + delay;
    let seen = false;
    const step = () => {
      if (done) return;
      if (node && node.isConnected) seen = true;else if (node && seen && node.isConnected === false) {
        // the chart was redrawn or destroyed under us
        handle.cancel();
        return;
      }
      const t = (now() - start) / duration;
      if (t >= 1) {
        finish();
        return;
      }
      if (t >= 0) opts.onUpdate(t, easing(t));
      id = raf(step);
    };
    id = raf(step);
    return handle;
  }

  /*
   * West Coast Charts - chart type morph (chart.animations.chartTypeMorph).
   * Shapes are compared as outlines with the same number of points (two
   * edges of EDGE points each, clockwise: rect top edge + bottom edge,
   * arc outer edge + inner edge), so a treemap tile can bend into a sunburst
   * arc and back. Renderers record the outlines of the drawn cells
   * (`remember`), the next renderer of another kind takes them (`takeFrom`)
   * and tweens its cells from there (`run`).
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  const EDGE = 16;
  const f2$8 = v => Math.round(v * 100) / 100;
  const finite$c = v => typeof v === 'number' && isFinite(v);

  /** morph settings: {enabled, speed}; speed 0 when motion is off */
  function morphCfg(w) {
    const a = w.config.chart.animations || {};
    const m = a.chartTypeMorph || {};
    const enabled = m.enabled !== false;
    if (w.globals.wccMotion === undefined) _0$7.computeMotion(w);
    const on = enabled && a.enabled !== false && _0$7.on(w);
    return {
      enabled,
      speed: on ? finite$c(+m.speed) && +m.speed >= 0 ? +m.speed : 600 : 0
    };
  }

  /**
   * rectangle -> 2*EDGE points; `outer` names the edge that plays an arc's
   * outer edge ('top' | 'bottom' | 'left' | 'right'), walked in the value
   * direction, then the opposite edge back
   */
  function rectOutline(x, y, wd, ht, outer = 'top') {
    const pts = [];
    const t = k => k / (EDGE - 1);
    for (let k = 0; k < EDGE; k++) {
      if (outer === 'top') pts.push([x + wd * t(k), y]);else if (outer === 'bottom') pts.push([x + wd * t(k), y + ht]);else if (outer === 'right') pts.push([x + wd, y + ht * t(k)]);else pts.push([x, y + ht * t(k)]);
    }
    for (let k = 0; k < EDGE; k++) {
      if (outer === 'top') pts.push([x + wd - wd * t(k), y + ht]);else if (outer === 'bottom') pts.push([x + wd - wd * t(k), y]);else if (outer === 'right') pts.push([x, y + ht - ht * t(k)]);else pts.push([x + wd, y + ht - ht * t(k)]);
    }
    return pts;
  }

  /** annular sector (angles clockwise from 12 o'clock) -> 2*EDGE points */
  function arcOutline(cx, cy, ri, ro, a0, a1) {
    const pts = [];
    const at = (r, a) => [cx + r * Math.sin(a), cy - r * Math.cos(a)];
    for (let k = 0; k < EDGE; k++) pts.push(at(ro, a0 + (a1 - a0) * k / (EDGE - 1)));
    for (let k = 0; k < EDGE; k++) pts.push(at(Math.max(0, ri), a1 - (a1 - a0) * k / (EDGE - 1)));
    return pts;
  }
  function centroid(pts) {
    let x = 0;
    let y = 0;
    pts.forEach(p => {
      x += p[0];
      y += p[1];
    });
    return [x / pts.length, y / pts.length];
  }
  function lerpOutline(a, b, e) {
    return b.map((p, k) => [a[k][0] + (p[0] - a[k][0]) * e, a[k][1] + (p[1] - a[k][1]) * e]);
  }
  function outlinePath(pts) {
    if (!pts || !pts.length) return '';
    return 'M ' + pts.map(p => `${f2$8(p[0])} ${f2$8(p[1])}`).join(' L ') + ' Z';
  }

  /** '#rgb' | '#rrggbb' | 'rgb(a)(...)' -> [r, g, b, a] or null */
  function parseColor$1(c) {
    const t = String(c || '').trim();
    let m = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(t);
    if (m) {
      const h = m[1].length === 3 ? m[1].split('').map(x => x + x).join('') : m[1];
      return [0, 2, 4].map(k => parseInt(h.slice(k, k + 2), 16)).concat(1);
    }
    m = /^rgba?\(([^)]+)\)$/i.exec(t);
    if (m) {
      const p = m[1].split(/[ ,/]+/).filter(Boolean).map(Number);
      if (p.length >= 3 && p.slice(0, 3).every(finite$c)) return [p[0], p[1], p[2], finite$c(p[3]) ? p[3] : 1];
    }
    return null;
  }
  function mixColor(a, b, e) {
    const ca = parseColor$1(a);
    const cb = parseColor$1(b);
    if (!ca || !cb) return e < 0.5 ? a : b;
    const c = ca.map((v, k) => v + (cb[k] - v) * e);
    return `rgba(${Math.round(c[0])},${Math.round(c[1])},${Math.round(c[2])},${f2$8(c[3])})`;
  }
  const valid = pts => Array.isArray(pts) && pts.length === 2 * EDGE && pts.every(p => finite$c(p[0]) && finite$c(p[1]));

  /** record what is on screen: cells = Map key -> {pts, fill} */
  function remember(ctx, kind, cells) {
    const keep = new Map();
    cells.forEach((c, key) => valid(c.pts) && keep.set(key, c));
    ctx._wccMorph = {
      kind,
      cells: keep
    };
  }

  /** the previous outlines when the last drawn kind differs; consumed */
  function takeFrom(ctx, kind) {
    const m = ctx._wccMorph;
    if (!m || m.kind === kind || !m.cells.size) return null;
    ctx._wccMorph = null;
    return m;
  }

  /**
   * Tween from `from` (takeFrom result) to the targets.
   * targets: Map key -> {node, pts, fill}; layer: <g> for ghosts of vanished
   * cells; onDone: final draw. Returns the tween handle (null if skipped).
   */
  function run(ctx, from, targets, {
    layer,
    duration,
    easing = easeOutCubic,
    onDone,
    node
  }) {
    const ghosts = [];
    const NS = 'http://www.w3.org/2000/svg';
    if (layer) {
      from.cells.forEach((c, key) => {
        if (targets.has(key)) return;
        const g = document.createElementNS(NS, 'path');
        g.setAttribute('class', 'wcc-morph-ghost');
        g.setAttribute('fill', c.fill || '#94a3b8');
        g.setAttribute('pointer-events', 'none');
        g.setAttribute('aria-hidden', 'true');
        layer.appendChild(g);
        ghosts.push({
          g,
          a: c.pts,
          b: c.pts.map(() => centroid(c.pts))
        });
      });
    }
    const plan = [];
    targets.forEach((t, key) => {
      const src = from.cells.get(key);
      const a = src ? src.pts : t.pts.map(() => centroid(t.pts));
      plan.push({
        t,
        a,
        fa: src && src.fill,
        enter: !src
      });
    });
    const step = e => {
      plan.forEach(({
        t,
        a,
        fa,
        enter
      }) => {
        t.node.setAttribute('d', outlinePath(lerpOutline(a, t.pts, e)));
        t.node.style.removeProperty('display');
        if (fa && t.fill && fa !== t.fill && e < 1) t.node.setAttribute('fill', mixColor(fa, t.fill, e));else if (t.fill) t.node.setAttribute('fill', t.fill);
        if (enter) t.node.style.opacity = String(Math.min(1, e * 1.5));
      });
      ghosts.forEach(({
        g,
        a,
        b
      }) => {
        g.setAttribute('d', outlinePath(lerpOutline(a, b, e)));
        g.style.opacity = String(1 - e);
      });
    };
    const done = () => {
      ghosts.forEach(({
        g
      }) => g.parentNode && g.parentNode.removeChild(g));
      plan.forEach(({
        t,
        enter
      }) => enter && t.node.style.removeProperty('opacity'));
      if (onDone) onDone();
    };
    step(0);
    return tween(ctx, {
      duration,
      easing,
      node,
      onUpdate: (tt, e) => step(e),
      onDone: done
    });
  }

  /** key of a core (flat) treemap cell, as the partition tree names it */
  function flatKey(w, i, j) {
    const s = w.config.series[i] || {};
    const d = s.wccSource && s.wccSource.data || s.data || [];
    const p = d[j];
    const x = p && typeof p === 'object' && !Array.isArray(p) ? p.x !== undefined ? p.x : p.name !== undefined ? p.name : String(j + 1) : Array.isArray(p) ? p[0] : String(j + 1);
    if (w.config.series.length > 1) return '/' + String(s.name || w.globals.seriesNames[i] || `Series ${i + 1}`) + '/' + String(x);
    return '/' + String(x);
  }

  /**
   * core treemap (flat data): record its tiles, and morph into them from a
   * partition chart. The core rects stay hidden while morph paths (drawn
   * in a layer above them) travel; data labels fade in at the end.
   */
  function coreTreemap(ctx, groups) {
    const w = ctx.w;
    const rects = [];
    groups.forEach(g => {
      const node = g && (g.node || g);
      if (!node || !node.querySelectorAll) return;
      node.querySelectorAll('.apexcharts-treemap-rect').forEach(r => rects.push(r));
    });
    // final tile geometry: the core's own squarified layout (the rects are
    // mid-animation here)
    const cells = new Map();
    let nodes = null;
    try {
      const ser = (w.globals.series || []).map(s => (Array.isArray(s) ? s : []).map(v => Math.abs(v)));
      nodes = window.TreemapSquared && window.TreemapSquared.generate(ser, w.globals.gridWidth, w.globals.gridHeight);
    } catch (e) {
      nodes = null;
    }
    rects.forEach(r => {
      const i = +r.getAttribute('i');
      const j = +r.getAttribute('j');
      const b = nodes && nodes[i] && nodes[i][j];
      if (!b) return;
      const [x, y, wd, ht] = [b[0], b[1], b[2] - b[0], b[3] - b[1]];
      if (![x, y, wd, ht].every(finite$c) || wd <= 0 || ht <= 0) return;
      const fill = r.getAttribute('fill');
      cells.set(flatKey(w, i, j), {
        pts: rectOutline(x, y, wd, ht),
        fill: /^#|^rgb/.test(fill || '') ? fill : null
      });
    });
    const from = takeFrom(ctx, 'treemap');
    remember(ctx, 'treemap', cells);
    if (!from) return;
    const mc = morphCfg(w);
    if (!(mc.speed > 0) || !rects.length) return;
    const host = rects[0].parentNode && rects[0].parentNode.parentNode;
    if (!host) return;
    const layer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    layer.setAttribute('class', 'wcc-morph-layer');
    layer.setAttribute('pointer-events', 'none');
    layer.setAttribute('aria-hidden', 'true');
    host.appendChild(layer);
    const labels = [];
    groups.forEach(g => {
      const node = g && (g.node || g);
      if (node && node.querySelectorAll) node.querySelectorAll('.apexcharts-data-labels').forEach(l => labels.push(l));
    });
    const targets = new Map();
    cells.forEach((c, key) => {
      const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      p.setAttribute('class', 'wcc-morph-cell');
      layer.appendChild(p);
      targets.set(key, {
        node: p,
        pts: c.pts,
        fill: c.fill || '#94a3b8'
      });
    });
    rects.forEach(r => r.style.visibility = 'hidden');
    labels.forEach(l => l.style.opacity = '0');
    const reveal = () => {
      if (layer.parentNode) layer.parentNode.removeChild(layer);
      rects.forEach(r => r.style.removeProperty('visibility'));
      labels.forEach(l => {
        l.style.transition = 'opacity 180ms ease-out';
        l.style.removeProperty('opacity');
      });
    };
    run(ctx, from, targets, {
      layer,
      duration: mc.speed,
      node: layer,
      onDone: reveal
    });
  }

  /*
   * West Coast Charts - streamgraph decorations on top of the rangeArea
   * renderer (docs/spec/02-chart-types/streamgraph.md): band labels at the
   * roomiest spot of each band (auto-sized, never truncated), hover fading
   * of the other bands, label fade-in after the bands arrive.
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  const SVGNS$b = 'http://www.w3.org/2000/svg';
  function measure$1(text, fs, family, weight) {
    // canvas measurement is layout free and works before the SVG is shown
    const jsdom = typeof navigator !== 'undefined' && /jsdom/i.test(navigator.userAgent || '');
    if (!jsdom) try {
      const c = measure$1.c || (measure$1.c = document.createElement('canvas').getContext('2d'));
      if (c) {
        c.font = `${weight} ${fs}px ${family}`;
        const m = c.measureText(text);
        if (m && m.width > 0) return m.width;
      }
    } catch (e) {
      // no canvas (jsdom)
    }
    return text.length * fs * 0.58;
  }
  class Streamgraph {
    static uses(w) {
      return w.config.chart.requestedType === 'streamgraph';
    }
    constructor(ctx) {
      this.ctx = ctx;
      this.w = ctx.w;
    }

    /** pixel geometry of the bands: columns x, and top/bottom per band */
    geometry() {
      const w = this.w;
      const gl = w.globals;
      const st = gl.wccStreamgraph;
      if (!st || !st.xs.length) return null;
      const W = gl.gridWidth;
      const H = gl.gridHeight;
      if (!(W > 0) || !(H > 0)) return null;
      const minX = gl.minX;
      const maxX = gl.maxX;
      const xv = (x, t) => typeof x === 'number' ? x : x instanceof Date ? x.getTime() : t + 1;
      const span = maxX - minX;
      const xs = st.xs.map((x, t) => span > 0 ? (xv(x, t) - minX) / span * W : W / 2);
      const minY = gl.minYArr ? gl.minYArr[0] : gl.minY;
      const maxY = gl.maxYArr ? gl.maxYArr[0] : gl.maxY;
      const yr = maxY - minY || 1;
      const py = v => H - (v - minY) / yr * H;
      const bands = {};
      st.order.forEach(i => {
        bands[i] = {
          top: st.hi[i].map(py),
          bottom: st.lo[i].map(py)
        };
      });
      return {
        xs,
        bands,
        W,
        H
      };
    }

    /** linear interpolation of a band edge at pixel x */
    static at(xs, arr, x) {
      if (x <= xs[0]) return arr[0];
      for (let t = 1; t < xs.length; t++) {
        if (x <= xs[t]) {
          const k = (x - xs[t - 1]) / (xs[t] - xs[t - 1] || 1);
          return arr[t - 1] + (arr[t] - arr[t - 1]) * k;
        }
      }
      return arr[arr.length - 1];
    }

    /** best label spot of band i: {x, y, fs} or null */
    fitLabel(G, i, name, o) {
      const b = G.bands[i];
      const {
        xs,
        W
      } = G;
      const style = o.style || {};
      const family = style.fontFamily || this.w.config.chart.fontFamily || 'sans-serif';
      const weight = style.fontWeight || 600;
      const fixed = style.fontSize && style.fontSize !== 'auto' ? parseFloat(style.fontSize) : null;
      const minF = o.minFontSize || 9;
      const maxF = o.maxFontSize || 30;
      const thick = xs.map((_, t) => b.bottom[t] - b.top[t]);
      // candidate centres: columns and mid-points, thickest first
      const cands = [];
      xs.forEach((x, t) => {
        cands.push({
          x,
          th: thick[t]
        });
        if (t > 0) cands.push({
          x: (x + xs[t - 1]) / 2,
          th: (thick[t] + thick[t - 1]) / 2
        });
      });
      cands.sort((a, c) => c.th - a.th);
      const at = Streamgraph.at;
      const fits = (cx, fs) => {
        const tw = measure$1(name, fs, family, weight);
        const x0 = cx - tw / 2 - 3;
        const x1 = cx + tw / 2 + 3;
        if (x0 < 2 || x1 > W - 2) return null;
        const cy = (at(xs, b.top, cx) + at(xs, b.bottom, cx)) / 2;
        const half = fs * 0.62;
        for (let k = 0; k <= 8; k++) {
          const x = x0 + (x1 - x0) * k / 8;
          if (at(xs, b.top, x) > cy - half || at(xs, b.bottom, x) < cy + half) return null;
        }
        return {
          x: cx,
          y: cy,
          fs,
          tw
        };
      };
      for (const c of cands.slice(0, 14)) {
        if (c.th < (o.minWidth || 24)) break;
        let fs = fixed || Math.max(minF, Math.min(maxF, Math.round(c.th * 0.3)));
        for (; fs >= (fixed || minF); fs = fixed ? 0 : fs - 1) {
          const r = fits(c.x, fs);
          if (r) return r;
          if (fixed) break;
        }
      }
      return null;
    }
    decorate(elGraph) {
      var _ref;
      const w = this.w;
      const st = w.globals.wccStreamgraph;
      const root = elGraph && elGraph.node;
      if (!st || !root) return;
      root.classList.add('wcc-stream');
      const so = w.config.plotOptions.streamgraph || {};
      const lo = so.labels || {};
      const G = this.geometry();
      if (!G) return;
      // series groups (bands) by real index
      const groups = {};
      root.querySelectorAll('.apexcharts-series').forEach(g => {
        const i = parseInt(g.getAttribute('data:realIndex'), 10);
        if (!isNaN(i)) groups[i] = g;
      });
      if (lo.show !== false) this.labels(root, G, groups, lo);
      if (!so.hover || so.hover.show !== false) this.hover(root, groups, (_ref = so.hover && so.hover.opacity) !== null && _ref !== void 0 ? _ref : 0.35);
    }
    labels(root, G, groups, o) {
      const w = this.w;
      const st = w.globals.wccStreamgraph;
      const t = tokensOf(w);
      const style = o.style || {};
      const timing = drawTiming(w);
      st.order.forEach(i => {
        const g = groups[i];
        const name = w.globals.seriesNames[i];
        if (!g || !name) return;
        const spot = this.fitLabel(G, i, String(name), o);
        if (!spot) return;
        const text = document.createElementNS(SVGNS$b, 'text');
        text.setAttribute('class', 'wcc-stream-label');
        text.setAttribute('x', spot.x.toFixed(2));
        text.setAttribute('y', spot.y.toFixed(2));
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('dominant-baseline', 'central');
        text.setAttribute('font-size', `${spot.fs}px`);
        text.setAttribute('font-weight', style.fontWeight || 600);
        text.setAttribute('font-family', style.fontFamily || w.config.chart.fontFamily || 'inherit');
        const user = Array.isArray(style.colors) ? style.colors[i % style.colors.length] : style.colors;
        const ink = user || inkOn(w.globals.colors[i]) || t.text;
        text.setAttribute('fill', ink);
        text.setAttribute('pointer-events', 'none');
        text.setAttribute('aria-hidden', 'true');
        text.textContent = String(name);
        g.appendChild(text);
        if (timing.duration > 0) {
          // labels belong to the final shape: they appear once the bands
          // have arrived (enter) or finished morphing (update)
          text.style.opacity = '0';
          tween(this.ctx, {
            duration: timing.dynamic ? 200 : 260,
            delay: timing.duration * (timing.dynamic ? 0.9 : 0.8),
            node: text,
            onUpdate: p => text.style.opacity = String(p),
            onDone: () => text.style.removeProperty('opacity')
          });
        }
      });
    }
    hover(root, groups, opacity) {
      const ids = Object.keys(groups).map(Number);
      const set = on => {
        ids.forEach(i => {
          const g = groups[i];
          if (on === null || on === i) {
            g.style.removeProperty('opacity');
            g.classList.toggle('wcc-on', on === i);
          } else {
            g.style.opacity = String(opacity);
            g.classList.remove('wcc-on');
          }
        });
        root.classList.toggle('wcc-hovering', on !== null);
      };
      ids.forEach(i => {
        const g = groups[i];
        g.addEventListener('mouseenter', () => set(i));
        g.addEventListener('mouseleave', () => set(null));
      });
    }
  }

  /*
   * West Coast Charts - heatmap cell shapes (docs/spec 01 §plotOptions.heatmap
   * .shape: 'rect' | 'hexagon' | 'circle' | 'diamond').
   *
   * The core heatmap renderer keeps drawing its rect cells (events, tooltip,
   * colour animation, data labels stay untouched). This module re-maps every
   * cell onto its shape box with a transform and clips it with one shared
   * objectBoundingBox clip path:
   * - circle / diamond: inscribed square in the normal cell box;
   * - hexagon (honeycomb): pointy-top regular hexagons, alternate rows offset
   *   by half a cell, rows interlock (pitch 3/4 of the hexagon height). The
   *   half-cell overhang and the interlock are reserved inside the grid, the
   *   honeycomb is centred, and the axis labels move to the new row / column
   *   centres after the axes are drawn.
   * The cell gap is the heatmap stroke width (the stroke itself would be
   * clipped, so it is dropped and the shape is inset instead).
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  const SVGNS$a = 'http://www.w3.org/2000/svg';
  const SHAPES = ['hexagon', 'circle', 'diamond'];
  const SQRT3 = Math.sqrt(3);
  const f4 = v => Math.round(v * 10000) / 10000;
  const f2$7 = v => Math.round(v * 100) / 100;
  const isCalendar = w => w.config.chart.requestedType === 'calendar';
  function heatShapeOf(w) {
    if (w.config.chart.type !== 'heatmap') return 'rect';
    const s = (w.config.plotOptions.heatmap || {}).shape;
    if (SHAPES.indexOf(s) > -1) return s;
    // calendar: square day cells (rounded), packed into a week grid
    return isCalendar(w) ? 'square' : 'rect';
  }

  /** square cells packed from the top left (calendar weeks x weekdays) */
  function packed(W, H, C, R) {
    const s = Math.max(0, Math.min(W / Math.max(1, C), H / Math.max(1, R)));
    return {
      cw: s,
      h: s,
      ox: 0,
      oy: 0,
      box: (r, c) => ({
        x: c * s,
        y: r * s,
        w: s,
        h: s
      }),
      rowCentre: r => r * s + s / 2,
      colCentre: c => c * s + s / 2,
      colLeft: c => c * s
    };
  }

  /**
   * Honeycomb layout in a W x H box: C columns, R rows.
   * aspect 'regular' keeps true hexagons (letterboxed, centred), 'fill'
   * stretches them over the whole box.
   */
  function honeycomb(W, H, C, R, aspect) {
    C = Math.max(1, C);
    R = Math.max(1, R);
    const shift = R > 1 ? 0.5 : 0;
    let cw = W / (C + shift);
    let h = H / (0.75 * (R - 1) + 1);
    if (aspect !== 'fill') {
      // near-regular: up to 20 % wider or taller than a true hexagon before
      // the honeycomb is letterboxed
      const reg = h * SQRT3 / 2;
      if (cw > reg * 1.2) cw = reg * 1.2;else if (cw < reg / 1.2) h = cw * 1.2 * 2 / SQRT3;
    }
    const tw = cw * (C + shift);
    const th = h * (0.75 * (R - 1) + 1);
    const ox = (W - tw) / 2;
    const oy = (H - th) / 2;
    return {
      cw,
      h,
      ox,
      oy,
      box: (r, c) => ({
        x: ox + c * cw + (r % 2 ? cw / 2 : 0),
        y: oy + r * 0.75 * h,
        w: cw,
        h
      }),
      rowCentre: r => oy + r * 0.75 * h + h / 2,
      // a column's label sits between its even and odd row cells
      colCentre: c => ox + c * cw + cw / 2 + (R > 1 ? cw / 4 : 0)
    };
  }

  /** rounded polygon path, points and radius in px, output in box units */
  function roundedPath(pts, r, bw, bh) {
    const n = pts.length;
    let d = '';
    for (let k = 0; k < n; k++) {
      const p = pts[k];
      const a = pts[(k + n - 1) % n];
      const b = pts[(k + 1) % n];
      const la = Math.hypot(a[0] - p[0], a[1] - p[1]);
      const lb = Math.hypot(b[0] - p[0], b[1] - p[1]);
      const t = Math.min(r, la / 2, lb / 2);
      const p1 = [p[0] + (a[0] - p[0]) * t / la, p[1] + (a[1] - p[1]) * t / la];
      const p2 = [p[0] + (b[0] - p[0]) * t / lb, p[1] + (b[1] - p[1]) * t / lb];
      const u = q => `${f4(q[0] / bw)} ${f4(q[1] / bh)}`;
      d += `${k === 0 ? 'M' : 'L'} ${u(p1)} Q ${u(p)} ${u(p2)} `;
    }
    return d + 'Z';
  }

  /** clip path geometry in objectBoundingBox units for one cell of bw x bh px */
  function shapePath(shape, bw, bh, gap, radius) {
    const g = Math.max(0, Math.min(gap / 2, bw / 4, bh / 4));
    const x0 = g;
    const y0 = g;
    const x1 = bw - g;
    const y1 = bh - g;
    const mx = bw / 2;
    const my = bh / 2;
    if (shape === 'circle') return null;
    if (shape === 'square') return roundedPath([[x0, y0], [x1, y0], [x1, y1], [x0, y1]], radius, bw, bh);
    if (shape === 'diamond') {
      // inset the diamond so the gap is measured perpendicular to its edges
      const k = g * Math.SQRT2;
      return roundedPath([[mx, k - g + y0], [x1 + g - k, my], [mx, y1 + g - k], [k - g + x0, my]], radius, bw, bh);
    }
    // pointy-top hexagon; slanted edges inset a little more so the gap reads even
    const s = g * 0.15;
    return roundedPath([[mx, y0 + s], [x1, bh * 0.25 + g * 0.5], [x1, bh * 0.75 - g * 0.5], [mx, y1 - s], [x0, bh * 0.75 - g * 0.5], [x0, bh * 0.25 + g * 0.5]], radius, bw, bh);
  }
  class HeatShape {
    static uses(w) {
      return heatShapeOf(w) !== 'rect';
    }
    static isCalendar(w) {
      return isCalendar(w);
    }
    constructor(ctx) {
      this.ctx = ctx;
      this.w = ctx.w;
    }
    decorate(elGraph) {
      const w = this.w;
      const gl = w.globals;
      const root = elGraph && elGraph.node;
      if (!root) return;
      const shape = heatShapeOf(w);
      const ho = w.config.plotOptions.heatmap || {};
      const rects = Array.from(root.querySelectorAll('rect.apexcharts-heatmap-rect'));
      root.classList.add('wcc-heat-shape', `wcc-heat-${shape}`);
      gl.wccHeatShape = null;
      if (!rects.length) return;
      const W = gl.gridWidth;
      const H = gl.gridHeight;
      const C = Math.max(1, gl.dataPoints || 1);
      const R = Math.max(1, gl.series.length);
      const xd = W / C;
      const yd = H / R;
      if (!(xd > 0) || !(yd > 0)) return;
      const gap = ho.useFillColorAsStroke ? 0 : parseFloat(rects[0].getAttribute('stroke-width')) || 0;
      const radius = typeof ho.radius === 'number' ? Math.max(0, ho.radius) : 2;
      const cal = isCalendar(w);
      let map;
      let bw;
      let bh;
      if (shape === 'hexagon' || cal) {
        const hc = shape === 'hexagon' ? honeycomb(W, H, C, R, ho.shapeAspect) : packed(W, H, C, R);
        map = (r, c) => hc.box(r, c);
        bw = hc.cw;
        bh = hc.h;
        gl.wccHeatShape = {
          shape,
          calendar: cal,
          rowCentre: hc.rowCentre,
          colCentre: hc.colCentre,
          colLeft: hc.colLeft,
          xd,
          yd,
          R,
          C
        };
        (gl.wccAfterAxes = gl.wccAfterAxes || []).push(() => this.moveAxisLabels());
      } else {
        const s = Math.min(xd, yd);
        map = (r, c) => ({
          x: c * xd + (xd - s) / 2,
          y: r * yd + (yd - s) / 2,
          w: s,
          h: s
        });
        bw = s;
        bh = s;
        gl.wccHeatShape = {
          shape,
          xd,
          yd,
          R,
          C
        };
      }
      const id = `wccHeatShape${gl.cuid}`;
      this.clipPath(id, shape, bw, bh, gap, Math.min(radius * 1.5, bw / 4));
      const sx = bw / xd;
      const sy = bh / yd;
      const cell = (x, y) => ({
        c: Math.max(0, Math.min(C - 1, Math.round(x / xd))),
        r: Math.max(0, Math.min(R - 1, Math.round(y / yd)))
      });
      rects.forEach(rc => {
        const x1 = parseFloat(rc.getAttribute('cx')) || 0;
        const y1 = parseFloat(rc.getAttribute('cy')) || 0;
        const {
          r,
          c
        } = cell(x1, y1);
        const b = map(r, c);
        rc.setAttribute('transform', `matrix(${f4(sx)} 0 0 ${f4(sy)} ${f2$7(b.x - x1 * sx)} ${f2$7(b.y - y1 * sy)})`);
        rc.setAttribute('clip-path', `url(#${id})`);
        rc.setAttribute('stroke-width', 0);
        rc.setAttribute('rx', 0);
        rc.setAttribute('ry', 0);
        rc.setAttribute('data-wcc-shape', shape);
        // the core tooltip anchors on cx/cy/width/height
        rc.setAttribute('cx', f2$7(b.x));
        rc.setAttribute('cy', f2$7(b.y));
        if (cal) this.calendarCell(rc);
      });
      // data labels to the shape centres
      root.querySelectorAll('.apexcharts-datalabels text, text.apexcharts-datalabel').forEach(t => {
        const x = parseFloat(t.getAttribute('x'));
        const y = parseFloat(t.getAttribute('y'));
        if (!isFinite(x) || !isFinite(y)) return;
        const {
          r,
          c
        } = cell(x - xd / 2, y - yd / 2);
        const b = map(r, c);
        const dx = b.x + b.w / 2 - (c * xd + xd / 2);
        const dy = b.y + b.h / 2 - (r * yd + yd / 2);
        if (Math.abs(dx) < 0.01 && Math.abs(dy) < 0.01) return;
        t.setAttribute('x', f2$7(x + dx));
        t.setAttribute('y', f2$7(y + dy));
        t.querySelectorAll('tspan[x]').forEach(ts => ts.setAttribute('x', f2$7(parseFloat(ts.getAttribute('x')) + dx)));
      });
    }

    /** calendar: days outside the range vanish, days without a value get the empty colour */
    calendarCell(rc) {
      const w = this.w;
      const i = parseInt(rc.getAttribute('i'), 10);
      const j = parseInt(rc.getAttribute('j'), 10);
      const s = w.config.series[i];
      const d = s && s.data && s.data[j];
      const meta = d && d.wcc;
      rc.classList.remove('wcc-cal-out', 'wcc-cal-empty');
      rc.style.removeProperty('fill');
      if (!meta) return;
      rc.setAttribute('data-date', meta.iso);
      if (!meta.inRange) {
        rc.classList.add('wcc-cal-out');
        rc.setAttribute('aria-hidden', 'true');
      } else if (!(typeof d.y === 'number' && isFinite(d.y))) {
        const co = w.config.plotOptions.calendar || {};
        rc.classList.add('wcc-cal-empty');
        // a style wins over the fill the core colour tween writes
        rc.style.fill = co.emptyColor || (w.config.theme && w.config.theme.mode === 'dark' ? 'rgba(148,163,184,0.14)' : 'rgba(100,116,139,0.10)');
      }
    }
    clipPath(id, shape, bw, bh, gap, radius) {
      const gl = this.w.globals;
      const svg = gl.dom && gl.dom.Paper && gl.dom.Paper.node;
      if (!svg) return;
      let defs = svg.querySelector('defs');
      if (!defs) {
        defs = document.createElementNS(SVGNS$a, 'defs');
        svg.insertBefore(defs, svg.firstChild);
      }
      const old = defs.querySelector(`#${id}`);
      if (old) old.remove();
      const cp = document.createElementNS(SVGNS$a, 'clipPath');
      cp.setAttribute('id', id);
      cp.setAttribute('clipPathUnits', 'objectBoundingBox');
      cp.setAttribute('class', 'wcc-heat-clip');
      if (shape === 'circle') {
        const e = document.createElementNS(SVGNS$a, 'ellipse');
        const g = Math.max(0, Math.min(gap / 2, bw / 4));
        e.setAttribute('cx', 0.5);
        e.setAttribute('cy', 0.5);
        e.setAttribute('rx', f4(0.5 - g / bw));
        e.setAttribute('ry', f4(0.5 - g / bh));
        cp.appendChild(e);
      } else {
        const p = document.createElementNS(SVGNS$a, 'path');
        p.setAttribute('d', shapePath(shape, bw, bh, gap, radius));
        cp.appendChild(p);
      }
      defs.appendChild(cp);
    }

    /** hexagon: y labels to the interlocked row centres, x labels between the offset columns */
    moveAxisLabels() {
      const w = this.w;
      const gl = w.globals;
      const hs = gl.wccHeatShape;
      const root = gl.dom && gl.dom.baseEl;
      if (!hs || !hs.rowCentre || !root) return;
      const shiftText = (t, dx, dy) => {
        const prev = t.getAttribute('data-wcc-shift');
        const base = prev !== null ? t.getAttribute('data-wcc-transform') || '' : t.getAttribute('transform') || '';
        if (prev === null) t.setAttribute('data-wcc-transform', base);
        t.setAttribute('data-wcc-shift', `${f2$7(dx)},${f2$7(dy)}`);
        t.setAttribute('transform', `translate(${f2$7(dx)} ${f2$7(dy)})${base ? ' ' + base : ''}`);
      };
      const ys = Array.from(root.querySelectorAll('.apexcharts-yaxis-texts-g text'));
      // y labels: row k from the top sits at k*yd + yd/2 (series are drawn bottom-up)
      ys.forEach(t => {
        const y = parseFloat(t.getAttribute('y'));
        if (!isFinite(y)) return;
        const top = y - gl.translateY;
        const r = Math.round((top - hs.yd / 2) / hs.yd);
        if (r < 0 || r >= hs.R) return;
        shiftText(t, 0, hs.rowCentre(r) - (r * hs.yd + hs.yd / 2));
      });
      const xs = Array.from(root.querySelectorAll('.apexcharts-xaxis-texts-g text'));
      xs.forEach(t => {
        const x = parseFloat(t.getAttribute('x'));
        if (!isFinite(x)) return;
        const c = Math.round((x - hs.xd / 2) / hs.xd);
        if (c < 0 || c >= hs.C) return;
        if (hs.calendar && hs.colLeft) {
          // month names start at their first week column
          t.setAttribute('text-anchor', 'start');
          shiftText(t, hs.colLeft(c) - (c * hs.xd + hs.xd / 2), 0);
        } else shiftText(t, hs.colCentre(c) - (c * hs.xd + hs.xd / 2), 0);
      });
    }
  }

  /*
   * West Coast Charts - dataLabels.countUp for plain bar / column / line / area
   * charts: on a data update every numeric data label counts from its previous
   * to its new value (the label formatter runs every frame) and travels with
   * its bar end / marker. Labels are matched by series name + category, so a
   * reordered category keeps its own counter.
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  const TYPES = {
    bar: 1,
    line: 1,
    area: 1
  };
  function countUpOn(w) {
    const c = (w.config.dataLabels || {}).countUp;
    const rt = w.config.chart.requestedType;
    return !!(c && c.enabled) && w.config.dataLabels.enabled !== false && !!TYPES[w.config.chart.type] && (!rt || rt === w.config.chart.type);
  }

  // decimals of the final value, so the default formatter does not show
  // 41.73958 mid-count when the data says 42
  function decimalsOf$1(v) {
    const s = String(v);
    if (/e/i.test(s)) return 0;
    const k = s.indexOf('.');
    return k < 0 ? 0 : Math.min(4, s.length - k - 1);
  }
  const key = (w, i, j) => {
    const g = w.globals;
    const label = g.labels && g.labels[j] !== undefined ? g.labels[j] : j;
    return `${g.seriesNames[i]}\u0000${label}`;
  };
  function countUp(ctx, elGraph) {
    const w = ctx.w;
    if (!countUpOn(w)) {
      ctx._wccCount = null;
      return;
    }
    const groups = (Array.isArray(elGraph) ? elGraph : [elGraph]).filter(g => g && g.node);
    const els = [];
    groups.forEach(g => els.push(...g.node.querySelectorAll('text[data-wcc-j]')));
    const prev = ctx._wccCount || new Map();
    const next = new Map();
    const {
      duration,
      dynamic
    } = drawTiming(w);
    const fmt = w.config.dataLabels.formatter;
    const moving = [];
    els.forEach(el => {
      const i = +el.getAttribute('data-wcc-i');
      const j = +el.getAttribute('data-wcc-j');
      const series = w.globals.series[i];
      const v = series ? series[j] : undefined;
      if (typeof v !== 'number' || !isFinite(v)) return;
      const x = parseFloat(el.getAttribute('cx')) || 0;
      const y = parseFloat(el.getAttribute('cy')) || 0;
      const k = key(w, i, j);
      next.set(k, {
        v,
        x,
        y
      });
      const from = prev.get(k);
      if (!from || !dynamic || duration <= 0) return;
      if (from.v === v && from.x === x && from.y === y) return;
      moving.push({
        el,
        i,
        j,
        v,
        from,
        dx: from.x - x,
        dy: from.y - y,
        d: Math.max(decimalsOf$1(v), decimalsOf$1(from.v))
      });
    });
    ctx._wccCount = next;
    if (!moving.length) return;
    // the labels of a morph are shown right away (the core reveals them only
    // after the animation), counting while the bars move
    moving.forEach(m => {
      const wrap = m.el.closest('.apexcharts-element-hidden');
      if (wrap) wrap.classList.remove('apexcharts-element-hidden');
    });
    const ease = easingFor(w, true);
    const text = (m, val) => {
      try {
        const s = fmt(val, {
          seriesIndex: m.i,
          dataPointIndex: m.j,
          w
        });
        return s === undefined || s === null ? '' : String(s);
      } catch (e) {
        return String(val);
      }
    };
    const setText = (el, s) => {
      const t = el.querySelector('tspan');
      if (t && el.querySelectorAll('tspan').length === 1) t.textContent = s;else if (!el.querySelector('tspan')) el.textContent = s;
    };
    tween(ctx, {
      duration,
      easing: ease,
      node: moving[0].el,
      onUpdate: (t, e) => {
        moving.forEach(m => {
          const val = e >= 1 ? m.v : +(m.from.v + (m.v - m.from.v) * e).toFixed(m.d);
          setText(m.el, text(m, val));
          const u = 1 - e;
          if (m.dx || m.dy) {
            m.el.setAttribute('transform', u > 0 ? `translate(${(m.dx * u).toFixed(2)},${(m.dy * u).toFixed(2)})` : '');
          }
        });
      },
      onDone: () => moving.forEach(m => {
        setText(m.el, text(m, m.v));
        m.el.removeAttribute('transform');
      })
    });
  }

  /*
   * West Coast Charts - bar race (chart.type 'barRace', WCC extension).
   * The core draws a sorted horizontal bar chart (series transform
   * `raceSeries`); this decorator adds the name / value labels and the
   * ticker, and on every update moves each bar (keyed by name) from its last
   * rank, width and value: bars glide, values count up
   * (dataLabels.countUp), newcomers rise from below the cut, leavers sink.
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  const NS = 'http://www.w3.org/2000/svg';
  const finite$b = v => typeof v === 'number' && isFinite(v);
  const f2$6 = v => Math.round(v * 100) / 100;
  const lerp$1 = (a, b, e) => a + (b - a) * e;
  const el$7 = (name, attrs) => {
    const n = document.createElementNS(NS, name);
    Object.keys(attrs || {}).forEach(k => attrs[k] !== undefined && n.setAttribute(k, attrs[k]));
    return n;
  };

  /** bounding box of an SVG path from its coordinates */
  function pathBox(d) {
    const nums = String(d || '').match(/-?\d*\.?\d+(?:e[-+]?\d+)?/gi);
    if (!nums || nums.length < 4) return null;
    let x0 = Infinity;
    let x1 = -Infinity;
    let y0 = Infinity;
    let y1 = -Infinity;
    // paths from Graphics are absolute M/L/C/Q/Z with x y pairs
    for (let k = 0; k + 1 < nums.length; k += 2) {
      const x = +nums[k];
      const y = +nums[k + 1];
      if (!finite$b(x) || !finite$b(y)) continue;
      x0 = Math.min(x0, x);
      x1 = Math.max(x1, x);
      y0 = Math.min(y0, y);
      y1 = Math.max(y1, y);
    }
    return finite$b(x0) && finite$b(y0) ? {
      x0,
      x1,
      y0,
      y1
    } : null;
  }

  /**
   * value label: plotOptions.barRace.values.formatter -> the locale's compact
   * notation (182.7k, 9.8B, −2.4B; 0 stays 0); null -> values.nullLabel ('–')
   */
  function raceFmt(w, v, j) {
    const o = (w.config.plotOptions.barRace || {}).values || {};
    if (!finite$b(v)) return o.nullLabel !== undefined ? String(o.nullLabel) : '\u2013';
    if (typeof o.formatter === 'function') {
      try {
        return String(o.formatter(v, {
          w,
          dataPointIndex: j
        }));
      } catch (e) {
        // fall through to the default
      }
    }
    if (v === 0) return '0';
    return compactNumber$1(v, {
      decimals: finite$b(o.decimals) ? o.decimals : 1,
      locale: chartLocale(w)
    });
  }

  /**
   * labels of bars that pass each other: the one that moves further fades
   * while the two would overlap, so names never cross visibly.
   * entries [{ cy, move, rank }] -> alpha per entry
   */
  function uncross(entries, fs, slot) {
    const lo = Math.min(fs * 1.05, slot * 0.7);
    const hi = Math.max(lo + 0.5, Math.min(fs * 1.4, slot * 0.98));
    const alpha = entries.map(() => 1);
    for (let a = 0; a < entries.length; a++) {
      for (let b = a + 1; b < entries.length; b++) {
        const d = Math.abs(entries[a].cy - entries[b].cy);
        if (d >= hi) continue;
        const A = entries[a];
        const B = entries[b];
        const loser = A.move > B.move + 0.5 ? a : B.move > A.move + 0.5 ? b : A.rank > B.rank ? a : b;
        const f = Math.max(0, Math.min(1, (d - lo) / (hi - lo)));
        alpha[loser] = Math.min(alpha[loser], f);
      }
    }
    return alpha;
  }

  /** set a name, shortened with an ellipsis to maxW (measured when the
   * renderer can, estimated otherwise; call it on an attached node) */
  function fitText(node, text, maxW, fs) {
    const full = String(text);
    node.textContent = full;
    const measure = () => {
      try {
        const l = node.getComputedTextLength ? node.getComputedTextLength() : 0;
        if (l > 0) return l;
      } catch (e) {
        /* detached */
      }
      return node.textContent.length * fs * 0.56;
    };
    if (measure() <= maxW) return full;
    let lo = 0;
    let hi = full.length;
    while (lo < hi) {
      const mid = Math.ceil((lo + hi) / 2);
      node.textContent = full.slice(0, mid).trimEnd() + '\u2026';
      if (measure() <= maxW) lo = mid;else hi = mid - 1;
    }
    node.textContent = (lo > 0 ? full.slice(0, lo).trimEnd() : '') + '\u2026';
    node.setAttribute('data-full', full);
    return node.textContent;
  }

  /**
   * the maxBars cut: shown when names wait below it ('auto'), always (true)
   * or never (false). label: plotOptions.barRace.cut.label string |
   * fn({ shown, total }) | false; default 'Top 10 of 24'
   */
  function raceCut(o, shown, total) {
    const c = o.cut || {};
    const show = c.show === true || c.show !== false && total > shown;
    if (!show) return null;
    let label = null;
    if (typeof c.label === 'function') label = safe(() => c.label({
      shown,
      total
    }));else if (typeof c.label === 'string') label = c.label;else if (c.label !== false) label = `Top ${shown} of ${total}`;
    return {
      label: label === undefined || label === null || label === false ? null : String(label)
    };
  }
  class BarRace {
    constructor(ctx) {
      this.ctx = ctx;
      this.w = ctx.w;
    }
    static uses(w) {
      return w.config.chart.requestedType === 'barRace';
    }
    get o() {
      return this.w.config.plotOptions.barRace || {};
    }
    duration() {
      const w = this.w;
      const a = w.config.chart.animations || {};
      if (w.globals.wccMotion === undefined) _0$7.computeMotion(w);
      if (!a.enabled || !_0$7.on(w)) return 0;
      const prev = this.ctx._wccRace;
      if (!prev || !prev.bars.size) return w.globals.resized ? 0 : a.speed || 600;
      const s = +this.o.speed;
      return finite$b(s) && s >= 0 ? s : 750;
    }
    decorate(g) {
      const w = this.w;
      const ctx = this.ctx;
      const node = g && (g.node || g);
      if (!node || !node.querySelectorAll) return;
      const o = this.o;
      const t = tokensOf(w);
      const gw = w.globals.gridWidth;
      const gh = w.globals.gridHeight;
      const s0 = w.config.series[0] || {};
      const data = Array.isArray(s0.data) ? s0.data : [];

      // ---- current bars, keyed by name (null values keep their row: no bar, a dash)
      const bars = new Map();
      const nodes = {};
      node.querySelectorAll('path.apexcharts-bar-area').forEach(p => {
        nodes[+p.getAttribute('j')] = p;
      });
      const slot = data.length ? gh / data.length : gh;
      let zero = null;
      let barH = null;
      data.forEach((d, j) => {
        const p = nodes[j];
        if (!d || !finite$b(d.y) || !p) return;
        const b = pathBox(p.getAttribute('pathTo') || p.getAttribute('d'));
        if (!b) return;
        const name = String(d.x);
        if (zero === null) zero = d.y < 0 ? b.x1 : b.x0;
        if (barH === null) barH = Math.max(0.5, b.y1 - b.y0);
        bars.set(name, {
          node: p,
          j,
          name,
          v: d.y,
          color: d.fillColor || p.getAttribute('fill'),
          x0: b.x0,
          x1: b.x1,
          y: b.y0,
          h: Math.max(0.5, b.y1 - b.y0)
        });
      });
      data.forEach((d, j) => {
        if (!d || finite$b(d.y) || d.x === undefined || d.x === null) return;
        if (nodes[j]) nodes[j].style.visibility = 'hidden';
        const h = barH || slot * 0.6;
        const x0 = zero === null ? 0 : zero;
        bars.set(String(d.x), {
          node: null,
          j,
          name: String(d.x),
          v: null,
          color: d.fillColor,
          x0,
          x1: x0,
          y: j * slot + (slot - h) / 2,
          h
        });
      });
      const layer = el$7('g', {
        class: 'wcc-race',
        'pointer-events': 'none',
        'aria-hidden': 'true'
      });
      node.appendChild(layer);
      const fs = finite$b(+(o.labels || {}).fontSize) ? +(o.labels || {}).fontSize : 12.5;
      const vfs = finite$b(+(o.values || {}).fontSize) ? +(o.values || {}).fontSize : fs;
      const showNames = (o.labels || {}).show !== false;
      const showValues = (o.values || {}).show !== false;
      const textStyle = 'font-variant-numeric: tabular-nums; font-feature-settings: "tnum"';

      // ---- labels (names fit into the left gutter, ellipsis past it)
      // the gutter the core reserved; where text is not measurable (no layout,
      // e.g. jsdom) the core reserves none, so fall back to the label cap
      const coords = w.globals.yLabelsCoords || [];
      const measured = coords.some(c => c && c.width > 0);
      const y0 = Array.isArray(w.config.yaxis) ? w.config.yaxis[0] : w.config.yaxis;
      const cap = y0 && y0.labels && +y0.labels.maxWidth || 160;
      const nameRoom = measured ? Math.max(24, (w.globals.translateX || 0) - 12) : cap;
      const items = [];
      bars.forEach(b => {
        const name = showNames ? el$7('text', {
          class: 'wcc-race-name',
          'text-anchor': 'end',
          'dominant-baseline': 'central',
          'font-size': fs,
          'font-weight': 500,
          fill: t.text,
          style: textStyle
        }) : null;
        if (name) {
          layer.appendChild(name);
          fitText(name, b.name, nameRoom, fs);
        }
        const value = showValues ? el$7('text', {
          class: 'wcc-race-value',
          'dominant-baseline': 'central',
          'font-size': vfs,
          'font-weight': 600,
          style: textStyle
        }) : null;
        if (value) layer.appendChild(value);
        items.push({
          b,
          name,
          value
        });
      });

      // ---- ticker (period label)
      const tk = o.ticker || {};
      let tickerText = typeof tk.text === 'function' ? safe(() => tk.text({
        w
      })) : tk.text;
      let ticker = null;
      if (tk.show !== false && tickerText !== undefined && tickerText !== null && tickerText !== '') {
        const spot = tickerSpot(bars, String(tickerText), gw, gh, finite$b(+tk.fontSize) ? +tk.fontSize : null, txt => raceFmt(w, txt, 0), vfs);
        ticker = el$7('text', {
          class: 'wcc-race-ticker',
          x: f2$6(gw - 6),
          y: f2$6(spot.above ? -8 : spot.top ? spot.fs * 0.86 : gh - 8),
          'text-anchor': 'end',
          'font-size': f2$6(spot.fs),
          'font-weight': spot.above ? 600 : 700,
          fill: tk.color || t.textMuted,
          opacity: spot.above ? 1 : tk.opacity !== undefined ? tk.opacity : 0.55,
          style: textStyle + '; letter-spacing: -0.02em'
        });
        layer.appendChild(ticker);
      }

      // ---- the maxBars cut: a dashed rule under the last bar that newcomers
      // rise through and leavers sink through (it brightens while they cross)
      const meta = s0.wccRace || {};
      const total = finite$b(meta.total) ? meta.total : data.length;
      const cut = raceCut(o, data.length, total);
      let cutLine = null;
      let cutText = null;
      if (cut) {
        const cc = o.cut && o.cut.color || t.textMuted;
        cutLine = el$7('line', {
          class: 'wcc-race-cut',
          x1: 0,
          x2: f2$6(gw),
          y1: f2$6(gh - 0.5),
          y2: f2$6(gh - 0.5),
          stroke: cc,
          'stroke-width': 1,
          'stroke-dasharray': '4 3',
          opacity: 0.6
        });
        layer.insertBefore(cutLine, layer.firstChild);
        if (cut.label && showNames) {
          cutText = el$7('text', {
            class: 'wcc-race-cut-label',
            x: -10,
            y: f2$6(gh + fs * 0.95),
            'text-anchor': 'end',
            'dominant-baseline': 'central',
            'font-size': f2$6(fs * 0.82),
            fill: cc,
            style: textStyle
          });
          cutText.textContent = cut.label;
          layer.appendChild(cutText);
          // keep it inside the svg when the name column is narrower than the label (phones)
          const tl = measured && cutText.getComputedTextLength ? cutText.getComputedTextLength() : 0;
          if (tl > (w.globals.translateX || 0) - 14) cutText.setAttribute('x', f2$6(tl + 4 - (w.globals.translateX || 0)));
        }
      }

      // ---- placement for a state
      const vRoom = txt => String(txt).length * vfs * 0.6 + 8;
      const padR = w.config.grid.padding && w.config.grid.padding.right || 0;
      const place = (it, st, alpha) => {
        const cy = st.y + st.h / 2;
        if (it.name) {
          it.name.setAttribute('x', f2$6(Math.min(st.x0, 0) - 8));
          it.name.setAttribute('y', f2$6(cy));
          it.name.style.opacity = alpha < 1 ? String(alpha) : '';
        }
        if (it.value) {
          const txt = raceFmt(w, it.b.v === null ? null : st.v, it.b.j);
          it.value.textContent = txt;
          if (it.b.v === null) {
            it.value.setAttribute('x', f2$6(st.x0 + 6));
            it.value.setAttribute('y', f2$6(st.y + st.h / 2));
            it.value.setAttribute('text-anchor', 'start');
            it.value.setAttribute('fill', t.textMuted);
            it.value.style.opacity = alpha < 1 ? String(alpha) : '';
            return;
          }
          const need = vRoom(txt);
          const neg = it.b.v < 0;
          let x;
          let anchor;
          let inside = false;
          if (!neg) {
            const out = st.x1 + need <= gw + padR - 2 || st.x1 - st.x0 < need + 6;
            x = out ? st.x1 + 6 : st.x1 - 6;
            anchor = out ? 'start' : 'end';
            inside = !out;
          } else if (st.x0 - need >= 2) {
            x = st.x0 - 6;
            anchor = 'end';
          } else if (st.x1 - st.x0 >= need + 6) {
            x = st.x0 + 6;
            anchor = 'start';
            inside = true;
          } else {
            x = st.x1 + 6;
            anchor = 'start';
          }
          it.value.setAttribute('x', f2$6(x));
          it.value.setAttribute('y', f2$6(cy));
          it.value.setAttribute('text-anchor', anchor);
          it.value.setAttribute('fill', inside ? inkOn(it.b.color) || '#fff' : t.text);
          it.value.style.opacity = alpha < 1 ? String(alpha) : '';
        }
      };
      const setBar = (b, st, alpha) => {
        if (!b.node) return;
        const sx = b.x1 - b.x0 > 0.5 ? (st.x1 - st.x0) / (b.x1 - b.x0) : 1;
        const sy = st.h / b.h;
        const tx = (b.v < 0 ? b.x1 : b.x0) * (1 - sx);
        const ty = st.y - b.y * sy;
        if (Math.abs(sx - 1) < 1e-4 && Math.abs(sy - 1) < 1e-4 && Math.abs(ty) < 0.01) b.node.removeAttribute('transform');else b.node.setAttribute('transform', `matrix(${f2$6(sx * 1e4) / 1e4} 0 0 ${f2$6(sy * 1e4) / 1e4} ${f2$6(tx)} ${f2$6(ty)})`);
        b.node.style.opacity = alpha < 1 ? String(alpha) : '';
      };

      // ---- state memory and motion
      const prev = ctx._wccRace;
      const now = new Map();
      bars.forEach(b => now.set(b.name, {
        x0: b.x0,
        x1: b.x1,
        y: b.y,
        h: b.h,
        v: b.v,
        color: b.color
      }));
      const prevTicker = prev ? prev.ticker : undefined;
      const prevTotal = prev ? prev.total : undefined;
      ctx._wccRace = {
        total,
        bars: now,
        ticker: tickerText,
        min: Math.min(...Array.from(now.values()).map(s => s.v).filter(finite$b))
      };
      const dur = this.duration();
      const first = !prev || !prev.bars.size;
      const setTicker = e => {
        if (!ticker) return;
        const a = typeof prevTicker === 'number' ? prevTicker : parseFloat(prevTicker);
        const b = typeof tickerText === 'number' ? tickerText : parseFloat(tickerText);
        const numeric = finite$b(a) && finite$b(b) && String(tickerText).trim() === String(b) && e < 1;
        if (numeric) {
          const v = lerp$1(a, b, e);
          ticker.textContent = Number.isInteger(a) && Number.isInteger(b) ? String(Math.round(v)) : groupedNumber(v, 1);
        } else ticker.textContent = String(tickerText);
      };
      // crossings of the cut this update: newcomers plus leavers
      let crossers = 0;
      if (prev && !first) {
        bars.forEach((b, name) => {
          if (!prev.bars.has(name)) crossers++;
        });
        prev.bars.forEach((p, name) => {
          if (!bars.has(name)) crossers++;
        });
      }
      const setCut = e => {
        if (!cutLine) return;
        if (first) {
          cutLine.setAttribute('x2', f2$6(gw * e));
          if (cutText) cutText.style.opacity = String(e);
        } else if (crossers) {
          const pulse = Math.sin(Math.PI * Math.min(1, e));
          cutLine.setAttribute('opacity', f2$6(0.6 + 0.4 * pulse));
          cutLine.setAttribute('stroke-width', f2$6(1 + pulse));
        }
        if (cutText && finite$b(prevTotal) && prevTotal !== total && e < 1 && (!o.cut || o.cut.label === undefined)) {
          cutText.textContent = `Top ${data.length} of ${Math.round(lerp$1(prevTotal, total, e))}`;
        } else if (cutText && e >= 1) cutText.textContent = cut.label;
        if (e >= 1) {
          cutLine.setAttribute('x2', f2$6(gw));
          cutLine.setAttribute('opacity', 0.6);
          cutLine.setAttribute('stroke-width', 1);
          if (cutText) cutText.style.opacity = '';
        }
      };
      const countUp = ((w.config.dataLabels || {}).countUp || {}).enabled !== false;
      if (!(dur > 0)) {
        items.forEach(it => place(it, it.b, 1));
        setTicker(1);
        setCut(1);
        return;
      }
      // entering bars rise from below the cut; leaving ones sink and fade
      const below = gh + 6;
      const enterV = prev && finite$b(prev.min) ? prev.min : 0;
      const plan = items.map(it => {
        const b = it.b;
        const p = prev && prev.bars.get(b.name);
        let from;
        const zero = b.v < 0 ? b.x1 : b.x0;
        if (first) from = {
          x0: zero,
          x1: zero,
          y: b.y,
          h: b.h,
          v: 0,
          a: 1
        };else if (p) from = {
          ...p,
          v: finite$b(p.v) ? p.v : b.v,
          a: 1
        };else from = {
          x0: b.v < 0 ? b.x1 - (b.x1 - b.x0) * 0.9 : b.x0,
          x1: b.v < 0 ? b.x1 : b.x0 + (b.x1 - b.x0) * 0.9,
          y: below,
          h: b.h,
          v: finite$b(b.v) ? Math.min(enterV, b.v) : b.v,
          a: 0
        };
        return {
          it,
          from
        };
      });
      const ghosts = [];
      if (prev && !first) {
        prev.bars.forEach((p, name) => {
          if (bars.has(name)) return;
          const r = el$7('rect', {
            class: 'wcc-race-ghost',
            x: f2$6(p.x0),
            width: f2$6(Math.max(0, p.x1 - p.x0)),
            height: f2$6(p.h),
            fill: p.color || t.textMuted,
            rx: 2,
            'clip-path': `url(#gridRectMask${w.globals.cuid})`
          });
          layer.insertBefore(r, layer.firstChild);
          const n = showNames ? el$7('text', {
            class: 'wcc-race-name',
            'text-anchor': 'end',
            'dominant-baseline': 'central',
            'font-size': fs,
            'font-weight': 500,
            fill: t.text,
            style: textStyle
          }) : null;
          if (n) {
            layer.appendChild(n);
            fitText(n, name, nameRoom, fs);
          }
          ghosts.push({
            r,
            n,
            p
          });
        });
      }
      const frame = e => {
        const states = plan.map(({
          it,
          from
        }) => {
          const b = it.b;
          const st = {
            x0: lerp$1(from.x0, b.x0, e),
            x1: lerp$1(from.x1, b.x1, e),
            y: lerp$1(from.y, b.y, e),
            h: lerp$1(from.h, b.h, e),
            v: !finite$b(b.v) ? b.v : countUp || first ? lerp$1(from.v, b.v, e) : b.v
          };
          const a = from.a < 1 ? Math.min(1, lerp$1(from.a, 1, e) * 1.4) : 1;
          return {
            it,
            from,
            st,
            a,
            la: a
          };
        });
        const ghostY = ghosts.map(({
          p
        }) => lerp$1(p.y, below, e));
        // names that pass each other: the one moving further fades
        if (!first && showNames) {
          const entries = states.map(({
            it,
            from,
            st
          }) => ({
            cy: st.y + st.h / 2,
            move: Math.abs(from.y - it.b.y),
            rank: it.b.j
          })).concat(ghosts.map(({
            p
          }, k) => ({
            cy: ghostY[k] + p.h / 2,
            move: Infinity,
            rank: Infinity
          })));
          const al = uncross(entries, fs, slot);
          states.forEach((s, k) => {
            s.la = Math.min(s.la, al[k]);
          });
          ghosts.forEach((g, k) => {
            g.fade = al[states.length + k];
          });
        }
        states.forEach(({
          it,
          st,
          a,
          la
        }) => {
          const b = it.b;
          if (!first) setBar(b, st, a);
          place(it, first ? {
            ...b,
            v: st.v,
            x0: st.x0,
            x1: st.x1
          } : st, la);
        });
        ghosts.forEach((g, k) => {
          const {
            r,
            n,
            p
          } = g;
          const y = ghostY[k];
          r.setAttribute('y', f2$6(y));
          r.style.opacity = String(1 - e);
          if (n) {
            n.setAttribute('x', f2$6(Math.min(p.x0, 0) - 8));
            n.setAttribute('y', f2$6(y + p.h / 2));
            n.style.opacity = String((1 - e) * (g.fade === undefined ? 1 : g.fade));
          }
        });
        setCut(e);
        setTicker(e);
      };
      const done = () => {
        ghosts.forEach(({
          r,
          n
        }) => {
          r.remove();
          if (n) n.remove();
        });
        bars.forEach(b => setBar(b, b, 1));
        items.forEach(it => place(it, it.b, 1));
        setTicker(1);
        setCut(1);
      };
      tween(ctx, {
        duration: dur,
        easing: first ? easingFor(w, false) : easeOutCubic,
        node: layer,
        onUpdate: (tt, e) => frame(e),
        onDone: done
      });
    }
  }

  /**
   * where the ticker fits: the bottom-right (or top-right) corner right of
   * the bars and value labels it would sit next to, shrinking down to 18px;
   * otherwise behind the bars
   */
  function tickerSpot(bars, text, gw, gh, fixed, fmt, vfs) {
    const list = Array.from(bars.values ? bars.values() : bars);
    const textW = fs => text.length * fs * 0.6;
    const room = (top, fs) => {
      const band0 = top ? 0 : gh - fs * 1.1;
      const band1 = top ? fs * 1.1 : gh;
      let right = 0;
      list.forEach(b => {
        if (b.y + b.h < band0 || b.y > band1) return;
        right = Math.max(right, b.x1 + String(fmt(b.v)).length * vfs * 0.6 + 14);
      });
      return gw - 6 - right;
    };
    const max = fixed || Math.max(20, Math.min(52, gh / 5.5));
    for (let fs = max; fs >= (fixed || 18); fs -= 2) {
      const bottom = room(false, fs);
      const top = room(true, fs);
      if (bottom >= textW(fs)) return {
        fs,
        top: false,
        behind: false
      };
      if (top >= textW(fs)) return {
        fs,
        top: true,
        behind: false
      };
      if (fixed) break;
    }
    // no free corner: a small caption above the plot's right edge
    return {
      fs: 12,
      top: false,
      above: true
    };
  }
  function safe(fn) {
    try {
      return fn();
    } catch (e) {
      return undefined;
    }
  }

  /*
   * West Coast Charts - slope chart decorations on the line renderer (WCC
   * extension; no spec file). Each series is one entity measured at two (or
   * more) periods (xaxis categories). The line renderer draws the segments and
   * markers; this module adds the end labels (left: value, right: name +
   * value) with vertical collision relaxation and leader ticks, the hover
   * focus (the other slopes fade), and label motion on updates.
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  const SVGNS$9 = 'http://www.w3.org/2000/svg';
  const finite$a = v => typeof v === 'number' && isFinite(v);
  const f2$5 = v => Math.round(v * 100) / 100;
  const el$6 = (name, attrs) => {
    const n = document.createElementNS(SVGNS$9, name);
    Object.keys(attrs || {}).forEach(k => attrs[k] !== undefined && n.setAttribute(k, attrs[k]));
    return n;
  };

  /**
   * Spread label centres so neighbours keep at least `gap` px, staying inside
   * [lo, hi] and as close to their anchors as possible (pool adjacent
   * violators: least-squares positions under the ordering constraint).
   * items: [{y}] -> returns new y per item (same order)
   */
  function relax(ys, gap, lo, hi) {
    const n = ys.length;
    if (!n) return [];
    const order = ys.map((y, k) => k).sort((a, b) => ys[a] - ys[b] || a - b);
    // shift out the gaps: z_k = y_k - k*gap must be non-decreasing
    const z = order.map((k, q) => ys[k] - q * gap);
    const blocks = [];
    z.forEach((v, q) => {
      blocks.push({
        sum: v,
        n: 1,
        from: q
      });
      while (blocks.length > 1) {
        const b = blocks[blocks.length - 1];
        const a = blocks[blocks.length - 2];
        if (a.sum / a.n <= b.sum / b.n) break;
        a.sum += b.sum;
        a.n += b.n;
        blocks.pop();
      }
    });
    const fitted = new Array(n);
    blocks.forEach(b => {
      for (let q = b.from; q < b.from + b.n; q++) fitted[q] = b.sum / b.n;
    });
    // back to positions, clamp the stack into [lo, hi]
    let pos = fitted.map((v, q) => v + q * gap);
    const span = (n - 1) * gap;
    if (hi - lo >= span) {
      const over = pos[n - 1] - hi;
      if (over > 0) pos = pos.map(p => p - over);
      const under = lo - pos[0];
      if (under > 0) pos = pos.map(p => p + under);
      // a clamp can re-break the order at the other end: re-sweep
      for (let q = 1; q < n; q++) if (pos[q] < pos[q - 1] + gap) pos[q] = pos[q - 1] + gap;
      for (let q = n - 2; q >= 0; q--) if (pos[q] > pos[q + 1] - gap) pos[q] = pos[q + 1] - gap;
    }
    const out = new Array(n);
    order.forEach((k, q) => out[k] = pos[q]);
    return out;
  }
  class Slope {
    static uses(w) {
      return w.config.chart.requestedType === 'slope';
    }
    constructor(ctx) {
      this.ctx = ctx;
      this.w = ctx.w;
    }

    // typographic minus on every label, the user's formatter included
    fmt(v, i, j) {
      return typoMinus(this.fmtRaw(v, i, j));
    }
    fmtRaw(v, i, j) {
      const w = this.w;
      const lo = (w.config.plotOptions.slope || {}).labels || {};
      if (typeof lo.formatter === 'function') return String(lo.formatter(v, {
        seriesIndex: i,
        dataPointIndex: j,
        w
      }));
      const yl = w.config.yaxis && w.config.yaxis[0] && w.config.yaxis[0].labels;
      if (yl && typeof yl.formatter === 'function' && !yl.formatter.wccDefault) {
        const s = yl.formatter(v, {
          seriesIndex: i,
          dataPointIndex: j,
          w
        });
        if (s !== undefined && s !== null) return String(s);
      }
      return groupedNumber(v, 2);
    }
    geometry() {
      const gl = this.w.globals;
      const W = gl.gridWidth;
      const H = gl.gridHeight;
      if (!(W > 0) || !(H > 0)) return null;
      const n = Math.max(1, gl.dataPoints || 0);
      const minX = gl.minX;
      const maxX = gl.maxX;
      const span = maxX - minX;
      const px = j => span > 0 && finite$a(span) ? (j + 1 - minX) / span * W : n > 1 ? j / (n - 1) * W : W / 2;
      const minY = gl.minYArr ? gl.minYArr[0] : gl.minY;
      const maxY = gl.maxYArr ? gl.maxYArr[0] : gl.maxY;
      const yr = maxY - minY || 1;
      const py = v => H - (v - minY) / yr * H;
      return {
        W,
        H,
        n,
        px,
        py
      };
    }
    decorate(elGraph) {
      const w = this.w;
      const root = elGraph && elGraph.node;
      if (!root) return;
      root.classList.add('wcc-slope');
      const so = w.config.plotOptions.slope || {};
      const G = this.geometry();
      const groups = {};
      root.querySelectorAll('.apexcharts-series').forEach(g => {
        const i = parseInt(g.getAttribute('data:realIndex'), 10);
        if (!isNaN(i)) groups[i] = g;
      });
      const hl = Array.isArray(so.highlight) ? so.highlight.map(String) : null;
      if (hl) {
        Object.keys(groups).forEach(i => {
          const on = hl.indexOf(String(w.globals.seriesNames[i])) > -1;
          groups[i].classList.toggle('wcc-slope-muted', !on);
          groups[i].classList.toggle('wcc-slope-emph', on);
        });
      }
      if (G && (so.labels || {}).show !== false) this.labels(root, G, groups, so);
      this.hover(root, groups, so.hover && so.hover.opacity !== undefined ? so.hover.opacity : 0.22);
    }
    labels(root, G, groups, so) {
      const w = this.w;
      const gl = w.globals;
      const t = tokensOf(w);
      const lo = so.labels || {};
      const fs = lo.fontSize || 12;
      const gap = Math.max(fs + 3, lo.minGap || 0);
      const fam = w.config.chart.fontFamily || 'inherit';
      const hidden = gl.collapsedSeriesIndices || [];
      const last = G.n - 1;
      const prev = this.ctx._wccSlope && this.ctx._wccSlope.labels || {};
      const timing = drawTiming(w);
      const easing = easingFor(w, true);
      const layer = el$6('g', {
        class: 'wcc-slope-labels',
        'aria-hidden': 'true'
      });
      root.appendChild(layer);
      const sides = [{
        j: 0,
        mode: lo.left === undefined ? 'value' : lo.left,
        anchor: 'end',
        dx: -10
      }, {
        j: last,
        mode: lo.right === undefined ? 'both' : lo.right,
        anchor: 'start',
        dx: 10
      }];
      if (last === 0) sides.shift();
      const shown = {};
      sides.forEach(sd => {
        if (!sd.mode) return;
        const items = [];
        w.config.series.forEach((s, i) => {
          if (hidden.indexOf(i) > -1) return;
          const v = gl.series[i] && gl.series[i][sd.j];
          if (!finite$a(v)) return;
          items.push({
            i,
            v,
            y: G.py(v)
          });
        });
        const ys = relax(items.map(it => it.y), gap, fs / 2, G.H - fs / 2);
        items.forEach((it, q) => {
          const name = String(gl.seriesNames[it.i]);
          const muted = groups[it.i] && groups[it.i].classList.contains('wcc-slope-muted');
          const x = G.px(sd.j) + sd.dx;
          const y = ys[q];
          const g = el$6('g', {
            class: 'wcc-slope-label',
            'data-series': it.i,
            'data-side': sd.j === 0 && last > 0 ? 'left' : 'right'
          });
          const text = el$6('text', {
            x: f2$5(x),
            y: f2$5(y),
            'text-anchor': sd.anchor,
            'dominant-baseline': 'central',
            'font-size': `${fs}px`,
            'font-family': fam,
            fill: muted ? t.textMuted : t.text
          });
          const val = el$6('tspan', {
            class: 'wcc-slope-value',
            'font-weight': 500
          });
          val.textContent = this.fmt(it.v, it.i, sd.j);
          const nm = el$6('tspan', {
            class: 'wcc-slope-name',
            'font-weight': 600,
            fill: muted ? t.textMuted : gl.colors[it.i]
          });
          nm.textContent = name;
          if (sd.mode === 'name') text.appendChild(nm);else if (sd.mode === 'value') text.appendChild(val);else {
            text.appendChild(nm);
            val.setAttribute('dx', '0.45em');
            text.appendChild(val);
          }
          g.appendChild(text);
          // leader tick when the label had to move away from its point
          let lead = null;
          if (Math.abs(y - it.y) > 1.5) {
            const x0 = G.px(sd.j) + (sd.dx > 0 ? 4 : -4);
            const x1 = x - (sd.dx > 0 ? 3 : -3);
            lead = el$6('path', {
              class: 'wcc-slope-leader',
              d: `M ${f2$5(x0)} ${f2$5(it.y)} L ${f2$5(x1)} ${f2$5(y)}`,
              stroke: t.grid,
              'stroke-width': 1,
              fill: 'none'
            });
            g.insertBefore(lead, text);
          }
          layer.appendChild(g);
          const key = `${name}|${sd.j === 0 && last > 0 ? 'l' : 'r'}`;
          shown[key] = {
            y,
            ay: it.y
          };
          const p0 = prev[key];
          if (timing.duration > 0) {
            if (p0 && timing.dynamic) {
              const move = e => {
                const yy = p0.y + (y - p0.y) * e;
                text.setAttribute('y', f2$5(yy));
                if (lead) lead.setAttribute('d', `M ${f2$5(G.px(sd.j) + (sd.dx > 0 ? 4 : -4))} ${f2$5(p0.ay + (it.y - p0.ay) * e)} L ${f2$5(x - (sd.dx > 0 ? 3 : -3))} ${f2$5(yy)}`);
              };
              move(0);
              tween(this.ctx, {
                duration: timing.duration,
                easing,
                node: text,
                onUpdate: (tt, e) => move(e)
              });
            } else {
              g.style.opacity = '0';
              tween(this.ctx, {
                duration: 260,
                delay: timing.duration * 0.75,
                node: g,
                onUpdate: p => g.style.opacity = String(p),
                onDone: () => g.style.removeProperty('opacity')
              });
            }
          }
        });
      });
      this.ctx._wccSlope = {
        labels: shown
      };
      // period headers above the columns
      if ((so.periods || {}).show !== false) {
        const cats = (gl.categoryLabels && gl.categoryLabels.length ? gl.categoryLabels : gl.labels) || [];
        const top = el$6('g', {
          class: 'wcc-slope-periods',
          'aria-hidden': 'true'
        });
        for (let j = 0; j <= last; j++) {
          if (cats[j] === undefined) continue;
          const tx = el$6('text', {
            x: f2$5(G.px(j)),
            y: -12,
            'text-anchor': 'middle',
            'font-size': `${(so.periods || {}).fontSize || 12}px`,
            'font-weight': 600,
            'font-family': fam,
            fill: t.textMuted
          });
          tx.textContent = String(cats[j]);
          top.appendChild(tx);
        }
        layer.appendChild(top);
      }
    }
    hover(root, groups, opacity) {
      const ids = Object.keys(groups).map(Number);
      const labels = () => Array.from(root.querySelectorAll('.wcc-slope-label'));
      const set = on => {
        ids.forEach(i => {
          const g = groups[i];
          if (on === null || on === i) g.style.removeProperty('opacity');else g.style.opacity = String(opacity);
          g.classList.toggle('wcc-on', on === i);
        });
        labels().forEach(l => {
          const i = +l.getAttribute('data-series');
          if (on === null || on === i) l.style.removeProperty('opacity');else l.style.opacity = String(Math.max(opacity, 0.3));
        });
        root.classList.toggle('wcc-hovering', on !== null);
      };
      ids.forEach(i => {
        const g = groups[i];
        g.addEventListener('mouseenter', () => set(i));
        g.addEventListener('mouseleave', () => set(null));
      });
    }
  }

  /*
   * West Coast Charts - resolved colour tokens with classic fallbacks, for
   * drawing. Part of the core (charts/Bar.js), shared with the chart types.
   * Copyright (c) 2026 West Coast Software - MIT License
   */

  const CLASSIC = {
    light: {
      text: '#373d3f',
      textMuted: '#6b7280',
      surface: '#ffffff',
      grid: '#e0e0e0',
      axis: '#e0e0e0',
      track: '#f2f2f2'
    },
    dark: {
      text: '#f6f7f8',
      textMuted: '#a7b0bb',
      surface: '#424242',
      grid: '#555555',
      axis: '#555555',
      track: '#3a3f44'
    }
  };

  /** colour tokens for drawing: theme tokens, else a classic equivalent */
  function tokensOf(w) {
    const t = w.config.theme && w.config.theme.resolvedTokens || null;
    const mode = w.config.theme && w.config.theme.mode === 'dark' ? 'dark' : 'light';
    const c = CLASSIC[mode];
    const fore = w.config.chart.foreColor;
    return {
      text: t && t.text || fore || c.text,
      textMuted: t && t.textMuted || c.textMuted,
      surface: t && t.surface || (w.config.chart.background && w.config.chart.background !== 'transparent' ? w.config.chart.background : c.surface),
      grid: t && t.grid || w.config.grid.borderColor || c.grid,
      axis: t && t.axis || c.axis,
      track: t && t.track || (w.config.plotOptions.radialBar.track.background !== '#f2f2f2' ? w.config.plotOptions.radialBar.track.background : c.track),
      mode
    };
  }

  /** relative luminance of '#rgb', '#rrggbb' or 'rgb(a)(...)'; null if unknown */
  function luminance(color) {
    if (typeof color !== 'string') return null;
    let r, g, b;
    const c = color.trim();
    let m = c.match(/^#([0-9a-f]{3})$/i);
    if (m) {
      [r, g, b] = m[1].split('').map(h => parseInt(h + h, 16));
    } else if (m = c.match(/^#([0-9a-f]{6})/i)) {
      r = parseInt(m[1].slice(0, 2), 16);
      g = parseInt(m[1].slice(2, 4), 16);
      b = parseInt(m[1].slice(4, 6), 16);
    } else if (m = c.match(/^rgba?\(([^)]+)\)/i)) {
      [r, g, b] = m[1].split(',').map(v => parseFloat(v));
    } else return null;
    const lin = v => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    };
    return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
  }

  /** white or a near-black ink, whichever reads better on `fill` */
  function inkOn(fill, dark = '#0b1220') {
    const L = luminance(fill);
    if (L === null) return null;
    // contrast against white vs. against the dark ink
    const cw = 1.05 / (L + 0.05);
    const cd = (L + 0.05) / ((luminance(dark) || 0) + 0.05);
    // white reads cleaner on saturated fills: keep it while it holds 3.5:1
    if (cw >= 3.5) return '#ffffff';
    return cd > cw ? dark : '#ffffff';
  }

  /*
   * West Coast Charts - shared helpers for the chart types: resolved colour
   * tokens with classic fallbacks, and a visually hidden data table so screen
   * reader users get the numbers behind a chart.
   * Copyright (c) 2026 West Coast Software - MIT License
   */


  // calendar: one row per day in date order (the weekday rows are a layout detail)
  function calendarTable(w, describe) {
    const cells = [];
    w.config.series.forEach((s, i) => (s.data || []).forEach((d, j) => d && d.wcc && d.wcc.inRange && cells.push({
      day: d.wcc.day,
      i,
      j
    })));
    cells.sort((a, b) => a.day - b.day);
    const cal = w.globals.wccCalendar;
    return {
      head: ['Date', cal && cal.name || 'Value'],
      rows: cells.map(c => describe(c.i, c.j))
    };
  }
  const TYPES_WITH_POINT_A11Y = ['calendar', 'funnel', 'pyramid', 'waterfall', 'dumbbell', 'histogram', 'violin', 'raincloud', 'beeswarm', 'slope', 'streamgraph', 'barRace'];

  /**
   * Accessible text for the bar based chart types. Keyboard navigation, the
   * focus ring, announcements and the data table belong to the core
   * (modules/a11y/A11y.js); the types only register how a point reads
   * (w.globals.wccA11y hooks: category, value, table).
   */
  function annotatePoints(ctx, elGraph) {
    const w = ctx.w;
    const type = w.config.chart.requestedType;
    const base = w.globals.dom && w.globals.dom.baseEl;
    countUp(ctx, elGraph);
    if (base && base.classList) base.classList.toggle('wcc-heat-shaped', HeatShape.uses(w));
    if (base && base.classList) base.classList.toggle('wcc-race-chart', type === 'barRace');
    if (HeatShape.uses(w)) (Array.isArray(elGraph) ? elGraph : [elGraph]).forEach(g => g && new HeatShape(ctx).decorate(g));
    // cells without a value (plotOptions.heatmap.empty): hatch + legend entry, after the shapes
    w.globals.wccHeatEmpty = null;
    decorateEmpty(ctx);
    // chart type morph: core (flat) treemaps record / receive outlines;
    // other types end any pending morph chain
    if (type === 'treemap' && !isNestedTreemap(w)) coreTreemap(ctx, Array.isArray(elGraph) ? elGraph : [elGraph]);else if (type !== 'sunburst' && type !== 'icicle' && type !== 'treemap') ctx._wccMorph = null;
    // partition charts register their own hooks (charts/types/Partition)
    if (type === 'sunburst' || type === 'icicle' || type === 'unit' || type === 'waffle' || isNestedTreemap(w)) return;
    if (TYPES_WITH_POINT_A11Y.indexOf(type) === -1) {
      // a plain heatmap with `empty` only swaps the data table (null cells read as the label)
      if (!_2$1(w)) w.globals.wccA11y = w.globals.wccHeatEmpty && type === 'heatmap' ? {
        table: () => emptyTable(w)
      } : null;
      return;
    }
    const groups = (Array.isArray(elGraph) ? elGraph : [elGraph]).filter(Boolean);
    // type decorations drawn over a base renderer
    if (type === 'streamgraph') groups.forEach(g => new Streamgraph(ctx).decorate(g));
    if (type === 'slope') groups.forEach(g => new Slope(ctx).decorate(g));
    if (type === 'barRace') groups.forEach(g => new BarRace(ctx).decorate(g));else ctx._wccRace = null;
    groups.forEach(g => g && g.node && g.node.classList.add('wcc-type', `wcc-type-${type}`));
    const describer = DESCRIBERS[type];
    const describe = (i, j) => {
      if (describer) return describer(w, i, j);
      const cat = w.globals.labels[j];
      const v = w.globals.series[i] && w.globals.series[i][j];
      const fmt = w.globals.yLabelFormatters && w.globals.yLabelFormatters[0];
      return [cat === undefined ? String(j + 1) : String(cat), v === null || v === undefined ? '–' : String(fmt ? fmt(v) : v)];
    };
    const nums = NUMBERS[type];
    const pts = i => Array.from(w.globals.series[i] || [], (_, j) => j);
    w.globals.wccA11y = {
      category: (s, j) => describe(s, j)[0],
      value: (s, j) => describe(s, j)[1],
      // real data, not the drawn layout values (describe text, agent model)
      values: nums ? i => pts(i).map(j => nums.val(w, i, j)) : undefined,
      range: nums ? i => [].concat(...pts(i).map(j => nums.ext && nums.ext(w, i, j) || [nums.val(w, i, j)])) : undefined,
      format: nums ? v => nums.fmt(w, v, 0, -1) : undefined,
      // a calendar draws one series as weekday rows: describe the series and its days
      about: type === 'calendar' && w.globals.wccCalendar ? () => ({
        names: [w.globals.wccCalendar.name || 'Series 1'],
        points: [].concat(...w.globals.series.map((_, i) => pts(i).filter(j => (calendarCell(w, i, j) || {}).inRange))).length
      }) : undefined,
      table: () => {
        const gl = w.globals;
        if (type === 'calendar') return calendarTable(w, describe);
        const list = gl.series.map((_, i) => i).filter(i => gl.collapsedSeriesIndices.indexOf(i) === -1);
        const n = Math.max(0, ...list.map(i => (w.config.series[i].data || []).length));
        const rows = [];
        for (let j = 0; j < n; j++) {
          const s0 = list.find(i => (w.config.series[i].data || [])[j] !== undefined);
          if (s0 === undefined) continue;
          rows.push([describe(s0, j)[0]].concat(list.map(i => describe(i, j)[1])));
        }
        const first = type === 'histogram' ? 'Bin' : 'Category';
        return {
          head: [first].concat(list.map(i => gl.seriesNames[i] || `Series ${i + 1}`)),
          rows
        };
      }
    };
  }

  /*
   * West Coast Charts - violin and raincloud renderer
   * (docs/spec/02-chart-types/violin.md).
   *
   * The series transform (modules/types/TypeTransforms) computes the density,
   * summary and sample per category and turns each datum into a [min, max]
   * range, so the rangeBar scales cover the curves. This renderer lays every
   * category slot out in lanes (density / box / rain), draws a smoothed
   * outline, the five-number box and jittered observations, and morphs
   * between updates.
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  const SVGNS$8 = 'http://www.w3.org/2000/svg';
  const finite$9 = v => typeof v === 'number' && isFinite(v);
  const f2$4 = v => Math.round(v * 100) / 100;
  const el$5 = (name, attrs) => {
    const n = document.createElementNS(SVGNS$8, name);
    Object.keys(attrs || {}).forEach(k => attrs[k] !== undefined && n.setAttribute(k, attrs[k]));
    return n;
  };

  /** '#rrggbb' mixed with black (amt > 0) or white (amt < 0) */
  function shade(color, amt) {
    const m = /^#([0-9a-f]{6})$/i.exec(String(color).trim()) || /^#([0-9a-f]{3})$/i.exec(String(color).trim());
    if (!m) return color;
    let hex = m[1];
    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
    const ch = [0, 2, 4].map(k => parseInt(hex.slice(k, k + 2), 16));
    const t = amt > 0 ? 0 : 255;
    const a = Math.abs(amt);
    return '#' + ch.map(c => Math.round(c + (t - c) * a).toString(16).padStart(2, '0')).join('');
  }
  function lerpColor(a, b, t) {
    const pa = shade(a, 0);
    const pb = shade(b, 0);
    const ca = [1, 3, 5].map(k => parseInt(pa.slice(k, k + 2), 16));
    const cb = [1, 3, 5].map(k => parseInt(pb.slice(k, k + 2), 16));
    if (ca.some(isNaN) || cb.some(isNaN)) return t < 0.5 ? a : b;
    return '#' + ca.map((c, k) => Math.round(c + (cb[k] - c) * t).toString(16).padStart(2, '0')).join('');
  }

  /** deterministic jitter in [-1, 1] */
  function hash(i, j, k) {
    let h = i * 73856093 ^ j * 19349663 ^ k * 83492791;
    h = (h ^ h >>> 13) * 1274126177;
    h = h ^ h >>> 16;
    return (h >>> 0) % 100000 / 50000 - 1;
  }

  /** Catmull-Rom through pts [{x, y}] as cubic Beziers (no leading M) */
  function smooth(pts) {
    if (pts.length < 3) return pts.map(p => `L ${f2$4(p.x)} ${f2$4(p.y)}`).join(' ');
    let d = '';
    for (let k = 0; k < pts.length - 1; k++) {
      const p0 = pts[Math.max(0, k - 1)];
      const p1 = pts[k];
      const p2 = pts[k + 1];
      const p3 = pts[Math.min(pts.length - 1, k + 2)];
      const c1 = {
        x: p1.x + (p2.x - p0.x) / 6,
        y: p1.y + (p2.y - p0.y) / 6
      };
      const c2 = {
        x: p2.x - (p3.x - p1.x) / 6,
        y: p2.y - (p3.y - p1.y) / 6
      };
      d += ` C ${f2$4(c1.x)} ${f2$4(c1.y)} ${f2$4(c2.x)} ${f2$4(c2.y)} ${f2$4(p2.x)} ${f2$4(p2.y)}`;
    }
    return d;
  }
  const pct$4 = (v, total) => {
    if (typeof v === 'string' && v.indexOf('%') > -1) return parseFloat(v) / 100 * total;
    const n = parseFloat(v);
    return finite$9(n) ? n : 0;
  };
  class Violin {
    constructor(ctx, rangeBar) {
      this.ctx = ctx;
      this.w = ctx.w;
      this.rb = rangeBar;
    }
    static uses(w) {
      const t = w.config.chart.requestedType;
      return t === 'violin' || t === 'raincloud';
    }
    geometry() {
      const w = this.w;
      const rb = this.rb;
      rb.barHelpers.initVariables(w.globals.series);
      const p = rb.barHelpers.initialPositions(0);
      const horizontal = rb.isHorizontal;
      const rows = Math.max(1, w.globals.labels.length || w.globals.dataPoints);
      const band = horizontal ? w.globals.gridHeight / rows : w.globals.gridWidth / rows;
      const yRatio = rb.yRatio[0];
      const vp = horizontal ? v => p.zeroW + v / rb.invertedYRatio : v => p.zeroH - v / yRatio;
      // (cross, value) -> svg point
      const pt = horizontal ? (c, v) => ({
        x: vp(v),
        y: c
      }) : (c, v) => ({
        x: c,
        y: vp(v)
      });
      return {
        horizontal,
        rows,
        band,
        vp,
        pt
      };
    }

    /** side of the density: 0 = both, +1 / -1 along the cross axis */
    sideSign(side, horizontal) {
      if (!side || side === 'both' || side === 'center') return 0;
      if (horizontal) {
        // rows: 'top' (= 'right', cloud above) grows towards smaller y
        if (side === 'top' || side === 'right') return -1;
        return 1;
      }
      if (side === 'right' || side === 'top') return 1;
      return -1;
    }
    layout(sub, o) {
      const g = this.g;
      const usable = sub * 0.88;
      const s = this.sideSign(o.side, g.horizontal);
      const pos = o.points.show ? this.sideSign(o.points.position, g.horizontal) : 0;
      const rainW = pos !== 0 ? Math.min(usable * 0.7, pct$4(o.points.laneWidth, usable)) : 0;
      const boxLane = o.box.show && s !== 0 ? Math.max(4, pct$4(o.box.width, usable)) : 0;
      const densW = Math.max(2, usable - rainW - boxLane);
      // lanes along the cross axis, from -side to +side, relative to slot start
      const lanes = {};
      let at = 0;
      const put = (name, width) => {
        lanes[name] = {
          from: at,
          to: at + width
        };
        at += width;
      };
      if (s === 0) {
        if (pos < 0) put('rain', rainW);
        put('density', densW);
        if (pos > 0) put('rain', rainW);
      } else {
        // half violin: [rain][box][density ->] (mirrored for s = -1)
        const order = [];
        if (rainW) order.push(['rain', rainW]);
        if (boxLane) order.push(['box', boxLane]);
        order.push(['density', densW]);
        // rain on the same side as the cloud goes after it
        if (rainW && pos === s) order.push(order.shift());
        (s > 0 ? order : order.reverse()).forEach(([n, wd]) => put(n, wd));
      }
      return {
        usable,
        s,
        pos,
        lanes,
        densW,
        rainW,
        boxLane
      };
    }
    draw() {
      const w = this.w;
      const graphics = new _0$4(this.ctx);
      const ret = graphics.group({
        class: 'apexcharts-rangebar-series apexcharts-plot-series wcc-violin'
      });
      const g = this.g = this.geometry();
      const t = tokensOf(w);
      const vo = w.config.plotOptions.violin;
      const o = {
        ...vo,
        box: {
          ...vo.box
        },
        points: {
          ...vo.points,
          colorScale: {
            ...(vo.points.colorScale || {})
          }
        }
      };
      const hidden = w.globals.collapsedSeriesIndices || [];
      const visible = w.config.series.map((_, i) => i).filter(i => hidden.indexOf(i) === -1);
      const G = Math.max(1, visible.length);
      const sub = g.band / G;
      const L = this.layout(sub, o);
      const timing = drawTiming(w);
      const prev = this.ctx._wccViolin && this.ctx._wccViolin.shown || {};
      const shown = {};
      // beeswarm -> violin morph: dots fly from their swarm positions
      const swarmDots = this.ctx._wccDotsKind === 'beeswarm' && morphCfg(w).enabled ? this.ctx._wccDots || {} : null;
      const dots = {};
      const dotMoves = [];
      const anims = [];
      const distributed = w.config.plotOptions.bar.distributed;
      const fillOpacityUser = ((this.ctx._wccUserShape || {}).fill || {}).opacity;

      // group peak for normalize: 'group'
      let groupPeak = 0;
      w.config.series.forEach(s => (s.data || []).forEach(d => {
        if (d && d.wcc && d.wcc.stats) groupPeak = Math.max(groupPeak, d.wcc.stats.peak);
      }));

      // colour scale for points
      const cs = o.points.colorScale || {};
      let csMin = cs.min;
      let csMax = cs.max;
      if (Array.isArray(cs.colors) && cs.colors.length && (!finite$9(csMin) || !finite$9(csMax))) {
        let a = Infinity;
        let b = -Infinity;
        w.config.series.forEach(s => (s.data || []).forEach(d => (d && d.wcc && d.wcc.stats && d.wcc.stats.points || []).forEach(v => {
          a = Math.min(a, v);
          b = Math.max(b, v);
        })));
        if (!finite$9(csMin)) csMin = a;
        if (!finite$9(csMax)) csMax = b;
      }
      const gradeColor = v => {
        const cols = cs.colors;
        if (!Array.isArray(cols) || !cols.length) return null;
        if (cols.length === 1) return cols[0];
        const steps = Math.max(2, cs.steps || 24);
        let r = csMax > csMin ? (v - csMin) / (csMax - csMin) : 0.5;
        r = Math.max(0, Math.min(1, Math.round(r * (steps - 1)) / (steps - 1)));
        const pos = r * (cols.length - 1);
        const k = Math.min(cols.length - 2, Math.floor(pos));
        return lerpColor(cols[k], cols[k + 1], pos - k);
      };
      w.config.series.forEach((s, i) => {
        const sg = graphics.group({
          class: 'apexcharts-series wcc-violin-series',
          seriesName: _0.escapeString(w.globals.seriesNames[i]),
          rel: i + 1,
          'data:realIndex': i
        });
        this.ctx.series.addCollapsedClassToSeries(sg, i);
        ret.add(sg);
        const gi = visible.indexOf(i);
        if (gi < 0) return;
        (s.data || []).forEach((d, j) => {
          if (!d || !d.wcc || !d.wcc.stats) return;
          const st = d.wcc.stats;
          const row = d.wcc.row !== undefined ? d.wcc.row : j;
          const color = d.fillColor || (distributed ? w.globals.colors[row % w.globals.colors.length] : w.globals.colors[i]);
          // 'series-dark' = the stronger-contrast shade: darker on light
          // surfaces, lighter on dark ones (WCC)
          const dark = shade(color, t.mode === 'dark' ? -0.45 : 0.32);
          const slot0 = g.band * row + sub * gi + (sub - L.usable) / 2;
          const lane = n => L.lanes[n] && {
            from: slot0 + L.lanes[n].from,
            to: slot0 + L.lanes[n].to
          };
          const dl = lane('density');
          const peakRef = o.normalize === 'group' ? groupPeak : st.peak;
          const scale = o.bandwidthScale === undefined ? 1 : +o.bandwidthScale;
          const ext = L.s === 0 ? (dl.to - dl.from) / 2 * scale : (dl.to - dl.from) * scale;
          const base = L.s === 0 ? (dl.from + dl.to) / 2 : L.s > 0 ? dl.from : dl.to;
          const widthAt = dens => peakRef > 0 ? dens / peakRef * ext : 0;
          const key = `${i}-${String(d.x)}`;

          // ---- density outline
          const dens = st.density;
          const geom = {
            vals: dens.map(p => g.vp(p[0])),
            plus: dens.map(p => L.s >= 0 ? base + widthAt(p[1]) : base),
            minus: dens.map(p => L.s <= 0 ? base - widthAt(p[1]) : base)
          };
          const path = el$5('path', {
            class: 'apexcharts-rangebar-area wcc-violin-shape',
            fill: color,
            'fill-opacity': fillOpacityUser !== undefined ? w.config.fill.opacity : o.points.show && L.pos === 0 ? 0.32 : 0.62,
            stroke: color,
            'stroke-width': 1.25,
            'stroke-linejoin': 'round',
            index: i,
            j: row
          });
          const cMid = slot0 + L.usable / 2;
          const vMid = st.summary ? g.vp(st.summary[2]) : geom.vals[Math.floor(geom.vals.length / 2)];
          path.setAttribute('cx', g.horizontal ? vMid : cMid + sub / 2);
          path.setAttribute('cy', g.horizontal ? cMid + sub / 2 : vMid);
          path.setAttribute('barWidth', g.horizontal ? 0 : sub);
          path.setAttribute('barHeight', g.horizontal ? sub : 0);
          sg.node.appendChild(path);
          const setShape = (gm, k) => path.setAttribute('d', this.outline(gm, base, k));
          setShape(geom, 1);
          const p0 = prev[key];
          anims.push({
            type: 'shape',
            from: p0 && p0.geom && p0.geom.vals.length === geom.vals.length ? p0.geom : null,
            to: geom,
            base,
            set: setShape,
            node: path
          });

          // ---- box
          let boxEl = null;
          if (o.box.show && st.summary) {
            const [lo, q1, med, q3, hi] = st.summary;
            const inside = L.s === 0;
            const bl = inside ? null : lane('box');
            const bw = inside ? Math.max(3, Math.min(pct$4(o.box.width, L.usable), ext * 0.7)) : (bl.to - bl.from) * 0.62;
            const bc = inside ? base : (bl.from + bl.to) / 2;
            const sw = o.box.strokeWidth === undefined ? 1 : +o.box.strokeWidth;
            const boxFill = o.box.fillColor || (inside ? dark : t.surface);
            const ink = inside ? t.surface : dark;
            boxEl = el$5('g', {
              class: 'wcc-violin-box',
              'pointer-events': 'none'
            });
            const a = g.pt(bc - bw / 2, q3);
            const b = g.pt(bc + bw / 2, q1);
            const rect = el$5('rect', {
              x: f2$4(Math.min(a.x, b.x)),
              y: f2$4(Math.min(a.y, b.y)),
              width: f2$4(Math.max(0.5, Math.abs(b.x - a.x))),
              height: f2$4(Math.max(0.5, Math.abs(b.y - a.y))),
              rx: Math.min(2, bw / 4),
              fill: boxFill,
              stroke: inside ? 'none' : dark,
              'stroke-width': sw
            });
            const line = (c1, v1, c2, v2, cls, width, stroke) => {
              const p1 = g.pt(c1, v1);
              const p2 = g.pt(c2, v2);
              return el$5('line', {
                class: cls,
                x1: f2$4(p1.x),
                y1: f2$4(p1.y),
                x2: f2$4(p2.x),
                y2: f2$4(p2.y),
                stroke,
                'stroke-width': width,
                'stroke-linecap': 'round'
              });
            };
            const cap = (o.box.capWidth === undefined ? 0.5 : +o.box.capWidth) * bw;
            const whiskerInk = inside ? dark : dark;
            boxEl.appendChild(line(bc, lo, bc, q1, 'wcc-violin-whisker', sw, whiskerInk));
            boxEl.appendChild(line(bc, q3, bc, hi, 'wcc-violin-whisker', sw, whiskerInk));
            if (cap > 0) {
              boxEl.appendChild(line(bc - cap / 2, lo, bc + cap / 2, lo, 'wcc-violin-cap', sw, whiskerInk));
              boxEl.appendChild(line(bc - cap / 2, hi, bc + cap / 2, hi, 'wcc-violin-cap', sw, whiskerInk));
            }
            boxEl.appendChild(rect);
            if (inside) {
              const m = g.pt(bc, med);
              boxEl.appendChild(el$5('circle', {
                class: 'wcc-violin-median',
                cx: f2$4(m.x),
                cy: f2$4(m.y),
                r: Math.max(1.6, Math.min(3, bw * 0.28)),
                fill: ink
              }));
            } else {
              boxEl.appendChild(line(bc - bw / 2, med, bc + bw / 2, med, 'wcc-violin-median', Math.max(1.5, sw * 2), ink));
            }
            sg.node.appendChild(boxEl);
          }

          // ---- points
          let gp = null;
          if (o.points.show && st.points.length) {
            gp = el$5('g', {
              class: 'wcc-violin-points',
              'pointer-events': 'none'
            });
            const max = Math.max(1, o.points.maxPoints || 3000);
            const stride = Math.max(1, Math.ceil(st.points.length / max));
            const size = o.points.size === undefined ? 2.5 : +o.points.size;
            const jit = o.points.jitter === undefined ? 0.5 : +o.points.jitter;
            const fillMode = o.points.fillColor;
            const ptFill = fillMode === 'series' ? color : !fillMode || fillMode === 'series-dark' ? dark : fillMode;
            // the spec default '#fff' means "the surface": it follows dark mode
            const stroke = !o.points.strokeColor || /^#fff(fff)?$/i.test(o.points.strokeColor) ? t.surface : o.points.strokeColor;
            const rl = lane('rain');
            // density half-width at a value (for constrainToViolin)
            const densAt = v => {
              if (!dens.length) return 0;
              if (v <= dens[0][0]) return dens[0][1];
              for (let k = 1; k < dens.length; k++) {
                if (dens[k][0] >= v) {
                  const f = (v - dens[k - 1][0]) / (dens[k][0] - dens[k - 1][0] || 1);
                  return dens[k - 1][1] + f * (dens[k][1] - dens[k - 1][1]);
                }
              }
              return dens[dens.length - 1][1];
            };
            for (let k = 0; k < st.points.length; k += stride) {
              const v = st.points[k];
              const u = hash(i + 1, row + 1, k + 1);
              let c;
              if (L.pos !== 0 && rl) {
                c = (rl.from + rl.to) / 2 + u * jit * ((rl.to - rl.from) / 2 - size);
              } else {
                const hw = o.points.constrainToViolin === false ? ext : Math.max(0, widthAt(densAt(v)) - size);
                if (L.s === 0) c = base + u * jit * hw;else c = base + L.s * (Math.abs(u) * jit * hw + size);
              }
              const q = g.pt(c, v);
              const col = gradeColor(v) || ptFill;
              const attrs = {
                class: 'wcc-violin-point',
                fill: col,
                'fill-opacity': o.points.opacity === undefined ? 0.9 : o.points.opacity,
                stroke,
                'stroke-width': o.points.strokeWidth === undefined ? 1 : o.points.strokeWidth
              };
              const dot = o.points.shape === 'square' ? el$5('rect', {
                ...attrs,
                x: f2$4(q.x - size),
                y: f2$4(q.y - size),
                width: f2$4(size * 2),
                height: f2$4(size * 2)
              }) : el$5('circle', {
                ...attrs,
                cx: f2$4(q.x),
                cy: f2$4(q.y),
                r: size
              });
              gp.appendChild(dot);
              const dk = `${key}-${k}`;
              dot.setAttribute('data-key', dk);
              dots[dk] = {
                x: q.x,
                y: q.y,
                r: size
              };
              if (swarmDots && swarmDots[dk]) dotMoves.push({
                node: dot,
                from: swarmDots[dk],
                to: q,
                square: o.points.shape === 'square',
                size
              });
            }
            sg.node.appendChild(gp);
          }

          // hit area for the tooltip over the whole slot (after the shape, so
          // keyboard focus finds the outline first)
          const hit = g.horizontal ? el$5('rect', {
            x: 0,
            y: slot0,
            width: Math.max(0, w.globals.gridWidth),
            height: Math.max(0, L.usable)
          }) : el$5('rect', {
            x: slot0,
            y: 0,
            width: Math.max(0, L.usable),
            height: Math.max(0, w.globals.gridHeight)
          });
          ['index', 'j', 'cx', 'cy', 'barWidth', 'barHeight'].forEach(a => hit.setAttribute(a, a === 'index' ? i : a === 'j' ? row : path.getAttribute(a)));
          hit.setAttribute('class', 'apexcharts-rangebar-area wcc-hit');
          hit.setAttribute('fill', 'transparent');
          sg.node.appendChild(hit);
          shown[key] = {
            geom
          };
          anims.push({
            type: 'fade',
            nodes: [boxEl, swarmDots ? null : gp].filter(Boolean),
            fresh: !p0
          });
        });
      });
      this.ctx._wccViolin = {
        shown
      };
      this.ctx._wccDots = dots;
      this.ctx._wccDotsKind = 'violin';
      if (dotMoves.length) anims.push({
        type: 'dots',
        moves: dotMoves
      });
      this.animate(anims, timing);
      return ret;
    }

    /** closed outline from geometry arrays; k scales the width (enter) */
    outline(gm, base, k) {
      const g = this.g;
      const n = gm.vals.length;
      if (!n) return '';
      const P = (c, v) => g.horizontal ? {
        x: v,
        y: c
      } : {
        x: c,
        y: v
      };
      const sc = c => base + (c - base) * k;
      const plus = [];
      const minus = [];
      for (let a = 0; a < n; a++) {
        plus.push(P(sc(gm.plus[a]), gm.vals[a]));
        minus.push(P(sc(gm.minus[a]), gm.vals[a]));
      }
      minus.reverse();
      const start = plus[0];
      return `M ${f2$4(start.x)} ${f2$4(start.y)}` + smooth(plus) + ` L ${f2$4(minus[0].x)} ${f2$4(minus[0].y)}` + smooth(minus) + ' Z';
    }
    animate(anims, timing) {
      if (!(timing.duration > 0)) return;
      const w = this.w;
      const easing = easingFor(w, timing.dynamic);
      anims.forEach(an => {
        if (an.type === 'shape') {
          const from = an.from;
          const to = an.to;
          const mix = e => from ? {
            vals: to.vals.map((v, k) => from.vals[k] + (v - from.vals[k]) * e),
            plus: to.plus.map((v, k) => from.plus[k] + (v - from.plus[k]) * e),
            minus: to.minus.map((v, k) => from.minus[k] + (v - from.minus[k]) * e)
          } : to;
          tween(this.ctx, {
            duration: timing.duration,
            easing,
            node: an.node,
            onUpdate: (tt, e) => an.set(mix(e), from ? 1 : Math.max(0.001, e))
          });
        } else if (an.type === 'dots') {
          const set = (m, e) => {
            const x = m.from.x + (m.to.x - m.from.x) * e;
            const y = m.from.y + (m.to.y - m.from.y) * e;
            if (m.square) {
              m.node.setAttribute('x', f2$4(x - m.size));
              m.node.setAttribute('y', f2$4(y - m.size));
            } else {
              m.node.setAttribute('cx', f2$4(x));
              m.node.setAttribute('cy', f2$4(y));
              m.node.setAttribute('r', f2$4(m.from.r + (m.size - m.from.r) * e));
            }
          };
          an.moves.forEach(m => set(m, 0));
          tween(this.ctx, {
            duration: timing.duration,
            easing,
            node: an.moves[0].node,
            onUpdate: (tt, e) => an.moves.forEach(m => set(m, e))
          });
        } else if (an.nodes.length) {
          an.nodes.forEach(n => n.style.opacity = '0');
          tween(this.ctx, {
            duration: 260,
            delay: timing.duration * (an.fresh ? 0.55 : 0.7),
            node: an.nodes[0],
            onUpdate: p => an.nodes.forEach(n => n.style.opacity = String(p)),
            onDone: () => an.nodes.forEach(n => n.style.removeProperty('opacity'))
          });
        }
      });
    }
  }

  /*
   * West Coast Charts - hierarchy model shared by sunburst, icicle and the
   * nested treemap (docs/spec/02-chart-types/sunburst.md, icicle.md).
   *
   * Input: one series whose data nodes are { x, y?, color?, children? }
   * (recursive), or a drilldown config (points carrying `drilldown: id`
   * that reference drilldown.series[]), read as plain data.
   * Output: a tree of nodes with values, colours and a [x0, x1] partition of
   * the unit interval per node (depth = ring / band).
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  const finite$8 = v => typeof v === 'number' && isFinite(v);
  const isObj$3 = v => v !== null && typeof v === 'object' && !Array.isArray(v);
  function numberOf(y) {
    if (finite$8(y)) return y;
    if (typeof y === 'string' && y.trim() !== '' && isFinite(+y)) return +y;
    return null;
  }

  /** raw point -> {x, y, color, children, drilldown, raw} */
  function readPoint(d, k) {
    if (d === null || d === undefined) return null;
    if (Array.isArray(d)) return {
      x: d[0],
      y: numberOf(d[1]),
      raw: d
    };
    if (!isObj$3(d)) {
      const y = numberOf(d);
      return y === null ? null : {
        x: String(k + 1),
        y,
        raw: d
      };
    }
    return {
      x: d.x !== undefined ? d.x : d.name !== undefined ? d.name : String(k + 1),
      y: numberOf(d.y !== undefined ? d.y : d.value),
      color: d.color || d.fillColor,
      children: Array.isArray(d.children) ? d.children : null,
      drilldown: d.drilldown,
      raw: d
    };
  }

  /**
   * Build the tree.
   * opts: { partition: 'normalize'|'strict', sort: 'none'|'value'|'name',
   *         colors: string[], tint: 0..1, drilldown: config.drilldown }
   */
  function buildTree(data, opts = {}) {
    const drill = new Map();
    const dd = opts.drilldown;
    if (dd && Array.isArray(dd.series)) {
      dd.series.forEach(s => {
        if (s && s.id !== undefined) {
          const d = Array.isArray(s.data) ? s.data : Array.isArray(s.series) && s.series[0] && Array.isArray(s.series[0].data) ? s.series[0].data : [];
          drill.set(String(s.id), d);
        }
      });
    }
    const root = {
      key: '',
      name: opts.rootLabel || 'All',
      depth: 0,
      children: [],
      parent: null,
      value: 0
    };
    const seen = new Set();
    const build = (list, parent, depth) => {
      (list || []).forEach((d, k) => {
        const p = readPoint(d, k);
        if (!p) return;
        const node = {
          name: String(p.x),
          key: parent.key + '/' + String(p.x),
          depth,
          parent,
          own: p.y,
          color: p.color,
          raw: p.raw,
          children: [],
          index: k
        };
        let kids = p.children;
        if (!kids && p.drilldown !== undefined && drill.has(String(p.drilldown))) {
          const id = String(p.drilldown);
          // guard against cycles in a drilldown config
          if (!seen.has(id) && depth < 32) {
            seen.add(id);
            kids = drill.get(id);
          }
        }
        if (kids && kids.length && depth < 32) build(kids, node, depth + 1);
        if (kids && p.drilldown !== undefined) seen.delete(String(p.drilldown));
        parent.children.push(node);
      });
    };
    build(data, root, 1);
    const strict = opts.partition === 'strict';
    const sum = n => {
      if (!n.children.length) {
        n.value = n.own !== null && n.own > 0 ? n.own : 0;
        return n.value;
      }
      const s = n.children.reduce((a, c) => a + sum(c), 0);
      n.childSum = s;
      n.value = strict && n.own !== null && n.own > 0 ? Math.max(n.own, 0) : s;
      return n.value;
    };
    sum(root);
    // keep a stable sibling order; sort if asked
    const sortKids = n => {
      if (opts.sort === 'value') n.children.sort((a, b) => b.value - a.value || a.index - b.index);else if (opts.sort === 'name') n.children.sort((a, b) => a.name.localeCompare(b.name) || a.index - b.index);
      n.children.forEach(sortKids);
    };
    sortKids(root);
    // drop empty nodes (zero / negative / missing values): nothing to draw
    const prune = n => {
      n.children = n.children.filter(c => c.value > 0);
      n.children.forEach(prune);
    };
    prune(root);
    // colours: top level from the palette, descendants tinted per depth
    const colors = opts.colors && opts.colors.length ? opts.colors : ['#2563eb'];
    const tint = finite$8(opts.tint) ? Math.max(0, Math.min(1, opts.tint)) : 0;
    if (opts.colorBy === 'name') {
      // WCC: stable colour per name (flame graphs: the same frame reads the
      // same everywhere), node colours still win
      const hash = s => {
        let h = 2166136261;
        for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
        return h >>> 0;
      };
      walk(root, n => {
        if (n !== root) n.fill = n.color || colors[hash(n.name) % colors.length];
      });
    } else {
      root.children.forEach((c, k) => paint$1(c, c.color || colors[k % colors.length], tint, opts.tintDirection));
    }
    // partition of the unit interval
    layout(root, 0, 1, strict);
    let maxDepth = 0;
    walk(root, n => maxDepth = Math.max(maxDepth, n.depth));
    root.maxDepth = maxDepth;
    walk(root, n => {
      n.height = n.children.length ? Math.max(...n.children.map(c => c.height || 0)) + 1 : 0;
    }, true);
    return root;
  }
  function paint$1(n, color, tint, dir) {
    n.fill = n.color || color;
    const k = n.children.length;
    n.children.forEach((c, i) => {
      // one tint step per depth, spread a little across the siblings so
      // neighbours stay distinguishable (WCC)
      const amt = tint * (k > 1 ? 0.7 + 0.6 * i / (k - 1) : 1);
      paint$1(c, c.color || (tint ? shade(n.fill, dir === 'dark' ? amt : -amt) : n.fill), tint, dir);
    });
  }
  function layout(n, x0, x1, strict) {
    n.x0 = x0;
    n.x1 = x1;
    if (!n.children.length) return;
    const total = strict ? Math.max(n.value, n.childSum || 0) : n.childSum || 0;
    let at = x0;
    n.children.forEach(c => {
      const w = total > 0 ? (x1 - x0) * c.value / total : 0;
      layout(c, at, at + w, strict);
      at += w;
    });
  }

  /** pre-order walk (post-order with `post`) */
  function walk(n, fn, post = false) {
    if (!post) fn(n);
    n.children.forEach(c => walk(c, fn, post));
    if (post) fn(n);
  }
  function ancestors(n) {
    const out = [];
    for (let p = n; p; p = p.parent) out.unshift(p);
    return out;
  }
  function findByKey(root, key) {
    let hit = null;
    walk(root, n => {
      if (!hit && n.key === key) hit = n;
    });
    return hit;
  }

  /** raw data of every series (before the flat bookkeeping transform) */
  function nestedSource(w) {
    return (w.config.series || []).map(s => isObj$3(s) ? s.wccSource && s.wccSource.data || s.data || [] : []);
  }
  function isNestedTreemap(w) {
    const req = w.config.chart.requestedType || w.config.chart.type;
    if (req !== 'treemap') return false;
    const o = w.config.plotOptions.treemap || {};
    if (o.nested && o.nested.enabled === false) return false;
    const levels = !!(o.nested && o.nested.drilldownAsLevels);
    return nestedSource(w).some(d => Array.isArray(d) && d.some(p => isObj$3(p) && (Array.isArray(p.children) || levels && p.drilldown !== undefined)));
  }

  /*
   * West Coast Charts - streamgraph layout (docs/spec/02-chart-types/streamgraph.md).
   * Columns are joined by x; the stack order and the baseline g0 follow the
   * spec formulation (zero / silhouette / expand / weighted wiggle after
   * Byron & Wattenberg 2008, inside-out ordering).
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  const isObj$2 = v => v !== null && typeof v === 'object' && !Array.isArray(v);
  function num$2(v) {
    const n = typeof v === 'string' && v.trim() !== '' ? Number(v) : v;
    return typeof n === 'number' && isFinite(n) ? n : null;
  }

  /** {x, y} list of one raw series */
  function streamPoints(raw, categories) {
    const out = [];
    (Array.isArray(raw) ? raw : []).forEach((d, j) => {
      if (d === undefined) return;
      if (isObj$2(d)) out.push({
        x: d.x !== undefined ? d.x : categories[j] !== undefined ? categories[j] : j + 1,
        y: d.y
      });else if (Array.isArray(d)) out.push({
        x: d[0],
        y: d[1]
      });else out.push({
        x: categories[j] !== undefined ? categories[j] : j + 1,
        y: d
      });
    });
    return out;
  }
  const keyOf = x => x instanceof Date ? 'd' + x.getTime() : typeof x + ':' + String(x);

  /**
   * Join series by x. Returns { xs, values[i][t] (>= 0), raw[i][t] (user
   * value or null), negatives }. Numeric / date x are sorted ascending;
   * category x keep their first-seen order.
   */
  function joinColumns(pointLists) {
    const xs = [];
    const index = new Map();
    pointLists.forEach(pts => pts.forEach(p => {
      const k = keyOf(p.x);
      if (!index.has(k)) {
        index.set(k, xs.length);
        xs.push(p.x);
      }
    }));
    const numeric = xs.length > 0 && xs.every(x => typeof x === 'number' && isFinite(x) || x instanceof Date);
    let order = xs.map((_, t) => t);
    if (numeric) order.sort((a, b) => +xs[a] - +xs[b]);
    const pos = new Array(xs.length);
    order.forEach((t, k) => pos[t] = k);
    const sortedX = order.map(t => xs[t]);
    let negatives = 0;
    const raw = pointLists.map(() => new Array(sortedX.length).fill(null));
    const values = pointLists.map(() => new Array(sortedX.length).fill(0));
    pointLists.forEach((pts, i) => pts.forEach(p => {
      const t = pos[index.get(keyOf(p.x))];
      const v = num$2(p.y);
      raw[i][t] = v;
      if (v === null) return;
      if (v < 0) negatives++;
      values[i][t] = Math.max(0, v);
    }));
    return {
      xs: sortedX,
      values,
      raw,
      negatives,
      numeric
    };
  }

  /** stack order (bottom first) of the series indices in `ids` */
  function stackOrder(values, ids, mode) {
    if (mode === 'none') return ids.slice();
    if (mode === 'inverse') return ids.slice().reverse();
    // inside-out: earliest peak first, each to the thinner side
    const peakAt = i => {
      let best = 0;
      values[i].forEach((v, t) => {
        if (v > values[i][best]) best = t;
      });
      return best;
    };
    const sum = i => values[i].reduce((a, b) => a + b, 0);
    const sorted = ids.slice().sort((a, b) => peakAt(a) - peakAt(b) || a - b);
    const top = [];
    const bottom = [];
    let topSum = 0;
    let bottomSum = 0;
    sorted.forEach(i => {
      if (topSum <= bottomSum) {
        top.push(i);
        topSum += sum(i);
      } else {
        bottom.push(i);
        bottomSum += sum(i);
      }
    });
    return bottom.reverse().concat(top);
  }

  /**
   * Layout of the stacked bands. `order` lists series bottom first.
   * Returns { lo[i][t], hi[i][t], min, max } for the series in `order`.
   */
  function streamLayout(values, order, offset) {
    const n = values.length ? values[0].length : 0;
    const f = order.map(i => values[i].slice());
    const totals = new Array(n).fill(0);
    for (let t = 0; t < n; t++) f.forEach(row => totals[t] += row[t]);
    if (offset === 'expand') {
      for (let t = 0; t < n; t++) f.forEach(row => row[t] = totals[t] > 0 ? row[t] / totals[t] : 0);
    }
    const g0 = new Array(n).fill(0);
    if (offset === 'silhouette') {
      for (let t = 0; t < n; t++) g0[t] = -totals[t] / 2;
    } else if (offset === 'wiggle' || offset === undefined) {
      for (let t = 1; t < n; t++) {
        let num = 0;
        let below = 0;
        let den = 0;
        for (let k = 0; k < f.length; k++) {
          const df = f[k][t] - f[k][t - 1];
          num += f[k][t] * (below + df / 2);
          below += df;
          den += f[k][t];
        }
        g0[t] = den > 0 ? g0[t - 1] - num / den : g0[t - 1];
      }
      // centre the whole stack vertically (spec: WCC shift)
      let lo = Infinity;
      let hi = -Infinity;
      for (let t = 0; t < n; t++) {
        const tot = f.reduce((a, row) => a + row[t], 0);
        lo = Math.min(lo, g0[t]);
        hi = Math.max(hi, g0[t] + tot);
      }
      if (isFinite(lo)) {
        const shift = -(lo + hi) / 2;
        for (let t = 0; t < n; t++) g0[t] += shift;
      }
    }
    const lo = {};
    const hi = {};
    let min = Infinity;
    let max = -Infinity;
    const base = g0.slice();
    order.forEach((i, k) => {
      lo[i] = new Array(n);
      hi[i] = new Array(n);
      for (let t = 0; t < n; t++) {
        lo[i][t] = base[t];
        hi[i][t] = base[t] + f[k][t];
        base[t] = hi[i][t];
      }
    });
    for (let t = 0; t < n; t++) {
      min = Math.min(min, g0[t]);
      max = Math.max(max, base[t]);
    }
    if (!isFinite(min)) {
      min = 0;
      max = 1;
    }
    if (max - min < 1e-12) max = min + 1;
    return {
      lo,
      hi,
      min,
      max,
      totals
    };
  }

  /*
   * West Coast Charts - series transforms for chart types whose series hold
   * raw input: waterfall (signed deltas), dumbbell (one series per measure),
   * histogram (observations).
   *
   * The transformed series replace w.config.series for the renderer (many
   * 4.7.0 code paths read w.config.series directly). Every transformed series
   * keeps the user's raw data in `wccSource`, and every transformed datum
   * carries a `wcc` marker, so re-running a transform (resize, legend toggle,
   * updateOptions without series) starts from the raw data again, and data
   * appended with appendData() (unmarked) is picked up.
   *
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  const isObj$1 = v => v !== null && typeof v === 'object' && !Array.isArray(v);
  const finite$7 = v => typeof v === 'number' && isFinite(v);

  /** raw user data of a (possibly already transformed) series */
  function rawData(s) {
    const data = Array.isArray(s && s.data) ? s.data : [];
    if (!s || !s.wccSource) return data;
    const marked = data.filter(d => isObj$1(d) && d.wcc);
    if (marked.length === 0) return data; // replaced by updateSeries
    const appended = data.filter(d => !(isObj$1(d) && d.wcc));
    return s.wccSource.data.concat(appended);
  }
  function categoryOf(w, j) {
    const cats = w.config.xaxis && w.config.xaxis.categories || [];
    if (cats[j] !== undefined) return cats[j];
    const labels = w.config.labels || [];
    if (labels[j] !== undefined) return labels[j];
    return String(j + 1);
  }

  /** {x, y, ...flags} from any accepted point shape */
  function normalizePoint(w, d, j) {
    if (isObj$1(d)) return {
      ...d,
      x: d.x !== undefined ? d.x : categoryOf(w, j)
    };
    if (Array.isArray(d)) return {
      x: d[0],
      y: d[1]
    };
    return {
      x: categoryOf(w, j),
      y: d
    };
  }

  // ---------------------------------------------------------------- waterfall
  // tuned tones of the spec hues for the themed presets (classic keeps the
  // spec colours); only used when the user did not set the colour
  const WATERFALL_TONES = {
    accessible: {
      light: ['#009e73', '#d55e00'],
      dark: ['#3ccf9f', '#ff8a3d']
    },
    default: {
      light: ['#059669', '#e11d48'],
      dark: ['#34d399', '#fb7185']
    }
  };
  function waterfallColors(w, ctx) {
    const c = w.config.plotOptions.waterfall && w.config.plotOptions.waterfall.colors || {};
    const user = ctx && ctx._wccUserShape || {};
    const set = k => !!getPathSafe(user, ['plotOptions', 'waterfall', 'colors', k]);
    const preset = w.config.theme && w.config.theme.preset || 'classic';
    const mode = w.config.theme && w.config.theme.mode === 'dark' ? 'dark' : 'light';
    let pos = c.positive;
    let neg = c.negative;
    if (preset !== 'classic' && w.config.theme.resolvedTokens) {
      const tones = (WATERFALL_TONES[preset] || WATERFALL_TONES.default)[mode];
      if (!set('positive') && pos === '#00A86F') pos = tones[0];
      if (!set('negative') && neg === '#FF4560') neg = tones[1];
    }
    return {
      positive: pos,
      negative: neg,
      subtotal: c.subtotal,
      total: c.total
    };
  }
  function getPathSafe(o, keys) {
    return keys.reduce((a, k) => a && typeof a === 'object' ? a[k] : undefined, o);
  }
  function waterfallData(w, raw, colors) {
    let level = 0;
    let cut = 0;
    const out = [];
    raw.forEach((d0, j) => {
      const d = normalizePoint(w, d0, j);
      let start;
      let end;
      let kind;
      if (d.isTotal) {
        kind = 'total';
        start = 0;
        end = level;
        cut = level;
      } else if (d.isSubtotal) {
        kind = 'subtotal';
        start = cut;
        end = level;
        cut = level;
      } else {
        const y = typeof d.y === 'string' ? parseFloat(d.y) : d.y;
        const delta = finite$7(y) ? y : 0;
        kind = delta < 0 ? 'negative' : 'positive';
        start = level;
        end = level + delta;
        level = end;
        if (!finite$7(y)) kind = 'empty';
      }
      const point = {
        x: d.x,
        y: [start, end],
        wcc: {
          kind,
          value: end - start,
          level: end,
          index: j
        }
      };
      const semantic = colors && colors[kind === 'empty' ? 'positive' : kind];
      if (d.fillColor) point.fillColor = d.fillColor;else if (semantic) point.fillColor = semantic;
      if (d.strokeColor) point.strokeColor = d.strokeColor;
      if (d.goals) point.goals = d.goals;
      out.push(point);
    });
    return out;
  }

  // ---------------------------------------------------------------- dumbbell
  /**
   * One series per measure, rows joined by x. Each measure becomes a range
   * series of zero-length ranges [v, v] on a shared category order, so the
   * 4.7.0 axis code scales to all values; the dumbbell renderer draws the
   * rows. Legacy one-series [low, high] data is passed through unchanged.
   */
  function isLegacyDumbbell(series) {
    if (series.length !== 1) return false;
    const d = (series[0].data || []).find(p => p !== null && p !== undefined);
    return isObj$1(d) && Array.isArray(d.y);
  }
  function dumbbellSeries(w, series) {
    const order = [];
    const seen = new Map();
    const hidden = w.globals.collapsedSeriesIndices || [];
    const isHidden = i => hidden.indexOf(i) > -1 && series[i].wccSource;
    // hidden measures keep their place in the row order (rows do not jump
    // when a measure is toggled off in the legend)
    const raws = series.map((s, i) => isHidden(i) ? s.wccSource.data : rawData(s));
    raws.forEach(raw => raw.forEach((d0, j) => {
      if (d0 === null || d0 === undefined) return;
      const d = normalizePoint(w, d0, j);
      const key = String(d.x);
      if (!seen.has(key)) {
        seen.set(key, order.length);
        order.push(d.x);
      }
    }));
    return series.map((s, i) => {
      if (isHidden(i)) return s;
      const byX = new Map();
      raws[i].forEach((d0, j) => {
        if (d0 === null || d0 === undefined) return;
        const d = normalizePoint(w, d0, j);
        byX.set(String(d.x), d);
      });
      const data = order.map((x, row) => {
        const d = byX.get(String(x));
        const v = d && (typeof d.y === 'string' ? parseFloat(d.y) : d.y);
        return finite$7(v) ? {
          x,
          y: [v, v],
          wcc: {
            value: v,
            row
          }
        } : {
          x,
          y: null,
          wcc: {
            value: null,
            row
          }
        };
      });
      return {
        ...s,
        data,
        wccSource: {
          data: raws[i]
        }
      };
    });
  }

  // ---------------------------------------------------------------- violin
  /**
   * Violin / raincloud: one violin per datum (category). Statistics are
   * computed here (KDE, summary); the datum becomes a range [min, max] so the
   * rangeBar scales cover the whole curve. Categories are joined by x across
   * series (grouped violins).
   */
  function violinDatum(d0) {
    if (d0 === null || d0 === undefined) return null;
    if (Array.isArray(d0)) {
      // [x, number[]] tuple, or a bare sample (category from the labels)
      if (d0.length === 2 && Array.isArray(d0[1])) return {
        x: d0[0],
        y: d0[1]
      };
      return {
        y: d0
      };
    }
    return isObj$1(d0) ? d0 : {
      y: [d0]
    };
  }
  function violinSeries(w, series, pointRange = false) {
    const vo = w.config.plotOptions.violin || {};
    const statOpts = {
      kde: vo.kde || {},
      whiskers: (vo.box || {}).whiskers,
      pct: (vo.box || {}).whiskerPercentiles
    };
    const hidden = w.globals.collapsedSeriesIndices || [];
    const isHidden = i => hidden.indexOf(i) > -1 && series[i].wccSource;
    const raws = series.map((s, i) => isHidden(i) ? s.wccSource.data : rawData(s));
    const order = [];
    const seen = new Map();
    raws.forEach(raw => raw.forEach((d0, j) => {
      const d = violinDatum(d0);
      if (!d) return;
      const x = d.x !== undefined ? d.x : categoryOf(w, j);
      const key = String(x);
      if (!seen.has(key)) {
        seen.set(key, order.length);
        order.push(x);
      }
    }));
    return series.map((s, i) => {
      if (isHidden(i)) return s;
      const byX = new Map();
      raws[i].forEach((d0, j) => {
        const d = violinDatum(d0);
        if (!d) return;
        const x = d.x !== undefined ? d.x : categoryOf(w, j);
        byX.set(String(x), d);
      });
      const data = order.map((x, row) => {
        const d = byX.get(String(x));
        const st = d ? violinStats(d, statOpts) : null;
        if (!st || st.min === null) return {
          x,
          y: null,
          wcc: {
            row,
            stats: null
          }
        };
        // beeswarm: the scale covers the dots (no KDE tails)
        const lo = pointRange && st.points.length ? st.points[0] : st.min;
        const hi = pointRange && st.points.length ? st.points[st.points.length - 1] : st.max;
        const p = {
          x,
          y: lo === hi ? [lo - (Math.abs(lo) || 1) * 0.05, hi + (Math.abs(hi) || 1) * 0.05] : [lo, hi],
          wcc: {
            row,
            stats: st
          }
        };
        // WccDatum: an explicit fill wins over the general item colour.
        if (d.fillColor || d.color) p.fillColor = d.fillColor || d.color;
        return p;
      });
      return {
        ...s,
        data,
        wccSource: {
          data: raws[i]
        }
      };
    });
  }

  // ---------------------------------------------------------------- box plot
  /**
   * Box plot from raw observations: a datum with `points: number[]` (or a
   * `y` array whose length is not 5) becomes the five-number summary under
   * plotOptions.boxPlot.whiskers ('minmax' | 'tukey' | 'percentile' with
   * whiskerPercentiles); the sorted sample stays on the datum (wcc.pts) for the
   * points decoration. Precomputed summaries pass through unchanged.
   */
  function boxSeries(w, series) {
    const o = w.config.plotOptions.boxPlot || {};
    const raws = series.map(s => isObj$1(s) ? rawData(s) : []);
    const rawOf = d => isObj$1(d) && (Array.isArray(d.points) ? d.points : Array.isArray(d.y) && d.y.length !== 5 ? d.y : null);
    if (!raws.some(r => r.some(rawOf))) return series;
    return series.map((s, i) => isObj$1(s) ? {
      ...s,
      data: raws[i].map((d, j) => {
        const r = rawOf(d);
        const {
          points,
          ...p
        } = normalizePoint(w, d, j);
        if (!r) return {
          ...p,
          wcc: {}
        };
        const pts = observations(r).sort((a, b) => a - b);
        return {
          ...p,
          y: pts.length ? summary(pts, o.whiskers, o.whiskerPercentiles) : null,
          wcc: {
            pts
          }
        };
      }),
      wccSource: {
        data: raws[i]
      }
    } : s);
  }

  // ---------------------------------------------------------------- slope
  /**
   * Slope: plain line series. `plotOptions.slope.colorBy: 'direction'` colours
   * each entity by the sign of last - first (series[].color set by the user
   * wins); `highlight` greys every series not named in it.
   */
  function slopeSeries(w, series) {
    const so = w.config.plotOptions.slope || {};
    const hl = Array.isArray(so.highlight) ? so.highlight.map(String) : null;
    if (so.colorBy !== 'direction' && !hl) return series;
    const muted = so.mutedColor || (w.config.theme && w.config.theme.mode === 'dark' ? '#4b5563' : '#c4c9d2');
    return series.map(s => {
      if (!isObj$1(s)) return s;
      if (s.color !== undefined && !s.wccAutoColor) return s;
      const num = d => isObj$1(d) ? d.y : Array.isArray(d) ? d[1] : d;
      const vals = (s.data || []).map(num).filter(v => typeof v === 'number' && isFinite(v));
      let color;
      if (hl && hl.indexOf(String(s.name)) === -1) color = muted;else if (so.colorBy === 'direction' && vals.length) {
        const dlt = vals[vals.length - 1] - vals[0];
        const tol = Math.abs(vals[0]) * (so.flatThreshold === undefined ? 0.005 : so.flatThreshold);
        color = dlt > tol ? so.upColor || '#16a34a' : dlt < -tol ? so.downColor || '#dc2626' : so.flatColor || '#94a3b8';
      }
      if (color === undefined) {
        if (!s.wccAutoColor) return s;
        const {
          color: _c,
          wccAutoColor: _a,
          ...rest
        } = s;
        return rest;
      }
      return {
        ...s,
        color,
        wccAutoColor: true
      };
    });
  }

  // ---------------------------------------------------------------- calendar
  /**
   * Calendar heatmap: the first series (one value per day) becomes 7 weekday
   * rows of week cells (modules/types/Calendar). Idempotent: the weekday rows
   * carry the raw input on wccSource and are rebuilt from it.
   */
  function calendarSeries(w, series) {
    const co = w.config.plotOptions.calendar || {};
    const built = series.length === 7 && series.every(s => isObj$1(s) && s.wccCalendar);
    const src = built ? series[0].wccSource.series : series;
    const first = src.find(s => isObj$1(s)) || null;
    const raw = first ? Array.isArray(first.data) ? first.data : [] : [];
    const L = calendarLayout(raw, co);
    w.globals.wccCalendar = L.grid ? {
      ...L.grid,
      name: first && first.name !== undefined ? String(first.name) : ''
    } : null;
    if (!L.grid) return [{
      name: first && first.name,
      data: []
    }];
    const color = first && first.color || co.color;
    return L.series.map(s => ({
      ...s,
      ...(color ? {
        color
      } : {}),
      wccCalendar: true,
      wccSource: {
        series: src,
        data: []
      }
    }));
  }

  // ---------------------------------------------------------------- streamgraph
  /**
   * Streamgraph: N scalar series become N bands {x, y: [lo, hi]} for the
   * rangeArea renderer. The baseline is re-solved from the visible series
   * (legend toggles). The layout is kept on w.globals.wccStreamgraph.
   */
  function streamSeries(w, series, ctx) {
    const so = w.config.plotOptions.streamgraph || {};
    const hidden = w.globals.collapsedSeriesIndices || [];
    const isHidden = i => hidden.indexOf(i) > -1 && series[i].wccSource;
    const raws = series.map((s, i) => isHidden(i) ? s.wccSource.data : rawData(s));
    const cats = w.config.xaxis && w.config.xaxis.categories || w.config.labels || [];
    const cols = joinColumns(raws.map(r => streamPoints(r, cats)));
    if (cols.negatives && ctx && !ctx._wccStreamWarned) {
      ctx._wccStreamWarned = true;
      console.warn('WestCoastCharts: streamgraph values must be >= 0; negative values were drawn as 0. Use a stacked area chart for signed data.');
    }
    const visible = series.map((_, i) => i).filter(i => !isHidden(i));
    const order = stackOrder(cols.values, visible, so.order || 'inside-out');
    const offset = so.offset || 'wiggle';
    const L = streamLayout(cols.values, order, offset);
    w.globals.wccStreamgraph = {
      ...cols,
      order,
      offset,
      ...L
    };
    return series.map((s, i) => {
      if (isHidden(i)) return s;
      const data = cols.xs.map((x, t) => ({
        x,
        y: [L.lo[i][t], L.hi[i][t]],
        wcc: {
          value: cols.raw[i][t],
          t
        }
      }));
      return {
        ...s,
        data,
        wccSource: {
          data: raws[i]
        }
      };
    });
  }

  // ---------------------------------------------------------------- unit / waffle
  const numOf = v => {
    const n = typeof v === 'string' && v.trim() !== '' ? Number(v) : v;
    return typeof n === 'number' && isFinite(n) ? n : null;
  };

  /** original series of a unit chart (survives re-runs and legend toggles) */
  function unitOriginal(series) {
    const src = series.find(s => isObj$1(s) && s.wccSource && s.wccSource.series);
    if (!src) return null;
    const fresh = series.some(s => isObj$1(s) && Array.isArray(s.data) && s.data.length && !s.data.every(d => isObj$1(d) && d.wcc && d.wcc.unit));
    return fresh ? null : src.wccSource.series;
  }

  /**
   * Unit / waffle: one series per category for the core (legend, colours,
   * toggles); the marks model goes to w.globals.wccUnit.
   * Accepted: flat counts + labels (also wrapped as one numeric series by
   * ConfigGuard), one series per category with numeric data (summed), or
   * object data (one mark per datum).
   */
  function unitSeries(w, series, ctx) {
    const o = w.config.plotOptions.unit || {};
    const original = unitOriginal(series) || series;
    const labels = (w.config.labels && w.config.labels.length ? w.config.labels : w.config.xaxis && w.config.xaxis.categories) || [];
    let cats = [];
    const flat = original.every(s => s === null || s === undefined || typeof s === 'number' || typeof s === 'string');
    if (flat) {
      cats = original.map((v, i) => ({
        name: labels[i] !== undefined ? String(labels[i]) : `Series ${i + 1}`,
        value: Math.max(0, numOf(v) || 0)
      }));
    } else if (original.length === 1 && isObj$1(original[0]) && (original[0].data || []).every(d => !isObj$1(d))) {
      const d = original[0].data || [];
      cats = d.map((v, i) => ({
        name: labels[i] !== undefined ? String(labels[i]) : `Series ${i + 1}`,
        value: Math.max(0, numOf(Array.isArray(v) ? v[1] : v) || 0)
      }));
    } else {
      cats = original.map((s, i) => {
        if (!isObj$1(s)) return {
          name: `Series ${i + 1}`,
          value: Math.max(0, numOf(s) || 0)
        };
        const data = Array.isArray(s.data) ? s.data.filter(d => d !== null && d !== undefined) : [];
        const name = s.name !== undefined ? String(s.name) : labels[i] !== undefined ? String(labels[i]) : `Series ${i + 1}`;
        if (data.length && data.every(isObj$1)) {
          return {
            name,
            value: data.length,
            items: data.map(d => ({
              ...d,
              value: numOf(d.value !== undefined ? d.value : d.y)
            })),
            color: s.color
          };
        }
        const sum = data.reduce((a, v) => a + Math.max(0, numOf(Array.isArray(v) ? v[1] : v) || 0), 0);
        return {
          name,
          value: sum,
          color: s.color
        };
      });
    }
    const hidden = w.globals.collapsedSeriesIndices || [];
    const unitValue = numOf(o.unitValue) > 0 ? numOf(o.unitValue) : 1;
    cats.forEach((c, i) => {
      c.hidden = hidden.indexOf(i) > -1;
      c.count = c.hidden ? 0 : c.items ? c.items.length : Math.round(c.value / unitValue);
    });
    const go = o.grid || {};
    const layout = o.layout || 'grouped';
    if (layout === 'grid' && go.split) {
      const total = numOf(go.total) > 0 ? Math.round(go.total) : 100;
      const max = numOf(go.max) > 0 ? go.max : Math.max(1e-12, ...cats.map(c => c.hidden ? 0 : c.value));
      cats.forEach(c => {
        if (!c.hidden && !c.items) c.count = Math.max(0, Math.min(total, Math.round(c.value / max * total)));
      });
    } else if (layout === 'grid' && numOf(go.total) > 0) {
      // fixed budget: largest remainder so the cells add up exactly
      const alloc = largestRemainder(cats.map(c => c.hidden ? 0 : c.value), Math.round(go.total));
      cats.forEach((c, i) => {
        if (!c.items) c.count = alloc[i];
      });
    }
    const maxUnits = numOf(o.maxUnits) > 0 ? Math.round(o.maxUnits) : 5000;
    const sum = cats.reduce((a, c) => a + c.count, 0);
    if (sum > maxUnits) {
      const alloc = largestRemainder(cats.map(c => c.count), maxUnits);
      cats.forEach((c, i) => {
        if (alloc[i] !== c.count) c.scaled = true;
        c.count = alloc[i];
        if (c.items) c.items = c.items.slice(0, c.count);
      });
      if (ctx && !ctx._wccUnitInfo) {
        ctx._wccUnitInfo = true;
        console.info(`WestCoastCharts: ${sum} units exceed plotOptions.unit.maxUnits (${maxUnits}); marks were scaled down proportionally.`);
      }
    }
    // colours are resolved by the renderer (w.globals.colors is not final yet)
    w.globals.wccUnit = {
      categories: cats,
      unitValue
    };
    return cats.map((c, i) => ({
      name: c.name,
      data: [{
        x: c.name,
        y: c.hidden ? 0 : c.value,
        wcc: {
          unit: true,
          i
        }
      }],
      wccSource: {
        series: original
      }
    }));
  }

  // ---------------------------------------------------------------- hierarchy
  /**
   * Sunburst / icicle: the hierarchy stays in wccSource (read by the
   * renderer); the series the core sees holds the top-level nodes with their
   * subtree totals (legend, globals, exports).
   */
  function hierarchySeries(w, series, type) {
    const s = series[0];
    if (!s) return series;
    const raw = s.wccSource ? s.wccSource.data : rawData(s);
    const o = w.config.plotOptions[type] || {};
    const root = buildTree(raw, {
      partition: o.partition,
      sort: o.sort,
      drilldown: w.config.drilldown
    });
    const data = root.children.map(n => ({
      x: n.name,
      y: n.value,
      wcc: {
        key: n.key
      }
    }));
    return [{
      ...s,
      data,
      wccSource: {
        data: raw
      }
    }].concat(series.slice(1).map(x => ({
      ...x,
      data: []
    })));
  }

  /**
   * Nested treemap: the raw hierarchy stays in wccSource; the core sees the
   * top level as flat points (legend, events, nested.enabled:false layout).
   */
  function nestedTreemapSeries(w, series) {
    const o = w.config.plotOptions.treemap || {};
    const levels = !!(o.nested && o.nested.drilldownAsLevels);
    const nested = d => Array.isArray(d) && d.some(p => isObj$1(p) && (Array.isArray(p.children) || levels && p.drilldown !== undefined));
    const ours = s => Array.isArray(s.data) && s.data.length > 0 && s.data.every(d => isObj$1(d) && d.wcc && (d.wcc.tm || typeof d.wcc.key === 'string')); // ours or sunburst / icicle top level
    let any = false;
    const out = series.map(s => {
      if (!isObj$1(s)) return s;
      const raw = s.wccSource && ours(s) ? s.wccSource.data : s.data;
      if (!nested(raw)) {
        if (s.wccSource && !ours(s)) {
          // flat data replaced a hierarchy: drop the stale source
          const {
            wccSource,
            ...rest
          } = s; // eslint-disable-line no-unused-vars
          any = true;
          return rest;
        }
        return s;
      }
      any = true;
      const root = buildTree(raw, {
        sort: 'none',
        drilldown: levels ? w.config.drilldown : null
      });
      const data = root.children.map(n => ({
        x: n.name,
        y: n.value,
        ...(n.color ? {
          fillColor: n.color
        } : {}),
        wcc: {
          tm: true,
          key: n.key
        }
      }));
      return {
        ...s,
        data,
        wccSource: {
          data: raw
        }
      };
    });
    return any ? out : series;
  }

  // ---------------------------------------------------------------- dispatch
  /**
   * Returns the series the renderer should use (or the input unchanged).
   * `collapsed` = raw data of legend-hidden series (histogram binning keeps
   * its edges when a series is toggled off).
   */
  const RACE_PALETTE = ['#6366f1', '#0ea5e9', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#14b8a6', '#f97316', '#ec4899', '#84cc16'];

  /**
   * bar race: one series of { x: name, y: value } (or [name, value]) per
   * frame -> the top `maxBars`, sorted, with a colour that stays with its
   * name across updates. Non-finite values drop out; duplicate names keep
   * the last value.
   */
  function racePalette(w) {
    if (Array.isArray(w.config.colors) && w.config.colors.length && typeof w.config.colors[0] === 'string') return w.config.colors;
    const th = w.config.theme || {};
    const cbm = th.accessibility && th.accessibility.colorBlindMode;
    const cvd = cbm && _21[cbm];
    if (cvd) return cvd[th.mode === 'dark' ? 'dark' : 'light'];
    if (typeof th.palette === 'string' && th.palette.indexOf('wcc-') === 0) {
      // same resolution as ThemeTokens.palette (a core module plugins do not import)
      const preset = th.palette.slice(4);
      const mode = th.mode === 'dark' ? 'dark' : 'light';
      const p = preset === th.preset && th.resolvedTokens && th.resolvedTokens.palette ? th.resolvedTokens.palette : _3$1[preset] && _3$1[preset][mode] && _3$1[preset][mode].palette;
      if (p && p.length) return p.slice();
    }
    return RACE_PALETTE;
  }

  // names take at most about a third of a narrow chart (phone cards), the
  // configured yaxis.labels.maxWidth stays the upper cap
  function raceNameWidth(w, ctx) {
    const el = ctx && ctx.el;
    const chart = w.config.chart || {};
    let width = typeof chart.width === 'number' ? chart.width : 0;
    if (!width && el && el.getBoundingClientRect) width = el.getBoundingClientRect().width || 0;
    if (!(width > 0)) return;
    if (!w.config.yaxis) return;
    const ys = Array.isArray(w.config.yaxis) ? w.config.yaxis : [w.config.yaxis];
    if (!ctx._wccRaceMaxW) ctx._wccRaceMaxW = ys.map(y => y && y.labels && y.labels.maxWidth || 200);
    const cap = Math.max(56, Math.round(width * 0.34));
    ys.forEach((y, k) => {
      if (y && y.labels) y.labels.maxWidth = Math.min(ctx._wccRaceMaxW[k] || 200, cap);
    });
  }
  function raceSeries(w, series, ctx) {
    const s = series[0];
    if (!isObj$1(s)) return series;
    const o = w.config.plotOptions.barRace || {};
    raceNameWidth(w, ctx);
    const raw = rawData(s);
    const byName = new Map();
    raw.forEach((d, k) => {
      let x;
      let y;
      let color;
      if (Array.isArray(d)) [x, y] = d;else if (isObj$1(d)) {
        x = d.x !== undefined ? d.x : d.name;
        y = d.y !== undefined ? d.y : d.value;
        color = d.fillColor || d.color;
      } else return;
      if (typeof y === 'string' && y.trim() !== '' && isFinite(+y)) y = +y;
      if (x === undefined || x === null || x === '') return;
      if (!finite$7(y)) {
        // null: the row stays (no bar, a dash) unless plotOptions.barRace.nulls is 'hide'
        if (o.nulls === 'hide' || y !== null && y !== undefined && !(typeof y === 'number')) return;
        y = null;
      }
      byName.set(String(x), {
        name: String(x),
        y,
        color,
        k
      });
    });
    const asc = o.sort === 'asc';
    const rank = p => p.y === null ? 1 : 0;
    const list = Array.from(byName.values()).sort((a, b) => rank(a) - rank(b) || (a.y !== null && b.y !== null ? asc ? a.y - b.y : b.y - a.y : 0) || a.k - b.k);
    const max = finite$7(+o.maxBars) && +o.maxBars >= 1 ? Math.round(+o.maxBars) : 10;
    const reg = ctx ? ctx._wccRaceColors = ctx._wccRaceColors || new Map() : new Map();
    const user = Array.isArray(o.colors) && o.colors.length ? o.colors : null;
    const pal = user || racePalette(w);
    const colorOf = p => {
      if (p.color) return p.color;
      if (!reg.has(p.name)) reg.set(p.name, reg.size);
      return pal[reg.get(p.name) % pal.length];
    };
    const data = list.slice(0, max).map(p => ({
      x: p.name,
      y: p.y,
      fillColor: colorOf(p),
      wcc: {
        race: true
      }
    }));
    return [{
      ...s,
      data,
      wccSource: {
        data: raw
      },
      wccRace: {
        total: list.length,
        max
      }
    }];
  }
  function transformSeries(w, series, ctx) {
    const type = w.config.chart.requestedType;
    if (!Array.isArray(series) || !series.length && type !== 'unit' && type !== 'waffle') return series;
    switch (type) {
      case 'waterfall':
        {
          const colors = waterfallColors(w, ctx);
          return series.map((s, i) => {
            if (!isObj$1(s)) return s;
            if (i > 0) return s; // one walk per chart (spec): extra series pass through
            const raw = rawData(s);
            return {
              ...s,
              data: waterfallData(w, raw, colors),
              wccSource: {
                data: raw
              }
            };
          });
        }
      case 'dumbbell':
        {
          if (series.some(s => !isObj$1(s))) return series;
          const plain = series.map(s => s.wccSource ? {
            ...s,
            data: rawData(s)
          } : s);
          if (isLegacyDumbbell(plain)) return plain;
          return dumbbellSeries(w, plain);
        }
      case 'barRace':
        return raceSeries(w, series, ctx);
      case 'histogram':
        {
          if (series.some(s => !isObj$1(s))) return series;
          return binSeries(w, series, rawData);
        }
      case 'treemap':
        return nestedTreemapSeries(w, series);
      case 'sunburst':
      case 'icicle':
        {
          if (series.some(s => !isObj$1(s))) return series;
          return hierarchySeries(w, series, type);
        }
      case 'violin':
      case 'raincloud':
      case 'beeswarm':
        {
          if (series.some(s => !isObj$1(s))) return series;
          return violinSeries(w, series, type === 'beeswarm');
        }
      case 'unit':
      case 'waffle':
        return unitSeries(w, series, ctx);
      case 'streamgraph':
        {
          if (series.some(s => !isObj$1(s))) return series;
          return streamSeries(w, series, ctx);
        }
      case 'slope':
        return slopeSeries(w, series);
      case 'boxPlot':
        return boxSeries(w, series);
      case 'calendar':
        return calendarSeries(w, series);
      default:
        return series;
    }
  }

  /**
   * Histogram x axis: the scale spans exactly the bin edges and the ticks sit
   * on edges (unless the user set min / max / tickAmount themselves).
   */
  /** streamgraph: the (hidden) value axis spans exactly the stack */
  function applyStreamAxis(w, ctx) {
    const st = w.globals.wccStreamgraph;
    if (!st) return;
    const user = (ctx && ctx._wccUserShape || {}).yaxis || {};
    if (user === true || Array.isArray(user)) return;
    const ya = Array.isArray(w.config.yaxis) ? w.config.yaxis[0] : null;
    if (!ya) return;
    const pad = st.offset === 'expand' ? 0 : (st.max - st.min) * 0.02;
    if (!user.min) ya.min = st.min - pad;
    if (!user.max) ya.max = st.max + pad;
    if (!user.forceNiceScale) ya.forceNiceScale = false;
    if (user.show === undefined) ya.show = false;
  }

  /**
   * box plots with observation dots: the value axis must also reach the dots
   * beyond the whiskers (tukey / percentile); nice bounds unless the user set
   * the y axis. What we set is undone when no dot lies outside any more.
   */
  function applyBoxAxis(w, ctx) {
    const y0 = w.config.yaxis && w.config.yaxis[0];
    const uy = (ctx && ctx._wccUserShape || {}).yaxis || {};
    if (!y0 || uy === true || Array.isArray(uy) || uy.min !== undefined || uy.max !== undefined) return;
    let lo = Infinity;
    let hi = -Infinity;
    let out = false;
    if ((w.config.plotOptions.boxPlot.points || {}).show) {
      w.config.series.forEach(s => (s && s.data || []).forEach(d => {
        const p = d && d.wcc && d.wcc.pts;
        if (!p || !p.length || !Array.isArray(d.y)) return;
        lo = Math.min(lo, d.y[0], p[0]);
        hi = Math.max(hi, d.y[4], p[p.length - 1]);
        if (p[0] < d.y[0] || p[p.length - 1] > d.y[4]) out = true;
      }));
    }
    if (out) {
      const t = niceTicks(lo, hi, 5);
      y0.min = t[0];
      y0.max = t[t.length - 1];
      if (!uy.tickAmount) y0.tickAmount = t.length - 1;
      y0.wccBox = 1;
    } else if (y0.wccBox) {
      y0.min = y0.max = y0.wccBox = undefined;
      if (!uy.tickAmount) y0.tickAmount = undefined;
    }
  }
  function applyHistogramAxis(w, ctx) {
    if (w.config.chart.requestedType === 'streamgraph') return applyStreamAxis(w, ctx);
    if (w.config.chart.requestedType === 'boxPlot') return applyBoxAxis(w, ctx);
    if (w.config.chart.requestedType !== 'histogram') return;
    const h = w.globals.wccHistogram;
    if (!h || !h.count) return;
    const user = (ctx && ctx._wccUserShape || {}).xaxis || {};
    const xa = w.config.xaxis;
    if (user === true) return;
    if (!user.min) xa.min = h.edges[0];
    // ticks on bin edges: every k-th edge with k from a nice sequence, at
    // most 8 intervals; the axis is padded to a whole number of tick steps
    const seq = [1, 2, 4, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000];
    // an exact divisor giving 4..10 intervals avoids padding the axis
    let k = h.count <= 10 ? 1 : 0;
    for (let d = 2; !k && d <= h.count; d++) {
      const n = h.count / d;
      if (h.count % d === 0 && n <= 10 && n >= 4) {
        k = d;
        break;
      }
    }
    if (!k) k = seq.find(s => h.count / s <= 8) || Math.ceil(h.count / 8);
    const axisCount = Math.ceil(h.count / k) * k;
    if (!user.max) xa.max = Number((h.edges[0] + axisCount * h.width).toPrecision(12));
    if (!user.tickAmount && !user.min && !user.max) xa.tickAmount = axisCount / k;
  }

  /*
   * West Coast Charts - value-axis tick thinning for horizontal WCC types.
   * Narrow horizontal charts (waterfall, dumbbell, violin, raincloud, ...)
   * print their value ticks along the x axis, where wide numbers collide.
   * Instead of overlapping, every k-th tick is kept (the smallest k that
   * leaves a clear gap), the zero tick is preferred as the anchor.
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  const GAP = 6;
  function thinValueTicks(w) {
    markEmpty(w);
    // type decorations that need the drawn axes (e.g. honeycomb heatmap labels)
    const after = w.globals.wccAfterAxes;
    if (after && after.length) {
      w.globals.wccAfterAxes = [];
      after.forEach(fn => {
        try {
          fn();
        } catch (e) {
          // decorations never break a render
        }
      });
    }
    const type = w.config.chart.requestedType;
    if (!type || type === w.config.chart.type) return;
    if (!(w.config.plotOptions.bar && w.config.plotOptions.bar.horizontal)) return;
    const root = w.globals.dom && w.globals.dom.baseEl;
    if (!root) return;
    const texts = Array.from(root.querySelectorAll('.apexcharts-xaxis-texts-g text'));
    if (texts.length < 3) return;
    const boxes = [];
    for (const t of texts) {
      t.classList.remove('wcc-tick-thinned');
      t.style.removeProperty('display');
      let b;
      try {
        b = t.getBBox();
      } catch (e) {
        return;
      }
      if (!b || !(b.width > 0)) return;
      boxes.push({
        t,
        x0: b.x,
        x1: b.x + b.width,
        label: (t.textContent || '').trim()
      });
    }
    boxes.sort((a, b) => a.x0 - b.x0);
    const clear = list => list.every((b, k) => k === 0 || b.x0 - list[k - 1].x1 >= GAP);
    if (clear(boxes)) return;
    let anchor = boxes.findIndex(b => /^-?0(\.0+)?$/.test(b.label.replace(/[^\d.-]/g, '')));
    if (anchor < 0) anchor = 0;
    for (let k = 2; k < boxes.length; k++) {
      const kept = boxes.filter((b, idx) => (idx - anchor) % k === 0);
      if (kept.length >= 2 && clear(kept)) {
        boxes.forEach((b, idx) => {
          if ((idx - anchor) % k !== 0) {
            b.t.classList.add('wcc-tick-thinned');
            b.t.style.display = 'none';
          }
        });
        return;
      }
    }
    // nothing pairs up cleanly: keep the two ends only
    boxes.forEach((b, idx) => {
      if (idx !== 0 && idx !== boxes.length - 1) {
        b.t.classList.add('wcc-tick-thinned');
        b.t.style.display = 'none';
      }
    });
  }

  /**
   * empty WCC charts show the noData placeholder only: no fake axes, ticks or
   * gridlines (CSS: .wcc-no-data in wcc-types.css)
   */
  function markEmpty(w) {
    const root = w.globals.dom && w.globals.dom.baseEl;
    if (!root || !root.classList) return;
    const type = w.config.chart.requestedType;
    const wcc = !!type && type !== w.config.chart.type;
    root.classList.toggle('wcc-no-data', wcc && !!w.globals.noData);
  }

  /*
   * West Coast Charts - data labels for funnel / pyramid stages.
   * A label that does not fit inside its stage moves next to the stage (in
   * the text colour, with a leader line when it had to be shifted to avoid
   * its neighbours), instead of overflowing or being clipped.
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  const SVGNS$7 = 'http://www.w3.org/2000/svg';
  function textWidth$2(t) {
    try {
      if (typeof t.getComputedTextLength === 'function') {
        const l = t.getComputedTextLength();
        if (l > 0) return l;
      }
    } catch (e) {
      // detached / not rendered
    }
    const fs = parseFloat(t.getAttribute('font-size')) || 12;
    return (t.textContent || '').length * fs * 0.56;
  }
  function measure(t, str) {
    const keep = t.textContent;
    t.textContent = str;
    const l = textWidth$2(t);
    t.textContent = keep;
    return l;
  }

  /** split "Name  value" into two centred lines; returns the wider line width */
  function twoLines(t, st, fs) {
    const txt = t.textContent || '';
    const m = txt.match(/^(.*\S)\s+(\S+)$/);
    if (!m) return 0;
    const lw = Math.max(measure(t, m[1]), measure(t, m[2]));
    t.__wccOneLine = {
      txt,
      y: t.getAttribute('y'),
      db: t.getAttribute('dominant-baseline')
    };
    const x = t.getAttribute('x');
    t.textContent = '';
    [m[1], m[2]].forEach((part, k) => {
      const ts = document.createElementNS(SVGNS$7, 'tspan');
      ts.setAttribute('x', x);
      ts.setAttribute('dy', k === 0 ? '-0.6em' : '1.2em');
      if (k === 1) ts.setAttribute('font-weight', '500');
      ts.textContent = k === 0 ? part + ' ' : part;
      t.appendChild(ts);
    });
    t.setAttribute('y', st.top + st.height / 2);
    t.setAttribute('dominant-baseline', 'central');
    t.classList.add('wcc-label-stacked');
    return lw;
  }
  function oneLine(t) {
    const o = t.__wccOneLine;
    if (!o) return;
    t.textContent = o.txt;
    if (o.y != null) t.setAttribute('y', o.y);
    if (o.db) t.setAttribute('dominant-baseline', o.db);else t.removeAttribute('dominant-baseline');
    t.classList.remove('wcc-label-stacked');
    delete t.__wccOneLine;
  }
  function fitFunnelLabels(barCtx, elWrap, i) {
    const w = barCtx.w;
    const stages = barCtx.wccStages && barCtx.wccStages[i] || [];
    const tokens = tokensOf(w);
    const pad = 8;
    const outside = [];
    const groups = elWrap.node.querySelectorAll('[data-wcc-j]');
    groups.forEach(g => {
      const j = parseInt(g.getAttribute('data-wcc-j'), 10);
      const st = stages[j];
      const t = g.querySelector('text');
      if (!st || !t || !t.textContent) return;
      const fs = parseFloat(t.getAttribute('font-size')) || 12;
      const tw = textWidth$2(t);
      const avail = Math.min(st.wTop, st.wBottom) * 0.5 + Math.max(st.wTop, st.wBottom) * 0.5;
      const fitsW = tw + 2 * pad <= Math.min(avail, Math.max(st.wTop, st.wBottom));
      const fitsH = st.height >= fs + 4;
      let inside = fitsW && fitsH;
      // too wide on one line: stack name over value inside the stage, but
      // only with real room (line gap + breathing space above and below) and
      // measured against the narrower upper part of a tapering stage; a
      // cramped two-line block goes outside with a leader instead
      if (!inside && fitsH && st.height >= 2 * fs * 1.2 + 12) {
        const lw = twoLines(t, st);
        const narrow = Math.min(st.wTop, st.wBottom) + Math.abs(st.wBottom - st.wTop) * 0.25;
        if (lw && lw + 2 * pad <= Math.min(avail, narrow)) inside = true;else if (lw) oneLine(t);
      }
      if (inside) {
        // inside: pick white or dark ink by contrast with the stage fill,
        // unless the user chose label colours
        const user = ((barCtx.ctx._wccUserShape || {}).dataLabels || {}).style;
        if (!(user && user !== true && user.colors)) {
          const ink = inkOn(st.fill);
          if (ink) {
            t.setAttribute('fill', ink);
            t.style.fill = ink;
          }
        }
        return;
      }
      // rendered glyph box height (fonts and engines differ: Firefox reports
      // the full line box); the em estimate is the fallback
      let h = fs * 1.25;
      try {
        const bb = t.getBBox();
        if (bb && bb.height > 0) h = Math.max(h, bb.height);
      } catch (e) {
        // detached / not laid out
      }
      outside.push({
        g,
        t,
        st,
        tw,
        fs,
        h,
        y: st.top + st.height / 2
      });
    });
    if (!outside.length) return;

    // vertical spacing between outside labels
    outside.sort((a, b) => a.y - b.y);
    const gap = 3;
    for (let k = 1; k < outside.length; k++) {
      const prev = outside[k - 1];
      // spaced by the glyph boxes, not the em: 1 em let neighbours touch
      const minY = prev.y + (prev.h + outside[k].h) / 2 + gap;
      if (outside[k].y < minY) outside[k].y = minY;
    }
    const maxY = w.globals.gridHeight - outside[outside.length - 1].fs / 2;
    const over = outside[outside.length - 1].y - maxY;
    if (over > 0) outside.forEach(o => o.y -= over);
    outside.forEach(o => {
      const {
        st,
        t,
        g,
        tw
      } = o;
      // half width of the stage at the label row
      const halfAt = y => {
        const k = st.height > 0 ? (y - st.top) / st.height : 0.5;
        const kk = Math.max(0, Math.min(1, k));
        return (st.wTop + (st.wBottom - st.wTop) * kk) / 2;
      };
      const midY = st.top + st.height / 2;
      const edgeX = st.centre + halfAt(midY);
      let x = Math.max(edgeX, st.centre + Math.max(st.wTop, st.wBottom) / 2) + 12;
      let anchor = 'start';
      const xl = st.centre - Math.max(st.wTop, st.wBottom) / 2 - 12;
      if (x + tw > st.gridWidth) {
        // the roomier side wins; never let the label leave the plot
        const roomR = st.gridWidth - x;
        const roomL = xl;
        if (roomL >= tw || roomL > roomR) {
          x = Math.max(xl, Math.min(tw, xl + 12 - 4));
          anchor = 'end';
        } else {
          x = Math.min(x, Math.max(x - 12 + 4, st.gridWidth - tw));
        }
      }
      t.setAttribute('x', x);
      t.setAttribute('y', o.y);
      t.setAttribute('dominant-baseline', 'central');
      t.setAttribute('text-anchor', anchor);
      t.setAttribute('fill', tokens.text);
      t.style.fill = tokens.text;
      t.removeAttribute('filter');
      t.classList.add('wcc-label-outside');
      // leader line from the stage edge to the label
      const x0 = anchor === 'start' ? edgeX + 2 : st.centre - halfAt(midY) - 2;
      const x1 = anchor === 'start' ? x - 4 : x + 4;
      const line = document.createElementNS(SVGNS$7, 'path');
      line.setAttribute('d', `M ${x0} ${midY} L ${(x0 + x1) / 2} ${midY} L ${x1} ${o.y}`);
      line.setAttribute('fill', 'none');
      line.setAttribute('stroke', tokens.textMuted);
      line.setAttribute('stroke-opacity', '0.5');
      line.setAttribute('stroke-width', '1');
      line.setAttribute('class', 'wcc-label-leader');
      g.insertBefore(line, g.firstChild);
    });
  }

  /*
   * West Coast Charts - funnel (trapezoid) and pyramid stage geometry.
   *
   * Paths always have the same command structure (M + 4 x (L, Q) + Z), with
   * or without rounded corners, so svg.js can morph every stage smoothly
   * between data updates and from the collapsed enter state.
   *
   * Copyright (c) 2026 West Coast Software - MIT License
   */

  const f$1 = n => Math.round(n * 1000) / 1000;

  /**
   * Rounded polygon through 4 points (clockwise from top-left).
   * radius is clamped to half the shortest adjacent edge.
   */
  function roundedQuad(pts, radius) {
    const n = pts.length;
    const r = Math.max(0, radius || 0);
    const seg = (a, b) => Math.hypot(b.x - a.x, b.y - a.y);
    const toward = (a, b, d) => {
      const len = seg(a, b);
      if (len < 1e-9) return {
        x: a.x,
        y: a.y
      };
      const k = Math.min(d, len / 2) / len;
      return {
        x: a.x + (b.x - a.x) * k,
        y: a.y + (b.y - a.y) * k
      };
    };
    let d = '';
    for (let i = 0; i < n; i++) {
      const prev = pts[(i - 1 + n) % n];
      const cur = pts[i];
      const next = pts[(i + 1) % n];
      const p1 = toward(cur, prev, r);
      const p2 = toward(cur, next, r);
      d += (i === 0 ? `M ${f$1(p1.x)} ${f$1(p1.y)} ` : `L ${f$1(p1.x)} ${f$1(p1.y)} `) + `Q ${f$1(cur.x)} ${f$1(cur.y)} ${f$1(p2.x)} ${f$1(p2.y)} `;
    }
    return d + 'Z';
  }
  const absVal = v => typeof v === 'number' && isFinite(v) ? Math.abs(v) : 0;

  /**
   * Funnel stage j as a trapezoid. Widths in px are value * pxPerUnit.
   * The sloped sides follow the line between the top edges of consecutive
   * stages, so the silhouette stays straight also with gaps between stages.
   */
  function funnelTrapezoid({
    values,
    j,
    centre,
    pxPerUnit,
    top,
    height,
    rowHeight,
    lastShape
  }) {
    const wTop = absVal(values[j]) * pxPerUnit;
    let wNextTop;
    if (j < values.length - 1) {
      wNextTop = absVal(values[j + 1]) * pxPerUnit;
    } else {
      wNextTop = lastShape === 'taper' ? 0 : wTop;
    }
    const k = j < values.length - 1 && rowHeight > 0 ? height / rowHeight : 1;
    const wBottom = wTop + (wNextTop - wTop) * Math.min(1, k);
    return {
      points: [{
        x: centre - wTop / 2,
        y: top
      }, {
        x: centre + wTop / 2,
        y: top
      }, {
        x: centre + wBottom / 2,
        y: top + height
      }, {
        x: centre - wBottom / 2,
        y: top + height
      }],
      wTop,
      wBottom
    };
  }

  /**
   * Pyramid stage j: one continuous triangle (apex top centre, base = full
   * width); every stage owns a vertical share proportional to its value.
   */
  function pyramidStage({
    values,
    j,
    width,
    height
  }) {
    const vals = values.map(absVal);
    const total = vals.reduce((a, b) => a + b, 0);
    let before = 0;
    for (let k = 0; k < j; k++) before += vals[k];
    const y0 = total > 0 ? before / total * height : 0;
    const y1 = total > 0 ? (before + vals[j]) / total * height : 0;
    const cx = width / 2;
    const half = y => height > 0 ? y / height * (width / 2) : 0;
    return {
      points: [{
        x: cx - half(y0),
        y: y0
      }, {
        x: cx + half(y0),
        y: y0
      }, {
        x: cx + half(y1),
        y: y1
      }, {
        x: cx - half(y1),
        y: y1
      }],
      top: y0,
      height: y1 - y0,
      widthMid: half((y0 + y1) / 2) * 2
    };
  }

  /** collapsed enter state: the same quad squeezed onto its centre line */
  function collapsed(points, centre) {
    return points.map(p => ({
      x: centre,
      y: p.y
    }));
  }

  /*
   * West Coast Charts - trapezoid funnel and pyramid stage paths for the core
   * bar renderer (plotOptions.funnel.shape, chart.type 'pyramid'). Ships with
   * west-coast-charts/types (types/base.js slot `funnelShapePath`); a core-only
   * chart keeps the 4.7.0 rectangle funnel and logs a one-time hint.
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  function drawFunnelShapePath(bar, {
    mode,
    i,
    j,
    realIndex,
    zeroW,
    y,
    barYPosition,
    barHeight,
    yDivision,
    elSeries
  }) {
    const w = bar.w;
    const values = bar.series[i];
    const radius = parseFloat(w.config.plotOptions.bar.borderRadius) || 0;
    let shape;
    let centre;
    let top = barYPosition;
    let height = barHeight;
    if (mode === 'pyramid') {
      const st = pyramidStage({
        values,
        j,
        width: w.globals.gridWidth,
        height: w.globals.gridHeight
      });
      shape = st;
      centre = w.globals.gridWidth / 2;
      top = st.top;
      height = st.height;
    } else {
      centre = zeroW;
      shape = funnelTrapezoid({
        values,
        j,
        centre,
        pxPerUnit: 1 / bar.invertedYRatio,
        top: barYPosition,
        height: barHeight,
        rowHeight: yDivision,
        lastShape: w.config.plotOptions.funnel.lastShape
      });
    }
    const pathTo = roundedQuad(shape.points, radius);
    let pathFrom = roundedQuad(collapsed(shape.points, centre), 0);
    if (w.globals.previousPaths.length > 0) {
      const prev = bar.getPreviousPath(realIndex, j, false);
      // morph from the previous stage when it has the same structure
      if (prev && prev.split('Q').length === pathTo.split('Q').length) {
        pathFrom = prev;
      }
    }

    // the data labels code centres labels on (x - barWidth / 2, bcy):
    // hand it coordinates that land on the stage centre
    const valuePx = Math.abs(values[j] || 0) / bar.invertedYRatio;
    const vI = bar.visibleI;
    let nextY = !w.globals.isXNumeric ? y + yDivision : y;
    let labelRowY = nextY;
    if (mode === 'pyramid') {
      labelRowY = top + height / 2 - barHeight / 2 - barHeight * vI + yDivision;
    }
    bar.barHelpers.barBackground({
      j,
      i,
      y1: barYPosition - barHeight * vI,
      y2: barHeight * bar.seriesLen,
      elSeries
    });
    return {
      pathTo,
      pathFrom,
      x1: centre - valuePx / 2,
      x: centre + valuePx / 2,
      y: mode === 'pyramid' ? labelRowY : nextY,
      nextY,
      goalX: [],
      barYPosition: mode === 'pyramid' ? top : barYPosition,
      barHeight,
      stage: {
        centre,
        top,
        height,
        wTop: Math.abs(shape.points[1].x - shape.points[0].x),
        wBottom: Math.abs(shape.points[2].x - shape.points[3].x),
        gridWidth: w.globals.gridWidth
      }
    };
  }

  /*
   * West Coast Charts - the optional theme presets (midnight, paper,
   * accessible) and the colour-vision palettes (theme.accessibility.
   * colorBlindMode). Not part of the core bundle (docs/architecture/
   * size-ledger.md): west-coast-charts/types installs them, or the light
   * side-effect entry west-coast-charts/types/themes. Without them the core
   * falls back to coastal / the normal palette and logs a one-time hint.
   * Copyright (c) 2026 West Coast Software - MIT License
   */

  // built on install: the core bindings (PRESETS, SANS, ...) arrive with
  // WestCoastCharts.use() in the plugin bundles (plugins/bridge.js)
  function extras() {
    const EXTRA = {
      // "Midnight": editorial, dark-first, warm gold accent; compact density.
      midnight: {
        label: 'Midnight',
        light: {
          fontFamily: '"IBM Plex Sans", ' + _0$3,
          fontSize: '11px',
          text: '#1b1d22',
          textMuted: '#62666f',
          surface: '#fbfaf7',
          background: '#fbfaf7',
          grid: '#ebe8e1',
          axis: '#d3cfc6',
          track: '#efece6',
          accent: '#9a6b00',
          focusRing: '#9a6b00',
          tooltipBg: 'rgba(251, 250, 247, 0.98)',
          tooltipText: '#1b1d22',
          tooltipBorder: '#e2ded4',
          tooltipShadow: '0 10px 28px -10px rgba(27, 29, 34, .22), 0 1px 3px rgba(27, 29, 34, .08)',
          radius: '6px',
          radiusSm: '4px',
          barRadius: '2',
          lineWidth: '2',
          gridDash: '0',
          ..._2$2,
          palette: ['#9a6b00', '#1f6fa8', '#c2413b', '#3d7a6a', '#6d4bc2', '#b45309', '#4d7c0f', '#374151']
        },
        dark: {
          fontFamily: '"IBM Plex Sans", ' + _0$3,
          fontSize: '11px',
          text: '#ece8df',
          textMuted: '#a29d92',
          surface: '#121317',
          background: '#121317',
          grid: '#22242b',
          axis: '#3a3d46',
          track: '#1d1f25',
          accent: '#e9c46a',
          focusRing: '#f3d98b',
          tooltipBg: 'rgba(24, 25, 31, 0.97)',
          tooltipText: '#ece8df',
          tooltipBorder: '#2e3038',
          tooltipShadow: '0 18px 44px -12px rgba(0, 0, 0, .7), 0 1px 4px rgba(0, 0, 0, .4)',
          radius: '6px',
          radiusSm: '4px',
          barRadius: '2',
          lineWidth: '2',
          gridDash: '0',
          ..._2$2,
          palette: ['#e9c46a', '#5fa8d3', '#f28482', '#84a59d', '#b8a1e3', '#f6bd60', '#90be6d', '#dee2e6']
        }
      },
      // "Paper": quiet, print-like reporting style; dashed grid, ink palette.
      paper: {
        label: 'Paper',
        light: {
          fontFamily: '"DM Sans", ' + _0$3,
          fontSize: '12px',
          text: '#1c1c1c',
          textMuted: '#5f5f5f',
          surface: '#ffffff',
          background: '#ffffff',
          grid: '#dcdcdc',
          axis: '#9a9a9a',
          track: '#f0f0f0',
          accent: '#1d3557',
          focusRing: '#1d3557',
          tooltipBg: 'rgba(255, 255, 255, 1)',
          tooltipText: '#1c1c1c',
          tooltipBorder: '#1c1c1c',
          tooltipShadow: '3px 3px 0 rgba(28, 28, 28, .12)',
          radius: '2px',
          radiusSm: '2px',
          barRadius: '0',
          lineWidth: '2',
          gridDash: '3',
          motionDuration: '450',
          motionEasing: 'easeOutQuad',
          palette: ['#1d3557', '#c1121f', '#457b9d', '#2a7d6f', '#7a4f8f', '#5c636a', '#a0522d', '#264653']
        },
        dark: {
          fontFamily: '"DM Sans", ' + _0$3,
          fontSize: '12px',
          text: '#ededed',
          textMuted: '#a8a8a8',
          surface: '#171717',
          background: '#171717',
          grid: '#333333',
          axis: '#6b6b6b',
          track: '#262626',
          accent: '#a8c5e6',
          focusRing: '#dbe7f5',
          tooltipBg: 'rgba(23, 23, 23, 1)',
          tooltipText: '#ededed',
          tooltipBorder: '#ededed',
          tooltipShadow: '3px 3px 0 rgba(0, 0, 0, .5)',
          radius: '2px',
          radiusSm: '2px',
          barRadius: '0',
          lineWidth: '2',
          gridDash: '3',
          motionDuration: '450',
          motionEasing: 'easeOutQuad',
          palette: ['#8fb3de', '#ff6b6b', '#7fc8f8', '#5fd3bc', '#c49be0', '#c9ced3', '#f4a261', '#9ad1c4']
        }
      },
      // High-contrast, colour-vision-deficiency aware palette (Okabe-Ito based).
      accessible: {
        label: 'Accessible',
        light: null,
        // built below from coastal
        dark: null
      }
    };
    EXTRA.accessible.light = {
      ..._3$1.coastal.light,
      text: '#000000',
      textMuted: '#3d4450',
      axis: '#6b7280',
      grid: '#d5dae1',
      focusRing: '#000000',
      tooltipBorder: '#6b7280',
      lineWidth: '3',
      palette: ['#0072b2', '#d55e00', '#009e73', '#cc79a7', '#7a5c00', '#1f78b4', '#000000', '#8e6a00']
    };
    EXTRA.accessible.dark = {
      ..._3$1.coastal.dark,
      text: '#ffffff',
      textMuted: '#c8d0dc',
      axis: '#94a3b8',
      grid: '#334155',
      focusRing: '#ffffff',
      tooltipBorder: '#94a3b8',
      lineWidth: '3',
      palette: ['#56b4e9', '#e69f00', '#2ee6a6', '#f0a6ca', '#f0e442', '#9ecae1', '#ffffff', '#ff8c5a']
    };
    return EXTRA;
  }

  /*
   * Colour-vision palettes. Our own colours: deuteranopia/protanopia derive
   * from the Wong (2011) family, tritanopia from the IBM colour-blind-safe
   * family, both re-tuned so that every colour has >= 3:1 contrast on the
   * light and dark surfaces and the first six stay >= 15 dE apart under a
   * simulated deficiency (Machado 2009) - see tests/unit/a11y-colour.spec.js.
   */
  const CVD = {
    deuteranopia: {
      light: ['#0072b2', '#c2410c', '#159369', '#6b245f', '#d36aa8', '#12127d', '#74391b'],
      dark: ['#56b4e9', '#e69f00', '#e75a89', '#d1dd98', '#9970eb', '#2de1c3', '#f0e442']
    },
    protanopia: {
      light: ['#0072b2', '#c2410c', '#159369', '#6b245f', '#d36aa8', '#12127d', '#74391b'],
      dark: ['#56b4e9', '#e69f00', '#e75a89', '#d1dd98', '#9970eb', '#2de1c3', '#f0e442']
    },
    tritanopia: {
      light: ['#0072b2', '#d61f3d', '#a83bd1', '#6b5f24', '#12127d', '#c7792b'],
      dark: ['#56b4e9', '#e1c32d', '#e75a71', '#9970eb', '#afdd98', '#b87a3d']
    },
    highContrast: {
      light: ['#0000cc', '#127d12', '#d61f3d', '#306191', '#b22a9b', '#936915'],
      dark: ['#66b3ff', '#2de12d', '#e49444', '#2de1c3', '#ee87ba', '#e1e12d']
    }
  };

  /** add the extra presets and palettes to the core registries (idempotent) */
  function installThemeExtras() {
    const EXTRA = extras();
    Object.keys(EXTRA).forEach(k => {
      if (!_3$1[k]) _3$1[k] = EXTRA[k];
    });
    Object.keys(CVD).forEach(k => {
      if (!_21[k]) _21[k] = CVD[k];
    });
  }

  /*
   * West Coast Charts - M4 decimation kernel (wcc.performance.decimate).
   * Installed into the core's 'decimate' filter by west-coast-charts/types
   * or west-coast-charts/types/decimate; see modules/perf/Decimate.js.
   * Copyright (c) 2026 West Coast Software - MIT License
   */

  /**
   * @param {number} n          number of points
   * @param {(j:number)=>number} xAt  pixel x of point j
   * @param {(j:number)=>number} vAt  value (or pixel y) of point j
   * @param {number} [cols=1]   pixel columns per bucket (1 = one device pixel)
   * @returns {Uint8Array|null} keep[j] = 1 for points to draw; null when no gain
   */
  function m4Keep(n, xAt, vAt, cols = 1) {
    if (n < 4) return null;
    const keep = new Uint8Array(n);
    let bucket = NaN;
    let first = 0;
    let last = 0;
    let min = 0;
    let max = 0;
    let minV = Infinity;
    let maxV = -Infinity;
    let kept = 0;
    const flush = () => {
      if (!keep[first]) keep[first] = 1, kept++;
      if (!keep[min]) keep[min] = 1, kept++;
      if (!keep[max]) keep[max] = 1, kept++;
      if (!keep[last]) keep[last] = 1, kept++;
    };
    for (let j = 0; j < n; j++) {
      const b = Math.floor(xAt(j) / cols);
      const v = vAt(j);
      if (b !== bucket) {
        if (j > 0) flush();
        bucket = b;
        first = last = min = max = j;
        minV = maxV = v;
      } else {
        last = j;
        if (v < minV) minV = v, min = j;
        if (v > maxV) maxV = v, max = j;
      }
    }
    flush();
    return kept < n * 0.8 ? keep : null;
  }

  /** register the kernel with a plugin hook (a second registration is a no-op) */
  function installDecimation(hook) {
    hook.on('decimate', (ctx, keep, n, xAt, vAt, cols) => keep || m4Keep(n, xAt, vAt, cols));
  }

  var css_248z = "/* West Coast Charts: chart types (gauge, funnel, waterfall, ...) */\n.wcc-sr-table {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  white-space: nowrap;\n  border: 0;\n}\n\n.wcc-num,\n.wcc-gauge text,\n.wcc-type text {\n  font-variant-numeric: tabular-nums;\n  font-feature-settings: 'tnum' 1;\n}\n\n.wcc-gauge:focus,\n.wcc-type [tabindex]:focus {\n  outline: none;\n}\n\n.wcc-gauge:focus-visible,\n.wcc-type [tabindex]:focus-visible {\n  outline: 2px solid var(--wcc-focus-ring, #2563eb);\n  outline-offset: 3px;\n  border-radius: 4px;\n}\n\n.wcc-gauge-ticks,\n.wcc-gauge-needle {\n  pointer-events: none;\n}\n\n.wcc-type path[tabindex]:focus-visible,\n.wcc-type circle[tabindex]:focus-visible {\n  outline: none;\n  stroke: var(--wcc-focus-ring, #2563eb);\n  stroke-width: 2px;\n  paint-order: stroke;\n}\n\n.wcc-label-leader {\n  pointer-events: none;\n}\n\n/* type tooltips */\n.wcc-tt {\n  min-width: 140px;\n  font-variant-numeric: tabular-nums;\n}\n.wcc-tt-title {\n  font-weight: 600;\n}\n.wcc-tt-body {\n  padding: 6px 10px 7px;\n}\n.wcc-tt-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  line-height: 1.55;\n  white-space: nowrap;\n}\n.wcc-tt-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex: none;\n}\n.wcc-tt-dot-none {\n  background: transparent;\n}\n.wcc-tt-name {\n  flex: 1 1 auto;\n  opacity: 0.8;\n}\n.wcc-tt-value {\n  font-weight: 600;\n  margin-left: 12px;\n}\n.wcc-tt-muted {\n  opacity: 0.72;\n}\n.wcc-tt-muted .wcc-tt-value {\n  font-weight: 500;\n}\n\n/* partition charts (sunburst, icicle) */\n.wcc-partition .wcc-cell {\n  transition: opacity 0.16s ease-out;\n}\n.wcc-partition.wcc-hovering .wcc-cell:not(.wcc-on) {\n  opacity: 0.38;\n}\n.wcc-partition .wcc-cell[data-key] {\n  cursor: pointer;\n}\n.wcc-crumbs .wcc-crumb:hover {\n  text-decoration: underline;\n}\n.wcc-crumbs .wcc-crumb:focus-visible {\n  outline: 2px solid var(--wcc-focus-ring, #2563eb);\n  outline-offset: 1px;\n}\n.wcc-partition-chart > .apexcharts-tooltip,\n.wcc-partition-chart .apexcharts-xaxistooltip,\n.wcc-partition-chart .apexcharts-yaxistooltip {\n  display: none !important;\n}\n\n/* streamgraph: hover fades the other bands */\n.wcc-stream .apexcharts-series { transition: opacity 0.18s ease; }\n@media (prefers-reduced-motion: reduce) { .wcc-stream .apexcharts-series { transition: none; } }\n.wcc-stream-label { font-variant-numeric: tabular-nums; letter-spacing: -0.005em; }\n\n/* unit / waffle */\n.wcc-unit .wcc-unit-mark { transition: opacity 0.16s ease; cursor: default; }\n.wcc-unit.wcc-hovering .wcc-unit-mark { transition: opacity 0.16s ease; }\n@media (prefers-reduced-motion: reduce) { .wcc-unit .wcc-unit-mark { transition: none; } }\n.wcc-unit-label, .wcc-unit-total { font-variant-numeric: tabular-nums; }\n.wcc-unit-hull { stroke: none; }\n.wcc-unit-hull.wcc-focus, .wcc-unit-hull[data-wcc-focus] { stroke: currentColor; stroke-width: 2; }\n\n/* nested treemap */\n.wcc-ntreemap .wcc-cell { transition: opacity 0.16s ease-out, filter 0.16s ease-out; }\n.wcc-ntreemap.wcc-hovering .wcc-cell.wcc-tm-leaf:not(.wcc-on) { opacity: 0.5; }\n.wcc-ntreemap.wcc-hovering .wcc-cell.wcc-tm-parent:not(.wcc-on) { opacity: 0.7; }\n.wcc-ntreemap.wcc-hovering:not(.wcc-ntreemap-nohover) .wcc-cell.wcc-tm-parent.wcc-on {\n  stroke: var(--wcc-tm-hover, currentColor);\n  stroke-width: var(--wcc-tm-hover-w, 1.5px);\n  stroke-opacity: 0.55;\n}\n.wcc-ntreemap .wcc-tm-header-name, .wcc-ntreemap .wcc-tm-label text { letter-spacing: -0.005em; }\n@media (prefers-reduced-motion: reduce) { .wcc-ntreemap .wcc-cell { transition: none; } }\n.wcc-beeswarm-dot { transition: none; }\n.wcc-beeswarm-dot.wcc-beeswarm-hot { stroke: currentColor; stroke-width: 2; fill-opacity: 1; }\n.wcc-slope .apexcharts-series { transition: opacity 0.18s ease; }\n.wcc-slope-label, .wcc-slope-periods { font-variant-numeric: tabular-nums; }\n.wcc-slope-label { transition: opacity 0.18s ease; }\n@media (prefers-reduced-motion: reduce) { .wcc-slope .apexcharts-series, .wcc-slope-label { transition: none; } }\n\n/* heatmap shapes: row grid lines would run through the shapes */\n.wcc-heat-shaped .apexcharts-gridlines-horizontal,\n.wcc-heat-shaped .apexcharts-gridlines-vertical {\n  display: none;\n}\n.wcc-heat-shape .apexcharts-heatmap-rect {\n  transition: filter 0.15s ease;\n}\n.wcc-heat-shape .apexcharts-heatmap-rect.wcc-cal-out {\n  visibility: hidden;\n  pointer-events: none;\n}\n\n/* bar race: the race draws (and moves) the category names itself; the core\n   labels only reserve their room */\n.wcc-race-chart .apexcharts-yaxis-texts-g .apexcharts-yaxis-label {\n  visibility: hidden;\n}\n.wcc-race-chart .wcc-race text {\n  font-family: inherit;\n}\n\n/* empty WCC charts: the placeholder only, no fake axis */\n.wcc-no-data .apexcharts-xaxis,\n.wcc-no-data .apexcharts-yaxis,\n.wcc-no-data .apexcharts-grid,\n.wcc-no-data .apexcharts-grid-borders,\n.wcc-no-data .apexcharts-xaxis-tick,\n.wcc-no-data .apexcharts-yaxis-title,\n.wcc-no-data .apexcharts-xaxis-title,\n.wcc-no-data .apexcharts-legend {\n  display: none;\n}\n";
  var css = css_248z;

  /*
   * West Coast Charts - the machinery shared by all optional chart types
   * (presets, option defaults, series transforms, number formats, a11y, CSS).
   * Installed once, by the first type plugin that is used; the core reaches
   * it through src/plugins/types.js. See docs/architecture/plugins.md.
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  const base = {
    normalizeType,
    mergeLayer,
    optionDefaults: typeOptionDefaults,
    transformSeries,
    applyAxis: applyHistogramAxis,
    yLabel: typeYLabel,
    thinTicks: thinValueTicks,
    annotate: annotatePoints,
    // core option code that ships with the types (docs/architecture/size-ledger.md)
    fitFunnelLabels,
    funnelShapePath: drawFunnelShapePath,
    // read by features through hook.core.typeBase() (trellis: shared histogram bins)
    binning
  };

  /** install the shared machinery (idempotent) */
  function installBase(WCC, hook) {
    bindCore(hook.core && hook.core.modules);
    markTypeDefaults();
    installThemeExtras();
    installDecimation(hook);
    hook.type({
      base,
      css
    });
  }

  /**
   * A plugin for some type definitions (src/types/defs/*):
   * def = { names, renderers?, decorators?, statics?(WCC) }
   */
  function typesPlugin(name, defs) {
    return {
      name,
      install(WCC, hook) {
        installBase(WCC, hook);
        defs.forEach(def => {
          hook.type(def);
          if (typeof def.statics === 'function') def.statics(WCC);
        });
      }
    };
  }

  /*
   * West Coast Charts - angle and arc geometry of the gauge renderer
   * (west-coast-charts/types). The value domain helpers the core radialBar
   * needs stay in modules/types/GaugeMath.js.
   * Copyright (c) 2026 West Coast Software - MIT License
   */

  const num$1 = (v, d) => {
    const n = typeof v === 'string' ? parseFloat(v) : v;
    return typeof n === 'number' && isFinite(n) ? n : d;
  };

  /** number of decimals a value is written with (for tweened labels) */
  function decimalsOf(v) {
    const n = num$1(v, 0);
    if (Math.floor(n) === n) return 0;
    const s = String(n);
    const i = s.indexOf('.');
    return i === -1 ? 0 : Math.min(s.length - i - 1, 4);
  }

  /** Point on a circle. Angle in degrees, 0 = 12 o'clock, clockwise. */
  function polar(cx, cy, r, deg) {
    const a = (deg - 90) * Math.PI / 180;
    return {
      x: cx + r * Math.cos(a),
      y: cy + r * Math.sin(a)
    };
  }

  /** SVG arc path (stroke) from angle a0 to a1 on radius r */
  function arcPath(cx, cy, r, a0, a1) {
    if (!(r > 0)) return '';
    let sweep = a1 - a0;
    if (Math.abs(sweep) < 1e-4) {
      const p = polar(cx, cy, r, a0);
      return `M ${f(p.x)} ${f(p.y)}`;
    }
    if (Math.abs(sweep) >= 360) {
      // full ring: two half arcs (a single 360 deg arc does not render)
      const p0 = polar(cx, cy, r, a0);
      const p1 = polar(cx, cy, r, a0 + 180);
      return `M ${f(p0.x)} ${f(p0.y)} A ${f(r)} ${f(r)} 0 1 1 ${f(p1.x)} ${f(p1.y)} ` + `A ${f(r)} ${f(r)} 0 1 1 ${f(p0.x)} ${f(p0.y)}`;
    }
    const p0 = polar(cx, cy, r, a0);
    const p1 = polar(cx, cy, r, a1);
    const large = Math.abs(sweep) > 180 ? 1 : 0;
    const dir = sweep > 0 ? 1 : 0;
    return `M ${f(p0.x)} ${f(p0.y)} A ${f(r)} ${f(r)} 0 ${large} ${dir} ${f(p1.x)} ${f(p1.y)}`;
  }
  function f(n) {
    return Math.round(n * 100) / 100;
  }

  /*
   * West Coast Charts - gauge renderer (chart.type: 'gauge', or a radialBar
   * using gauge features: shape 'needle', bands, ticks).
   *
   * Own geometry and motion (not derived from any ApexCharts code):
   * - partial arcs are fitted and centred into the plot area from the
   *   bounding box of the swept ring (+ ticks, labels, needle hub)
   * - value arc, needle and value label are driven by one value tween, so
   *   updateSeries morphs from the value currently on screen (also when an
   *   update interrupts a running animation)
   * - bands keep exact pixel gaps along the arc, independent of the domain
   * - role="meter" + aria values, keyboard focus, screen-reader data table
   *
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  const pct$3 = (v, d) => {
    const n = parseFloat(v);
    return isFinite(n) ? n / 100 : d;
  };
  const px = (v, d) => {
    const n = parseFloat(v);
    return isFinite(n) ? n : d;
  };
  const finite$6 = v => typeof v === 'number' && isFinite(v);
  const SVGNS$6 = 'http://www.w3.org/2000/svg';
  const el$4 = (name, attrs) => {
    const n = document.createElementNS(SVGNS$6, name);
    Object.keys(attrs || {}).forEach(k => attrs[k] !== undefined && n.setAttribute(k, attrs[k]));
    return n;
  };
  const textWidthPx = (s, size, weight = 400) => String(s).length * size * (weight >= 600 ? 0.6 : 0.56);

  /**
   * value text with a unit suffix ('72%', '1.2 GB') set smaller on the same
   * baseline, so the number carries the weight; textContent stays '72%'
   */
  const setValueText = (node, str) => {
    const m = /^(.*\d)(\s?(?:%|[A-Za-z]{1,4}))$/.exec(str);
    const cache = node.__wccVal;
    if (cache && cache.str === str) return;
    if (!m) {
      node.textContent = str;
      node.__wccVal = {
        str
      };
      return;
    }
    let num = node.__wccNum;
    let unit = node.__wccUnit;
    if (!num || num.parentNode !== node) {
      node.textContent = '';
      num = node.__wccNum = el$4('tspan', {
        class: 'wcc-gauge-num'
      });
      unit = node.__wccUnit = el$4('tspan', {
        class: 'wcc-gauge-unit',
        'font-size': '0.58em',
        'font-weight': 500,
        dx: '0.06em'
      });
      node.appendChild(num);
      node.appendChild(unit);
    }
    num.textContent = m[1];
    unit.textContent = m[2];
    unit.setAttribute('dx', /^\s/.test(m[2]) ? '0' : '0.06em');
    node.__wccVal = {
      str
    };
  };
  class Gauge {
    constructor(ctx) {
      this.ctx = ctx;
      this.w = ctx.w;
    }

    /** gauge renderer is used for type 'gauge' and gauge-only features */
    static uses(w) {
      return _2$1(w);
    }
    draw(series) {
      const w = this.w;
      const graphics = new _0$4(this.ctx);
      const ret = graphics.group({
        class: 'apexcharts-radialbar wcc-gauge'
      });
      if (w.globals.noData) return ret;
      const rb = w.config.plotOptions.radialBar;
      const tokens = tokensOf(w);
      const domain = _0$2(rb);
      this.domain = domain;
      const values = (Array.isArray(series) ? series : []).map(v => finite$6(v) ? v : null);
      const n = Math.max(values.length, 1);
      const isNeedle = rb.shape === 'needle';

      // ---- angles -----------------------------------------------------------
      let a0 = px(rb.startAngle, 0);
      let a1 = px(rb.endAngle, 360);
      if (a0 === a1) a1 = a0 + 360;
      const full = Math.abs(a1 - a0) >= 360;
      if (full) a1 = a0 + (a1 > a0 ? 360 : -360);
      const angleAt = r => a0 + (a1 - a0) * r;
      this.angleAt = angleAt;

      // ---- sizing -----------------------------------------------------------
      const W = w.globals.gridWidth;
      const H = w.globals.gridHeight;
      const hollowSize = pct$3(rb.hollow.size, 0.74);
      const margin = px(rb.track.margin, 0);
      const ticks = rb.ticks || {};
      const showTicks = !!ticks.show;
      const major = ticks.major || {};
      const minor = ticks.minor || {};
      const tl = ticks.labels || {};
      const tickOutside = (major.placement || 'outside') !== 'inside';
      // 'center': ticks straddle the ring's mid line, labels stay outside
      const tickCenter = major.placement === 'center';
      const tickGap = 3;
      const tickLen = showTicks ? px(major.length, 10) : 0;
      const tickFont = px(tl.fontSize, 11);
      const tickLabels = showTicks && tl.show !== false;
      const majorCount = Math.max(2, Math.round(px(major.count, 11)));
      const tickValues = [];
      for (let k = 0; k < majorCount; k++) {
        tickValues.push(domain.value(k / (majorCount - 1)));
      }
      const tickFormatter = typeof tl.formatter === 'function' ? tl.formatter : _1$1;
      const tickTexts = tickValues.map(v => String(tickFormatter(v)));
      const maxTickChars = tickTexts.reduce((m, t) => Math.max(m, t.length), 0);
      const tickLabelW = maxTickChars * tickFont * 0.58;
      const outsideExtra = showTicks && tickOutside ? tickGap + (tickCenter ? 0 : tickLen) + (tickLabels ? px(tl.offset, 6) + Math.max(tickLabelW, tickFont) : 0) : 0;
      const pad = w.config.chart.sparkline.enabled ? 0 : 4;
      const dl = rb.dataLabels;
      const valueShow = dl.show && dl.value.show;
      const needleCfg = rb.needle || {};
      const baseWidth = Math.max(px(needleCfg.baseWidth, 8), 1);
      const hubR = isNeedle ? Math.max(baseWidth * 0.95, 5) : 0;

      // fit: bounding box of everything drawn, as a function of the radius
      // (ticks/labels/hub are fixed px, the ring scales), solved iteratively
      const thickFrac = (1 - hollowSize) / (n + 1);
      const capPad = w.config.stroke.lineCap === 'round' && !full ? 0.5 : 0;
      const sweepLo = Math.min(a0, a1);
      const sweepHi = Math.max(a0, a1);
      const bbox = R => {
        const pts = [];
        const t = R * thickFrac;
        const outerR = R + outsideExtra;
        const innerR = Math.max(0, R - t * n - margin * (n - 1));
        const step = 3;
        for (let a = sweepLo; a <= sweepHi + 1e-6; a += step) {
          pts.push(polar(0, 0, outerR, a));
          if (!full) pts.push(polar(0, 0, innerR, a));
        }
        pts.push(polar(0, 0, outerR, sweepHi));
        if (capPad) {
          [sweepLo, sweepHi].forEach(a => {
            const c = polar(0, 0, R - t / 2, a);
            const h = t / 2;
            pts.push({
              x: c.x - h,
              y: c.y
            }, {
              x: c.x + h,
              y: c.y
            });
            pts.push({
              x: c.x,
              y: c.y - h
            }, {
              x: c.x,
              y: c.y + h
            });
          });
        }
        if (!full) {
          const oy = isNeedle ? px(needleCfg.offsetY, 0) : 0;
          pts.push({
            x: -hubR,
            y: oy - hubR
          }, {
            x: hubR,
            y: oy + hubR
          });
          if (isNeedle && valueShow) {
            pts.push({
              x: 0,
              y: oy + hubR + 8 + 1.25 * this.valueFontGuess(R)
            });
          } else pts.push({
            x: 0,
            y: 2
          });
        }
        let x0 = Infinity;
        let y0 = Infinity;
        let x1 = -Infinity;
        let y1 = -Infinity;
        pts.forEach(p => {
          x0 = Math.min(x0, p.x);
          y0 = Math.min(y0, p.y);
          x1 = Math.max(x1, p.x);
          y1 = Math.max(y1, p.y);
        });
        return {
          x0,
          y0,
          x1,
          y1,
          w: x1 - x0,
          h: y1 - y0
        };
      };
      const availW = Math.max(W - 2 * pad, 10);
      const availH = Math.max(H - 2 * pad, 10);
      // bbox width/height are ~linear in R (a * R + fixed px): solve with
      // two probes, then guard against overflow
      const solve = (avail, key) => {
        const b1 = bbox(100)[key];
        const b2 = bbox(200)[key];
        const slope = (b2 - b1) / 100;
        const fixed = b1 - slope * 100;
        return slope > 0 ? (avail - fixed) / slope : Infinity;
      };
      let R = Math.max(8, Math.min(solve(availW, 'w'), solve(availH, 'h')));
      let bb = bbox(R);
      while ((bb.w > availW + 0.5 || bb.h > availH + 0.5) && R > 8) {
        R *= 0.985;
        bb = bbox(R);
      }
      const contentH = bb.h;
      const cx = (W - bb.w) / 2 - bb.x0;
      const cy = Math.max(pad, (H - contentH) / 2) - bb.y0;
      w.globals.wccGaugeHeight = Math.ceil(contentH + 2 * pad);
      // radialBar code paths (resizeNonAxisCharts) read radialSize
      w.globals.radialSize = R;
      const t = R * thickFrac;
      const strokeWidthOf = i => Math.max(t, 1);
      const ringR = i => R - t / 2 - i * (t + margin);
      const lastInner = ringR(n - 1) - t / 2;
      this.geom = {
        cx,
        cy,
        R,
        t,
        a0,
        a1,
        full
      };
      (this.ctx._wccGauge || (this.ctx._wccGauge = {
        shown: []
      })).geom = this.geom;

      // ---- layers -----------------------------------------------------------
      const elTracks = graphics.group({
        class: 'apexcharts-tracks'
      });
      const elBands = graphics.group({
        class: 'wcc-gauge-bands'
      });
      const elArcs = graphics.group({
        class: 'wcc-gauge-values'
      });
      const elTicks = graphics.group({
        class: 'wcc-gauge-ticks'
      });
      const elNeedle = graphics.group({
        class: 'wcc-gauge-needle'
      });
      const elLabels = graphics.group({
        class: 'apexcharts-datalabels-group'
      });

      // hollow (behind everything)
      const hollowR = lastInner - px(rb.hollow.margin, 0);
      if (hollowR > 0) {
        const hb = rb.hollow.background;
        if (hb && hb !== 'transparent' || rb.hollow.stroke) {
          const c = graphics.drawCircle(hollowR * 2);
          c.attr({
            class: 'apexcharts-radialbar-hollow',
            cx: f(cx),
            cy: f(cy),
            r: f(hollowR),
            fill: hb || 'transparent'
          });
          if (rb.hollow.stroke) {
            c.attr({
              stroke: rb.hollow.stroke,
              'stroke-width': px(rb.hollow.strokeWidth, 1)
            });
            if (rb.hollow.strokeDasharray !== undefined) {
              c.attr('stroke-dasharray', String(rb.hollow.strokeDasharray));
            }
          }
          if (rb.hollow.dropShadow && rb.hollow.dropShadow.enabled) {
            new _0$5(this.ctx).dropShadow(c, rb.hollow.dropShadow);
          }
          ret.add(c);
        }
      }

      // tracks
      const bands = (Array.isArray(rb.bands) ? rb.bands : []).filter(bd => bd && finite$6(+bd.from) && finite$6(+bd.to));
      const bs = rb.bandsStyle || {};
      const hideTrack = bands.length > 0 && bs.hideTrackWhenPresent;
      if (rb.track.show && !hideTrack) {
        for (let i = 0; i < n; i++) {
          const bg = Array.isArray(rb.track.background) ? rb.track.background[i] : rb.track.background;
          const tw = strokeWidthOf() * pct$3(rb.track.strokeWidth, 1) || 1;
          const p = graphics.drawPath({
            d: arcPath(cx, cy, ringR(i), a0, a1),
            stroke: bg || tokens.track,
            strokeWidth: tw,
            fill: 'none',
            strokeOpacity: rb.track.opacity,
            classes: 'apexcharts-radialbar-area apexcharts-radialbar-track'
          });
          p.attr('stroke-linecap', full ? 'butt' : bands.length ? bs.linecap || 'butt' : w.config.stroke.lineCap || 'butt');
          if (rb.track.dropShadow && rb.track.dropShadow.enabled) {
            new _0$5(this.ctx).dropShadow(p, rb.track.dropShadow);
          }
          elTracks.add(p);
        }
      }

      // bands (outermost ring)
      if (bands.length) {
        const bw = Math.max(t * pct$3(bs.strokeWidth, 0.4), 1);
        const br = bs.align === 'center' ? ringR(0) : R - bw / 2;
        const cap = bs.linecap || 'butt';
        const capPx = cap === 'butt' ? 0 : bw;
        const gapDeg = (px(bs.gap, 0) + capPx) / br * (180 / Math.PI);
        const lo = Math.min(domain.min, domain.max);
        const hi = Math.max(domain.min, domain.max);
        bands.forEach((bd, k) => {
          let r0 = domain.ratio(+bd.from);
          let r1 = domain.ratio(+bd.to);
          if (r1 < r0) [r0, r1] = [r1, r0];
          let s0 = angleAt(r0);
          let s1 = angleAt(r1);
          const dir = s1 >= s0 ? 1 : -1;
          const atLo = Math.min(+bd.from, +bd.to) <= lo;
          const atHi = Math.max(+bd.from, +bd.to) >= hi;
          const sweepAbs = Math.abs(a1 - a0);
          // inner joins get half a gap each; open domain ends get half a cap
          const capDeg = capPx / 2 / br * (180 / Math.PI);
          const startInset = atLo ? full ? gapDeg / 2 : capDeg : gapDeg / 2;
          const endInset = atHi ? full ? gapDeg / 2 : capDeg : gapDeg / 2;
          const useInsets = bands.length > 1 || capPx > 0;
          if (useInsets && sweepAbs > 0) {
            s0 += dir * startInset;
            s1 -= dir * endInset;
          }
          if ((s1 - s0) * dir <= 0.05) return;
          const p = graphics.drawPath({
            d: arcPath(cx, cy, br, s0, s1),
            stroke: bd.color || w.globals.colors[k % w.globals.colors.length],
            strokeWidth: bw,
            fill: 'none',
            classes: 'wcc-gauge-band'
          });
          p.attr('stroke-linecap', cap);
          p.attr({
            'data-from': bd.from,
            'data-to': bd.to
          });
          if (bd.label) {
            const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
            title.textContent = `${bd.label}: ${_1$1(bd.from)} – ${_1$1(bd.to)}`;
            p.node.appendChild(title);
          }
          elBands.add(p);
        });
      }

      // ticks
      if (showTicks) {
        const majorColor = major.color || tokens.textMuted;
        const minorColor = minor.color || tokens.textMuted;
        const minorCount = Math.max(0, Math.round(px(minor.count, 4)));
        const minorLen = px(minor.length, 5);
        const minorPlacement = minor.placement || major.placement || 'outside';
        const ringOuter = R;
        const ringInner = lastInner;
        const tickD = (ratio, len, place) => {
          const a = angleAt(ratio);
          const out = place !== 'inside';
          const rA = place === 'center' ? (ringOuter + ringInner - len) / 2 : out ? ringOuter + tickGap : ringInner - tickGap;
          const rB = place === 'center' ? rA + len : out ? rA + len : rA - len;
          const p = polar(cx, cy, rA, a);
          const q = polar(cx, cy, rB, a);
          return `M ${f(p.x)} ${f(p.y)} L ${f(q.x)} ${f(q.y)} `;
        };
        let dMajor = '';
        let dMinor = '';
        for (let k = 0; k < majorCount; k++) {
          dMajor += tickD(k / (majorCount - 1), tickLen, major.placement);
          if (k < majorCount - 1) {
            for (let m = 1; m <= minorCount; m++) {
              const r = (k + m / (minorCount + 1)) / (majorCount - 1);
              dMinor += tickD(r, minorLen, minorPlacement);
            }
          }
        }
        if (dMinor) {
          const pm = graphics.drawPath({
            d: dMinor,
            stroke: minorColor,
            strokeWidth: px(minor.width, 1),
            fill: 'none',
            classes: 'wcc-gauge-tick-minor'
          });
          pm.attr({
            'stroke-opacity': minor.color ? 1 : 0.38
          });
          elTicks.add(pm);
        }
        const pM = graphics.drawPath({
          d: dMajor,
          stroke: majorColor,
          strokeWidth: px(major.width, 1.5),
          fill: 'none',
          classes: 'wcc-gauge-tick-major'
        });
        pM.attr({
          'stroke-opacity': major.color ? 1 : 0.7
        });
        elTicks.add(pM);
        if (tickLabels) {
          const off = px(tl.offset, 6);
          tickTexts.forEach((txt, k) => {
            // skip the duplicate label where a full circle closes
            if (full && k === majorCount - 1) return;
            const a = angleAt(k / (majorCount - 1));
            const rad = (a - 90) * Math.PI / 180;
            const tw = txt.length * tickFont * 0.58;
            const ext = Math.abs(Math.cos(rad)) * tw / 2 + Math.abs(Math.sin(rad)) * tickFont / 2;
            const rr = tickOutside ? ringOuter + tickGap + (tickCenter ? 0 : tickLen) + off + ext : ringInner - tickGap - tickLen - off - ext;
            const p = polar(cx, cy, rr, a);
            const el = graphics.drawText({
              x: f(p.x),
              y: f(p.y),
              text: txt,
              textAnchor: 'middle',
              dominantBaseline: 'central',
              fontSize: tickFont + 'px',
              fontFamily: tl.fontFamily || w.config.chart.fontFamily,
              fontWeight: tl.fontWeight || 500,
              foreColor: tl.color || tokens.textMuted,
              cssClass: 'wcc-gauge-tick-label wcc-num'
            });
            elTicks.add(el);
          });
        }
      }

      // value arcs
      const fill = new _0$6(this.ctx);
      const arcs = [];
      const showArc = !isNeedle || !!needleCfg.showValueArc;
      if (showArc) {
        for (let i = 0; i < n; i++) {
          const g = graphics.group({
            class: 'apexcharts-series apexcharts-radial-series',
            seriesName: String(w.globals.seriesNames[i] || ''),
            rel: i + 1,
            'data:realIndex': i
          });
          this.ctx.series.addCollapsedClassToSeries(g, i);
          const pathFill = fill.fillPath({
            seriesNumber: i,
            size: R,
            value: values[i]
          });
          const p = graphics.drawPath({
            d: '',
            stroke: pathFill,
            strokeWidth: strokeWidthOf(),
            fill: 'none',
            classes: `apexcharts-radialbar-area apexcharts-radialbar-slice-${i}`,
            strokeDashArray: Array.isArray(w.config.stroke.dashArray) ? w.config.stroke.dashArray[i] : w.config.stroke.dashArray
          });
          p.attr({
            'stroke-linecap': w.config.stroke.lineCap || 'butt',
            index: 0,
            j: i,
            'data:value': values[i]
          });
          if (w.config.chart.dropShadow.enabled) {
            new _0$5(this.ctx).dropShadow(p, w.config.chart.dropShadow, i);
          }
          this.bindEvents(p.node, i);
          g.add(p);
          elArcs.add(g);
          arcs.push({
            el: p,
            r: ringR(i)
          });
        }
      }

      // ring labels: several rings name themselves along the track just
      // before their start (full circles), so a multi-ring gauge reads
      // without a legend. Hidden where the text would not fit in the ring or
      // would run into the value arc; the data table and tooltip still name it.
      const rl = rb.ringLabels || {};
      const ringLabelsOn = rl.show === true || rl.show !== false && n > 1 && full && !isNeedle;
      if (ringLabelsOn && full && showArc) {
        const elRing = graphics.group({
          class: 'wcc-gauge-ring-labels'
        });
        const rfs = Math.min(px(rl.fontSize, 11), t - 3);
        if (rfs >= 8) {
          for (let i = 0; i < n; i++) {
            var _rl$formatter;
            const name = w.globals.seriesNames[i];
            const txt = rl.formatter ? String((_rl$formatter = rl.formatter(name, values[i], {
              seriesIndex: i,
              w
            })) !== null && _rl$formatter !== void 0 ? _rl$formatter : '') : String(name !== null && name !== void 0 ? name : '');
            if (!txt) continue;
            const r = ringR(i);
            const tw = textWidthPx(txt, rfs, 600);
            const capDeg = (t / 2 + 4) / r * (180 / Math.PI);
            const spanDeg = (tw + 4) / r * (180 / Math.PI) + capDeg;
            const ratio = Math.max(0, Math.min(1, domain.ratio(+values[i] || 0)));
            const endDeg = ratio * (a1 - a0);
            if (spanDeg >= 170) continue;
            // free track between the arc's round end and the start cap
            const free = 360 - endDeg - capDeg;
            let ink = rl.color || tokens.textMuted;
            if (free < spanDeg) {
              if (ratio < 1) continue;
              ink = tokens.surface;
            }
            const id = `wccRing${w.globals.cuid}_${i}`;
            const path = el$4('path', {
              id,
              d: arcPath(cx, cy, r, a0 - spanDeg - 2, a0 - capDeg + 0.0001),
              fill: 'none',
              stroke: 'none'
            });
            const text = el$4('text', {
              class: 'wcc-gauge-ring-label',
              'font-size': f(rfs),
              'font-weight': 600,
              'font-family': w.config.chart.fontFamily,
              fill: ink,
              'dominant-baseline': 'central',
              'pointer-events': 'none'
            });
            const tp = el$4('textPath', {
              href: `#${id}`,
              startOffset: '100%',
              'text-anchor': 'end'
            });
            tp.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `#${id}`);
            tp.textContent = txt;
            text.appendChild(tp);
            elRing.node.appendChild(path);
            elRing.node.appendChild(text);
          }
        }
        elArcs.add(elRing);
      }

      // needle
      let needle = null;
      if (isNeedle) {
        const nColor = needleCfg.color || w.globals.colors[0];
        const lenOpt = needleCfg.length;
        // default length stops short of the inner edge of the ring / bands,
        // so the tip never runs into the arc, the band joins or tick labels
        const clear = Math.max(lastInner - Math.max(6, R * 0.06), R * 0.4);
        const L = typeof lenOpt === 'string' && lenOpt.indexOf('%') > -1 ? pct$3(lenOpt, 0.82) * R : lenOpt === undefined || lenOpt === null || lenOpt === 'auto' ? Math.min(0.82 * R, clear) : px(lenOpt, 0.82 * R);
        const tip = Math.max(px(needleCfg.tipWidth, 1.5), 0.5) / 2;
        const base = baseWidth / 2;
        const pcy = cy + px(needleCfg.offsetY, 0);
        // tapered needle pointing to 12 o'clock, rounded tip and base
        const d = `M ${f(cx - base)} ${f(pcy)} L ${f(cx - tip)} ${f(pcy - L)} ` + `A ${f(tip)} ${f(tip)} 0 0 1 ${f(cx + tip)} ${f(pcy - L)} ` + `L ${f(cx + base)} ${f(pcy)} ` + `A ${f(base)} ${f(base)} 0 0 1 ${f(cx - base)} ${f(pcy)} Z`;
        const body = graphics.drawPath({
          d,
          stroke: 'none',
          strokeWidth: 0,
          fill: nColor,
          classes: 'wcc-gauge-needle-body'
        });
        const hub = graphics.drawCircle(hubR * 2);
        hub.attr({
          cx: f(cx),
          cy: f(pcy),
          r: f(hubR),
          fill: nColor
        });
        hub.node.classList.add('wcc-gauge-needle-hub');
        const dot = graphics.drawCircle(hubR);
        dot.attr({
          cx: f(cx),
          cy: f(pcy),
          r: f(Math.max(hubR * 0.42, 1.5)),
          fill: tokens.surface
        });
        elNeedle.add(body);
        elNeedle.add(hub);
        elNeedle.add(dot);
        this.bindEvents(body.node, 0);
        needle = {
          el: body,
          cx,
          cy: pcy
        };
      }

      // centre labels
      const label = this.drawLabels(graphics, elLabels, {
        cx,
        cy,
        R,
        full,
        isNeedle,
        hubR,
        a0,
        a1,
        tokens,
        lastInner,
        needleCy: cy + px(needleCfg.offsetY, 0)
      });
      ret.add(elTracks);
      ret.add(elBands);
      ret.add(elArcs);
      ret.add(elTicks);
      ret.add(elNeedle);
      ret.add(elLabels);
      this.setupA11y(ret, values, bands);
      this.animate({
        values,
        arcs,
        needle,
        label,
        elTicks,
        elBands,
        ret
      });
      return ret;
    }
    valueFontGuess(R) {
      const v = this.w.config.plotOptions.radialBar.dataLabels.value;
      if (v.fontSize && v.fontSize !== 'auto') return px(v.fontSize, 16);
      return Math.max(14, Math.min(40, R * 0.2));
    }
    drawLabels(graphics, group, g) {
      const w = this.w;
      const dl = w.config.plotOptions.radialBar.dataLabels;
      if (!dl.show) return null;
      const {
        cx,
        cy,
        R,
        full,
        isNeedle,
        tokens
      } = g;
      const sweepHasBottom = full || this.coversAngle(g.a0, g.a1, 180);
      let fs;
      if (dl.value.fontSize && dl.value.fontSize !== 'auto') {
        fs = px(dl.value.fontSize, 16);
      } else if (isNeedle) {
        fs = this.valueFontGuess(R);
      } else {
        fs = Math.max(14, Math.min(56, g.lastInner * (full ? 0.5 : 0.46)));
      }
      const nameFs = px(dl.name.fontSize, 13);
      const nameShow = dl.name.show;
      // value label position
      let vy;
      let baseline = 'central';
      if (isNeedle) {
        if (full) {
          vy = g.needleCy + R * 0.42;
        } else {
          vy = g.needleCy + g.hubR + 8 + fs * 0.5;
        }
      } else if (sweepHasBottom) {
        vy = cy + (nameShow ? -nameFs * 0.35 : 0);
      } else {
        // semi circle and similar: sit on the chord, inside the arc
        vy = cy - 2 - (nameShow ? nameFs + 6 : 0);
        baseline = 'auto';
      }
      vy += px(dl.value.offsetY, 0);
      let elValue = null;
      if (dl.value.show) {
        elValue = graphics.drawText({
          x: f(cx),
          y: f(vy),
          text: '',
          textAnchor: 'middle',
          dominantBaseline: baseline,
          fontSize: fs + 'px',
          fontWeight: dl.value.fontWeight || 600,
          fontFamily: dl.value.fontFamily || w.config.chart.fontFamily,
          foreColor: dl.value.color || tokens.text,
          cssClass: 'apexcharts-datalabel-value wcc-num'
        });
        elValue.attr('letter-spacing', fs >= 24 ? '-0.02em' : '0');
        group.add(elValue);
      }
      if (nameShow) {
        const name = dl.name.formatter ? dl.name.formatter(w.globals.seriesNames[0], false, w) : w.globals.seriesNames[0];
        let ny;
        if (isNeedle || !sweepHasBottom) {
          ny = vy + (baseline === 'auto' ? nameFs + 6 : fs * 0.5 + nameFs * 0.9);
        } else {
          ny = vy + fs * 0.5 + nameFs * 0.75;
        }
        ny += px(dl.name.offsetY, 0);
        const elName = graphics.drawText({
          x: f(cx),
          y: f(ny),
          text: name === undefined || name === null ? '' : String(name),
          textAnchor: 'middle',
          dominantBaseline: 'central',
          fontSize: nameFs + 'px',
          fontWeight: dl.name.fontWeight || 500,
          fontFamily: dl.name.fontFamily || w.config.chart.fontFamily,
          foreColor: dl.name.color || tokens.textMuted,
          cssClass: 'apexcharts-datalabel-label'
        });
        group.add(elName);
      }
      return elValue;
    }
    coversAngle(a0, a1, deg) {
      const lo = Math.min(a0, a1);
      const hi = Math.max(a0, a1);
      for (let k = deg - 720; k <= hi; k += 360) if (k >= lo && k <= hi) return true;
      return false;
    }
    valueText(v) {
      const w = this.w;
      const dl = w.config.plotOptions.radialBar.dataLabels;
      if (v === null || v === undefined) return '–';
      const fmt = dl.value.formatter;
      if (!fmt || fmt.wccDefault) {
        return this.domain.custom ? _1$1(v) : _1$1(v) + '%';
      }
      return fmt(v, w);
    }
    animate({
      values,
      arcs,
      needle,
      label,
      elTicks,
      elBands,
      ret
    }) {
      const w = this.w;
      const ctx = this.ctx;
      const rb = w.config.plotOptions.radialBar;
      const timing = drawTiming(w);
      const state = ctx._wccGauge || (ctx._wccGauge = {
        shown: []
      });
      const domain = this.domain;
      const startVal = domain.min;
      const from = values.map((v, i) => {
        if (timing.dynamic && finite$6(state.shown[i])) return state.shown[i];
        return startVal;
      });
      const to = values.map(v => finite$6(v) ? v : startVal);
      const decimals = values.map(v => decimalsOf(v));
      const setArcs = vals => {
        arcs.forEach((a, i) => {
          const r = domain.ratio(vals[i]);
          const d = arcPath(this.geom.cx, this.geom.cy, a.r, this.geom.a0, this.angleAt(r));
          a.el.node.setAttribute('d', d);
          // a zero-length round cap would show a dot at the start
          a.el.node.style.opacity = r <= 0.0005 ? '0' : '';
        });
      };
      const setLabel = (v, i0) => {
        if (!label) return;
        const dec = decimals[0];
        const val = values[0] === null ? null : +Number(v).toFixed(dec);
        setValueText(label.node, String(this.valueText(val)));
      };
      const setNeedle = v => {
        if (!needle) return;
        const a = this.angleAt(domain.ratio(v));
        needle.el.node.parentNode && needle.el.node.parentNode.setAttribute('transform', `rotate(${f(a)} ${f(needle.cx)} ${f(needle.cy)})`);
      };
      const dur = timing.duration || 0;
      const nAnim = rb.needle && rb.needle.animation ? rb.needle.animation : {};
      const needleDur = nAnim.enabled === false ? 0 : finite$6(nAnim.duration) && dur > 0 ? nAnim.duration : dur;
      const ease = easingFor(w, timing.dynamic, easeOutCubic);
      // needle.animation.easing: a named or registered easing, a function or cubic-bezier points
      const needleEase = _10(nAnim.easing) || (timing.dynamic ? easeOutCubic : easeOutBackSoft);
      const lerp = (a, b, e) => a + (b - a) * e;
      const node = ret.node;

      // value arcs + label share the arc timing
      tween(ctx, {
        duration: dur,
        easing: ease,
        node,
        onUpdate: (t, e) => {
          const cur = to.map((v, i) => lerp(from[i], v, e));
          setArcs(cur);
          if (!needle) {
            setLabel(cur[0]);
            state.shown = cur;
          }
        },
        onDone: () => {
          state.shown = to.slice();
          w.globals.animationEnded = true;
        }
      });
      if (needle) {
        const nFrom = from[0];
        const nTo = to[0];
        tween(ctx, {
          duration: needleDur,
          easing: needleEase,
          node,
          onUpdate: (t, e) => {
            const v = lerp(nFrom, nTo, e);
            setNeedle(v);
            // the label counts with the needle (no overshoot in the text)
            setLabel(lerp(nFrom, nTo, Math.min(1, ease(t))));
            state.shown = [v].concat(to.slice(1));
          },
          onDone: () => {
            state.shown = to.slice();
          }
        });
      }
      // ticks and bands fade in with the first sweep
      if (dur > 0 && !timing.dynamic) {
        [elTicks, elBands].forEach(g => {
          tween(ctx, {
            duration: dur * 0.6,
            easing: easeOutCubic,
            node,
            onUpdate: (t, e) => g.node.setAttribute('opacity', f(e))
          });
        });
      }
    }
    bindEvents(node, i) {
      const w = this.w;
      const ctx = this.ctx;
      const opts = () => ({
        seriesIndex: i,
        dataPointIndex: -1,
        w
      });
      node.addEventListener('mouseenter', e => {
        ctx.events.fireEvent('dataPointMouseEnter', [e, ctx, opts()]);
        const fn = w.config.chart.events.dataPointMouseEnter;
        if (typeof fn === 'function') fn(e, ctx, opts());
      });
      node.addEventListener('mouseleave', e => {
        ctx.events.fireEvent('dataPointMouseLeave', [e, ctx, opts()]);
        const fn = w.config.chart.events.dataPointMouseLeave;
        if (typeof fn === 'function') fn(e, ctx, opts());
      });
      node.addEventListener('click', e => {
        ctx.events.fireEvent('dataPointSelection', [e, ctx, opts()]);
        const fn = w.config.chart.events.dataPointSelection;
        if (typeof fn === 'function') fn(e, ctx, opts());
      });
    }
    setupA11y(ret, values, bands) {
      const w = this.w;
      const d = this.domain;
      const names = w.globals.seriesNames || [];
      const node = ret.node;
      const label = i => String(names[i] !== undefined && names[i] !== null ? names[i] : 'Value');
      // keyboard focus lives on the chart SVG (core a11y); the gauge group
      // exposes meter semantics
      node.setAttribute('role', 'meter');
      node.setAttribute('aria-valuemin', String(Math.min(d.min, d.max)));
      node.setAttribute('aria-valuemax', String(Math.max(d.min, d.max)));
      if (finite$6(values[0])) {
        node.setAttribute('aria-valuenow', String(values[0]));
      }
      node.setAttribute('aria-valuetext', String(this.valueText(values[0])));
      const band = bands.find(b => finite$6(values[0]) && values[0] >= Math.min(+b.from, +b.to) && values[0] <= Math.max(+b.from, +b.to));
      node.setAttribute('aria-label', label(0) + (band && band.label ? ` (${band.label})` : ''));
      const bandOf = v => bands.find(b => finite$6(v) && v >= Math.min(+b.from, +b.to) && v <= Math.max(+b.from, +b.to));
      const text = i => {
        const v = values[i];
        const b = bandOf(v);
        return String(this.valueText(v)) + (b && b.label ? ` (${b.label})` : '');
      };
      w.globals.wccA11y = {
        value: s => text(s),
        // Overview extrema use the same domain-aware value formatting as the
        // visible gauge label and table (not radialBar's default percent text).
        format: v => String(this.valueText(v)),
        category: () => '',
        table: () => ({
          head: ['Series', 'Value'],
          rows: values.map((v, i) => [label(i), text(i)])
        })
      };
    }
  }

  /* chart.type 'gauge' (radialBar renderer replaced) */
  var gauge = {
    names: ['gauge'],
    renderers: {
      radialBar: Gauge
    }
  };

  /* chart.type 'funnel' / 'pyramid' (bar presets; shapes and labels are core, charts/Bar) */
  var funnel = {
    names: ['funnel', 'pyramid']
  };

  /*
   * West Coast Charts - waterfall decorations on top of the rangeBar
   * renderer: connectors between the bars and value labels placed at the
   * end of each bar (outside, in the text colour).
   * The accumulation itself is a series transform (modules/types/TypeTransforms).
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  const SVGNS$5 = 'http://www.w3.org/2000/svg';

  /** 8786000 -> '8.8M', -2786000 -> '−2.8M', 950 -> '950' */
  function compactNumber(v) {
    return compactNumber$1(v, {
      min: 1e3
    });
  }
  const crisp = (v, width) => Math.round(width) % 2 === 1 ? Math.round(v - 0.5) + 0.5 : Math.round(v);
  function textWidth$1(t) {
    try {
      if (typeof t.getComputedTextLength === 'function') {
        const l = t.getComputedTextLength();
        if (l > 0) return l;
      }
    } catch (e) {
      // not rendered
    }
    const fs = parseFloat(t.getAttribute('font-size')) || 12;
    return (t.textContent || '').length * fs * 0.56;
  }
  class Waterfall {
    constructor(ctx, rangeBar) {
      this.ctx = ctx;
      this.w = ctx.w;
      this.rb = rangeBar;
    }
    static uses(w) {
      return w.config.chart.requestedType === 'waterfall';
    }
    bars() {
      return this.rb.wccBars && this.rb.wccBars[0] || [];
    }
    decorate(elGraph) {
      if (!elGraph || !elGraph.node) return;
      const w = this.w;
      const bars = this.bars();
      w.globals.wccWaterfallColors = (w.config.series[0] && w.config.series[0].data || []).map(d => d && d.fillColor);
      this.drawConnectors(elGraph, bars);
      this.placeLabels(elGraph, bars);
    }

    /**
     * Dense bridges: when the default labels are wider than a bar slot, use
     * compact numbers (8.8M). User formatters are left alone.
     */
    compactCrowdedLabels(groups, bars, user) {
      const w = this.w;
      if (user !== true && user.formatter) return;
      const y0 = w.config.yaxis[0];
      if (y0 && y0.labels && typeof y0.labels.formatter === 'function' && !y0.labels.formatter.wccDefault) {
        const uy = (this.ctx._wccUserShape || {}).yaxis || {};
        if (uy === true || uy.labels && uy.labels.formatter || Array.isArray(uy)) return;
      }
      if (!this.crowded(groups, bars)) return;
      groups.forEach(g => {
        const t = g.querySelector('text');
        const j = parseInt(g.getAttribute('data-wcc-j'), 10);
        const d = w.config.series[0].data[j];
        if (t && d && d.wcc && d.wcc.kind !== 'empty') t.textContent = compactNumber(d.wcc.value);
      });
    }

    /** vertical bridge whose labels are wider than a bar slot (minus 4px) */
    crowded(groups, bars) {
      const horizontal = bars.some(b => b && b.horizontal);
      if (horizontal || bars.length < 2) return false;
      const centres = bars.filter(Boolean).map(b => (b.band0 + b.band1) / 2);
      let slot = Infinity;
      for (let k = 1; k < centres.length; k++) slot = Math.min(slot, Math.abs(centres[k] - centres[k - 1]));
      return groups.some(g => {
        const t = g.querySelector('text');
        return t && textWidth$1(t) > slot - 4;
      });
    }

    /**
     * hide labels that still overlap a neighbour; totals and subtotals win.
     * gap = clear space kept around each label ({ x, y }); crowded bridges
     * keep more air so the survivors read as separate numbers
     */
    resolveCollisions(placed, gap = {
      x: 2,
      y: 1
    }, bars) {
      const rect = p => {
        // the rendered glyph box (ascent + descent) when the text is laid out;
        // the cap-height estimate let descenders touch the label below
        const t = p.grp.querySelector && p.grp.querySelector('text');
        let b = null;
        try {
          b = t && t.getBBox ? t.getBBox() : null;
        } catch (e) {
          b = null;
        }
        if (b && b.width > 0 && b.height > 0) {
          return {
            x0: b.x - gap.x,
            x1: b.x + b.width + gap.x,
            y0: b.y - gap.y,
            y1: b.y + b.height + gap.y
          };
        }
        const x0 = p.anchor === 'middle' ? p.x - p.tw / 2 : p.anchor === 'end' ? p.x - p.tw : p.x;
        return {
          x0: x0 - gap.x,
          x1: x0 + p.tw + gap.x,
          y0: p.y - p.fs - gap.y + 1,
          y1: p.y + p.fs * 0.3 + gap.y - 1
        };
      };
      const hit = (a, b) => a.x0 < b.x1 && b.x0 < a.x1 && a.y0 < b.y1 && b.y0 < a.y1;
      const rank = p => p.kind === 'total' ? 3 : p.kind === 'subtotal' ? 2 : 1;
      const kept = [];
      // crowded bridges: a step label may not sit on another step's bar either
      const obstacles = (bars || []).map((b, j) => b && !b.horizontal && {
        j,
        x0: Math.min(b.band0, b.band1),
        x1: Math.max(b.band0, b.band1),
        y0: Math.min(b.start, b.end),
        y1: Math.max(b.start, b.end)
      }).filter(Boolean);
      placed.slice().sort((a, b) => rank(b) - rank(a) || a.j - b.j).forEach(p => {
        const r = rect(p);
        const onBar = rank(p) === 1 && obstacles.some(o => o.j !== p.j && hit(o, r));
        if (onBar || kept.some(k => hit(k, r))) {
          p.grp.style.display = 'none';
          p.grp.classList.add('wcc-label-hidden');
        } else kept.push(r);
      });
    }

    /** when bar j has finished its enter / morph animation; null = no animation */
    revealTiming() {
      const w = this.w;
      const timing = drawTiming(w);
      if (!(timing.duration > 0)) return null;
      const a = w.config.chart.animations;
      const gradual = !timing.dynamic && a.animateGradually && a.animateGradually.enabled ? a.animateGradually.delay || 0 : 0;
      return {
        at: j => timing.duration * 0.85 + gradual * j
      };
    }
    drawConnectors(elGraph, bars) {
      const w = this.w;
      const o = (w.config.plotOptions.waterfall || {}).connectors || {};
      if (o.show === false) return;
      if (w.globals.collapsedSeriesIndices.indexOf(0) > -1) return;
      const width = o.strokeWidth === undefined ? 1 : o.strokeWidth;
      if (!(width > 0)) return;
      const t = tokensOf(w);
      // spec: falls back to grid.borderColor. Themed presets use the muted
      // text token at 55% instead (the grid token is too faint for a dashed
      // 1px line)
      const userGrid = !!((this.ctx._wccUserShape || {}).grid || {}).borderColor;
      const themed = !!(w.config.theme && w.config.theme.resolvedTokens);
      const soft = themed && !userGrid && !o.color;
      const color = o.color || (soft ? t.textMuted : w.config.grid.borderColor) || t.grid;
      const dash = o.strokeDashArray === undefined ? 3 : o.strokeDashArray;
      const g = document.createElementNS(SVGNS$5, 'g');
      g.setAttribute('class', 'apexcharts-waterfall-connectors wcc-connectors');
      g.setAttribute('aria-hidden', 'true');
      const lines = [];
      for (let j = 0; j < bars.length - 1; j++) {
        const b = bars[j];
        const n = bars[j + 1];
        if (!b || !n) continue;
        const level = crisp(b.end, width);
        const l = document.createElementNS(SVGNS$5, 'line');
        if (b.horizontal) {
          l.setAttribute('x1', level);
          l.setAttribute('x2', level);
          l.setAttribute('y1', b.band1);
          l.setAttribute('y2', n.band0);
        } else {
          l.setAttribute('x1', b.band1);
          l.setAttribute('x2', n.band0);
          l.setAttribute('y1', level);
          l.setAttribute('y2', level);
        }
        l.setAttribute('stroke', color);
        l.setAttribute('stroke-width', width);
        if (soft) l.setAttribute('stroke-opacity', '0.55');
        if (dash > 0) l.setAttribute('stroke-dasharray', dash);
        l.setAttribute('shape-rendering', 'crispEdges');
        l.setAttribute('class', 'wcc-connector');
        l.setAttribute('data-wcc-j', j);
        g.appendChild(l);
        lines.push(l);
      }
      // connectors sit behind the bars
      elGraph.node.insertBefore(g, elGraph.node.firstChild);

      // reveal each connector once both of its bars have arrived
      const reveal = this.revealTiming();
      if (!reveal || !lines.length) return;
      lines.forEach(l => {
        const j = parseInt(l.getAttribute('data-wcc-j'), 10);
        l.style.opacity = '0';
        tween(this.ctx, {
          duration: 220,
          delay: reveal.at(j + 1),
          node: l,
          onUpdate: p => l.style.opacity = String(p),
          onDone: () => l.style.removeProperty('opacity')
        });
      });
    }
    placeLabels(elGraph, bars) {
      const w = this.w;
      const dl = w.config.dataLabels;
      if (!dl.enabled) return;
      const root = elGraph.node;
      const t = tokensOf(w);
      const user = (this.ctx._wccUserShape || {}).dataLabels || {};
      const userColors = user !== true && user.style && user.style !== true && user.style.colors;
      const userOffset = user !== true && (user.offsetX !== undefined || user.offsetY !== undefined);
      if (userOffset) return; // user positions labels themselves
      const pad = 6;
      const reveal = this.revealTiming();
      const gw = w.globals.gridWidth;
      const gh = w.globals.gridHeight;
      const groups = Array.from(root.querySelectorAll('.apexcharts-datalabels [data-wcc-j]'));
      this.compactCrowdedLabels(groups, bars, user);
      // crowded (narrow) bridges: a touch smaller type unless the user sized it
      const crowded = this.crowded(groups, bars);
      const userSize = user !== true && user.style && user.style !== true && user.style.fontSize !== undefined;
      if (crowded && !userSize) {
        groups.forEach(g => {
          const t = g.querySelector('text');
          const f = t && parseFloat(t.getAttribute('font-size'));
          if (f > 10) t.setAttribute('font-size', Math.max(10, Math.round(f * 0.9 * 2) / 2));
        });
      }
      const placed = [];
      groups.forEach(grp => {
        const j = parseInt(grp.getAttribute('data-wcc-j'), 10);
        const b = bars[j];
        const text = grp.querySelector('text');
        if (!b || !text || !text.textContent) return;
        const fs = parseFloat(text.getAttribute('font-size')) || 12;
        const tw = textWidth$1(text);
        const d = w.config.series[0].data[j];
        const up = !d || !d.wcc || d.wcc.value >= 0;
        const lo = Math.min(b.start, b.end);
        const hi = Math.max(b.start, b.end);
        let x;
        let y;
        let anchor;
        let inside = false;
        // preferred spot: just past the end of the bar (outside, text ink);
        // then outside on the other end; inside only as the last resort
        const len = hi - lo;
        if (b.horizontal) {
          y = (b.band0 + b.band1) / 2 + fs * 0.35;
          const right = hi + pad + tw <= gw;
          const left = lo - pad - tw >= 0;
          if (up ? right : !left && right) {
            x = hi + pad;
            anchor = 'start';
          } else if (left) {
            x = lo - pad;
            anchor = 'end';
          } else {
            inside = true;
            x = up ? hi - pad : lo + pad;
            anchor = up ? 'end' : 'start';
            if (tw + 2 * pad > len) {
              x = (lo + hi) / 2;
              anchor = 'middle';
            }
          }
        } else {
          x = (b.band0 + b.band1) / 2;
          anchor = 'middle';
          // labels may use the free strip above the plot (inside the svg)
          const headroom = Math.max(2, (w.globals.translateY || 0) - 4);
          const above = lo - pad - fs >= -headroom;
          const below = hi + pad + fs * 0.8 <= gh + 2;
          const roomInside = len >= fs + 2 * pad && tw + 4 <= Math.abs(b.band1 - b.band0);
          // preferred: beyond the bar end; then inside the end; then the far
          // side; inside as the last resort
          const pref = up ? above : below;
          const other = up ? below : above;
          if (pref) {
            y = up ? lo - pad : hi + pad + fs * 0.8;
          } else if (roomInside || !other) {
            inside = true;
            y = up ? lo + pad + fs * 0.8 : hi - pad;
          } else {
            y = up ? hi + pad + fs * 0.8 : lo - pad;
          }
        }
        text.setAttribute('x', x);
        text.setAttribute('y', y);
        text.setAttribute('text-anchor', anchor);
        text.removeAttribute('filter');
        text.classList.add('wcc-num', inside ? 'wcc-label-inside' : 'wcc-label-outside');
        if (!userColors) {
          const ink = inside ? inkOn(d && d.fillColor ? d.fillColor : w.globals.colors[0]) || t.text : t.text;
          text.setAttribute('fill', ink);
          text.style.fill = ink;
        }
        // the 4.7.0 label group may carry a rotate() transform around the old point
        grp.removeAttribute('transform');
        placed.push({
          grp,
          j,
          x,
          y,
          tw,
          fs,
          anchor,
          kind: d && d.wcc ? d.wcc.kind : ''
        });
        if (reveal) {
          // labels appear when their bar has arrived (not ahead of it)
          grp.style.opacity = '0';
          tween(this.ctx, {
            duration: 240,
            delay: reveal.at(j),
            node: grp,
            onUpdate: p => grp.style.opacity = String(p),
            onDone: () => grp.style.removeProperty('opacity')
          });
        }
      });
      this.resolveCollisions(placed, crowded ? {
        x: 4,
        y: 2.5
      } : undefined, crowded ? bars : null);
    }
  }

  /* chart.type 'waterfall' (rangeBar + connectors and totals) */
  var waterfall = {
    names: ['waterfall'],
    decorators: {
      rangeBar: Waterfall
    }
  };

  /*
   * West Coast Charts - dumbbell renderer (one series per measure, rows
   * joined by x; see docs/spec/02-chart-types/dumbbell.md).
   * Uses the rangeBar scales (the series transform turns every measure into
   * zero-length ranges), draws per row: a connector from the lowest to the
   * highest visible endpoint (gradient between the endpoint colours), one
   * dot per measure, and end labels on the two extremes.
   * The legacy single-series [low, high] form keeps the 4.7.0 renderer.
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  const SVGNS$4 = 'http://www.w3.org/2000/svg';
  const finite$5 = v => typeof v === 'number' && isFinite(v);
  const el$3 = (name, attrs) => {
    const n = document.createElementNS(SVGNS$4, name);
    Object.keys(attrs || {}).forEach(k => attrs[k] !== undefined && n.setAttribute(k, attrs[k]));
    return n;
  };
  function dumbbellValueFormatter(w) {
    const o = w.config.plotOptions.bar.dumbbell || {};
    const dl = o.dataLabels || {};
    if (typeof dl.formatter === 'function') {
      return (v, i, j) => String(dl.formatter(v, {
        seriesIndex: i,
        dataPointIndex: j,
        w
      }));
    }
    // the value axis: x axis when horizontal, y axis for columns
    const horizontal = w.config.plotOptions.bar.horizontal;
    const f = horizontal ? w.config.xaxis.labels && w.config.xaxis.labels.formatter : w.config.yaxis[0] && w.config.yaxis[0].labels && w.config.yaxis[0].labels.formatter;
    if (_2(f)) return (v, i, j) => String(f(v, {
      seriesIndex: i,
      dataPointIndex: j,
      w
    }));
    return v => groupedNumber(v);
  }
  class Dumbbell {
    constructor(ctx, rangeBar) {
      this.ctx = ctx;
      this.w = ctx.w;
      this.rb = rangeBar;
    }

    /** the new multi-series form (the transform marks every point) */
    static uses(w) {
      if (w.config.chart.requestedType !== 'dumbbell') return false;
      const s = w.config.series || [];
      return s.some(ser => ser && ser.wccSource);
    }
    geometry() {
      const w = this.w;
      const rb = this.rb;
      rb.barHelpers.initVariables(w.globals.series);
      const p = rb.barHelpers.initialPositions(0);
      const horizontal = rb.isHorizontal;
      const rows = Math.max(1, w.globals.labels.length || w.globals.dataPoints);
      const band = horizontal ? w.globals.gridHeight / rows : w.globals.gridWidth / rows;
      const yRatio = rb.yRatio[0];
      const valuePx = horizontal ? v => p.zeroW + v / rb.invertedYRatio : v => p.zeroH - v / yRatio;
      const thick = (() => {
        const opt = horizontal ? rb.barOptions.barHeight : rb.barOptions.columnWidth;
        if (String(opt).indexOf('%') > -1) return Math.max(1, band * parseFloat(opt) / 100);
        return Math.max(1, parseFloat(opt) || 3);
      })();
      return {
        horizontal,
        rows,
        band,
        valuePx,
        thick
      };
    }
    rowsData() {
      const w = this.w;
      const hidden = w.globals.collapsedSeriesIndices || [];
      const rows = [];
      const n = Math.max(0, ...w.config.series.map(s => (s.data || []).length));
      for (let j = 0; j < n; j++) {
        const pts = [];
        let x;
        w.config.series.forEach((s, i) => {
          if (hidden.indexOf(i) > -1) return;
          const d = s.data && s.data[j];
          if (!d) return;
          if (x === undefined) x = d.x;
          if (d.wcc && finite$5(d.wcc.value)) pts.push({
            i,
            v: d.wcc.value
          });
        });
        rows.push({
          j,
          x,
          pts
        });
      }
      return rows;
    }
    draw() {
      const w = this.w;
      const graphics = new _0$4(this.ctx);
      const ret = graphics.group({
        class: 'apexcharts-rangebar-series apexcharts-plot-series wcc-dumbbell'
      });
      const root = ret.node;
      const g = this.geometry();
      const t = tokensOf(w);
      const o = w.config.plotOptions.bar.dumbbell || {};
      const conn = o.connector || {};
      const dl = o.dataLabels || {};
      const r = Math.max(1, w.config.markers && +(Array.isArray(w.config.markers.size) ? w.config.markers.size[0] : w.config.markers.size) || 6);
      const colors = w.globals.colors;
      const fmt = dumbbellValueFormatter(w);
      const cuid = w.globals.cuid;
      const timing = drawTiming(w);
      const prev = this.ctx._wccDumbbell && this.ctx._wccDumbbell.shown || {};
      const shown = {};
      const defs = el$3('defs');
      const gConn = el$3('g', {
        class: 'wcc-dumbbell-connectors',
        'aria-hidden': 'true'
      });
      const gDots = el$3('g', {
        class: 'wcc-dumbbell-dots'
      });
      const gLabels = el$3('g', {
        class: 'apexcharts-datalabels wcc-dumbbell-labels',
        'aria-hidden': 'true'
      });
      // tooltip hit areas: one band per row; the 4.7.0 bar tooltip reads
      // index/j/cx/cy from them (parent rel = series index + 1)
      const firstVisible = w.config.series.findIndex((s, i) => w.globals.collapsedSeriesIndices.indexOf(i) === -1);
      const gHit = el$3('g', {
        class: 'wcc-dumbbell-hit',
        rel: Math.max(0, firstVisible) + 1,
        'data:realIndex': Math.max(0, firstVisible)
      });
      root.appendChild(defs);
      root.appendChild(gConn);
      root.appendChild(gDots);
      // one group per measure: legend toggling / highlighting finds series
      // by these groups (4.7.0 contract: seriesName, rel, data:realIndex)
      const seriesGroups = w.config.series.map((s, i) => {
        const sg = graphics.group({
          class: 'apexcharts-series wcc-dumbbell-series',
          seriesName: _0.escapeString(w.globals.seriesNames[i]),
          rel: i + 1,
          'data:realIndex': i
        });
        this.ctx.series.addCollapsedClassToSeries(sg, i);
        gDots.appendChild(sg.node);
        return sg.node;
      });
      root.appendChild(gLabels);
      root.appendChild(gHit);
      const anims = [];
      const fs = dl.style && dl.style.fontSize ? dl.style.fontSize : '12px';
      const fsPx = parseFloat(fs) || 12;
      const off = dl.offset === undefined ? 6 : +dl.offset;
      this.rowsData().forEach(row => {
        const c = g.band * (row.j + 0.5);
        const at = v => g.horizontal ? {
          x: g.valuePx(v),
          y: c
        } : {
          x: c,
          y: g.valuePx(v)
        };
        const pts = row.pts.slice().sort((a, b) => a.v - b.v);
        // hit band
        const hit = el$3('rect', {
          class: 'apexcharts-rangebar-area wcc-hit',
          x: g.horizontal ? 0 : g.band * row.j,
          y: g.horizontal ? g.band * row.j : 0,
          width: Math.max(0, g.horizontal ? w.globals.gridWidth : g.band),
          height: Math.max(0, g.horizontal ? g.band : w.globals.gridHeight),
          fill: 'transparent',
          index: Math.max(0, firstVisible),
          j: row.j,
          cx: g.horizontal && pts.length ? g.valuePx(pts[pts.length - 1].v) + r : c,
          cy: g.horizontal ? g.band * (row.j + 1) : pts.length ? g.valuePx(pts[pts.length - 1].v) - r : 0,
          barWidth: g.horizontal ? 0 : g.band,
          barHeight: g.horizontal ? g.band : 0
        });
        gHit.appendChild(hit);
        if (!pts.length) return;
        const lo = pts[0];
        const hi = pts[pts.length - 1];
        // connector
        if (pts.length > 1) {
          const a = at(lo.v);
          const b = at(hi.v);
          let stroke = conn.color;
          if (!stroke) {
            const id = `wcc-db-${cuid}-${row.j}`;
            const grad = el$3('linearGradient', {
              id,
              gradientUnits: 'userSpaceOnUse',
              x1: a.x,
              y1: a.y,
              x2: b.x === a.x && b.y === a.y ? b.x + 1 : b.x,
              y2: b.y
            });
            grad.appendChild(el$3('stop', {
              offset: '0',
              'stop-color': colors[lo.i]
            }));
            grad.appendChild(el$3('stop', {
              offset: '1',
              'stop-color': colors[hi.i]
            }));
            defs.appendChild(grad);
            stroke = `url(#${id})`;
          }
          const line = el$3('line', {
            class: 'wcc-dumbbell-connector',
            x1: a.x,
            y1: a.y,
            x2: b.x,
            y2: b.y,
            stroke,
            'stroke-width': g.thick,
            'stroke-linecap': 'round',
            'stroke-opacity': conn.opacity === undefined ? 0.55 : conn.opacity,
            'data-wcc-j': row.j
          });
          gConn.appendChild(line);
          const p0 = prev[`c${row.j}`];
          anims.push({
            type: 'line',
            node: line,
            from: p0 || null,
            to: {
              a,
              b
            }
          });
          shown[`c${row.j}`] = {
            a,
            b
          };
        }
        // dots
        pts.forEach(p => {
          const q = at(p.v);
          // a path (not a circle) at the origin, placed with a transform: the
          // core a11y finds points as path[j] inside their series group, and
          // the bar tooltip reads cx / cy / barWidth / barHeight from it
          const dot = el$3('path', {
            class: 'wcc-point wcc-dumbbell-dot apexcharts-rangebar-area',
            d: `M ${-r} 0 a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0 Z`,
            transform: `translate(${q.x} ${q.y})`,
            'data-x': q.x,
            'data-y': q.y,
            'data-r': r,
            cx: g.horizontal ? q.x : c + g.band - r,
            cy: g.horizontal ? c + g.band - r : q.y,
            barWidth: 2 * r,
            barHeight: 2 * r,
            fill: colors[p.i],
            stroke: t.surface,
            'stroke-width': 2,
            index: p.i,
            j: row.j,
            'data-value': p.v
          });
          seriesGroups[p.i].appendChild(dot);
          const p0 = prev[`d${p.i}-${row.j}`];
          anims.push({
            type: 'dot',
            node: dot,
            from: p0,
            to: q,
            centre: pts.length > 1 ? at((lo.v + hi.v) / 2) : q
          });
          shown[`d${p.i}-${row.j}`] = q;
        });
        // end labels on the extremes
        if (dl.enabled) {
          const ends = pts.length > 1 ? [lo, hi] : [hi];
          ends.forEach((p, k) => {
            const q = at(p.v);
            const isLow = pts.length > 1 && k === 0;
            const txt = el$3('text', {
              class: 'apexcharts-datalabel wcc-num wcc-dumbbell-label',
              'font-size': fs,
              'font-weight': dl.style && dl.style.fontWeight || 600,
              'font-family': dl.style && dl.style.fontFamily || w.config.chart.fontFamily
            });
            txt.textContent = fmt(p.v, p.i, row.j);
            const userColors = dl.style && dl.style.colors;
            const color = userColors ? userColors[p.i % userColors.length] : dl.colorFromMarker === false ? t.text : colors[p.i];
            txt.setAttribute('fill', color);
            // beside the dot, away from the connector; when that would leave
            // the plot area, above (rows) / beside (columns) the dot instead
            const tw = txt.textContent.length * fsPx * 0.58;
            const gw = w.globals.gridWidth;
            const gh = w.globals.gridHeight;
            if (g.horizontal) {
              let x = isLow ? q.x - r - off : q.x + r + off;
              let y = q.y + fsPx * 0.35;
              let anchor = isLow ? 'end' : 'start';
              if (isLow && x - tw < 0 || !isLow && x + tw > gw) {
                x = Math.min(Math.max(q.x, tw / 2), gw - tw / 2);
                y = q.y - r - 4;
                anchor = 'middle';
              }
              txt.setAttribute('x', x);
              txt.setAttribute('y', y);
              txt.setAttribute('text-anchor', anchor);
            } else {
              let x = q.x;
              let y = isLow ? q.y + r + off + fsPx * 0.8 : q.y - r - off;
              let anchor = 'middle';
              if (isLow && y > gh || !isLow && y - fsPx < 0) {
                x = q.x + r + 4;
                y = q.y + fsPx * 0.35;
                anchor = 'start';
              }
              txt.setAttribute('x', x);
              txt.setAttribute('y', y);
              txt.setAttribute('text-anchor', anchor);
            }
            gLabels.appendChild(txt);
          });
        }
      });
      this.ctx._wccDumbbell = {
        shown
      };
      this.animate(anims, gLabels, timing);
      return ret;
    }
    animate(anims, gLabels, timing) {
      if (!(timing.duration > 0) || !anims.length) return;
      const w = this.w;
      const easing = easingFor(w, timing.dynamic);
      const lerp = (a, b, e) => a + (b - a) * e;
      anims.forEach(an => {
        if (an.type === 'dot') {
          // enter: dots slide out from the row centre and pop in; update: move
          const from = an.from || an.centre;
          const fresh = !an.from;
          tween(this.ctx, {
            duration: timing.duration,
            easing,
            node: an.node,
            onUpdate: (tt, e) => {
              const k = fresh ? Math.min(1, tt * 2.2) : 1;
              an.node.setAttribute('transform', `translate(${lerp(from.x, an.to.x, e)} ${lerp(from.y, an.to.y, e)})` + (k < 1 ? ` scale(${k})` : ''));
            }
          });
        } else {
          const fresh = !an.from;
          const mid = fresh ? {
            x: (an.to.a.x + an.to.b.x) / 2,
            y: (an.to.a.y + an.to.b.y) / 2
          } : null;
          const fa = fresh ? mid : an.from.a;
          const fb = fresh ? mid : an.from.b;
          tween(this.ctx, {
            duration: timing.duration,
            easing,
            node: an.node,
            onUpdate: (tt, e) => {
              an.node.setAttribute('x1', lerp(fa.x, an.to.a.x, e));
              an.node.setAttribute('y1', lerp(fa.y, an.to.a.y, e));
              an.node.setAttribute('x2', lerp(fb.x, an.to.b.x, e));
              an.node.setAttribute('y2', lerp(fb.y, an.to.b.y, e));
            }
          });
        }
      });
      gLabels.style.opacity = '0';
      tween(this.ctx, {
        duration: 220,
        delay: timing.duration * 0.8,
        node: gLabels,
        onUpdate: p => gLabels.style.opacity = String(p),
        onDone: () => gLabels.style.removeProperty('opacity')
      });
    }
  }

  /* chart.type 'dumbbell' */
  var dumbbell = {
    names: ['dumbbell'],
    renderers: {
      rangeBar: Dumbbell
    }
  };

  /* chart.type 'histogram' (bar preset + binning) */
  var histogram = {
    names: ['histogram']
  };

  /* chart.type 'violin' / 'raincloud' */
  var violin = {
    names: ['violin', 'raincloud'],
    renderers: {
      rangeBar: Violin
    }
  };

  /*
   * West Coast Charts - shared machinery of the partition charts (sunburst,
   * icicle): tree, view window, zoom with breadcrumb, hover highlight,
   * floating tooltip, events, a11y hooks and animation.
   *
   * Every node of the tree has a partition [x0, x1] of the unit interval and
   * a depth. A *view* { x0, x1, shift, rings } maps that onto the drawing:
   * the focused node's span fills the value axis and depths are shifted so
   * the focus sits on the first ring / band. Zooming tweens the view, so
   * every arc or cell moves continuously (no redraw).
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  const SVGNS$3 = 'http://www.w3.org/2000/svg';
  const finite$4 = v => typeof v === 'number' && isFinite(v);
  const f2$3 = v => Math.round(v * 100) / 100;
  const el$2 = (name, attrs) => {
    const n = document.createElementNS(SVGNS$3, name);
    Object.keys(attrs || {}).forEach(k => attrs[k] !== undefined && n.setAttribute(k, attrs[k]));
    return n;
  };
  const textWidth = (s, size, weight = 400) => String(s).length * size * (weight >= 600 ? 0.6 : 0.56);
  class Partition {
    constructor(ctx) {
      this.ctx = ctx;
      this.w = ctx.w;
    }

    /** options block of the type: plotOptions.sunburst / plotOptions.icicle */
    get o() {
      return this.w.config.plotOptions[this.kind] || {};
    }
    tree() {
      const w = this.w;
      const o = this.o;
      const s = w.config.series[0] || {};
      const data = s.wccSource && s.wccSource.data || s.data || [];
      return buildTree(data, {
        partition: o.partition,
        sort: o.sort,
        tint: o.tint,
        colorBy: o.colorBy,
        colors: w.globals.colors,
        drilldown: w.config.drilldown,
        rootLabel: w.config.drilldown && w.config.drilldown.breadcrumb && w.config.drilldown.breadcrumb.rootLabel || s.name || 'All',
        tintDirection: tokensOf(w).mode === 'dark' ? 'dark' : 'light'
      });
    }

    /** view window that puts `focus` on the first ring / band */
    viewFor(focus) {
      const shift = focus.depth === 0 ? 0 : this.shiftFor(focus);
      let rings = focus.depth === 0 ? focus.maxDepth : focus.depth + focus.height - shift;
      const md = this.o.maxDepth;
      if (finite$4(md) && md > 0) rings = Math.min(rings, md);
      return {
        x0: focus.x0,
        x1: focus.x1,
        shift,
        rings: Math.max(1, rings)
      };
    }
    shiftFor(focus) {
      return focus.depth - 1;
    }

    /** node -> placement in view units: u0,u1 (0..1) and r0,r1 (ring index) */
    place(n, v) {
      const span = v.x1 - v.x0 || 1;
      const u0 = Math.max(0, Math.min(1, (n.x0 - v.x0) / span));
      const u1 = Math.max(0, Math.min(1, (n.x1 - v.x0) / span));
      const r0 = n.depth - v.shift - 1;
      const extend = (this.o.leaf || this.defaultLeaf) === 'extend';
      let r1 = !n.children.length && extend ? Math.max(r0 + 1, v.rings) : r0 + 1;
      r1 = Math.min(r1, v.rings);
      return {
        u0,
        u1,
        r0,
        r1,
        on: u1 - u0 > 1e-6 && r0 >= -1e-6 && r0 < v.rings - 1e-6
      };
    }
    fmt(v, n) {
      const w = this.w;
      const ty = w.config.tooltip && w.config.tooltip.y;
      if (ty && !Array.isArray(ty) && typeof ty.formatter === 'function') {
        return String(ty.formatter(v, {
          node: n,
          w
        }));
      }
      const yf = w.config.yaxis && w.config.yaxis[0] && w.config.yaxis[0].labels && w.config.yaxis[0].labels.formatter;
      if (typeof yf === 'function' && !yf.wccDefault) {
        try {
          return String(yf(v));
        } catch (e) {
          /* fall through */
        }
      }
      return groupedNumber(v, 2);
    }
    pathLabel(n) {
      return ancestors(n).slice(1).map(a => a.name).join(' › ');
    }
    labelsOn() {
      const w = this.w;
      const dl = this.o.dataLabels || {};
      return w.config.dataLabels.enabled !== false && dl.show !== false;
    }

    // ---------------------------------------------------------------- draw

    draw() {
      const w = this.w;
      const ctx = this.ctx;
      const graphics = new _0$4(ctx);
      this.t = tokensOf(w);
      const root = this.root = this.tree();
      const state = ctx._wccPartition = ctx._wccPartition || {};
      // a focus that no longer exists (new data) falls back to the root
      let focus = state.focusKey && findByKey(root, state.focusKey) || root;
      if (!focus.children.length && focus !== root) focus = focus.parent || root;
      this.focus = focus;
      state.focusKey = focus.key;
      const ret = graphics.group({
        class: `apexcharts-treemap wcc-partition wcc-${this.kind}`
      });
      this.ret = ret;
      const sg = graphics.group({
        class: 'apexcharts-series wcc-partition-series',
        seriesName: _0.escapeString(w.globals.seriesNames[0] || 'series'),
        rel: 1,
        'data:realIndex': 0
      });
      ret.add(sg);
      this.sg = sg.node;
      this.cells = new Map();
      this.layoutFrame();
      w.globals.wccTree = root;
      state.geom = this.geom ? this.geom() : null;
      walk(root, n => {
        if (n === root) return;
        const p = el$2('path', {
          class: 'wcc-cell',
          fill: n.fill,
          'data-key': n.key,
          'data-depth': n.depth
        });
        p.wccNode = n;
        this.sg.appendChild(p);
        this.cells.set(n.key, p);
      });
      this.labels = el$2('g', {
        class: 'wcc-partition-labels',
        'pointer-events': 'none',
        'aria-hidden': 'true'
      });
      ret.node.appendChild(this.labels);
      this.decorate(ret);
      this.overlays();
      this.bind();
      this.visibleNodes = [];
      this.registerA11y();
      const view = this.viewFor(focus);
      const timing = drawTiming(w);
      // chart type switch (treemap <-> sunburst / icicle): the previous
      // geometry is of another kind and only reachable as outlines
      if (state.kind && state.kind !== this.kind) {
        state.view = null;
        state.shown = {};
      }
      state.kind = this.kind;
      const morphFrom = takeFrom(ctx, this.kind);
      const mc = morphFrom ? morphCfg(w) : null;
      const prevView = state.view;
      const prevShown = state.shown || {};
      this.view = view;
      state.view = view;
      if (morphFrom && mc.speed > 0) {
        this.frame(view, 1);
        const targets = new Map();
        this.cells.forEach((cell, key) => {
          if (cell.style.display === 'none') return;
          const pts = this.outline(cell.wccNode, view);
          if (pts) targets.set(key, {
            node: cell,
            pts,
            fill: cell.getAttribute('fill')
          });
        });
        this.labels.style.opacity = '0';
        run(ctx, morphFrom, targets, {
          layer: this.sg,
          duration: mc.speed,
          easing: easingFor(w, true),
          node: this.sg,
          onDone: () => {
            this.frame(view, 1);
            this.settle();
          }
        });
      } else if (timing.duration > 0 && (!timing.dynamic || !prevView)) {
        // enter: sweep in
        this.frame(view, 0.001);
        tween(ctx, {
          duration: timing.duration,
          easing: easingFor(w, false),
          node: this.sg,
          onUpdate: (tt, e) => this.frame(view, e),
          onDone: () => this.settle()
        });
      } else if (timing.duration > 0) {
        // data update: morph every node from its last geometry
        tween(ctx, {
          duration: timing.duration,
          easing: easingFor(w, true),
          node: this.sg,
          onUpdate: (tt, e) => this.frame(view, 1, prevShown, e),
          onDone: () => this.settle()
        });
        this.frame(view, 1, prevShown, 0);
      } else {
        this.frame(view, 1);
        this.settle();
      }
      this.rememberOutlines(view);
      return ret;
    }

    /** cell outline for type morphs (subclass): 2*EDGE points or null */
    outline() {
      return null;
    }

    /** record the end-state outlines for a later chart type morph */
    rememberOutlines(view) {
      const cells = new Map();
      this.cells.forEach((cell, key) => {
        const n = cell.wccNode;
        const pl = this.place(n, view);
        if (!pl.on) return;
        const pts = this.outline(n, view);
        if (pts) cells.set(key, {
          pts,
          fill: cell.getAttribute('fill') || n.fill
        });
      });
      remember(this.ctx, this.kind, cells);
    }

    /** compute geometry constants for the current size (subclass) */
    layoutFrame() {}
    decorate() {}

    /** draw every cell for view `v`; p = enter progress; prev/e = morph */
    frame(v, p, prev, e) {
      const shown = {};
      this.cells.forEach((cell, key) => {
        const n = cell.wccNode;
        let pl = this.place(n, v);
        if (prev && e !== undefined && e < 1) {
          const a = prev[key];
          const b = pl;
          const from = a || {
            u0: b.u0,
            u1: b.u0,
            r0: b.r0,
            r1: b.r1,
            on: b.on
          };
          pl = {
            u0: from.u0 + (b.u0 - from.u0) * e,
            u1: from.u1 + (b.u1 - from.u1) * e,
            r0: from.r0 + (b.r0 - from.r0) * e,
            r1: from.r1 + (b.r1 - from.r1) * e,
            on: b.on || from.on
          };
          pl.on = pl.u1 - pl.u0 > 1e-6;
        }
        shown[key] = pl;
        if (!pl.on) {
          cell.style.display = 'none';
          cell.removeAttribute('d');
          return;
        }
        cell.style.removeProperty('display');
        cell.setAttribute('d', this.cellPath(pl, p, v));
      });
      this.ctx._wccPartition.shown = shown;
      this.labels.style.opacity = '0';
    }

    /** after a transition: labels, a11y order, centre */
    settle() {
      const v = this.view;
      this.rememberOutlines(v);
      while (this.labels.firstChild) this.labels.removeChild(this.labels.firstChild);
      const list = [];
      this.cells.forEach(cell => {
        const n = cell.wccNode;
        cell.removeAttribute('j');
        cell.removeAttribute('tabindex');
        const pl = this.place(n, v);
        if (!pl.on || cell.style.display === 'none') return;
        list.push(n);
      });
      list.forEach((n, j) => this.cells.get(n.key).setAttribute('j', j));
      this.visibleNodes = list;
      if (this.labelsOn()) {
        list.forEach(n => {
          const lab = this.cellLabel(n, this.place(n, v));
          if (lab) this.labels.appendChild(lab);
        });
      }
      this.labels.style.removeProperty('opacity');
      if (this.labels.animate && drawTiming(this.w).duration > 0) {
        try {
          const anim = this.labels.animate([{
            opacity: 0
          }, {
            opacity: 1
          }], {
            duration: 180,
            easing: 'ease-out'
          });
          // in the chart's tween registry: cancelled on redraw / destroy
          // (a running animation keeps a detached chart alive)
          const reg = this.ctx._wccTweens || (this.ctx._wccTweens = new Set());
          reg.add(anim);
          anim.addEventListener('finish', () => reg.delete(anim));
          anim.addEventListener('cancel', () => reg.delete(anim));
        } catch (e) {
          /* ignore */
        }
      }
      this.updateCentre(null);
      this.registerA11y();
      this.renderCrumbs();
    }
    updateCentre() {}

    // ------------------------------------------------------------ labels

    labelStyle() {
      const dl = this.o.dataLabels || {};
      const st = dl.style || {};
      const size = parseFloat(st.fontSize) || 12;
      return {
        size,
        family: st.fontFamily || this.w.config.chart.fontFamily,
        weight: st.fontWeight || 500,
        colors: st.colors
      };
    }
    ink(n, k) {
      const st = this.labelStyle();
      if (Array.isArray(st.colors) && st.colors.length) return st.colors[k % st.colors.length];
      if (typeof st.colors === 'string') return st.colors;
      return inkOn(n.fill) || this.t.text;
    }

    /**
     * Opacity of the dimmed value line on a tile: `op`, or 1 where the dimmed ink would drop below
     * readability.minRatio (default 3) on the tile. dataLabels.readability / chart.readability
     * 'none' or false keep the dimmed look everywhere (docs/features/readability.md).
     */
    valueOpacity(n, ink, op) {
      var _readability;
      const c = this.w.config;
      const r = (_readability = (this.o.dataLabels || {}).readability) !== null && _readability !== void 0 ? _readability : c.chart.readability;
      if (r === false || r === 'none' || r && (r.mode === 'none' || r.enabled === false)) return op;
      const a = luminance(n.fill);
      const b = luminance(ink);
      if (a === null || b === null) return op;
      // approximate the sRGB (gamma-space) blend the browser actually paints
      const g = 1 / 2.2;
      const L = (b ** g * op + a ** g * (1 - op)) ** 2.2;
      return (Math.max(a, L) + 0.05) / (Math.min(a, L) + 0.05) < (r && r.minRatio || 3) ? 1 : op;
    }

    // ------------------------------------------------------------ overlays

    overlays() {
      const w = this.w;
      const wrap = w.globals.dom.elWrap;
      if (!wrap) return;
      // the floating tooltip below replaces the core one
      wrap.classList.add('wcc-partition-chart');
      wrap.querySelectorAll(':scope > .wcc-crumbs, :scope > .wcc-float-tt').forEach(n => n.remove());
      const t = this.t;
      const tt = document.createElement('div');
      tt.className = 'wcc-float-tt';
      tt.setAttribute('role', 'presentation');
      tt.setAttribute('aria-hidden', 'true');
      tt.style.cssText = `position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:12;` + `background:${t.surface};color:${t.text};border:1px solid ${t.grid};border-radius:8px;` + `box-shadow:0 6px 24px rgba(0,0,0,${t.mode === 'dark' ? 0.45 : 0.12});` + `font:12px ${w.config.chart.fontFamily || 'inherit'};transition:opacity .12s ease-out`;
      wrap.appendChild(tt);
      this.tt = tt;
      const crumbs = document.createElement('nav');
      crumbs.className = 'wcc-crumbs';
      crumbs.setAttribute('aria-label', 'Breadcrumb');
      crumbs.style.cssText = `position:absolute;z-index:11;display:none;font:12px ${w.config.chart.fontFamily || 'inherit'};color:${t.textMuted}`;
      wrap.appendChild(crumbs);
      this.crumbs = crumbs;
    }

    /** zoom on click (subclass: other option names) */
    zoomOn() {
      return this.o.zoomOnClick !== false;
    }

    /** breadcrumb options (subclass may override) */
    crumbCfg() {
      const bc = this.w.config.drilldown && this.w.config.drilldown.breadcrumb;
      return bc === false ? false : bc || {};
    }
    crumbsOn() {
      const bc = this.crumbCfg();
      return this.zoomOn() && bc !== false && !(bc && bc.show === false);
    }
    renderCrumbs() {
      const c = this.crumbs;
      if (!c) return;
      c.textContent = '';
      if (!this.crumbsOn() || this.focus === this.root) {
        c.style.display = 'none';
        return;
      }
      const bc = this.crumbCfg() || {};
      const sep = bc.separator || this.defaultSeparator || '/';
      const path = ancestors(this.focus);
      const pos = this.crumbPosition();
      c.style.left = pos.x + (bc.offsetX || 0) + 'px';
      c.style.top = pos.y + (bc.offsetY || 0) + 'px';
      c.style.display = 'flex';
      c.style.alignItems = 'center';
      c.style.gap = '6px';
      path.forEach((n, k) => {
        const last = k === path.length - 1;
        const label = typeof bc.formatter === 'function' ? String(bc.formatter(n.name, {
          node: n,
          depth: n.depth,
          index: k,
          data: n.raw
        })) : n.name;
        if (last) {
          const s = document.createElement('span');
          s.textContent = label;
          s.setAttribute('aria-current', 'location');
          s.style.cssText = `color:${this.t.text};font-weight:600`;
          c.appendChild(s);
        } else {
          const b = document.createElement('button');
          b.type = 'button';
          b.textContent = label;
          b.className = 'wcc-crumb';
          b.style.cssText = `all:unset;cursor:pointer;color:${this.t.textMuted};border-radius:4px;padding:1px 3px`;
          b.addEventListener('click', e => {
            e.stopPropagation();
            this.zoomTo(n, e);
          });
          c.appendChild(b);
          const s = document.createElement('span');
          s.textContent = sep;
          s.setAttribute('aria-hidden', 'true');
          s.style.opacity = '0.6';
          c.appendChild(s);
        }
      });
    }
    crumbPosition() {
      const gl = this.w.globals;
      return {
        x: gl.translateX,
        y: Math.max(4, gl.translateY - 4)
      };
    }

    // ------------------------------------------------------------ events

    bind() {
      const sg = this.sg;
      const hit = e => {
        let n = e.target && e.target.wccNode;
        if (!n && e.wccKeyboard) {
          const a = this.ctx.a11y && this.ctx.a11y.state;
          if (a && this.visibleNodes) n = this.visibleNodes[a.j];
        }
        return n || null;
      };
      sg.addEventListener('mousemove', e => {
        const n = hit(e);
        if (n) this.hover(n, e);
      });
      sg.addEventListener('mouseout', e => {
        if (e.relatedTarget && sg.contains(e.relatedTarget)) return;
        this.hover(null);
      });
      sg.addEventListener('click', e => {
        const n = hit(e);
        if (n) this.click(n, e);
      });
      this.bindExtra();
    }
    bindExtra() {}
    hover(n, e) {
      const root = this.ret.node;
      if (!n) {
        root.classList.remove('wcc-hovering');
        this.cells.forEach(c => c.classList.remove('wcc-on'));
        if (this.tt) this.tt.style.opacity = '0';
        this.updateCentre(null);
        return;
      }
      if (this._hovered !== n) {
        const on = new Set(ancestors(n).map(a => a.key));
        this.cells.forEach((c, k) => c.classList.toggle('wcc-on', on.has(k)));
        root.classList.add('wcc-hovering');
        this._hovered = n;
      }
      this.updateCentre(n);
      this.showTooltip(n, e);
    }
    tooltipHTML(n) {
      const w = this.w;
      if (typeof w.config.tooltip.custom === 'function' && !w.config.tooltip.custom.wccDefault) {
        const out = String(w.config.tooltip.custom({
          node: n,
          path: ancestors(n).slice(1).map(a => a.name),
          depth: n.depth,
          w
        }));
        // same contract as the core tooltip: custom markup is sanitized unless chart.sanitizeHtml is false
        const mode = w.config.chart.sanitizeHtml;
        if (mode === false) return out;
        if (typeof mode === 'function') {
          const r = mode(out, {
            svg: false
          });
          if (r && r.nodeType) {
            const d = document.createElement('div');
            d.appendChild(r);
            return d.innerHTML;
          }
          return r === null || r === undefined ? '' : String(r);
        }
        const S = this.ctx.constructor && this.ctx.constructor.sanitizeHtml;
        return typeof S === 'function' ? S(out) : _3(out);
      }
      const share = (a, b) => b > 0 ? groupedNumber(a / b * 100, 1) + '%' : '–';
      const rows = [`<div style="display:flex;gap:14px;justify-content:space-between"><span style="opacity:.75">Value</span><b>${_3(this.fmt(n.value, n))}</b></div>`];
      if (n.parent && n.parent !== this.root) {
        rows.push(`<div style="display:flex;gap:14px;justify-content:space-between;opacity:.72"><span>Share of ${_3(n.parent.name)}</span><span>${share(n.value, n.parent.value)}</span></div>`);
      }
      rows.push(`<div style="display:flex;gap:14px;justify-content:space-between;opacity:.72"><span>Share of total</span><span>${share(n.value, this.root.value)}</span></div>`);
      if (n.children.length) {
        rows.push(`<div style="display:flex;gap:14px;justify-content:space-between;opacity:.72"><span>Children</span><span>${n.children.length}</span></div>`);
      }
      const crumb = ancestors(n).slice(1, -1).map(a => _3(a.name)).join(' › ');
      return `<div style="padding:8px 11px 9px;min-width:150px;font-variant-numeric:tabular-nums;line-height:1.55">` + (crumb ? `<div style="opacity:.6;font-size:11px">${crumb}</div>` : '') + `<div style="display:flex;align-items:center;gap:7px;font-weight:600;margin-bottom:2px">` + `<span style="width:8px;height:8px;border-radius:2px;background:${_4(n.fill)}"></span>${_3(n.name)}</div>` + rows.join('') + '</div>';
    }
    showTooltip(n, e) {
      const w = this.w;
      const tt = this.tt;
      if (!tt || w.config.tooltip.enabled === false) return;
      if (this._ttNode !== n) {
        tt.innerHTML = _7(this.tooltipHTML(n));
        this._ttNode = n;
      }
      const wrap = w.globals.dom.elWrap;
      const r = wrap.getBoundingClientRect();
      let x = (e && finite$4(e.clientX) ? e.clientX : r.left) - r.left;
      let y = (e && finite$4(e.clientY) ? e.clientY : r.top) - r.top;
      const tw = tt.offsetWidth || 170;
      const th = tt.offsetHeight || 90;
      x = x + 14 + tw > r.width ? x - tw - 14 : x + 14;
      y = Math.max(4, Math.min(r.height - th - 4, y - th / 2));
      tt.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px)`;
      tt.style.opacity = '1';
    }
    click(n, e) {
      const w = this.w;
      const payload = {
        node: n,
        path: ancestors(n).slice(1).map(a => a.name),
        depth: n.depth,
        seriesIndex: 0,
        dataPointIndex: this.visibleNodes ? this.visibleNodes.indexOf(n) : -1,
        w
      };
      if (typeof w.config.chart.events.dataPointSelection === 'function') w.config.chart.events.dataPointSelection(e, this.ctx, payload);
      this.ctx.events.fireEvent('dataPointSelection', [e, this.ctx, payload]);
      if (!this.zoomOn()) return;
      if (n === this.focus && n !== this.root) this.zoomTo(n.parent, e);else if (n.children.length) this.zoomTo(n, e);
    }
    zoomTo(n, e) {
      if (!n || n === this.focus) return;
      const w = this.w;
      const ctx = this.ctx;
      const from = this.view;
      const prevFocus = this.focus;
      this.focus = n;
      ctx._wccPartition.focusKey = n.key;
      const to = this.viewFor(n);
      this.view = to;
      ctx._wccPartition.view = to;
      this.hover(null);
      const up = n.depth < prevFocus.depth;
      const info = {
        level: n.depth,
        path: ancestors(n).slice(1).map(a => a.name),
        node: n
      };
      const fire = name => {
        if (typeof w.config.chart.events[name] === 'function') w.config.chart.events[name](ctx, info);
        ctx.events.fireEvent(name, [ctx, info]);
      };
      fire(this.zoomEvent);
      fire(up ? 'drillup' : 'drilldown');
      const dur = interactionDuration(w);
      while (this.labels.firstChild) this.labels.removeChild(this.labels.firstChild);
      if (!dur) {
        this.frame(to, 1);
        this.settle();
        return;
      }
      tween(ctx, {
        duration: dur,
        easing: easingFor(w, true),
        node: this.sg,
        onUpdate: (tt, k) => this.zoomFrame(from, to, k),
        onDone: () => {
          this.frame(to, 1);
          this.settle();
        }
      });
    }

    /** one frame of a zoom transition between two views */
    zoomFrame(from, to, k) {
      this.frame({
        x0: from.x0 + (to.x0 - from.x0) * k,
        x1: from.x1 + (to.x1 - from.x1) * k,
        shift: from.shift + (to.shift - from.shift) * k,
        rings: from.rings + (to.rings - from.rings) * k
      }, 1);
    }

    // ------------------------------------------------------------ a11y

    registerA11y() {
      const w = this.w;
      const list = this.visibleNodes || [];
      const share = n => this.root.value > 0 ? groupedNumber(n.value / this.root.value * 100, 1) + '%' : '';
      w.globals.wccA11y = {
        values: () => list.map(n => n.value),
        category: (s, j) => list[j] ? this.pathLabel(list[j]) : undefined,
        value: (s, j) => {
          const n = list[j];
          if (!n) return undefined;
          return `${this.fmt(n.value, n)} (${share(n)} of total)` + (n.children.length ? `, ${n.children.length} children` : '');
        },
        element: (s, j) => list[j] ? this.cells.get(list[j].key) : null,
        table: () => {
          const rows = [];
          walk(this.root, n => {
            if (n === this.root) return;
            rows.push([this.pathLabel(n), this.fmt(n.value, n), share(n)]);
          });
          return {
            head: ['Path', w.globals.seriesNames[0] || 'Value', 'Share'],
            rows
          };
        }
      };
    }
  }

  /*
   * West Coast Charts - sunburst renderer (docs/spec/02-chart-types/sunburst.md).
   * Concentric rings over the shared partition model (./Partition): arcs with
   * constant pixel gaps and rounded corners, labels that pick the tangential
   * or radial direction that fits (or hide), centre value, zoom on click.
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  const RAD = Math.PI / 180;
  const pct$2 = (v, total) => {
    if (typeof v === 'string' && v.indexOf('%') > -1) return parseFloat(v) / 100 * total;
    const n = parseFloat(v);
    return finite$4(n) ? n : 0;
  };
  class Sunburst extends Partition {
    constructor(ctx) {
      super(ctx);
      this.kind = 'sunburst';
      this.defaultLeaf = 'extend';
      this.zoomEvent = 'sunburstZoom';
    }
    static uses(w) {
      return w.config.chart.requestedType === 'sunburst';
    }
    layoutFrame() {
      const w = this.w;
      const o = this.o;
      const gw = w.globals.gridWidth;
      const gh = w.globals.gridHeight;
      let A0 = finite$4(+o.startAngle) ? +o.startAngle : 0;
      let A1 = finite$4(+o.endAngle) ? +o.endAngle : 360;
      if (A1 <= A0) A1 = A0 + 360;
      if (A1 - A0 > 360) A1 = A0 + 360;
      this.A0 = A0 * RAD;
      this.A1 = A1 * RAD;
      // fit the sector's bounding box into the plot
      const hole = Math.max(0, Math.min(0.9, pct$2(o.innerSize === undefined ? '15%' : o.innerSize, 100) / 100));
      const pts = [];
      const at = (r, a) => pts.push([r * Math.sin(a), -r * Math.cos(a)]);
      at(1, this.A0);
      at(1, this.A1);
      for (let k = Math.ceil(A0 / 90); k * 90 <= A1; k++) at(1, k * 90 * RAD);
      if (hole > 0) {
        at(hole, this.A0);
        at(hole, this.A1);
      } else pts.push([0, 0]);
      if (A1 - A0 >= 359.99) pts.push([0, 0]);
      const xs = pts.map(p => p[0]);
      const ys = pts.map(p => p[1]);
      const bw = Math.max(...xs) - Math.min(...xs) || 2;
      const bh = Math.max(...ys) - Math.min(...ys) || 2;
      const pad = 2;
      const R = Math.max(10, Math.min((gw - pad * 2) / bw, (gh - pad * 2) / bh));
      this.R = R;
      this.r0 = hole * R;
      this.cx = gw / 2 - (Math.max(...xs) + Math.min(...xs)) / 2 * R + (o.offsetX || 0);
      this.cy = gh / 2 - (Math.max(...ys) + Math.min(...ys)) / 2 * R + (o.offsetY || 0);
    }
    geom() {
      return {
        cx: this.cx,
        cy: this.cy,
        R: this.R,
        r0: this.r0
      };
    }
    ringR(r, v) {
      return this.r0 + Math.max(0, r) * (this.R - this.r0) / Math.max(0.001, v.rings);
    }
    pt(r, a) {
      return [f2$3(this.cx + r * Math.sin(a)), f2$3(this.cy - r * Math.cos(a))];
    }
    angles(pl, p) {
      const span = (this.A1 - this.A0) * p;
      return [this.A0 + pl.u0 * span, this.A0 + pl.u1 * span];
    }
    outline(n, v) {
      const pl = this.place(n, v);
      const [a0, a1] = this.angles(pl, 1);
      const s = Math.max(0, +(this.o.spacing === undefined ? 1 : this.o.spacing));
      let ri = this.ringR(pl.r0, v);
      const ro = Math.max(ri + 0.5, this.ringR(pl.r1, v) - s / 2);
      if (ri > 0.5) ri += s / 2;
      return arcOutline(this.cx, this.cy, ri, ro, a0, a1);
    }
    cellPath(pl, p, v) {
      const [a0, a1] = this.angles(pl, p);
      let ri = this.ringR(pl.r0, v);
      let ro = this.ringR(pl.r1, v);
      const s = Math.max(0, +(this.o.spacing === undefined ? 1 : this.o.spacing));
      const full = a1 - a0 >= 2 * Math.PI - 1e-6;
      if (ri > 0.5) ri += s / 2;
      ro -= s / 2;
      if (ro - ri < 0.5) ro = ri + 0.5;
      if (full) {
        const ring = (r, rev) => {
          const [x, y] = this.pt(r, 0);
          const [x2, y2] = this.pt(r, Math.PI);
          return `M ${x} ${y} A ${f2$3(r)} ${f2$3(r)} 0 1 ${rev ? 0 : 1} ${x2} ${y2} A ${f2$3(r)} ${f2$3(r)} 0 1 ${rev ? 0 : 1} ${x} ${y} Z`;
        };
        return ring(ro, false) + (ri > 0.5 ? ' ' + ring(ri, true) : '');
      }
      const da = a1 - a0;
      let dOut = s / 2 / ro;
      let dIn = ri > 0.5 ? s / 2 / ri : 0;
      if (da - 2 * dOut <= 0.0005) dOut = da / 2 - 0.00025;
      if (da - 2 * dIn <= 0.0005) dIn = da / 2 - 0.00025;
      const o0 = a0 + dOut;
      const o1 = a1 - dOut;
      const i0 = a0 + dIn;
      const i1 = a1 - dIn;
      const outerLen = ro * (o1 - o0);
      const innerLen = ri * (i1 - i0);
      let rr = Math.max(0, +(this.o.borderRadius || 0));
      rr = Math.min(rr, (ro - ri) / 2, outerLen / 2, ri > 0.5 ? innerLen / 2 : outerLen / 2);
      const large = (a, b) => b - a > Math.PI ? 1 : 0;
      if (rr < 0.3) {
        const P1 = this.pt(ro, o0);
        const P2 = this.pt(ro, o1);
        if (ri <= 0.5) {
          const C = this.pt(0, 0);
          return `M ${C[0]} ${C[1]} L ${P1[0]} ${P1[1]} A ${f2$3(ro)} ${f2$3(ro)} 0 ${large(o0, o1)} 1 ${P2[0]} ${P2[1]} Z`;
        }
        const P3 = this.pt(ri, i1);
        const P4 = this.pt(ri, i0);
        return `M ${P1[0]} ${P1[1]} A ${f2$3(ro)} ${f2$3(ro)} 0 ${large(o0, o1)} 1 ${P2[0]} ${P2[1]} ` + `L ${P3[0]} ${P3[1]} A ${f2$3(ri)} ${f2$3(ri)} 0 ${large(i0, i1)} 0 ${P4[0]} ${P4[1]} Z`;
      }
      // rounded corners: pull back along both edges by rr, quadratic through the corner
      const ao = rr / ro;
      const ai = ri > 0.5 ? rr / ri : 0;
      const A = this.pt(ro - rr, o0);
      const B = this.pt(ro, o0 + ao);
      const Cc = this.pt(ro, o1 - ao);
      const D = this.pt(ro - rr, o1);
      const K1 = this.pt(ro, o0);
      const K2 = this.pt(ro, o1);
      let d = `M ${A[0]} ${A[1]} Q ${K1[0]} ${K1[1]} ${B[0]} ${B[1]} ` + `A ${f2$3(ro)} ${f2$3(ro)} 0 ${large(o0 + ao, o1 - ao)} 1 ${Cc[0]} ${Cc[1]} ` + `Q ${K2[0]} ${K2[1]} ${D[0]} ${D[1]} `;
      if (ri <= 0.5) {
        const C = this.pt(0, 0);
        return d + `L ${C[0]} ${C[1]} Z`;
      }
      const E = this.pt(ri + rr, i1);
      const F = this.pt(ri, i1 - ai);
      const G = this.pt(ri, i0 + ai);
      const H = this.pt(ri + rr, i0);
      const K3 = this.pt(ri, i1);
      const K4 = this.pt(ri, i0);
      d += `L ${E[0]} ${E[1]} Q ${K3[0]} ${K3[1]} ${F[0]} ${F[1]} ` + `A ${f2$3(ri)} ${f2$3(ri)} 0 ${large(i0 + ai, i1 - ai)} 0 ${G[0]} ${G[1]} ` + `Q ${K4[0]} ${K4[1]} ${H[0]} ${H[1]} Z`;
      return d;
    }
    cellLabel(n, pl) {
      const v = this.view;
      const st = this.labelStyle();
      const dl = this.o.dataLabels || {};
      const minAngle = finite$4(+dl.minAngleToShow) ? +dl.minAngleToShow : 8;
      const [a0, a1] = this.angles(pl, 1);
      const span = a1 - a0;
      const full = span >= 2 * Math.PI - 1e-6;
      if (!full && span / RAD < minAngle) return null;
      const ri = this.ringR(pl.r0, v);
      const ro = this.ringR(pl.r1, v);
      // labels of leaves that extend to the rim sit in their own ring band
      const T = ro - ri;
      const rm = (ri + ro) / 2;
      const base = st.size;
      const name = n.name;
      const ink = this.ink(n, n.depth);
      let am = full ? this.A1 - this.A0 >= 2 * Math.PI - 1e-6 ? 0 : (this.A0 + this.A1) / 2 : (a0 + a1) / 2;
      // chord available for straight tangential text at the mid radius
      const chord = full ? 2 * rm * 0.8 : 2 * rm * Math.sin(Math.min(Math.PI / 2, span / 2)) * 0.86;
      // never ellipsised: the whole name at the base size, tangential or
      // radial, else a smaller size down to the floor, else no label (the
      // tooltip and the data table carry the name)
      const floor = Math.min(base, finite$4(+dl.minFontSize) && +dl.minFontSize > 0 ? +dl.minFontSize : 9);
      let mode = null;
      let size = base;
      const text = name;
      for (let sz = base; sz >= floor - 1e-6 && !mode; sz -= 0.5) {
        const tw = textWidth(name, sz, st.weight);
        if (tw <= chord - 6 && T >= sz + 6) mode = 'tan';else if (tw <= T - 10 && rm * span >= sz + 2) mode = 'rad';
        if (mode) size = sz;
      }
      if (!mode) return null;
      const g = el$2('g', {
        class: 'wcc-partition-label'
      });
      let r = rm;
      let deg = am / RAD;
      let rot;
      if (mode === 'tan') {
        if (full) {
          r = rm;
          am = 0;
          deg = 0;
        }
        rot = deg;
        const norm = (deg % 360 + 360) % 360;
        if (norm > 90 && norm < 270) rot += 180;
      } else {
        rot = deg - 90;
        const norm = (deg % 360 + 360) % 360;
        if (norm > 180) rot += 180;
      }
      // value under the name when the band is roomy (tangential only)
      const valueText = this.fmt(n.value, n);
      const showValue = mode === 'tan' && n !== this.focus && dl.showValue !== false && T >= size * 2 + 12 && textWidth(valueText, size - 1) <= chord - 6;
      const [x, y] = this.pt(r, am);
      const flip = mode === 'tan' && rot !== deg;
      const line = (str, dy, cls, weight, sz, op) => el$2('text', {
        class: cls,
        x,
        y: f2$3(y + dy),
        'text-anchor': 'middle',
        'dominant-baseline': 'central',
        transform: `rotate(${f2$3(rot)} ${x} ${y})`,
        fill: ink,
        'fill-opacity': op,
        'font-size': sz,
        'font-weight': weight,
        'font-family': st.family,
        style: 'font-variant-numeric: tabular-nums'
      });
      const off = showValue ? size * 0.62 : 0;
      const t1 = line(text, (flip ? 1 : -1) * -0 - off, 'wcc-partition-name', st.weight, size, 1);
      t1.textContent = text;
      g.appendChild(t1);
      if (showValue) {
        const t2 = line(valueText, off, 'wcc-partition-value', 400, size - 1, this.valueOpacity(n, ink, 0.78));
        t2.textContent = valueText;
        g.appendChild(t2);
      }
      return g;
    }
    decorate(ret) {
      // centre: value of the focus / hovered node, click to go up
      const o = this.o;
      if (this.r0 < 30 || o.centerLabel && o.centerLabel.show === false) {
        this.centre = null;
        return;
      }
      const t = this.t;
      const g = el$2('g', {
        class: 'wcc-sunburst-centre'
      });
      const full = this.A1 - this.A0 >= 2 * Math.PI - 1e-6;
      const cy = full ? this.cy : this.cy - this.r0 * 0.35;
      const hit = el$2('circle', {
        cx: f2$3(this.cx),
        cy: f2$3(this.cy),
        r: f2$3(Math.max(0, this.r0 - 2)),
        fill: 'transparent',
        class: 'wcc-sunburst-centre-hit'
      });
      const size = Math.max(14, Math.min(28, this.r0 * 0.34));
      const v = el$2('text', {
        class: 'wcc-sunburst-centre-value',
        x: f2$3(this.cx),
        y: f2$3(cy - size * 0.18),
        'text-anchor': 'middle',
        'dominant-baseline': 'central',
        fill: t.text,
        'font-size': f2$3(size),
        'font-weight': 600,
        'font-family': this.w.config.chart.fontFamily,
        style: 'font-variant-numeric: tabular-nums; letter-spacing: -0.01em',
        'pointer-events': 'none'
      });
      const l = el$2('text', {
        class: 'wcc-sunburst-centre-label',
        x: f2$3(this.cx),
        y: f2$3(cy + size * 0.62),
        'text-anchor': 'middle',
        'dominant-baseline': 'central',
        fill: t.textMuted,
        'font-size': 11,
        'font-weight': 500,
        'font-family': this.w.config.chart.fontFamily,
        'pointer-events': 'none'
      });
      g.appendChild(hit);
      g.appendChild(v);
      g.appendChild(l);
      ret.node.appendChild(g);
      this.centre = {
        g,
        v,
        l,
        hit,
        size
      };
    }
    bindExtra() {
      if (!this.centre) return;
      this.centre.hit.addEventListener('click', e => {
        if (this.o.zoomOnClick === false || this.focus === this.root) return;
        this.zoomTo(this.focus.parent, e);
      });
    }
    updateCentre(n) {
      const c = this.centre;
      if (!c) return;
      const f = n || this.focus;
      const max = this.r0 * 1.6;
      // shrink to fit, never ellipsise; a label that cannot fit at 9px is hidden
      const fit = (node, str, base, weight, floor) => {
        let sz = base;
        while (sz > floor && textWidth(str, sz, weight) > max) sz -= 0.5;
        const ok = textWidth(str, sz, weight) <= max;
        node.textContent = ok ? str : '';
        node.setAttribute('font-size', f2$3(sz));
      };
      fit(c.v, this.fmt(f.value, f) || '', c.size, 600, 10);
      const label = n ? n.name : f === this.root ? 'Total' : f.name;
      fit(c.l, label || '', 11, 500, 9);
      c.hit.style.cursor = this.focus !== this.root && this.o.zoomOnClick !== false ? 'pointer' : '';
    }
  }

  /* chart.type 'sunburst' */
  var sunburst = {
    names: ['sunburst'],
    renderers: {
      treemap: Sunburst
    }
  };

  /*
   * West Coast Charts - icicle / flame graph renderer
   * (docs/spec/02-chart-types/icicle.md). Cartesian partition over the shared
   * engine (./Partition): one band per level, cells nested in their parent's
   * extent, zoom on the value axis (or value + depth), labels that align,
   * rotate on tall cells and hide below minSizeToShow.
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  const pct$1 = (v, total) => {
    if (typeof v === 'string' && v.indexOf('%') > -1) return parseFloat(v) / 100 * total;
    const n = parseFloat(v);
    return finite$4(n) ? n : null;
  };
  class Icicle extends Partition {
    constructor(ctx) {
      super(ctx);
      this.kind = 'icicle';
      this.defaultLeaf = 'stop';
      this.zoomEvent = 'icicleZoom';
    }
    static uses(w) {
      return w.config.chart.requestedType === 'icicle';
    }
    shiftFor(focus) {
      return this.o.zoomType === 'both' ? focus.depth - 1 : 0;
    }
    layoutFrame() {
      const w = this.w;
      const dir = ['down', 'up', 'right', 'left'].indexOf(this.o.direction) > -1 ? this.o.direction : 'down';
      this.dir = dir;
      this.vertical = dir === 'down' || dir === 'up'; // bands stacked vertically
      // the core gives treemap-like charts no top inset: keep a strip for
      // the toolbar and the breadcrumb (WCC)
      const tb = w.config.chart.toolbar;
      const need = tb && tb.show !== false || this.crumbsOn();
      this.top = need ? Math.min(30, w.globals.gridHeight * 0.15) : 0;
      this.W = w.globals.gridWidth;
      this.H = Math.max(10, w.globals.gridHeight - this.top);
    }
    geom() {
      return {
        W: this.W,
        H: this.H,
        dir: this.dir,
        top: this.top
      };
    }

    /** band thickness for a view */
    band(v) {
      const depthLen = this.vertical ? this.H : this.W;
      const ls = this.o.levelSize;
      if (ls !== undefined && ls !== 'equal') {
        const px = pct$1(ls, depthLen);
        if (px && px > 0) return Math.min(px, depthLen / Math.max(1, v.rings));
      }
      return depthLen / Math.max(0.001, v.rings);
    }

    /** placement -> rectangle in px */
    rect(pl, p, v) {
      const b = this.band(v);
      const valueLen = this.vertical ? this.W : this.H;
      let a0 = pl.u0 * valueLen;
      let a1 = pl.u1 * valueLen;
      // enter: cells unfold from the root edge, level by level
      const d0 = pl.r0 * b;
      let d1 = pl.r1 * b;
      if (p < 1) {
        const levels = Math.max(1, v.rings);
        const reach = p * levels;
        const k = Math.max(0, Math.min(1, reach - pl.r0));
        d1 = d0 + (d1 - d0) * k;
      }
      const depthLen = this.vertical ? this.H : this.W;
      let x, y, wd, ht;
      if (this.dir === 'down') [x, y, wd, ht] = [a0, d0, a1 - a0, d1 - d0];else if (this.dir === 'up') [x, y, wd, ht] = [a0, depthLen - d1, a1 - a0, d1 - d0];else if (this.dir === 'right') [x, y, wd, ht] = [d0, a0, d1 - d0, a1 - a0];else [x, y, wd, ht] = [depthLen - d1, a0, d1 - d0, a1 - a0];
      return {
        x,
        y: y + this.top,
        w: wd,
        h: ht
      };
    }
    outline(n, v) {
      const r = this.rect(this.place(n, v), 1, v);
      const s = Math.max(0, +(this.o.spacing === undefined ? 1 : this.o.spacing));
      // the deep edge plays the sunburst's outer edge
      return rectOutline(r.x + s / 2, r.y + s / 2, Math.max(0.5, r.w - s), Math.max(0.5, r.h - s), this.dir === 'down' ? 'bottom' : this.dir === 'right' ? 'right' : this.dir === 'left' ? 'left' : 'top');
    }
    cellPath(pl, p, v) {
      const r = this.rect(pl, p, v);
      const s = Math.max(0, +(this.o.spacing === undefined ? 1 : this.o.spacing));
      let x = r.x + s / 2;
      let y = r.y + s / 2;
      let wd = r.w - s;
      let ht = r.h - s;
      if (wd < 0.5) {
        x = r.x + r.w / 2 - 0.25;
        wd = 0.5;
      }
      if (ht < 0.5) {
        y = r.y + r.h / 2 - 0.25;
        ht = 0.5;
      }
      const rr = Math.max(0, Math.min(+(this.o.borderRadius || 0), wd / 2, ht / 2));
      if (rr < 0.3) return `M ${f2$3(x)} ${f2$3(y)} h ${f2$3(wd)} v ${f2$3(ht)} h ${f2$3(-wd)} Z`;
      return `M ${f2$3(x + rr)} ${f2$3(y)} H ${f2$3(x + wd - rr)} Q ${f2$3(x + wd)} ${f2$3(y)} ${f2$3(x + wd)} ${f2$3(y + rr)} ` + `V ${f2$3(y + ht - rr)} Q ${f2$3(x + wd)} ${f2$3(y + ht)} ${f2$3(x + wd - rr)} ${f2$3(y + ht)} ` + `H ${f2$3(x + rr)} Q ${f2$3(x)} ${f2$3(y + ht)} ${f2$3(x)} ${f2$3(y + ht - rr)} ` + `V ${f2$3(y + rr)} Q ${f2$3(x)} ${f2$3(y)} ${f2$3(x + rr)} ${f2$3(y)} Z`;
    }
    cellLabel(n, pl) {
      const v = this.view;
      const st = this.labelStyle();
      const dl = this.o.dataLabels || {};
      const min = finite$4(+dl.minSizeToShow) ? +dl.minSizeToShow : 30;
      const s = Math.max(0, +(this.o.spacing === undefined ? 1 : this.o.spacing));
      const r = this.rect(pl, 1, v);
      const wd = r.w - s;
      const ht = r.h - s;
      const base = st.size;
      const floor = Math.min(base, finite$4(+dl.minFontSize) && +dl.minFontSize > 0 ? +dl.minFontSize : 9);
      const value = this.fmt(n.value, n);
      const full = dl.showValue ? `${n.name}  ${value}` : n.name;
      const rotate = dl.rotate || 'auto';
      const pad = 6;
      // reading direction: horizontal unless rotated
      let turned = rotate === 'always';
      if (rotate === 'auto' && ht > wd && textWidth(full, base, st.weight) > wd - pad * 2 && ht >= min) turned = true;
      const along = turned ? ht : wd;
      const across = turned ? wd : ht;
      if (along < min || across < floor + 4) return null;
      const avail = along - pad * 2;
      const name = n.name;
      // never ellipsised: name (+ value) at the base size, the name alone,
      // then a smaller size down to the floor, else no label (tooltip/table)
      let size = base;
      let showValue = !!dl.showValue;
      if (textWidth(full, base, st.weight) > avail || across < base + 4) {
        showValue = false;
        let found = false;
        for (let sz = base; sz >= floor - 1e-6; sz -= 0.5) {
          if (textWidth(name, sz, st.weight) <= avail && across >= sz + 4) {
            size = sz;
            found = true;
            break;
          }
        }
        if (!found) return null;
      }
      const align = dl.align || 'center';
      const ink = this.ink(n, n.depth);
      const cx = r.x + s / 2 + wd / 2;
      const cy = r.y + s / 2 + ht / 2;
      let x;
      let y;
      let anchor = align === 'left' ? 'start' : align === 'right' ? 'end' : 'middle';
      if (!turned) {
        x = align === 'left' ? r.x + s / 2 + pad : align === 'right' ? r.x + s / 2 + wd - pad : cx;
        y = cy;
      } else {
        // quarter turn (reads bottom -> top): 'left' = bottom end
        x = cx;
        y = align === 'left' ? r.y + s / 2 + ht - pad : align === 'right' ? r.y + s / 2 + pad : cy;
      }
      const t = el$2('text', {
        class: 'wcc-partition-name',
        x: f2$3(x),
        y: f2$3(y),
        'text-anchor': anchor,
        'dominant-baseline': 'central',
        fill: ink,
        'font-size': size,
        'font-weight': st.weight,
        'font-family': st.family,
        style: 'font-variant-numeric: tabular-nums',
        transform: turned ? `rotate(-90 ${f2$3(x)} ${f2$3(y)})` : undefined
      });
      t.textContent = name;
      if (showValue) {
        const ts = el$2('tspan', {
          class: 'wcc-partition-value',
          'fill-opacity': this.valueOpacity(n, ink, 0.72),
          'font-weight': 400
        });
        ts.textContent = '  ' + value;
        t.appendChild(ts);
      }
      const g = el$2('g', {
        class: 'wcc-partition-label'
      });
      g.appendChild(t);
      return g;
    }
    crumbPosition() {
      const gl = this.w.globals;
      return {
        x: gl.translateX + 2,
        y: gl.translateY + Math.max(0, this.top / 2 - 9)
      };
    }
  }

  /* chart.type 'icicle' */
  var icicle = {
    names: ['icicle'],
    renderers: {
      treemap: Icicle
    }
  };

  /* chart.type 'streamgraph' (rangeArea + stream layout; decorated in annotatePoints) */
  var streamgraph = {
    names: ['streamgraph']
  };

  const SVGNS$2 = 'http://www.w3.org/2000/svg';
  const finite$3 = v => typeof v === 'number' && isFinite(v);
  const f2$2 = v => Math.round(v * 100) / 100;
  const el$1 = (name, attrs) => {
    const n = document.createElementNS(SVGNS$2, name);
    Object.keys(attrs || {}).forEach(k => attrs[k] !== undefined && n.setAttribute(k, attrs[k]));
    return n;
  };
  const EASINGS = {
    outCubic: easeOutCubic,
    inOutCubic: t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  };
  const outBack = s => t => 1 + (s + 1) * Math.pow(t - 1, 3) + s * Math.pow(t - 1, 2);
  const SPRINGS = {
    crisp: {
      k: 260,
      c: 26
    },
    gentle: {
      k: 120,
      c: 20
    },
    snappy: {
      k: 400,
      c: 30
    }
  };

  /** sampled damped spring 0 -> 1: { at(ms) -> [x, v], duration } */
  function springCurve(preset, v0 = 0) {
    const {
      k,
      c
    } = SPRINGS[preset] || SPRINGS.crisp;
    const dt = 1 / 240;
    let x = 0;
    let v = v0;
    const xs = [0];
    const vs = [v0];
    for (let i = 0; i < 240 * 2.5; i++) {
      const a = -k * (x - 1) - c * v;
      v += a * dt;
      x += v * dt;
      xs.push(x);
      vs.push(v);
      if (i > 24 && Math.abs(x - 1) < 0.0015 && Math.abs(v) < 0.01) break;
    }
    const duration = (xs.length - 1) * dt * 1000;
    return {
      duration,
      at(ms) {
        const i = Math.max(0, Math.min(xs.length - 1, Math.round(ms / 1000 / dt)));
        return [i === xs.length - 1 ? 1 : xs[i], vs[i]];
      }
    };
  }
  function paint(n, c) {
    if (n._wccOutline) n.setAttribute('stroke', c);else n.setAttribute('fill', c);
  }
  class Unit {
    static uses(w) {
      const t = w.config.chart.requestedType;
      return t === 'unit' || t === 'waffle';
    }
    constructor(ctx) {
      this.ctx = ctx;
      this.w = ctx.w;
      this.t = tokensOf(ctx.w);
    }
    get o() {
      return this.w.config.plotOptions.unit || {};
    }

    // ------------------------------------------------------------ model
    /** marks with stable ids, per the transition mode */
    marks(model) {
      const o = this.o;
      const out = [];
      let g = 0;
      model.categories.forEach((c, i) => {
        for (let k = 0; k < c.count; k++) {
          const d = c.items ? c.items[k] : null;
          let id;
          if (o.transition === 'flow') id = `f:${g}`;else if (o.transition === 'identity' && d && (d.id !== undefined || d.name !== undefined)) id = `i:${d.id !== undefined ? d.id : d.name}`;else id = `g:${c.name}:${k}`;
          out.push({
            id,
            cat: i,
            k,
            g,
            datum: d
          });
          g++;
        }
      });
      return out;
    }
    labelsOn() {
      const cl = this.o.clusterLabels || {};
      if (cl.show !== undefined) return cl.show !== false;
      if (this.o.positions) return false;
      const L = this.layoutName();
      if (L === 'scatter') return false;
      return L === 'grouped' || L === 'columns' || L === 'grid' && (this.o.grid || {}).split;
    }

    /** columns too narrow for "value · share" on one line: a third label line */
    narrowLabels(model, rect) {
      if (this.layoutName() !== 'columns' || !rect || !(rect.width > 0)) return false;
      const shown = model.categories.filter(c => !c.hidden);
      if (!shown.length) return false;
      const fs = this.labelFont();
      const longest = shown.reduce((m, c) => Math.max(m, `${this.fmtValue(c.value, 0)} · 100.0%`.length), 0);
      return longest * fs * 0.56 > rect.width / shown.length - 6;
    }
    layoutName() {
      return this.o.layout || 'grouped';
    }
    labelFont() {
      const cl = this.o.clusterLabels || {};
      return parseFloat(cl.fontSize) || 12;
    }
    layout(marks, model, rect) {
      const o = this.o;
      const L = this.layoutName();
      const cl = o.clusterLabels || {};
      const opts = {
        categories: model.categories.map(c => c.name),
        values: model.categories.map(c => c.value),
        spacing: o.spacing,
        size: o.size === 'auto' ? undefined : o.size,
        maxSize: 40,
        sortByGroup: o.sortByGroup,
        labelSpace: this.labelsOn() ? Math.round(this.labelFont() * (this.narrowLabels(model, rect) ? 3.6 : 2.4) + 8) : 0,
        labelPosition: cl.position || (L === 'columns' ? 'bottom' : 'top'),
        columns: o.columns,
        grid: o.grid,
        arc: o.arc,
        scatter: o.scatter,
        sizeByValue: o.sizeByValue
      };
      const pos = o.positions;
      const shape = pos && (pos.isUnitShape ? pos : typeof pos === 'string' ? unitShapes[pos] || shapeRef(pos) : null);
      if (shape) {
        if (marks.length < (shape.minUnits || 0) && !this.ctx._wccShapeWarned) {
          this.ctx._wccShapeWarned = true;
          console.warn(`WestCoastCharts: unit shape "${shape.name}" needs at least ${shape.minUnits} units to read as its outline.`);
        }
        const order = marks.slice().sort((a, b) => a.cat - b.cat || a.k - b.k);
        const f = fillOutline(shape, order.length, rect);
        return {
          points: order.map((m, k) => ({
            id: m.id,
            x: f.points[k] ? f.points[k].x : rect.x + rect.width / 2,
            y: f.points[k] ? f.points[k].y : rect.y + rect.height / 2,
            r: f.size
          })),
          clusters: [{
            cat: -1,
            cx: f.box.x + f.box.width / 2,
            cy: f.box.y + f.box.height / 2,
            r: 0,
            top: f.box.y,
            bottom: f.box.y + f.box.height
          }],
          size: f.size
        };
      }
      const fn = typeof pos === 'function' ? pos : typeof pos === 'string' ? customLayout(pos) : null;
      if (fn) {
        const objects = marks.map(m => ({
          id: m.id,
          seriesIndex: m.cat,
          index: m.k,
          name: model.categories[m.cat].name,
          value: m.datum ? m.datum.value : 1,
          datum: m.datum
        }));
        let res = [];
        try {
          res = fn(objects, {
            ...rect
          }) || [];
        } catch (e) {
          console.error(e);
        }
        const by = new Map(marks.map(m => [m.id, m]));
        const size = Math.max(1.5, Math.min(12, Math.sqrt(rect.width * rect.height / Math.max(1, marks.length)) * 0.35));
        const points = [];
        res.forEach(p => {
          if (!p || !by.has(p.id) || !finite$3(p.x) || !finite$3(p.y)) return;
          points.push({
            id: p.id,
            x: p.x,
            y: p.y,
            r: finite$3(p.r) && p.r > 0 ? p.r : size
          });
        });
        return {
          points,
          clusters: [],
          size
        };
      }
      const sized = o.sizeByValue && o.sizeByValue.enabled && marks.some(m => m.datum);
      switch (L) {
        case 'scatter':
          return scatterLayout(marks, rect, opts);
        case 'packed':
          return sized ? sizedLayout(marks, rect, opts, false) : packed$1(marks, rect, opts);
        case 'columns':
          return columns(marks, rect, opts);
        case 'grid':
          return opts.grid && opts.grid.split ? splitGrid(marks, rect, opts) : grid(marks, rect, opts);
        case 'arc':
          return arc(marks, rect, opts);
        default:
          return sized ? sizedLayout(marks, rect, opts, true) : grouped(marks, rect, opts);
      }
    }

    // ------------------------------------------------------------ drawing
    /** value axes for the scatter layout (tabular figures, theme ink) */
    drawAxes(ax) {
      const t = this.t;
      const fs = 11;
      const g = el$1('g', {
        class: 'wcc-unit-axes',
        'aria-hidden': 'true'
      });
      const P = ax.plot;
      const txt = (x, y, s, anchor, extra) => {
        const n = el$1('text', {
          x: f2$2(x),
          y: f2$2(y),
          'text-anchor': anchor,
          'font-size': fs,
          fill: t.textMuted || t.text,
          style: 'font-variant-numeric:tabular-nums',
          ...(extra || {})
        });
        n.textContent = s;
        g.appendChild(n);
        return n;
      };
      const line = (x1, y1, x2, y2, c, w) => g.appendChild(el$1('line', {
        x1: f2$2(x1),
        y1: f2$2(y1),
        x2: f2$2(x2),
        y2: f2$2(y2),
        stroke: c,
        'stroke-width': w || 1,
        'shape-rendering': 'crispEdges'
      }));
      ax.x.ticks.forEach(k => {
        if (ax.gridlines) line(k.px, P.y, k.px, P.y + P.height, t.grid);
        txt(k.px, P.y + P.height + 15, k.label, 'middle');
      });
      if (ax.x.title) txt(P.x + P.width / 2, P.y + P.height + 31, ax.x.title, 'middle', {
        'font-weight': 600
      });
      if (ax.y) {
        ax.y.ticks.forEach(k => {
          if (ax.gridlines) line(P.x, k.px, P.x + P.width, k.px, t.grid);
          txt(P.x - 6, k.px + 4, k.label, 'end');
        });
        if (ax.y.title) txt(0, 0, ax.y.title, 'middle', {
          'font-weight': 600,
          transform: `translate(${f2$2(P.x - (ax.y.off || 40))} ${f2$2(P.y + P.height / 2)}) rotate(-90)`
        });
      }
      (ax.lanes || []).forEach((l, i, L) => {
        const lane = {
          'font-weight': 600,
          fill: t.text
        };
        if (l.x !== undefined) {
          // vertical lanes (scatter.orientation 'vertical'): columns, names below
          if (i) line(l.x - (L[1].x - L[0].x) / 2, P.y, l.x - (L[1].x - L[0].x) / 2, P.y + P.height, t.grid);
          return txt(l.x, P.y + P.height + 15, l.name, 'middle', lane);
        }
        if (i) line(P.x, l.y - (L[1].y - L[0].y) / 2, P.x + P.width, l.y - (L[1].y - L[0].y) / 2, t.grid);
        txt(P.x - 8, l.y + 4, l.name, 'end', lane);
      });
      line(P.x, P.y + P.height, P.x + P.width, P.y + P.height, t.axis || t.grid);
      return g;
    }
    shapeKind() {
      const s = this.o.shape || 'circle';
      if (s === 'pictogram') return unitMark((this.o.pictogram || {}).mark) ? 'pictogram' : (this.o.pictogram || {}).fallback === 'square' ? 'square' : 'circle';
      if (s === 'image') return (this.o.image || {}).src ? 'image' : 'circle';
      return s === 'square' ? 'square' : 'circle';
    }
    makeMark(kind) {
      if (kind === 'square') return el$1('rect', {
        class: 'wcc-unit-mark'
      });
      if (kind === 'pictogram') {
        const m = unitMark(this.o.pictogram.mark);
        const p = el$1('path', {
          class: 'wcc-unit-mark',
          d: m.path
        });
        if (m.fillRule) p.setAttribute('fill-rule', m.fillRule);
        // WCC: pictogram.outline -> stroke-only icon, constant screen-px stroke
        const po = this.o.pictogram;
        if (po.outline) {
          p._wccOutline = true;
          p.setAttribute('vector-effect', 'non-scaling-stroke');
          p.setAttribute('stroke-width', f2$2(finite$3(po.outlineWidth) && po.outlineWidth > 0 ? po.outlineWidth : 1.5));
          p.setAttribute('stroke-linejoin', 'round');
          p.setAttribute('fill', 'none');
        }
        return p;
      }
      if (kind === 'image') {
        const img = el$1('image', {
          class: 'wcc-unit-mark',
          preserveAspectRatio: 'xMidYMid meet'
        });
        const href = _5(this.o.image.src);
        if (href) img.setAttribute('href', href);
        return img;
      }
      return el$1('circle', {
        class: 'wcc-unit-mark'
      });
    }
    place(node, kind, x, y, r) {
      r = Math.max(0, r);
      if (kind === 'circle') {
        node.setAttribute('cx', f2$2(x));
        node.setAttribute('cy', f2$2(y));
        node.setAttribute('r', f2$2(r));
      } else if (kind === 'square') {
        const s = r * 2;
        const br = finite$3(this.o.borderRadius) ? Math.min(this.o.borderRadius, s / 2) : s * 0.18;
        node.setAttribute('x', f2$2(x - r));
        node.setAttribute('y', f2$2(y - r));
        node.setAttribute('width', f2$2(s));
        node.setAttribute('height', f2$2(s));
        node.setAttribute('rx', f2$2(br));
      } else if (kind === 'pictogram') {
        const po = this.o.pictogram || {};
        const m = unitMark(po.mark);
        const [vx, vy, vw, vh] = m.viewBox;
        const pad = Math.max(0, Math.min(0.9, po.padding || 0));
        const box = r * 3 * (1 - pad) * (finite$3(po.scale) ? po.scale : 1);
        const k = po.fit === 'width' ? box / vw : po.fit === 'height' ? box / vh : box / Math.max(vw, vh);
        node.setAttribute('transform', `translate(${f2$2(x - vw * k / 2 - vx * k)} ${f2$2(y - vh * k / 2 - vy * k)}) scale(${Math.round(k * 10000) / 10000})`);
      } else if (kind === 'image') {
        const io = this.o.image || {};
        const s = r * 2;
        const wd = finite$3(io.width) ? Math.min(io.width, s) : s;
        const ht = finite$3(io.height) ? Math.min(io.height, s) : s;
        node.setAttribute('x', f2$2(x - wd / 2));
        node.setAttribute('y', f2$2(y - ht / 2));
        node.setAttribute('width', f2$2(wd));
        node.setAttribute('height', f2$2(ht));
      }
    }
    colorOf(m, model) {
      if (m.datum && m.datum.fillColor) return m.datum.fillColor;
      return model.categories[m.cat].color;
    }
    draw() {
      const w = this.w;
      const gl = w.globals;
      const ctx = this.ctx;
      const model = gl.wccUnit;
      const g = el$1('g', {
        class: 'apexcharts-treemap wcc-unit'
      });
      const elGraph = {
        node: g
      };
      if (!model) return g;
      const palette = gl.colors && gl.colors.length ? gl.colors : ['#2563eb'];
      model.categories.forEach((c, i) => {
        if (!c.userColor) c.userColor = c.color ? 'user' : 'auto';
        if (c.userColor === 'auto') c.color = palette[i % palette.length];
      });
      const W = Math.max(0, gl.gridWidth);
      const H = Math.max(0, gl.gridHeight);
      const rect = {
        x: 0,
        y: 0,
        width: W,
        height: H
      };
      const marks = this.marks(model);
      const L = W > 0 && H > 0 ? this.layout(marks, model, rect) : {
        points: [],
        clusters: [],
        size: 0
      };
      const byId = new Map(L.points.map(p => [p.id, p]));
      const kind = this.shapeKind();
      this.kind = kind;
      const series = el$1('g', {
        class: 'wcc-unit-series',
        role: 'presentation'
      });
      g.appendChild(series)
      // one (empty) series node per category: the core legend / toggleSeries
      // look categories up by seriesName
  ;
      (gl.seriesNames || []).forEach((name, i) => {
        const sn = el$1('g', {
          class: 'apexcharts-series wcc-unit-seriesref',
          seriesName: _0.escapeString(String(name)),
          'data:realIndex': i,
          rel: i + 1
        });
        if (gl.collapsedSeriesIndices && gl.collapsedSeriesIndices.indexOf(i) > -1) sn.classList.add('apexcharts-series-collapsed');
        g.appendChild(sn);
      });
      if (L.axes) series.appendChild(this.drawAxes(L.axes));
      const trackLayer = el$1('g', {
        class: 'wcc-unit-track',
        'aria-hidden': 'true'
      });
      const markLayer = el$1('g', {
        class: 'wcc-unit-marks'
      });
      const hitLayer = el$1('g', {
        class: 'wcc-unit-hulls'
      });
      series.appendChild(trackLayer);
      series.appendChild(markLayer);
      series.appendChild(hitLayer);
      const trackColor = this.o.grid && this.o.grid.trackColor || this.t.track;
      (L.track || []).forEach(p => {
        const tk = kind === 'pictogram' && this.o.pictogram.outline ? 'pictogram' : kind === 'image' || kind === 'pictogram' ? 'square' : kind === 'circle' && this.layoutName() !== 'grid' ? 'circle' : 'square';
        const n = this.makeMark(tk);
        paint(n, trackColor);
        n.setAttribute('class', 'wcc-unit-trackcell');
        this.place(n, tk === 'pictogram' ? tk : n.tagName === 'circle' ? 'circle' : 'square', p.x, p.y, p.r);
        trackLayer.appendChild(n);
      });
      // state of the previous draw (for morphs and interrupted motion)
      const state = ctx._wccUnit || (ctx._wccUnit = {
        pos: new Map(),
        v: 0
      });
      const prev = state.pos;
      const timing = drawTiming(w);
      const o = this.o;
      const gather = o.gather || {};
      const nodes = [];
      const clusterOf = new Map((L.clusters || []).map(c => [c.cat, c]));
      marks.forEach(m => {
        const p = byId.get(m.id);
        if (!p) return;
        const node = this.makeMark(kind);
        const color = this.colorOf(m, model);
        paint(node, color);
        node.setAttribute('data-cat', m.cat);
        node.setAttribute('data-k', m.k);
        if (kind === 'circle' || kind === 'square') {
          const sw = finite$3(o.strokeWidth) ? o.strokeWidth : 0;
          if (sw > 0) {
            node.setAttribute('stroke', this.t.surface);
            node.setAttribute('stroke-width', sw);
          }
        }
        markLayer.appendChild(node);
        const from = prev.get(m.id);
        let start;
        if (from) start = {
          ...from
        };else {
          const c = clusterOf.get(m.cat) || clusterOf.get(-1);
          const enter = gather.enter || 'burst';
          if (enter === 'burst' && c) start = {
            x: c.cx,
            y: c.cy,
            r: 0,
            color,
            op: 0.2
          };else if (enter === 'rise') start = {
            x: p.x,
            y: p.y + Math.max(12, p.r * 4),
            r: p.r,
            color,
            op: 0
          };else start = {
            x: p.x,
            y: p.y,
            r: p.r,
            color,
            op: 0
          };
        }
        nodes.push({
          m,
          node,
          from: start,
          to: {
            x: p.x,
            y: p.y,
            r: p.r,
            color,
            op: 1
          }
        });
      });
      // marks that left: fade out where they are
      const leaving = [];
      const live = new Set(nodes.map(n => n.m.id));
      prev.forEach((p, id) => {
        if (live.has(id) || !(timing.duration > 0)) return;
        const node = this.makeMark(kind);
        paint(node, p.color);
        node.setAttribute('class', 'wcc-unit-mark wcc-unit-leaving');
        node.setAttribute('pointer-events', 'none');
        markLayer.insertBefore(node, markLayer.firstChild);
        leaving.push({
          node,
          p
        });
      });
      this.nodes = nodes;
      this.model = model;
      this.layoutResult = L;
      this.root = g;
      this.markLayer = markLayer;
      this.hitLayer = hitLayer;
      // cancel a running gather and remember its velocity
      if (state.anim) {
        state.anim.cancel();
        state.anim = null;
      }
      const apply = (k, kc) => {
        nodes.forEach(n => {
          const a = n.from;
          const b = n.to;
          const x = a.x + (b.x - a.x) * k;
          const y = a.y + (b.y - a.y) * k;
          const r = a.r + (b.r - a.r) * Math.max(0, Math.min(1.2, k));
          this.place(n.node, kind, x, y, r);
          const op = a.op + (b.op - a.op) * Math.max(0, Math.min(1, kc));
          if (op < 0.999) n.node.style.opacity = String(f2$2(op));else n.node.style.removeProperty('opacity');
          let color = b.color;
          if (a.color && a.color !== b.color) {
            color = lerpColor(a.color, b.color, Math.max(0, Math.min(1, kc)));
            paint(n.node, color);
          }
          prev.set(n.m.id, {
            x,
            y,
            r,
            color,
            op
          });
        });
        leaving.forEach(l => {
          var _l$p$op;
          this.place(l.node, kind, l.p.x, l.p.y, l.p.r);
          l.node.style.opacity = String(f2$2(Math.max(0, ((_l$p$op = l.p.op) !== null && _l$p$op !== void 0 ? _l$p$op : 1) * (1 - Math.min(1, kc * 1.6)))));
        });
      };
      // reset the position memory to what is drawn now
      const ids = new Set(nodes.map(n => n.m.id));
      Array.from(prev.keys()).forEach(id => !ids.has(id) && prev.delete(id));
      const finish = () => {
        apply(1, 1);
        nodes.forEach(n => {
          n.node.style.removeProperty('opacity');
          paint(n.node, n.to.color);
        });
        leaving.forEach(l => l.node.remove());
        state.v = 0;
        state.anim = null;
        this.settle();
      };
      const dur = timing.duration;
      if (!(dur > 0) || !nodes.length && !leaving.length) {
        finish();
      } else {
        const custom = gather.easing && gather.easing !== 'outCubic';
        const motion = gather.motion || 'auto';
        const spring = motion === 'spring' || motion === 'auto' && !custom;
        if (spring) {
          const curve = springCurve(gather.spring || 'crisp', Math.min(4, Math.max(0, state.v || 0)));
          apply(0, 0);
          state.anim = tween(ctx, {
            duration: Math.max(dur * 0.6, Math.min(curve.duration, dur * 2.4)),
            easing: t => t,
            node: g,
            onUpdate: t => {
              const ms = t * Math.max(dur * 0.6, Math.min(curve.duration, dur * 2.4));
              const [x, v] = curve.at(ms * (curve.duration / Math.max(dur * 0.6, Math.min(curve.duration, dur * 2.4))));
              state.v = v / 8;
              apply(x, Math.min(1, x));
            },
            onDone: finish
          });
        } else {
          const ease = gather.easing === 'outBack' ? outBack(finite$3(gather.overshoot) ? gather.overshoot : 1.70158) : EASINGS[gather.easing] || easeOutCubic;
          apply(0, 0);
          state.anim = tween(ctx, {
            duration: dur,
            easing: ease,
            node: g,
            onUpdate: (t, k) => apply(k, Math.min(1, t * 1.4)),
            onDone: finish
          });
        }
        // labels and hulls are drawn now (no wait) when nothing moves far
        this.settle(true);
      }
      this.overlays();
      this.bind();
      this.registerA11y();
      return elGraph.node;
    }

    // ------------------------------------------------------------ labels, hulls
    settle(early) {
      if (this._drawn) return;
      this._drawn = true;
      this.drawLabels(!!early);
      this.drawHulls();
    }
    fmtValue(v, i) {
      const ty = this.w.config.tooltip && this.w.config.tooltip.y;
      const yf = ty && !Array.isArray(ty) ? ty.formatter : null;
      if (typeof yf === 'function') return String(yf(v, {
        seriesIndex: i,
        w: this.w
      }));
      return groupedNumber(v, 2);
    }
    percent(i) {
      const total = this.model.categories.reduce((a, c) => a + (c.hidden ? 0 : c.value), 0);
      return total > 0 ? this.model.categories[i].value / total * 100 : 0;
    }
    drawLabels(fadeIn) {
      const w = this.w;
      const old = this.root.querySelector('.wcc-unit-labels');
      if (old) old.remove();
      const L = this.layoutResult;
      const lg = el$1('g', {
        class: 'wcc-unit-labels',
        'aria-hidden': 'true'
      });
      const t = this.t;
      const cl = this.o.clusterLabels || {};
      const fs = this.labelFont();
      const family = cl.fontFamily || w.config.chart.fontFamily || 'inherit';
      const pos = cl.position || (this.layoutName() === 'columns' ? 'bottom' : 'top');
      // room per label: the distance to the nearest cluster on the same row
      const cls = (L.clusters || []).filter(c => c.cat >= 0);
      const slotOf = c => cls.reduce((m, d) => d === c || Math.abs((d.bottom || 0) - (c.bottom || 0)) > fs ? m : Math.min(m, Math.abs(d.cx - c.cx)), Infinity);
      const textW = str => String(str).length * fs * 0.56;
      if (this.labelsOn()) {
        (L.clusters || []).forEach(c => {
          if (c.cat < 0) return;
          const cat = this.model.categories[c.cat];
          if (!cat || cat.hidden) return;
          const opts = {
            seriesIndex: c.cat,
            value: cat.value,
            percent: this.percent(c.cat),
            w
          };
          const custom = typeof cl.formatter === 'function' ? cl.formatter(cat.name, opts) : null;
          const y = pos === 'bottom' ? c.bottom + fs * 1.25 + 4 + (cl.offsetY || 0) : c.top - fs * 1.15 - 6 + (cl.offsetY || 0);
          const text = el$1('text', {
            x: f2$2(c.cx),
            y: f2$2(y),
            'text-anchor': 'middle',
            'font-size': fs,
            'font-family': family,
            class: 'wcc-unit-label'
          });
          if (custom !== null && custom !== undefined) {
            text.setAttribute('fill', cl.color || t.text);
            text.setAttribute('font-weight', cl.fontWeight || 600);
            text.textContent = String(custom);
            lg.appendChild(text);
            return;
          }
          const name = el$1('tspan', {
            x: f2$2(c.cx),
            fill: cl.color || t.text,
            'font-weight': cl.fontWeight || 600
          });
          name.textContent = cat.name;
          const val = el$1('tspan', {
            x: f2$2(c.cx),
            dy: f2$2(fs * 1.3),
            fill: t.textMuted,
            'font-weight': 500,
            class: 'wcc-num'
          });
          const vText = this.fmtValue(cat.value, c.cat);
          const pText = `${groupedNumber(opts.percent, 1)}%`;
          const slot = slotOf(c) - 6;
          text.appendChild(name);
          text.appendChild(val);
          if (textW(`${vText} · ${pText}`) <= slot) val.textContent = `${vText} · ${pText}`;else {
            // narrow columns: value and share on their own lines, never across a neighbour
            val.textContent = vText;
            const pct = el$1('tspan', {
              x: f2$2(c.cx),
              dy: f2$2(fs * 1.2),
              fill: t.textMuted,
              'font-weight': 500,
              class: 'wcc-num'
            });
            pct.textContent = pText;
            text.appendChild(pct);
          }
          lg.appendChild(text);
        });
      }
      // arc: total in the middle of the hemicycle
      if (this.layoutName() === 'arc' && L.clusters && L.clusters[0] && L.clusters[0].inner > 24) {
        const c = L.clusters[0];
        const total = this.model.categories.reduce((a, k) => a + (k.hidden ? 0 : k.count), 0);
        const size = Math.max(14, Math.min(40, c.inner * 0.42));
        // Both lines belong inside the hemicycle; the baseline is the plot's
        // lower edge and the legend may start immediately below it.
        const labelY = c.cy - 8;
        const tv = el$1('text', {
          x: f2$2(c.cx),
          y: f2$2(labelY - size * 0.62 - 4),
          'text-anchor': 'middle',
          'font-size': f2$2(size),
          'font-weight': 650,
          fill: t.text,
          class: 'wcc-num wcc-unit-total',
          'font-family': family
        });
        tv.textContent = groupedNumber(total);
        const tl = el$1('text', {
          x: f2$2(c.cx),
          y: f2$2(labelY),
          'text-anchor': 'middle',
          'font-size': 11,
          'font-weight': 500,
          fill: t.textMuted,
          'font-family': family
        });
        tl.textContent = this.o.arc && this.o.arc.label || 'seats';
        lg.appendChild(tv);
        lg.appendChild(tl);
        // Measure in the chart's real SVG/CSS context. Narrow inner holes need
        // both lines scaled together, not pushed up into the surrounding seats.
        this.root.appendChild(lg);
        const temporary = !this.root.isConnected;
        if (temporary) w.globals.dom.elGraphical.node.appendChild(this.root);
        try {
          const f = fitArcLabelBox(lg.getBBox(), c.cx, c.cy, c.inner);
          if (f) lg.setAttribute('transform', `translate(${f.x} ${f.y}) scale(${f.k})`);
        } finally {
          if (temporary) this.root.remove();
        }
      }
      if (fadeIn) {
        const timing = drawTiming(w);
        if (timing.duration > 0) {
          lg.style.opacity = '0';
          tween(this.ctx, {
            duration: 240,
            delay: timing.duration * 0.6,
            node: lg,
            onUpdate: p => lg.style.opacity = String(p),
            onDone: () => lg.style.removeProperty('opacity')
          });
        }
      }
      this.root.appendChild(lg);
    }

    /** invisible hit / focus hulls per category (keyboard focus, hover) */
    drawHulls() {
      const hl = this.hitLayer;
      while (hl.firstChild) hl.removeChild(hl.firstChild);
      this.hulls = new Map();
      const L = this.layoutResult;
      const pts = new Map(L.points.map(p => [p.id, p]));
      this.model.categories.forEach((c, i) => {
        const own = this.nodes.filter(n => n.m.cat === i).map(n => pts.get(n.m.id)).filter(Boolean);
        if (!own.length) return;
        const x0 = Math.min(...own.map(p => p.x - p.r));
        const x1 = Math.max(...own.map(p => p.x + p.r));
        const y0 = Math.min(...own.map(p => p.y - p.r));
        const y1 = Math.max(...own.map(p => p.y + p.r));
        const hull = el$1('rect', {
          class: 'wcc-unit-hull',
          x: f2$2(x0 - 2),
          y: f2$2(y0 - 2),
          width: f2$2(Math.max(0, x1 - x0 + 4)),
          height: f2$2(Math.max(0, y1 - y0 + 4)),
          rx: 6,
          fill: 'none',
          'pointer-events': 'none',
          'data-cat': i
        });
        hl.appendChild(hull);
        this.hulls.set(i, hull);
      });
    }

    // ------------------------------------------------------------ interaction
    overlays() {
      const w = this.w;
      const wrap = w.globals.dom.elWrap;
      if (!wrap) return;
      wrap.classList.add('wcc-partition-chart', 'wcc-unit-chart');
      wrap.querySelectorAll(':scope > .wcc-float-tt').forEach(n => n.remove());
      const t = this.t;
      const tt = document.createElement('div');
      tt.className = 'wcc-float-tt';
      tt.setAttribute('aria-hidden', 'true');
      tt.style.cssText = `position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:12;` + `background:${t.surface};color:${t.text};border:1px solid ${t.grid};border-radius:8px;` + `box-shadow:0 6px 24px rgba(0,0,0,${t.mode === 'dark' ? 0.45 : 0.12});` + `font:12px ${w.config.chart.fontFamily || 'inherit'};transition:opacity .12s ease-out`;
      wrap.appendChild(tt);
      this.tt = tt;
    }
    tooltipHTML(cat, k) {
      const w = this.w;
      const c = this.model.categories[cat];
      const d = c.items ? c.items[k] : null;
      const pct = this.percent(cat);
      const tf = this.o.tooltip && this.o.tooltip.formatter;
      if (typeof tf === 'function') {
        const out = tf({
          seriesIndex: cat,
          dataPointIndex: k,
          datum: d,
          value: c.value,
          percent: pct,
          name: c.name,
          w
        });
        return `<div style="padding:8px 11px">${_3(String(out))}</div>`;
      }
      const row = (a, b, muted) => `<div style="display:flex;gap:14px;justify-content:space-between${muted ? ';opacity:.72' : ''}"><span>${_3(a)}</span><span>${_3(b)}</span></div>`;
      const rows = [];
      if (d && (d.name || d.label)) rows.push(row(String(d.name || d.label), d.value !== undefined ? this.fmtValue(d.value, cat) : ''));
      rows.push(row(c.items ? 'Count' : w.globals.seriesNames.length ? 'Value' : 'Value', this.fmtValue(c.value, cat)));
      rows.push(row('Share', groupedNumber(pct, 1) + '%', true));
      if (this.model.unitValue !== 1 || c.scaled) rows.push(row('One mark', `${groupedNumber(c.value / Math.max(1, c.count), 2)}`, true));
      return `<div style="padding:8px 11px 9px;min-width:140px;font-variant-numeric:tabular-nums;line-height:1.55">` + `<div style="display:flex;align-items:center;gap:7px;font-weight:600;margin-bottom:2px">` + `<span style="width:8px;height:8px;border-radius:50%;background:${_4(c.color)}"></span>${_3(c.name)}</div>` + rows.join('') + '</div>';
    }
    showTooltip(cat, k, e) {
      const w = this.w;
      const tt = this.tt;
      if (!tt || w.config.tooltip.enabled === false) return;
      const key = cat + ':' + k;
      if (this._ttKey !== key) {
        tt.innerHTML = _7(this.tooltipHTML(cat, k));
        this._ttKey = key;
      }
      const wrap = w.globals.dom.elWrap;
      const r = wrap.getBoundingClientRect();
      let x = (e && finite$3(e.clientX) ? e.clientX : r.left + r.width / 2) - r.left;
      let y = (e && finite$3(e.clientY) ? e.clientY : r.top + r.height / 2) - r.top;
      const tw = tt.offsetWidth || 160;
      const th = tt.offsetHeight || 80;
      x = x + 14 + tw > r.width ? x - tw - 14 : x + 14;
      y = Math.max(4, Math.min(r.height - th - 4, y - th / 2));
      tt.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px)`;
      tt.style.opacity = '1';
    }
    hideTooltip() {
      if (this.tt) this.tt.style.opacity = '0';
      this._ttKey = null;
    }
    highlight(cat) {
      if (this._hl === cat) return;
      this._hl = cat;
      const dim = 0.28;
      this.nodes.forEach(n => {
        if (cat === null || n.m.cat === cat) n.node.style.removeProperty('opacity');else n.node.style.opacity = String(dim);
      });
      this.root.classList.toggle('wcc-hovering', cat !== null);
    }
    bind() {
      const layer = this.markLayer;
      const at = e => {
        const t = e.target;
        if (!t || !t.getAttribute || !t.classList.contains('wcc-unit-mark') || t.classList.contains('wcc-unit-leaving')) return null;
        return {
          cat: parseInt(t.getAttribute('data-cat'), 10),
          k: parseInt(t.getAttribute('data-k'), 10)
        };
      };
      layer.addEventListener('mousemove', e => {
        const hit = at(e);
        if (!hit) return;
        if (this.o.hover === undefined || this.o.hover !== false) this.highlight(hit.cat);
        this.showTooltip(hit.cat, hit.k, e);
      });
      layer.addEventListener('mouseleave', () => {
        this.highlight(null);
        this.hideTooltip();
      });
      layer.addEventListener('click', e => {
        const hit = at(e);
        if (!hit) return;
        const w = this.w;
        const payload = {
          seriesIndex: hit.cat,
          dataPointIndex: hit.k,
          w
        };
        if (typeof w.config.chart.events.dataPointSelection === 'function') w.config.chart.events.dataPointSelection(e, this.ctx, payload);
        this.ctx.events.fireEvent('dataPointSelection', [e, this.ctx, payload]);
      });
    }

    // ------------------------------------------------------------ a11y
    registerA11y() {
      const w = this.w;
      const cats = this.model.categories;
      w.globals.wccA11y = {
        values: s => cats[s] && !cats[s].hidden ? [cats[s].value] : [],
        category: s => cats[s] ? cats[s].name : undefined,
        value: s => {
          const c = cats[s];
          if (!c) return undefined;
          const marks = c.count === c.value ? '' : `, ${groupedNumber(c.count)} marks`;
          return `${this.fmtValue(c.value, s)} (${groupedNumber(this.percent(s), 1)}%)${marks}`;
        },
        element: s => this.hulls && this.hulls.get(s) || null,
        table: () => ({
          head: ['Category', w.config.chart.requestedType === 'waffle' ? 'Value' : 'Count', 'Share'],
          rows: cats.filter(c => !c.hidden).map((c, i) => [c.name, this.fmtValue(c.value, i), groupedNumber(this.percent(cats.indexOf(c)), 1) + '%'])
        })
      };
    }
  }

  /*
   * West Coast Charts - static API of the chart types, installed on the
   * chart class: WCC.registerUnitLayout(name, fn), WCC.registerUnitMark(name,
   * mark), WCC.unitShapes (the shapes kit) and WCC.shapeFrom(rings).
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  function installTypeStatics(Cls) {
    if (!Cls || Cls.registerUnitLayout) return;
    Cls.registerUnitLayout = registerUnitLayout;
    Cls.registerUnitMark = registerUnitMark;
    Cls.unitShapes = unitShapes;
    Cls.shapeFrom = shapeFrom;
  }

  /* chart.type 'unit' / 'waffle', plus the unit statics (registerUnitLayout, ...) */
  var unit = {
    names: ['unit', 'waffle'],
    renderers: {
      treemap: Unit
    },
    statics: installTypeStatics
  };

  /*
   * West Coast Charts - nested treemap geometry
   * (docs/spec/02-chart-types/treemap-nested.md).
   * Squarified rows (Bruls, Huizing, van Wijk) applied recursively inside
   * each container's inner rect (after its header strip and padding).
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  const finite$2 = v => typeof v === 'number' && isFinite(v);
  function worst(row, side) {
    let s = 0;
    let mx = 0;
    let mn = Infinity;
    row.forEach(a => {
      s += a;
      if (a > mx) mx = a;
      if (a < mn) mn = a;
    });
    if (s <= 0 || side <= 0) return Infinity;
    const s2 = s * s;
    const w2 = side * side;
    return Math.max(w2 * mx / s2, s2 / (w2 * mn));
  }

  /**
   * Squarify `values` (any order) into rect {x, y, w, h}.
   * Returns rects in the input order. Items are laid out by descending value.
   */
  function squarify(values, rect) {
    const out = values.map(() => ({
      x: rect.x,
      y: rect.y,
      w: 0,
      h: 0
    }));
    const W = Math.max(0, rect.w);
    const H = Math.max(0, rect.h);
    const total = values.reduce((a, v) => a + (v > 0 ? v : 0), 0);
    if (!(total > 0) || W <= 0 || H <= 0) return out;
    const scale = W * H / total;
    const order = values.map((v, i) => ({
      i,
      a: (v > 0 ? v : 0) * scale
    })).filter(d => d.a > 0).sort((p, q) => q.a - p.a || p.i - q.i);
    let x = rect.x;
    let y = rect.y;
    let w = W;
    let h = H;
    let k = 0;
    while (k < order.length) {
      const side = Math.min(w, h);
      const row = [order[k].a];
      let j = k + 1;
      while (j < order.length) {
        const next = row.concat(order[j].a);
        if (worst(next, side) > worst(row, side)) break;
        row.push(order[j].a);
        j++;
      }
      const sum = row.reduce((a, v) => a + v, 0);
      if (w >= h) {
        // a column along the left edge
        const cw = j === order.length ? w : Math.min(w, sum / h);
        let at = y;
        for (let q = k; q < j; q++) {
          const ch = j === order.length && q === j - 1 ? y + h - at : order[q].a / cw;
          out[order[q].i] = {
            x,
            y: at,
            w: cw,
            h: ch
          };
          at += ch;
        }
        x += cw;
        w -= cw;
      } else {
        const rh = j === order.length ? h : Math.min(h, sum / w);
        let at = x;
        for (let q = k; q < j; q++) {
          const cw = j === order.length && q === j - 1 ? x + w - at : order[q].a / rh;
          out[order[q].i] = {
            x: at,
            y,
            w: cw,
            h: rh
          };
          at += cw;
        }
        y += rh;
        h -= rh;
      }
      k = j;
    }
    return out;
  }

  /**
   * Lay out the subtree of `focus` into `rect`.
   * cfg(levelIndex, node) -> { padding, header: { show, height, minWidth } }
   * gap: px between siblings.
   * Returns Map key -> { x, y, w, h, header: px | 0, level }
   */
  function layoutNested(focus, rect, cfg, gap = 2) {
    const out = new Map();
    const place = (n, r, level) => {
      const kids = n.children;
      if (!kids.length) return;
      const rects = squarify(kids.map(c => c.value), r);
      kids.forEach((c, i) => {
        const cr = rects[i];
        // gap: every cell gives up half the gap on each side
        const g = Math.min(gap / 2, cr.w / 4, cr.h / 4);
        const box = {
          x: cr.x + g,
          y: cr.y + g,
          w: Math.max(0, cr.w - 2 * g),
          h: Math.max(0, cr.h - 2 * g),
          header: 0,
          level
        };
        out.set(c.key, box);
        if (c.children.length) {
          const lc = cfg(level, c);
          const pad = finite$2(lc.padding) ? Math.max(0, lc.padding) : 4;
          const hd = lc.header || {};
          let head = 0;
          if (hd.show !== false) {
            const hh = finite$2(hd.height) ? hd.height : 22;
            const mw = finite$2(hd.minWidth) ? hd.minWidth : 40;
            // header only where there is room for it and for the children
            if (box.w >= mw && box.h >= hh + pad * 2 + 8) head = hh;
          }
          box.header = head;
          const p = Math.min(pad, box.w / 4, Math.max(0, (box.h - head) / 4));
          const inner = {
            x: box.x + p,
            y: box.y + (head || p),
            w: Math.max(0, box.w - 2 * p),
            h: Math.max(0, box.h - (head || p) - p)
          };
          box.inner = inner;
          place(c, inner, level + 1);
        }
      });
    };
    place(focus, rect, 0);
    return out;
  }

  /*
   * West Coast Charts - continuous colour scales (treemap colorValue,
   * gradient legend). Interpolation in OKLab so mid tones stay clean.
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  const finite$1 = v => typeof v === 'number' && isFinite(v);
  function parseColor(c) {
    if (typeof c !== 'string') return null;
    let s = c.trim();
    if (s[0] === '#') {
      s = s.slice(1);
      if (s.length === 3 || s.length === 4) s = s.split('').map(h => h + h).join('');
      if (s.length !== 6 && s.length !== 8) return null;
      const n = parseInt(s.slice(0, 6), 16);
      if (!finite$1(n)) return null;
      return [n >> 16 & 255, n >> 8 & 255, n & 255];
    }
    const m = s.match(/^rgba?\(([^)]+)\)/i);
    if (m) {
      const p = m[1].split(/[\s,/]+/).filter(Boolean).map(parseFloat);
      if (p.length >= 3 && p.slice(0, 3).every(finite$1)) return p.slice(0, 3);
    }
    return null;
  }
  const toLin = c => {
    c /= 255;
    return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  };
  const fromLin = c => {
    const v = c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
    return Math.max(0, Math.min(255, Math.round(v * 255)));
  };
  function toOklab(rgb) {
    const [r, g, b] = rgb.map(toLin);
    const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
    const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
    const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
    return [0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s, 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s, 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s];
  }
  function fromOklab([L, a, b]) {
    const l = Math.pow(L + 0.3963377774 * a + 0.2158037573 * b, 3);
    const m = Math.pow(L - 0.1055613458 * a - 0.0638541728 * b, 3);
    const s = Math.pow(L - 0.0894841775 * a - 1.291485548 * b, 3);
    const r = fromLin(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s);
    const g = fromLin(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s);
    const bl = fromLin(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s);
    return '#' + [r, g, bl].map(v => v.toString(16).padStart(2, '0')).join('');
  }
  function mixOklab(c1, c2, t) {
    const a = parseColor(c1);
    const b = parseColor(c2);
    if (!a || !b) return t < 0.5 ? c1 : c2;
    const A = toOklab(a);
    const B = toOklab(b);
    return fromOklab(A.map((v, i) => v + (B[i] - v) * t));
  }

  /**
   * Build a scale value -> colour.
   * cfg: { min, max, midpoint, symmetric, stops: [{value, color}] }
   * values: the data values (domain when min/max are not set)
   * theme: { mode, accent } for the default stops
   */
  function colorScale(values, cfg = {}, theme = {}) {
    const vals = values.filter(finite$1);
    let min = finite$1(cfg.min) ? cfg.min : vals.length ? Math.min(...vals) : 0;
    let max = finite$1(cfg.max) ? cfg.max : vals.length ? Math.max(...vals) : 1;
    if (min > max) [min, max] = [max, min];
    const straddles = min < 0 && max > 0;
    let mid = finite$1(cfg.midpoint) ? cfg.midpoint : straddles ? 0 : null;
    if (mid !== null && cfg.symmetric !== false && (cfg.symmetric || straddles)) {
      const r = Math.max(Math.abs(max - mid), Math.abs(mid - min));
      min = mid - r;
      max = mid + r;
    }
    if (max === min) {
      max = min + 1;
    }
    const dark = theme.mode === 'dark';
    let stops = Array.isArray(cfg.stops) && cfg.stops.length >= 2 ? cfg.stops.filter(s => s && finite$1(s.value) && parseColor(s.color)) : null;
    if (stops && stops.length >= 2) {
      stops = stops.slice().sort((a, b) => a.value - b.value);
      min = finite$1(cfg.min) ? cfg.min : stops[0].value;
      max = finite$1(cfg.max) ? cfg.max : stops[stops.length - 1].value;
    } else if (mid !== null) {
      // diverging: red - neutral - green (WCC palette)
      stops = [{
        value: min,
        color: dark ? '#f2555a' : '#dc3d43'
      }, {
        value: mid,
        color: dark ? '#3a3f4b' : '#e6e8ec'
      }, {
        value: max,
        color: dark ? '#3dd68c' : '#1f9d63'
      }];
    } else {
      const accent = theme.accent || '#2563eb';
      stops = [{
        value: min,
        color: mixOklab(accent, dark ? '#1b1f27' : '#ffffff', 0.82)
      }, {
        value: max,
        color: accent
      }];
    }
    const scale = v => {
      if (!finite$1(v)) return null;
      if (v <= stops[0].value) return stops[0].color;
      const last = stops[stops.length - 1];
      if (v >= last.value) return last.color;
      for (let i = 1; i < stops.length; i++) {
        const a = stops[i - 1];
        const b = stops[i];
        if (v <= b.value) return mixOklab(a.color, b.color, b.value === a.value ? 1 : (v - a.value) / (b.value - a.value));
      }
      return last.color;
    };
    scale.domain = [min, max];
    scale.midpoint = mid;
    scale.stops = stops;
    return scale;
  }

  /*
   * West Coast Charts - nested treemap renderer
   * (docs/spec/02-chart-types/treemap-nested.md): containers with header
   * strips and per-level padding, squarified children, zoom with breadcrumb,
   * continuous colour by a second metric with a gradient legend.
   * Shares tree, hover, tooltip, zoom, events and a11y with sunburst/icicle
   * (./Partition); geometry is rectangles instead of a unit partition.
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  const isObj = v => v !== null && typeof v === 'object' && !Array.isArray(v);
  const merge = (a, b) => {
    const out = {
      ...(a || {})
    };
    Object.keys(b || {}).forEach(k => {
      if (b[k] === undefined) return;
      out[k] = isObj(b[k]) && isObj(out[k]) ? merge(out[k], b[k]) : b[k];
    });
    return out;
  };
  const lerp = (a, b, k) => a + (b - a) * k;
  const LEGEND_H = 40;
  class NestedTreemap extends Partition {
    constructor(ctx) {
      super(ctx);
      this.kind = 'treemap';
      this.defaultLeaf = 'stop';
      this.zoomEvent = 'treemapZoom';
      this.defaultSeparator = '›';
    }
    static uses(w) {
      return isNestedTreemap(w);
    }

    // ------------------------------------------------------------ options

    zoomOn() {
      const z = this.o.zoom || {};
      return z.enabled !== false && this.o.zoomOnClick !== false;
    }
    crumbCfg() {
      const dd = this.w.config.drilldown && this.w.config.drilldown.breadcrumb;
      const z = (this.o.zoom || {}).breadcrumb;
      if (z === false || dd === false) return false;
      return merge({
        rootLabel: 'All',
        separator: '›'
      }, merge(isObj(dd) ? dd : {}, isObj(z) ? z : {}));
    }
    levelCfg(level) {
      this._lc = this._lc || new Map();
      if (this._lc.has(level)) return this._lc.get(level);
      const base = this.o.parents || {};
      const lv = Array.isArray(this.o.levels) && isObj(this.o.levels[level]) ? this.o.levels[level] : {};
      const c = merge(base, lv);
      this._lc.set(level, c);
      return c;
    }
    parentsShown() {
      const ps = (this.o.parents || {}).show;
      return ps === undefined || ps === 'auto' || ps === true;
    }
    gap() {
      const st = this.w.config.stroke;
      const sw = st && finite$4(+st.width) ? +st.width : 2;
      return Math.max(0, Math.min(8, sw));
    }

    // --------------------------------------------------------------- tree

    tree() {
      const w = this.w;
      const o = this.o;
      const src = nestedSource(w);
      const names = w.globals.seriesNames || [];
      const data = src.length > 1 ? src.map((d, i) => ({
        x: w.config.series[i] && w.config.series[i].name || names[i] || `Series ${i + 1}`,
        children: d
      })) : src[0] || [];
      const bc = this.crumbCfg() || {};
      const root = buildTree(data, {
        sort: o.sort === 'none' || o.sort === 'name' ? o.sort : 'value',
        tint: finite$4(o.tint) ? o.tint : 0,
        colors: w.globals.colors,
        drilldown: o.nested && o.nested.drilldownAsLevels ? w.config.drilldown : null,
        rootLabel: bc.rootLabel || 'All',
        tintDirection: this.t && this.t.mode === 'dark' ? 'dark' : 'light'
      });
      this.applyColorValue(root);
      return root;
    }

    /** continuous colour by a second metric (colorScale.colorValue) */
    applyColorValue(root) {
      const cs = this.o.colorScale || {};
      const cv = cs.colorValue;
      this.scale = null;
      if (cv === undefined || cv === null) return;
      const read = n => {
        if (typeof cv === 'function') return cv(n.raw, {
          node: n,
          w: this.w
        });
        return isObj(n.raw) ? n.raw[cv] : undefined;
      };
      const leaves = [];
      walk(root, n => {
        if (n === root) return;
        const v = +read(n);
        n.cv = finite$4(v) ? v : null;
        if (!n.children.length) leaves.push(n);
      });
      // branches without their own metric: value-weighted mean of the leaves
      walk(root, n => {
        if (n === root || !n.children.length || n.cv !== null) return;
        let s = 0;
        let wt = 0;
        n.children.forEach(c => {
          if (c.cv !== null && c.cv !== undefined) {
            s += c.cv * c.value;
            wt += c.value;
          }
        });
        n.cv = wt > 0 ? s / wt : null;
      }, true);
      const g = cs.gradient || {};
      if (g.enabled === false) return;
      const scale = colorScale(leaves.map(n => n.cv), g, {
        mode: this.t.mode,
        accent: (this.w.globals.colors || [])[0]
      });
      this.scale = scale;
      walk(root, n => {
        if (n === root) return;
        if (n.color) return;
        const c = n.cv === null ? null : scale(n.cv);
        n.fill = c || this.t.grid;
      });
    }

    // ------------------------------------------------------------- layout

    legendOn() {
      const gl = (this.o.colorScale || {}).gradientLegend || {};
      return !!this.scale && gl.enabled !== false;
    }
    layoutFrame() {
      const w = this.w;
      this.W = Math.max(0, w.globals.gridWidth);
      this.Hfull = Math.max(0, w.globals.gridHeight);
      this.legendH = this.legendOn() && this.Hfull > LEGEND_H * 3 ? LEGEND_H : 0;
    }
    topFor(focus) {
      return focus !== this.root && this.crumbsOn() ? Math.min(30, this.Hfull * 0.12) : 0;
    }
    canvasFor(focus) {
      const top = this.topFor(focus);
      return {
        x: 0,
        y: top,
        w: this.W,
        h: Math.max(0, this.Hfull - top - this.legendH)
      };
    }
    viewFor(focus) {
      const cfg = level => this.levelCfg(level);
      const gap = this.gap();
      const canvas = this.canvasFor(focus);
      const rects = new Map();
      const sub = layoutNested(focus, canvas, cfg, gap);
      if (focus !== this.root) {
        // everything outside the focus keeps its place relative to it: the
        // root layout, mapped so the focus' inner rect fills the canvas
        const all = layoutNested(this.root, this.canvasFor(this.root), cfg, gap);
        const fr = all.get(focus.key);
        const inner = fr && fr.inner || fr;
        if (inner && inner.w > 0 && inner.h > 0) {
          const sx = canvas.w / inner.w;
          const sy = canvas.h / inner.h;
          all.forEach((r, key) => {
            rects.set(key, {
              x: canvas.x + (r.x - inner.x) * sx,
              y: canvas.y + (r.y - inner.y) * sy,
              w: r.w * sx,
              h: r.h * sy,
              header: 0,
              level: -1,
              on: false
            });
          });
        }
      }
      sub.forEach((r, key) => rects.set(key, {
        ...r,
        on: r.w > 0.5 && r.h > 0.5
      }));
      return {
        focusKey: focus.key,
        rects
      };
    }
    place(n, v) {
      return v && v.rects && v.rects.get(n.key) || {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        on: false
      };
    }

    // --------------------------------------------------------------- draw

    decorate(ret) {
      const w = this.w;
      ret.node.classList.add('wcc-ntreemap');
      if (!this.parentsShown()) ret.node.classList.add('wcc-ntreemap-flatparents');
      // clip: zoomed-out neighbours fly off the canvas, not over the chart
      const id = `wccTmClip${w.globals.cuid}`;
      const defs = el$2('defs', {});
      const cp = el$2('clipPath', {
        id
      });
      this.clipRect = el$2('rect', {
        x: 0,
        y: 0,
        width: this.W,
        height: Math.max(0, this.Hfull - this.legendH)
      });
      cp.appendChild(this.clipRect);
      defs.appendChild(cp);
      ret.node.insertBefore(defs, ret.node.firstChild);
      this.sg.setAttribute('clip-path', `url(#${id})`);
      this.labels.setAttribute('clip-path', `url(#${id})`);
      const hov = (this.o.parents || {}).hover || {};
      ret.node.style.setProperty('--wcc-tm-hover', hov.color || this.t.text);
      ret.node.style.setProperty('--wcc-tm-hover-w', `${finite$4(hov.width) ? hov.width : 1.5}px`);
      if (hov.show === false) ret.node.classList.add('wcc-ntreemap-nohover');
      this.cells.forEach(cell => {
        const n = cell.wccNode;
        cell.classList.add(n.children.length ? 'wcc-tm-parent' : 'wcc-tm-leaf');
      });
      this.drawLegend(ret);
    }
    cellStyle(cell, n, r) {
      const leaf = !n.children.length;
      const t = this.t;
      const o = this.o;
      if (leaf) {
        cell.setAttribute('fill', n.fill);
        cell.removeAttribute('fill-opacity');
        return finite$4(o.borderRadius) ? o.borderRadius : 4;
      }
      const lc = this.levelCfg(Math.max(0, r.level || 0));
      if (!this.parentsShown()) {
        cell.setAttribute('fill', 'none');
        return 0;
      }
      const fo = finite$4(lc.fillOpacity) ? lc.fillOpacity : t.mode === 'dark' ? 0.16 : 0.1;
      cell.setAttribute('fill', this.scale && !n.color ? t.textMuted : n.fill);
      cell.setAttribute('fill-opacity', this.scale && !n.color ? fo * 0.6 : fo);
      if (lc.borderColor || finite$4(lc.borderWidth)) {
        cell.setAttribute('stroke', lc.borderColor || n.fill);
        cell.setAttribute('stroke-width', finite$4(lc.borderWidth) ? lc.borderWidth : 1);
        cell.setAttribute('vector-effect', 'non-scaling-stroke');
      }
      const br = finite$4(lc.borderRadius) ? lc.borderRadius : finite$4(o.borderRadius) ? o.borderRadius : 4;
      return br + 1;
    }
    outline(n, v) {
      const r = this.place(n, v);
      return r.on && r.w >= 0.5 && r.h >= 0.5 ? rectOutline(r.x, r.y, r.w, r.h) : null;
    }
    rectPath(x, y, wd, ht, rr) {
      rr = Math.max(0, Math.min(rr, wd / 2, ht / 2));
      if (rr < 0.3) return `M ${f2$3(x)} ${f2$3(y)} h ${f2$3(wd)} v ${f2$3(ht)} h ${f2$3(-wd)} Z`;
      return `M ${f2$3(x + rr)} ${f2$3(y)} H ${f2$3(x + wd - rr)} Q ${f2$3(x + wd)} ${f2$3(y)} ${f2$3(x + wd)} ${f2$3(y + rr)} ` + `V ${f2$3(y + ht - rr)} Q ${f2$3(x + wd)} ${f2$3(y + ht)} ${f2$3(x + wd - rr)} ${f2$3(y + ht)} ` + `H ${f2$3(x + rr)} Q ${f2$3(x)} ${f2$3(y + ht)} ${f2$3(x)} ${f2$3(y + ht - rr)} ` + `V ${f2$3(y + rr)} Q ${f2$3(x)} ${f2$3(y)} ${f2$3(x + rr)} ${f2$3(y)} Z`;
    }

    /** v = view; p = enter progress; prev/e = morph from the last geometry */
    frame(v, p, prev, e) {
      const shown = {};
      const maxLevel = Math.max(1, ...Array.from(v.rects.values()).map(r => (r.level || 0) + 1));
      this.cells.forEach((cell, key) => {
        const n = cell.wccNode;
        let r = this.place(n, v);
        let alpha = 1;
        if (prev && e !== undefined && e < 1) {
          const a = prev[key];
          if (a) {
            r = {
              ...r,
              x: lerp(a.x, r.x, e),
              y: lerp(a.y, r.y, e),
              w: lerp(a.w, r.w, e),
              h: lerp(a.h, r.h, e),
              on: r.on || a.on
            };
            if (!a.on && r.on) alpha = e;else if (a.on && !this.place(n, v).on) alpha = 1 - e;
          } else {
            // new node: grows out of its centre
            r = {
              ...r,
              x: r.x + r.w * (1 - e) / 2,
              y: r.y + r.h * (1 - e) / 2,
              w: r.w * e,
              h: r.h * e
            };
            alpha = e;
          }
        } else if (p < 1) {
          // enter: outer levels first, each cell grows from its centre
          const lv = Math.max(0, r.level || 0);
          const span = 0.55;
          const start = maxLevel > 1 ? lv / (maxLevel - 1) * (1 - span) : 0;
          const k = Math.max(0, Math.min(1, (p - start) / span));
          const q = 1 - Math.pow(1 - k, 3);
          r = {
            ...r,
            x: r.x + r.w * (1 - q) / 2,
            y: r.y + r.h * (1 - q) / 2,
            w: r.w * q,
            h: r.h * q
          };
          alpha = Math.min(1, k * 1.6);
        }
        shown[key] = {
          x: r.x,
          y: r.y,
          w: r.w,
          h: r.h,
          on: r.on,
          level: r.level,
          header: r.header
        };
        if (!r.on || r.w < 0.5 || r.h < 0.5) {
          cell.style.display = 'none';
          cell.removeAttribute('d');
          return;
        }
        cell.style.removeProperty('display');
        const rr = this.cellStyle(cell, n, r);
        cell.setAttribute('d', this.rectPath(r.x, r.y, r.w, r.h, rr));
        if (alpha < 1) cell.style.opacity = String(Math.max(0, alpha));else cell.style.removeProperty('opacity');
      });
      this.ctx._wccPartition.shown = shown;
      this.labels.style.opacity = '0';
    }
    zoomFrame(from, to, k) {
      const rects = new Map();
      const keys = new Set([...from.rects.keys(), ...to.rects.keys()]);
      keys.forEach(key => {
        const a = from.rects.get(key);
        const b = to.rects.get(key);
        if (a && b) rects.set(key, {
          ...b,
          x: lerp(a.x, b.x, k),
          y: lerp(a.y, b.y, k),
          w: lerp(a.w, b.w, k),
          h: lerp(a.h, b.h, k),
          on: a.on || b.on,
          level: b.on ? b.level : a.level
        });else if (b) rects.set(key, b);
      });
      this.frame({
        rects
      }, 1);
      this.cells.forEach((cell, key) => {
        const a = from.rects.get(key);
        const b = to.rects.get(key);
        const fa = a && a.on ? 1 : 0;
        const fb = b && b.on ? 1 : 0;
        if (fa !== fb) cell.style.opacity = String(lerp(fa, fb, k));
      });
    }
    settle() {
      this.cells.forEach(c => c.style.removeProperty('opacity'));
      super.settle();
    }

    // ------------------------------------------------------------- labels

    fitSize(texts, maxW, maxH, base, floor, weight) {
      for (let size = base; size >= floor - 1e-6; size -= 0.5) {
        const lines = texts.length;
        const need = lines * size * 1.25;
        if (need <= maxH && texts.every(s => textWidth(s, size, weight) <= maxW)) return size;
      }
      return 0;
    }
    floor() {
      const dl = this.o.dataLabels || {};
      if (finite$4(dl.minFontSize)) return Math.max(0.5, dl.minFontSize);
      return 9;
    }
    cellLabel(n, r) {
      if (n.children.length) return this.headerLabel(n, r);
      const st = this.labelStyle();
      const dl = this.o.dataLabels || {};
      const pad = r.w > 60 ? 8 : 5;
      const maxW = r.w - pad * 2;
      const maxH = r.h - pad * 1.2;
      if (maxW < 8 || maxH < 8) return null;
      const value = this.fmt(n.value, n);
      const fl = this.floor();
      let size = 0;
      let withValue = dl.showValue !== false;
      if (withValue) {
        size = this.fitSize([n.name, value], maxW, maxH, st.size, fl, st.weight);
        if (!size) withValue = false;
      }
      if (!size) size = this.fitSize([n.name], maxW, maxH, st.size, fl, st.weight);
      if (!size) return null;
      const ink = this.ink(n, n.depth);
      const align = dl.align || 'left';
      const x = align === 'center' ? r.x + r.w / 2 : r.x + pad;
      const lh = size * 1.25;
      const big = r.h > lh * 2 + pad * 3 && r.w > 70;
      // big cells read top-left (like a card); small ones are centred
      const y0 = big || align !== 'center' ? r.y + pad + size * 0.9 : r.y + r.h / 2 - (withValue ? lh / 2 : 0) + size * 0.35;
      const t = el$2('text', {
        class: 'wcc-partition-name',
        x: f2$3(x),
        y: f2$3(y0),
        'text-anchor': align === 'center' ? 'middle' : 'start',
        fill: ink,
        'font-size': size,
        'font-weight': st.weight,
        'font-family': st.family,
        style: 'font-variant-numeric: tabular-nums'
      });
      t.textContent = n.name;
      const g = el$2('g', {
        class: 'wcc-partition-label wcc-tm-label'
      });
      g.appendChild(t);
      if (withValue) {
        const tv = el$2('text', {
          class: 'wcc-partition-value',
          x: f2$3(x),
          y: f2$3(y0 + lh),
          'text-anchor': align === 'center' ? 'middle' : 'start',
          fill: ink,
          'fill-opacity': this.valueOpacity(n, ink, 0.78),
          'font-size': Math.max(fl, size - 0.5),
          'font-weight': 400,
          'font-family': st.family,
          style: 'font-variant-numeric: tabular-nums'
        });
        tv.textContent = value;
        g.appendChild(tv);
      }
      return g;
    }
    headerLabel(n, r) {
      if (!r.header || !this.parentsShown()) return null;
      const w = this.w;
      const lc = this.levelCfg(Math.max(0, r.level || 0));
      const hd = lc.header || {};
      if (hd.show === false) return null;
      const st = hd.style || {};
      const base = parseFloat(st.fontSize) || 11.5;
      const weight = +st.fontWeight || 600;
      const fam = st.fontFamily || w.config.chart.fontFamily;
      const pad = 8;
      const name = typeof hd.formatter === 'function' ? String(hd.formatter(n.name, {
        value: n.value,
        depth: n.depth,
        seriesIndex: 0,
        node: n,
        w
      })) : n.name;
      const value = hd.showValue ? this.fmt(n.value, n) : '';
      const maxW = r.w - pad * 2;
      const fl = Math.min(base, this.floor());
      let size = value ? this.fitSize([`${name}   ${value}`], maxW, r.header, base, fl, weight) : 0;
      const showValue = !!(value && size);
      if (!size) size = this.fitSize([name], maxW, r.header, base, fl, weight);
      if (!size) return null;
      const g = el$2('g', {
        class: 'wcc-partition-label wcc-tm-header'
      });
      if (st.background) {
        g.appendChild(el$2('rect', {
          x: f2$3(r.x),
          y: f2$3(r.y),
          width: f2$3(r.w),
          height: f2$3(r.header),
          fill: st.background,
          rx: 3
        }));
      }
      const align = hd.align || 'left';
      const x = (align === 'center' ? r.x + r.w / 2 : align === 'right' ? r.x + r.w - pad : r.x + pad) + (hd.offsetX || 0);
      const y = r.y + r.header / 2 + (hd.offsetY || 0) + 0.5;
      const color = st.color || this.t.text;
      const t = el$2('text', {
        class: `wcc-tm-header-name ${st.cssClass || ''}`.trim(),
        x: f2$3(x),
        y: f2$3(y),
        'text-anchor': align === 'center' ? 'middle' : align === 'right' ? 'end' : 'start',
        'dominant-baseline': 'central',
        fill: color,
        'font-size': size,
        'font-weight': weight,
        'font-family': fam,
        style: 'font-variant-numeric: tabular-nums'
      });
      t.textContent = name;
      g.appendChild(t);
      if (showValue) {
        const right = align !== 'right';
        const tv = el$2('text', {
          class: 'wcc-tm-header-value',
          x: f2$3(right ? r.x + r.w - pad : r.x + pad),
          y: f2$3(y),
          'text-anchor': right ? 'end' : 'start',
          'dominant-baseline': 'central',
          fill: st.color || this.t.textMuted,
          'font-size': size,
          'font-weight': 400,
          'font-family': fam,
          style: 'font-variant-numeric: tabular-nums'
        });
        tv.textContent = value;
        g.appendChild(tv);
      }
      return g;
    }

    // ------------------------------------------------------------ tooltip

    tooltipHTML(n) {
      const pt = ((this.o.parents || {}).tooltip || {}).formatter;
      if (n.children.length && typeof pt === 'function') {
        let leaves = 0;
        walk(n, c => {
          if (!c.children.length) leaves++;
        });
        return String(pt({
          name: n.name,
          value: n.value,
          depth: n.depth,
          leafCount: leaves,
          percentOfParent: n.parent && n.parent.value > 0 ? n.value / n.parent.value * 100 : 100,
          percentOfTotal: this.root.value > 0 ? n.value / this.root.value * 100 : 0,
          node: n,
          path: ancestors(n).slice(1).map(a => a.name),
          w: this.w
        }));
      }
      let html = super.tooltipHTML(n);
      if (this.scale && n.cv !== null && n.cv !== undefined) {
        const cs = this.o.colorScale || {};
        const label = typeof cs.colorValue === 'string' ? cs.colorValue : 'Colour';
        const row = `<div style="display:flex;gap:14px;justify-content:space-between;opacity:.72"><span>${_3(label)}</span><span>${_3(this.legendFmt(n.cv))}</span></div>`;
        html = html.replace(/<\/div>$/, row + '</div>');
      }
      return html;
    }
    hover(n, e) {
      super.hover(n, e);
      this.legendArrow(n);
    }

    // ------------------------------------------------------ gradient legend

    legendFmt(v) {
      const gl = (this.o.colorScale || {}).gradientLegend || {};
      if (typeof gl.formatter === 'function') return String(gl.formatter(v));
      return groupedNumber(v, Math.abs(v) < 10 ? 1 : 0);
    }
    drawLegend(ret) {
      this.legend = null;
      if (!this.legendH || !this.scale) return;
      const gl = (this.o.colorScale || {}).gradientLegend || {};
      const W = this.W;
      const lw = typeof gl.width === 'string' && gl.width.indexOf('%') > -1 ? parseFloat(gl.width) / 100 * W : finite$4(+gl.width) ? +gl.width : Math.min(320, W * 0.6);
      const th = finite$4(gl.thickness) ? gl.thickness : 10;
      const align = gl.align || 'center';
      const x0 = align === 'left' ? 0 : align === 'right' ? W - lw : (W - lw) / 2;
      const y0 = this.Hfull - this.legendH + 12;
      const g = el$2('g', {
        class: 'wcc-tm-gradient-legend',
        'aria-hidden': 'true'
      });
      const id = `wccTmGrad${this.w.globals.cuid}`;
      const defs = el$2('defs', {});
      const lg = el$2('linearGradient', {
        id,
        x1: 0,
        x2: 1,
        y1: 0,
        y2: 0
      });
      const [min, max] = this.scale.domain;
      const n = finite$4(gl.stops) ? Math.max(2, Math.min(64, gl.stops)) : 16;
      for (let i = 0; i < n; i++) {
        const v = min + (max - min) * i / (n - 1);
        lg.appendChild(el$2('stop', {
          offset: `${f2$3(i / (n - 1) * 100)}%`,
          'stop-color': this.scale(v)
        }));
      }
      defs.appendChild(lg);
      g.appendChild(defs);
      g.appendChild(el$2('rect', {
        x: f2$3(x0),
        y: f2$3(y0),
        width: f2$3(lw),
        height: th,
        rx: th / 2,
        fill: `url(#${id})`
      }));
      if (gl.showLabels !== false) {
        const ls = gl.labelStyle || {};
        const fs = parseFloat(ls.fontSize) || 11;
        const mk = (v, x, anchor) => {
          const t = el$2('text', {
            x: f2$3(x),
            y: f2$3(y0 + th + fs + 4),
            'text-anchor': anchor,
            fill: ls.color || this.t.textMuted,
            'font-size': fs,
            'font-family': ls.fontFamily || this.w.config.chart.fontFamily,
            style: 'font-variant-numeric: tabular-nums'
          });
          t.textContent = this.legendFmt(v);
          g.appendChild(t);
        };
        mk(min, x0, 'start');
        if (this.scale.midpoint !== null && this.scale.midpoint > min && this.scale.midpoint < max) {
          mk(this.scale.midpoint, x0 + (this.scale.midpoint - min) / (max - min) * lw, 'middle');
        }
        mk(max, x0 + lw, 'end');
      }
      const as = gl.arrow && gl.arrow.size || 7;
      const arrow = el$2('path', {
        class: 'wcc-tm-legend-arrow',
        d: `M ${-as / 2} ${-as * 0.9} L ${as / 2} ${-as * 0.9} L 0 0 Z`,
        fill: gl.arrow && gl.arrow.color || this.t.text,
        opacity: 0
      });
      g.appendChild(arrow);
      ret.node.appendChild(g);
      this.legend = {
        g,
        arrow,
        x0,
        y0,
        lw
      };
    }
    legendArrow(n) {
      const L = this.legend;
      const gl = (this.o.colorScale || {}).gradientLegend || {};
      if (!L || gl.showHoverValue === false) return;
      if (!n || n.cv === null || n.cv === undefined) {
        L.arrow.setAttribute('opacity', 0);
        return;
      }
      const [min, max] = this.scale.domain;
      const k = Math.max(0, Math.min(1, (n.cv - min) / (max - min)));
      L.arrow.setAttribute('transform', `translate(${f2$3(L.x0 + k * L.lw)} ${f2$3(L.y0 - 2)})`);
      L.arrow.setAttribute('opacity', 1);
    }
    crumbPosition() {
      const gl = this.w.globals;
      const bc = this.crumbCfg() || {};
      const y = gl.translateY + Math.max(0, this.topFor(this.focus) / 2 - 9);
      if (bc.position === 'top-right') {
        const wd = this.crumbs && this.crumbs.offsetWidth || 120;
        return {
          x: gl.translateX + this.W - wd,
          y
        };
      }
      return {
        x: gl.translateX + 2,
        y
      };
    }
  }

  /* nested treemaps: chart.type 'treemap' with data[].children */
  var nestedTreemap = {
    names: ['treemap'],
    renderers: {
      treemap: NestedTreemap
    }
  };

  /* chart.type 'barRace' */
  var barRace = {
    names: ['barRace']
  };

  /* chart.type 'calendar' */
  var calendar = {
    names: ['calendar']
  };

  /* chart.type 'slope' */
  var slope = {
    names: ['slope']
  };

  /*
   * West Coast Charts - beeswarm layout (own algorithm).
   *
   * Every observation keeps its exact position on the value axis; only the
   * cross-axis offset is solved. Points are placed in value order; for each
   * point the already placed neighbours closer than one diameter along the
   * value axis forbid an interval of cross offsets
   *   [c_j - h, c_j + h],  h = sqrt(d^2 - dv^2),  d = 2r + padding.
   * The intervals are merged and the free offset nearest to the centre line
   * is taken (both sides, or one side for half swarms). O(n k log k) with k
   * the neighbours inside one diameter.
   * Copyright (c) 2026 West Coast Software - MIT License
   */

  /**
   * swarm(values, {radius, padding, side}) -> offsets (same order as values)
   * values: pixel positions along the value axis (non-finite -> NaN offset)
   * side: 0 = both sides, 1 = positive only, -1 = negative only
   */
  const MAX_NEIGHBOURS = 400;
  function swarm(values, opts = {}) {
    const r = Math.max(0.25, +opts.radius || 3);
    const d = 2 * r + Math.max(0, +opts.padding || 0);
    const d2 = d * d;
    const side = opts.side > 0 ? 1 : opts.side < 0 ? -1 : 0;
    const n = values.length;
    const out = new Array(n).fill(NaN);
    const idx = [];
    for (let k = 0; k < n; k++) if (typeof values[k] === 'number' && isFinite(values[k])) idx.push(k);
    idx.sort((a, b) => values[a] - values[b] || a - b);
    const placedV = [];
    const placedC = [];
    let lo = 0;
    let flip = 0;
    const iv = [];
    for (let q = 0; q < idx.length; q++) {
      const k = idx[q];
      const v = values[k];
      while (lo < placedV.length && v - placedV[lo] >= d) lo++;
      iv.length = 0;
      const crowd = placedV.length - lo;
      if (crowd > MAX_NEIGHBOURS) {
        // pathologically dense (far wider than any slot; it gets compressed
        // anyway): stack alternately instead of solving, keeps O(n)
        const m = crowd - MAX_NEIGHBOURS;
        const step = Math.ceil((m + 1) / 2) * d * 0.5;
        const c = side === 0 ? m % 2 ? -step : step : side * step * 2;
        out[k] = c;
        placedV.push(v);
        placedC.push(c);
        continue;
      }
      for (let m = lo; m < placedV.length; m++) {
        const dv = v - placedV[m];
        const h = Math.sqrt(Math.max(0, d2 - dv * dv));
        if (h > 1e-9) iv.push([placedC[m] - h, placedC[m] + h]);
      }
      let c = 0;
      if (iv.length) {
        iv.sort((a, b) => a[0] - b[0]);
        // merged interval containing 0 (open intervals: touching is free)
        const merged = [];
        for (const it of iv) {
          const last = merged[merged.length - 1];
          if (last && it[0] < last[1] - 1e-9) last[1] = Math.max(last[1], it[1]);else merged.push([it[0], it[1]]);
        }
        if (side === 0) {
          const hit = merged.find(m => m[0] < -1e-9 && m[1] > 1e-9);
          if (hit) {
            const a = hit[0];
            const b = hit[1];
            const da = -a;
            if (Math.abs(da - b) < 1e-6) c = flip++ % 2 ? a : b;else c = da < b ? a : b;
          }
        } else if (side > 0) {
          // smallest c >= 0 outside every merged interval
          c = 0;
          for (const m of merged) if (m[0] < c - 1e-9 && m[1] > c + 1e-9) c = m[1];
        } else {
          c = 0;
          for (let m = merged.length - 1; m >= 0; m--) {
            const it = merged[m];
            if (it[0] < c - 1e-9 && it[1] > c + 1e-9) c = it[0];
          }
        }
      }
      out[k] = c;
      placedV.push(v);
      placedC.push(c);
    }
    return out;
  }

  /** largest |offset| of a layout (plus nothing for the radius) */
  function swarmExtent(offsets) {
    let m = 0;
    for (let k = 0; k < offsets.length; k++) if (offsets[k] === offsets[k]) m = Math.max(m, Math.abs(offsets[k]));
    return m;
  }

  /**
   * Lay out several groups with one shared radius so dot size stays honest
   * across categories: start at `size`, shrink (to `minSize`) while any group
   * is wider than its half width `half`; what still overflows is compressed
   * towards the centre line (points then overlap, never leave the slot).
   * groups: array of pixel value arrays. Returns { radius, offsets[], compressed }
   */
  function fitSwarms(groups, {
    size = 3.5,
    minSize = 1.5,
    padding = 1,
    side = 0,
    half = 20
  } = {}) {
    let r = Math.max(0.5, +size);
    const floor = Math.max(0.5, Math.min(r, +minSize));
    let res = null;
    for (let iter = 0; iter < 6; iter++) {
      res = groups.map(g => swarm(g, {
        radius: r,
        padding,
        side
      }));
      const ext = Math.max(0, ...res.map(swarmExtent));
      const room = Math.max(0, half - r);
      if (ext <= room + 1e-6 || r <= floor + 1e-6) break;
      // area of the swarm scales with r^2 at a fixed count: width ~ r^2
      const next = Math.max(floor, r * Math.sqrt(room / Math.max(ext, 1e-6)) * 0.97);
      if (next >= r - 1e-3) break;
      r = next;
    }
    const room = Math.max(0, half - r);
    let compressed = false;
    const offsets = res.map(o => {
      const ext = swarmExtent(o);
      if (ext <= room + 1e-6 || ext === 0) return o;
      compressed = true;
      const k = room / ext;
      return o.map(c => c * k);
    });
    return {
      radius: r,
      offsets,
      compressed
    };
  }

  /*
   * West Coast Charts - beeswarm renderer.
   *
   * Shares the violin pipeline: the series transform turns each category's
   * observations into sorted samples and a [min, max] range, so the rangeBar
   * scales, categories, legend and tooltip all work as for violins. Here every
   * observation becomes one dot at its exact value; the cross-axis offset
   * comes from the swarm layout (modules/types/Swarm). One radius for the
   * whole chart (dot size stays comparable between categories).
   *
   * Dots are keyed `${series}-${category}-${rank}`; violin and beeswarm both
   * publish dot positions on ctx._wccDots so a chart.type switch between the
   * two morphs (the violin outline collapses into the swarm and back).
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  const SVGNS$1 = 'http://www.w3.org/2000/svg';
  const finite = v => typeof v === 'number' && isFinite(v);
  const f2$1 = v => Math.round(v * 100) / 100;
  const el = (name, attrs) => {
    const n = document.createElementNS(SVGNS$1, name);
    Object.keys(attrs || {}).forEach(k => attrs[k] !== undefined && n.setAttribute(k, attrs[k]));
    return n;
  };
  const pct = (v, total) => {
    if (typeof v === 'string' && v.indexOf('%') > -1) return parseFloat(v) / 100 * total;
    const n = parseFloat(v);
    return finite(n) ? n : 0;
  };
  class Beeswarm extends Violin {
    static uses(w) {
      return w.config.chart.requestedType === 'beeswarm';
    }
    draw() {
      const w = this.w;
      const ctx = this.ctx;
      const graphics = new _0$4(ctx);
      const ret = graphics.group({
        class: 'apexcharts-rangebar-series apexcharts-plot-series wcc-beeswarm'
      });
      const g = this.g = this.geometry();
      const t = tokensOf(w);
      const o = {
        ...(w.config.plotOptions.beeswarm || {})
      };
      ret.node.style.color = t.text;
      const hidden = w.globals.collapsedSeriesIndices || [];
      const visible = w.config.series.map((_, i) => i).filter(i => hidden.indexOf(i) === -1);
      const G = Math.max(1, visible.length);
      const sub = g.band / G;
      const usable = sub * pct(o.width === undefined ? '88%' : o.width, 1) || sub * 0.88;
      const side = this.sideSign(o.side, g.horizontal);
      const half = side === 0 ? usable / 2 : usable;
      const distributed = w.config.plotOptions.bar.distributed;
      const timing = drawTiming(w);
      const prevKind = ctx._wccDotsKind;
      // chart.animations.chartTypeMorph.enabled: false -> a type switch enters fresh
      const morphOff = !!prevKind && prevKind !== 'beeswarm' && !morphCfg(w).enabled;
      const prevDots = morphOff ? null : ctx._wccDots || null;
      const prevViolin = !morphOff && prevKind === 'violin' && ctx._wccViolin ? ctx._wccViolin.shown : null;

      // ---- gather every visible group, then one shared radius
      const items = [];
      w.config.series.forEach((s, i) => {
        if (visible.indexOf(i) < 0) return;
        (s.data || []).forEach((d, j) => {
          if (!d || !d.wcc || !d.wcc.stats || !d.wcc.stats.points.length) return;
          const st = d.wcc.stats;
          const max = Math.max(1, o.maxPoints || 2000);
          const stride = Math.max(1, Math.ceil(st.points.length / max));
          const ks = [];
          for (let k = 0; k < st.points.length; k += stride) ks.push(k);
          items.push({
            i,
            j,
            d,
            st,
            ks,
            px: ks.map(k => g.vp(st.points[k]))
          });
        });
      });
      const fit = fitSwarms(items.map(it => it.px), {
        size: o.size === undefined ? 3.5 : +o.size,
        minSize: o.minSize === undefined ? 1.5 : +o.minSize,
        padding: o.padding === undefined ? 1 : +o.padding,
        side,
        half
      });
      const r = fit.radius;
      w.globals.wccBeeswarm = {
        radius: r,
        compressed: fit.compressed
      };

      // colour scale (value -> colour), as violin points.colorScale
      const cs = o.colorScale || {};
      let csMin = cs.min;
      let csMax = cs.max;
      if (Array.isArray(cs.colors) && cs.colors.length && (!finite(csMin) || !finite(csMax))) {
        let a = Infinity;
        let b = -Infinity;
        items.forEach(it => {
          a = Math.min(a, it.st.points[0]);
          b = Math.max(b, it.st.points[it.st.points.length - 1]);
        });
        if (!finite(csMin)) csMin = a;
        if (!finite(csMax)) csMax = b;
      }
      const gradeColor = v => {
        const cols = cs.colors;
        if (!Array.isArray(cols) || !cols.length) return null;
        if (cols.length === 1) return cols[0];
        let q = csMax > csMin ? (v - csMin) / (csMax - csMin) : 0.5;
        q = Math.max(0, Math.min(1, q));
        const pos = q * (cols.length - 1);
        const k = Math.min(cols.length - 2, Math.floor(pos));
        return lerpColor(cols[k], cols[k + 1], pos - k);
      };
      const groups = {};
      w.config.series.forEach((s, i) => {
        const sg = graphics.group({
          class: 'apexcharts-series wcc-beeswarm-series',
          seriesName: _0.escapeString(w.globals.seriesNames[i]),
          rel: i + 1,
          'data:realIndex': i
        });
        ctx.series.addCollapsedClassToSeries(sg, i);
        ret.add(sg);
        groups[i] = sg;
      });
      const dots = {};
      const moves = [];
      const ghosts = [];
      const stroke = !o.strokeColor || /^#fff(fff)?$/i.test(o.strokeColor) ? t.surface : o.strokeColor;
      const sw = o.strokeWidth === undefined ? Math.min(1, r * 0.3) : +o.strokeWidth;
      items.forEach((it, n) => {
        const {
          i,
          j,
          d,
          st,
          ks
        } = it;
        const gi = visible.indexOf(i);
        const row = d.wcc.row !== undefined ? d.wcc.row : j;
        const sg = groups[i];
        const color = d.fillColor || (distributed ? w.globals.colors[row % w.globals.colors.length] : w.globals.colors[i]);
        const slot0 = g.band * row + sub * gi + (sub - usable) / 2;
        const base = side === 0 ? slot0 + usable / 2 : side > 0 ? slot0 : slot0 + usable;
        const key0 = `${i}-${String(d.x)}`;
        const offs = fit.offsets[n];

        // violin -> beeswarm: the old outline collapses onto the centre line
        if (prevViolin && prevViolin[key0] && prevViolin[key0].geom && timing.duration > 0) {
          const pg = prevViolin[key0].geom;
          const mid = (a, b) => (a + b) / 2;
          const pb = mid(pg.plus[0], pg.minus[0]);
          const ghost = el('path', {
            class: 'wcc-beeswarm-ghost',
            fill: color,
            'fill-opacity': 0.32,
            stroke: color,
            'stroke-width': 1.25,
            'pointer-events': 'none'
          });
          sg.node.appendChild(ghost);
          ghosts.push({
            node: ghost,
            geom: pg,
            base: pb
          });
        }
        const gd = el('g', {
          class: 'wcc-beeswarm-dots'
        });
        sg.node.appendChild(gd);
        const list = [];
        ks.forEach((k, q) => {
          const v = st.points[k];
          const c = base + (side < 0 ? -1 : 1) * (side === 0 ? offs[q] : Math.abs(offs[q])) + (side === 0 ? 0 : side * r);
          const to = g.pt(c, v);
          const key = `${key0}-${k}`;
          const fill = gradeColor(v) || color;
          const dot = el('circle', {
            class: 'wcc-beeswarm-dot',
            cx: f2$1(to.x),
            cy: f2$1(to.y),
            r: f2$1(r),
            fill,
            'fill-opacity': o.opacity === undefined ? 0.92 : o.opacity,
            stroke: sw > 0 ? stroke : 'none',
            'stroke-width': sw,
            'data-v': v,
            'data-key': key
          });
          gd.appendChild(dot);
          dots[key] = {
            x: to.x,
            y: to.y,
            r
          };
          const from = prevDots && prevDots[key];
          const enter = from ? null : g.pt(base, v);
          moves.push({
            node: dot,
            from: from || enter,
            to,
            r0: from ? from.r : 0,
            r1: r
          });
          list.push({
            v,
            x: to.x,
            y: to.y,
            k
          });
        });

        // median tick across the swarm
        let medEl = null;
        if (o.median !== false && (o.median || {}).show !== false && st.summary) {
          const ext = Math.max(r * 2, ...offs.map(c => Math.abs(c))) + r + 3;
          const a = side === 0 ? base - ext : side > 0 ? base : base - ext;
          const b = side === 0 ? base + ext : side > 0 ? base + ext : base;
          const p1 = g.pt(a, st.summary[2]);
          const p2 = g.pt(b, st.summary[2]);
          medEl = el('line', {
            class: 'wcc-beeswarm-median',
            x1: f2$1(p1.x),
            y1: f2$1(p1.y),
            x2: f2$1(p2.x),
            y2: f2$1(p2.y),
            stroke: (o.median || {}).color || shade(color, t.mode === 'dark' ? -0.55 : 0.45),
            'stroke-width': (o.median || {}).strokeWidth || 1.75,
            'stroke-linecap': 'round',
            'pointer-events': 'none'
          });
          sg.node.appendChild(medEl);
        }

        // slot hit area (tooltip + keyboard), as the violin renderer
        const cMid = slot0 + usable / 2;
        const vMid = st.summary ? g.vp(st.summary[2]) : g.vp(st.points[0]);
        const hit = g.horizontal ? el('rect', {
          x: 0,
          y: slot0,
          width: Math.max(0, w.globals.gridWidth),
          height: Math.max(0, usable)
        }) : el('rect', {
          x: slot0,
          y: 0,
          width: Math.max(0, usable),
          height: Math.max(0, w.globals.gridHeight)
        });
        hit.setAttribute('class', 'apexcharts-rangebar-area wcc-hit');
        hit.setAttribute('fill', 'transparent');
        hit.setAttribute('index', i);
        hit.setAttribute('j', row);
        hit.setAttribute('cx', g.horizontal ? vMid : cMid + sub / 2);
        hit.setAttribute('cy', g.horizontal ? cMid + sub / 2 : vMid);
        hit.setAttribute('barWidth', g.horizontal ? 0 : sub);
        hit.setAttribute('barHeight', g.horizontal ? sub : 0);
        sg.node.appendChild(hit);
        this.bindHover(hit, gd, list, i, row);
        if (medEl && timing.duration > 0 && !(prevDots && prevDots[`${key0}-0`])) {
          medEl.style.opacity = '0';
          tween(ctx, {
            duration: 240,
            delay: timing.duration * 0.8,
            node: medEl,
            onUpdate: p => medEl.style.opacity = String(p),
            onDone: () => medEl.style.removeProperty('opacity')
          });
        }
      });
      ctx._wccDots = dots;
      ctx._wccDotsKind = 'beeswarm';
      // a later switch back to violin must not reuse stale violin shapes
      if (ctx._wccViolin) ctx._wccViolin = {
        shown: {}
      };
      this.animateDots(moves, ghosts, timing);
      return ret;
    }

    /** nearest dot under the pointer: ring + the tooltip "point" row */
    bindHover(hit, gd, list, i, row) {
      const w = this.w;
      let hot = null;
      const clear = () => {
        if (hot) hot.classList.remove('wcc-beeswarm-hot');
        hot = null;
        if (w.globals.wccSwarmHover && w.globals.wccSwarmHover.i === i && w.globals.wccSwarmHover.row === row) w.globals.wccSwarmHover = null;
      };
      hit.addEventListener('mousemove', e => {
        const svg = hit.ownerSVGElement;
        if (!svg || !svg.createSVGPoint || !hit.getScreenCTM || !hit.getScreenCTM()) return;
        const pt = svg.createSVGPoint();
        pt.x = e.clientX;
        pt.y = e.clientY;
        const p = pt.matrixTransform(hit.getScreenCTM().inverse());
        let best = -1;
        let bd = Infinity;
        list.forEach((q, n) => {
          const dd = (q.x - p.x) * (q.x - p.x) + (q.y - p.y) * (q.y - p.y);
          if (dd < bd) {
            bd = dd;
            best = n;
          }
        });
        const lim = Math.max(12, (this.w.globals.wccBeeswarm || {}).radius * 3 || 12);
        if (best < 0 || bd > lim * lim) return clear();
        const node = gd.childNodes[best];
        if (node !== hot) {
          if (hot) hot.classList.remove('wcc-beeswarm-hot');
          hot = node;
          if (hot) hot.classList.add('wcc-beeswarm-hot');
        }
        w.globals.wccSwarmHover = {
          i,
          row,
          v: list[best].v,
          rank: list[best].k
        };
      });
      hit.addEventListener('mouseleave', clear);
    }
    animateDots(moves, ghosts, timing) {
      if (!(timing.duration > 0) || !moves.length) {
        ghosts.forEach(gh => gh.node.remove());
        return;
      }
      const easing = easingFor(this.w, timing.dynamic);
      const n = moves.length;
      // enter: a short value-ordered stagger, capped so big swarms stay fast
      const stagger = moves.some(m => m.r0 > 0) ? 0 : Math.min(0.35, 60 / Math.max(1, n));
      const set = (m, e) => {
        m.node.setAttribute('cx', f2$1(m.from.x + (m.to.x - m.from.x) * e));
        m.node.setAttribute('cy', f2$1(m.from.y + (m.to.y - m.from.y) * e));
        m.node.setAttribute('r', f2$1(Math.max(0, m.r0 + (m.r1 - m.r0) * Math.min(1, e * 1.6))));
      };
      moves.forEach(m => set(m, 0));
      const order = moves.map((_, k) => k);
      tween(this.ctx, {
        duration: timing.duration,
        easing: x => x,
        node: moves[0].node,
        onUpdate: tt => {
          for (let q = 0; q < n; q++) {
            const m = moves[order[q]];
            const local = stagger ? Math.max(0, Math.min(1, (tt - stagger * (q / n)) / (1 - stagger))) : tt;
            set(m, easing(local));
          }
          ghosts.forEach(gh => {
            const k = Math.max(0, 1 - easing(Math.min(1, tt * 1.4)));
            gh.node.setAttribute('d', this.outline(gh.geom, gh.base, k));
            gh.node.style.opacity = String(k);
          });
        },
        onDone: () => ghosts.forEach(gh => gh.node.remove())
      });
    }
  }

  /* chart.type 'beeswarm' */
  var beeswarm = {
    names: ['beeswarm'],
    renderers: {
      rangeBar: Beeswarm
    }
  };

  /*
   * West Coast Charts - observation dots over box plots built from raw samples
   * (plotOptions.boxPlot.points): every observation, or only the ones beyond
   * the whiskers ('outliers'), jittered deterministically across the box.
   * Geometry comes from the core box renderer (wccBoxes); the summary and the
   * sorted sample from the boxPlot series transform (modules/types/TypeTransforms).
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  const SVGNS = 'http://www.w3.org/2000/svg';
  const f2 = v => Math.round(v * 100) / 100;
  const num = (v, d) => v === undefined || v === null || v === '' || isNaN(+v) ? d : +v;
  class BoxPoints {
    constructor(ctx, box) {
      this.w = ctx.w;
      this.box = box;
    }
    static uses(w) {
      const p = w.config.plotOptions.boxPlot && w.config.plotOptions.boxPlot.points;
      return !!(p && p.show);
    }
    decorate(elGraph) {
      const w = this.w;
      const o = w.config.plotOptions.boxPlot.points;
      const boxes = this.box.wccBoxes || [];
      if (!elGraph || !elGraph.node || !boxes.length) return;
      const t = tokensOf(w);
      const hz = this.box.isHorizontal;
      const size = num(o.size, 2.5);
      const jit = num(o.jitter, 0.5);
      const max = Math.max(1, num(o.maxPoints, 3000));
      const hidden = w.globals.collapsedSeriesIndices || [];
      const stroke = !o.strokeColor || /^#fff(fff)?$/i.test(o.strokeColor) ? t.surface : o.strokeColor;
      const cs = o.colorScale || {};
      const cols = Array.isArray(cs.colors) && cs.colors.length ? cs.colors : null;
      let lo = cs.min;
      let hi = cs.max;
      if (cols && (lo === undefined || hi === undefined)) {
        const all = [];
        boxes.forEach(b => {
          const d = (w.config.series[b.i].data || [])[b.j];
          if (d && d.wcc && d.wcc.pts) all.push(d.wcc.pts[0], d.wcc.pts[d.wcc.pts.length - 1]);
        });
        if (lo === undefined) lo = Math.min(...all);
        if (hi === undefined) hi = Math.max(...all);
      }
      const grade = v => {
        if (!cols) return null;
        if (cols.length < 2) return cols[0];
        let r = hi > lo ? Math.max(0, Math.min(1, (v - lo) / (hi - lo))) : 0.5;
        if (cs.steps > 1) r = Math.round(r * (cs.steps - 1)) / (cs.steps - 1);
        const pos = r * (cols.length - 1);
        const k = Math.min(cols.length - 2, Math.floor(pos));
        return lerpColor(cols[k], cols[k + 1], pos - k);
      };
      const g = document.createElementNS(SVGNS, 'g');
      g.setAttribute('class', 'wcc-box-points');
      g.setAttribute('pointer-events', 'none');
      boxes.forEach(({
        i,
        j,
        c,
        b,
        z,
        r
      }) => {
        const d = (w.config.series[i].data || [])[j];
        if (!d || !d.wcc || !d.wcc.pts || !Array.isArray(d.y) || hidden.indexOf(i) > -1) return;
        let pts = o.show === 'outliers' ? d.wcc.pts.filter(v => v < d.y[0] || v > d.y[4]) : d.wcc.pts;
        const stride = Math.ceil(pts.length / max);
        if (stride > 1) pts = pts.filter((_, k) => k % stride === 0);
        const color = d.fillColor || w.globals.colors[i];
        const fill = o.fillColor === 'series' ? color : !o.fillColor || o.fillColor === 'series-dark' ? shade(color, t.mode === 'dark' ? -0.45 : 0.32) : o.fillColor;
        const half = Math.max(0, b / 2 - size);
        pts.forEach((v, k) => {
          const a = c + hash(i + 1, j + 1, k + 1) * jit * half;
          const p = hz ? z + v / r : z - v / r;
          const x = hz ? p : a;
          const y = hz ? a : p;
          const attrs = {
            class: 'wcc-box-point',
            fill: grade(v) || fill,
            'fill-opacity': num(o.opacity, 0.9),
            stroke,
            'stroke-width': num(o.strokeWidth, 1)
          };
          const sq = o.shape === 'square';
          const n = document.createElementNS(SVGNS, sq ? 'rect' : 'circle');
          Object.assign(attrs, sq ? {
            x: f2(x - size),
            y: f2(y - size),
            width: f2(size * 2),
            height: f2(size * 2)
          } : {
            cx: f2(x),
            cy: f2(y),
            r: size
          });
          for (const key in attrs) n.setAttribute(key, attrs[key]);
          g.appendChild(n);
        });
      });
      elGraph.node.appendChild(g);
    }
  }

  /* chart.type 'boxPlot' with raw samples: whiskers rules and observation dots */
  var boxPlot = {
    names: ['boxPlot'],
    decorators: {
      boxPlot: BoxPoints
    }
  };

  /*
   * West Coast Charts - west-coast-charts/types: every optional chart type
   * (gauge, funnel/pyramid, waterfall, dumbbell, histogram, violin/raincloud,
   * sunburst, icicle, streamgraph, unit/waffle, nested treemap).
   *   import WestCoastCharts from 'west-coast-charts'
   *   import types from 'west-coast-charts/types'
   *   WestCoastCharts.use(types)
   * One type only: import 'west-coast-charts/types/gauge' (side effect).
   * See docs/architecture/plugins.md.
   * Copyright (c) 2026 West Coast Software - MIT License
   */

  /** the type definitions, in renderer priority order */
  const defs = [gauge, funnel, waterfall, dumbbell, beeswarm, histogram, violin, sunburst, icicle, streamgraph, unit, nestedTreemap, slope, barRace, calendar, boxPlot];
  var types = typesPlugin('types', defs);

  /*
   * West Coast Charts - script tag build of west-coast-charts/types
   * (dist/west-coast-charts-types.js): installs itself into the core on the
   * page, or as soon as the core loads.
   * Copyright (c) 2026 West Coast Software - MIT License
   */
  var umd = autoInstall(types);

  return umd;

}));
