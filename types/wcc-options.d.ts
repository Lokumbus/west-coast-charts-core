// West Coast Charts - type declarations for the options, data and methods added on top of the
// ApexCharts-compatible API: the extra chart types of 'west-coast-charts/types', the premium chart
// types of 'west-coast-charts/premium' and the optional features of 'west-coast-charts/features/*'.
// Written for West Coast Charts from its own source (src/modules/types/TypeOptions.js, the premium
// renderers' defaults(), src/features/*). Referenced from apexcharts.d.ts; global, like that file.
// Copyright (c) 2026 West Coast Software - MIT License

/** any function a renderer calls back with chart context; the arguments differ per option */
type WccCallback = (...args: any[]) => any
/** a CSS colour */
type WccColor = string
/** a date as a timestamp, an ISO string or a Date */
type WccDate = number | string | Date

// ------------------------------------------------------------------------------------------------
// chart.type
// ------------------------------------------------------------------------------------------------

/** chart types of the 'west-coast-charts/types' plugin (core build: install with WestCoastCharts.use(types)) */
type WccChartType =
  | 'gauge'
  | 'funnel'
  | 'pyramid'
  | 'waterfall'
  | 'dumbbell'
  | 'beeswarm'
  | 'histogram'
  | 'violin'
  | 'raincloud'
  | 'sunburst'
  | 'icicle'
  | 'streamgraph'
  | 'unit'
  | 'waffle'
  | 'slope'
  | 'barRace'
  | 'calendar'

/** chart types of the 'west-coast-charts/premium' plugin */
type WccPremiumChartType =
  | 'sankey'
  | 'chord'
  | 'gantt'
  | 'tree'
  | 'stock'
  | 'map'
  | 'marimekko'
  | 'network'
  | 'radialColumn'
  /** premium type module west-coast-charts/layers/quint (WestCoastCharts.use(quint)) */
  | 'quintTimeline'
  | 'quintConvergence'
  /** premium type module west-coast-charts/layers/vitals (WestCoastCharts.use([premium, vitals]); not autoloaded) */
  | 'vitalsClock'
  /** premium type module west-coast-charts/layers/schedule (WestCoastCharts.use([premium, schedule]); not autoloaded) */
  | 'schedule'

// ------------------------------------------------------------------------------------------------
// series and data points
// ------------------------------------------------------------------------------------------------

/**
 * A data point of the West Coast Charts types. Which fields a type reads is listed in the chart
 * types guide; unknown fields are kept and passed to formatters.
 */
type WccDatum = {
  /**
   * Category, timestamp or number of the point on the x axis (cartesian types, calendar dates,
   * beeswarm groups).
   */
  x?: any
  /**
   * Value of the point; an array for range-like types (e.g. `[low, high]` or box-plot quartiles).
   */
  y?: any
  /** hierarchies (treemap, sunburst, icicle), tree and network nodes */
  id?: string | number
  /** Display name of a node, slice or unit; used by labels, tooltips and the legend. */
  name?: string
  /** Size of a hierarchy, sankey, chord or map item; `null` marks a missing value. */
  value?: number | null
  /** Child items of a hierarchy node (treemap, sunburst, icicle, tree). */
  children?: WccDatum[]
  /** waterfall: bar that shows the running total / a subtotal */
  isTotal?: boolean
  /** Waterfall: draws this bar as the running total since the previous subtotal. */
  isSubtotal?: boolean
  /** raw samples: boxPlot, violin, raincloud, beeswarm */
  points?: number[]
  /** sankey, chord and map arcs */
  from?: any
  /** Target node id (sankey, chord, network edges) or target location (map arcs and routes). */
  to?: any
  /** highlight-filter feature: the filtered part of this mark */
  highlight?: number | null
  /** Colour of this item; overrides the series colour. */
  color?: WccColor
  /** Fill colour of this item; overrides `color` for the fill. */
  fillColor?: string
  /** Stroke colour of this item; overrides the series stroke colour. */
  strokeColor?: string
  /** Free data kept with the item and passed to formatters and events; not drawn. */
  meta?: any
  [key: string]: any
}

/**
 * A series of the West Coast Charts and premium types. Besides `data`, the network takes
 * `nodes` / `edges` and the map a series `type` (choropleth, bubble, hexbin, arcs, markers, pins, routes).
 */
type WccSeries = {
  /** Series name shown in the legend and tooltip. */
  name?: string
  /**
   * Per-series chart type in combo charts; for the map, the layer kind (choropleth, bubble, hexbin,
   * arcs, markers, pins, routes).
   */
  type?: string
  /** Colour of the series; overrides the palette colour at its index. */
  color?: WccColor
  /** Stack group: stacked bars with the same group share one stack. */
  group?: string
  /** Starts the series hidden, as if toggled off in the legend. Default: `false`. */
  hidden?: boolean
  /**
   * Data of the series: numbers, `[x, y]` pairs, point objects, or a `{ nodes, edges, links }`
   * graph, depending on the type.
   */
  data?:
    | WccDatum[]
    | WccDatum
    | (number | null)[]
    | [any, any, (number | null)?][]
    | any[][]
    | {
      /** Graph nodes (network, sankey, tree) when the graph is passed as `data`. */
      nodes?: WccDatum[]
      /** Network edges when the graph is passed as `data`. */
      edges?: WccDatum[]
      /** Sankey links when the graph is passed as `data`. */
      links?: WccDatum[]
    }
  /** network */
  nodes?: WccDatum[]
  /** Network edges: `{ from, to }` objects or `[from, to, weight?]` tuples. */
  edges?: Array<WccDatum | [string | number, string | number, number?]>
  /** Sankey or network links: `{ from, to, value }` objects or `[from, to, value?]` tuples. */
  links?: Array<WccDatum | [string | number, string | number, number?]>
  /** Network: highlighted paths, each a node id sequence with a name, severity and colour. */
  paths?: { name?: string, nodes: Array<string | number>, severity?: any, color?: string }[]
  /** highlight-filter feature: the filtered part of every point */
  highlightData?: (number | null)[]
  /** map marker series */
  marker?: string
  /** Map marker series: marker size in pixels. */
  size?: number
  /** Map marker series: draws a label next to each marker. */
  labels?: boolean
  /** quintTimeline / quintConvergence: id of the lane (plotOptions.quint.lanes[].id) this series is drawn in. */
  lane?: string
  /** quintTimeline / quintConvergence: semantic keys (service, cluster, region) for crossfilter across lanes. Default: `[name]`. */
  keys?: string[] | string
  /** quintTimeline / quintConvergence, events lane: error rate per slot in percent (0–100); colours the columns. */
  errorRate?: (number | null)[]
  /** quintTimeline / quintConvergence, events lane: the typical day per slot, drawn as a dashed step line. */
  typical?: (number | null)[]
  /** quintTimeline / quintConvergence, budget lane: availability target in percent, shown as "availability · p95 latency". */
  availability?: number
  /** quintTimeline / quintConvergence, budget lane: p95 latency in ms, shown as "availability · p95 latency". */
  p95?: number
  [key: string]: any
}

// ------------------------------------------------------------------------------------------------
// plotOptions of the 'west-coast-charts/types' chart types
// ------------------------------------------------------------------------------------------------

type WccTextStyle = {
  /** Font size. */
  fontSize?: string | number
  /** Font family; not set uses the chart font. */
  fontFamily?: string
  /** Font weight. */
  fontWeight?: string | number
  /** Text colours; an array gives one per series or item. */
  colors?: string[]
}
type WccColorScale = {
  /** Colours from the lowest to the highest value. */
  colors?: string[]
  /** Value mapped to the first colour; not set uses the smallest sample. */
  min?: number
  /** Value mapped to the last colour; not set uses the largest sample. */
  max?: number
  /** Number of discrete colour steps; not set gives a continuous scale. */
  steps?: number
}
type WccSamplePoints = {
  /** false: none; true or 'all': every sample; 'outliers': only those outside the whiskers */
  show?: boolean | 'all' | 'outliers'
  /** Point shape: 'circle' or 'square'. Default: `'circle'`. */
  shape?: 'circle' | 'square'
  /** Point radius in pixels. Default: `2.5`. */
  size?: number
  /** 0..1 of the lane width */
  jitter?: number
  /** Upper limit of drawn points; above it the samples are thinned. Default: `3000`. */
  maxPoints?: number
  /** Point opacity. Default: `0.9`. */
  opacity?: number
  /** 'series-dark' | 'series' | a colour */
  fillColor?: string
  /** Point outline colour. Default: `'#fff'`. */
  strokeColor?: string
  /** Point outline width in pixels. Default: `1`. */
  strokeWidth?: number
  /** Colours the points by value instead of by series (violin default: 24 steps). */
  colorScale?: WccColorScale
}

/** gauge extras of plotOptions.radialBar (chart.type 'gauge') */
type WccGaugeOptions = {
  /** 'arc' fills the ring up to the value; 'needle' points a needle at it. Default: `'arc'`. */
  shape?: 'arc' | 'needle'
  /** Value at the start of the gauge. Default: `0`. */
  min?: number
  /** Value at the end of the gauge. Default: `100`. */
  max?: number
  /** coloured value ranges along the track */
  bands?: {
    /** Start value of the band. */
    from: number
    /** End value of the band. */
    to: number
    /** Band colour. */
    color?: WccColor
    /** Band name, shown as the band's SVG title and added to the accessible value text. */
    label?: string
  }[]
  /** Look of the bands ring. */
  bandsStyle?: {
    /** Band thickness as a share of the track thickness or in pixels. Default: `'40%'`. */
    strokeWidth?: string | number
    /** px along the arc */
    gap?: number
    /** Hides the background track when bands are defined. Default: `false`. */
    hideTrackWhenPresent?: boolean
    /** Ends of each band: 'butt', 'round' or 'square'. Default: `'butt'`. */
    linecap?: 'butt' | 'round' | 'square'
    /** 'outer' aligns the bands to the outer edge of the track, 'center' centres them */
    align?: 'outer' | 'center'
  }
  /** Scale ticks and labels around the ring. */
  ticks?: {
    /** Draws the ticks. Default: `false`. */
    show?: boolean
    /** Major ticks, carrying the labels. */
    major?: {
      /** Number of major ticks including both ends (at least 2). Default: `11`. */
      count?: number
      /** Tick length in pixels. Default: `10`. */
      length?: number
      /** Tick width in pixels. Default: `1.5`. */
      width?: number
      /** Tick colour; not set uses the theme's muted text colour. */
      color?: WccColor
      /**
       * 'outside' draws the ticks beyond the ring, 'inside' within the hollow, 'center' across the
       * middle of the ring (labels stay outside). Default: `'outside'`.
       */
      placement?: 'outside' | 'inside' | 'center'
    }
    /** Minor ticks between the major ticks. */
    minor?: {
      /** Minor ticks between two neighbouring major ticks. Default: `4`. */
      count?: number
      /** Tick length in pixels. Default: `5`. */
      length?: number
      /** Tick width in pixels. Default: `1`. */
      width?: number
      /** Tick colour; not set uses the theme's muted text colour. */
      color?: WccColor
      /** 'outside', 'inside' or 'center' (as for the major ticks); not set follows the major ticks. */
      placement?: 'outside' | 'inside' | 'center'
    }
    /** Value labels at the major ticks. */
    labels?: {
      /** Draws the labels. Default: `true`. */
      show?: boolean
      /** Distance of the labels from the ticks in pixels. Default: `6`. */
      offset?: number
      /** Font size; not set uses the theme size. */
      fontSize?: string | number
      /** Font family; not set uses the chart font. */
      fontFamily?: string
      /** Font weight. Default: `500`. */
      fontWeight?: string | number
      /** Label colour; not set uses the theme's muted text colour. */
      color?: WccColor
      /** Returns the label text for a tick value. */
      formatter?: (value: number) => string
    }
  }
  /** Needle settings (shape 'needle'). */
  needle?: {
    /** Needle colour; not set uses the first series colour. */
    color?: WccColor
    /** px or a share of the radius; default clears the inner edge of the ring */
    length?: number | string
    /** Width of the needle at its hub in pixels. Default: `8`. */
    baseWidth?: number
    /** Width of the needle tip in pixels. Default: `1.5`. */
    tipWidth?: number
    /** Also fills the ring up to the value. Default: `false`. */
    showValueArc?: boolean
    /** Vertical shift of the needle hub in pixels. Default: `0`. */
    offsetY?: number
    /** Needle animation. */
    animation?: {
      /** false moves the needle without animation. Default: `true`. */
      enabled?: boolean
      /** Duration in milliseconds; not set uses the chart animation speed. */
      duration?: number
      /**
       * Easing of the needle: a named or registered easing, a function of t (0..1) or cubic-bezier
       * points; not set uses a soft overshoot on the first draw and a cubic ease-out on updates.
       */
      easing?: string | ((t: number) => number) | [number, number, number, number]
    }
  }
}

type WccPartitionLabels = {
  /** Draws the labels. Default: `true`. */
  show?: boolean
  /** Adds the value under the name where there is room (sunburst default: true; icicle: false). */
  showValue?: boolean
  /** Text style (fontSize default '12px', fontWeight 500). */
  style?: WccTextStyle
}

