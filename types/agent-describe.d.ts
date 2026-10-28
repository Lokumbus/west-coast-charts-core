// west-coast-charts/agent/describe: chart.describe() (see WccDescribeResult in wcc-options.d.ts).
/// <reference path="./apexcharts.d.ts" />
declare module 'west-coast-charts/agent/describe' {
  type Opts = { format?: 'json' | 'table' | 'markdown'; maxRows?: number }
  /** the plugin: WestCoastCharts.use(describePlugin); the side-effect import installs it already */
  const describePlugin: ApexCharts.WestCoastChartsPlugin
  export default describePlugin
  export const SCHEMA_ID: 'wcc-describe/1'
  export const FORMATS: ReadonlyArray<'json' | 'table' | 'markdown'>
  export function describe(chart: ApexCharts, opts?: Opts | 'json'): WccDescribeResult
  export function describe(chart: ApexCharts, opts: { format: 'table'; maxRows?: number } | 'table'): WccDescribeTable
  export function describe(chart: ApexCharts, opts: { format: 'markdown'; maxRows?: number } | 'markdown'): string
  export function toTable(model: WccDescribeResult): WccDescribeTable
  export function toMarkdown(model: WccDescribeResult): string
}
