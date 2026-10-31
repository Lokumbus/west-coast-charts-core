// Type declarations of west-coast-charts/agent/validate (option validator, docs/errors.md).
//   import validatePlugin, { validate } from 'west-coast-charts/agent/validate'
//   WestCoastCharts.use(validatePlugin)
// Copyright (c) 2026 West Coast Software - MIT License
/// <reference path="./west-coast-charts.d.ts" />

export type WccIssueKind = 'unknown_option' | 'type_mismatch' | 'invalid_value' | 'deprecated' | 'license_required'

export type WccFix =
  | { op: 'rename'; from: string; to: string; value?: any }
  | { op: 'set'; path: string; value: any }
  | { op: 'remove'; path: string }

export interface WccIssue {
  /** What is wrong (docs/errors.md). */
  kind: WccIssueKind
  /** 'error': the option is ignored or breaks the chart; 'warning': probably a mistake (open objects, licence hints). */
  severity: 'error' | 'warning'
  /** Dotted path of the offending option, arrays as `[i]`: `series[0].dta`. */
  path: string
  /** The same path as a JSON Pointer (RFC 6901). */
  pointer: string
  /** One sentence for a human or a model. */
  message: string
  /** How to fix it ("Did you mean plotOptions.radialColumn.aggregate?"), or null. */
  hint: string | null
  /** Best replacement: a path (unknown_option, deprecated), a value (invalid_value, type_mismatch) or a URL (license_required). */
  suggestion: any
  /** Further candidates, best first. */
  alternatives: any[]
  /** Machine-applicable fix (applyFixes), or null. */
  fix: WccFix | null
  /** CLI exit code of this issue: 0 (warning), 2 (schema/usage), 4 (licence). */
  exitCode: 0 | 2 | 4
}

export interface WccValidationResult {
  /** No issue with severity 'error'. */
  ok: boolean
  errors: number
  warnings: number
  /** exitCodeOf(issues). */
  exitCode: 0 | 1 | 2 | 4
  /** Package version of the schema the options were checked against. */
  schemaVersion: string
  issues: WccIssue[]
  /** Set when the validator itself failed (exitCode 1). */
  error?: string
}

export interface WccValidateOptions {
  /** true: premium is available; false: premium types give license_required; undefined: in a page, whether premium is installed, standalone: not checked. */
  premium?: boolean
  /** Stop after this many issues. Default: `200`. */
  maxIssues?: number
  /** Another schema (dist/schema/wcc-options.<version>.schema.json without docs). */
  schema?: object
  /** Optional registered-map metadata for pure validation outside the plugin. Browser plugin supplies it automatically. */
  mapMetadata?: { name?: string; ids?: string[]; keys: string[] } | null
}

export const EXIT: { ok: 0; internal: 1; usage: 2; notFound: 3; license: 4; conflict: 5; confirmation: 6 }
export const KINDS: WccIssueKind[]
export const LICENSE_URL: string
export function validate(options: any, opts?: WccValidateOptions): WccValidationResult
export function exitCodeOf(issues: WccIssue[] | WccValidationResult): 0 | 2 | 4
/** A deep copy of options with every issue's fix applied (functions are kept). */
export function applyFixes<T = any>(options: T, issues: WccIssue[]): T
/** The schema node of a dotted path, or null. */
export function schemaAt(path: string): object | null
/** The issues as console text. */
export function format(result: WccValidationResult, title?: string): string
export const plugin: ApexCharts.WestCoastChartsPlugin
declare const validatePlugin: ApexCharts.WestCoastChartsPlugin & {
  validate: typeof validate
  applyFixes: typeof applyFixes
  exitCodeOf: typeof exitCodeOf
  schemaAt: typeof schemaAt
  format: typeof format
  EXIT: typeof EXIT
}
export default validatePlugin
