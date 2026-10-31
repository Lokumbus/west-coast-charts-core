// West Coast Charts: chart.events payload contracts for premium renderers and optional features.
// Generated documentation: node tools/docs/gen-events.cjs. Edit these declarations, not its output.
// Copyright (c) 2026 West Coast Software - MIT License

type WccEventRecord = Record<string, unknown>
type WccEventOrigin = Event | Error | null
/** The chart configuration/state supplied by legacy payloads; treat other fields as internal. */
interface WccEventChartState { config: ApexCharts.ApexOptions; globals: WccEventRecord }
interface WccEventPointIndex { seriesIndex: number; dataPointIndex: number; w?: WccEventChartState }
interface WccEventFlow { from: string; to: string; value: number }
interface WccEventNode { id: string; name: string; value?: number; inflow?: number; outflow?: number; column?: number }
interface WccEventNetworkNode { id: string; name: string; group?: string; value?: number; degree: number; keys?: string[] }
interface WccEventTask { id: string; name: string; start: number; end: number; progress?: number; group: string; critical: boolean }
interface WccTaskPointEvent extends WccEventPointIndex { task: WccEventTask; selected?: string[] }
interface WccTreePointEvent extends WccEventPointIndex { node: WccEventRecord; id: string; name: string; depth: number; collapsed: boolean; children: number }
interface WccStockPointEvent extends WccEventPointIndex { x: number; open: number; high: number; low: number; close: number; volume?: number }
interface WccFlowPointEvent extends WccEventPointIndex { kind: 'link' | 'node'; link?: WccEventFlow; node?: WccEventNode }
interface WccNetworkPointEvent extends WccEventPointIndex { node?: WccEventNetworkNode; edge?: { from: string; to: string; weight: number; causal?: boolean } }
interface WccMapPointEvent extends WccEventPointIndex { id?: string; name?: string; value?: number; distance?: number; data?: unknown; properties?: WccEventRecord; selected: boolean }
interface WccMekkoPointEvent extends WccEventPointIndex { category: string; series: string; value: number }
interface WccRadialPointEvent {
  seriesIndex?: number; dataPointIndex?: number; category?: string;
  values?: Array<{ series: string; value: number | null }>;
  layerIndex?: number; layer?: string; flow?: WccEventFlow;
  segment?: { name: string; value?: number | null; path: string[]; row?: unknown; col?: unknown };
  linked?: string[]; selected: boolean
}
/** DataPointSelection varies by renderer; these are the actual per-family payloads. */
type WccPremiumPointEvent = WccTaskPointEvent | WccTreePointEvent | WccStockPointEvent | WccFlowPointEvent | WccNetworkPointEvent | WccMapPointEvent | WccMekkoPointEvent | WccRadialPointEvent
interface WccScheduleConflictEvent {
  id: string; type: 'room' | 'person' | 'transfer' | 'hours'; severity: 'error' | 'warning';
  items: string[]; resource?: string; person?: string; resources?: string[];
  from: number; to: number; gap?: number; outside?: number; text: string
}
interface WccSchedulePosition { start: number; end: number; resource: string; people: string[] }
interface WccScheduleProposalEvent { id: string; from: WccSchedulePosition; to: WccSchedulePosition; conflicts: WccScheduleConflictEvent[]; added: WccScheduleConflictEvent[]; resolved: WccScheduleConflictEvent[] }
interface WccTaskChangeEvent extends WccTaskPointEvent { start: number; end: number; previous: { start: number; end: number; name?: string }; source: string; name?: string }
interface WccTaskMutationEvent { w?: WccEventChartState; seriesIndex: number; index: number; data: WccEventRecord; source: string; start?: number; end?: number; task?: WccEventTask; dataPointIndex?: number }
interface WccDependencyEvent { w: WccEventChartState; from: string; to: string; type?: 'FS' | 'SS' | 'FF' | 'SF'; lag?: number; source: string }
interface WccPremiumDrillEvent { w: WccEventChartState; id?: string; name?: string; value?: number; depth: number; label?: string; error?: unknown }
interface WccFeatureDrillEvent { from: string | number | null; to: string | number | null; point?: unknown; seriesIndex?: number; dataPointIndex?: number }
interface WccHistoryPositionEvent { index: number; size: number; canUndo: boolean; canRedo: boolean }
type WccPanelKey = string | number | boolean | null | WccPanelKey[]
interface WccPanelEvent { key: WccPanelKey; index?: number; chart?: ApexCharts | null; el?: Element; remounted?: boolean }
interface WccPerspectiveEvent { state: WccEventRecord; requested?: WccEventRecord }
interface WccOrientChangeEvent extends WccOrientState { previous: number; picked: string | null }
interface WccZoomEvent { w?: WccEventChartState; xaxis?: { min: number; max: number }; scale?: number }