type WccTypePlotOptions = {
  /** Settings of funnel and pyramid charts. */
  funnel?: {
    /**
     * 'rectangle' draws each stage as a bar; 'trapezoid' joins the stages into slanted segments.
     * Default: `'rectangle'`.
     */
    shape?: 'rectangle' | 'trapezoid'
    /** Shape of the last stage: 'flat' or 'taper' (narrows to a point). Default: `'flat'`. */
    lastShape?: 'flat' | 'taper'
  }
  /** Settings of waterfall charts. */
  waterfall?: {
    /** Colours of the bar kinds. */
    colors?: {
      /** Colour of increases. Default: `'#00A86F'`. */
      positive?: WccColor
      /** Colour of decreases. Default: `'#FF4560'`. */
      negative?: WccColor
      /** Colour of subtotal bars (`isSubtotal` data points); not set uses the theme colour. */
      subtotal?: WccColor
      /** Colour of total bars (`isTotal` data points); not set uses the theme colour. */
      total?: WccColor
    }
    /** Lines joining the end of one bar to the start of the next. */
    connectors?: {
      /** Draws the connectors. Default: `true`. */
      show?: boolean
      /** Connector colour; not set uses the theme colour. */
      color?: WccColor
      /** Connector width in pixels. Default: `1`. */
      strokeWidth?: number
      /** Dash length of the connectors; 0 is solid. Default: `3`. */
      strokeDashArray?: number
    }
  }
  /** Settings of sunburst charts (nested rings from series data with children). */
  sunburst?: {
    /** Horizontal shift of the sunburst in pixels. Default: `0`. */
    offsetX?: number
    /** Vertical shift of the sunburst in pixels. Default: `0`. */
    offsetY?: number
    /** Angle in degrees where the rings begin. Default: `0`. */
    startAngle?: number
    /** Angle in degrees where the rings end. Default: `360`. */
    endAngle?: number
    /** Size of the empty centre: a percentage of the radius or pixels. Default: `'15%'`. */
    innerSize?: string | number
    /** Corner radius of the arcs in pixels. Default: `0`. */
    borderRadius?: number
    /** Gap between arcs in pixels. Default: `1`. */
    spacing?: number
    /**
     * 'extend' stretches leaf arcs to the outer ring; 'stop' keeps them one ring deep. Default:
     * `'extend'`.
     */
    leaf?: 'extend' | 'stop'
    /**
     * 'normalize' sizes a parent by the sum of its children; 'strict' uses the parent's own value
     * when it has one. Default: `'normalize'`.
     */
    partition?: 'normalize' | 'strict'
    /** How much deeper levels are lightened from their branch colour (0 to 1). Default: `0.14`. */
    tint?: number
    /**
     * 'branch' gives each top-level branch a palette colour; 'name' colours nodes by their name.
     * Default: `'branch'`.
     */
    colorBy?: 'branch' | 'name'
    /** Clicking an arc zooms into that branch. Default: `true`. */
    zoomOnClick?: boolean
    /** Labels on the arcs. */
    dataLabels?: WccPartitionLabels & {
      /** Arcs narrower than this many degrees get no label. Default: `8`. */
      minAngleToShow?: number
    }
  }
  /** Settings of icicle charts (hierarchy drawn as stacked bands). */
  icicle?: {
    /**
     * Direction the levels grow from the root: 'down', 'up', 'right' or 'left'. Default: `'down'`.
     */
    direction?: 'down' | 'up' | 'right' | 'left'
    /**
     * Thickness of a level: 'equal' splits the space evenly; a pixel value or percentage fixes it.
     * Default: `'equal'`.
     */
    levelSize?: 'equal' | string | number
    /** Number of levels shown at once; 'auto' shows all. Default: `'auto'`. */
    maxDepth?: 'auto' | number
    /** Gap between cells in pixels. Default: `1`. */
    spacing?: number
    /** Corner radius of the cells in pixels. Default: `0`. */
    borderRadius?: number
    /**
     * 'extend' stretches leaf cells to the last level; 'stop' keeps them one level deep. Default:
     * `'stop'`.
     */
    leaf?: 'extend' | 'stop'
    /**
     * 'normalize' sizes a parent by the sum of its children; 'strict' uses the parent's own value
     * when it has one. Default: `'normalize'`.
     */
    partition?: 'normalize' | 'strict'
    /**
     * Order of siblings: 'none' keeps the data order, 'value' sorts largest first, 'name'
     * alphabetically. Default: `'none'`.
     */
    sort?: 'none' | 'value' | 'name'
    /** How much deeper levels are lightened from their branch colour (0 to 1). Default: `0`. */
    tint?: number
    /**
     * 'branch' gives each top-level node a palette colour; 'name' colours nodes by their name.
     * Default: `'branch'`.
     */
    colorBy?: 'branch' | 'name'
    /** Clicking a cell zooms into that branch. Default: `true`. */
    zoomOnClick?: boolean
    /**
     * 'value' rescales only the value axis on zoom; 'both' also rescales the levels. Default:
     * `'value'`.
     */
    zoomType?: 'value' | 'both'
    /** Labels in the cells. */
    dataLabels?: WccPartitionLabels & {
      /** Cells smaller than this many pixels get no label. Default: `30`. */
      minSizeToShow?: number
      /** Alignment of the label inside its cell. Default: `'center'`. */
      align?: string
      /** 'auto' rotates labels when that fits better, 'always' always, 'never' never. Default: `'auto'`. */
      rotate?: 'auto' | 'always' | 'never'
    }
  }
  /** Settings of unit (waffle) charts: one mark per unit of value. */
  unit?: {
    /**
     * How marks are arranged: 'grouped' (one cluster per category), 'packed', 'columns', 'grid',
     * 'scatter', 'arc' or 'custom'. Default: `'grouped'`.
     */
    layout?: 'grouped' | 'packed' | 'columns' | 'grid' | 'scatter' | 'arc' | 'custom'
    /** custom layouts: fn(objects, rect), a registered layout name or a unit shape */
    positions?: string | WccCallback | WccUnitShape
    /** Settings of the 'scatter' layout. */
    scatter?: {
      /** `'lanes'` puts one lane per category with a 1-D value axis; `'value'` reads x and y from the data (2-D). Default: `'lanes'`. */
      y?: 'lanes' | 'value'
      /** Lanes only: `'vertical'` turns the lanes into columns with the value axis running up. Default: `'horizontal'`. */
      orientation?: 'horizontal' | 'vertical'
      /** Lanes only: how marks spread across the lane, `'swarm'` (no overlap) or `'jitter'` (fixed pseudo-random offset). Default: `'swarm'`. */
      spread?: 'swarm' | 'jitter'
      /** Title of the x (value) axis. */
      xTitle?: string
      /** Title of the y axis (`y: 'value'`). */
      yTitle?: string
      /** Formats the x tick labels. */
      xFormatter?: (value: number) => string
      /** Formats the y tick labels (`y: 'value'`). */
      yFormatter?: (value: number) => string
      /** Lower end of the x axis; not set uses the data minimum. */
      xMin?: number
      /** Upper end of the x axis; not set uses the data maximum. */
      xMax?: number
      /** Lower end of the y axis (`y: 'value'`). */
      yMin?: number
      /** Upper end of the y axis (`y: 'value'`). */
      yMax?: number
      /** Number of x ticks. */
      tickAmount?: number
      /** Number of y ticks (`y: 'value'`). */
      yTickAmount?: number
      /** Width of the lane label column in pixels. */
      laneLabelWidth?: number
      /** Draws the gridlines. Default: `true`. */
      gridlines?: boolean
      /** Data field that sizes the marks (bubble scatter). Default: `'z'`. */
      sizeField?: string
      /** Smallest and largest mark radius in pixels for `sizeField`. */
      sizeRange?: [number, number]
    }
    /** How marks are matched between updates: 'group', 'flow' or 'identity'. Default: `'group'`. */
    transition?: 'group' | 'flow' | 'identity'
    /** Shape of a mark: 'circle', 'square', 'image' or 'pictogram'. Default: `'circle'`. */
    shape?: 'circle' | 'square' | 'image' | 'pictogram'
    /** Image used when `shape` is 'image'. */
    image?: {
      /** Image URL. */
      src?: string
      /** Image width in pixels; not set fits the mark. */
      width?: number
      /** Image height in pixels; not set fits the mark. */
      height?: number
      /** Tints the image with the series colour. Default: `false`. */
      tint?: boolean
    }
    /** Icon used when `shape` is 'pictogram'. */
    pictogram?: {
      /**
       * Icon: a built-in name, an own SVG path `{ path, viewBox }` (viewBox as string or 4 numbers,
       * default `[0, 0, 24, 24]`), or an array whose first entry is used. An unknown name falls
       * back to `fallback`.
       */
      mark?: WccUnitMark | WccUnitMark[]
      /** How the icon fits its box: 'contain', 'cover', 'width' or 'height'. Default: `'contain'`. */
      fit?: 'contain' | 'cover' | string
      /** Size factor of the icon. Default: `1`. */
      scale?: number
      /** Space around the icon. Default: `0`. */
      padding?: number
      /** Shape drawn when the icon is not available: 'circle' or 'square'. Default: `'circle'`. */
      fallback?: string
      /** Draws the icon as an outline instead of filled. Default: `false`. */
      outline?: boolean
      /** Outline width in screen pixels. Default: `1.5`. */
      outlineWidth?: number
    }
    /** Mark radius in pixels; 'auto' fits the marks to the space. Default: `'auto'`. */
    size?: 'auto' | number
    /** Settings of the 'columns' layout. */
    columns?: {
      /** Fixed mark size in the columns; 'inherit' uses `unit.size`. Default: `'inherit'`. */
      size?: 'inherit' | number
    }
    /** Settings of the 'grid' (waffle) layout. */
    grid?: {
      /** Cells per row. Default: `10`. */
      columns?: number
      /** Total number of cells; empty cells are drawn in the track colour. */
      total?: number
      /** Edge the grid fills from: 'bottom' or 'top'. Default: `'bottom'`. */
      fillFrom?: 'bottom' | 'top' | string
      /** Draws one small waffle per category instead of one shared grid. Default: `false`. */
      split?: boolean
      /** Number of small waffles per row when `split` is on; not set chooses automatically. */
      tileColumns?: number
      /** Value that fills a whole small waffle when `split` is on. */
      max?: number
      /** Colour of empty cells; not set uses the theme track colour. */
      trackColor?: WccColor
    }
    /** Settings of the 'arc' (parliament) layout. */
    arc?: {
      /** Start angle in degrees. Default: `-90`. */
      startAngle?: number
      /** End angle in degrees. Default: `90`. */
      endAngle?: number
      /** Inner radius as a share of the outer radius, clamped to 0.05 to 0.95. Default: `0.4`. */
      innerRadiusRatio?: number
      /** Number of rows; 'auto' picks one. Default: `'auto'`. */
      rows?: 'auto' | number
    }
    /** Animation of marks moving to their new place on updates. */
    gather?: {
      /** Easing of the tween ('outCubic', 'outBack' or another named easing); a custom easing switches 'auto' motion to a tween. Default: `'outCubic'`. */
      easing?: string
      /** Overshoot of the 'outBack' easing. Default: `1.70158`. */
      overshoot?: number
      /** How new marks appear: 'burst' (from the cluster centre), 'rise' (from below) or 'fade'. Default: `'burst'`. */
      enter?: string
      /** 'spring', 'tween' or 'auto' (spring unless a custom easing is set). Default: `'auto'`. */
      motion?: string
      /** Spring preset: 'crisp', 'gentle' or 'snappy'. Default: `'crisp'`. */
      spring?: string
    }
    /** Sizes each mark by its own value instead of drawing equal marks. */
    sizeByValue?: {
      /** Turns value-based sizing on. Default: `false`. */
      enabled?: boolean
      /** Radius of the largest mark in pixels; 'auto' fits the space. Default: `'auto'`. */
      maxRadius?: 'auto' | number
      /** Radius of the smallest mark in pixels. */
      minRadius?: number
      /** 'area' makes the mark area proportional to the value. Default: `'area'`. */
      scale?: 'area' | string
    }
    /** Distance between mark centres as a multiple of the mark size. Default: `1.05`. */
    spacing?: number
    /** Corner radius of square marks. */
    borderRadius?: number
    /** how much one unit stands for */
    unitValue?: number
    /**
     * Upper limit of marks; above it the counts are scaled down proportionally. Default: `5000`.
     */
    maxUnits?: number
    /** Keeps marks of the same category together. Default: `true`. */
    sortByGroup?: boolean
    /** Labels naming each cluster of marks. */
    clusterLabels?: {
      /** Shows the labels; not set shows them for the grouped, columns and split-grid layouts. */
      show?: boolean
      /** Where the label sits; not set is 'bottom' for the columns layout and 'top' otherwise. */
      position?: string
      /** Bends the label along the cluster edge. Default: `false`. */
      curved?: boolean
      /** Label colour; not set uses the theme text colour. */
      color?: WccColor
      /** Vertical shift of the labels in pixels. Default: `0`. */
      offsetY?: number
      /** Returns the label text for a cluster. */
      formatter?: WccCallback
      /** Font size of the labels. Default: `'12px'`. */
      fontSize?: string
      /** Font family; not set uses the chart font. */
      fontFamily?: string
      /** Font weight of the labels. Default: `600`. */
      fontWeight?: string | number
      /** Labels placed outside the clusters with a connector line. */
      external?: {
        /** Moves the labels outside. Default: `false`. */
        show?: boolean
        /** Horizontal shift of the external labels in pixels. Default: `0`. */
        offsetX?: number
        /** Vertical shift of the external labels in pixels. Default: `0`. */
        offsetY?: number
        /** Line from the cluster to its external label. */
        connector?: {
          /** Draws the connector. Default: `true`. */
          show?: boolean
        /** Connector width in pixels. Default: `1`. */
        width?: number
        /** Connector colour; not set uses the theme colour. */
        color?: WccColor
        /** Gap between the cluster and the connector in pixels. Default: `4`. */
        gap?: number
        /** Connector length in pixels. Default: `16`. */
        length?: number
      }
      }
    }
    /** Tooltip of the unit chart. */
    tooltip?: {
      /** Returns the tooltip content for a hovered mark. */
      formatter?: WccCallback
    }
  }
  /** Settings of streamgraphs (stacked areas around a moving baseline). */
  streamgraph?: {
    /**
     * Baseline of the stack: 'wiggle', 'silhouette' (centred), 'zero' or 'expand' (normalised to
     * the full height). Default: `'wiggle'`.
     */
    offset?: 'wiggle' | 'silhouette' | 'zero' | 'expand'
    /**
     * Stacking order: 'inside-out', 'inverse' or 'none' (series order). Default: `'inside-out'`.
     */
    order?: 'inside-out' | 'inverse' | 'none'
    /** Dimming of the other layers while one is hovered. */
    hover?: {
      /** Dims the other layers on hover. Default: `true`. */
      show?: boolean
      /** Opacity of the dimmed layers. Default: `0.35`. */
      opacity?: number
    }
    /** Series names drawn inside the layers. */
    labels?: {
      /** Draws the labels. Default: `true`. */
      show?: boolean
      /** Layers narrower than this many pixels get no label. Default: `24`. */
      minWidth?: number
      /** Smallest automatic font size in pixels. Default: `9`. */
      minFontSize?: number
      /** Largest automatic font size in pixels. Default: `30`. */
      maxFontSize?: number
      /** Text style of the labels. */
      style?: {
        /** Font size; 'auto' scales it with the layer thickness. Default: `'auto'`. */
        fontSize?: 'auto' | string
      /** Font family; not set uses the chart font. */
      fontFamily?: string
      /** Font weight. Default: `600`. */
      fontWeight?: string | number
      /** Label colours, one per series; not set picks a contrasting colour. */
      colors?: string[]
    }
    }
  }
  /** Settings of calendar heatmaps. */
  calendar?: {
    /** 0 = Sunday ... 6 = Saturday */
    weekStart?: number
    /** First day shown ('YYYY-MM-DD', Date or timestamp); not set uses the first data day. */
    start?: WccDate
    /** Last day shown; not set uses the last data day. */
    end?: WccDate
    /** several values on one day */
    aggregate?: 'sum' | 'max' | 'min' | 'mean' | 'last'
    /**
     * Weekday labels: 'alternate' (every second day), 'all', or false for none. Default:
     * `'alternate'`.
     */
    dayLabels?: 'alternate' | 'all' | false
    /** 7 names, starting with Sunday */
    dayNames?: string[]
    /** Twelve month names, January first; not set uses the locale. */
    monthNames?: string[]
    /** Colour of days in range without a value; not set uses the theme. */
    emptyColor?: WccColor
    /** Base colour of the day cells. */
    color?: WccColor
    /** Formats the value shown for a day. */
    formatter?: WccCallback
  }
  /** Settings of bar race charts. */
  barRace?: {
    /** Number of bars shown; the rest wait below the cut. Default: `10`. */
    maxBars?: number
    /** 'desc' puts the largest value on top; 'asc' the smallest. Default: `'desc'`. */
    sort?: 'desc' | 'asc'
    /**
     * 'dash' keeps a row without a value and shows `values.nullLabel`; 'hide' drops it. Default:
     * `'dash'`.
     */
    nulls?: 'dash' | 'hide'
    /** ms per update */
    speed?: number
    /** Palette name or colour list for the bars; not set uses the theme colours. */
    colors?: string[] | string
    /** Names beside the bars. */
    labels?: {
      /** Draws the names. Default: `true`. */
      show?: boolean
      /** Font size of the names in pixels. Default: `12.5`. */
      fontSize?: number
    }
    /** Values at the end of the bars. */
    values?: {
      /** Draws the values. Default: `true`. */
      show?: boolean
      /** Font size of the values in pixels. */
      fontSize?: number
      /** Fixed number of decimals; not set uses the locale's compact notation. */
      decimals?: number
      /** Returns the value text. */
      formatter?: WccCallback
      /** Text of a row without a value. Default: `'–'`. */
      nullLabel?: string
    }
    /** Large period label in the background. */
    ticker?: {
      /** Draws the ticker. Default: `true`. */
      show?: boolean
      /** Ticker text, or a function of `{ w }` (the chart's internal state) that returns it; not set shows the current period. */
      text?: string | number | ((opts: {
        /** The chart's internal state (config and globals). */
        w: any
      }) => string)
      /** Font size of the ticker in pixels. */
      fontSize?: number
      /** Ticker colour. */
      color?: WccColor
      /** Ticker opacity. Default: `0.55`. */
      opacity?: number
    }
    /** Line under the last shown bar when more names wait below it. */
    cut?: {
      /** 'auto' draws it when names wait below; true always; false never. Default: `'auto'`. */
      show?: 'auto' | boolean
      /**
       * Cut text: a string, a function of `{ shown, total }` (bars drawn, names in the race: the
       * frame's `meta.total`, else its data length), or false for none; not set shows 'Top N of M'.
       */
      label?: string | false | ((opts: {
        /** Number of bars drawn (at most `maxBars`). */
        shown: number
        /** Number of names in the race: `meta.total` of the frame, else the length of its data. */
        total: number
      }) => string)
      /** Colour of the cut line. */
      color?: WccColor
    }
  }
  /** Settings of slope charts. */
  slope?: {
    /** 'series' colours lines by series; 'direction' by up, down or flat. Default: `'series'`. */
    colorBy?: 'series' | 'direction'
    /** Colour of rising lines with `colorBy: 'direction'`. Default: `'#16a34a'`. */
    upColor?: WccColor
    /** Colour of falling lines with `colorBy: 'direction'`. Default: `'#dc2626'`. */
    downColor?: WccColor
    /** Colour of flat lines with `colorBy: 'direction'`. Default: `'#94a3b8'`. */
    flatColor?: WccColor
    /** |last - first| / |first| below this counts as flat */
    flatThreshold?: number
    /** series names drawn in colour; the others are muted */
    highlight?: string[]
    /** Colour of series not listed in `highlight`; not set uses a neutral grey for the mode. */
    mutedColor?: WccColor
    /** Labels at both ends of the lines. */
    labels?: {
      /** Draws the labels. Default: `true`. */
      show?: boolean
      /** Left label content: 'value', 'name', 'both' or false. Default: `'value'`. */
      left?: 'value' | 'name' | 'both' | false
      /** Right label content: 'value', 'name', 'both' or false. Default: `'both'`. */
      right?: 'value' | 'name' | 'both' | false
      /** Font size in pixels. Default: `12`. */
      fontSize?: number
      /** Minimum vertical gap between labels in pixels. Default: `0`. */
      minGap?: number
      /** Formats the label value. */
      formatter?: WccCallback
    }
    /** Period names above the two axes. */
    periods?: {
      /** Draws the period names. Default: `true`. */
      show?: boolean
      /** Font size in pixels. Default: `12`. */
      fontSize?: number
    }
    /** Dimming of the other lines while one is hovered. */
    hover?: {
      /** Opacity of the dimmed lines. Default: `0.22`. */
      opacity?: number
    }
  }
  /** Settings of beeswarm charts. */
  beeswarm?: {
    /**
     * Dot radius in pixels; dots shrink towards `minSize` when a swarm is too wide. Default: `3.5`.
     */
    size?: number
    /** Smallest dot radius in pixels. Default: `1.5`. */
    minSize?: number
    /** Gap between dots in pixels. Default: `1`. */
    padding?: number
    /** Width of a swarm as a share of the category slot or in pixels. Default: `'88%'`. */
    width?: string | number
    /** Side the dots spread to: 'both', 'left', 'right', 'top' or 'bottom'. Default: `'both'`. */
    side?: 'both' | 'left' | 'right' | 'top' | 'bottom'
    /** Dots per category; above it the samples are thinned evenly. Default: `2000`. */
    maxPoints?: number
    /** Dot opacity. Default: `0.92`. */
    opacity?: number
    /** Dot outline width; not set uses min(1, 0.3 × radius). */
    strokeWidth?: number
    /** Dot outline colour; '#fff' follows the surface colour in dark mode. Default: `'#fff'`. */
    strokeColor?: WccColor
    /** Colours the dots by value instead of by series. */
    colorScale?: WccColorScale
    /** Median line of each swarm. */
    median?: {
      /** Draws the median line. Default: `true`. */
      show?: boolean
      /** Colour of the median line. */
      color?: WccColor
      /** Width of the median line in pixels. Default: `1.75`. */
      strokeWidth?: number
    }
  }
  /** Settings of violin charts. */
  violin?: {
    /**
     * Factor applied to the automatic kernel bandwidth; larger values give smoother shapes.
     * Default: `1`.
     */
    bandwidthScale?: number
    /** Kernel density estimate settings. */
    kde?: {
      /** Fixed kernel bandwidth in data units; not set is estimated from the samples. */
      bandwidth?: number
      /** Number of points along each violin outline. Default: `64`. */
      resolution?: number
    }
    /**
     * 'individual' scales each violin to its own peak; 'group' to the largest peak of all. Default:
     * `'individual'`.
     */
    normalize?: 'individual' | 'group'
    /**
     * Side drawn: 'both' (full violin), 'left', 'right', 'top' or 'bottom' (half violins). Default:
     * `'both'`.
     */
    side?: 'both' | 'left' | 'right' | 'top' | 'bottom'
    /** Box plot drawn inside the violin. */
    box?: {
      /** Draws the inner box. Default: `false`. */
      show?: boolean
      /** Box width as a share of the violin or in pixels. Default: `'15%'`. */
      width?: string | number
      /** Whisker rule: 'minmax', 'tukey' (1.5 × IQR) or 'percentile'. Default: `'minmax'`. */
      whiskers?: 'minmax' | 'tukey' | 'percentile'
      /** Outline width of the box in pixels. Default: `1`. */
      strokeWidth?: number
      /** Fill colour of the box. */
      fillColor?: WccColor
      /** Width of the whisker caps as a share of the box width. Default: `0.5`. */
      capWidth?: number
    }
    /** Raw samples drawn over the violins. */
    points?: WccSamplePoints & {
      /** Keeps the jittered points inside the violin outline. Default: `true`. */
      constrainToViolin?: boolean
      /** Where the points lane sits: 'center', 'left', 'right', 'top' or 'bottom'. Default: `'center'`. */
      position?: 'center' | 'left' | 'right' | 'top' | 'bottom'
      /** Width of the points lane as a share of the violin or in pixels. Default: `'40%'`. */
      laneWidth?: string | number
    }
  }
  /** Settings of histograms (raw values binned into bars). */
  histogram?: {
    /**
     * Bin count, or a rule: 'auto' (the larger count of Freedman–Diaconis and Sturges), 'sturges',
     * 'rice', 'sqrt', 'scott' or 'fd'. Default: `'auto'`.
     */
    bins?: 'auto' | number | number[] | string
    /** Fixed bin width in data units; overrides `bins`. */
    binWidth?: number
    /** [min, max] of the binned range; not set uses the data extent. */
    range?: [number, number]
    /**
     * Bar height: 'count', 'relative' (percent of the series) or 'density' (count / (n × bin
     * width)). Default: `'count'`.
     */
    normalize?: 'count' | 'relative' | 'density'
    /** Each bar adds up all bins before it. Default: `false`. */
    cumulative?: boolean
    /**
     * With several series, true draws the bars at 55% fill opacity without outline; false keeps
     * them opaque with a 1 px outline. Default: `true`.
     */
    overlap?: boolean
    /** round rule-based bin widths to 1/2/2.5/5 steps and align the edges to them */
    niceEdges?: boolean
  }
}

/** additions to existing plotOptions blocks */
type WccCorePlotOptionAdditions = {
  /** Gauge settings (chart.type 'gauge'). */
  radialBar?: WccGaugeOptions
  /** Raw-sample settings of box plots. */
  boxPlot?: {
    /** Raw samples drawn over the boxes. */
    points?: WccSamplePoints
  }
  /** Cell shape settings of heatmaps. */
  heatmap?: {
    /** Cell shape: 'rect', 'hexagon', 'circle' or 'diamond'. Default: `'rect'`. */
    shape?: 'rect' | 'hexagon' | 'circle' | 'diamond'
    /** hexagons: 'regular' (letterboxed) or 'fill' (stretched) */
    shapeAspect?: 'regular' | 'fill'
    /**
     * Cells without a value (null) as their own state, such as closed hours: a neutral hatch
     * instead of a colour of the scale, a legend entry after the colour ranges, and the label in
     * the tooltip, the data table and `describe()`. `true` uses the label 'No value'. Needs the
     * chart types bundle. Default: not set (null cells keep the 4.7.0 behaviour).
     */
    empty?: boolean | {
      /** Name of the state, such as 'closed'. Default: `'No value'`. */
      label?: string
      /** Hatch colour; not set uses a neutral grey of the theme. */
      color?: WccColor
      /** Legend entry after the colour ranges (only with `colorScale.ranges`). Default: `true`. */
      legend?: boolean
    }
  }
  /** Dumbbell settings of bar charts. */
  bar?: {
    /** Settings of dumbbell bars. */
    dumbbell?: {
      /** Line joining the two ends of a dumbbell. */
      connector?: {
        /** Connector colour; not set draws a gradient between the two end colours. */
        color?: WccColor
        /** Connector opacity. Default: `0.55`. */
        opacity?: number
      }
      /** Value labels at both ends. */
      dataLabels?: {
        /** Draws the end labels. Default: `false`. */
        enabled?: boolean
        /** Distance of a label from its end marker in pixels. Default: `6`. */
        offset?: number
        /** Colours each label like its end marker. Default: `true`. */
        colorFromMarker?: boolean
        /** Returns the label text. */
        formatter?: WccCallback
        /** Text style of the labels (fontSize default '12px', fontWeight 600). */
        style?: WccTextStyle
      }
      /** Tooltip additions of dumbbells. */
      tooltip?: {
        /** Label of the difference row in the tooltip. Default: `'Difference'`. */
        differenceLabel?: string
      }
    }
  }
  /** Zoom settings of nested treemaps. */
  treemap?: {
    /** nested treemaps (series data with children): click a parent to zoom into it */
    zoomOnClick?: boolean
    /** Zoom into nested treemaps. */
    zoom?: {
      /** false turns zooming off; it is on unless this or `zoomOnClick` is false. */
      enabled?: boolean
      /** Breadcrumb path shown while zoomed; false hides it. */
      breadcrumb?: false | {
        /** Text of the first breadcrumb. Default: `'All'`. */
        rootLabel?: string
      /** Text between breadcrumbs. Default: `'›'`. */
        separator?: string
        /** Corner of the breadcrumb: `'top-left'` or `'top-right'`. Default: `'top-left'`. */
        position?: 'top-left' | 'top-right'
      }
    }
    /** Nested treemaps (data with `children`). */
    nested?: {
      /** Turns nesting on; data with `children` nests on its own. */
      enabled?: boolean
      /** Treats the `drilldown.series` levels as children of the points that reference them. Default: `false`. */
      drilldownAsLevels?: boolean
    }
    /** Nested treemaps: lightens (positive) or darkens (negative) child tiles per depth, 0 to 1. Default: `0`. */
    tint?: number
    /** Nested treemaps: labels of the leaf tiles. */
    dataLabels?: {
      /** Shows the value under the name. Default: `true`. */
      showValue?: boolean
      /** Smallest font size in pixels before a label is dropped. */
      minFontSize?: number
      /** Horizontal label position: `'left'` or `'center'`. Default: `'left'`. */
      align?: 'left' | 'center'
    }
    /** Nested treemaps: continuous colour by a second metric. */
    colorScale?: {
      /** Field of the data points (or function of the raw point and `{ node, w }`) that colours the tiles on a gradient. */
      colorValue?: string | ((point: any, ctx: { node: any, w: any }) => number)
      /** The colour gradient of `colorValue`. */
      gradient?: {
        /** `false` keeps the series colours. Default: `true`. */
        enabled?: boolean
        /** Lower end of the domain; not set uses the data minimum. */
        min?: number
        /** Upper end of the domain; not set uses the data maximum. */
        max?: number
        /** Value of the middle colour; defaults to 0 when the domain spans 0. */
        midpoint?: number
        /** Balances the domain around `midpoint`. Default: `false`. */
        symmetric?: boolean
        /** Own colour stops. */
        stops?: { value: number, color: string }[]
      }
      /** Gradient strip that replaces the categorical legend. */
      gradientLegend?: {
        /** Draws the strip. Default: `true`. */
        enabled?: boolean
        /** Strip length in pixels or as a `'60%'` string. Default: `min(320, 60% of the width)`. */
        width?: number | string
        /** Strip thickness in pixels. Default: `10`. */
        thickness?: number
        /** Strip position: `'left'`, `'center'` or `'right'`. Default: `'center'`. */
        align?: 'left' | 'center' | 'right'
        /** Gradient steps drawn (2 to 64). Default: `16`. */
        stops?: number
        /** Shows the min and max labels. Default: `true`. */
        showLabels?: boolean
        /** Moves an arrow to the value of the hovered tile. Default: `true`. */
        showHoverValue?: boolean
        /** Style of the labels. */
        labelStyle?: { fontSize?: number | string, color?: string, fontFamily?: string }
        /** Hover arrow. */
        arrow?: { size?: number, color?: string }
        /** Formats the labels and hover value. */
        formatter?: (value: number) => string
      }
    }
    /** Style of parent (group) tiles, applied to every depth. */
    parents?: WccTreemapLevel
    /** Per-depth overrides merged over `parents`; index 0 is the top level. */
    levels?: WccTreemapLevel[]
  }
}

