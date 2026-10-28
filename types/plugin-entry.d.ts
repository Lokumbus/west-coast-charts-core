// Module-form declaration for the wildcard plugin entries
// (west-coast-charts/types/<name>, west-coast-charts/features/<name>,
// west-coast-charts/renderer-canvas). TypeScript does not apply the ambient
// `declare module '.../*'` patterns of plugins.d.ts once the package exports
// map resolves such a subpath to a file, so these entries need a real module.
/// <reference path="./apexcharts.d.ts" />
/// <reference path="./plugins.d.ts" />
declare const plugin: ApexCharts.WestCoastChartsPlugin
export default plugin
