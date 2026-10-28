/// <reference path="./wcc-options.d.ts" />
// West Coast Charts - TypeScript declarations of the ApexCharts-compatible API (global script:
// `ApexCharts` / `WestCoastCharts` class plus the Apex* option types). The West Coast Charts
// additions (extra chart types, premium types, features) are declared in wcc-options.d.ts.
// Option reference: docs/guide/reference/options.md (generated from these files).
//
// Based on the type declarations shipped with ApexCharts 4.7.0, which are
// Copyright (c) the ApexCharts authors and released under the MIT License; see LICENSE and NOTICE.
// West Coast Charts changes: Copyright (c) 2026 West Coast Software - MIT License.

declare class ApexCharts {
  /** Creates a chart for the element (or selector result) `el` with the given options; nothing is drawn until `render()`. */
  constructor(el: any, options: any)
  /** Draws the chart into its element; resolves when the first render is done. A chart with `chart.id` is registered for `getChartByID` and `exec`. */
  render(): Promise<void>
  /** Merges `options` into the current config and redraws. `redrawPaths` (default `false`) redraws from scratch instead of morphing; `animate` (default `true`); `updateSyncedCharts` (default `true`) applies the change to charts in the same `chart.group`. An update identical to the previous one is skipped. */
  updateOptions(
    options: any,
    redrawPaths?: boolean,
    animate?: boolean,
    updateSyncedCharts?: boolean
  ): Promise<void>
  /** Replaces all series and redraws; `animate` defaults to `true`. Series are normalised for the chart type first. */
  updateSeries(
    newSeries: ApexAxisChartSeries | ApexNonAxisChartSeries | WccSeries[],
    animate?: boolean
  ): Promise<void>
  /** Adds one series after the existing ones and redraws; `animate` defaults to `true`. */
  appendSeries(
    newSeries: ApexAxisChartSeries | ApexNonAxisChartSeries | WccSeries[],
    animate?: boolean
  ): Promise<void>
  /** Appends points: `data[i].data` is added to the end of series `i`; entries that are `null` or missing leave that series unchanged. `overwriteInitialSeries` (default `true`) also stores the result as the initial series used by reset. */
  appendData(data: any[], overwriteInitialSeries?: boolean): void
  /** Hides the named series if visible, shows it if hidden, as a legend click does. */
  toggleSeries(seriesName: string): any
  /** `true` when the named series is hidden (legend or `hideSeries`); `false` when visible or unknown. */
  isSeriesHidden(seriesName: string): boolean
  /** Emphasises the named series and dims the others, as hovering its legend item does. */
  highlightSeries(seriesName: string): any
  /** Shows the named series if it is hidden. */
  showSeries(seriesName: string): void
  /** Hides the named series. */
  hideSeries(seriesName: string): void
  /**
   * Restores the initial series and shows hidden series. `shouldUpdateChart` (default `true`) redraws;
   * `shouldResetZoom` (default `true`) also resets the zoom of that redraw.
   */
  resetSeries(shouldUpdateChart?: boolean, shouldResetZoom?: boolean): void
  /** Zooms the x axis to `min`..`max` (timestamps on datetime axes). */
  zoomX(min: number, max: number): void
  /** Selects or deselects a data point as a click does; pie-like charts take the slice index as `seriesIndex`. Returns the element, or `null` with a warning when it is not found. */
  toggleDataPointSelection(seriesIndex: number, dataPointIndex?: number): any
  /** Removes the chart, its listeners and its feature state from the page. */
  destroy(): void
  /** Switches to a locale from `chart.locales` (or the global `Apex.chart.locales`); throws when the name is not found. Text drawn already changes on the next update. */
  setLocale(localeName: string): void
  /** Returns the internal SVG drawing surface of the chart (for low-level drawing). */
  paper(): void
  /** Adds an x-axis annotation (same fields as `annotations.xaxis[]`). `pushToMemory` (default `true`) keeps it across redraws. */
  addXaxisAnnotation(options: any, pushToMemory?: boolean, context?: any): void
  /** Adds a y-axis annotation (same fields as `annotations.yaxis[]`). `pushToMemory` (default `true`) keeps it across redraws. */
  addYaxisAnnotation(options: any, pushToMemory?: boolean, context?: any): void
  /** Adds a point annotation (same fields as `annotations.points[]`). `pushToMemory` (default `true`) keeps it across redraws. */
  addPointAnnotation(options: any, pushToMemory?: boolean, context?: any): void
  /** Removes the annotation with this `id`. */
  removeAnnotation(id: string, options?: any): void
  /** Removes the drawn annotations and forgets those added through the add*Annotation methods. */
  clearAnnotations(options?: any): void
  /** Renders the chart to a PNG and resolves `{ imgURI }` (a data URL). `scale` multiplies the size; `width` sets the pixel width instead. Rejects under a Content-Security-Policy without `blob:`/`data:` image sources. */
  dataURI(options?: { scale?: number, width?: number }): Promise<{ imgURI: string } | { blob: Blob }>
  /** Calls the public method `fn` with `args` on the chart registered under `chartID`; returns its result, or nothing when the chart or method is unknown. */
  static exec(chartID: string, fn: string, ...args: Array<any>): any
  /** The rendered chart whose `chart.id` is `chartID`, or `undefined`. */
  static getChartByID(chartID: string): ApexCharts | undefined
  /** West Coast Charts: escape a value for use inside formatter / tooltip.custom HTML */
  static escapeHtml(value: any): string
  /** West Coast Charts: run markup through the built-in sanitizer */
  static sanitizeHtml(html: string): string
  /** West Coast Charts: names of the built-in theme presets */
  static readonly themePresets: string[]
  /**
   * deep-merge `source` into a copy of `target` the way chart options are merged (arrays are
   * replaced, plain objects merged) and return the result
   */
  static merge<T = any, S = any>(target: T, source: S): T & S
  /**
   * West Coast Charts: register a named easing for chart.animations.easing: a function of t (0..1)
   * or cubic-bezier control points. Returns false when the name or curve is invalid.
   */
  static registerEasing(
    name: string,
    fn: ((t: number) => number) | [number, number, number, number]
  ): boolean
  /** Registers a named theme for `theme.name`: a palette, mode, base preset and design tokens. Returns `true` when registered. */
  static registerTheme(
    name: string,
    def: {
      palette?: string[]
      mode?: 'light' | 'dark'
      preset?: string
      tokens?: WccThemeTokens & {
        accent?: string
        fore?: string
        series?: string[]
      }
    }
  ): boolean
  /** Removes a theme registered with `registerTheme`; returns the result of the removal. */
  static unregisterTheme(name: string): boolean
  /** Re-reads the CSS design tokens (`--wcc-*`) after a CSS change and re-themes the chart without animation. */
  refreshTokens(): Promise<void>
  /** West Coast Charts: resolved design tokens of a preset in a mode, with optional overrides */
  static getThemeTokens(
    preset?: string,
    mode?: 'light' | 'dark',
    overrides?: WccThemeTokens
  ): WccThemeTokens
  /** Renders a chart into every element with a `data-apexcharts` attribute, using the JSON in its `data-options` attribute. */
  static initOnLoad(): void
  /**
   * link feature: creates the crossfilter record set shared by the charts whose `chart.link.id`
   * (or `chart.group`) equals `opts.id`; called again with the same id it replaces the records.
   * `key` names the record id field.
   */
  static crossfilter?: (opts: { id?: string | number; records?: any[]; key?: string; [key: string]: any }) => any
  /** link feature: the crossfilter record set with that id, or `null` */
  static getCrossfilter?: (id: string | number) => any
  /** perspectives feature: read a perspective encoded in a URL (default location.href) */
  static perspectives?: { fromURL(url?: string): any }
  /** validator module (west-coast-charts/agent/validate): structured option issues, docs/errors.md */
  static validate?: (options: ApexCharts.ApexOptions | any, opts?: { premium?: boolean; maxIssues?: number }) => {
    ok: boolean
    errors: number
    warnings: number
    exitCode: number
    schemaVersion: string
    issues: { kind: string; severity: 'error' | 'warning'; path: string; pointer: string; message: string; hint: string | null; suggestion: any; alternatives: any[]; fix: any; exitCode: number }[]
  }
  /** validator module: a copy of the options with the issues' fixes applied */
  static applyFixes?: <T = any>(options: T, issues: any[]) => T
  /** validator module: default of chart.validate. Default: `'warn'`. */
  static validateMode?: 'warn' | 'error' | 'off'
  /** West Coast Charts: register TopoJSON / GeoJSON for chart.type 'map' (west-coast-charts/premium) */
  static registerMap(name: string, data: object): boolean
  /**
   * West Coast Charts premium (present once west-coast-charts/premium is installed): the licence key
   * for every premium chart without its own chart.licenseKey. Checked offline; resolves to the payload
   * or null. Without a valid key premium charts still render in full, with a small watermark
   * (never on localhost, 127.0.0.1, *.local). docs/spec/06-premium-types.md §10.
   */
  static setLicenseKey?: (key: string) => Promise<ApexCharts.WestCoastChartsLicense | null>
  /** Headless mode (CLI, MCP, snapshot jobs): every chart renders deterministically (`chart.deterministic`) unless it sets `deterministic: false`. Same as `globalThis.WCC_HEADLESS = true`. Default: `false`. */
  static headless: boolean
  /**
   * West Coast Charts: install a plugin, an array of plugins or an object of
   * plugins: `WestCoastCharts.use(types)` from 'west-coast-charts/types',
   * premium, features. Idempotent per plugin and plugin name.
   */
  static use(
    plugin:
      | ApexCharts.WestCoastChartsPlugin
      | ReadonlyArray<ApexCharts.WestCoastChartsPlugin>
      | { readonly [key: string]: ApexCharts.WestCoastChartsPlugin }
  ): typeof ApexCharts
  /** Export helpers used by the toolbar menu (SVG, PNG, CSV and the image data URL). */
  exports: {
    cleanup(): string
    svgUrl(): string
    dataURI(options?: { scale?: number, width?: number }): Promise<{ imgURI: string } | { blob: Blob }>
    exportToSVG(): void
    exportToPng(): void
    exportToCSV(options?: { series?: any, fileName?: string, columnDelimiter?: string, lineDelimiter?: string }): void
    getSvgString(scale?: number): void
    triggerDownload(href: string, filename?: string, ext?: string): void
  }
}

declare module ApexCharts {
  /** Payload of a West Coast Charts premium licence key (tools/license/issue.cjs) */
  export interface WestCoastChartsLicense {
    /** licensee */
    l: string
    /** product tier */
    t: 'premium' | 'oem'
    /** expiry, ms since 1970; 0 = perpetual */
    e: number
    /** covered major versions, inclusive */
    v: [number, number]
    /** issued, ms since 1970 */
    i?: number
    /** host patterns the key is bound to ('acme.com', '*.acme.com', '10.20.*'); absent = any host */
    d?: string[]
  }
  /** a West Coast Charts plugin (docs/architecture/plugins.md) */
  export interface WestCoastChartsPlugin {
    readonly name?: string
    install(lib: typeof ApexCharts, hook: object): void
  }
  export interface ApexOptions {
    /** Lines, ranges, points, texts and images drawn on top of the plot at data coordinates. */
    annotations?: ApexAnnotations
    /** Chart type, size, toolbar, zoom, animations, events and other chart-wide settings. */
    chart?: ApexChart & WccChartFeatureOptions
    /**
     * Series colours in order (CSS colours, or functions returning one); not set uses the theme
     * palette.
     */
    colors?: any[]
    /** Value labels drawn on the data points. */
    dataLabels?: ApexDataLabels
    /** How series areas, bars and slices are filled (solid, gradient, pattern, image). */
    fill?: ApexFill
    /** Draws the last points of line series dashed, to mark them as a forecast. */
    forecastDataPoints?: ApexForecastDataPoints
    /** Grid lines, background bands and the padding around the plot. */
    grid?: ApexGrid
    /**
     * Names of the slices for pie, donut, polar area and radial bar charts, or x categories for
     * axis charts. Default: `[]`.
     */
    labels?: Array<string | number>
    /** The list of series names with their colours. */
    legend?: ApexLegend
    /** Point markers of line, area and scatter series. */
    markers?: ApexMarkers
    /** Text shown when there is no data to draw. */
    noData?: ApexNoData
    /** Settings that belong to one chart type, grouped by type name. */
    plotOptions?: ApexPlotOptions & WccCorePlotOptionAdditions & WccTypePlotOptions & WccPremiumPlotOptions
    /** Option overrides that apply below given container widths. Default: `[]`. */
    responsive?: ApexResponsive[]
    /**
     * The data. Axis charts take an array of series objects; pie, donut, polar area and radial bar
     * take an array of numbers.
     */
    series?: ApexAxisChartSeries | ApexNonAxisChartSeries | WccSeries[]
    /** Visual change of a data point when hovered or selected. */
    states?: ApexStates
    /** Lines of line/area series and the outlines of bars and slices. */
    stroke?: ApexStroke
    /** Second title line under `title`. */
    subtitle?: ApexTitleSubtitle
    /** Light/dark mode, colour palette and monochrome colouring. */
    theme?: ApexTheme
    /** Chart title. */
    title?: ApexTitleSubtitle
    /** The box shown when hovering data points. */
    tooltip?: ApexTooltip
    /** The horizontal axis (for horizontal bar charts: the value axis). */
    xaxis?: ApexXAxis
    /** The vertical axis; an array defines several y axes. */
    yaxis?: ApexYAxis | ApexYAxis[]
    /** West Coast Charts extensions */
    wcc?: WccOptions & {
      /** Settings of the narrative (guided tour) feature. */
      narrative?: WccNarrativeOptions
    }
    /** drilldown feature */
    drilldown?: WccDrilldownOptions
    /** highlight-filter feature */
    highlightFilter?: WccHighlightFilterOptions
    /** trellis feature (small multiples) */
    trellis?: WccTrellisOptions
  }
}

/** West Coast Charts: accessibility (docs/ACCESSIBILITY.md) */
/**
 * West Coast Charts: label readability (import 'west-coast-charts/features/readability'; built into
 * premium renderers). A mode string is shorthand for { mode }. docs/features/readability.md
 */