// ------------------------------------------------------------------------------------------------
// premium plotOptions
// ------------------------------------------------------------------------------------------------

/** a premium plugin: plotOptions.<type>.plugins entry (docs/spec/06-premium-types.md §0) */
type WccPremiumPlugin = {
  /** Plugin id (state key and warnings); not set uses `plugin-<index>`. */
  name?: string
  /** Default options of the plugin; the `['name', options]` form overrides them. */
  defaults?: { [key: string]: any }
  /** `(p) => { top, right, bottom, left }`: space in px taken from the plot before layout. */
  reserve?(p: any): { top?: number; right?: number; bottom?: number; left?: number } | void
  /** `(p)`: called after each render; draw into `p.layer()` and bind events with `p.on()`. */
  afterRender?(p: any): void
  /**
   * `(name, e, payload, p)`: called for every chart event; returning `false` cancels a cancelable
   * one.
   */
  event?(name: string, e: Event | null, payload: any, p: any): boolean | void
  /** `(content, p) => content`: changes the tooltip content (rows, footer, …). */
  tooltip?(content: any, p: any): any
  /** `(p) => string` appended to the screen-reader summary. */
  describe?(p: any): string
  /** `(p)`: called before each redraw and on destroy. */
  destroy?(p: any): void
}
type WccPremiumPluginRef = WccPremiumPlugin | string | [string, { [key: string]: any }?]

type WccPremiumCommon = {
  /** Plugins of this chart: plugin objects, registered names, or `['name', options]`. */
  plugins?: WccPremiumPluginRef[]
}

type WccZoomOptions = {
  /** Enables zoom and pan of the view. Default: `true`. */
  enabled?: boolean
  /** Wheel zoom: `'ctrl'` zooms only while Ctrl or Cmd is held, `true` on every wheel event, `false` never. Default: `'ctrl'`. */
  wheel?: 'ctrl' | boolean | string
  /** Smallest zoom factor. Default: `0.25` for the network, `0.05` for the tree. */
  min?: number
  /** Largest zoom factor. Default: `8` for the network, `3` for the tree. */
  max?: number
}

type WccPremiumDrilldown = {
  /** `false` switches drill-down off. Default: `true`. */
  enabled?: boolean
  /** Shows the breadcrumb of the opened levels. Default: `true`. */
  breadcrumb?: boolean
  /** Breadcrumb label of the top level; not set uses `'Overview'` (sankey) or the map name. */
  rootLabel?: string
  /** load(item, info) returns a level or a Promise of one */
  load?: (item: any, info: any) => any
  /** ids that can be opened, or a test; default: every item when only load is set */
  drillable?: (string | number)[] | ((item: any) => boolean)
}

type WccSankeyOptions = WccPremiumCommon & {
  /**
   * `'horizontal'` lets the flow run left to right; `'vertical'` runs it top to bottom. Default:
   * `'horizontal'`.
   */
  orientation?: 'horizontal' | 'vertical'
  /** Node bar thickness in px. Default: `12`. */
  nodeWidth?: number
  /** Gap between nodes of a column in px. Default: `16`. */
  nodePadding?: number
  /**
   * Column of nodes without outgoing links: `'justify'` moves them to the last column, `'left'`
   * keeps them at their depth, `'right'` aligns everything to the end, `'center'` puts sources next
   * to their first target. Default: `'justify'`.
   */
  nodeAlign?: 'left' | 'right' | 'center' | 'justify'
  /** Corner radius of the node bars in px. Default: `3`. */
  nodeBorderRadius?: number
  /** Smallest node length in px, so tiny values stay visible. Default: `2`. */
  minNodeHeight?: number
  /** Relaxation passes that reduce link crossings (ignored with `sort: 'input'`). Default: `32`. */
  iterations?: number
  /**
   * `'input'` keeps the node order of the data; `'auto'` reorders nodes to reduce crossings.
   * Default: `'auto'`.
   */
  sort?: 'auto' | 'input'
  /**
   * Data with a cycle: `'error'` shows an error and emits an `error` event, `'break'` drops the
   * closing links (with a console warning), `'circular'` draws them as return loops. Default:
   * `'error'`.
   */
  cycles?: 'error' | 'break' | 'circular'
  /** Node definitions that set names, colours or fixed columns. Default: `[]`. */
  nodes?: {
    /** Node id used in the links. */
    id: string | number
    /** Shown name; not set uses the id. */
    name?: string
    /** Node colour. */
    color?: WccColor
    /** Fixed column (0 is the first). */
    column?: number
  }[]
  /** Lets the user drag nodes across the flow; positions survive updates. Default: `false`. */
  draggable?: boolean
  /**
   * Mirrored layout, the flow runs right to left; `'auto'` follows the CSS direction. Default:
   * `'auto'`.
   */
  rtl?: 'auto' | boolean
  /** Link ribbons. */
  link?: {
    /**
     * Ribbon colour from the `'source'` node, the `'target'` node, or a `'gradient'` between both.
     * Default: `'gradient'`.
     */
    colorMode?: 'source' | 'target' | 'gradient'
    /** One colour for all ribbons (a link's own `color` still wins). */
    color?: WccColor
    /** Ribbon opacity; not set uses 0.34 (0.5 in dark mode). */
    opacity?: number
    /** Bend of the ribbons, 0 straight. Default: `0.5`. */
    curvature?: number
    /** Thinnest ribbon in px. Default: `1`. */
    minWidth?: number
    /** Width factor (0.1 to 1) of return loops with `cycles: 'circular'`. Default: `0.4`. */
    circularWidth?: number
    /** Animated dots flowing along the links. */
    particles?: {
      /** Turns the particles on (not with motion off). Default: `false`. */
      enabled?: boolean
      /** Factor on the number of particles. Default: `1`. */
      density?: number
      /** Factor on the particle speed. Default: `1`. */
      speed?: number
      /** Particle radius in px. Default: `2.2`. */
      size?: number
      /** Particle colour; not set uses the target node colour (white in dark mode). */
      color?: WccColor
    }
  }
  /**
   * Alluvial mode: data points `{ from, to, value, stage }` link the same categories across stages.
   */
  alluvial?: {
    /** Turns alluvial mode on (input node order, a gradient link colour becomes source). Default: `false`. */
    enabled?: boolean
    /** Stage labels; not set numbers the stages from 1. Default: `[]`. */
    stages?: string[]
    /** Shows the stage labels over the columns. Default: `true`. */
    showStageLabels?: boolean
  }
  /** Animated playback of several data frames. */
  playback?: {
    /** Frames `{ label, data }`; two or more start the playback. Default: `[]`. */
    frames?: {
      /** Frame label (series name, playback button and `playbackFrame` event). */
      label?: string
      /** Link data of the frame. */
      data: any[]
    }[]
    /** Time per frame in ms (at least 300). Default: `2400`. */
    interval?: number
    /** Starts playing on render. Default: `true`. */
    autoplay?: boolean
    /** Starts again after the last frame. Default: `true`. */
    loop?: boolean
    /** Shows play and frame buttons. Default: `true`. */
    controls?: boolean
  }
  /** Node labels. */
  labels?: {
    /** Shows the node labels. Default: `true`. */
    show?: boolean
    /** `'outside'` puts first-column labels on the outer side too; `'auto'` places them next to the node, inside the flow. Default: `'auto'`. */
    position?: 'auto' | 'outside'
    /** Shows the node value under the name. Default: `true`. */
    showValue?: boolean
    /** Label font size; not set uses the theme font size. */
    fontSize?: number | string
    /** Label font weight. Default: `600`. */
    fontWeight?: number | string
    /** `(name, { node, value, w }) => string` for the label name. */
    formatter?: WccCallback
    /** `(value, { node, w }) => string` for values in labels and tooltips; not set uses `tooltip.y.formatter` or a number format. */
    valueFormatter?: WccCallback
  }
  /** Drill-down into nodes. */
  drilldown?: WccPremiumDrilldown & {
    /** Levels per node id: link data, `{ data, label, nodes }`, or `true` to load the level via `load`. */
    nodes?: { [id: string]: any }
  }
}

type WccChordOptions = WccPremiumCommon & {
  /** Flow matrix instead of series data: rows are the sources, columns the targets (names from `labels`). Default: `null`. */
  matrix?: number[][] | null
  /**
   * Group names for the `matrix` rows and columns; missing names become `Group 1`, `Group 2`, ….
   * Default: `[]`.
   */
  labels?: string[]
  /**
   * `true` sizes each arc by what the group sends plus what it receives; `false` by what it sends
   * only (each flow is drawn once); `'auto'` uses `false` when every flow has an equal reverse
   * flow. Default: `'auto'`.
   */
  directed?: 'auto' | boolean
  /** Gap between neighbouring groups in radians. Default: `0.03`. */
  padAngle?: number
  /**
   * Group order around the circle: data order (`'none'`), or by size `'asc'` / `'desc'`. Default:
   * `'none'`.
   */
  sort?: 'none' | 'asc' | 'desc'
  /** Thickness of the group ring in px (4 px up to a third of the radius). Default: `12`. */
  ringWidth?: number
  /** Flow ribbons. */
  ribbon?: {
    /** Ribbon opacity; not set uses 0.5 (0.58 in dark mode). */
    opacity?: number
    /** Ribbon colour from the `'source'` group, the `'target'` group, or a `'gradient'` between both. Default: `'source'`. */
    colorMode?: 'source' | 'target' | 'gradient'
    /** Gap between the ring and the ribbon ends in px. Default: `2`. */
    padding?: number
  }
  /** Group definitions that set names and colours. Default: `[]`. */
  groups?: {
    /** Group id used in the data. */
    id: string | number
    /** Shown name; not set uses the id. */
    name?: string
    /** Group colour. */
    color?: WccColor
  }[]
  /** Value ticks along the outside of the ring. */
  ticks?: {
    /** Shows the ticks. Default: `false`. */
    show?: boolean
    /** Value step of the minor ticks; `'auto'` keeps them about 9 px apart. Default: `'auto'`. */
    step?: 'auto' | number
    /** Value step of the labelled ticks; `'auto'` uses a 1/2/5/10 multiple of `step` about 44 px apart. Default: `'auto'`. */
    labelStep?: 'auto' | number
    /** `(value, { w }) => string` for tick labels; not set uses a compact number. */
    formatter?: WccCallback
  }
  /** Group labels outside the ring. */
  dataLabels?: {
    /** Shows the group labels. Default: `true`. */
    show?: boolean
    /** Shows the group size under the name. Default: `true`. */
    showValue?: boolean
    /** `(name, { node, w }) => string` for the label name. */
    formatter?: WccCallback
  }
}

type WccGanttColumn = 'name' | 'start' | 'end' | 'duration' | 'progress' | 'assignee' | 'wbs' | 'ring'

/** A gantt grid column given as an object: a built-in key or an own key with a header and a value function. */
type WccGanttColumnDef = {
  /** Built-in column key or an own key. */
  key: WccGanttColumn | string
  /** Header text; not set uses `headers[key]` or the locale string. */
  header?: string
  /** Column width in pixels (at least 24). Default: `72` (built-in columns keep their own width). */
  width?: number
  /** Text anchor of the cells: `'start'` or `'end'` (`'middle'` centres the body cells). Default: `'end'` for duration and progress, else `'start'`. */
  align?: 'start' | 'middle' | 'end'
  /** Cell text from the raw task and `{ task, w }`. */
  value?: (raw: any, ctx: { task: any, w: any }) => any
}

/** A unit shape from `WestCoastCharts.unitShapes` (or `unitShapes.from(...)`); pass it as is. */
type WccUnitShape = {
  isUnitShape: true
  name?: string
  kind?: string
  category?: string
  minUnits?: number
  order?: any
  source?: any
  rings?: any[]
  /** Shape metadata. */
  shape?: { [key: string]: any }
  /** Places the units inside the outline. */
  fill?: (...args: any[]) => any
  /** A variant with other settings. */
  with?: (opts: any) => WccUnitShape
  /** A hollow variant. */
  outlined?: (thickness?: number) => WccUnitShape
  [key: string]: any
}

/** Nested treemap: style of the parent tiles of one depth (or of all, in `parents`). */
type WccTreemapLevel = {
  /** Header strip of the parent tiles. */
  header?: {
    /** Draws the header. Default: `true`. */
    show?: boolean
    /** Shows the value next to the name. Default: `false`. */
    showValue?: boolean
    /** Text position: `'left'`, `'center'` or `'right'`. Default: `'left'`. */
    align?: 'left' | 'center' | 'right'
    /** Moves the text horizontally in pixels. */
    offsetX?: number
    /** Moves the text vertically in pixels. */
    offsetY?: number
    /** Header text from the name and `{ value, depth, seriesIndex, node, w }`. */
    formatter?: (name: string, ctx: any) => string
    /** Text and background style (fontSize, fontWeight, fontFamily, color, background, cssClass). */
    style?: { [key: string]: any }
    [key: string]: any
  }
  /** Border colour of the parent tiles. */
  borderColor?: string
  /** Border width in pixels. */
  borderWidth?: number
  /** Corner radius in pixels. */
  borderRadius?: number
  /** Fill opacity of the parent tiles. */
  fillOpacity?: number
  [key: string]: any
}

/** A pictogram mark: a built-in name, `{ name }`, or an own SVG path. */
type WccUnitMark = string | { name: string } | { path: string, viewBox?: string | [number, number, number, number], [key: string]: any }
type WccGanttOptions = WccPremiumCommon & {
  /** Height of one task row in px. Default: `36`. */
  rowHeight?: number
  /** fraction of the row */
  barHeight?: number
  /** Corner radius of the task bars in px. Default: `5`. */
  barRadius?: number
  /**
   * `'input'` keeps the series order; `'start'` sorts the tasks of each group by start, then end.
   * `'end'` sorts by end time; `'name'` sorts by locale-aware task name. Equal keys retain input order. Group order is unchanged.
   * Default: `'input'`.
   */
  sort?: 'input' | 'start' | 'end' | 'name'
  /** Task table to the left of the timeline (right in RTL). */
  grid?: {
    /** `false` hides the table and gives the timeline the full width. Default: `true`. */
    show?: boolean
    /** Table width in px, capped at 42 % of the plot width. Default: `260`. */
    width?: number
    /** Columns of the table in order. Default: `['name', 'start', 'duration']`. */
    columns?: Array<WccGanttColumn | WccGanttColumnDef>
    /** Header text per column. Default: `{ name: 'Task', start: 'Start', end: 'End', duration: 'Days', progress: '%', assignee: 'Owner', wbs: 'WBS', ring: '' }`. */
    headers?: { [column in WccGanttColumn]?: string }
  }
  /** Group rows (one group per series name). */
  groups?: {
    /** Draws a header row per group when there are several groups or the group is named. Default: `true`. */
    show?: boolean
    /** Lets a click on a group row collapse or expand its tasks. Default: `true`. */
    collapsible?: boolean
  }
  /** Task name labels on the bars. */
  labels?: {
    /** `false` draws the bars without name labels. Default: `true`. */
    show?: boolean
    /** Preferred side of the label: `'right'` or `'left'` outside the bar, or `'inside'` when it fits (falls back outside on narrow bars). Default: `'right'`. */
    position?: 'right' | 'left' | 'inside'
    /** `(name, { task, w }) => string` returns the label text; not set shows the name (plus the assignee when no assignee column is shown). */
    formatter?: WccCallback
  }
  /** Progress fill of the bars. */
  progress?: {
    /** Fills each bar to its `progress` and adds the percentage to the label. Default: `true`. */
    show?: boolean
  }
  /** Dependency links between tasks. */
  dependencies?: {
    /** `false` hides the links (and link editing). Default: `true`. */
    show?: boolean
    /** Link colour; not set uses a muted theme colour (critical links use the critical-path colour). */
    color?: WccColor
    /** Corner radius of the link elbows in px. Default: `6`. */
    radius?: number
    /** Size of the arrow head in px. Default: `5`. */
    arrowSize?: number
    /** Writes a link's lag or lead (e.g. "+2d") on the link. Default: `true`. */
    lagLabels?: boolean
    /** Dashes and marks links whose successor starts before the dependency allows. Default: `false`. */
    violations?: boolean
    /** Lets the user draw links from the handle at a bar's end and delete a selected link. Default: `false`. */
    edit?: boolean
  }
  /** Today marker. */
  today?: {
    /** Draws a vertical line at today. Default: `true`. */
    show?: boolean
    /** Date used as "today"; not set uses the current time. */
    date?: WccDate
    /** Text of the today marker and its control button. Default: `'Today'`. */
    label?: string
  }
  /** Weekend shading (used when no working calendar is set). */
  weekends?: {
    /** Shades Saturdays and Sundays once a day is at least 10 px wide. Default: `true`. */
    show?: boolean
  }
  /**
   * Working calendar: durations, moves and resizes count working days. Not set: calendar days.
   */
  calendar?: {
    /** Working weekdays, 0 = Sunday ... 6 = Saturday. Default: `[1, 2, 3, 4, 5]`. */
    workingDays?: number[]
    /** Non-working dates: a date, `{ date, name }` or a range `{ from, to, name }`. */
    holidays?: (
      | WccDate
      | {
          /** Date of the holiday. */
          date: WccDate
          /** Name shown for the holiday. */
          name?: string
        }
      | {
          /** First day of the holiday range. */
          from: WccDate
          /** Last day of the holiday range (inclusive). */
          to: WccDate
          /** Name shown for the holiday. */
          name?: string
        }
    )[]
    /** `false` stops shading non-working days. Default: `true`. */
    shade?: boolean
  }
  /** Critical path highlighting. */
  criticalPath?: {
    /** Outlines the tasks without float (a delay moves the project end) and the links between them. Default: `false`. */
    show?: boolean
    /** Colour of the critical path; not set uses the theme's negative colour. */
    color?: WccColor
  }
  /** Planned (baseline) bars. */
  baselines?: {
    /** Draws a task's `baseline` dates as a thin bar under it and adds it to the legend. Default: `true`. */
    show?: boolean
  }
  /** Zoom of the time axis. */
  zoom?: {
    /** `false` disables zooming. Default: `true`. */
    enabled?: boolean
    /** `false` turns off Ctrl/Cmd + wheel zoom; any other value keeps it (a plain wheel always scrolls). Default: `'ctrl'`. */
    wheel?: 'ctrl' | boolean | string
    /** Smallest visible span in days. Default: `3`. */
    minDays?: number
    /** Largest visible span in days. Default: `3650`. */
    maxDays?: number
  }
  /** Moving and resizing tasks with the pointer. */
  drag?: {
    /** Lets the user move bars (and enables the editing options). Default: `false`. */
    enabled?: boolean
    /** Adds resize handles at the bar ends while dragging is on. Default: `true`. */
    resize?: boolean
    /** Snap of moved dates: `'day'`, `'hour'`, a step in ms, or `false` for none. Default: `'day'`. */
    snap?: 'day' | 'hour' | false
    /** Lets the user draw new tasks on empty rows and shows the "+ Add task" row. Default: `false`. */
    draw?: boolean
  }
  /** Editing behaviour (needs `drag.enabled`). */
  edit?: {
    /** Keeps an undo / redo history of edits. Default: `true`. */
    undo?: boolean
    /** Allows keyboard edits of the focused task. Default: `true`. */
    keyboard?: boolean
    /** Lets Delete / Backspace remove the focused task. Default: `true`. */
    remove?: boolean
    /** Lets a double click on a task name rename it inline. Default: `true`. */
    rename?: boolean
    /** Name given to a newly created task. Default: `'New task'`. */
    newName?: string
    /** Length in days of a task created with the add button or keyboard. Default: `3`. */
    newDays?: number
    /** Text of the add row (shown after "+ "). Default: `'Add task'`. */
    addLabel?: string
  }
  /** Fixed time range of the timeline. */
  range?: {
    /** Start of the timeline; not set fits the tasks. */
    min?: WccDate
    /** End of the timeline; not set fits the tasks (with room for labels). */
    max?: WccDate
  }
  /** Project boundary: dashed start / deadline lines; tasks outside it are flagged. */
  boundary?: {
    /** Project start date. */
    start?: WccDate
    /** Project end date (deadline). */
    end?: WccDate
    /** Label of the start line. Default: `'Start'`. */
    startLabel?: string
    /** Label of the deadline line. Default: `'Deadline'`. */
    endLabel?: string
    /** `false` stops shading the time outside the boundary. Default: `true`. */
    shade?: boolean
  }
  /**
   * Timeline annotations: a marker line, a range (`x2`), or a note on a task's bar (`task`).
   * Default: `[]`.
   */
  annotations?: {
    /** Date of the marker, or start of the range. */
    x: WccDate
    /** End of the range; set draws a shaded band. */
    x2?: WccDate
    /** Text of the chip or note. */
    label?: string
    /** Colour; not set cycles through theme colours. */
    color?: WccColor
    /** `false` draws the marker solid; any other value keeps it dashed. */
    dash?: boolean
    /** Task id: draws the annotation as a note on that task's row. */
    task?: string | number
  }[]
  /**
   * Saves the view to localStorage under this key (a string) or `{ key, ... }`; not set saves
   * nothing.
   */
  persist?: string | {
    /** localStorage key. */
    key: string
    /** Saves the visible time range. Default: `true`. */
    view?: boolean
    /** Saves the collapsed groups. Default: `true`. */
    collapsed?: boolean
    /** Saves the selected tasks. Default: `false`. */
    selection?: boolean
  }
  /** On-chart buttons (today, zoom). */
  controls?: {
    /** `false` hides the control buttons. Default: `true`. */
    show?: boolean
  }
  /** Task selection. */
  selection?: {
    /** Lets a click select a task. Default: `true`. */
    enabled?: boolean
    /** Lets Ctrl/Cmd/Shift + click add to the selection. Default: `true`. */
    multiple?: boolean
  }
  /** Time crosshair. */
  crosshair?: {
    /** Draws a vertical line with the date under the pointer. Default: `false`. */
    show?: boolean
  }
  /**
   * Mirrored layout (table on the right, time runs right to left); `'auto'` follows the CSS
   * direction. Default: `'auto'`.
   */
  rtl?: 'auto' | boolean
}

