// Type declarations for West Coast Charts.
// The chart class and all option interfaces are declared in ./apexcharts.d.ts
// (kept under that name for drop-in compatibility with ApexCharts 4.x code).
/// <reference path="./apexcharts.d.ts" />

declare module 'west-coast-charts' {
  type WestCoastCharts = ApexCharts
  const WestCoastCharts: typeof ApexCharts
  export default WestCoastCharts
  export { WestCoastCharts, WestCoastCharts as ApexCharts }
  export type ApexOptions = ApexCharts.ApexOptions
  export type WestCoastChartsOptions = ApexCharts.ApexOptions
}