type WccReadabilityMode = 'none' | 'halo' | 'pill' | 'auto' | 'hide'
type WccReadability = WccReadabilityMode | boolean | {
  /** 'auto' (default where on): nothing for labels off the marks, a contrasting text colour over one fill, a pill over mixed fills; 'hide' = skip labels that sit on marks */
  mode?: WccReadabilityMode
  /** what 'auto' escalates to over mixed fills or when no text colour reaches minRatio. Default 'pill' */
  fallback?: 'pill' | 'halo' | 'hide'
  /** false switches the treatment off for this label kind */
  enabled?: boolean
  /** swap the text to `light`/`dark` when it misses minRatio against what is under it (any mode) */
  contrast?: boolean
  /** WCAG 2 contrast ratio to reach. Default 4.5 */
  minRatio?: number
  /** text/backdrop colour pair used by contrast and 'auto' fills. Defaults '#ffffff' / '#111827' */
  light?: string
  /** Dark colour of the pair. Default: `'#111827'`. */
  dark?: string
  /** colour under the chart; 'auto' = chart.background, else the first opaque ancestor */
  background?: 'auto' | string
  /** outline behind the glyphs; blur > 0 makes it a soft glow. Defaults width 3, color 'auto' (chart background), opacity 0.92 */
  halo?: {
    /** Outline width in pixels. Default: `3`. */
    width?: number
    /** Outline colour; 'auto' uses the colour under the label or a contrasting one. Default: `'auto'`. */
    color?: 'auto' | string
    /** Outline opacity (0 to 1). Default: `0.92`. */
    opacity?: number
    /** Blur in pixels; above 0 the outline becomes a soft glow. Default: `0`. */
    blur?: number
  }
  /** backdrop box. padding = [vertical, horizontal]; offset = [dx, dy] px. Defaults fill 'auto', opacity 0.9, radius 4, padding [1, 4] */
  pill?: {
    /** Box colour; 'auto' uses the colour under the label or a contrasting one. Default: `'auto'`. */
    fill?: 'auto' | string
    /** Box opacity (0 to 1). Default: `0.9`. */
    opacity?: number
    /** Corner radius in pixels. Default: `4`. */
    radius?: number
    /** Space around the text in pixels: one number, or [vertical, horizontal]. Default: `[1, 4]`. */
    padding?: number | [number, number]
    /** Outline colour of the box. Default: `'none'`. */
    stroke?: string
    /** Outline width in pixels. Default: `1`. */
    strokeWidth?: number
    /** Shift of the box as [dx, dy] in pixels. Default: `[0, 0]`. */
    offset?: [number, number]
  }
  /** drop shadow on the pill (on the text in halo mode) */
  shadow?: boolean | {
    /** Horizontal shadow offset in pixels. Default: `0`. */
    dx?: number
    /** Vertical shadow offset in pixels. Default: `1`. */
    dy?: number
    /** Shadow blur in pixels. Default: `2`. */
    blur?: number
    /** Shadow colour. Default: `'#000000'`. */
    color?: string
    /** Shadow opacity (0 to 1). Default: `0.35`. */
    opacity?: number
  }
  /** axis labels sitting on marks are moved above the series (default true) */
  raise?: boolean
  /** per label: return an override (or 'none') for this one label; called only when set */
  each?: (info: WccReadabilityInfo) => WccReadability | null | undefined
}
type WccReadabilityInfo = {
  /** Which kind of label this is. */
  kind: 'dataLabels' | 'yaxis' | 'xaxis' | 'center' | 'radialScale'
  /** Position of the label within its kind. */
  index: number
  /** The label text. */
  text: string
  /** y axis index (kind 'yaxis'); tick value (kind 'radialScale') */
  axis?: number
  /** Tick value (kind 'radialScale'). */
  value?: number
  /** colours sampled under the label ([r, g, b]; the chart background where it is off the marks) */
  under: number[][]
  /** is any mark under the label */
  hit: boolean
  /** The SVG text element of the label. */
  node: SVGTextElement
}

type WccChartAccessibility = {
  /** false switches off the description, keyboard access and announcements. Default: `true`. */
  enabled?: boolean
  /**
   * Text of the chart description for screen readers; not set generates one from the chart type and
   * data.
   */
  description?: string
  /** Live-region announcements for screen readers. */
  announcements?: {
    /** Announces the focused point and zoom, pan and reset changes in a live region when true. Default: `true`. */
    enabled?: boolean
  }
  /** Keyboard access to the chart. */
  keyboard?: {
    /** Makes the chart SVG focusable (tabindex 0) and keyboard operable. Default: `true`. */
    enabled?: boolean
    /** Arrow-key navigation between data points. */
    navigation?: {
      /** Lets the arrow keys move between points. Default: `true`. */
      enabled?: boolean
      /** Moving past the last point continues at the first (and back). Default: `false`. */
      wrapAround?: boolean
    }
  }
}

type WccOptions = {
  /** Accessibility extras: the data table and custom strings. */
  a11y?: {
    /** 'hidden' (default): screen-reader table; true | 'details': visible disclosure; false: none */
    dataTable?: boolean | 'hidden' | 'details'
    /** Maximum number of rows in the data table. Default: `500`. */
    dataTableMaxRows?: number
    /** override any announcement / description string */
    strings?: { [key: string]: any }
  }
  /** large-data rendering, see docs/architecture/performance.md */
  performance?: {
    /** M4 decimation of plain line/area paths; pixel-identical, default true */
    decimate?: boolean
    /** one union path per series for columns / scatter points; default 'auto' */
    denseMarks?: boolean | 'auto'
    /** point count from which denseMarks applies; default 2000 */
    denseThreshold?: number
  }
}

type ApexDropShadow = {
  /** Draws the shadow. Default: `false`. */
  enabled?: boolean
  /** Vertical shadow distance in pixels. Default: `2`. */
  top?: number
  /** Horizontal shadow distance in pixels. Default: `2`. */
  left?: number
  /** Blur radius in pixels. Default: `4`. */
  blur?: number
  /** Shadow opacity (0 to 1). Default: `0.7`. */
  opacity?: number
  /** Shadow colour. Default: `'#000'`. */
  color?: string
}

/**
 * Main Chart options
 * Reference: docs/guide/reference/options.md
 */
type ApexChart = {
  /** West Coast Charts premium: licence key of this chart (overrides WestCoastCharts.setLicenseKey) */
  licenseKey?: string
  /** West Coast Charts: default readability of every label kind (dataLabels, axis labels, premium scales) */
  readability?: WccReadability
  /** West Coast Charts: WCAG 2.2 AA features (all on by default) */
  accessibility?: WccChartAccessibility
  /**
   * Chart width: a number is pixels, a string is any CSS length such as a percentage of the
   * container. Default: `'100%'`.
   */
  width?: string | number
  /**
   * Chart height: a number is pixels, a percentage is relative to the container's height; 'auto'
   * uses the width divided by 1.61 for axis charts and by 1.2 for the others. Default: `'auto'`.
   */
  height?: string | number
  /**
   * The chart type. The West Coast Charts types (gauge ... calendar) need 'west-coast-charts/types'
   * (included in 'west-coast-charts/full'), the premium types (sankey ... radialColumn) need
   * 'west-coast-charts/premium'.
   */
  type?:
  | 'line'
  | 'area'
  | 'bar'
  | 'pie'
  | 'donut'
  | 'radialBar'
  | 'scatter'
  | 'bubble'
  | 'heatmap'
  | 'candlestick'
  | 'boxPlot'
  | 'radar'
  | 'polarArea'
  | 'rangeBar'
  | 'rangeArea'
  | 'treemap'
  | WccChartType
  | WccPremiumChartType
  /**
   * Text colour used for axis labels, titles and legend text unless their own colour option is set.
   * Default: `'#373d3f'`.
   */
  foreColor?: string
  /**
   * Font family applied to all chart text that has no own fontFamily. Default: `'Helvetica, Arial,
   * sans-serif'`.
   */
  fontFamily?: string
  /** Background colour of the chart area; an empty string leaves it transparent. Default: `''`. */
  background?: string
  /** Moves the whole drawing horizontally by this many pixels. Default: `0`. */
  offsetX?: number
  /** Moves the whole drawing vertically by this many pixels. Default: `0`. */
  offsetY?: number
  /** Shadow drawn behind series paths (lines, areas, bars). */
  dropShadow?: ApexDropShadow & {
    /** Indexes of the series that get the shadow; not set means all series. */
    enabledOnSeries?: undefined | number[]
    /** Shadow colour; an array gives one colour per series. Default: `'#000'`. */
    color?: string | string[]
  }
  /**
   * CSP nonce copied onto every `<style>` element the library adds (also in exported SVGs), so a
   * strict `style-src` policy accepts them.
   */
  nonce?: string
  /**
   * West Coast Charts: how HTML returned by formatters / custom functions is
   * inserted. true (default) = built-in sanitizer, function = custom sanitizer,
   * false = raw innerHTML (ApexCharts 4.7.0 behaviour, trusted input only).
   * Plain data strings (series names, categories, labels) are always text.
   */
  sanitizeHtml?:
    | boolean
    | ((html: string, opts: { svg: boolean }) => string | Node)
  /**
   * Callbacks for lifecycle and interaction events. Each receives the chart instance and an
   * event-specific options object.
   */
  events?: {
    /** Called once the initial (or update) animation of the series has finished. */
    animationEnd?(chart: any, options?: any): void
    /** Called after the options are processed and before the SVG is put into the page. */
    beforeMount?(chart: any, options?: any): void
    /** schedule (layers/schedule): a drag, resize or keyboard move proposes a change `{ id, from, to, conflicts, added, resolved }`; the data is never changed. */
    scheduleChange?(...args: any[]): any
    /** schedule: an appointment or a person was selected (null = cleared). */
    scheduleSelect?(...args: any[]): any
    /** schedule: a click on free time `{ time, lane, by, day }`. */
    slotClick?(...args: any[]): any
    /** schedule: emitted once per render when the plan has conflicts (the conflicts() list). */
    scheduleConflict?(...args: any[]): any
    /** Gantt: a task was moved, resized or edited; return `false` to cancel. Premium charts call it as `(event, chart, info)`. */
    taskChange?(...args: any[]): any
    /** Gantt: a task is created; return `false` to cancel. Premium charts call it as `(event, chart, info)`. */
    taskCreate?(...args: any[]): any
    /** Gantt: a task is deleted; return `false` to cancel. Premium charts call it as `(event, chart, info)`. */
    taskDelete?(...args: any[]): any
    /** Gantt: the undo/redo history changed. Premium charts call it as `(event, chart, info)`. */
    historyChange?(...args: any[]): any
    /** Gantt: a group was collapsed or expanded. Premium charts call it as `(event, chart, info)`. */
    groupToggle?(...args: any[]): any
    /** Gantt: a dependency is created; return `false` to cancel. Premium charts call it as `(event, chart, info)`. */
    dependencyCreate?(...args: any[]): any
    /** Gantt: a dependency is deleted; return `false` to cancel. Premium charts call it as `(event, chart, info)`. */
    dependencyDelete?(...args: any[]): any
    /** Sankey: a node was dragged. Premium charts call it as `(event, chart, info)`. */
    nodeMove?(...args: any[]): any
    /** Tree: lazily loaded children arrived. Premium charts call it as `(event, chart, info)`. */
    childrenLoad?(...args: any[]): any
    /** Tree: loading children failed. Premium charts call it as `(event, chart, info)`. */
    childrenLoadError?(...args: any[]): any
    /** Drilldown (premium charts, sunburst, icicle): a level opens; premium charts cancel on `false`. */
    drilldown?(...args: any[]): any
    /** Drilldown: a level closes; premium charts cancel on `false`. */
    drillup?(...args: any[]): any
    /** Stock: a drawing was added, changed or removed. Premium charts call it as `(event, chart, info)`. */
    drawingChange?(...args: any[]): any
    /** history feature: the undo/redo position changed, `(chart, { index, size, canUndo, canRedo })`. */
    wccHistoryChange?(...args: any[]): any
    /** orient feature: the chart was turned, `(chart, { angle, previous, top, start, startAt, picked, ... })`. */
    wccOrientChange?(...args: any[]): any
    /** Called after the first render is in the page. */
    mounted?(chart: any, options?: any): void
    /**
     * Called after each re-render caused by updateOptions, updateSeries, appendData, a resize and
     * similar.
     */
    updated?(chart: any, options?: any): void
    /**
     * Called on mouse movement over the plot area with the pointer event and the hovered series and
     * data indexes.
     */
    mouseMove?(e: any, chart?: any, options?: any): void
    /** Called when the pointer leaves the plot area. */
    mouseLeave?(e: any, chart?: any, options?: any): void
    /**
     * Called on a click anywhere in the chart, with the hovered series and data indexes when there
     * is one.
     */
    click?(e: any, chart?: any, options?: any): void
    /** Called when an x-axis label is clicked, with the label index. */
    xAxisLabelClick?(e: any, chart?: any, options?: any): void
    /**
     * Called when a legend entry is clicked, with the series index; runs before the default
     * show/hide toggle.
     */
    legendClick?(chart: any, seriesIndex?: number, options?: any): void
    /** Called when a point marker is clicked, with the series and data indexes. */
    markerClick?(e: any, chart?: any, options?: any): void
    /** Called while a selection range is drawn or moved, with the selected x (and y) range. */
    selection?(chart: any, options?: any): void
    /**
     * Called when a data point (bar, slice, marker) is clicked and becomes selected or unselected.
     */
    dataPointSelection?(e: any, chart?: any, options?: any): void
    /** Called when the pointer enters a data point shape. */
    dataPointMouseEnter?(e: any, chart?: any, options?: any): void
    /** Called when the pointer leaves a data point shape. */
    dataPointMouseLeave?(e: any, chart?: any, options?: any): void
    /**
     * Called before a zoom is applied, with the new x range; return `{ xaxis: { min, max } }` to
     * change the range that is used.
     */
    beforeZoom?(chart: any, options?: any): void
    /**
     * Called before the zoom is reset; return `{ xaxis: { min, max } }` to reset to a different
     * range.
     */
    beforeResetZoom?(chart: any, options?: any): void
    /**
     * Called after a zoom (selection zoom, zoom buttons, wheel or reset), with the new x and y
     * ranges.
     */
    zoomed?(chart: any, options?: any): void
    /** Called while the chart is panned, with the new x range. */
    scrolled?(chart: any, options?: any): void
    /** Called on a brush chart when its selection moves the target chart, with the new range. */
    brushScrolled?(chart: any, options?: any): void
    /** West Coast Charts: key pressed / released while the chart has focus */
    keyDown?(e: KeyboardEvent, chart?: any, options?: any): void
    /** Called on keyup while the chart has keyboard focus, with the keyboard event. */
    keyUp?(e: KeyboardEvent, chart?: any, options?: any): void
  }
  /** Turns this chart into a navigator for other charts: its selection sets their x range. */
  brush?: {
    /** Enables the brush behaviour. When `chart.events.selection` is your own function, the targets are not wired up automatically. Default: `false`. */
    enabled?: boolean
    /** Rescales the target chart's y axis to the data inside the brushed range. Default: `true`. */
    autoScaleYaxis?: boolean
    /** `chart.id` of the single chart this brush controls. */
    target?: string
    /** `chart.id`s of several charts this brush controls; used instead of `target`. */
    targets?: string[]
  }
  /**
   * Name of the chart, used by `ApexCharts.exec`, brush targets and as the default download file
   * name.
   */
  id?: string
  /**
   * Charts with the same group share tooltip and crosshair position and zoom/pan; each needs its
   * own `chart.id`.
   */
  group?: string
  /** Locale definitions available to this chart (names of months and days, toolbar texts). */
  locales?: ApexLocale[]
  /**
   * `name` of the locale (from `chart.locales` or the registered ones) that is used. Default:
   * `'en'`.
   */
  defaultLocale?: string
  /**
   * Extra pixels added below the SVG in the wrapper's minimum height for axis charts with a pixel
   * height. Default: `15`.
   */
  parentHeightOffset?: number
  /**
   * Re-renders the chart when its container changes size (observed with ResizeObserver). Default:
   * `true`.
   */
  redrawOnParentResize?: boolean
  /**
   * Re-renders on window resize; a function is called on each resize and its return value decides.
   * Default: `true`.
   */
  redrawOnWindowResize?: boolean | Function
  /**
   * Minimal mode for small inline charts: hides axes, grid, legend and labels and removes the
   * padding.
   */
  sparkline?: {
    /** Enables sparkline mode. Default: `false`. */
    enabled?: boolean
  }
  /** Stacks the series of bar, column and area charts on top of each other. Default: `false`. */
  stacked?: boolean
  /** 'normal' adds the values; '100%' scales every stack to 100 percent. Default: `'normal'`. */
  stackType?: 'normal' | '100%'
  /**
   * In combined charts, stack only the bar/column series and draw the others unstacked. Default:
   * `true`.
   */
  stackOnlyBar?: boolean;
  /** The tool buttons and download menu in the top right corner. */
  toolbar?: {
    /** Shows the toolbar. Default: `true`. */
    show?: boolean
    /** Moves the toolbar horizontally by this many pixels. Default: `0`. */
    offsetX?: number
    /** Moves the toolbar vertically by this many pixels. Default: `0`. */
    offsetY?: number
    /**
     * Which buttons the toolbar shows. `true` shows the built-in icon, `false` hides it, a string
     * is used as the icon markup.
     */
    tools?: {
      /** Download menu (SVG, PNG, CSV). Default: `true`. */
      download?: boolean | string
      /** Button for the selection (brush) tool. Default: `true`. */
      selection?: boolean | string
      /** Button for drag-to-zoom. Default: `true`. */
      zoom?: boolean | string
      /** Zoom-in button. Default: `true`. */
      zoomin?: boolean | string
      /** Zoom-out button. Default: `true`. */
      zoomout?: boolean | string
      /** Button for the pan tool. Default: `true`. */
      pan?: boolean | string
      /** Button that resets zoom and pan to the original range. Default: `true`. */
      reset?: boolean | string
      /** Extra buttons added to the toolbar. Default: `[]`. */
      customIcons?: {
        /** Markup (usually SVG) of the button. */
        icon?: string
        /** Tooltip text and accessible name of the button. */
        title?: string
        /** Position among the toolbar buttons (0-based); without an index the button is appended. */
        index?: number
        /** CSS class added to the button. */
        class?: string
        /** Called when the button is pressed, with the chart, its options and the event. */
        click?(chart?: any, options?: any, e?: any): any
      }[]
    }
    /** Settings for the downloads offered in the toolbar menu. */
    export?: {
      /** CSV download settings. */
      csv?: {
        /** File name without extension; not set uses `chart.id` or a generated id. */
        filename?: undefined | string
        /** Separator written between columns. Default: `','`. */
        columnDelimiter?: string
        /** Header of the category / x column. Default: `'category'`. */
        headerCategory?: string
        /** Header of the value column for charts without axes (pie, donut, radialBar ...). Default: `'value'`. */
        headerValue?: string
        /** Function that turns each x value into the text written in the CSV. */
        categoryFormatter?(value?: number): any
        /** Function that turns each y value into the text written in the CSV. */
        valueFormatter?(value?: number): any
      },
      /** SVG download settings. */
      svg?: {
        /** File name without extension; not set uses `chart.id` or a generated id. */
        filename?: undefined | string
      }
      /** PNG download settings. */
      png?: {
        /** File name without extension; not set uses `chart.id` or a generated id. */
        filename?: undefined | string
      }
      /**
       * Pixel width of the exported PNG; the scale factor is derived from it. Ignored when `scale`
       * is set.
       */
      width?: number
      /** Scale factor for the exported PNG (2 = twice the on-screen size). */
      scale?: number
    }
    /** Tool that is active when the chart loads. Default: `'zoom'`. */
    autoSelected?: 'zoom' | 'selection' | 'pan'
  }
  /** Zooming of axis charts by dragging, buttons or the mouse wheel. */
  zoom?: {
    /** Enables zooming. Default: `true`. */
    enabled?: boolean
    /** Axis that is zoomed: 'x', 'y' or both ('xy'). Default: `'x'`. */
    type?: 'x' | 'y' | 'xy'
    /** After an x zoom, fits the y axis to the visible data. Default: `false`. */
    autoScaleYaxis?: boolean
    /** Zooms with the mouse wheel while the pointer is over the plot. Default: `true`. */
    allowMouseWheelZoom?: boolean
    /** Look of the rectangle drawn while dragging a zoom area. */
    zoomedArea?: {
      /** Fill of the zoom rectangle. */
      fill?: {
        /** Fill colour of the zoom rectangle. Default: `'#90CAF9'`. */
        color?: string
        /** Fill opacity of the zoom rectangle (0 to 1). Default: `0.4`. */
        opacity?: number
      }
      /** Border of the zoom rectangle. */
      stroke?: {
        /** Border colour of the zoom rectangle. Default: `'#0D47A1'`. */
        color?: string
        /** Border opacity of the zoom rectangle (0 to 1). Default: `0.4`. */
        opacity?: number
        /** Border width of the zoom rectangle in pixels. Default: `1`. */
        width?: number
      }
    }
  }
  /** A draggable range on the plot; on a brush chart it controls the targets. */
  selection?: {
    /** Enables the selection tool. Default: `false`. */
    enabled?: boolean
    /** Axis of the selection: 'x', 'y' or 'xy'. Default: `'x'`. */
    type?: string
    /** Fill of the selection rectangle. */
    fill?: {
      /** Fill colour of the selection rectangle. Default: `'#24292e'`. */
      color?: string
      /** Fill opacity of the selection rectangle (0 to 1). Default: `0.1`. */
      opacity?: number
    }
    /** Border of the selection rectangle. */
    stroke?: {
      /** Border width in pixels. Default: `1`. */
      width?: number
      /** Border colour. Default: `'#24292e'`. */
      color?: string
      /** Border opacity (0 to 1). Default: `0.4`. */
      opacity?: number
      /** Dash length of the border in pixels; 0 draws a solid line. Default: `3`. */
      dashArray?: number
    }
    /** Initial selected x range. */
    xaxis?: {
      /** Start of the initial selection (x value). */
      min?: number
      /** End of the initial selection (x value). */
      max?: number
    }
    /** Initial selected y range (for 'y' / 'xy' selections). */
    yaxis?: {
      /** Lower end of the initial selection (y value). */
      min?: number
      /** Upper end of the initial selection (y value). */
      max?: number
    }
  }
  /** Motion settings for the first render, data updates and resizes. */
  animations?: {
    /** Master switch for all animations. Default: `true`. */
    enabled?: boolean
    /** West Coast Charts: no motion when the OS asks for reduced motion (default true) */
    respectReducedMotion?: boolean
    /** West Coast Charts: above this many points (all series) path animations become a short fade; 0 = never. Default 2000 */
    largeDatasetThreshold?: number
    /** West Coast Charts: tween between chart types on updateOptions({ chart: { type } }) (treemap / sunburst / icicle, violin / beeswarm) */
    chartTypeMorph?: {
      /** Set to false so a type switch draws the new type without the tween. Default: `true`. */
      enabled?: boolean
      /** Duration of the type tween in milliseconds. Default: `600`. */
      speed?: number
    }
    /** West Coast Charts: easing curve name or function */
    easing?:
      | 'linear'
      | 'easein'
      | 'easeout'
      | 'easeinout'
      | 'easeOutQuad'
      | 'easeOutCubic'
      | 'easeOutQuint'
      | 'easeInOutCubic'
      | string
      | [number, number, number, number]
      | ((t: number) => number)
    /** Duration of the first-render animation in milliseconds. Default: `800`. */
    speed?: number
    /** Starts the series (and points) one after another instead of all at once. */
    animateGradually?: {
      /** Enables the staggered start. Default: `true`. */
      enabled?: boolean
      /** Delay between two consecutive items in milliseconds. Default: `150`. */
      delay?: number
    }
    /** Animation of data changes (updateSeries, updateOptions, appendData). */
    dynamicAnimation?: {
      /** Animates data changes from the old to the new values. Default: `true`. */
      enabled?: boolean
      /** West Coast Charts: easing for data-change animations */
      easing?: string | [number, number, number, number] | ((t: number) => number)
      /** Duration of a data-change animation in milliseconds. Default: `350`. */
      speed?: number
      /**
       * West Coast Charts: how the points of an update pair with the previous
       * ones. 'index' (default, 4.7.0), 'x' (category or x value), or a key
       * function. Markers, data labels and bar/column/box shapes then move
       * with their own point when data is reordered, added or removed.
       */
      matchBy?: 'index' | 'x' | ((point: any, seriesIndex: number, dataIndex: number) => string | number)
    }
    /**
     * West Coast Charts: animate the redraw after a container/window resize
     * (paths morph, markers and axis ticks glide to the new size). Opt-in;
     * off = the 4.7.0 static redraw. A resize that arrives while an
     * animation runs is held until it finished either way.
     */
    resize?: {
      /** Animates the redraw after a resize. Default: `false`. */
      enabled?: boolean
      /** Duration of the resize animation in milliseconds. Default: `300`. */
      speed?: number
    }
  }
}

