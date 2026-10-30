# WestCoast Charts Free Core 1.1.4

MIT, including commercial use. No account or key required. This is a stable distribution.

Install the exact Core version with npm:

```sh
npm install west-coast-charts@1.1.4
```

Alternatively, install the versioned GitHub release asset:

```sh
npm install https://github.com/Lokumbus/west-coast-charts-core/releases/download/v1.1.4/west-coast-charts-1.1.4.tgz
```

For an offline installation use `npm install ./west-coast-charts-1.1.4.tgz`.

Use `import WestCoastCharts from 'west-coast-charts/full'` for Core and all free plugins, or the lean `west-coast-charts/core` plus explicitly imported types/features. The UMD browser build is `dist/west-coast-charts.full.min.js`; open example.html locally. CommonJS and ES modules are supplied.

MIT validation and describe helpers are exported as `west-coast-charts/agent/validate` and `west-coast-charts/agent/describe`, with matching schemas under `west-coast-charts/schema/*.json`. Shared declarations/schemas include optional Premium vocabulary; no Premium renderer or Premium export is included.

No Premium/layer/map bundles, repository history, signer, credentials or commerce service are included. This is a ready-built distribution, not the full source/build repository. Preserve LICENSE, NOTICE and THIRD-PARTY-LICENSES.txt. Runtime and package files come from commit d999ea3db78e810ffee31877fa7c4b3824447dd9; SECURITY.md comes from public policy repository commit 19ca240fca29ea64e984fe32a464c45d6c11e8aa. PROVENANCE.json records both sources.

[Getting started](https://westcoast-charts.com/docs/getting-started/) · [Accessibility](https://westcoast-charts.com/docs/accessibility/) · [Theming](https://westcoast-charts.com/docs/theming/)
