// Type declarations for the optional West Coast Charts entries.
//   import WestCoastCharts from 'west-coast-charts'
//   import types from 'west-coast-charts/types'   // every WCC chart type
//   WestCoastCharts.use(types)
//   import 'west-coast-charts/types/gauge'        // or one type, side effect
//   import WestCoastCharts from 'west-coast-charts/full' // core + types + features
//   import 'west-coast-charts/features/drilldown'      // one feature, side effect
// See docs/architecture/plugins.md.
/// <reference path="./apexcharts.d.ts" />

declare module 'west-coast-charts/types' {
  const types: ApexCharts.WestCoastChartsPlugin
  export default types
}

declare module 'west-coast-charts/types/*' {
  const type: ApexCharts.WestCoastChartsPlugin
  export default type
}

declare module 'west-coast-charts/full' {
  const WestCoastCharts: typeof ApexCharts
  export default WestCoastCharts
  export { WestCoastCharts, WestCoastCharts as ApexCharts }
  export type ApexOptions = ApexCharts.ApexOptions
}

declare module 'west-coast-charts/features/*' {
  const feature: ApexCharts.WestCoastChartsPlugin
  export default feature
}