type ApexStates = {
  /** Look of a hovered data point. */
  hover?: {
    /** Filter applied to the hovered shape. */
    filter?: {
      /** 'lighten', 'darken' or 'none'. Default: `'lighten'`. */
      type?: string
    }
  }
  /** Look of a selected (clicked) data point. */
  active?: {
    /**
     * Lets several points be selected at once; a click on a selected one unselects it. Default:
     * `false`.
     */
    allowMultipleDataPointsSelection?: boolean
    /** Filter applied to the selected shape. */
    filter?: {
      /** 'lighten', 'darken' or 'none'. Default: `'darken'`. */
      type?: string
    }
  }
}

/**
 * Chart Title options
 * Reference: docs/guide/reference/options.md
 */
type ApexTitleSubtitle = {
  /** The text; not set draws nothing. */
  text?: string
  /** 'left', 'center' or 'right'. Default: `'left'`. */
  align?: 'left' | 'center' | 'right'
  /** Space in pixels below the text before the plot starts. Default: `5`. */
  margin?: number
  /** Moves the text horizontally. Default: `0`. */
  offsetX?: number
  /** Moves the text vertically. Default: `0` for `title`, `30` for `subtitle`. */
  offsetY?: number
  /** Takes the text out of the layout so the plot starts at the top. Default: `false`. */
  floating?: boolean
  /** Text style. */
  style?: {
    /** Font size. Default: `'14px'` for `title`, `'12px'` for `subtitle`. */
    fontSize?: string
    /** Font family; not set uses `chart.fontFamily`. */
    fontFamily?: string
    /** Font weight. Default: `900` for `title`, `400` for `subtitle`. */
    fontWeight?: string | number
    /** Text colour; not set uses `chart.foreColor`. */
    color?: string
  }
}

/**
 * Chart Series options.
 * Use ApexNonAxisChartSeries for Pie and Donut charts.
 * Reference: docs/guide/reference/options.md
 *
 * `data` takes plain numbers (null for a gap), [x, y] pairs, or { x, y } objects.
 * The extra and premium chart types take WccSeries (wcc-options.d.ts).
 */
type ApexAxisChartSeries = {
  /** Series name shown in the legend, the tooltip and the accessible data table. */
  name?: string
  /**
   * Chart type of this series in a combined chart (for example 'column' next to 'line'); not set
   * uses `chart.type`.
   */
  type?: string
  /** Colour of this series; overrides the palette entry at its index. */
  color?: string
  /**
   * Stack name for stacked bar/column charts: series with the same group form one stack, different
   * groups stand side by side.
   */
  group?: string
  /** Starts the series hidden, as if switched off in the legend. */
  hidden?: boolean
  /** Drawing order of line and area series; higher numbers are drawn on top. */
  zIndex?: number
  /**
   * The values: plain numbers (with `xaxis.categories`), `{ x, y }` objects, `[x, y]` pairs, or
   * per-type shapes such as `[x, [o, h, l, c]]` for candlesticks.
   */
  data:
  | (number | null)[]
  | {
    /** The x value: category text, number or timestamp/date string, depending on `xaxis.type`. */
    x: any;
    /** The y value; ranges and candlesticks take an array. */
    y: any;
    /** Fill of this single point (bar, area of a range), merged over `fill`. */
    fill?: ApexFill;
    /** Colour of this single point. */
    fillColor?: string;
    /** Outline colour of this single point. */
    strokeColor?: string;
    /** Any extra data; not drawn, but available to formatters and event callbacks. */
    meta?: any;
    /** Target markers drawn across a bar or column at the given values. */
    goals?: {
      /** Name of the goal, shown in the tooltip and legend. */
      name?: string,
      /** Value at which the goal marker is drawn. */
      value: number,
      /** Thickness of the marker for vertical bars, in pixels. */
      strokeHeight?: number;
      /** Thickness of the marker for horizontal bars, in pixels. */
      strokeWidth?: number;
      /** Colour of the goal marker. */
      strokeColor?: string;
      /** Dash length of the goal marker; 0 draws a solid line. */
      strokeDashArray?: number;
      /** Line ends of the goal marker. */
      strokeLineCap?: 'butt' | 'square' | 'round'
    }[];
    /** Pixels added to the height of this horizontal bar (centred). */
    barHeightOffset?: number;
    /** Pixels added to the width of this column (centred). */
    columnWidthOffset?: number;
  }[]
  /** boxPlot raw samples: summarised per plotOptions.boxPlot.whiskers (west-coast-charts/types) */
  | {
    /** The x value: category text, number or timestamp/date string, depending on `xaxis.type`. */
    x: any
    /** Raw samples of a box plot point; quartiles and whiskers are computed from them. */
    points: number[]
    /** Colour of this single point. */
    fillColor?: string
    /** Any extra data; not drawn, but available to formatters and event callbacks. */
    meta?: any
  }[]
  | [number, number | null][]
  | [number, (number | null)[]][]
  | number[][];
}[]

type ApexNonAxisChartSeries = number[]

/**
 * Options for the line drawn on line and area charts.
 * Reference: docs/guide/reference/options.md
 */
type ApexStroke = {
  /** Draws lines and outlines. Default: `true`. */
  show?: boolean
  /**
   * Line shape between points: 'smooth', 'straight', 'stepline', 'linestep' or 'monotoneCubic'; an
   * array gives one per series. Default: `'smooth'`.
   */
  curve?: 'smooth' | 'straight' | 'stepline' | 'linestep' | 'monotoneCubic' | ('smooth' | 'straight' | 'stepline' | 'linestep' | 'monotoneCubic')[]
  /** Line ends: 'butt', 'square' or 'round'. Default: `'butt'`. */
  lineCap?: 'butt' | 'square' | 'round'
  /** Line colours; not set uses the series colours. */
  colors?: any[] | string[]
  /** Line width in pixels; an array gives one per series. Default: `2`. */
  width?: number | number[]
  /** Dash length in pixels; 0 draws solid lines; an array gives one per series. Default: `0`. */
  dashArray?: number | number[]
  /** Fill of the line itself on area charts (for example a gradient line); same shape as `fill`. */
  fill?: ApexFill
}

