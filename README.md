# WestCoast Charts Free Core 1.1.3

MIT, including commercial use. No account or key required. This is a stable distribution.

Install the exact Core version with npm:

```sh
npm install west-coast-charts@1.1.3
```

Alternatively, install the versioned GitHub release asset:

```sh
npm install https://github.com/Lokumbus/west-coast-charts-core/releases/download/v1.1.3/west-coast-charts-1.1.3.tgz
```

For an offline installation use `npm install ./west-coast-charts-1.1.3.tgz`.

Use `import WestCoastCharts from 'west-coast-charts/full'` for Core and all free plugins, or the lean `west-coast-charts/core` plus explicitly imported types/features. The UMD browser build is `dist/west-coast-charts.full.min.js`; open example.html locally. CommonJS and ES modules are supplied.

MIT validation and describe helpers are exported as `west-coast-charts/agent/validate` and `west-coast-charts/agent/describe`, with matching schemas under `west-coast-charts/schema/*.json`. Shared declarations/schemas include optional Premium vocabulary; no Premium renderer or Premium export is included.

No Premium/layer/map bundles, repository history, signer, credentials or commerce service are included. This is a ready-built distribution, not the full source/build repository. Preserve LICENSE, NOTICE and THIRD-PARTY-LICENSES.txt. Runtime and package files come from commit a4cc352cc8834b3bb9364df43b7838377257bd16; SECURITY.md comes from public policy repository commit 8c6afc07e655818c64ce0c9e41209cb6fb2b5ff9. PROVENANCE.json records both sources.

[Getting started](https://westcoast-charts.com/docs/getting-started/) · [Accessibility](https://westcoast-charts.com/docs/accessibility/) · [Theming](https://westcoast-charts.com/docs/theming/)