type WccTreeOptions = WccPremiumCommon & {
  /**
   * `'tidy'` places parents over their children; `'dendrogram'` puts all leaves on the last level.
   * Default: `'tidy'`.
   */
  layout?: 'tidy' | 'dendrogram'
  /**
   * Growth direction; `'radial'` places levels on rings. The aliases `'top-to-bottom'`,
   * `'bottom-to-top'`, `'left-to-right'` and `'right-to-left'` also set `direction`. Default:
   * `'vertical'`.
   */
  orientation?: 'vertical' | 'horizontal' | 'radial' | 'top-to-bottom' | 'bottom-to-top' | 'left-to-right' | 'right-to-left'
  /**
   * `'reverse'` puts the root at the bottom (vertical) or right (horizontal). Default: `'forward'`.
   */
  direction?: 'forward' | 'reverse'
  /**
   * Mirrored layout (first child on the right, horizontal trees grow leftwards, card text
   * right-aligned); `'auto'` follows the CSS direction. Default: `'auto'`.
   */
  rtl?: 'auto' | boolean
  /** Node drawing. */
  node?: {
    /**
     * `'card'`, `'compact'` or `'dot'`; `'auto'` uses dots for radial trees and dendrograms,
     * otherwise cards. Default: `'auto'`.
     */
    template?: 'auto' | 'card' | 'compact' | 'dot'
    /** Card width in px. Default: `196`. */
    width?: number
    /** Card height in px. Default: `60`. */
    height?: number
    /** Card corner radius in px. Default: `10`. */
    radius?: number
    /** Shows the avatar circle on cards at least 44 px high. Default: `true`. */
    avatar?: boolean
    /** Dot radius of the dot template in px. Default: `5`. */
    dotSize?: number
    /**
     * Stacks the leaf children of a vertical card tree in a column; `'auto'` keeps a plain row when
     * that fits the plot better, `false` never stacks. Default: `'auto'`.
     */
    stackLeaves?: 'auto' | boolean
    /** returns text fields only, never HTML */
    formatter?: WccCallback
    /**
     * `(data, { node, depth, children }) => { width, height }` sets a node's own card size (a
     * `size` in the data also works).
     */
    size?: (data: any, info: { node: any; depth: number; children: any[] }) => { width?: number; height?: number }
    /**
     * Wraps long titles and subtitles (up to `maxLines`) and grows the card to fit. Default:
     * `false`.
     */
    autoHeight?: boolean
    /** Most lines of a wrapped text with `autoHeight`. Default: `3`. */
    maxLines?: number
  }
  /**
   * Frames around a node and its visible descendants (cards only, not radial); a node's data
   * `wrapper: true | { label, color }` also adds one. Default: `[]`.
   */
  wrappers?: {
    /** Id of the framed node. */
    id: string | number
    /** Label of the frame. */
    label?: string
    /** Frame colour. */
    color?: WccColor
    /** Dashes the frame outline. Default: `false`. */
    dashed?: boolean
  }[]
  /** Gaps of the layout in px. */
  spacing?: {
    /** Gap between neighbouring cards. Default: `16`. */
    sibling?: number
    /** Gap between levels. Default: `56`. */
    level?: number
    /** Distance between neighbouring dots. Default: `22`. */
    dot?: number
  }
  /** Radial layout. */
  radial?: {
    /** Start angle in degrees clockwise from 12 o'clock; not set is fitted to the plot. */
    startAngle?: number
    /** `false` keeps a true circle; `'auto'` stretches it (up to 1.45 x) along the plot's long side. Default: `'auto'`. */
    stretch?: 'auto' | boolean
  }
  /** Parent-child links. */
  links?: {
    /** `'elbow'`, `'curve'` or `'straight'`; `'auto'` uses curves for dot trees (not dendrograms), otherwise elbows. Default: `'auto'`. */
    style?: 'auto' | 'elbow' | 'curve' | 'straight'
    /** Link colour; not set uses a muted tone (a branch tint for dot trees). */
    color?: WccColor
    /** Link width in px. Default: `1.25`. */
    width?: number
  }
  /**
   * Node tint: one colour per top-level `'branch'`, per `'depth'`, or the accent for `'none'`.
   * Default: `'branch'`.
   */
  colorBy?: 'branch' | 'depth' | 'none'
  /** Folding of subtrees. */
  collapse?: {
    /** Lets the user fold and unfold subtrees. Default: `true`. */
    enabled?: boolean
    /** Folds nodes at this depth and deeper on the first render; not set opens everything (nodes with `collapsed: true` start folded). */
    initialDepth?: number
  }
  /** Zoom and pan (scale 0.05 to 3 by default). */
  zoom?: WccZoomOptions & {
    /** Smallest scale of the initial fit; not set uses the scale where the smallest text is `readableFont` px. */
    fitMin?: number
    /** Largest scale of the initial fit. Default: `1.5`. */
    fitMax?: number
    /** Text size in px the initial view keeps readable. Default: `11`. */
    readableFont?: number
    /** A tree too big for the readable scale still opens whole while its smallest text stays at least this size; `false` starts readable at the root instead. Default: `8`. */
    overviewFont?: number | false
  }
  /** On-chart zoom buttons. */
  controls?: {
    /** `false` hides the zoom buttons. Default: `true`. */
    show?: boolean
  }
  /** Level of detail. */
  lod?: {
    /** Below this zoom scale card texts are hidden and cards drawn as plain shapes. Default: `0.42`. */
    threshold?: number
  }
  /** Lazy children for nodes with `hasChildren: true` and no `children`. */
  lazy?: {
    /** `(node, { w, id, name, depth }) => children[] | Promise`, called when such a node is first expanded. */
    load?: (node: any, info: { w: any; id: any; name: string; depth: number }) => any
    /** Text of the placeholder while loading. Default: `'Loading…'`. */
    loadingText?: string
    /** Text when the load fails (a click retries). Default: `'Could not load · retry'`. */
    errorText?: string
  }
}

type WccStockDrawing = {
  /** Id of the drawing; not set gets `'d1'`, `'d2'`, ... */
  id?: string | number
  /**
   * `'trendline'` (2 points), `'ray'` (horizontal, 1 point), `'fib'` (retracement, 2 points) or
   * `'rect'` (2 corners); aliases such as `'line'` or `'box'` are accepted.
   */
  type: 'trendline' | 'ray' | 'fib' | 'rect' | string
  /** Anchors as `{ t, y }` or `[t, y]` (time, price); invalid drawings are skipped. */
  points: ({
    /** Time of the anchor. */
    t: WccDate
    /** Price of the anchor. */
    y: number
  } | [WccDate, number])[]
  /** Colour; not set uses `drawings.colors` or the palette. */
  color?: WccColor
  /** Text written along the drawing. */
  label?: string
  /** Line width in px. Default: `1.6`. */
  width?: number
  /**
   * Trend line: extends to the plot edge (`true` or `'both'` both ways, `'left'`, `'right'`); fib:
   * `false` ends the levels at the second point.
   */
  extend?: boolean | 'left' | 'right' | 'both'
  /** `true` dashes the line; a string is used as SVG dash array; not set draws it solid. */
  dash?: boolean | string
  /** Fill of a rectangle; not set uses a faint tint of the colour. */
  fill?: string
  /** Fibonacci levels as fractions. Default: `[0, 0.236, 0.382, 0.5, 0.618, 0.786, 1]`. */
  levels?: number[]
  /** `true` stops the user from moving or editing the drawing. */
  locked?: boolean
  /** Side of the trend line label. Default: `'above'`. */
  labelPosition?: 'above' | 'below'
}
type WccStockOptions = WccPremiumCommon & {
  /** with chart.type 'candlestick': draw it with the stock renderer */
  enabled?: boolean
  /** Price display: candles, OHLC bars, a close line or a close area. Default: `'candlestick'`. */
  style?: 'candlestick' | 'ohlc' | 'line' | 'area'
  /** Colours of rising and falling candles. */
  colors?: {
    /** Rising candle colour; not set uses the theme's positive colour. */
    up?: WccColor
    /** Falling candle colour; not set uses the theme's negative colour. */
    down?: WccColor
  }
  /** Volume bars at the bottom of the price pane (drawn when the data has volume). */
  volume?: {
    /** `false` hides the volume bars. Default: `true`. */
    show?: boolean
    /** Share of the price pane used by volume (0.05 to 0.5). Default: `0.2`. */
    height?: number
  }
  /** Price overlays: SMA, EMA or Bollinger bands. Default: `[]`. */
  overlays?: {
    /** Overlay kind (`'bb'` is accepted for Bollinger). */
    type: 'sma' | 'ema' | 'bollinger'
    /** Period in candles. Default: `20`. */
    period?: number
    /** Bollinger band width in standard deviations. Default: `2`. */
    k?: number
    /** Line colour; not set cycles through theme colours. */
    color?: WccColor
  }[]
  /** Indicator panes under the price pane: RSI or MACD. Default: `[]`. */
  indicators?: ({
    /** Indicator kind. */
    type: 'rsi'
    /** RSI period in candles. Default: `14`. */
    period?: number
  } | {
    /** Indicator kind. */
    type: 'macd'
    /** MACD fast EMA period. Default: `12`. */
    fast?: number
    /** MACD slow EMA period. Default: `26`. */
    slow?: number
    /** MACD signal EMA period. Default: `9`. */
    signal?: number
  })[]
  /** Range buttons above the chart. */
  rangeSelector?: {
    /** `false` hides the range buttons. Default: `true`. */
    show?: boolean
    /** Buttons, each spanning `months`, `days`, the year to date (`ytd`) or `all`. Default: 1M, 3M, 6M, YTD, 1Y, All. */
    buttons?: {
      /** Button text; also the value of `selected`. */
      label: string
    /** Months back from the last candle. */
    months?: number
    /** Days back from the last candle. */
    days?: number
    /** Spans from 1 January of the last candle's year. */
    ytd?: boolean
    /** Spans all candles. */
    all?: boolean
  }[]
    /** Label of the initial range; not set picks 6M (over 400 days of data), 3M (over 120 days) or All. */
    selected?: string
  }
  /** Overview strip with a draggable window under the chart. */
  navigator?: {
    /** `false` hides the navigator. Default: `true`. */
    show?: boolean
    /** Navigator height in px. Default: `46`. */
    height?: number
  }
  /** Crosshair across all panes. */
  crosshair?: {
    /** `false` hides the crosshair lines. Default: `true`. */
    show?: boolean
  }
  /** OHLC and overlay values written at the top of the price pane. */
  readout?: {
    /** `false` hides the readout and its reserved space. Default: `true`. */
    show?: boolean
  }
  /** Behaviour when candles are added. */
  realtime?: {
    /** Keeps the view at the newest candle when new ones arrive while the view is at the end. Default: `true`. */
    follow?: boolean
  }
  /** Zoom and pan of the time axis. */
  zoom?: {
    /** `false` disables wheel zoom and drag panning. Default: `true`. */
    enabled?: boolean
    /** `'ctrl'` zooms while Ctrl or Cmd is held, `true` on every wheel event; other values never. Default: `'ctrl'`. */
    wheel?: 'ctrl' | boolean | string
    /** Fewest candles in view (at least 2). Default: `8`. */
    minCandles?: number
  }
  /** Price axis. */
  yaxis?: {
    /** Decimals of prices; not set uses 0 from 1000, 2 from 1, otherwise 4. */
    decimals?: number
    /** `(price, { w }) => string` for axis labels and readouts. */
    formatter?: WccCallback
    /** `'log'` uses a logarithmic scale, `'percent'` shows the change against the first visible close. Default: `'linear'`. */
    type?: 'linear' | 'log' | 'percent'
  }
  /** Candle size; `'week'` and `'month'` aggregate the input candles. Default: `'day'`. */
  timeframe?: 'day' | 'week' | 'month'
  /** Horizontal price levels (orders, targets, stops) with an axis label. Default: `[]`. */
  priceLines?: {
    /** Price of the line. */
    y: number
    /** Text chip at the left end of the line. */
    label?: string
    /** Line colour; not set cycles through theme colours. */
    color?: WccColor
    /** `false` draws the line solid; otherwise it is dashed. */
    dash?: boolean
    /** Line width in px. Default: `1.2`. */
    width?: number
  }[]
  /** Event flags (earnings, dividends, splits) on the candle of their date. Default: `[]`. */
  markers?: {
    /** Date of the event. */
    x: WccDate
    /** One or two characters inside the flag. Default: `'•'`. */
    label?: string
    /** Hover text of the flag (after the date). */
    text?: string
    /** Flag colour; not set cycles through theme colours. */
    color?: WccColor
    /** `'below'` the candle's low or `'above'` its high. Default: `'below'`. */
    position?: 'below' | 'above'
  }[]
  /** Drawing tools for the user (opt-in). */
  drawings?: {
    /** Turns the drawing tools on. Default: `false`. */
    enabled?: boolean
    /** Tools in the toolbar. Default: `['trendline', 'ray', 'fib', 'rect']`. */
    tools?: ('trendline' | 'ray' | 'fib' | 'rect')[]
    /** Initial drawings. Default: `[]`. */
    items?: WccStockDrawing[]
    /** `false` hides the tool buttons (drawings stay visible). Default: `true`. */
    toolbar?: boolean
    /**
     * Snaps anchors to the open, high, low or close within 10 px of the pointer. Default: `true`.
     */
    magnet?: boolean
    /** Keeps the tool active after a drawing is finished. Default: `false`. */
    keepTool?: boolean
    /** localStorage key; set saves and restores the drawings. */
    storageKey?: string
    /**
     * `'muted'` uses the accent for trend lines and a muted tone for the rest; `'vivid'` gives
     * every tool its own colour. Default: `'muted'`.
     */
    palette?: 'muted' | 'vivid'
    /** Colour per tool; wins over the palette. */
    colors?: {
      /** Trend line colour. */
      trendline?: WccColor
      /** Horizontal ray colour. */
      ray?: WccColor
      /** Fibonacci retracement colour. */
      fib?: WccColor
      /** Rectangle colour. */
      rect?: WccColor
    }
  }
}

type WccMapPattern = 'hatch' | 'hatch-reverse' | 'cross' | 'dots' | 'grid' | 'vertical' | 'horizontal' | {
  /** Pattern: `'hatch'`, `'hatch-reverse'`, `'cross'`, `'dots'`, `'grid'`, `'vertical'` or `'horizontal'`; other values draw no pattern. */
  type: string
  /** Ink of the lines or dots; not set uses a contrasting theme ink. */
  color?: WccColor
  /** Fill behind the pattern; not set uses the region colour. */
  background?: WccColor
  /** Pattern cell in px (3 to 40). Default: `6`, `7` for dots. */
  size?: number
  /** Line width or dot radius in px (0.3 to 10). Default: `1.1`, `1.4` for dots. */
  width?: number
  /** Rotation in degrees. Default: `45` for hatch, `-45` for hatch-reverse, otherwise `0`. */
  angle?: number
}
type WccMapOptions = WccPremiumCommon & {
  /** a registered map name, or TopoJSON / GeoJSON */
  map?: string | object
  /** TopoJSON object name, when there are several */
  object?: string | null
  /**
   * Projection; `'auto'` uses the map's own projection hint or `'equalEarth'`. Default: `'auto'`.
   */
  projection?: 'auto' | 'equalEarth' | 'mercator' | 'equirectangular' | 'albers' | 'albersUsa' | 'orthographic'
  /** globe centre [lon, lat] */
  rotate?: [number, number]
  /** Per-unit choropleth values: value / `by` * `per` (e.g. per capita). */
  normalize?: {
    /** Denominator: a key of the data item or of the region's properties, or `(item, { feature }) => number`; not set: no normalisation. */
    by?: string | ((item: any) => number) | null
    /** Multiplier of the ratio (e.g. `100000` for "per 100k"). Default: `1`. */
    per?: number
    /** Tooltip label of the raw total next to the normalised value. Default: `'Total'`. */
    label?: string | null
  }
  /** Region ids or names left out of the map (case-insensitive). Default: `['ATA']`. */
  exclude?: string[]
  /**
   * Region drawing: `'fill'` (shapes), `'dots'` (a dot grid clipped to the land) or `'tiles'` (one
   * equal tile per region). Default: `'fill'`.
   */
  style?: 'fill' | 'dots' | 'tiles'
  /** Dot grid of `style: 'dots'`. */
  dots?: {
    /** Distance between dot centres in px (at least 3). Default: `7`. */
    spacing?: number
    /** Dot diameter as a fraction of the spacing (0.2 to 1). Default: `0.72`. */
    size?: number
  }
  /** Tile cartogram of `style: 'tiles'`. */
  tiles?: {
    /** `'hex'` or `'square'` tiles. Default: `'hex'`. */
    shape?: 'hex' | 'square'
    /** Gap between tiles in px. Default: `2.5`. */
    gap?: number
    /** `false` hides the tile labels; a function `({ id, name, value, properties }) => string` sets them. Default: `true` (region id). */
    labels?: boolean | ((region: any) => string)
    /** Grid placement: a built-in layout name (e.g. `'us-states'`) or `{ id: [col, row] }`; not set uses the built-in layout of the map. */
    layout?: string | { [id: string]: [number, number] }
  }
  /**
   * Draws the globe outline with a faint 30° graticule behind equalEarth and equirectangular maps.
   * Default: `true`.
   */
  sphere?: boolean
  /** Colour scale of choropleth values. */
  colorScale?: {
    /**
     * `'linear'`, `'log'`, `'quantize'` (stepped buckets) or `'diverging'` (around `mid`); a
     * diverging palette implies `'diverging'`. Default: `'linear'`.
     */
    type?: 'linear' | 'log' | 'quantize' | 'diverging'
    /**
     * Named palette: blue, green, teal, purple, orange, red, gray, heat, viridis, or diverging
     * blue-red, green-purple, teal-orange; not set derives a ramp from the theme accent.
     */
    palette?: string
    /** Reverses the named palette. Default: `false`. */
    reverse?: boolean
    /** Own colour stops; win over `palette`. */
    colors?: string[] | null
    /** Lower end of the scale; not set uses the data minimum. */
    min?: number
    /** Upper end of the scale; not set uses the data maximum. */
    max?: number
    /** Neutral value of a diverging scale. Default: `0`. */
    mid?: number
    /** Number of buckets of a quantize scale (2 to 12). Default: `5`. */
    steps?: number
    /**
     * Explicit value ranges, each with its own colour (and legend entry); win over the scale type.
     */
    ranges?: {
      /** Lowest value of the range (inclusive); not set: open below. */
      from?: number
      /** Highest value of the range (inclusive); not set: open above. */
      to?: number
      /** Colour of the range; not set takes the next scale colour. */
      color?: WccColor
      /** Legend name of the range. */
      name?: string
      /** Pattern drawn over the range's regions. */
      pattern?: WccMapPattern
    }[] | null
    /** Fill of regions without a value; not set uses a light theme grey. */
    nullColor?: WccColor | null
    /**
     * Adds automatic patterns to every bucket but the first (ranges and quantize scales), for print
     * and colour-blind readers. Default: `false`.
     */
    patterns?: boolean
  }
  /** Region outlines. */
  borders?: {
    /** Outline width in px. Default: `0.6` (`0.5` on dark themes). */
    width?: number
    /** Outline colour; not set uses the surface colour (none for dots). */
    color?: WccColor | null
  }
  /** Bubble layers sized by value. */
  bubble?: {
    /** Smallest bubble radius in px. Default: `3`. */
    minRadius?: number
    /** Largest bubble radius in px. Default: `26`. */
    maxRadius?: number
    /** Fill opacity of bubbles. Default: `0.62`. */
    opacity?: number
  }
  /** Hexbin layers that bin points into hexagons. */
  hexbin?: {
    /** Hexagon radius in px; `'auto'` uses 1/60 of the map width (5 to 14 px). Default: `'auto'`. */
    radius?: 'auto' | number
    /** Scales each hexagon by its count as well as colouring it. Default: `true`. */
    scaleSize?: boolean
    /** Colour stops of the count ramp; not set derives three stops from the layer colour. */
    colors?: string[] | null
  }
  /** Flow arc layers (from, to, value). */
  arcs?: {
    /** Bulge of the arcs relative to their length. Default: `0.28`. */
    curvature?: number
    /** `[min, max]` stroke width in px, scaled by the square root of the value. Default: `[1, 3.5]`. */
    width?: [number, number]
    /** Animates a moving dash along each arc while animations are on. Default: `true`. */
    flow?: boolean
    /** Draws dots at both ends of each arc. Default: `true`. */
    endpoints?: boolean
  }
  /** Fixed-size point markers. */
  markers?: {
    /** Marker shape. Default: `'pin'`. */
    shape?: 'pin' | 'circle' | 'square' | 'diamond' | 'triangle' | 'star'
    /** Marker size in px. Default: `24`. */
    size?: number
    /** Writes the point name next to each marker (a layer or point setting wins). Default: `false`. */
    labels?: boolean
  }
  /** Route layers through ordered stops. */
  routes?: {
    /** Line width in px (a layer or route setting wins). Default: `2.5`. */
    width?: number
    /** Follows great circles between stops instead of straight lines. Default: `true`. */
    geodesic?: boolean
    /** Draws a dot at each stop. Default: `true`. */
    stops?: boolean
    /** Adds direction arrows along the route. Default: `true`. */
    arrows?: boolean
    /** Writes the stop names. Default: `false`. */
    labels?: boolean
    /** SVG dash array of the route line; not set draws it solid. */
    dash?: number | string | null
  }
  /**
   * Callouts, free text and region notes, placed by `region`, `at: [lon, lat]` or `lon`/`lat`; kept
   * at screen size while zooming. Default: `[]`.
   */
  annotations?: { [key: string]: any }[]
  /** Colour or size legend under the map. */
  legend?: {
    /** `false` hides the legend. Default: `true`. */
    show?: boolean
    /** Legend title; not set uses the layer name. */
    title?: string | null
  }
  /**
   * Framing: `'map'` shows the whole map, `'data'` frames the data, `'auto'` frames point, arc and
   * route layers but shows the whole map for choropleths. Default: `'auto'`.
   */
  fit?: 'auto' | 'data' | 'map'
  /** Zoom and pan (scale 1 to 16 by default). */
  zoom?: WccZoomOptions & {
    /** A double click on a region zooms to that region (instead of zooming in one step). Default: `true`. */
    toRegion?: boolean
  }
  /** On-map zoom buttons. */
  controls?: {
    /** `false` hides the zoom buttons. Default: `true`. */
    show?: boolean
  }
  /**
   * `(value) => string` for values in tooltips and legend; not set uses `tooltip.y.formatter` or a
   * compact number.
   */
  formatter?: ((value: number) => string) | null
  /** Drill-down into regions. */
  drilldown?: WccPremiumDrilldown & {
    /** Levels per region id: `{ map, series, label, colorScale }`, or `true` to load the level via `load`. */
    regions?: {
      [id: string]:
        | true
        | {
            /** Map name or TopoJSON / GeoJSON of the level. */
            map?: string | object
            /** Series of the level. */
            series?: any[]
            /** Breadcrumb label of the level; not set uses the region name. */
            label?: string
            /** Colour scale of the level. */
            colorScale?: object
          }
    }
  }
}