type ApexAnnotations = {
  /** Horizontal lines or bands at y values. */
  yaxis?: YAxisAnnotations[]
  /** Vertical lines or bands at x values. */
  xaxis?: XAxisAnnotations[]
  /** Markers, labels or images at single (x, y) data positions. */
  points?: PointAnnotations[]
  /** Free text placed at pixel positions inside the chart SVG. Default: `[]`. */
  texts?: TextAnnotations[]
  /** Images placed at pixel positions inside the chart SVG. Default: `[]`. */
  images?: ImageAnnotations[]
}

type AnnotationLabel = {
  /** Border colour of the label box. Default: `'#c2c2c2'`. */
  borderColor?: string
  /** Border width of the label box in pixels. Default: `1`. */
  borderWidth?: number
  /** Corner radius of the label box in pixels. Default: `2`. */
  borderRadius?: number
  /** Label text; without text no label is drawn. */
  text?: string | string[]
  /**
   * Horizontal anchor of the text: 'start', 'middle' or 'end'. Default: `'middle'` on x-axis annotations, `'end'` on y-axis annotations.
   */
  textAnchor?: string
  /** Horizontal shift of the label in pixels. Default: `0`. */
  offsetX?: number
  /** Vertical shift of the label in pixels. Default: `0`. */
  offsetY?: number
  /** Text and box style of the label. */
  style?: AnnotationStyle
  /**
   * Where the label sits along the line: 'top', 'center' or 'bottom' on x-axis annotations; 'left',
   * 'center' or 'right' on y-axis annotations. Default: `'top'` on x-axis annotations, `'right'` on y-axis annotations.
   */
  position?: string
  /**
   * 'vertical' rotates an x-axis annotation label along the line; 'horizontal' keeps it level.
   * Default: `'vertical'`.
   */
  orientation?: string
  /** Called with the annotation object when the pointer enters the label. */
  mouseEnter?: Function
  /** Called with the annotation object when the pointer leaves the label. */
  mouseLeave?: Function
  /** Called with the annotation object when the label is clicked. */
  click?: Function
}

type AnnotationStyle = {
  /** Fill colour of the label box. Default: `'#fff'`. */
  background?: string
  /** Text colour of the label. */
  color?: string
  /** Font family of the label; not set uses the chart font. */
  fontFamily?: string
  /** Font weight of the label. Default: `400`. */
  fontWeight?: string | number
  /** Font size of the label. Default: `'11px'`. */
  fontSize?: string
  /** Extra CSS class added to the label text. Default: `''`. */
  cssClass?: string
  /** Space between the text and the box edge, in pixels. */
  padding?: {
    /** Left padding in pixels. Default: `5`. */
    left?: number
    /** Right padding in pixels. Default: `5`. */
    right?: number
    /** Top padding in pixels. Default: `2`. */
    top?: number
    /** Bottom padding in pixels. Default: `2`. */
    bottom?: number
  }
}

type XAxisAnnotations = {
  /** trellis: panel key(s) or a function of the key; the annotation is drawn only on matching panels. */
  scope?: string | number | Array<string | number> | ((key: any) => boolean)
  /** West Coast Charts: annotation extras. */
  wcc?: {
    /** Tooltip text shown on hover and focus, or a function of the annotation. */
    tooltip?: string | ((annotation: any) => string)
  }
  /**
   * Identifier added as a CSS class to the drawn elements; also the key for removing the annotation
   * later.
   */
  id?: number | string
  /**
   * Position on the x axis: a category, number or timestamp matching `xaxis.type`. Default: `0`.
   */
  x?: null | number | string
  /**
   * End of a band: with x2 set the annotation fills the range from x to x2 instead of drawing a
   * line. Default: `null`.
   */
  x2?: null | number | string
  /** Dash length of the line; 0 draws it solid. Default: `1`. */
  strokeDashArray?: number
  /** Fill colour of the band (used with x2). Default: `'#c2c2c2'`. */
  fillColor?: string
  /** Colour of the line, or the band outline. Default: `'#c2c2c2'`. */
  borderColor?: string
  /** Line width in pixels. Default: `1`. */
  borderWidth?: number
  /** Opacity of the band fill (0 to 1). Default: `0.3`. */
  opacity?: number
  /** Horizontal shift of the line or band in pixels. Default: `0`. */
  offsetX?: number
  /** Vertical shift of the line or band in pixels. Default: `0`. */
  offsetY?: number
  /** Text label attached to the annotation. */
  label?: AnnotationLabel
}

type YAxisAnnotations = {
  /** trellis: panel key(s) or a function of the key; the annotation is drawn only on matching panels. */
  scope?: string | number | Array<string | number> | ((key: any) => boolean)
  /** West Coast Charts: annotation extras. */
  wcc?: {
    /** Tooltip text shown on hover and focus, or a function of the annotation. */
    tooltip?: string | ((annotation: any) => string)
  }
  /**
   * Identifier added as a CSS class to the drawn elements; also the key for removing the annotation
   * later.
   */
  id?: number | string
  /** Value on the y axis where the line is drawn. Default: `0`. */
  y?: null | number | string
  /**
   * End of a band: with y2 set the annotation fills the range from y to y2 instead of drawing a
   * line. Default: `null`.
   */
  y2?: null | number | string
  /** Dash length of the line; 0 draws it solid. Default: `1`. */
  strokeDashArray?: number
  /** Fill colour of the band (used with y2). Default: `'#c2c2c2'`. */
  fillColor?: string
  /** Colour of the line, or the band outline. Default: `'#c2c2c2'`. */
  borderColor?: string
  /** Line width in pixels. Default: `1`. */
  borderWidth?: number
  /** Opacity of the band fill (0 to 1). Default: `0.3`. */
  opacity?: number
  /** Horizontal shift in pixels; it also extends the line width. Default: `0`. */
  offsetX?: number
  /** Vertical shift of the line or band in pixels. Default: `0`. */
  offsetY?: number
  /** Length of the line: a percentage of the plot width or a pixel value. Default: `'100%'`. */
  width?: number | string
  /** Index of the y axis whose scale positions the annotation. Default: `0`. */
  yAxisIndex?: number
  /** Text label attached to the annotation. */
  label?: AnnotationLabel
}

type PointAnnotations = {
  /** trellis: panel key(s) or a function of the key; the annotation is drawn only on matching panels. */
  scope?: string | number | Array<string | number> | ((key: any) => boolean)
  /** West Coast Charts: annotation extras. */
  wcc?: {
    /** Tooltip text shown on hover and focus, or a function of the annotation. */
    tooltip?: string | ((annotation: any) => string)
  }
  /**
   * Identifier added as a CSS class to the marker and label; also the key for removing the
   * annotation later.
   */
  id?: number | string
  /**
   * X position of the point: a category, number or timestamp matching `xaxis.type`. Default: `0`.
   */
  x?: number | string
  /** Y value of the point. Default: `null`. */
  y?: null | number
  /** Index of the y axis whose scale positions the point. Default: `0`. */
  yAxisIndex?: number
  /**
   * Series the point belongs to; on horizontal bar charts it moves the point onto that series' bar.
   */
  seriesIndex?: number
  /** Called with the annotation object when the pointer enters the marker. */
  mouseEnter?: Function
  /** Called with the annotation object when the pointer leaves the marker. */
  mouseLeave?: Function
  /** Called with the annotation object when the marker is clicked. */
  click?: Function
  /** Marker drawn at the point. */
  marker?: {
    /** Marker radius in pixels; 0 hides the marker. Default: `4`. */
    size?: number
    /** Fill colour of the marker. Default: `'#fff'`. */
    fillColor?: string
    /** Outline colour of the marker. Default: `'#333'`. */
    strokeColor?: string
    /** Outline width of the marker in pixels. Default: `2`. */
    strokeWidth?: number
    /** Marker shape, as in `markers.shape`. Default: `'circle'`. */
    shape?: string
    /** Horizontal shift of the marker in pixels. Default: `0`. */
    offsetX?: number
    /** Vertical shift of the marker in pixels. Default: `0`. */
    offsetY?: number
    /** Extra CSS class added to the marker. Default: `''`. */
    cssClass?: string
  }
  /** Text label attached to the point. */
  label?: AnnotationLabel
  /** Image drawn at the point. */
  image?: {
    /** Image URL: http(s), a relative path or a data:image URI; other schemes are dropped. */
    path?: string
    /** Image width in pixels. Default: `20`. */
    width?: number
    /** Image height in pixels. Default: `20`. */
    height?: number
    /** Horizontal shift of the image in pixels. Default: `0`. */
    offsetX?: number
    /** Vertical shift of the image in pixels. Default: `0`. */
    offsetY?: number
  }
}


type TextAnnotations = {
  /** Horizontal position in pixels from the left of the chart SVG. Default: `0`. */
  x?: number
  /** Vertical position in pixels from the top of the chart SVG. Default: `0`. */
  y?: number
  /** The text to draw. Default: `''`. */
  text?: string
  /** Horizontal anchor of the text at x: 'start', 'middle' or 'end'. Default: `'start'`. */
  textAnchor?: string
  /** Text colour; not set uses the chart text colour. */
  foreColor?: string
  /** Font size of the text. Default: `'13px'`. */
  fontSize?: string | number
  /** Font family; not set uses the chart font. */
  fontFamily?: undefined | string
  /** Font weight of the text. Default: `400`. */
  fontWeight?: string | number
  /** Fill colour of the box behind the text. Default: `'transparent'`. */
  backgroundColor?: string
  /** Border colour of the box. Default: `'#c2c2c2'`. */
  borderColor?: string
  /** Corner radius of the box in pixels. Default: `0`. */
  borderRadius?: number
  /** Border width of the box in pixels; 0 draws no border. Default: `0`. */
  borderWidth?: number
  /** Left padding of the box in pixels. Default: `4`. */
  paddingLeft?: number
  /** Right padding of the box in pixels. Default: `4`. */
  paddingRight?: number
  /** Top padding of the box in pixels. Default: `2`. */
  paddingTop?: number
  /** Bottom padding of the box in pixels. Default: `2`. */
  paddingBottom?: number
}

type ImageAnnotations = {
  /** Image URL: http(s), a relative path or a data:image URI; other schemes are dropped. */
  path?: string
  /** Horizontal position in pixels from the left of the chart SVG. Default: `0`. */
  x?: number,
  /** Vertical position in pixels from the top of the chart SVG. Default: `0`. */
  y?: number,
  /** Image width in pixels. Default: `20`. */
  width?: number,
  /** Image height in pixels. Default: `20`. */
  height?: number,
}

/**
 * Options for localization.
 * Reference: docs/guide/reference/options.md
 */
type ApexLocale = {
  /** Locale name, selected with `chart.defaultLocale` or `setLocale()`. */
  name?: string
  /** Translated strings of the locale. */
  options?: {
    /** Full month names, January first; used by datetime labels and formats. */
    months?: string[]
    /** Abbreviated month names, January first. */
    shortMonths?: string[]
    /** Full weekday names, Sunday first. */
    days?: string[]
    /** Abbreviated weekday names, Sunday first. */
    shortDays?: string[]
    /** Titles of the toolbar buttons and export menu items. */
    toolbar?: {
      /** Title of the selection button. English: 'Selection'. */
      selection?: string
      /** Title of the selection-zoom button. English: 'Selection Zoom'. */
      selectionZoom?: string
      /** Title of the zoom-in button. English: 'Zoom In'. */
      zoomIn?: string
      /** Title of the zoom-out button. English: 'Zoom Out'. */
      zoomOut?: string
      /** Title of the pan button. English: 'Panning'. */
      pan?: string
      /** Title of the reset-zoom button. */
      reset?: string
      /** Label of the SVG export menu item. English: 'Download SVG'. */
      exportToSVG?: string
      /** Label of the PNG export menu item. English: 'Download PNG'. */
      exportToPNG?: string
      /** Label of the CSV export menu item. English: 'Download CSV'. */
      exportToCSV?: string
    }
  }
}

/**
 * PlotOptions for specifying chart-type-specific configuration.
 * Reference: docs/guide/reference/options.md
 */
