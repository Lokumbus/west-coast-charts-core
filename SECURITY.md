# Security policy

This policy covers the publicly released WestCoast Charts Free Core repository and its published Core artifacts. It is not a security certification or a guarantee that every vulnerability will be found.

## Supported versions

The supported stable release line is **1.1.x**. Security fixes are prepared for the newest supported patch release. Pre-1.0 builds (`4.7.0-wcc.*`) are not supported; please upgrade. ApexCharts 4.7.0 and earlier are upstream software and are not covered by this project.

## Report a vulnerability

Use GitHub's [private vulnerability reporting form](https://github.com/Lokumbus/west-coast-charts-core/security/advisories/new) or email [service@pekagi.io](mailto:service@pekagi.io) with **Security report** in the subject. Include the affected package version or commit, component, observed impact, and a minimal reproduction where possible. Do not send licence keys, signing material, customer data, or other secrets. Please do not publish an unpatched report in a public issue.

A maintainer checks the email inbox on working days, records incoming reports for assessment, and aims to acknowledge a report within three business days and provide an initial assessment within ten business days. These are best-effort targets, not service guarantees; complex reports may take longer.

## Assessment and disclosure

Reports are assessed against the code and versions actually released. For inherited dependency issues, the assessment checks whether the relevant code is present, reachable, and affected. A confirmed public issue record includes affected versions, impact, evidence, status, and any fix and verification. Private reporter details and secrets are not published.

A GitHub Security Advisory is created only for a confirmed vulnerability affecting a public release when coordinated public disclosure is appropriate. Ordinary defects and unconfirmed reports use the normal issue process. Advisories and platform notifications require human review and approval; GitHub, npm, and Dependabot notifications depend on platform indexing and recipient settings and are not guaranteed delivery channels.

## Release approval

Automated agents may prepare changes and checks, but may not publish or deploy them. A human maintainer reviews and explicitly approves every agent-prepared package, security, runtime, or website publication. The release record identifies the reviewed source commit, artifact hashes, checks, approver, approval date, and destinations.

See the [maintenance and security policy](https://westcoast-charts.com/maintenance/) for the supported release line, public issue ledger fields, release evidence, and SBOM status.