type WccMarimekkoOptions = WccPremiumCommon & {
  /** Gap between columns in px (0 to 12). Default: `2`. */
  gap?: number
  /** Corner radius of the cells in px (0 to 8). Default: `3`. */
  radius?: number
  /**
   * `'soft'` uses calmer tones of the palette for the large cells, `'solid'` the palette as is (a
   * series `color` is always kept). Default: `'soft'`.
   */
  fill?: 'soft' | 'solid'
  /** Column widths: `'total'` follows the column totals; an array sets explicit column weights. Default: `'total'`. */
  widths?: 'total' | number[]
  /**
   * Column order: data order (`'none'`), or by column width `'asc'` / `'desc'`. Default: `'none'`.
   */
  sort?: 'none' | 'asc' | 'desc'
  /** Labels inside the cells. */
  dataLabels?: {
    /** Shows the cell labels. Default: `true`. */
    show?: boolean
    /** Adds the series name to the cell label when it fits. Default: `true`. */
    showName?: boolean
    /** Shows the cell's share of its column; `false` shows the cell value instead. Default: `true`. */
    showPercent?: boolean
    /** Narrowest cell in px that gets a label. Default: `34`. */
    minWidth?: number
    /** Lowest cell in px that gets a label. Default: `18`. */
    minHeight?: number
    /** A last column too narrow for its labels gets them in a gutter right of the plot. Default: `true`. */
    outside?: boolean
    /** `(share, { seriesIndex, category, value, w }) => string` for the value text of a cell. */
    formatter?: WccCallback
  }
  /** Column names under the plot. */
  columnLabels?: {
    /** Shows the column names. Default: `true`. */
    show?: boolean
    /** Adds the column total under the name. Default: `true`. */
    showTotal?: boolean
    /** Adds the column's share of the whole under the name. Default: `true`. */
    showShare?: boolean
    /** Wraps a name that does not fit onto two lines at a word break. Default: `true`. */
    wrap?: boolean
    /** Abbreviates a name that still does not fit (initials; the full name is the hover title). Default: `true`. */
    abbreviate?: boolean
    /** Own abbreviations per column name, e.g. `{ 'North America': 'NA' }`. */
    abbreviations?: { [name: string]: string }
  }
  /** Percentage axis on the left. */
  yAxis?: {
    /** Shows the 0 to 100 % axis. Default: `true`. */
    show?: boolean
  }
  /** Series legend. */
  legend?: {
    /** Shows the legend (with two or more series). Default: `true`. */
    show?: boolean
  }
}

type WccNetworkOptions = WccPremiumCommon & {
  /**
   * `'svg'` or `'canvas'`; `'auto'` uses canvas from `canvasThreshold` nodes. Default: `'auto'`.
   */
  renderer?: 'auto' | 'svg' | 'canvas'
  /** Node count above which `renderer: 'auto'` switches to canvas. Default: `1200`. */
  canvasThreshold?: number
  /** Node circles. */
  nodes?: {
    /** Smallest node radius in px. Default: `4`. */
    minRadius?: number
    /** Largest node radius in px (graphs over 1000 nodes cap it at 8). Default: `16`. */
    maxRadius?: number
    /** Node size from `'value'`, `'degree'` (number of links) or `'none'`; `'auto'` uses value when a node has one, else degree. Default: `'auto'`. */
    sizeBy?: 'auto' | 'value' | 'degree' | 'none'
    /** Width of the ring around each node in px. Default: `1.5`. */
    strokeWidth?: number
  }
  /** Edge lines. */
  edges?: {
    /** `[min, max]` line width in px, scaled by edge weight. Default: `[0.8, 3]`. */
    width?: [number, number]
    /** Edge opacity; not set uses 0.3 (0.34 in dark mode, 0.16 over 1000 nodes). */
    opacity?: number
    /** Bundles edges between groups through the group centres. Default: `false`. */
    bundle?: boolean
    /** How tightly bundled edges follow the group centres (0 to 1). Default: `0.85`. */
    bundleStrength?: number
    /** Bend of the edges, 0 straight. Default: `0`. */
    curvature?: number
  }
  /** Force layout. */
  layout?: {
    /**
     * `'force'`: the force simulation. `'facet'`: a deterministic projection on concentric regular
     * polygon shells (core in the centre, groups as filled facet sectors, causal paths across;
     * options under `facet`). Default: `'force'`.
     */
    type?: 'force' | 'facet'
    /** Target edge length; `'auto'` derives it from the node sizes. Default: `'auto'`. */
    linkDistance?: 'auto' | number
    /** Repulsion between nodes; `'auto'` derives it from the node sizes. Default: `'auto'`. */
    charge?: 'auto' | number
    /** Pull of nodes towards their group centre (with two or more groups). Default: `0.1`. */
    groupStrength?: number
    /** Simulation steps; `'auto'` runs until the layout has cooled down. Default: `'auto'`. */
    iterations?: 'auto' | number
    /** Steps computed before the first paint; `'auto'` uses 40 from 600 nodes and 90 from 2000. Default: `'auto'`. */
    warmup?: 'auto' | number
  }
  /** Node groups (`group` in the node data). */
  groups?: {
    /** `false` treats all nodes as one group: no group colours, clustering or legend. Default: `true`. */
    show?: boolean
    /** Draws a soft rounded hull behind each group (svg renderer, two or more groups). Default: `false`. */
    hulls?: boolean
  }
  /** Node labels. */
  labels?: {
    /** Shows labels, biggest nodes first, without overlaps. Default: `true`. */
    show?: boolean
    /** Most labels at the fit zoom (fewer in dense graphs, more when zoomed in). Default: `40`. */
    max?: number
    /** Zoom from which small nodes get labels too. Default: `1.6`. */
    minZoom?: number
    /** `(name, { node, w }) => string` for the label text. */
    formatter?: WccCallback
    /** Facet layout: treatment of labels over facets and shell lines (pill by default; full options with features/readability). Default: `'auto'`. */
    readability?: WccReadability
  }
  /** Dragging nodes. */
  drag?: {
    /** Lets the user drag nodes. Default: `true`. */
    enabled?: boolean
    /** Keeps a dragged node where it was dropped. Default: `false`. */
    pin?: boolean
  }
  /** Zoom and pan of the network view. */
  zoom?: WccZoomOptions
  /** Group legend. */
  legend?: {
    /** Shows the group legend (with two or more groups). Default: `true`. */
    show?: boolean
  }
  /** On-chart zoom buttons. */
  controls?: {
    /** `false` hides the zoom buttons. Default: `true`. */
    show?: boolean
  }
  /**
   * Facet layout (`layout.type: 'facet'`). Node data may carry `level` (0 = centre), `severity`
   * (`'critical' | 'warning' | 'info' | 'ok'`), `anomaly` (`true` or a short text), `badge`,
   * `labelPriority` (`true`: always labelled, like warnings) and `keys`. Label priority (any network
   * layout): highlighted, then critical, then warning / anomaly / labelPriority – these labels are never
   * dropped for the label budget or the zoom threshold. Edges `causal: true`; a series `paths: [{ name, nodes, severity, color }]`.
   */
  facet?: WccNetworkFacetOptions
}

type WccNetworkFacetOptions = {
  /** Level names, centre first (`['Core', 'Services', …]` or `{ name, description }`); `'auto'` names them Core, Level 1, Level 2 … Default: `'auto'`. */
  levels?: 'auto' | (string | { name: string; description?: string })[]
  /** Node ids of the core when no node has `level: 0`; not set uses the most connected node. */
  core?: string[]
  /** Polygon sides; `'auto'` = the group count for 5–12 groups, twice it for 2–4, 6 for one group. Default: `'auto'`. */
  sides?: 'auto' | number
  /** Turns the shells, degrees; 0 puts a vertex at 12 o'clock. Default: `0`. */
  rotation?: number
  /** Sector size per group: `'equal'`, `'weighted'` (by its most crowded shell) or `'auto'`. Default: `'auto'`. */
  sectors?: 'auto' | 'equal' | 'weighted'
  /** `'crossings'` reorders nodes inside a facet (barycentric sweeps) to reduce crossings; `'data'` keeps the data order. Default: `'crossings'`. */
  order?: 'crossings' | 'data'
  /** Level-1 radius as a fraction of the outer radius. Default: `0.24`. */
  coreRadius?: number
  /** Pull of plain edges towards the centre, 0 (straight) to 1; edges between two facets route through both facets' anchors. Default: `0.65`. */
  bundle?: number
  /** Plain edge rendering in dense estates. */
  edges?: {
    /** Fades edges of hubs: opacity × clamp(2 / √(max endpoint degree), 0.35, 1). Default: `true`. */
    degreeAlpha?: boolean
    /** Level of detail for cross-facet edges, `'auto'` from 300 nodes: at overview zoom they fade (ribbons stand for them); zoomed in, only those with an end in view are drawn (hover / highlight still show all of a node's links). Default: `'auto'`. */
    lod?: boolean | 'auto'
    /** Zoom factor from which the individual cross-facet edges come back. Default: `1.8`. */
    lodZoom?: number
    /** With lod at overview zoom: one ribbon per facet pair, width by its link count (title: `A – B: n links`). Default: `true`. */
    ribbons?: boolean
  }
  /** Shell polygons. */
  shells?: {
    /** Draws the shell outlines. Default: `true`. */
    show?: boolean
    /** Writes the level name on each shell. Default: `true`. */
    labels?: boolean
    /** Outline opacity; `'auto'` follows the theme. Default: `'auto'`. */
    opacity?: 'auto' | number
  }
  /** Filled facet sectors, one per group. */
  facets?: {
    /** Draws the facets. Default: `true`. */
    show?: boolean
    /** Fill opacity; `'auto'` = 0.07 light, 0.11 dark. Default: `'auto'`. */
    opacity?: 'auto' | number
    /** Writes the group names outside the outer shell. Default: `true`. */
    labels?: boolean
  }
  /** Causal edges and `paths`. */
  paths?: {
    /** Draws causal edges and paths. Default: `true`. */
    show?: boolean
    /** Line width in px. Default: `2`. */
    width?: number
    /** Dash pattern `[dash, gap]` in px. Default: `[6, 5]`. */
    dash?: [number, number]
    /** Sideways bow of a hop (fraction of its length). Default: `0.22`. */
    curvature?: number
    /** Arrow heads at the effect end. Default: `true`. */
    arrows?: boolean
    /** Dashes flow from cause to effect (off under reduced motion). Default: `true`. */
    flow?: boolean
  }
  /** Severity / anomaly markers and badges. */
  markers?: {
    /** Draws markers and badges. Default: `true`. */
    show?: boolean
    /** Colours per severity; not set uses the theme's negative / warning / accent / positive. */
    colors?: { critical?: string; warning?: string; info?: string; ok?: string }
  }
  /** Level legend in the legend row above the plot (replaces the group legend; needs `legend.show` of the network too). */
  legend?: {
    /** Shows the level legend. Default: `true`. */
    show?: boolean
    /** Leads the legend row (e.g. your word for "Levels"). */
    title?: string
  }
}

/** a lane of quintTimeline / quintConvergence (docs/guide/quint.md) */
type WccQuintLane = {
  /** Lane id; series name it in `lane`. */
  id: string
  /** `'events'` columns (counts per slot, colour = error rate), `'heatmap'` one strip per series, `'budget'` error budget left per series (%), `'lines'`, `'stacked'` areas. */
  kind: 'events' | 'heatmap' | 'budget' | 'lines' | 'stacked'
  /** Lane title. Default: the kind's name. */
  title?: string
  /** Unit of the values, used on the lane, in tooltips, the CSV export and describe(): `'requests / 10 min'`, `'€ / h'`, `'ms'`, `'%'`. */
  unit?: string
  /** How the values add up over time in describe() and the a11y items. Default: events `'sum'`, budget `'last'`, others `'mean'`. */
  aggregate?: 'sum' | 'mean' | 'max' | 'min' | 'last'
  /** Lane colour (events columns without errorRate, heatmap ramp). */
  color?: string
  /** Upper end of the value axis; not set uses the data. */
  max?: number
  /** Lane height in px; not set shares the free height (events 1, lines 1.25, stacked 1). */
  height?: number
}

/** quintTimeline / quintConvergence: lanes on one shared time axis (premium type module west-coast-charts/layers/quint) */
type WccQuintOptions = WccPremiumCommon & {
  /** The slots: slot i covers `start + i × step` to `start + (i + 1) × step`. */
  time?: {
    /** First slot: ISO string or ms. */
    start?: string | number
    /** Slot length in ms. */
    step?: number
  }
  /** The lanes, top to bottom. */
  lanes?: WccQuintLane[]
  /** Deploys (◆) and pipeline runs (●) on the events lane. The deploy within 2 h before the first incident that shares one of its keys is marked as the likely cause. */
  markers?: { time: string | number, kind?: 'deploy' | 'pipeline', label?: string, keys?: string[] | string, emphasis?: boolean }[]
  /** Incident bands across all lanes. */
  incidents?: { from: string | number, to?: string | number, label?: string, keys?: string[] | string }[]
  /** Time labels in UTC (with "UTC" in the export header) or local time. Default: `true`. */
  utc?: boolean
  /** Error-rate classes of the events columns in %: below `warn`, `warn`–`critical`, above. Default: `{ warn: 1, critical: 5 }`. */
  errorRate?: { warn?: number, critical?: number }
  /**
   * Focus lens: magnifies the time axis between `from` and `to` (default: the first incident ± max(3 slots, 30 min))
   * by `factor` relative to the rest of the axis (1.5–12, default 4). Values are never changed. Shown as a header chip
   * (a button: click or L toggles it), on the axis and in describe(). Default: on for quintConvergence, off for quintTimeline.
   */
  lens?: { enabled?: boolean, factor?: number, from?: string | number, to?: string | number, pad?: number }
  /** Incident callouts: one value per lane at the incident, wired to its start. Default: on for quintConvergence. */
  focus?: { enabled?: boolean }
  /** Shared crosshair over all lanes. Default: `true`. */
  crosshair?: boolean
  /** Legend below the lanes. Default: `{ show: true }`. */
  legend?: { show?: boolean }
}

/** one parameter of a vitalsClock (docs/guide/medical.md) */
type WccVitalsParam = {
  /** Parameter id. */
  id: string
  /** Ring title, e.g. 'Herzfrequenz'. */
  title?: string
  /** Short name in the status strip and describe(), e.g. 'HF'. */
  short?: string
  /** Unit, e.g. '/min', '%', 'mmHg'. */
  unit?: string
  /** 'columns' = the column ring (median per slot), 'cells' = band cells, 'trace' = line at true times, 'range' = high / low pairs. */
  kind: 'columns' | 'cells' | 'trace' | 'range'
  /** Per-slot aggregation for columns and cells. Default: `'median'`. */
  aggregate?: 'median' | 'min' | 'max' | 'last' | 'mean'
  /** The caller's threshold bands (no built-in clinical thresholds). */
  bands?: ApexCharts.RadialVitalsBand[]
  /** Measurements: [time, value] or, for 'range', [time, high, low]; time = ms or ISO. */
  data: Array<[number | string, number] | [number | string, number, number]>
  /** After this long the last value is shown as stale: minutes, or a duration such as '4h'. */
  staleAfter?: number | string
  /** Decimals at most in labels and tooltips. Default: 1. */
  decimals?: number
  /** Ring colour; not set uses the palette. */
  color?: string
  /** 'range': bands for the low value (e.g. diastolic); not set uses `bands`. */
  bandsLow?: ApexCharts.RadialVitalsBand[]
  /** 'trace' / 'range': a gap longer than this many minutes breaks the line. Default: 3 slots. */
  gapAfter?: number
  /** Lower end of the value scale. */
  min?: number
  /** Upper end of the value scale. */
  max?: number
}

/** chart.type 'vitalsClock': a 24 h / 12 h clock of vital signs over radialColumn. A chart library, not a medical device: no score, no alarm logic. */
type WccVitalsClockOptions = WccPremiumCommon & {
  /** The window: start (ms or ISO), span ('24h', '12h') and slot length ('60min'). */
  time?: { start?: number | string, span?: string, step?: string }
  /** The current time (now hand); later slots are "no data yet". */
  now?: number | string
  /** IANA zone of the labels. Default: the runtime's zone. */
  timeZone?: string
  /** The parameters, outermost ring first. */
  params?: WccVitalsParam[]
  /** Event markers on the dial, e.g. medication. */
  events?: Array<{ at: number | string, kind?: string, label?: string }>
  /** Caller alarm windows (wedges); never computed by the chart. */
  alarms?: Array<{ from: number | string, to?: number | string, label?: string }>
  /** Any radialColumn layer from the caller for the centre, e.g. a 'matrix' of the caller's own scores. */
  core?: ApexCharts.RadialColumnLayer
  /** Marks the chart as demo data (status strip and describe()). */
  demo?: boolean | string
  /** radialColumn options passed through. */
  radialColumn?: ApexCharts.RadialColumnOptions
}

/** chart.type 'schedule': a practice day or week (rooms / devices / people as lanes, or a vertical board). Controlled: drag only proposes. */
type WccScheduleOptions = WccPremiumCommon & {
  /** The day shown (YYYY-MM-DD in timeZone; a week starts on its Monday). */
  date?: string
  /** Default: `'day'`. */
  range?: 'day' | 'week'
  /** IANA zone of the wall-clock times. */
  timeZone?: string
  /** The current time (now line). */
  now?: number | string
  resources?: Array<{ id: string, name?: string, kind?: 'room' | 'device' | 'staff' }>
  /** Doctors and staff: colour + dash identify a person's route. */
  people?: Array<{ id: string, name?: string, role?: string, color?: string, dash?: string }>
  /** Appointments; start / end as ms, ISO or 'HH:MM' on `date`. `patient` is a pseudonymous id, hidden unless redact: false. */
  items?: Array<{ id: string, resource: string, start: number | string, end: number | string, people?: string[], patient?: string, label?: string, status?: 'confirmed' | 'tentative' | 'arrived' | 'done' | 'cancelled' | 'no-show' }>
  /** Opening hours: closed time and breaks are hatched; appointments outside are a warning. */
  hours?: { open?: string, close?: string, days?: number[], breaks?: Array<[string, string]> }
  /** A changeover between two rooms below minTransfer is a warning. Default: `'5min'`. */
  rules?: { minTransfer?: string | number }
  /** 'lanes' (horizontal), 'board' (vertical), 'auto' = board below 560 px. Default: `'auto'`. */
  view?: 'auto' | 'lanes' | 'board'
  /** Lanes per resource or per person. Default: `'resources'`. */
  lanes?: 'resources' | 'people'
  /** Draw a route per person. Default: `true`. */
  routes?: boolean
  /** Snap of drag / keyboard moves in minutes. Default: `15`. */
  snap?: number
  /** Drag / resize / keyboard moves emit 'scheduleChange' proposals (data is never changed). Default: `true`. */
  editable?: boolean
  /** Keep patient ids out of describe(), tooltips and the table. Default: `true`. */
  redact?: boolean
  /** Only appointments of these people. */
  filter?: { people?: string | string[] }
  legend?: { show?: boolean }
  /** Conflict summary in the header and the number of listed conflicts. Default: `{ show: true, list: 3 }`. */
  conflicts?: { show?: boolean, list?: number }
}