type ApexPlotOptions = {
  /** Settings of line series. */
  line?: {
    /**
     * Draws a slope chart: each series connects its first and last value, with labels at both ends.
     * Default: `false`.
     */
    isSlopeChart?: boolean
    /** Colours a line by value relative to a threshold. */
    colors?: {
      /** The value at which the line changes colour. Default: `0`. */
      threshold?: number,
      /** Line colour above the threshold. */
      colorAboveThreshold?: string,
      /** Line colour below the threshold. */
      colorBelowThreshold?: string,
    },
  }
  /** Settings of area series. */
  area?: {
    /**
     * 'origin' fills down to the zero line; 'end' fills to the bottom of the plot. Default:
     * `'origin'`.
     */
    fillTo?: 'origin' | 'end'
  }
  /** Settings of bar, column and range bar series. */
  bar?: {
    /** West Coast Charts: opt-in bar marks. */
    wcc?: {
      /** `'lollipop'` (stem and dot) or `'ringStem'` (stem and ring) instead of the bar. */
      mark?: 'lollipop' | 'ringStem'
      /** Stem width in pixels. Default: `2`. */
      stemWidth?: number
      /** Head radius in pixels. Default: `6`. */
      headRadius?: number
    }
    /** Draws horizontal bars instead of vertical columns. Default: `false`. */
    horizontal?: boolean
    /**
     * Width of a column as a percentage of its category slot (or pixels as a number); vertical bars
     * only. Default: `'70%'`.
     */
    columnWidth?: string | number;
    /**
     * Height of a bar as a percentage of its category slot (or pixels as a number); horizontal bars
     * only. Default: `'70%'`.
     */
    barHeight?: string | number;
    /**
     * Gives every bar of a single series its own palette colour (and its own legend entry).
     * Default: `false`.
     */
    distributed?: boolean
    /** Corner radius of the bars in pixels. Default: `0`. */
    borderRadius?: number;
    /**
     * 'around' rounds both ends of a bar; 'end' rounds only the end away from the axis (for stacks:
     * only the outer end of the stack). Default: `'around'`.
     */
    borderRadiusApplication?: 'around' | 'end';
    /**
     * Accepted for ApexCharts 4.x compatibility; stacked rounding follows
     * `borderRadiusApplication`. Default: `'last'`.
     */
    borderRadiusWhenStacked?: 'all' | 'last';
    /**
     * In grouped bars, leaves no gap for zero values: the remaining bars of the category share its
     * slot. Default: `false`.
     */
    hideZeroBarsWhenGrouped?: boolean
    /**
     * With `rangeBarGroupRows`, false moves overlapping ranges in a row into separate lanes; true
     * lets them overlap. Default: `true`.
     */
    rangeBarOverlap?: boolean
    /**
     * Puts the ranges of all series with the same x label into one row (timeline view). Default:
     * `false`.
     */
    rangeBarGroupRows?: boolean
    /** Draws range bars as dumbbells: a thin bar with a dot at each end. Default: `false`. */
    isDumbbell?: boolean;
    /**
     * Colours of the two dumbbell ends per series (`[[start, end], ...]`); not set uses the series
     * colours.
     */
    dumbbellColors?: string[][];
    /** Draws a horizontal bar series as a centred funnel. Default: `false`. */
    isFunnel?: boolean;
    /** Adds the shaded connecting faces between funnel steps. Default: `true`. */
    isFunnel3d?: boolean;
    /** Colouring of bars by value and the background bars. */
    colors?: {
      /** Value ranges with their own bar colour. Default: `[]`. */
      ranges?: {
        /** Lower end of the range (inclusive). */
        from?: number
        /** Upper end of the range (inclusive). */
        to?: number
        /** Bar colour for values in the range. */
        color?: string
      }[]
      /**
       * Colours of full-length bars drawn behind each category, repeated in order; empty draws
       * none. Default: `[]`.
       */
      backgroundBarColors?: string[]
      /** Opacity of the background bars (0 to 1). Default: `1`. */
      backgroundBarOpacity?: number
      /** Corner radius of the background bars in pixels. Default: `0`. */
      backgroundBarRadius?: number
    }
    /** Placement of the value labels on bars. */
    dataLabels?: {
      /**
       * Above this many bars with labels enabled, a performance warning is logged. Default: `100`.
       */
      maxItems?: number
      /** Hides a label that does not fit inside its bar. Default: `true`. */
      hideOverflowingLabels?: boolean
      /**
       * 'top', 'center' or 'bottom' of the bar (for horizontal bars: end, centre, start). Default:
       * `'top'`.
       */
      position?: string
      /** 'horizontal' or 'vertical' text. Default: `'horizontal'`. */
      orientation?: 'horizontal' | 'vertical',
      /** Sum label at the end of each stack. */
      total?: {
        /** Shows the stack totals (stacked bars only). Default: `false`. */
        enabled?: boolean,
        /** Function that returns the total text from the sum. */
        formatter?(val?: string, opts?: any): string,
        /** Moves the totals horizontally. Default: `0`. */
        offsetX?: number,
        /** Moves the totals vertically. Default: `0`. */
        offsetY?: number,
        /** Text style of the totals. */
        style?: {
          /** Text colour of the totals. Default: `'#373d3f'`. */
          color?: string,
          /** Font size of the totals. Default: `'12px'`. */
          fontSize?: string,
          /** Font family of the totals; not set uses `chart.fontFamily`. */
          fontFamily?: string,
          /** Font weight of the totals. Default: `600`. */
          fontWeight?: number | string
        }
      }
    }
  }
  /** Settings of bubble series. */
  bubble?: {
    /**
     * Scales the z values to the plot size; false uses z directly as the radius in pixels. Default:
     * `true`.
     */
    zScaling?: boolean
    /** Smallest radius in pixels; smaller bubbles are enlarged to it. */
    minBubbleRadius?: number
    /** Largest radius in pixels; bigger bubbles are reduced to it. */
    maxBubbleRadius?: number
    /** z values mapped to the smallest / largest bubble (default: the data range) */
    minZ?: number
    /**
     * Fixes the top of the z range instead of taking the data maximum, so several charts size
     * bubbles alike.
     */
    maxZ?: number
  }
  /** Settings of candlestick series. */
  candlestick?: {
    /** 'candlestick' (boxes) or 'ohlc' (open/close ticks on a line). */
    type?: string,
    /** Colours of rising and falling candles. */
    colors?: {
      /** Colour when close is above open. Default: `'#00B746'`. */
      upward?: string | string[]
      /** Colour when close is below open. Default: `'#EF403C'`. */
      downward?: string | string[]
    }
    /** The high/low lines. */
    wick?: {
      /** Draws the wick in the candle colour; false uses the stroke colour. Default: `true`. */
      useFillColor?: boolean
    }
  }
  /** Settings of box plot series. */
  boxPlot?: {
    /** West Coast Charts: box plot extras. */
    wcc?: {
      /** Spread (0 to 1 of the box width) of scatter series drawn over the boxes; same on every render. Default: `0`. */
      jitter?: number
    }
    /** Colours of the two box halves. */
    colors?: {
      /** Colour of the part between median and upper quartile. Default: `'#00E396'`. */
      upper?: string | string[]
      /** Colour of the part between lower quartile and median. Default: `'#008FFB'`. */
      lower?: string | string[]
    }
    /** raw-sample boxes (data[].points): whisker rule; needs west-coast-charts/types */
    whiskers?: 'minmax' | 'tukey' | 'percentile'
    /** quantiles (percent) for whiskers: 'percentile'; default [5, 95] */
    whiskerPercentiles?: [number, number]
    /** observation dots over raw-sample boxes */
    points?: {
      /**
       * true or 'all' draws every sample, 'outliers' only those beyond the whiskers; false draws
       * none. Needs `west-coast-charts/types`.
       */
      show?: boolean | 'all' | 'outliers'
      /** Dot shape. Default: `'circle'`. */
      shape?: 'circle' | 'square'
      /** Dot radius in pixels. Default: `2.5`. */
      size?: number
      /** Horizontal spread of the dots as a share of the box width (0 to 1). Default: `0.5`. */
      jitter?: number
      /** Upper limit of drawn dots per chart. Default: `3000`. */
      maxPoints?: number
      /** Dot opacity (0 to 1). */
      opacity?: number
      /** 'series-dark' (a darker series colour), 'series' or any CSS colour. */
      fillColor?: 'series-dark' | 'series' | string
      /** Dot outline colour; white or not set uses the theme surface colour. */
      strokeColor?: string
      /** Dot outline width in pixels. */
      strokeWidth?: number
      /** Colours the dots by value instead of a fixed colour. */
      colorScale?: {
        /** Colours from the lowest to the highest value. */
        colors?: string[]
        /** Value mapped to the first colour; not set uses the smallest sample. */
        min?: number
        /** Value mapped to the last colour; not set uses the largest sample. */
        max?: number
        /** Number of discrete colour steps; not set gives a continuous scale. */
        steps?: number
      }
    }
  }
  /** Settings of heatmap series. */
  heatmap?: {
    /** West Coast Charts: heatmap extras. */
    wcc?: {
      /** Datetime x axis: centres the time labels on the equal-width cells. Default: `false`. */
      centerTimeLabels?: boolean
    }
    /** Corner radius of the cells in pixels. Default: `2`. */
    radius?: number
    /**
     * Shades each cell from its series colour by value; false uses the flat colour. Default:
     * `true`.
     */
    enableShades?: boolean
    /** Strength of the value shading (0 to 1). Default: `0.5`. */
    shadeIntensity?: number
    /**
     * With negative values, shades by distance from zero so large negative values are dark too.
     * Default: `false`.
     */
    reverseNegativeShade?: boolean
    /**
     * Shades each row by its own minimum and maximum instead of the whole chart. Default: `false`.
     */
    distributed?: boolean
    /** Draws the cell border in the cell colour instead of the stroke colour. Default: `false`. */
    useFillColorAsStroke?: boolean
    /** Fixed colours for value ranges. */
    colorScale?: {
      /**
       * Value ranges with their own colour; cells outside every range keep the series colour.
       * Default: `[]`.
       */
      ranges?: {
        /** Lower end of the range. */
        from?: number
        /** Upper end of the range. */
        to?: number
        /** Cell colour for values in the range. */
        color?: string
        /** Data label colour on cells in the range. */
        foreColor?: string
        /** Legend text for the range. */
        name?: string
      }[]
      /** Reverses the shading direction (high values light). Default: `false`. */
      inverse?: boolean
      /** Value treated as the minimum for shading; not set uses the data minimum. */
      min?: number
      /** Value treated as the maximum for shading; not set uses the data maximum. */
      max?: number
    }
  }
  /** Settings of treemap series. */
  treemap?: {
    /** Shades each tile from its series colour by value. Default: `true`. */
    enableShades?: boolean
    /** Strength of the value shading (0 to 1). Default: `0.5`. */
    shadeIntensity?: number
    /** Gives every tile its own palette colour. Default: `false`. */
    distributed?: boolean
    /** With negative values, shades by distance from zero. Default: `false`. */
    reverseNegativeShade?: boolean
    /** Draws the tile border in the tile colour. Default: `false`. */
    useFillColorAsStroke?: boolean
    /** Text of the tile labels. */
    dataLabels?: {
      /** 'scale' shrinks the font to fit the tile; 'truncate' keeps the size and cuts the text. Default: `'scale'`. */
      format?: 'scale' | 'truncate'
    }
    /** Corner radius of the tiles in pixels. Default: `4`. */
    borderRadius?: number
    /** Fixed colours for value ranges. */
    colorScale?: {
      /** Reverses the shading direction. Default: `false`. */
      inverse?: boolean
      /** Value ranges with their own colour. Default: `[]`. */
      ranges?: {
        /** Lower end of the range. */
        from?: number
        /** Upper end of the range. */
        to?: number
        /** Tile colour for values in the range. */
        color?: string
        /** Label colour on tiles in the range. */
        foreColor?: string
        /** Legend text for the range. */
        name?: string
      }[];
      /** Value treated as the minimum for shading. */
      min?: number
      /** Value treated as the maximum for shading. */
      max?: number
    };
    /** Name badge drawn on each series block when there are several series. */
    seriesTitle?: {
      /** Shows the badges. Default: `true`. */
      show?: boolean,
      /** Moves the badge vertically. Default: `1`. */
      offsetY?: number,
      /** Moves the badge horizontally. Default: `1`. */
      offsetX?: number,
      /** Badge border colour. Default: `'#000'`. */
      borderColor?: string,
      /** Badge border width in pixels. Default: `1`. */
      borderWidth?: number,
      /** Badge corner radius in pixels. Default: `2`. */
      borderRadius?: number,
      /** Text and box style of the badge. */
      style?: {
        /** Badge background colour. Default: `'rgba(0, 0, 0, 0.6)'`. */
        background?: string,
        /** Badge text colour. Default: `'#fff'`. */
        color?: string,
        /** Badge font size. Default: `'12px'`. */
        fontSize?: string,
        /** Badge font family. */
        fontFamily?: string,
        /** Badge font weight. Default: `400`. */
        fontWeight?: number | string,
        /** CSS class added to the badge. Default: `''`. */
        cssClass?: string,
        /** Space between badge text and border. */
        padding?: {
          /** Left padding in pixels. Default: `6`. */
          left?: number,
          /** Right padding in pixels. Default: `6`. */
          right?: number,
          /** Top padding in pixels. Default: `2`. */
          top?: number,
          /** Bottom padding in pixels. Default: `2`. */
          bottom?: number,
        },
      },
    }
  }
  /** Settings of pie and donut charts. */
  pie?: {
    /** West Coast Charts: opt-in segment styling (pie and donut, not polarArea). */
    wcc?: {
      /** Gap between segments in pixels. */
      segmentGap?: number
      /** Corner radius of the segments in pixels. */
      segmentRadius?: number
    }
    /** Angle in degrees where the first slice starts (0 = 12 o'clock, clockwise). Default: `0`. */
    startAngle?: number
    /**
     * Angle in degrees where the last slice ends; 180 with startAngle -90 gives a half circle.
     * Default: `360`.
     */
    endAngle?: number
    /** Scale factor applied to the whole pie (1 = fit). Default: `1`. */
    customScale?: number
    /** Moves the pie horizontally. Default: `0`. */
    offsetX?: number
    /** Moves the pie vertically. Default: `0`. */
    offsetY?: number
    /** Pulls a clicked slice out of the pie. Default: `true`. */
    expandOnClick?: boolean
    /** Placement of the slice labels. */
    dataLabels?: {
      /** Moves the labels outward (positive) or inward (negative), in pixels. Default: `0`. */
      offset?: number
      /** Slices smaller than this angle in degrees get no label. Default: `10`. */
      minAngleToShowLabel?: number
    }
    /** Settings of the donut hole. */
    donut?: {
      /** Diameter of the hole as a percentage of the pie. Default: `'65%'`. */
      size?: string
      /** Fill colour of the hole. Default: `'transparent'`. */
      background?: string
      /** Texts in the middle of the donut. */
      labels?: {
        /** West Coast Charts: readability of the centre labels (features/readability) */
        readability?: WccReadability
        /** Shows the middle texts. Default: `false`. */
        show?: boolean
        /** The upper text: name of the hovered slice. */
        name?: {
          /** Shows the name. Default: `true`. */
          show?: boolean
          /** Font size of the name. Default: `'16px'`. */
          fontSize?: string
          /** Font family of the name. */
          fontFamily?: string
          /** Font weight of the name. Default: `600`. */
          fontWeight?: string | number
          /** Colour of the name; not set uses the slice colour. */
          color?: string
          /** Moves the name vertically. Default: `-10`. */
          offsetY?: number,
          /** Function that returns the name text. The built-in one returns the slice name. */
          formatter?(val: string): string
        }
        /** The lower text: value of the hovered slice. */
        value?: {
          /** Shows the value. Default: `true`. */
          show?: boolean
          /** Font size of the value. Default: `'20px'`. */
          fontSize?: string
          /** Font family of the value. */
          fontFamily?: string
          /** Font weight of the value. Default: `400`. */
          fontWeight?: string | number
          /** Colour of the value; not set uses `chart.foreColor`. */
          color?: string
          /** Moves the value vertically. Default: `10`. */
          offsetY?: number
          /** Function that returns the value text. The built-in one returns the value. */
          formatter?(val: string): string
        }
        /** Total shown while no slice is hovered. */
        total?: {
          /** Shows the total when nothing is hovered. Default: `false`. */
          show?: boolean
          /** Keeps the total even while a slice is hovered. Default: `false`. */
          showAlways?: boolean
          /** Font family of the total label. */
          fontFamily?: string
          /** Font weight of the total label. Default: `400`. */
          fontWeight?: string | number
          /** Font size of the total label. Default: `'16px'`. */
          fontSize?: string
          /** Text shown in place of a slice name. Default: `'Total'`. */
          label?: string
          /** Colour of the total label. */
          color?: string
          /**
           * Function that returns the total value text. The built-in one returns the sum of the
           * slice values.
           */
          formatter?(w: any): string
        }
      }
    }
  }
  /** Settings of polar area charts. */
  polarArea?: {
    /** Concentric guide circles. */
    rings?: {
      /** Line width of the rings; 0 hides them. Default: `1`. */
      strokeWidth?: number
      /** Colour of the rings. Default: `'#e8e8e8'`. */
      strokeColor?: string
    }
    /** Lines from the centre to each slice border. */
    spokes?: {
      /** Line width of the spokes; 0 hides them. Default: `1`. */
      strokeWidth?: number;
      /** Colour of the spokes (or one per spoke). Default: `'#e8e8e8'`. */
      connectorColors?: string | string[];
    };
  }
  /** Settings of radar charts. */
  radar?: {
    /** Radius in pixels; not set fits the plot. */
    size?: number
    /** Moves the radar horizontally. Default: `0`. */
    offsetX?: number
    /** Moves the radar vertically. Default: `0`. */
    offsetY?: number
    /** The web of guide polygons. */
    polygons?: {
      /** Colour of the polygon lines (or one per ring). Default: `'#e8e8e8'`. */
      strokeColors?: string | string[]
      /** Width of the polygon lines. Default: `1`. */
      strokeWidth?: string | string[]
      /** Colour of the lines from the centre to each corner. Default: `'#e8e8e8'`. */
      connectorColors?: string | string[]
      /** Fill between the polygons. */
      fill?: {
        /** Fill colours of the rings, repeated in order; not set leaves them empty. */
        colors?: string[]
      }
    }
  }
  /** Settings of radial bar (circular progress) charts. */
  radialBar?: {
    /** Draws the first series on the outside instead of the inside. Default: `false`. */
    inverseOrder?: boolean
    /** Start angle of the bars in degrees (0 = 12 o'clock). Default: `0`. */
    startAngle?: number
    /** End angle of the bars in degrees; 360 is a full circle. Default: `360`. */
    endAngle?: number
    /** Moves the chart horizontally. Default: `0`. */
    offsetX?: number
    /** Moves the chart vertically. Default: `0`. */
    offsetY?: number
    /** The empty centre. */
    hollow?: {
      /** Space in pixels between the hollow and the innermost bar. Default: `5`. */
      margin?: number
      /** Diameter of the hollow as a percentage. Default: `'50%'`. */
      size?: string
      /** Fill colour of the hollow. Default: `'transparent'`. */
      background?: string
      /** URL of an image drawn in the hollow. */
      image?: string
      /** Width of the image in pixels. Default: `150`. */
      imageWidth?: number
      /** Height of the image in pixels. Default: `150`. */
      imageHeight?: number
      /** Moves the image horizontally. Default: `0`. */
      imageOffsetX?: number
      /** Moves the image vertically. Default: `0`. */
      imageOffsetY?: number
      /** Clips the image to the circle of the hollow. Default: `true`. */
      imageClipped?: boolean
      /** 'front' draws the hollow above the tracks, 'back' below them. Default: `'front'`. */
      position?: 'front' | 'back'
      /** Shadow of the hollow. */
      dropShadow?: ApexDropShadow
    }
    /** The background ring behind each bar. */
    track?: {
      /** Draws the tracks. Default: `true`. */
      show?: boolean
      /** Start angle of the track; not set uses `radialBar.startAngle`. */
      startAngle?: number
      /** End angle of the track; not set uses `radialBar.endAngle`. */
      endAngle?: number
      /** Track colour (or one per series). Default: `'#f2f2f2'`. */
      background?: string | string[]
      /** Track thickness as a percentage of the bar thickness. Default: `'97%'`. */
      strokeWidth?: string
      /** Track opacity (0 to 1). Default: `1`. */
      opacity?: number
      /** Space in pixels between neighbouring tracks. Default: `5`. */
      margin?: number
      /** Shadow of the tracks. */
      dropShadow?: ApexDropShadow
    }
    /** Texts in the centre. */
    dataLabels?: {
      /** West Coast Charts: readability of the centre labels (features/readability) */
      readability?: WccReadability
      /** Shows the centre texts. Default: `true`. */
      show?: boolean
      /** Upper text: name of the series. */
      name?: {
        /** Shows the name. Default: `true`. */
        show?: boolean
        /** Font family of the name. */
        fontFamily?: string
        /** Font weight of the name. Default: `600`. */
        fontWeight?: string | number
        /** Font size of the name. Default: `'16px'`. */
        fontSize?: string
        /** Colour of the name; not set uses the series colour. */
        color?: string
        /** Moves the name vertically. Default: `0`. */
        offsetY?: number
      }
      /** Lower text: the value. */
      value?: {
        /** Shows the value. Default: `true`. */
        show?: boolean
        /** Font family of the value. */
        fontFamily?: string
        /** Font size of the value. Default: `'14px'`. */
        fontSize?: string
        /** Font weight of the value. Default: `400`. */
        fontWeight?: string | number
        /** Colour of the value; not set uses `chart.foreColor`. */
        color?: string
        /** Moves the value vertically. Default: `16`. */
        offsetY?: number
        /** Function that returns the value text. The built-in one appends '%'. */
        formatter?(val: number): string
      }
      /** Combined text for several series, shown while none is hovered. */
      total?: {
        /** Shows the total. Default: `false`. */
        show?: boolean
        /** Text shown in place of a series name. Default: `'Total'`. */
        label?: string
        /** Colour of the total label. */
        color?: string
        /** Font family of the total label. */
        fontFamily?: string
        /** Font weight of the total label. Default: `600`. */
        fontWeight?: string | number
        /** Font size of the total label. Default: `'16px'`. */
        fontSize?: string
        /**
         * Function that returns the total value text. The built-in one averages the series values
         * and appends '%'.
         */
        formatter?(opts: any): string
      }
    }
    /** Series names written at the start of each bar. */
    barLabels?: {
      /** Shows the bar labels. Default: `false`. */
      enabled?: boolean
      /** Moves the bar labels horizontally. Default: `0`. */
      offsetX?: number
      /** Moves the bar labels vertically. Default: `0`. */
      offsetY?: number
      /** Colours each bar label with its series colour. Default: `true`. */
      useSeriesColors?: boolean
      /** Font family of the bar labels. */
      fontFamily?: string
      /** Font weight of the bar labels. Default: `600`. */
      fontWeight?: string | number
      /** Font size of the bar labels. Default: `'16px'`. */
      fontSize?: string
      /** Function that returns the bar label text. The built-in one returns the series name. */
      formatter?: (barName: string, opts?: any) => string
      /** Called when a bar label is clicked. */
      onClick?: (barName: string, opts?: any) => void
    }
  }
}