/**
 * Names, payloads and generation metadata for every emitted premium/feature chart event.
 * @legacy payload = (payload, chart); feature = (chart, payload); event = (event, chart, payload).
 * Standard mode always uses (eventOrNull, chart, payload). Return false cancels ONLY @cancelable true.
 */
interface WccPremiumEventPayloads {
  /** The active story beat changed.
   * @family storyboard
   * @legacy feature
   * @cancelable false
   */
  beatChange: { index: number; key?: string | number; previous: number; direction: -1 | 0 | 1; element: Element | null }
  /** Lazy children arrived.
   * @family tree
   * @legacy event
   * @cancelable false
   */
  childrenLoad: { w: WccEventChartState; id: string; node: WccEventRecord; children: WccEventRecord[] }
  /** Loading lazy children failed.
   * @family tree
   * @legacy event
   * @cancelable false
   */
  childrenLoadError: { w: WccEventChartState; id: string; node: WccEventRecord; error: unknown }
  /** A linked range filter changed.
   * @family link
   * @legacy feature
   * @cancelable false
   */
  crossFilter: { sourceChartID: string; xaxis: { min: number; max: number } }
  /** The pointer entered a premium mark; narrow by its family payload fields.
   * @family gantt, sankey, stock, tree
   * @legacy event
   * @cancelable false
   */
  dataPointMouseEnter: WccTaskPointEvent | WccFlowPointEvent | WccStockPointEvent | WccTreePointEvent
  /** The pointer left a premium mark.
   * @family gantt, sankey, tree
   * @legacy event
   * @cancelable false
   */
  dataPointMouseLeave: WccTaskPointEvent | WccFlowPointEvent | WccTreePointEvent
  /** A premium mark was selected; payload shape is family-specific.
   * @family chord, gantt, map, marimekko, network, radialColumn, sankey, stock, tree
   * @legacy event
   * @cancelable false
   */
  dataPointSelection: WccPremiumPointEvent
  /** A dependency is proposed; false rejects creation.
   * @family gantt
   * @legacy event
   * @cancelable true
   */
  dependencyCreate: WccDependencyEvent
  /** A dependency is proposed for removal; false rejects removal.
   * @family gantt
   * @legacy event
   * @cancelable true
   */
  dependencyDelete: WccDependencyEvent
  /** A drawing is added, edited or removed; false rejects the change.
   * @family stock
   * @legacy event
   * @cancelable true
   */
  drawingChange: { w: WccEventChartState; action: string; drawing: WccStockDrawing | null; drawings: WccStockDrawing[] }
  /** A core drilldown transition completed; case-sensitive name.
   * @family drilldown feature
   * @legacy feature
   * @cancelable false
   */
  drillDownEnd: WccFeatureDrillEvent
  /** A core drilldown loader failed; case-sensitive name.
   * @family drilldown feature
   * @legacy feature
   * @cancelable false
   */
  drillDownError: { id: string | number; error: unknown }
  /** A core drilldown transition started; case-sensitive name.
   * @family drilldown feature
   * @legacy feature
   * @cancelable false
   */
  drillDownStart: WccFeatureDrillEvent
  /** A core drill-up transition completed; case-sensitive name.
   * @family drilldown feature
   * @legacy feature
   * @cancelable false
   */
  drillUp: WccFeatureDrillEvent
  /** A premium level is about to open; false rejects navigation.
   * @family sankey, map
   * @legacy event
   * @cancelable true
   */
  drilldown: WccPremiumDrillEvent
  /** A premium level loader failed.
   * @family sankey, map
   * @legacy event
   * @cancelable false
   */
  drilldownError: WccPremiumDrillEvent
  /** A premium level is about to close; false rejects navigation.
   * @family sankey, map
   * @legacy event
   * @cancelable true
   */
  drillup: WccPremiumDrillEvent
  /** The Sankey cycle policy rejected input; the origin argument is the error.
   * @family sankey
   * @legacy event
   * @cancelable false
   */
  error: { type: 'sankey'; cycle: string[] }
  /** A crossfilter bucket selection or clear changed the filter set.
   * @family link
   * @legacy feature
   * @cancelable false
   */
  filterChange: { filters: Record<string, unknown>; filteredCount: number; total: number; sourceChartID: string; key: unknown }
  /** A task group was collapsed or expanded.
   * @family gantt
   * @legacy event
   * @cancelable false
   */
  groupToggle: { w: WccEventChartState; group: string; collapsed: boolean }
  /** The highlight filter was applied, updated or cleared.
   * @family highlight-filter
   * @legacy feature
   * @cancelable false
   */
  highlightFilterChanged: { active: boolean; phase: 'enter' | 'update' | 'clear' }
  /** The Gantt edit history changed.
   * @family gantt
   * @legacy event
   * @cancelable false
   */
  historyChange: { w: WccEventChartState; action: string; entry: WccEventRecord; canUndo: boolean; canRedo: boolean; undo: number; redo: number }
  /** A network layout reached its settled position.
   * @family network
   * @legacy event
   * @cancelable false
   */
  layoutSettled: { nodes: number }
  /** A premium legend toggle changed visibility; false does not veto it.
   * @family marimekko, radialColumn
   * @legacy event
   * @cancelable false
   */
  legendClick: { seriesName: string; hidden: boolean }
  /** A network node drag ended.
   * @family network
   * @legacy event
   * @cancelable false
   */
  nodeDragEnd: { node: WccEventNetworkNode }
  /** A Sankey node drag ended; offset is the layout-axis displacement.
   * @family sankey
   * @legacy event
   * @cancelable false
   */
  nodeMove: { w: WccEventChartState; node: { id: string; name: string }; offset: number }
  /** A tree node is about to toggle; collapsed is the proposed state and false rejects it.
   * @family tree
   * @legacy event
   * @cancelable true
   */
  nodeToggle: WccTreePointEvent
  /** A trellis panel mounted or remounted.
   * @family trellis
   * @legacy feature
   * @cancelable false
   */
  panelMounted: WccPanelEvent
  /** A trellis panel was promoted to the main view.
   * @family trellis-extras
   * @legacy feature
   * @cancelable false
   */
  panelPromoted: WccPanelEvent
  /** A promoted panel was restored to the grid.
   * @family trellis-extras
   * @legacy feature
   * @cancelable false
   */
  panelRestored: WccPanelEvent
  /** A captured view state was applied.
   * @family perspectives
   * @legacy feature
   * @cancelable false
   */
  perspectiveApplied: WccPerspectiveEvent
  /** A view state was captured.
   * @family perspectives
   * @legacy feature
   * @cancelable false
   */
  perspectiveCaptured: WccPerspectiveEvent
  /** A Sankey playback frame changed.
   * @family sankey
   * @legacy event
   * @cancelable false
   */
  playbackFrame: { w: WccEventChartState; frame: number; label?: string }
  /** The Quint lens was enabled or disabled.
   * @family quintTimeline, quintConvergence
   * @legacy payload
   * @cancelable false
   */
  quintLens: { enabled: boolean }
  /** The Quint time pin changed or was cleared.
   * @family quintTimeline, quintConvergence
   * @legacy payload
   * @cancelable false
   */
  quintPin: { time: number | null; slot: number | null }
  /** The selected Quint keys changed or were cleared.
   * @family quintTimeline, quintConvergence
   * @legacy payload
   * @cancelable false
   */
  quintSelect: { keys: string[] | null }
  /** A controlled move proposal was produced; the application decides whether to apply it.
   * @family schedule
   * @legacy payload
   * @cancelable false
   */
  scheduleChange: WccScheduleProposalEvent
  /** Once per render, conflicts in the visible schedule are reported.
   * @family schedule
   * @legacy payload
   * @cancelable false
   */
  scheduleConflict: { conflicts: WccScheduleConflictEvent[] }
  /** The selected appointment or highlighted person changed.
   * @family schedule
   * @legacy payload
   * @cancelable false
   */
  scheduleSelect: { item: string | null; person: string | null }
  /** Free schedule time was clicked.
   * @family schedule
   * @legacy payload
   * @cancelable false
   */
  slotClick: { time: number; lane: string | null; by: 'person' | 'resource'; day: number }
  /** A task edit is proposed; false rejects it.
   * @family gantt
   * @legacy event
   * @cancelable true
   */
  taskChange: WccTaskChangeEvent
  /** A task creation is proposed; false rejects it. History replay also reports this event.
   * @family gantt
   * @legacy event
   * @cancelable true
   */
  taskCreate: WccTaskMutationEvent
  /** A task deletion is proposed; false rejects it. History replay also reports this event.
   * @family gantt
   * @legacy event
   * @cancelable true
   */
  taskDelete: WccTaskMutationEvent
  /** The trellis grid mounted or changed its mounted panels.
   * @family trellis
   * @legacy feature
   * @cancelable false
   */
  trellisMounted: { panels: WccPanelEvent[] }
  /** The current drill path changed.
   * @family drilldown feature
   * @legacy feature
   * @cancelable false
   */
  wccDrillPathChange: { path: Array<string | number>; depth: number }
  /** The narrative frame changed.
   * @family narrative
   * @legacy feature
   * @cancelable false
   */
  wccFrameChange: { index: number; t?: number | string; label: string; direction: number }
  /** The shared history journal position changed.
   * @family history feature
   * @legacy feature
   * @cancelable false
   */
  wccHistoryChange: WccHistoryPositionEvent
  /** Narrative playback state changed.
   * @family narrative
   * @legacy feature
   * @cancelable false
   */
  wccNarrativeState: { playing: boolean; live: boolean }
  /** The radial view orientation changed.
   * @family orient
   * @legacy feature
   * @cancelable false
   */
  wccOrientChange: WccOrientChangeEvent
  /** A premium date range or network scale changed.
   * @family gantt, stock, network
   * @legacy event
   * @cancelable false
   */
  zoomed: WccZoomEvent
}

