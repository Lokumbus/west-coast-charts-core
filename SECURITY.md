# Security policy

## Supported versions

| Version | Security fixes |
| --- | --- |
| 1.x (current) | yes |
| pre-1.0 builds (`4.7.0-wcc.*`) | no, please upgrade |
| ApexCharts 4.7.0 and earlier (upstream) | not covered by this project |

Fixes are released as patch versions of the newest 1.x minor. When a fix
needs a breaking change, the advisory says so and names the migration.

## Reporting a vulnerability

Please **do not open a public issue** for a suspected vulnerability.

Report it privately through one of these channels:

- **Email:** `<security contact - to be filled in before the first public release>`
- **GitHub:** "Report a vulnerability" (private vulnerability reporting) on
  the repository's Security tab, once the public repository exists.

Please include:

- the affected version (`WestCoastCharts.version` or the package version)
  and entry (`west-coast-charts`, `/full`, `/types`, `/features/<name>`,
  `/premium`, ...);
- a minimal configuration or page that reproduces the problem;
- the impact you see (for example script execution, data leak, denial of
  service through a crafted config);
- whether the issue is already public.

You may write in English or German.

## What happens next

| Step | Target |
| --- | --- |
| Acknowledgement of your report | within 3 working days |
| First assessment (confirmed or not, severity) | within 10 working days |
| Fix or mitigation for confirmed high/critical issues | as fast as possible, aim 30 days |
| Public advisory (GitHub Security Advisory, CVE where it applies) and CHANGELOG entry | with the fixed release |

We credit reporters in the advisory unless you prefer not to be named.
Please give us a reasonable time to ship a fix before you publish details;
we will agree on a disclosure date with you.

Actively exploited vulnerabilities in a released version are reported to
the authorities where the EU Cyber Resilience Act requires it.

## Scope

In scope: everything published in the `west-coast-charts` npm package -
the core, `/full`, `/types`, `/features/*`, `/renderer-canvas`, `/premium`,
maps, locales and type definitions.

Typical issue classes:

- script injection (XSS) through series names, labels, categories,
  annotations, data tables, tooltips or exported SVG;
- formula injection in CSV export;
- crashes or hangs from malformed configs or data (denial of service);
- bypass of `chart.sanitizeHtml`;
- licence-key handling in the premium entry.

Out of scope:

- markup you pass through `chart.sanitizeHtml: false` or a custom
  sanitizer function (you opt out of our sanitizing there);
- HTML returned by your own formatters when sanitizing is turned off;
- the demo website and showcase pages, unless the same issue affects the
  library;
- vulnerabilities in ApexCharts 5.x or later (a different product; we do not
  use its code).

## How the library handles untrusted input

- Labels, names and categories are written as text, never as HTML.
- HTML is only accepted where the API documents it (formatter output,
  `tooltip.custom`, `legend.markers.customHTML`, ...). It is parsed in an
  inert `<template>` and sanitized unless `chart.sanitizeHtml` is `false`.
  Trusted Types are supported through the `west-coast-charts` policy.
- The library does not use `eval`, `new Function` or string timers.
- The published package has **no runtime dependencies**. The few MIT
  packages inlined into `dist/` are listed in `THIRD-PARTY-LICENSES.txt`
  and in the SBOM (`sbom/west-coast-charts.cdx.json`, CycloneDX 1.5).
- Past fixes are documented in `SECURITY-FIXES.md`.

## Release integrity

- `npm run sbom` regenerates the SBOM; `npm run pack:check` packs the
  package and checks entries, types and bundle isolation before a release.
- `npm audit --omit=dev` must report zero runtime vulnerabilities at release.