type ApexColorStop = {
  /** Position of the stop along the gradient, in percent (0 to 100). */
  offset: number
  /** Colour at this stop. */
  color: string
  /** Opacity at this stop (0 to 1). */
  opacity: number
}

type ApexFill = {
  /** Fill colours; not set uses the series colours. */
  colors?: any[]
  /** Fill opacity (0 to 1); an array gives one per series. Default: `0.85`. */
  opacity?: number | number[]
  /**
   * 'solid', 'gradient', 'pattern' or 'image'; an array gives one per series. Default: `'solid'`.
   */
  type?: string | string[]
  /** Settings for `type: 'gradient'`. */
  gradient?: {
    /** 'light' or 'dark': direction in which the series colour is shaded. Default: `'dark'`. */
    shade?: string
    /**
     * Direction: 'horizontal', 'vertical', 'diagonal1', 'diagonal2' or 'radial'. Default:
     * `'horizontal'`.
     */
    type?: string
    /** Strength of the shading (0 to 1). Default: `0.5`. */
    shadeIntensity?: number
    /** End colours of the gradient per series; not set shades the series colour. */
    gradientToColors?: string[]
    /** Swaps start and end colour for horizontal bars and similar shapes. Default: `true`. */
    inverseColors?: boolean
    /** Opacity at the start of the gradient. Default: `1`. */
    opacityFrom?: number | number[]
    /** Opacity at the end of the gradient. Default: `1`. */
    opacityTo?: number | number[]
    /** Positions in percent where the gradient changes. Default: `[0,50,100]`. */
    stops?: number[],
    /**
     * Explicit stops; when set they replace the generated gradient. An array of arrays gives stops
     * per series. Default: `[]`.
     */
    colorStops?: ApexColorStop[][] | ApexColorStop[]
  }
  /** Settings for `type: 'image'`. */
  image?: {
    /** Image URL, or one URL per series. Default: `[]`. */
    src?: string | string[]
    /**
     * Width of the image tile in pixels; set together with `height`, otherwise the image is
     * stretched to the shape.
     */
    width?: number
    /** Height of the image tile in pixels; set together with `width`. */
    height?: number
  }
  /** Settings for `type: 'pattern'`. */
  pattern?: {
    /**
     * 'verticalLines', 'horizontalLines', 'slantedLines', 'squares' or 'circles'; an array gives
     * one per series. Default: `'squares'`.
     */
    style?: string | string[]
    /** Width of the pattern tile in pixels. Default: `6`. */
    width?: number
    /** Height of the pattern tile in pixels. Default: `6`. */
    height?: number
    /** Line width inside the pattern in pixels. Default: `2`. */
    strokeWidth?: number
  }
}

/**
 * Chart Legend configuration options.
 * Reference: docs/guide/reference/options.md
 */
type ApexLegend = {
  /** Shows the legend. Default: `true`. */
  show?: boolean
  /** Shows the legend even when there is only one series. Default: `false`. */
  showForSingleSeries?: boolean
  /** Lists series that contain only null values. Default: `true`. */
  showForNullSeries?: boolean
  /** Lists series whose values are all zero. Default: `true`. */
  showForZeroSeries?: boolean
  /**
   * Takes the legend out of the layout so it overlaps the plot instead of taking space. Default:
   * `false`.
   */
  floating?: boolean
  /** Lists the series in reverse order. Default: `false`. */
  inverseOrder?: boolean
  /** Side of the chart: 'top', 'right', 'bottom' or 'left'. Default: `'bottom'`. */
  position?: 'top' | 'right' | 'bottom' | 'left'
  /** Alignment of a top/bottom legend: 'left', 'center' or 'right'. Default: `'center'`. */
  horizontalAlign?: 'left' | 'center' | 'right'
  /** Font size of the legend texts. Default: `'12px'`. */
  fontSize?: string
  /** Font family of the legend texts; not set uses `chart.fontFamily`. */
  fontFamily?: string
  /** Font weight of the legend texts. Default: `400`. */
  fontWeight?: string | number
  /** Fixed width of the legend in pixels. */
  width?: number
  /** Fixed height of the legend in pixels. */
  height?: number
  /** Moves the legend horizontally. Default: `-20`. */
  offsetX?: number
  /** Moves the legend vertically. Default: `4`. */
  offsetY?: number
  /** Function that returns the text of an entry from the series name and `{ seriesIndex, w }`. */
  formatter?(legendName: string, opts?: any): string
  /**
   * Function that returns the entry text while the tooltip hovers a data point, so the legend can
   * show the hovered value.
   */
  tooltipHoverFormatter?(legendName: string, opts?: any): string
  /** Texts that replace the series names as legend entries. Default: `[]`. */
  customLegendItems?: string[]
  /** With `series[].group`, puts the entries of each group into its own block. Default: `true`. */
  clusterGroupedSeries?: boolean;
  /**
   * Direction in which the group blocks are laid out: 'vertical' or 'horizontal'. Default:
   * `'vertical'`.
   */
  clusterGroupedSeriesOrientation?: string;
  /** Colours of the entry texts. */
  labels?: {
    /** Text colour; an array gives one colour per entry. */
    colors?: string | string[]
    /** Colours each entry text with its series colour. Default: `false`. */
    useSeriesColors?: boolean
  }
  /** The coloured symbols in front of the entries. */
  markers?: {
    /** Size of the symbol in pixels. Default: `7`. */
    size?: number
    /** Outline width of the symbol in pixels, or one per series. Default: `1`. */
    strokeWidth?: number | number[]
    /** Symbol colours; not set uses the series colours. */
    fillColors?: string[]
    /**
     * Symbol shape ('circle', 'square', 'line', 'plus', 'cross' ...); not set follows the series
     * marker shape.
     */
    shape?: ApexMarkerShape
    /** Moves the symbols horizontally. Default: `0`. */
    offsetX?: number
    /** Moves the symbols vertically. Default: `0`. */
    offsetY?: number
    /** Function (or one per series) returning markup that replaces the symbol. */
    customHTML?: (() => any) | Array<() => any>
    /** Called when a legend symbol is clicked. */
    onClick?(): void
  }
  /** Space around each entry. */
  itemMargin?: {
    /** Space in pixels left and right of each entry. Default: `5`. */
    horizontal?: number
    /** Space in pixels above and below each entry. Default: `4`. */
    vertical?: number
  }
  /** What a click on an entry does. */
  onItemClick?: {
    /** Hides or shows the series of the clicked entry. Default: `true`. */
    toggleDataSeries?: boolean
  }
  /** What hovering an entry does. */
  onItemHover?: {
    /** Dims the other series while an entry is hovered. Default: `true`. */
    highlightDataSeries?: boolean
  }
}

type MarkerShapeOptions = "circle" | "square" | "rect" | "line" | 'cross' | 'plus' | 'star' | 'sparkle' | 'diamond' | 'triangle'

type ApexMarkerShape = MarkerShapeOptions | MarkerShapeOptions[]

type ApexDiscretePoint = {
  /** Series of the point. */
  seriesIndex?: number
  /** Index of the point in its series. */
  dataPointIndex?: number
  /** Fill colour of this marker. */
  fillColor?: string
  /** Outline colour of this marker. */
  strokeColor?: string
  /** Size of this marker in pixels. */
  size?: number
  /** Shape of this marker. */
  shape?: ApexMarkerShape
}

type ApexMarkers = {
  /**
   * Marker radius in pixels; 0 hides markers until a point is hovered. An array gives one per
   * series. Default: `0`.
   */
  size?: number | number[]
  /** Marker fill colours; not set uses the series colours. */
  colors?: string | string[]
  /** Marker outline colour (or one per series). Default: `'#fff'`. */
  strokeColors?: string | string[]
  /** Marker outline width in pixels. Default: `2`. */
  strokeWidth?: number | number[]
  /** Marker outline opacity (0 to 1). Default: `0.9`. */
  strokeOpacity?: number | number[]
  /** Dash length of the outline; 0 draws a solid outline. Default: `0`. */
  strokeDashArray?: number | number[]
  /** Marker fill opacity (0 to 1). Default: `1`. */
  fillOpacity?: number | number[]
  /** Individual markers with their own look, addressed by series and data index. Default: `[]`. */
  discrete?: ApexDiscretePoint[]
  /**
   * 'circle', 'square', 'rect', 'diamond', 'triangle', 'cross', 'plus', 'star' or 'sparkle'; an
   * array gives one per series. Default: `'circle'`.
   */
  shape?: ApexMarkerShape
  /** Moves the markers horizontally. Default: `0`. */
  offsetX?: number
  /** Moves the markers vertically. Default: `0`. */
  offsetY?: number
  /**
   * After a null value, draws a marker on the next point so values that stand alone between gaps
   * stay visible. Default: `true`.
   */
  showNullDataPoints?: boolean
  /** Called when a marker is clicked. */
  onClick?(e?: any): void
  /** Called when a marker is double-clicked. */
  onDblClick?(e?: any): void
  /** Marker size while hovered. */
  hover?: {
    /** Fixed hover radius in pixels; when set it replaces `sizeOffset`. */
    size?: number
    /** Pixels added to the radius while hovered. Default: `3`. */
    sizeOffset?: number
  }
}

