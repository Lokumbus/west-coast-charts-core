# WestCoast Charts Free Core 1.1.6

MIT, including commercial use. No account or key required. This is a stable distribution.

1.1.6 is a metadata-only release: it adds npm `keywords` to `package.json`. All runtime, type, schema and locale files are byte-identical to 1.1.5 (built from the same source commit), so file banners and the options schema still read 1.1.5.

Install the exact Core version with npm:

```sh
npm install west-coast-charts@1.1.6
```

Alternatively, install the versioned GitHub release asset:

```sh
npm install https://github.com/Lokumbus/west-coast-charts-core/releases/download/v1.1.6/west-coast-charts-1.1.6.tgz
```

For an offline installation use `npm install ./west-coast-charts-1.1.6.tgz`.

Use `import WestCoastCharts from 'west-coast-charts/full'` for Core and all free plugins, or the lean `west-coast-charts/core` plus explicitly imported types/features. The UMD browser build is `dist/west-coast-charts.full.min.js`; open example.html locally. CommonJS and ES modules are supplied.

MIT validation and describe helpers are exported as `west-coast-charts/agent/validate` and `west-coast-charts/agent/describe`, with matching schemas under `west-coast-charts/schema/*.json`. Shared declarations/schemas include optional Premium vocabulary; no Premium renderer or Premium export is included.

No Premium/layer/map bundles, repository history, signer, credentials or commerce service are included. This is a ready-built distribution, not the full source/build repository. Preserve LICENSE, NOTICE and THIRD-PARTY-LICENSES.txt. Runtime and package files come from commit 95f093ba8d388c579d9f94701d3322c728c77632; SECURITY.md comes from public policy repository commit 19ca240fca29ea64e984fe32a464c45d6c11e8aa. PROVENANCE.json records both sources.

[Getting started](https://westcoast-charts.com/docs/getting-started/) · [Accessibility](https://westcoast-charts.com/docs/accessibility/) · [Theming](https://westcoast-charts.com/docs/theming/)

## Designations

ApexCharts, react-apexcharts, vue3-apexcharts and ng-apexcharts are designations of Apex Software, Inc., which states it is a subsidiary of Infragistics, Inc. WestCoast Charts is an independent product of WestCoast Software (Inh. Peter Kannengießer) and is not affiliated with, sponsored or endorsed by Apex Software, Inc. or Infragistics, Inc. Parts of WestCoast Charts are based on ApexCharts 4.7.0, released under the MIT License (Copyright (c) 2018 ApexCharts). "ApexCharts-compatible" means that WestCoast Charts largely supports the configuration options of ApexCharts 4.7.0; differences are listed in the migration guide.