type WccPremiumPlotOptions = {
  sankey?: WccSankeyOptions
  chord?: WccChordOptions
  gantt?: WccGanttOptions
  tree?: WccTreeOptions
  stock?: WccStockOptions
  map?: WccMapOptions
  marimekko?: WccMarimekkoOptions
  network?: WccNetworkOptions
  radialColumn?: ApexCharts.RadialColumnOptions & WccPremiumCommon
  /** quintTimeline and quintConvergence (premium type module west-coast-charts/layers/quint). */
  quint?: WccQuintOptions
  /** chart.type 'vitalsClock' (premium type module west-coast-charts/layers/vitals; docs/guide/medical.md). */
  vitalsClock?: WccVitalsClockOptions
  /** chart.type 'schedule' (premium type module west-coast-charts/layers/schedule; docs/guide/medical.md). */
  schedule?: WccScheduleOptions
}

// ------------------------------------------------------------------------------------------------
// feature options (west-coast-charts/features/* or west-coast-charts/full)
// ------------------------------------------------------------------------------------------------

/** drilldown feature: top-level `drilldown` */
type WccDrilldownOptions = {
  /**
   * Turns drilldown on: points with a level id open that level on click or Enter. Ignored by
   * sunburst and icicle, which read the whole tree themselves. Default: `false`.
   */
  enabled?: boolean
  /** Inline drilldown levels; each has an `id` that points reference and the data to show. */
  series?: {
    /** Id of the level, referenced by the `drilldown` field of a point. */
    id: string
    /** Name of the level, shown in the breadcrumb; not set uses the id. */
    name?: string
    /** Chart type of the level; not set keeps the parent's type. */
    type?: string
    /** Data of the level, in the format of its chart type. */
    data: any[]; [key: string]: any
  }[]
  /** Transition between levels. */
  animation?: {
    /** Animates level changes; `false` switches instantly. Reduced-motion settings also switch instantly or fade. Default: `true`. */
    enabled?: boolean
    /** With transition `'auto'`, zooms the new level out of the clicked point. Default: `false`. */
    zoomFromPoint?: boolean
    /** Duration of the level transition in milliseconds. Default: `260`. */
    speed?: number
  }
  /** called before a level opens; may return the level (or a Promise of it) to load on demand */
  onDrillDown?: (point: any, info: any) => any
  /**
   * Keeps levels returned by `onDrillDown`, so revisiting a level does not call it again. Default:
   * `true`.
   */
  cache?: boolean
  /** Breadcrumb trail of the open levels; `false` hides it. */
  breadcrumb?: false | {
    /** Text of the first breadcrumb; not set uses the name of a single root series, else the locale string `drilldown.root`. */
    rootLabel?: string; [key: string]: any
  }
  /** West Coast Charts drilldown extensions. */
  wcc?: {
    /** Level transition: `'auto'` (morph when type and point count match, otherwise dissolve), `'morph'`, `'dissolve'`, `'zoom'` or `'none'`. Default: `'auto'`. */
    transition?: string
    /** Shows the drill hint on hover over drillable points and adds it to their accessible labels. Default: `true`. */
    hint?: boolean | string
    /** Restores the zoom window of a level when going back up to it. Default: `false`. */
    keepZoom?: boolean
    /** Calls `onDrillDown` shortly after a drillable point is hovered or focused, so the level is ready on click. Default: `false`. */
    prefetch?: boolean
    /** Writes the open path to the URL hash (`#wcc=...`) and restores it on load; an app-owned hash is left alone. Default: `false`. */
    deepLink?: boolean | string
    /** Follows drilldown navigation of other charts in the same `chart.group` that have the same levels. Default: `false`. */
    syncGroup?: boolean | string; [key: string]: any
  }
  [key: string]: any
}

/** link feature: chart.link (highlight or crossfilter mode, docs/features/link.md) */
type WccLinkOptions = {
  /** Id of the link group: charts with the same id share one set of records and filters; not set uses `chart.group`. */
  id?: string | number
  /** Not read by the link feature; use `id` (or `chart.group`). Kept for type compatibility. */
  group?: string
  /**
   * Key of a record: a string (category), a number (range, binned), `[x, y]` (matrix, for
   * heatmaps) or `[stage1, stage2, ...]` (path, for sankey: the record's flow through the stages;
   * `null` leaves it out).
   */
  dimension?: (record: any) => string | number | [any, any] | any[] | null
  /**
   * Kind of dimension; not set is `'range'` when `bins` is set, `'matrix'` on heatmaps, `'path'`
   * on sankey, else `'category'`.
   */
  type?: 'category' | 'range' | 'matrix' | 'path'
  /**
   * Aggregate of a bucket: `'count'`, `{ sum | avg | min | max: field }` (a property path or a
   * function of the record) or a function of the bucket's records. Default: `'count'`.
   */
  reduce?:
    | 'count'
    | {
        /** Field summed over the bucket. */
        sum: string | WccCallback
      }
    | {
        /** Field averaged over the bucket. */
        avg: string | WccCallback
      }
    | {
        /** Field whose minimum is taken over the bucket. */
        min: string | WccCallback
      }
    | {
        /** Field whose maximum is taken over the bucket. */
        max: string | WccCallback
      }
    | ((records: any[]) => number)
  /** Binning of a range dimension; makes the chart brushable. */
  bins?: {
    /** Width of a bin in dimension units. */
    width?: number
    /** Number of bins. */
    count?: number
  }
  /**
   * Order of the buckets: `'first-seen'`, `'asc'` / `'desc'` (by key, natural sort),
   * `'value-asc'` / `'value-desc'` (by the reduced value over all records, stable while
   * other charts filter) or a comparator.
   */
  order?: 'first-seen' | 'asc' | 'desc' | 'value-asc' | 'value-desc' | ((a: any, b: any) => number)
  /** Name of the series injected from the aggregate. Default: `'Count'`. */
  seriesName?: string
  /** Opacity of marks outside the selection. Default: `0.2`. */
  dimOpacity?: number
  /** West Coast Charts link extensions. */
  wcc?: {
    /**
     * Name of this chart's filter in the summary and announcements; not set uses `title.text` or
     * the chart id.
     */
    label?: string
    /**
     * Click behaviour: `'toggle'` adds or removes a bucket, `'single'` keeps one bucket,
     * `'additive-shift'` adds only with Shift. Default: `'toggle'`.
     */
    selectMode?: 'toggle' | 'single' | 'additive-shift'
    /**
     * `true` draws a summary bar (record count, filter chips, Clear all) above the plot; a selector
     * or element places it elsewhere. Default: `false`.
     */
    summary?: boolean | string | Element
    /**
     * `'hide'` drops buckets left empty by other filters (selected ones stay). Default: `'show'`.
     */
    emptyBuckets?: 'show' | 'hide'
    /**
     * `'parts'` keeps the unfiltered totals as data and draws the filtered aggregate as the
     * highlight part. Default: `'filtered'`.
     */
    display?: 'filtered' | 'parts'
    /**
     * Live brush updates: `'frame'` once per animation frame, `'end'` only on release, or a minimum
     * interval in milliseconds. Default: `'frame'`.
     */
    throttle?: 'frame' | 'end' | number
    /**
     * Linked donuts: `false` leaves the centre label alone instead of showing the selection.
     * Default: `true`.
     */
    centre?: boolean
    /**
     * Donut centre label while the chart has no selection of its own; not set uses the locale
     * string `link.total`.
     */
    centreLabel?: string
    /**
     * Linked heatmaps: `false` keeps the default heatmap shading instead of the link colour scale.
     * Default: `true`.
     */
    heatScale?: boolean
    [key: string]: any
  }
  [key: string]: any
}

/** highlight-filter feature: top-level `highlightFilter` */
type WccHighlightFilterOptions = {
  /** Draws the filtered part of each mark over its whole when parts are given. Default: `true`. */
  enabled?: boolean
  /** pie/donut/polarArea/radialBar: the filtered part of every slice */
  data?: (number | null)[]
  /** Opacity of the whole behind its part. Default: `0.2`. */
  fadeOpacity?: number
  /** Outline of the faded whole. */
  outline?: {
    /** Outline width in pixels. Default: `1`. */
    width?: number
    /** Outline opacity. Default: `1`. */
    opacity?: number
  }
  /**
   * Where parts animate from: `'whole'` (the whole's extent) or `'baseline'`. Default: `'whole'`.
   */
  enter?: 'whole' | string
  /**
   * A part larger than its whole: `'extend'` grows the value axis and hatches the overflow,
   * `'clamp'` cuts it at the whole. 100% stacks and treemaps always clamp. Default: `'extend'`.
   */
  axis?: 'extend' | string
  /** Which value the data labels show. */
  dataLabels?: {
    /** `'part'` or `'whole'` value in the point labels. Default: `'part'`. */
    value?: 'part' | 'whole' | string
    /** `'part'` or `'whole'` value in stack total labels. Default: `'part'`. */
    total?: 'part' | 'whole' | string
  }
  /** Part line in the tooltip. */
  tooltip?: {
    /** Adds the part to the tooltip. Default: `true`. */
    show?: boolean
    /** Adds the part's percentage of the whole. Default: `false`. */
    share?: boolean
    /** Returns the tooltip text of the part from `(part, whole, opts)`. */
    formatter?: (part: number, whole: number, opts: any) => string
  }
  /** Line and area charts. */
  line?: {
    /** Dash length of the whole line behind the part line. Default: `4`. */
    dashArray?: number
  }
  /** Pie, donut and polar-area charts. */
  pie?: {
    /** How a slice shows its part: `'radius'` scales the radius with the share, `'area'` scales the area. Default: `'radius'`. */
    encoding?: 'radius' | string
  }
  /** West Coast Charts highlight-filter extensions. */
  wcc?: {
    /** CSV export: `'whole'` exports the wholes, `'both'` adds a "<series> (part)" column per series. Default: `'whole'`. */
    csv?: 'whole' | 'both'
    /** `false` draws combo charts without parts. Default: `true`. */
    combo?: boolean
    /**
     * Bars whose part exceeds the whole (`axis: 'extend'`): `'auto'` or `true` hatch the overflow,
     * `false` keeps it solid; the dashed edge marks the whole either way. Default: `'auto'`.
     */
    pattern?: 'auto' | boolean
    /** Delay of each series' part animation, multiplied by the series index, in milliseconds. Default: `0`. */
    stagger?: number
    /** Adds the part's percentage to the data labels. Default: `false`. */
    labelShare?: boolean
    /** With `appendData`, extends parts set through the API with the data (new points have no part) instead of dropping them. Default: `true`. */
    streamingParts?: boolean
    /** Labels of the wholes: `'auto'` on non-stacked bars with data labels on, `true` forces them on non-stacked bars, `false` turns them off. Default: `'auto'`. */
    wholeLabels?: 'auto' | boolean
    /** Encoding key above the plot that explains whole and part. */
    key?: {
      /** `'auto'` shows the key when all series are lines or areas. Default: `'auto'`. */
      show?: 'auto' | boolean
    /** Key text of the whole; not set uses the locale string `highlight.keyWhole`. */
    whole?: string
    /** Key text of the part; not set uses the locale string `highlight.keyPart`. */
    part?: string
  }
  }
  [key: string]: any
}

/** trellis feature: top-level `trellis` (small multiples, docs/features/trellis.md) */
type WccTrellisOptions = {
  /**
   * Splits the series into one panel per value of this field (or function result). Ignored when
   * `row` or `column` is set.
   */
  by?: string | ((series: any) => any)
  /** Field (or function) whose values form the rows of a 2-D grid. */
  row?: string | ((series: any) => any)
  /**
   * Per-panel option overrides: called with the panel key and `{ index, seriesNames }`, returns
   * options merged over the host options (grid-owned paths and a different `chart.type` are ignored).
   */
  panel?: (key: any, ctx: { index: number, seriesNames: string[] }) => { [key: string]: any } | null | undefined
  /** Field (or function) whose values form the columns of a 2-D grid. */
  column?: string | ((series: any) => any)
  /**
   * Empty cells of a 2-D grid: `'placeholder'` draws an empty panel, `'skip'` and `'hide'` leave
   * them out. Default: `'placeholder'`.
   */
  emptyPanels?: 'placeholder' | 'skip' | 'hide'
  /** Tidy rows to facet instead of `series`; `x`, `y` and `seriesBy` name their fields. */
  data?: any[]
  /** Field of `data` with the x value. Default: `'x'`. */
  x?: string
  /** Field of `data` with the y value. Default: `'y'`. */
  y?: string
  /** Field of `data` that names the series within a panel. */
  seriesBy?: string
  /**
   * Number of panel columns; `'auto'` fits as many as `minPanelWidth` allows. Default: `'auto'`.
   */
  columns?: 'auto' | number
  /** Smallest panel width in pixels for `columns: 'auto'`. Default: `220`. */
  minPanelWidth?: number
  /** Space between panels in pixels. Default: `12`. */
  gap?: number
  /** Panel width divided by height, used when `panelHeight` is not set. Default: `1.6`. */
  aspectRatio?: number
  /** Fixed panel height in pixels; not set derives it from `aspectRatio`. */
  panelHeight?: number
  /** Smallest panel height in pixels. Default: `80`. */
  minPanelHeight?: number
  /**
   * Panel order: `'first-seen'`, `'asc'`, `'desc'`, an array of keys or a comparator. Default:
   * `'first-seen'`.
   */
  order?: 'first-seen' | 'asc' | 'desc' | any[] | ((a: any, b: any) => number)
  /** Draws only the first N panels and warns; not set draws all. */
  limit?: number
  /**
   * Renders only panels near the viewport; `'auto'` turns it on above 64 panels. Default: `'auto'`.
   */
  virtualize?: 'auto' | boolean
  /** Which scales the panels share. */
  scales?: {
    /** `'shared'` or `'independent'` x axis per panel. Default: `'shared'`. */
    x?: 'shared' | 'independent' | string
    /** `'shared'`, `'independent'`, `'independent-row'` or `'independent-column'` y axis. Default: `'shared'`. */
    y?: 'shared' | 'independent' | 'independent-row' | 'independent-column' | string
    /** Colour scale; always shared (other values warn and fall back). Default: `'shared'`. */
    color?: 'shared' | string
    /** Size scale; always shared (other values warn and fall back). Default: `'shared'`. */
    size?: 'shared' | string
  }
  /** Panel headers. */
  header?: {
    /** Draws a header with the facet value above each panel. Default: `true`. */
    show?: boolean
    /** Returns the header text from the facet key and `{ dimension, index, count }`. */
    formatter?: (key: any, info: { dimension: string; index: number; count: number }) => string
    /** Text style of the headers; not set uses the theme. */
    style?: {
      /** Font size of the headers. */
      fontSize?: string | number
    /** Font weight of the headers. */
    fontWeight?: string | number
    /** Text colour of the headers. */
    color?: WccColor
  }
  }
  /** Axis labels across panels. */
  axes?: {
    /** `'edges'` labels y on the first column and x on the bottom panel of each column; `'all'` labels every panel; `'none'` hides them. Default: `'edges'`. */
    labels?: 'edges' | 'all' | 'none'
  }
  /** `'shared'` draws one legend for all panels; `'none'` hides it. Default: `'shared'`. */
  legend?: 'shared' | string | boolean
  /** `'shared'` draws one toolbar for all panels; `'none'` hides it. Default: `'shared'`. */
  toolbar?: 'shared' | string | boolean
  /**
   * West Coast Charts trellis extensions (sort, headerValue and virtualization need
   * trellis-extras).
   */
  wcc?: {
    /** Metric shown in each header: `'last'`, `'total'`, `'max'`, `'min'` or a function; not set shows none. */
    headerValue?: 'last' | 'total' | 'max' | 'min' | WccCallback
    /** Sorts 1-D panels by a metric: `'desc'`, `'asc'` or `{ by, dir }`; the metric is `by`, else `headerValue`, else `'total'`. */
    sort?: 'desc' | 'asc' | {
      /** Metric to sort by (as in `headerValue`). */
      by: any
    /** Sort direction. Default: `'desc'`. */
      dir?: 'asc' | 'desc'
    }
    /** Draws the panels as sparklines, at most 96 px high. Default: `false`. */
    sparkline?: boolean
    /** Allows different cartesian chart types per panel. Default: `false`. */
    typeMix?: boolean
    /** Hovering or focusing a legend item highlights that series in every panel. Default: `true`. */
    highlight?: boolean; [key: string]: any
  }
  [key: string]: any
}

/** narrative feature: wcc.narrative (frames, transport bar, captions; docs/features/narrative.md) */
type WccNarrativeOptions = {
  /** Turns on the narrative player. Default: `false`. */
  enabled?: boolean
  /**
   * `'frames'` replays the supplied frames; `'record'` records the chart's own data updates.
   * Default: `'frames'`.
   */
  source?: 'frames' | 'record'
  /** Frames to replay with `source: 'frames'`. Default: `[]`. */
  frames?: {
    /** Time or key of the frame, usable with `seek({ t })`. */
    t?: any
    /** Series of the frame, in the chart's series format. */
    series: any[]
    /** Frame label, shown as the watermark. */
    label?: string
    /** Caption shown and announced when the frame is reached. */
    caption?: string
    /** Options applied when the frame is reached (`updateOptions` patch). */
    options?: { [key: string]: any }
    /** Annotations shown while the frame is current. */
    annotations?: { [key: string]: any }
  }[]
  /** Ring-buffer size of `source: 'record'`; older frames are dropped. Default: `600`. */
  maxFrames?: number
  /** Draws in-between values while scrubbing between frames. Default: `true`. */
  interpolate?: boolean
  /**
   * Point identity across frames (`'x'` or a function); also used as the morph key of updates
   * unless the app sets one. Default: `null` (by index).
   */
  keyBy?: 'x' | ((point: any) => any) | null
  /** Time per frame during playback, in milliseconds. Default: `800`. */
  frameDuration?: number
  /** Restarts from the first frame after the last. Default: `false`. */
  loop?: boolean
  /** Starts playback on mount, unless reduced motion is preferred. Default: `false`. */
  autoplay?: boolean
  /** Draws the transport bar (play, scrubber, live). Default: `true`. */
  transport?: boolean
  /**
   * Large background text of the current frame: `'auto'` (frame label for frames, off for record),
   * `'label'`, `false` or a function. Default: `'auto'`.
   */
  watermark?: 'auto' | 'label' | false | ((frame: any, index: number) => string)
  /** Shows frame captions. Default: `true`. */
  captions?: boolean
  /**
   * New recorded data while viewing an older frame: `'buffer'` stays on that frame behind a Live
   * button, `'follow'` jumps to the newest. Default: `'buffer'`.
   */
  liveBehaviour?: 'buffer' | 'follow'
}

/** history feature: chart.history (undo / redo of view changes) */
type WccHistoryOptions = {
  /**
   * Records view changes (zoom, pan, legend toggles, selection, drilldown, filters) for undo and
   * redo. Default: `false`.
   */
  enabled?: boolean
  /** Most entries kept; older ones are dropped. Default: `100`. */
  maxDepth?: number
  /** changes closer than this many ms become one entry */
  coalesceMs?: number
  /**
   * Ctrl/Cmd+Z undoes, Ctrl/Cmd+Shift+Z or Ctrl/Cmd+Y redoes while the chart has focus; text fields
   * are left alone. Default: `true`.
   */
  keyboard?: boolean
  /** West Coast Charts history extensions. */
  wcc?: {
    /** Adds undo and redo buttons to the toolbar. Default: `false`. */
    toolbar?: boolean
    /** Also records data updates; alias `chart.wcc.history.recordData`. Default: `false`. */
    recordData?: boolean; [key: string]: any
  }
}

/** orient feature ("Ansicht ausrichten"): turning radial charts */
type WccOrientOptions = {
  /**
   * Toolbar buttons (rotate left / right, reset), the `[` `]` and Home keys and picking a segment
   * (double-click, Shift+Enter on a focused item). The `chart.orient` API works without it.
   * Default: `false`; `chart.orient: true` turns it on.
   */
  enabled?: boolean
  /**
   * Turn in degrees, clockwise from the default orientation (negative = counter-clockwise).
   * Set on create or in `updateOptions`; the turn then stays across updates. Default: `0`.
   */
  angle?: number
  /** Rotate-left, rotate-right and reset buttons (the toolbar, or a small bar of their own). Default: `true`. */
  toolbar?: boolean
  /** `[` / `]` turn by one step, Home resets a turned chart, Shift+Enter turns the focused item to `target`. Default: `true`. */
  keyboard?: boolean
  /** Double-click a segment (or Shift+Enter on a focused one) to turn it to `target`. Default: `true`. */
  pick?: boolean
  /**
   * One step of the buttons, keys and `rotateBy({ steps })` in degrees; `'auto'` = a time window
   * of whole segments close to 45° (3 h on a 24 h clock, a day on a week). Default: `'auto'`.
   */
  step?: 'auto' | number
  /** `rotateBy(degrees)` moves by whole segments. Default: `true`. */
  snap?: boolean
  /** Where a picked segment goes: `'top'`, `'right'`, `'bottom'`, `'left'` or degrees clockwise from 12 o'clock. Default: `'top'`. */
  target?: 'top' | 'right' | 'bottom' | 'left' | number
}