type ApexNoData = {
  /** The text; not set shows nothing for empty charts. */
  text?: string
  /** 'left', 'center' or 'right'. Default: `'center'`. */
  align?: 'left' | 'right' | 'center'
  /** 'top', 'middle' or 'bottom'. Default: `'middle'`. */
  verticalAlign?: 'top' | 'middle' | 'bottom'
  /** Moves the text horizontally. Default: `0`. */
  offsetX?: number
  /** Moves the text vertically. Default: `0`. */
  offsetY?: number
  /** Text style. */
  style?: {
    /** Text colour; not set uses `chart.foreColor`. */
    color?: string
    /** Font size. Default: `'14px'`. */
    fontSize?: string
    /** Font family; not set uses `chart.fontFamily`. */
    fontFamily?: string
  }
}

/**
 * Chart Datalabels options
 * Reference: docs/guide/reference/options.md
 */
type ApexDataLabels = {
  /** West Coast Charts: halo / pill / auto-contrast over the marks (features/readability) */
  readability?: WccReadability
  /** Draws the value next to (or inside) each data point. Default: `true`. */
  enabled?: boolean
  /** Indexes of the series that get labels; not set means all series. */
  enabledOnSeries?: undefined | number[]
  /** Horizontal anchor of the label text: 'start', 'middle' or 'end'. Default: `'middle'`. */
  textAnchor?: 'start' | 'middle' | 'end'
  /**
   * Colours each label with the colour of its own point instead of its series. Default: `false`.
   */
  distributed?: boolean
  /** Moves the labels horizontally. Default: `0`. */
  offsetX?: number
  /** Moves the labels vertically. Default: `0`. */
  offsetY?: number
  /** Text style of the labels. */
  style?: {
    /** Font size of the labels. Default: `'12px'`. */
    fontSize?: string
    /** Font family of the labels; not set uses `chart.fontFamily`. */
    fontFamily?: string
    /** Font weight of the labels. Default: `600`. */
    fontWeight?: string | number
    /** Label colours; not set uses the series colours (or white inside bars and slices). */
    colors?: any[]
  }
  /** Box drawn behind each label (not on bubble charts). */
  background?: {
    /** Draws the box. Default: `true`. */
    enabled?: boolean
    /** Text colour used when the box is drawn. Default: `'#fff'`. */
    foreColor?: string
    /** Box colour; not set uses the series colour. */
    backgroundColor?: string
    /** Corner radius of the box in pixels. Default: `2`. */
    borderRadius?: number
    /** Space in pixels between text and box border. Default: `4`. */
    padding?: number
    /** Opacity of the box (0 to 1). Default: `0.9`. */
    opacity?: number
    /** Border width of the box in pixels. Default: `1`. */
    borderWidth?: number
    /** Border colour of the box. Default: `'#fff'`. */
    borderColor?: string
    /** Shadow behind the box. */
    dropShadow?: ApexDropShadow
  }
  /** Shadow behind the label text. */
  dropShadow?: ApexDropShadow
  /**
   * Function that returns the label text from the value and `{ seriesIndex, dataPointIndex, w }`.
   * The built-in one prints the value (percentages on pie and donut).
   */
  formatter?(val: string | number | number[], opts?: any): string | number | (string | number)[]
}

type ApexResponsive = {
  /** Container width in pixels at and below which `options` apply. */
  breakpoint?: number
  /** Options merged over the chart options while the width is at or below `breakpoint`. */
  options?: any
}

type ApexTooltipY = {
  /** Series name part of a tooltip row. */
  title?: {
    /**
     * Function that returns the name text from the series name. The built-in one appends ': ' (and returns '' for an unnamed series).
     */
    formatter?(seriesName: string, opts?: any): string
  }
  /**
   * Function that returns the value text from the value and `{ series, seriesIndex, dataPointIndex,
   * w }`.
   */
  formatter?(val: number, opts?: any): string
}

/**
 * Chart Tooltip options
 * Reference: docs/guide/reference/options.md
 */
type ApexTooltip = {
  /** Shows the tooltip. Default: `true`. */
  enabled?: boolean
  /** Indexes of the series that appear in the tooltip; not set means all series. */
  enabledOnSeries?: undefined | number[]
  /**
   * Shows all series at the hovered x position in one tooltip; false shows only the nearest series.
   * Default: `true`.
   */
  shared?: boolean
  /**
   * Moves the tooltip with the pointer instead of anchoring it to the data point. Default: `false`.
   */
  followCursor?: boolean
  /**
   * Shows the tooltip only while the pointer is over a marker or bar, not anywhere in its column.
   * Default: `false`.
   */
  intersect?: boolean
  /** Lists the series in reverse order in a shared tooltip. Default: `false`. */
  inverseOrder?: boolean
  /**
   * Function (or one per series) returning the complete tooltip markup from `{ series, seriesIndex,
   * dataPointIndex, w }`; the output goes through `chart.sanitizeHtml`.
   */
  custom?: ((options: any) => any) | ((options: any) => any)[]
  /** Uses the hovered series colour as tooltip background. Default: `false`. */
  fillSeriesColor?: boolean
  /** Colour scheme of the tooltip box: 'light' or 'dark'. Default: `'light'`. */
  theme?: string
  /** CSS class added to the tooltip element. Default: `''`. */
  cssClass?: string
  /** Leaves out series that have no value at the hovered position. Default: `false`. */
  hideEmptySeries?: boolean
  /** Text style of the tooltip. */
  style?: {
    /** Font size of the tooltip text. Default: `'12px'`. */
    fontSize?: string
    /** Font family of the tooltip text; not set uses `chart.fontFamily`. */
    fontFamily?: string
  }
  /** What hovering a data point does to the other series. */
  onDatasetHover?: {
    /** Dims the other series while a point is hovered. Default: `false`. */
    highlightDataSeries?: boolean
  }
  /** The header row of the tooltip (the x value). */
  x?: {
    /** Shows the header row. Default: `true`. */
    show?: boolean
    /** Date format of the header on datetime axes. Default: `'dd MMM'`. */
    format?: string
    /** Function that returns the header text from the x value. */
    formatter?(val: number, opts?: any): string
  }
  /** Value rows of the tooltip; an array gives settings per series. */
  y?: ApexTooltipY | ApexTooltipY[]
  /** Third value of bubble charts (bubble size). */
  z?: {
    /** Text in front of the z value. Default: `'Size: '`. */
    title?: string
    /** Function that returns the z text from the value. */
    formatter?(val: number): string
  }
  /** The coloured dot in front of each tooltip row. */
  marker?: {
    /** Shows the dot. Default: `true`. */
    show?: boolean
    /** Dot colours; not set uses the series colours. */
    fillColors?: string[]
  }
  /** Layout of the tooltip rows. */
  items?: {
    /**
     * CSS `display` value of each row ('flex' puts the dot and text side by side). Default:
     * `'flex'`.
     */
    display?: string
  }
  /** Pins the tooltip to a corner of the plot instead of next to the data point. */
  fixed?: {
    /** Enables the pinned position. Default: `false`. */
    enabled?: boolean
    /** Corner: 'topLeft', 'topRight', 'bottomLeft' or 'bottomRight'. Default: `'topRight'`. */
    position?: string // topRight; topLeft; bottomRight; bottomLeft
    /** Moves the pinned tooltip horizontally. Default: `0`. */
    offsetX?: number
    /** Moves the pinned tooltip vertically. Default: `0`. */
    offsetY?: number
  }
}

/**
 * X Axis options
 * Reference: docs/guide/reference/options.md
 */
type ApexXAxis = {
  /**
   * How x values are read: 'category' (labels in order), 'numeric' (linear numbers) or 'datetime'
   * (timestamps or date strings on a time scale). Default: `'category'`.
   */
  type?: 'category' | 'datetime' | 'numeric'
  /**
   * Labels of the x positions when the series data are plain values; for datetime axes these can be
   * dates. Default: `[]`.
   */
  categories?: any;
  /** Replaces the displayed x labels with these texts without changing the data or the scale. */
  overwriteCategories?: number[] | string[] | undefined;
  /** Moves the x axis (labels, border, ticks) horizontally by this many pixels. Default: `0`. */
  offsetX?: number;
  /** Moves the x axis vertically by this many pixels. Default: `0`. */
  offsetY?: number;
  /** Accepted for ApexCharts 4.x type compatibility; the renderer does not read it. */
  sorted?: boolean;
  /** The text labels along the x axis. */
  labels?: {
    /** West Coast Charts: halo / pill / auto-contrast where labels overlap marks (features/readability) */
    readability?: WccReadability
    /** Shows the x labels. Default: `true`. */
    show?: boolean
    /**
     * Rotation in degrees applied when the labels would overlap (category axes). Default: `-45`.
     */
    rotate?: number
    /** Rotates the labels even when they would fit. Default: `false`. */
    rotateAlways?: boolean
    /**
     * Drops a label that would overlap the label drawn before it. Default: `true`.
     */
    hideOverlappingLabels?: boolean
    /**
     * On datetime axes, false drops a label whose text repeats the previous label. Default:
     * `true`.
     */
    showDuplicates?: boolean
    /** Cuts long labels to the available width and adds an ellipsis. Default: `false`. */
    trim?: boolean
    /** Minimum height in pixels reserved for the x labels. */
    minHeight?: number
    /**
     * Maximum height in pixels the (rotated) x labels may take; longer ones are cut. Default:
     * `120`.
     */
    maxHeight?: number
    /** Text style of the x labels. */
    style?: {
      /**
       * Label colour; an array gives one colour per label. Empty uses `chart.foreColor`. Default:
       * `[]`.
       */
      colors?: string | string[]
      /** Font size of the labels. Default: `'12px'`. */
      fontSize?: string
      /** Font family of the labels; not set uses `chart.fontFamily`. */
      fontFamily?: string
      /** Font weight of the labels. Default: `400`. */
      fontWeight?: string | number
      /** CSS class added to every label text element. Default: `''`. */
      cssClass?: string
    }
    /** Moves the labels horizontally by this many pixels. Default: `0`. */
    offsetX?: number
    /** Moves the labels vertically by this many pixels. Default: `0`. */
    offsetY?: number
    /**
     * Date format string for datetime labels (for example 'dd MMM'); overrides `datetimeFormatter`.
     */
    format?: string
    /**
     * Function that returns the text of each label from its value (and timestamp on datetime axes).
     */
    formatter?(value: string, timestamp?: number, opts?: any): string | string[]
    /**
     * Formats datetime labels in UTC; false uses the browser's local time zone. Default: `true`.
     */
    datetimeUTC?: boolean
    /** Date format per tick unit, chosen from the span of the visible range. */
    datetimeFormatter?: {
      /** Format of ticks that fall on a new year. Default: `'yyyy'`. */
      year?: string
      /** Format of ticks that fall on a new month. Default: `'MMM 'yy'`. */
      month?: string
      /** Format of ticks that fall on a new day. Default: `'dd MMM'`. */
      day?: string
      /** Format of hour ticks. Default: `'HH:mm'`. */
      hour?: string
      /** Format of minute ticks. Default: `'HH:mm:ss'`. */
      minute?: string
      /** Format of second ticks. Default: `'HH:mm:ss'`. */
      second?: string
    }
  }
  /** A second row of labels under the x labels that spans groups of categories. */
  group?: {
    /** The groups, left to right. Default: `[]`. */
    groups?: {
      /** Text shown under the group. */
      title: string
      /** Number of categories the group spans. */
      cols: number
    }[],
    /** Text style of the group labels. */
    style?: {
      /** Colour of the group labels; an array gives one per group. Default: `[]`. */
      colors?: string | string[]
      /** Font size of the group labels. Default: `'12px'`. */
      fontSize?: string
      /** Font family of the group labels. */
      fontFamily?: string
      /** Font weight of the group labels. Default: `400`. */
      fontWeight?: string | number
      /** CSS class added to the group label elements. Default: `''`. */
      cssClass?: string
    }
  }
  /** The line along the x axis. */
  axisBorder?: {
    /** Draws the axis line. Default: `true`. */
    show?: boolean
    /** Colour of the axis line. Default: `'#e0e0e0'`. */
    color?: string
    /** Moves the axis line horizontally. Default: `0`. */
    offsetX?: number
    /** Moves the axis line vertically. Default: `0`. */
    offsetY?: number
    /** Accepted for ApexCharts 4.x type compatibility; the renderer does not read it. */
    strokeWidth?: number
  }
  /** Short tick marks below the axis line. */
  axisTicks?: {
    /** Draws the tick marks. Default: `true`. */
    show?: boolean
    /** Accepted for ApexCharts 4.x type compatibility; the renderer does not read it. */
    borderType?: string
    /** Colour of the tick marks. Default: `'#e0e0e0'`. */
    color?: string
    /** Length of the tick marks in pixels. Default: `6`. */
    height?: number
    /** Moves the tick marks horizontally. Default: `0`. */
    offsetX?: number
    /** Moves the tick marks vertically. Default: `0`. */
    offsetY?: number
  }
  /**
   * 'on' puts ticks and labels on the data points; 'between' puts the points between the ticks (the
   * usual look for columns). Default: `'on'`.
   */
  tickPlacement?: string
  /** Number of intervals on a numeric axis; 'dataPoints' makes one tick per data point. */
  tickAmount?: number | 'dataPoints'
  /** Distance between two ticks in axis units; used instead of `tickAmount`. */
  stepSize?: number
  /** Lowest x value shown; data below it are cut off. */
  min?: number
  /** Highest x value shown; data above it are cut off. */
  max?: number
  /**
   * Width of the visible x window, ending at the newest value; useful for live data with
   * appendData.
   */
  range?: number
  /**
   * Takes the x axis out of the layout so the plot uses its height; the labels are drawn over the
   * plot. Default: `false`.
   */
  floating?: boolean
  /** Number of decimals in numeric x labels; not set picks a value from the range. */
  decimalsInFloat?: number
  /** 'bottom' or 'top' of the plot. Default: `'bottom'`. */
  position?: string
  /** Title text of the x axis. */
  title?: {
    /** The title text; not set draws no title. */
    text?: string
    /** Moves the title horizontally. Default: `0`. */
    offsetX?: number
    /** Moves the title vertically. Default: `0`. */
    offsetY?: number
    /** Text style of the title. */
    style?: {
      /** Title colour; not set uses `chart.foreColor`. */
      color?: string
      /** Title font family. */
      fontFamily?: string
      /** Title font weight. Default: `900`. */
      fontWeight?: string | number
      /** Title font size. Default: `'12px'`. */
      fontSize?: string
      /** CSS class added to the title element. Default: `''`. */
      cssClass?: string
    }
  }
  /** Vertical marker that follows the hovered x position. */
  crosshairs?: {
    /** Shows the crosshair. Default: `true`. */
    show?: boolean
    /**
     * 'tickWidth' spans one category, 'barWidth' matches the bar width, a number is pixels.
     * Default: `1`.
     */
    width?: number | string
    /** 'back' draws it behind the series, 'front' above them. Default: `'back'`. */
    position?: string
    /** Opacity of the crosshair (0 to 1). Default: `0.9`. */
    opacity?: number
    /** Line of a thin crosshair. */
    stroke?: {
      /** Line colour. Default: `'#b6b6b6'`. */
      color?: string
      /** Line width in pixels; 0 hides the line. Default: `1`. */
      width?: number
      /** Dash length in pixels; 0 draws a solid line. Default: `3`. */
      dashArray?: number
    }
    /** Fill of a wide crosshair (when `width` is more than one pixel). */
    fill?: {
      /** 'solid' or 'gradient'. Default: `'solid'`. */
      type?: string
      /** Fill colour for type 'solid'. Default: `'#B1B9C4'`. */
      color?: string
      /** Gradient for type 'gradient'. */
      gradient?: {
        /** Colour at the start of the gradient. Default: `'#D8E3F0'`. */
        colorFrom?: string
        /** Colour at the end of the gradient. Default: `'#BED1E6'`. */
        colorTo?: string
        /** Gradient stop positions in percent. Default: `[0,100]`. */
        stops?: number[]
        /** Opacity at the start of the gradient. Default: `0.4`. */
        opacityFrom?: number
        /** Opacity at the end of the gradient. Default: `0.5`. */
        opacityTo?: number
      }
    }
    /** Shadow behind the crosshair. */
    dropShadow?: ApexDropShadow
  }
  /** Small box on the x axis that shows the hovered x value. */
  tooltip?: {
    /** Shows the x-axis tooltip. Default: `true`. */
    enabled?: boolean
    /** Moves the x-axis tooltip vertically. Default: `0`. */
    offsetY?: number
    /** Function that returns the text of the x-axis tooltip from the x value. */
    formatter?(value: string, opts?: object): string
    /** Text style of the x-axis tooltip. */
    style?: {
      /** Font size of the x-axis tooltip. Default: `'12px'`. */
      fontSize?: string
      /** Font family of the x-axis tooltip. */
      fontFamily?: string
    }
  }
}