type WccPayloadFirstEventName = 'quintLens' | 'quintPin' | 'quintSelect' | 'scheduleChange' | 'scheduleConflict' | 'scheduleSelect' | 'slotClick'
type WccFeatureEventName = 'beatChange' | 'crossFilter' | 'drillDownEnd' | 'drillDownError' | 'drillDownStart' | 'drillUp' | 'filterChange' | 'highlightFilterChanged' | 'panelMounted' | 'panelPromoted' | 'panelRestored' | 'perspectiveApplied' | 'perspectiveCaptured' | 'trellisMounted' | 'wccDrillPathChange' | 'wccFrameChange' | 'wccHistoryChange' | 'wccNarrativeState' | 'wccOrientChange'
type WccPremiumEventName = keyof WccPremiumEventPayloads
/** Explicit standard handler type, useful when retaining a handler outside chart options. */
type WccStandardEventHandler<P> = (event: WccEventOrigin, chart: ApexCharts, payload: P) => void | boolean
/** Legacy signatures depend on the event family and remain the default. */
type WccLegacyEventHandler<K extends WccPremiumEventName> =
  K extends WccPayloadFirstEventName ? (payload: WccPremiumEventPayloads[K], chart: ApexCharts) => void | boolean :
  K extends WccFeatureEventName ? (chart: ApexCharts, payload: WccPremiumEventPayloads[K]) => void | boolean :
  WccStandardEventHandler<WccPremiumEventPayloads[K]>
type WccLegacyPremiumEvents = { [K in WccPremiumEventName]?: WccLegacyEventHandler<K> }
type WccStandardPremiumEvents = { [K in WccPremiumEventName]?: WccStandardEventHandler<WccPremiumEventPayloads[K]> }
/**
 * Compatibility chart-options surface: established inline callbacks keep contextual any args.
 * Choose WccLegacyEventHandler / WccStandardEventHandler (or their maps above) for precise types.
 * eventSignature selects runtime calling convention; it does not require migrating old TS callers.
 */
type WccPremiumEvents = { [K in WccPremiumEventName]?: (...args: any[]) => any }