/** chart.* options of the features */
type WccChartFeatureOptions = {
  /** renderer-canvas feature */
  renderer?: 'svg' | 'canvas' | 'auto'
  /** total points from which renderer 'auto' paints on canvas */
  rendererThreshold?: number
  /** West Coast Charts chart-level extensions. */
  wcc?: {
    /** Canvas renderer tuning. */
    canvas?: {
      /** Backing-store scale; `'device'` uses the device pixel ratio capped at 2, a number forces it. Default: `'device'`. */
      pixelRatio?: 'device' | number
    /** Most scatter cells handed to the SVG layer as hover and tooltip proxy. Default: `20000`. */
    cellCap?: number
    /** Time after the last pan or zoom input before the full update (tooltips, `zoomed` events), in milliseconds. Default: `140`. */
    settleMs?: number
    /** During a gesture, the axes and grid update every Nth frame; `0` picks it from the measured frame cost (at most 4). Default: `0`. */
    axisStride?: number
  }; [key: string]: any
  }
  /** Linked charts (highlight or crossfilter mode). */
  link?: WccLinkOptions
  /** Undo and redo of view changes. */
  history?: WccHistoryOptions
  /**
   * Orient feature ("Ansicht ausrichten"): turn radialColumn (with all its layers), chord, pie,
   * donut, polarArea and radialBar charts; `true` = `{ enabled: true }`.
   */
  orient?: boolean | WccOrientOptions
  /**
   * Deterministic rendering (agents, CLI, snapshot tests): no animation (the final frame only), no
   * wall clock (see `now`), a seeded PRNG and stable ids, so the same options give byte-identical
   * SVG in the same engine. On by itself in headless mode (`WestCoastCharts.headless = true` or
   * `globalThis.WCC_HEADLESS = true`) unless set to `false`. Several deterministic charts on one
   * page need distinct `chart.id`s (or seeds). Default: `false`.
   */
  deterministic?: boolean
  /** Seed of the PRNG used for ids and random layouts. Default: a hash of `chart.id`. */
  seed?: number
  /**
   * The current time as the chart sees it ("today" in Gantt): ms since the epoch, a Date, a date
   * string or a function returning one of those. In deterministic mode without it there is no
   * clock (no today marker). Default: `Date.now()`.
   */
  now?: number | Date | string | (() => number | Date)
  /** the type asked for ('gauge', 'funnel', ...); set by the library, chart.type holds the base renderer */
  requestedType?: string
  /**
   * Option check when the validator module is loaded ('west-coast-charts/agent/validate'):
   * `'warn'` logs unknown options, wrong types and invalid values with a suggestion
   * (console.warn, once per chart), `'error'` also makes `render()` reject, `'off'` skips the
   * check. Without the module nothing is checked. Default: `'warn'`.
   */
  validate?: 'warn' | 'error' | 'off'
}

// ------------------------------------------------------------------------------------------------
// instance members and statics added by the features and premium
// ------------------------------------------------------------------------------------------------

/** chart.describe({ format: 'table' }): the drawn data table */
type WccDescribeTable = { caption: string; columns: string[]; rows: string[][]; total: number; truncated: boolean }
type WccDescribeAggregateMode = 'sum' | 'mean' | 'max' | 'min' | 'none'
/** chart.describe(): schema 'wcc-describe/1' (dist/schema/wcc-describe.schema.json) */
type WccDescribeResult = {
  schema: 'wcc-describe/1'
  type: string
  premium: boolean
  title: string | null
  subtitle?: string | null
  /** the accessible description, without the keyboard hint */
  text: string
  deterministic: boolean
  noData: boolean
  series: Array<{
    index: number
    name: string
    hidden: boolean
    count: number
    unit: string | null
    min: { value: number; category: string | null } | null
    max: { value: number; category: string | null } | null
    aggregate: { mode: WccDescribeAggregateMode; value: number | null; label: string } | null
  }>
  marks: Array<{ series: string; seriesIndex: number; category: string; value: number | null; formatted: string }>
  marksTotal: number
  marksTruncated: boolean
  aggregate: { mode: WccDescribeAggregateMode; value: number | null; label: string; formatted: string | null } | null
  categories?: Array<{ category: string; value: number | null }>
  scales: {
    x: { type: 'category' | 'datetime' | 'numeric'; min: number | null; max: number | null; minISO?: string | null; maxISO?: string | null; count?: number; first?: string | null; last?: string | null; title: string | null } | null
    y: Array<{ index: number; min: number | null; max: number | null; title: string | null; logarithmic: boolean; series: string[] }>
  } | null
  extrema: { min: { value: number; series: string; category: string | null }; max: { value: number; series: string; category: string | null } } | null
  units: { category: string | null; value: string | null }
  filters: Array<{ kind: 'highlight' | 'crossfilter' | 'radialColumn' | 'zoom'; active: true; [key: string]: any }>
  hidden: string[]
  table: WccDescribeTable
}

/** chart methods of the features; present once the feature is installed */
interface ApexCharts {
  // drilldown
  /** drilldown: open the level with this drilldown.series id */
  drillDown?(id: string | number): Promise<any>
  /** drilldown: back one level */
  drillUp?(): Promise<any>
  /** drilldown: back to the top level */
  drillToRoot?(): Promise<any>
  /** drilldown: forget loaded levels (one id, or all) */
  clearDrilldownCache?(id?: string): void
  // link (crossfilter)
  /** link: clear this chart's crossfilter selection */
  clearCrossfilter?(): void
  // agent/describe
  /**
   * agent/describe ('west-coast-charts/agent/describe'): what the chart drew, from the same code
   * as the accessible description and data table. `'json'` (default): WccDescribeResult
   * (dist/schema/wcc-describe.schema.json); `'table'`: the data table; `'markdown'`: a string.
   */
  describe?(opts?: { format?: 'json'; maxRows?: number }): WccDescribeResult
  describe?(opts: { format: 'table'; maxRows?: number }): WccDescribeTable
  describe?(opts: { format: 'markdown'; maxRows?: number }): string
  // trellis
  /** trellis: show one panel at full size (null when there is no such panel) */
  promotePanel?(key: any): Promise<any>
  /** trellis: back to the grid */
  restorePanels?(): Promise<any>
  /** trellis: alias of restorePanels */
  restorePanel?(): Promise<any>
  /** trellis: key of the promoted panel, or null */
  getPromotedPanel?(): any
  /** trellis: the panels in display order */
  getPanels?(): any[]
  /** trellis: one panel by key */
  getPanel?(key: any): any
  /** highlight-filter feature */
  highlightFilter?: {
    /**
     * Sets the parts: an array per series, or a function `(seriesIndex, dataPointIndex, seriesName,
     * x, value, datum, w)` returning the part of each point; `null` clears. `opts.series` limits it
     * to some series; `opts.animate: false` skips the animation.
     */
    set(rows: any, opts?: any): Promise<any>
    /** Removes all parts and redraws the wholes. */
    clear(opts?: any): Promise<any>
    /** The part of a point: a number, `null` (point without part) or `undefined` (no parts). */
    valueAt(seriesIndex: number, dataPointIndex: number): number | null | undefined
    /** `true` when the feature is enabled, the chart type is supported and at least one part is set. */
    isActive(): boolean
  }
  /** perspectives feature: saved views */
  perspectives?: {
    /** The current view state as plain JSON; `opts.only` limits it to some slices. */
    capture(opts?: any): any
    /**
     * Brings the chart to a state, a token or a saved name; resolves `{ state }` when landed, or
     * `{ superseded: true }` when a newer apply started. `opts.animate: false` jumps.
     */
    apply(perspective: any, opts?: any): Promise<any>
    /** URL with `#wcc=<token>` for a state (default: the current one); `base` defaults to the page URL. */
    toURL(perspective?: any, base?: string): string
    /** Compact URL-safe token of a state (default: the current one). */
    encode(perspective: any): string
    /** The state of a token. */
    decode(text: string): any
    /** Saves a state (default: the current one) under a name, in localStorage per chart id; returns the state. */
    save(name: string, perspective?: any): any
    /** Saved perspectives, oldest first: `[{ name, at, state }]`. */
    list(): any[]
    /** Applies a saved perspective (same result as `apply`). */
    load(name: string, opts?: any): Promise<any>
    /** Deletes a saved perspective; `false` when there was none. */
    delete(name: string): boolean
  }
  /** storyboard feature */
  storyboard?: {
    /**
     * Binds scroll beats `{ beats: [{ selector | element, view?, options?, key? }], wcc: { offset,
     * scrub, nav, initial, describe } }`, replacing an earlier binding; resolves when the initial
     * beat has landed.
     */
    bind(config?: { [key: string]: any }): any
    /** Goes to beat `step`; resolves `{ index }` when landed or `{ superseded: true }`. */
    goTo(step: number, opts?: any): Promise<any>
    /** The current beat `{ index, key, element }`, or `null`. */
    current(): any
    /** Stops observing the beats. */
    unbind(): void
  }
  /** history feature */
  history?: {
    /** Reverts the last applied entry; resolves with the new index. */
    undo(): Promise<{ index: number }>
    /** Re-applies the next entry; resolves with the new index. */
    redo(): Promise<{ index: number }>
    /** `true` when an entry can be undone. */
    canUndo(): boolean
    /** `true` when an undone entry can be redone. */
    canRedo(): boolean
    /** Moves to `index` applied entries (0 = everything undone). */
    jump(index: number): Promise<{ index: number }>
    /** Forgets all entries; the current view becomes the starting point. */
    clear(): void
    /** Copies of the entries: `{ id, label, kind, at, before, after, applied, chartId }`. */
    entries(): any[]
    /** one undo entry for everything fn changes */
    transaction<T>(label: string, fn: () => T | Promise<T>): Promise<T>
    /** Number of entries currently applied (0 = everything undone). */
    readonly index: number
    /** Number of entries. */
    readonly size: number
  }
  /** orient feature ("Ansicht ausrichten"): turning radial charts */
  orient?: {
    /** Turns by degrees (snapped to whole segments) or `{ steps }` (time windows, see `chart.orient.step`); positive = clockwise. */
    rotateBy(by: number | { steps: number }, opts?: { animate?: boolean; snap?: boolean; announce?: boolean }): Promise<WccOrientState>
    /**
     * Turns a segment to a position: an index, a category or layer segment name, a time `'HH:MM'` /
     * `Date` (its window on a clock ring). Times align their window start, goal arcs their end,
     * anything else its middle (`opts.align`).
     */
    rotateTo(segment: number | string | Date | { segment: number | string }, position?: 'top' | 'right' | 'bottom' | 'left' | number, opts?: { animate?: boolean; align?: 'start' | 'center' | 'end'; announce?: boolean }): Promise<WccOrientState & { missed?: boolean }>
    /** Turns to an absolute angle (the short way round). */
    set(degrees: number, opts?: { animate?: boolean; announce?: boolean }): Promise<WccOrientState>
    /** Back to the default orientation. */
    reset(opts?: { animate?: boolean; announce?: boolean }): Promise<WccOrientState>
    /** The current turn. */
    get(): WccOrientState
    /** Name of the segment at a position (default `'top'`), or `null`. */
    segmentAt(position?: 'top' | 'right' | 'bottom' | 'left' | number): string | null
    /** The sentence `describe()` and the accessible description add while the chart is turned; `''` otherwise. */
    describe(): string
  }
  /** narrative feature (wcc.narrative) and other per-chart West Coast Charts runtimes */
  wcc?: {
    /** narrative feature: player of the wcc.narrative frames */
    narrative?: {
      /** Starts playback (from the start when at the last frame of a frames source). */
      play(): Promise<void>
      /** Stops playback. */
      pause(): void
      /** Goes to frame `target` (fractional = interpolated) or to `{ t }`. */
      seek(target: number | { t: any }, opts?: { animate?: boolean; [key: string]: any }): Promise<any>
      /** Pauses and moves one frame back (`d < 0`) or forward. */
      step(d: number): Promise<any>
      /** Record source: back to the newest data. */
      live(): Promise<any>
      /** Copies of the frames `{ t, series, label?, caption? }`. */
      frames(): any[]
      /** `{ index, position, t, label, playing, live }` of the frame shown, or `null`. */
      current(): any
      /** Record source: pauses (`false`) or resumes recording; returns the new state. */
      record(on?: boolean): boolean
      /** Removes the frames (record source: keeps the current data as the first frame). */
      clear(): void
      /** Playback speed: `0.5`, `1` or `2` (other values use `1`). */
      setSpeed(speed: number): void
      [method: string]: any
    }
    [key: string]: any
  }
}

// ------------------------------------------------------------------------------------------------
// premium: radial column (also exported by 'west-coast-charts/premium')
// ------------------------------------------------------------------------------------------------

declare namespace ApexCharts {
  export type RadialLayerDatum = number | [string, number] | {
    /** Name of the segment (alias of `name`). */
    x?: string
    /** Name of the segment. */
    name?: string
    /** Value of the segment (alias of `value`). */
    y?: number
    /** Value of the segment. */
    value?: number
    /** Colour of the segment. */
    color?: string
    /** Arc and goals layers: value of a full arc for this point. */
    max?: number
    /** goals: the ring's target (alias of max) */
    target?: number
    /** goals: track colour of this ring (default: derived from the ring colour) */
    trackColor?: string
    /** goals: ring label (default: the name) */
    label?: string
    /** Sunburst: child segments on the next ring. */
    children?: RadialLayerDatum[]
    /** linked categories (indices or names) */
    link?: Array<number | string>
    /** semantic keys (e.g. a service id): marks of other layers sharing a key light together; a sunburst parent takes the union of its children */
    keys?: string[]
    /** this segment's own outer values (filter interaction) */
    values?: Array<number | null>
  }

  /** Label readability (same object as chart.readability, docs/features/readability.md). Premium alone: 'auto' / 'pill' draw a surface pill on ticks over marks, 'hide' hides them; every other option (halo, shadow, pill, each, contrast, minRatio, ...) and contrast-aware 'auto' need west-coast-charts/features/readability installed. */
  export type RadialReadability = WccReadability

  /** One window of a radialColumn 'incident' layer (west-coast-charts/layers/quint): a wedge across every ring. */
  export interface RadialIncident {
    /** first slot: category name or index */
    from: number | string
    /** last slot, inclusive (default: from) */
    to?: number | string
    /** text after the window, e.g. 'EU checkout errors' */
    label?: string
    /** semantic keys of the incident (info()) */
    keys?: string[]
  }

  /** A threshold band of a vitals layer (layers/vitals): values up to `to` (the last band without `to`) get `level` 0-3. Always the caller's bands, never a clinical rule. */
  export interface RadialVitalsBand {
    /** Upper value of the band (inclusive); omitted on the last band. */
    to?: number
    /** 0 = normal ... 3 = highest; colour + pattern. */
    level: 0 | 1 | 2 | 3
    /** Text of the band in tooltip and table. */
    label?: string
  }

  /** One ring of a 'bands' layer (layers/vitals). */
  export interface RadialVitalsRow {
    name: string
    unit?: string
    /** How several measurements in one slot become the cell value. Default: `'median'`. */
    aggregate?: 'median' | 'min' | 'max' | 'last' | 'mean'
    bands?: RadialVitalsBand[]
    /** One value per slot; null = not measured (hatched, never 0). */
    data: Array<number | null>
    /** Per slot: the single measurements [label, value] (tooltip, n). */
    samples?: Array<Array<[string, number]> | null>
  }

  /** One inner layer of chart.type 'radialColumn' (plotOptions.radialColumn.layers, innermost first). */
  export interface RadialColumnLayer {
    /** 'radialBar' is an alias of 'arc'; 'chord' is best as the innermost layer (its ribbons fill the centre) */
    type: 'pie' | 'donut' | 'nestedDonut' | 'sunburst' | 'arc' | 'radialBar' | 'polarArea' | 'heatmap' | 'chord' | 'goals' | 'gauge' | 'wave' | 'matrix' | 'incident'
      /** west-coast-charts/layers/vitals: threshold-band cells, measurements at their true time, high / low pairs, now hand + status strip */
      | 'bands' | 'trace' | 'span' | 'vitalsNow'
    /** Layer name (legend, tooltip, centre label of a gauge). */
    name?: string
    /**
     * pie/donut/arc/polarArea: segments; nestedDonut and heatmap: rings [{ name, data }] or number[][] (innermost first,
     * heatmap cells may be null); sunburst: a node tree; chord: flows [from, to, value] or { from, to, value };
     * wave: rows RadialWaveSeries[] (or one plain number array = one row)
     * matrix: rows × cols values or status names, flows [row, col, value], or RadialMatrixCell objects
     * incident (west-coast-charts/layers/quint): RadialIncident windows, a wedge across every ring each
     */
    data?: RadialLayerDatum[] | Array<{
      /** Ring name. */
      name?: string
      /** Segments or cells of the ring (inner first). */
      data: Array<RadialLayerDatum | null>
    }> | Array<Array<number | null>> | RadialChordFlow[] | RadialWaveSeries[] | Array<Array<number | string | null>> | RadialMatrixCell[] | RadialIncident[]
    /** take the data from config.series (index or name) instead; that series leaves the column ring */
    series?: number | string
    /** segment names for plain number data; wave: point labels, one per point (e.g. '14:00 Tue') or one per sector point ('14:00', shown as 'Tue 14:00') */
    labels?: string[]
    /** ring thickness: px, '30%' of the available radius, or a fraction (0..1) */
    thickness?: number | string
    /** px between this layer and the one inside it (default 6) */
    gap?: number
    /** px between the rings of a nestedDonut / sunburst / arc layer (default 2) */
    ringGap?: number
    /** constant px gap between neighbouring segments */
    padding?: number
    /** corner radius of segment ends, px */
    corner?: number
    /** Own palette of the layer; heatmap: two or more colours are the ramp stops, low to high. */
    colors?: string[]
    /** colour segments from the column ring's spectrum by angle */
    colorBy?: 'spectrum'
    /** keep this layer's segments out of the legend */
    legend?: boolean
    /** link to the column ring for this layer: false = none, a mode, or options overriding plotOptions.radialColumn.link */
    link?: boolean | RadialLinkMode | RadialColumnLink
    /** shorthand for link.align */
    align?: boolean
    /**
     * Track colour of arc, goals and gauge layers; not set uses a faint text tone (goals: a tone of
     * the ring colour).
     */
    trackColor?: string
    /** degrees, 0 = 12 o'clock, clockwise; default: the chart's range */
    startAngle?: number
    /** End angle in degrees (same convention as `startAngle`); not set uses the chart's range. */
    endAngle?: number
    /** arc layers: value range of a full arc (default 0..100; per point via datum.max); wave: base of the height scale (default min(0, data)) */
    min?: number
    /** Arc layers: value of a full arc. Default: `100`. Wave: top of the height scale (default: the data, envelopes and forecasts rounded up to a nice tick). */
    max?: number
    /**
     * heatmap / matrix: base colour of the default ramp (surface tone -> colour -> towards the text colour); colors (2+)
     * overrides the ramp. matrix (value mode) also takes a colour scale.
     */
    color?: string | RadialMatrixScale
    /** chord: group definitions (order, names, colours, linked categories) */
    groups?: RadialChordGroup[]
    /** chord: a square flow matrix instead of data; row = source, column = target (with labels) */
    matrix?: number[][]
    /** chord: directed flows give each end its own share (A->B and B->A differ) */
    directed?: boolean
    /** chord: order of the groups around the ring (default: as given) */
    sort?: 'none' | 'asc' | 'desc'
    /** chord: px width of the group arcs (default: the layer thickness) */
    ringWidth?: number
    /** chord ribbons */
    ribbon?: {
      /** Ribbon opacity; not set uses 0.52 (0.6 in dark mode). */
      opacity?: number
      /** Ribbon colour from the `'source'` group, the `'target'` group, or a `'gradient'` between both. Default: `'source'`. */
      colorMode?: 'source' | 'target' | 'gradient'
      /** Gap between the group arcs and the ribbon ends in px. Default: `2`. */
      padding?: number
    }
    /** goals: default target of every ring (datum target/max wins; default 100) */
    target?: number
    /** goals: laps drawn past 100 % (default 2, i.e. up to 300 %) */
    maxLaps?: number
    /** curved labels on the segments: goals from the ring start (default true); any other layer centred on each segment, upright in the lower half (default false) */
    ringLabels?: boolean
    /** incident: name the heatmap rings (curved, in the gap outside each ring, at 12 o'clock) and add their colour scales to the key under the ring (default true) */
    ringTitles?: boolean
    /** header of this layer's entries in a right-hand legend (e.g. 'Regions'); entries of consecutive layers sharing a title form one group */
    legendTitle?: string
    /** matrix: row headers (ids, or definitions with keys / link); default: the ids used in flow data */
    rows?: Array<string | RadialMatrixHeader | RadialVitalsRow>
    /** matrix: column headers; default: the rows (square adjacency matrix) */
    cols?: Array<string | RadialMatrixHeader>
    /** matrix: adds or overrides statuses (built in: ok, info, warn, crit, unknown) */
    statuses?: Record<string, RadialMatrixStatus>
    /** matrix: row / column header labels (false hides them) */
    headers?: boolean | {
      /** `false` hides the headers. Default: `true`. */
      show?: boolean
      /** Largest header font size in px; it shrinks to 9 px before labels are cut. Default: theme font size − 1. */
      fontSize?: number
      /** Label readability of the headers (explicit modes only, e.g. 'pill' / 'halo'). */
      readability?: RadialReadability
    }
    /** matrix: print the value inside a cell ('auto': when it fits). Default: `'auto'`. */
    values?: boolean | 'auto'
    /** matrix: smallest cell in px before rows / columns are merged or dropped. Default: `6`. */
    minCell?: number
    /** matrix: rows / columns past minCell merge into one '+N' row / column ('aggregate'), or are dropped with a '+N' note ('truncate'). Default: `'aggregate'`. */
    overflow?: 'aggregate' | 'truncate'
    /** matrix: how merged cells and row / column headers combine values (statuses: always the worst). Default: `'sum'`
     *  (header tooltip 'Total'); use 'max' / 'mean' / 'min' for non-additive cells such as latencies or rates ('Highest', 'Average', 'Lowest'). */
    aggregate?: 'sum' | 'max' | 'mean' | 'min' | 'median' | 'last'
    /** matrix: px between the grid (with its headers) and the edge of the centre disc. Default: `6`. */
    inset?: number
    /** matrix: appended to values in cells, tooltip and table; heatmap: appended to the value in the slot tooltip */
    unit?: string
    /** gauge: the value (else data[0]) */
    value?: number
    /** gauge: take the latest value of this column series (name, index or true = first); it stays in the ring */
    follow?: string | number | boolean
    /** gauge: colour by value band, ascending: [{ to: 60, color }] */
    bands?: Array<{
      /** Upper value of the band (inclusive). */
      to: number
      /** Arc colour for values in the band. */
      color: string
    }> | RadialVitalsBand[]
    /** gauge: value formatter (centre, min/max ticks, tooltip) */
    formatter?: (value: number) => string
    /** gauge: show the value in the chart centre (default true) */
    center?: boolean
    /** gauge: min/max labels at the ends of a partial arc (boolean, default true); heatmap: colour scale, 'log' spaces the ramp by ratio (positive values; default 'linear') */
    scale?: boolean | 'linear' | 'log'
    /** gauge with follow: the 'now' tick over the newest slot (default true) */
    now?: boolean | number | string | {
      /** Text of the tick. Default: `'now'`. */
      label?: string
      /** Tick colour; not set uses the gauge colour. */
      color?: string
    }
    /** trace / span / vitalsNow (layers/vitals): the window the ring shows, ms or ISO. */
    time?: { start: number | string, end: number | string }
    /** bands / trace / span (layers/vitals): index of the current slot; later slots are "no data yet". */
    upto?: number
    /** bands (layers/vitals): end label of the last slot (e.g. '24:00'); not set uses the last slot label. */
    endLabel?: string
    /** trace / span (layers/vitals): a gap longer than this many minutes breaks the line. Default: 3 slots. */
    gapAfter?: number
    /** vitalsNow (layers/vitals): caller alarm windows, drawn as wedges. */
    alarms?: Array<{ from: number | string, to?: number | string, label?: string }>
    /** vitalsNow (layers/vitals): last value per parameter in the strip under the ring. */
    status?: Array<{ name: string, text: string, ago?: number, stale?: boolean }>
    /** vitalsNow (layers/vitals): a note in the strip, e.g. 'Demo data'. */
    note?: string
    /**
     * wave: 'ridge' (default) staggers the rows in lanes that rise into the lane behind them; 'overlay' shares one translucent band; 'stack' piles the rows.
     * matrix: 'status' colours cells by severity with patterns; 'auto' (default) = status once any cell has one; 'value' = value scale.
     */
    mode?: 'ridge' | 'overlay' | 'stack' | 'auto' | 'value' | 'status'
    /** wave ridge: how far a wave may rise into the lanes behind it, in lane steps (default 0.8; 0 = no overlap) */
    overlap?: number
    /** wave: the equal sectors (cycles) of the ring - a count, or names / objects in order (default 1) */
    sectors?: number | Array<string | RadialWaveSector>
    /** wave: curved sector names on a band at the inner edge (default true when there are 2+ sectors and room) */
    sectorLabels?: boolean
    /** wave: shading from crest to base, 0 = flat .. 1 = deep (default 0.55) */
    depth?: number
    /** wave: 'smooth' monotone cubic that never overshoots the data (default) or 'linear' */
    curve?: 'smooth' | 'linear'
    /** wave: anomaly spikes. Default: points outside their envelope. A list adds or relabels points; false = none; { color } recolours the automatic ones */
    anomalies?: false | RadialWaveAnomaly[] | { color?: string }
  }