/**
 * Y Axis options
 * Reference: docs/guide/reference/options.md
 */

type ApexYAxis = {
  /** West Coast Charts: y axis extras. */
  wcc?: {
    /** Puts zero on the same gridline on every axis that sets it. Default: `false`. */
    alignZero?: boolean
  }
  /** Draws this y axis. Default: `true`. */
  show?: boolean
  /** Keeps the axis when all series bound to it are hidden through the legend. Default: `false`. */
  showAlways?: boolean
  /** Draws the axis even when all its series contain only null values. Default: `true`. */
  showForNullSeries?: boolean
  /**
   * Name (or names) of the series this axis belongs to; series without a match use the first axis.
   * Used with several y axes.
   */
  seriesName?: string | string[]
  /** Puts the axis on the right side. Default: `false`. */
  opposite?: boolean
  /** Turns the axis upside down (highest value at the bottom). Default: `false`. */
  reversed?: boolean
  /** Uses a logarithmic scale. Default: `false`. */
  logarithmic?: boolean,
  /** Base of the logarithmic scale. Default: `10`. */
  logBase?: number,
  /** Number of intervals; not set picks a value from the chart height. */
  tickAmount?: number
  /** Distance between two ticks in axis units; used instead of `tickAmount`. */
  stepSize?: number
  /** Rounds min, max and step to round numbers even when min or max are given. Default: `false`. */
  forceNiceScale?: boolean
  /** Lowest value shown; a function receives the data minimum and returns the axis minimum. */
  min?: number | ((min: number) => number)
  /** Highest value shown; a function receives the data maximum and returns the axis maximum. */
  max?: number | ((max: number) => number)
  /**
   * Takes the axis out of the layout so the plot uses its width; the labels are drawn over the
   * plot. Default: `false`.
   */
  floating?: boolean
  /** Number of decimals in the labels; not set picks a value from the range. */
  decimalsInFloat?: number
  /** The value labels of the axis. */
  labels?: {
    /** West Coast Charts: halo / pill / auto-contrast where labels overlap marks (features/readability) */
    readability?: WccReadability
    /** Shows the labels. Default: `true`. */
    show?: boolean
    /** Keeps labels that repeat the text of the previous one. Default: `false`. */
    showDuplicates?: boolean
    /** Minimum width in pixels reserved for the labels. Default: `0`. */
    minWidth?: number
    /** Maximum width in pixels the labels may take; longer ones are cut. Default: `160`. */
    maxWidth?: number
    /** Moves the labels horizontally. Default: `0`. */
    offsetX?: number
    /** Moves the labels vertically. Default: `0`. */
    offsetY?: number
    /** Rotation of the labels in degrees. Default: `0`. */
    rotate?: number
    /** Horizontal alignment of the labels: 'left', 'center' or 'right'. */
    align?: 'left' | 'center' | 'right'
    /** Space in pixels between the labels and the plot. Default: `20`. */
    padding?: number
    /** Text style of the labels. */
    style?: {
      /**
       * Label colour; an array gives one colour per label. Empty uses `chart.foreColor`. Default:
       * `[]`.
       */
      colors?: string | string[]
      /** Font size of the labels. Default: `'11px'`. */
      fontSize?: string
      /** Font weight of the labels. Default: `400`. */
      fontWeight?: string | number
      /** Font family of the labels; not set uses `chart.fontFamily`. */
      fontFamily?: string
      /** CSS class added to every label element. Default: `''`. */
      cssClass?: string
    }
    /** Function that returns the label text from the value. */
    formatter?(val: number, opts?: any): string | string[]
  }
  /** The vertical axis line. */
  axisBorder?: {
    /** Draws the axis line. Default: `false`. */
    show?: boolean
    /** Colour of the axis line. Default: `'#e0e0e0'`. */
    color?: string
    /** Width of the axis line in pixels. Default: `1`. */
    width?: number
    /** Moves the axis line horizontally. Default: `0`. */
    offsetX?: number
    /** Moves the axis line vertically. Default: `0`. */
    offsetY?: number
  }
  /** Short tick marks next to the axis line. */
  axisTicks?: {
    /** Draws the tick marks. Default: `false`. */
    show?: boolean
    /** Colour of the tick marks. Default: `'#e0e0e0'`. */
    color?: string
    /** Length of the tick marks in pixels. Default: `6`. */
    width?: number
    /** Moves the tick marks horizontally. Default: `0`. */
    offsetX?: number
    /** Moves the tick marks vertically. Default: `0`. */
    offsetY?: number
  }
  /** Title text of the axis. */
  title?: {
    /** The title text; not set draws no title. */
    text?: string
    /** Rotation of the title in degrees. Default: `-90`. */
    rotate?: number
    /** Moves the title horizontally. Default: `0`. */
    offsetX?: number
    /** Moves the title vertically. Default: `0`. */
    offsetY?: number
    /** Text style of the title. */
    style?: {
      /** Title colour; not set uses `chart.foreColor`. */
      color?: string
      /** Title font size. Default: `'11px'`. */
      fontSize?: string
      /** Title font weight. Default: `900`. */
      fontWeight?: string | number
      /** Title font family. */
      fontFamily?: string
      /** CSS class added to the title element. Default: `''`. */
      cssClass?: string
    }
  }
  /** Horizontal line that follows the hovered value. */
  crosshairs?: {
    /** Shows the y crosshair. Default: `true`. */
    show?: boolean
    /** 'front' draws it above the series, 'back' behind them. Default: `'front'`. */
    position?: string
    /** Line of the y crosshair. */
    stroke?: {
      /** Line colour. Default: `'#b6b6b6'`. */
      color?: string
      /** Line width in pixels. Default: `1`. */
      width?: number
      /** Dash length in pixels; 0 draws a solid line. Default: `0`. */
      dashArray?: number
    }
  }
  /** Small box on the y axis that shows the hovered value. */
  tooltip?: {
    /** Shows the y-axis tooltip. Default: `false`. */
    enabled?: boolean
    /** Moves the y-axis tooltip horizontally. Default: `0`. */
    offsetX?: number
  }
}

type ApexForecastDataPoints = {
  /**
   * Number of points at the end of each line series drawn as forecast; 0 turns it off. Default:
   * `0`.
   */
  count?: number
  /** Opacity of the forecast part (0 to 1). Default: `0.5`. */
  fillOpacity?: number
  /** Line width of the forecast part; not set keeps the series width. */
  strokeWidth?: undefined | number
  /** Dash length of the forecast part in pixels. Default: `4`. */
  dashArray?: number
}

/**
 * Plot X and Y grid options
 * Reference: docs/guide/reference/options.md
 */
type ApexGrid = {
  /** Draws the grid lines. Default: `true`. */
  show?: boolean
  /** Colour of the grid lines. Default: `'#e0e0e0'`. */
  borderColor?: string
  /** Dash length of the grid lines; 0 draws solid lines. Default: `0`. */
  strokeDashArray?: number
  /** 'back' draws the grid behind the series, 'front' above them. Default: `'back'`. */
  position?: 'front' | 'back'
  /** Vertical grid lines (at the x ticks). */
  xaxis?: {
    /** Vertical grid lines. */
    lines?: {
      /** Draws the vertical grid lines. Default: `false`. */
      show?: boolean
      /** Moves the vertical lines horizontally. */
      offsetX?: number
      /** Moves the vertical lines vertically. */
      offsetY?: number
    }
  }
  /** Horizontal grid lines (at the y ticks). */
  yaxis?: {
    /** Horizontal grid lines. */
    lines?: {
      /** Draws the horizontal grid lines. Default: `true`. */
      show?: boolean
      /** Moves the horizontal lines horizontally. */
      offsetX?: number
      /** Moves the horizontal lines vertically. */
      offsetY?: number
    }
  }
  /** Alternating background bands between horizontal grid lines. */
  row?: {
    /** Colours of the bands, repeated in order; not set draws no bands. */
    colors?: string[]
    /** Opacity of the bands (0 to 1). Default: `0.5`. */
    opacity?: number
  }
  /** Alternating background bands between vertical grid lines. */
  column?: {
    /** Colours of the bands, repeated in order; not set draws no bands. */
    colors?: string[]
    /** Opacity of the bands (0 to 1). Default: `0.5`. */
    opacity?: number
  }
  /** Space in pixels between the grid area and the chart edges. */
  padding?: {
    /** Space above the grid. Default: `0`. */
    top?: number
    /** Space right of the grid. Default: `10`. */
    right?: number
    /** Space below the grid. Default: `0`. */
    bottom?: number
    /** Space left of the grid. Default: `12`. */
    left?: number
  }
}

/** West Coast Charts design tokens (see docs/THEMING.md) */
type WccThemeTokens = {
  /** Chart font family (CSS `--wcc-font-family`). */
  fontFamily?: string
  /**
   * Base font size of labels, legend and tooltip (CSS `--wcc-font-size`); axis labels use one pixel
   * less, at least 10px.
   */
  fontSize?: string
  /** Primary text colour: titles and centre values (CSS `--wcc-text`). */
  text?: string
  /** Secondary text colour: axis labels, legend, subtitle (CSS `--wcc-text-muted`). */
  textMuted?: string
  /**
   * Colour of surfaces drawn on top of the plot, such as marker outlines and slice separators (CSS
   * `--wcc-surface`).
   */
  surface?: string
  /** Chart background colour (CSS `--wcc-background`). */
  background?: string
  /** Grid line colour; also radar polygons (CSS `--wcc-grid`). */
  grid?: string
  /** Axis border, tick and crosshair colour (CSS `--wcc-axis`). */
  axis?: string
  /** Background track of radial bars and gauges (CSS `--wcc-track`). */
  track?: string
  /** Accent colour of hovered and selected menu items (CSS `--wcc-accent`). */
  accent?: string
  /** Colour of the keyboard focus indicator (CSS `--wcc-focus-ring`). */
  focusRing?: string
  /** Tooltip background (CSS `--wcc-tooltip-bg`). */
  tooltipBg?: string
  /** Tooltip text colour (CSS `--wcc-tooltip-text`). */
  tooltipText?: string
  /** Tooltip border colour (CSS `--wcc-tooltip-border`). */
  tooltipBorder?: string
  /** Tooltip box-shadow, any CSS shadow value (CSS `--wcc-tooltip-shadow`). */
  tooltipShadow?: string
  /** Corner radius of the tooltip (CSS `--wcc-radius`). */
  radius?: string
  /** Smaller corner radius of axis tooltips and legend items (CSS `--wcc-radius-sm`). */
  radiusSm?: string
  /** Bar corner radius in pixels, applied to the outer end (CSS `--wcc-bar-radius`). */
  barRadius?: string
  /** Stroke width of line-type series in pixels (CSS `--wcc-line-width`). */
  lineWidth?: string
  /** Dash length of grid lines; '0' is solid (CSS `--wcc-grid-dash`). */
  gridDash?: string
  /** Animation duration in milliseconds (CSS `--wcc-motion-duration`). Preset default: '650'. */
  motionDuration?: string
  /** Animation easing name (CSS `--wcc-motion-easing`). Preset default: 'easeOutCubic'. */
  motionEasing?: string
  /** Series colours (CSS `--wcc-palette` as a comma-separated list). */
  palette?: string[]
}

type ApexTheme = {
  /** West Coast Charts: colour-vision palettes / high contrast */
  accessibility?: {
    /**
     * Colour-vision palette: 'deuteranopia', 'protanopia', 'tritanopia' (needs
     * `west-coast-charts/types`) or 'highContrast' (also turns data labels on and widens lines to
     * at least 3 px); '' keeps the normal palette. Default: `''`.
     */
    colorBlindMode?: '' | 'deuteranopia' | 'protanopia' | 'tritanopia' | 'highContrast'
  }
  /** West Coast Charts: 'auto' follows prefers-color-scheme */
  mode?: 'light' | 'dark' | 'auto'
  /** West Coast Charts: built-in design-token preset ('classic' = 4.7.0 look) */
  preset?: 'coastal' | 'midnight' | 'paper' | 'accessible' | 'classic'
  /** true: read --wcc-* / --apx-* CSS tokens (default); false: ignore them; object: token overrides */
  tokens?: boolean | WccThemeTokens
  /** 'os': follow prefers-color-scheme */
  follow?: 'os' | false
  /** theme registered with registerTheme() */
  name?: string
  /** Name of the built-in palette ('palette1' ... 'palette10'). Default: `'palette1'`. */
  palette?: string
  /** Derives all series colours from one base colour. */
  monochrome?: {
    /** Turns monochrome colouring on. Default: `false`. */
    enabled?: boolean
    /** The base colour. Default: `'#008FFB'`. */
    color?: string
    /** 'light' or 'dark': direction of the shades. Default: `'light'`. */
    shadeTo?: 'light' | 'dark'
    /** How far the shades spread from the base colour (0 to 1). Default: `0.65`. */
    shadeIntensity?: number
  }
}

declare module 'apexcharts' {
  export = ApexCharts
}