  /** wave layer: one row of points (e.g. hourly load of one cluster) over every sector of the ring */
  export interface RadialWaveSeries {
    /** Row name (legend, tooltip). */
    name?: string
    /** One value per point; null = gap. Numbers, [x, y] or { y }. */
    data: Array<number | null | [unknown, number | null] | { y: number | null }>
    /** Row colour; not set takes the next palette colour. */
    color?: string
    /** Normal range per point: a soft band behind the wave; points outside it are anomalies. */
    envelope?: {
      /** Lower bound per point. */
      lo: Array<number | null>
      /** Upper bound per point. */
      hi: Array<number | null>
    }
    /** Forecast per point (usually null up to now): dashed crest, optional hatched range. */
    forecast?: {
      /** Forecast values. */
      data?: Array<number | null>
      /** Lower bound of the forecast range. */
      lo?: Array<number | null>
      /** Upper bound of the forecast range. */
      hi?: Array<number | null>
    }
    /** Anomalies of this row (as layer anomalies, without series). */
    anomalies?: RadialWaveAnomaly[]
    /** Semantic keys shared by every cell of the row (see 8.3a). */
    keys?: string[]
    /** Linked categories of every cell of the row (else the sector's link, else the layer's link mode). */
    link?: Array<number | string>
  }

  /** wave layer: one sector (cycle) of the ring */
  export interface RadialWaveSector {
    /** Sector name (tooltip, legend filter, link by category). */
    name?: string
    /** Curved label text; not set uses the name. */
    label?: string
    /** Linked categories of the sector's cells. */
    link?: Array<number | string>
    /** Semantic keys of the sector's cells. */
    keys?: string[]
    /** The sector's own outer values (filter interaction). */
    values?: Array<number | null>
  }

  /** wave layer: a listed anomaly spike */
  export interface RadialWaveAnomaly {
    /** Row name (layer-level lists; not set = every row). */
    series?: string
    /** Point index, or a point label (e.g. 'Wed 18:00'). */
    at: number | string
    /** Text in the tooltip, data table and rim marks. */
    label?: string
    /** Kind shown when there is no label. Default: 'Anomaly' ('Above normal' / 'Below normal' for automatic ones). */
    kind?: string
    /** Spike colour. Default: a rose red (lighter in dark mode). */
    color?: string
  }

  /** matrix layer: a row or column header */
  export interface RadialMatrixHeader {
    /** Id used in flow / cell data; default: the name. */
    id?: string
    /** Shown name; default: the id. */
    name?: string
    /** Short label for horizontal column headers (e.g. 'PAY'); default: the name, rotated when it does not fit. */
    short?: string
    /** Semantic keys shared with other layers (cross-lighting); a cell takes its row's and column's keys. */
    keys?: string[]
    /** Outer categories this row / column links to; a cell links the union of its row and column. */
    link?: string | number | Array<string | number>
    /** Own outer values of the row / column (filter interaction). */
    values?: Array<number | null>
  }

  /** matrix layer: one cell as an object */
  export interface RadialMatrixCell {
    /** Row id (or name). */
    row: string
    /** Column id (or name). */
    col: string
    /** Cell value (value mode; shown in the tooltip in status mode). */
    value?: number | null
    /** Status name (ok, info, warn, crit, unknown or one of `statuses`). */
    status?: string
    /** Note shown in the tooltip. */
    label?: string
    /** Own colour of the cell (value mode). */
    color?: string
    /** Own linked outer categories (else the union of the row's and column's). */
    link?: string | number | Array<string | number>
    /** Own semantic keys (else the row's and column's). */
    keys?: string[]
    /** Own outer values (filter interaction). */
    values?: Array<number | null>
  }

  /** matrix layer: one status (severity) */
  export interface RadialMatrixStatus {
    /** Cell colour. */
    color?: string
    /** Shown name (legend, tooltip, description). Default: the status name. */
    label?: string
    /** Pattern over the colour, so a status never depends on hue alone. */
    pattern?: 'none' | 'dots' | 'hatch' | 'cross'
    /** Severity order: higher is worse (built in: unknown 0, ok 1, info 2, warn 3, crit 4). */
    level?: number
  }

  /** matrix layer, value mode: colour scale of the cells */
  export interface RadialMatrixScale {
    /** `'sequential'` (low to high) or `'diverging'` around `mid`. Default: `'sequential'`. */
    scale?: 'sequential' | 'diverging'
    /** [lo, hi] or [lo, mid, hi]; default: data extent. */
    domain?: number[]
    /** Diverging centre. Default: `0`. */
    mid?: number
    /** Colour stops, low to high. */
    stops?: string[]
    /** Reverses the colour stops. Default: `false`. */
    reverse?: boolean
  }

  export type RadialChordFlow = [string, string, number] | {
    /** Source group id. */
    from: string
    /** Target group id. */
    to: string
    /** Size of the flow. */
    value: number
    /** Ribbon colour of this flow. */
    color?: string
  }

  export interface RadialChordGroup {
    /** Group id used in the flows. */
    id: string
    /** Shown name; not set uses the id. */
    name?: string
    /** Group colour. */
    color?: string
    /** per-group values (shown in its tooltip) */
    values?: number[]
    /** categories (names or indices) of the column ring this group links to (overrides link.map) */
    link?: string | number | Array<string | number>
  }

  export type RadialLinkMode = 'none' | 'category' | 'angle' | 'map' | 'auto'

  /** a segment as passed to link.map */
  export interface RadialLinkSegment {
    /** Segment name. */
    name: string
    /** Names from the top-level segment down to this one (sunburst); one name elsewhere. */
    path: string[]
    /** Sunburst depth, 0 for the top level (and for other layers). */
    depth: number
    /** Segment value. */
    value: number
    /** Position of the segment in its ring. */
    index: number
  }

  /** links between inner-layer segments and outer categories (multi-semantic layers) */
  export interface RadialColumnLink {
    /** auto (default): a datum's own link, else matching category names, else the angle span */
    mode?: RadialLinkMode
    /** map mode: a function or an object keyed by 'A › B' path or name; values are category indices or names */
    map?: ((segment: RadialLinkSegment) => Array<number | string> | null | undefined) | Record<string, Array<number | string>>
    /** highlight on hover, filter (cross-filter / values) on click, or both. Default 'highlight' */
    interaction?: 'highlight' | 'filter' | 'both'
    /** hovering a bar also lights its segments (default true) */
    bidirectional?: boolean
    /** segments span exactly the angle of their linked bars (default false) */
    align?: boolean
    /** bracket arc on the outer edge over the linked bars (default true) */
    indicator?: boolean
    /** what a category is, for tooltips and announcements ('18 of 72 time slots'). Default 'categories'.
     *  Name the real unit: categories that combine several things (service × day) are 'service-days', not 'days'. */
    unit?: string
    /** how the categories are composed, appended in brackets ('18 of 140 service-days (10 services × 14 days)'). Default: none */
    basis?: string
  }

  /** a value channel bound to a metric: a datum field (datum.meta[field] or datum[field]) or one value per category */
  export interface RadialEncodeChannel {
    /** Datum field of the metric (`datum.meta[field]` or `datum[field]`). */
    field?: string
    /** One value per category instead of a field. */
    values?: Array<number | null>
    /** legend / tooltip name (default: the field) */
    name?: string
    /** appended to values: '%' sticks, other units get a space */
    unit?: string
    /** Decimals of the shown values; not set uses 0 from 100, 1 from 10, else 2. */
    decimals?: number
    /** `(value) => string` for the shown values (wins over `decimals` and `unit`). */
    format?: (value: number) => string
    /** false: no key in the strip under the ring (default true) */
    legend?: boolean
    /** `false` switches the channel off. Default: `true`. */
    show?: boolean
  }

  /** encode channels ('triple semantics'); every channel is off unless configured */
  export interface RadialColumnEncode {
    /** name of the angular dimension for the guide (default: xaxis.title.text or 'Category') */
    angle?: string
    /** bar length: 'value' (default) or a datum field */
    length?: 'value' | string
    /** bar colour = a separate metric */
    color?: string | (RadialEncodeChannel & {
        /** `'sequential'` (low to high) or `'diverging'` around `mid`. Default: `'sequential'`. */
      scale?: 'sequential' | 'diverging'
      /** [lo, hi] or [lo, mid, hi]; default: data extent (diverging: symmetric around mid) */
      domain?: number[]
      /** diverging centre (default 0) */
      mid?: number
      /**
       * Colour stops; not set uses `['#2dd4bf', '#facc15', '#f43f5e']` (diverging: blue, a neutral
       * tone, orange).
       */
      stops?: string[]
      /** Reverses the colour stops. Default: `false`. */
      reverse?: boolean
    })
    /** change vs a previous period outside the bars */
    delta?: string | (RadialEncodeChannel & {
      /** band: thin coloured ring; ticks: marks at the bar tips; bars: signed mini bars (out = up, in = down) */
      style?: 'band' | 'ticks' | 'bars'
      /** Colours of increases and decreases. */
      colors?: {
        /** Colour of increases. Default: `'#22c55e'`. */
        up?: string
        /** Colour of decreases. Default: `'#f43f5e'`. */
        down?: string
      }
      /** |value| of full intensity / length (default: largest |value|) */
      max?: number
    })
    /** '?' button with a 'how to read' panel listing every bound channel */
    guide?: boolean | {
      /** `false` hides the guide button. Default: `true`. */
      show?: boolean
      /** start open (true: only when the chart is >= 560 px wide; 'always') */
      open?: boolean | 'always'
    }
  }

  /** plotOptions.radialColumn */
  export interface RadialColumnOptions {
    /** how the column values combine in the centre, the generated description, tooltip footers and the filter note.
     *  'sum' (default) adds them into a Total — right for counts and amounts only. Use 'max' / 'min' for
     *  latencies and percentiles ('Highest p95 latency (ms): 412 (Matching · 20:00)'), 'mean' for rates,
     *  percentages and scores, 'none' to name no combined number at all. */
    aggregate?: 'sum' | 'mean' | 'max' | 'min' | 'none'
    /** links between inner layers and the column ring (a mode string or options) */
    link?: RadialLinkMode | RadialColumnLink
    /** bind colour / delta / length to separate metrics */
    encode?: RadialColumnEncode
    /** rim marks (deploys, pipeline runs, incidents): a small glyph outside the bars at a slot, a tooltip row on that slot and a guide row */
    markers?: Array<{
      /** Slot of the mark: category index or name. */
      at: number | string
      /** Text of the tooltip row. */
      label?: string
      /** Name of the tooltip row. Default: `'Event'`. */
      kind?: string
      /** Mark colour; not set uses the text colour. */
      color?: string
      /** `'dot'` or `'diamond'`. Default: `'diamond'`. */
      shape?: 'dot' | 'diamond'
    }>
    /** degrees, 0 = 12 o'clock, clockwise; a partial range gives a gauge */
    startAngle?: number
    /** End of the range in degrees (same convention as `startAngle`). Default: `360`. */
    endAngle?: number
    /** base radius of the bars: 'auto', px, '40%' or a fraction of the outer radius */
    innerRadius?: 'auto' | number | string
    /** gap between neighbouring slots: 'auto' or a fraction of the slot (0..0.9) */
    barPadding?: 'auto' | number
    /** gap between the bars of one slot when grouped (fraction) */
    groupPadding?: number
    /** stack series outward (falls back to chart.stacked) */
    stacked?: boolean
    /** Gap between stacked segments in px. Default: `1`. */
    stackGap?: number
    /** rounded bar ends */
    rounded?: boolean
    /** Bar colours. */
    fill?: {
      /** auto: spectrum for one uncoloured series, else series colours */
      type?: 'auto' | 'spectrum' | 'series' | 'value'
      /** gradient stops (spectrum by angle, value by magnitude) */
      stops?: string[]
      /** type 'value': fixed colours for value ranges (inclusive); values outside every range use the stops */
      ranges?: {
        /** Lowest value of the range (inclusive). */
        from: number
        /** Highest value of the range (inclusive). */
        to: number
        /** Colour of bars in the range. */
        color: string
      }[]
      /** inner fade of the bars, 0..1 (0 = off) */
      fade?: number
    }
    /** Background track behind the bars. */
    track?: {
      /** Shows the track. Default: `false`. */
      show?: boolean
      /** Track colour; not set uses a faint text tone. */
      color?: string
    }
    /** Zero ring. */
    baseline?: {
      /** Draws the ring at value 0. Default: `true`. */
      show?: boolean
    }
    /** Value scale of the bars. */
    valueAxis?: {
      /** `false` hides the grid rings and value labels. Default: `true`. */
      show?: boolean
      /** Fixed lower end; not set uses the data. */
      min?: number
      /** Fixed upper end; not set uses the data. */
      max?: number
      /** Target number of tick steps. Default: `4`. */
      tickAmount?: number
      /** round free ends to the tightest whole tick step (3-6 ticks); false = data extent. Default true */
      nice?: boolean
      /** Draws the grid rings at the ticks (the value labels sit on them). Default: `true`. */
      rings?: boolean
      /** Tick labels of the value scale. */
      labels?: {
        /** Shows the tick labels. Default: `true`. */
        show?: boolean
        /** `(value, { w }) => string`; not set uses a compact number. */
        formatter?: (value: number) => string
        /** labels that sit on bars: 'auto' (default) = untouched off the bars, contrasting colour over one fill, pill over mixed fills; 'none' = off. Layered over chart.readability */
        readability?: RadialReadability
        /** where the scale sits: degrees (startAngle convention, 0 = 12 o'clock) or 'auto' = the slot boundary with the shortest bars on both sides. Default: the start of the range */
        angle?: number | 'auto'
        /** 'auto' keeps the first angle it found across updates (no jumping scale). Default true */
        pinAngle?: boolean
      }
    }
    /** Category names around the ring. */
    categoryLabels?: {
      /** Shows the category names. Default: `true`. */
      show?: boolean
      /**
       * `'horizontal'` or along the `'radial'` direction; `'auto'` keeps names horizontal when they
       * fit their slot. Default: `'auto'`.
       */
      orientation?: 'auto' | 'horizontal' | 'radial'
      /** Distance from the bars in px. Default: `8`. */
      offset?: number
      /** Longest name in px before it is shortened. Default: `110`. */
      maxWidth?: number
      /** label every n-th category (disables automatic thinning) */
      step?: number
      /** most labels to show; default from the ring length (one per ~4 font sizes, 4-24) */
      maxCount?: number
      /** `(category, { index }) => string` for the name. */
      formatter?: (category: string, opts: { index: number }) => string
    }
    /** Value and label in the hole. */
    center?: {
      /** centre value + label readability (explicit modes; default none) */
      readability?: RadialReadability
      /**
       * `true` always shows the centre; `'auto'` shows it when the hole is at least 34 px. Default:
       * `'auto'`.
       */
      show?: boolean | 'auto'
      /**
       * Label under the value; not set uses the gauge layer name, `'Total'` with columns, or the
       * first layer name.
       */
      label?: string
      /**
       * Fixed value or text, or a function returning text; not set uses the gauge value or the
       * total.
       */
      value?: number | string | (() => string)
      /** `(value, { w }) => string` for a numeric centre value. */
      formatter?: (value: number) => string
      /** show the hovered slot / segment in the centre */
      hover?: boolean
    }
    /** Inner layers, innermost first. Default: `[]`. */
    layers?: RadialColumnLayer[]
    /** px between the outermost inner layer and the column ring */
    layerGap?: number
    /** radius of the empty centre: 'auto', px, '%' or fraction of the space inside the column ring */
    hole?: 'auto' | number | string
    /** Legend of series and layer items. */
    legend?: {
      /** `true` always shows it; `'auto'` from two items. Default: `'auto'`. */
      show?: boolean | 'auto'
      /** `'right'` or `'bottom'`; `'auto'` uses the right on wide plots. Default: `'auto'`. */
      position?: 'auto' | 'right' | 'bottom'
    }
  }

  /** premium.api(chart) for a radialColumn chart */
  export interface RadialColumnApi {
    /** The chart type, `'radialColumn'`. */
    readonly type: 'radialColumn'
    /** no argument: the chart summary; a category: every bound channel as one line ('13:20 · 412 Requests · 3.4% Error rate · +12% vs last week') */
    describe(category?: string): string | null
    /**
     * Rows of the accessible data table and CSV: one row per category (series values and the
     * color/delta channels), then the segments of the inner layers; `null` before the first render.
     */
    dataTable(): { head: string[]; rows: string[][] } | null
    /** Removes the hover or keyboard highlight. */
    clearHighlight(): void
    /** Hides or shows a column series (`'s:<series>'`, the last visible one stays), a segment (`'c:<segment name>'`) or the cells of a matrix status (`'x:<status>'`), as a legend click. */
    toggle(id: string): void
    /** Highlights one category across every ring; an unknown name clears and returns `false`. */
    highlightCategory(name: string): boolean
    /** Summary of the inner layers: index, type, name, ring count, radii and link mode. */
    /** wave layers add mode, sectors, points, domain and their anomalies */
    layers(): Array<{ index: number; type: RadialColumnLayer['type']; name: string; rings: number; radii: Array<[number, number]>; link?: RadialLinkMode; mode?: 'ridge' | 'overlay' | 'stack'; sectors?: string[]; points?: number; domain?: [number, number]; anomalies?: Array<{ series: string; point: number; label: string; value: number; kind: string }> }>
    /** category names linked to a segment (name or 'A › B' path) */
    links(segment: string): string[]
    /**
     * The centre matrix as drawn (after overflow): row / column names ('+N' for a merged one), cells row-major
     * and how many rows / columns were merged or dropped; `null` without a matrix layer.
     */
    matrix(): { name: string; mode: 'value' | 'status'; rows: string[]; cols: string[]; cells: Array<{ row: string; col: string; value: number | null; status?: string }>; hiddenRows: number; hiddenCols: number } | null
    /** sticky selection of a category, segment or matrix cell ('Row → Col') (as a click); false when not found */
    select(nameOrPath: string): boolean
    /**
     * The sticky selection: `{ slot }` for a category, `{ key }` for a segment, `{ rib }` for a
     * chord ribbon; `null` when nothing is selected.
     */
    selected(): { slot?: number; key?: string; rib?: string } | null
    /** Clears the sticky selection (and the link filter it set). */
    clearSelection(): void
    /** [channel, meaning] rows of the bound encodings */
    channels(): Array<[string, string]>
  }

}

/** chart.orient.get(): the turn of a radial chart */
type WccOrientState = {
  /** Degrees clockwise from the default, in (-180, 180]. */
  angle: number
  /** `'radialColumn'`, `'chord'`, `'pie'`, `'donut'`, `'polarArea'`, `'radialBar'`, or `null` (cannot turn). */
  kind: string | null
  /** The angle in segments (radialColumn), else `null`. */
  steps: number | null
  /** One step of the buttons and keys in degrees. */
  step: number | null
  /** Name of the segment at 12 o'clock. */
  top: string | null
  /** Name of the first segment (the start reference, e.g. `'00:00'`). */
  start: string | null
  /** Where the start sits now, degrees clockwise from 12 o'clock. */
  startAt: number
  /** `true` in the default orientation. */
  default: boolean
}
