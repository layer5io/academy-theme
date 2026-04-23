# Academy Theme

Reusable Hugo theme module that powers the Layer5 Academy. This module provides
the layouts, shortcodes, and partials to get academy up and running.

## Getting Started

The recommended approach to use this theme is through the
[academy starter template](https://github.com/layer5io/academy-example).

For comprehensive documentation, visit the
[official Academy documentation](https://docs.layer5.io/cloud/academy/).

## Content Structure

The Academy uses the following content hierarchy:

### Learning Path → Course → Module

In addition to this core structure, the following content types are available:

- **Lab** - Hands-on practical exercises
- **Challenge** - Skill assessment challenges
- **Test** - Knowledge assessments (test, optional-test,
  final-test)
- **Certification** - Certification programs

## ID Validation

The theme checks publishable root Academy content during Hugo builds and emits
warnings by default. This is intentionally warning-first so authors can keep
working locally while still seeing what needs to be fixed before publication.

Configure the shared registry URL in the theme, and set the Instructor Console
URL in each content repo:

```yaml
params:
  academy:
    registryURL: "<shared-academy-registry-api-url>"
    consoleURL: "<per-repo-instructor-console-url>"
    validationMode: warn
```

The registry URL is the same for all Academy sites. The console URL varies by
domain, so each content repo should set its own value. For example, Exoscale
uses `https://exoscale.layer5.io/academy/instructors-console`, while Meshery
uses `https://cloud.meshery.io/academy/instructors-console`.

Supported `validationMode` values:

- `warn` keeps builds running and prints actionable warnings.
- `error` fails only for broken publishable content, for stricter CI use.
- `off` suppresses content health warnings and skips registry lookups.

Registry lookups are scoped to root learning paths, challenges, and
certifications. Draft root content is not warning-producing and is hidden from
the Instructor Toolkit report. Nested course/module/page/test IDs are not
checked against the Cloud curriculum registry.

If `params.academy.registryURL` is not configured, the build prints one
configuration warning and does not report existing IDs as invalid because they
have not been checked against the registry.

The registry response is cached once per org and registry URL in Hugo's site
store during a build. The remote response uses a cache key scoped to the current
Hugo process, so incremental rebuilds reuse the same response without relying on
Hugo's default permanent `getresource` cache. Restart Hugo to force a fresh
registry lookup during local authoring.

The Instructor Toolkit surfaces the same build-generated report.

## Important Notes

⚠️ **Deprecated Features**

- The `usestatic` shortcode is deprecated and should not be used in new
  content.

## Contributor Guide and Resources

- 📚 [Instructions for contributing to academy-example][contrib]
  - Academy-template [documentation][docs], [example][example], and
    [theme][theme]
- 🎨 Wireframes and [designs for Layer5 site][figma] in Figma
  ([open invite][figma-invite])
- 🙋🏾🙋🏼 Questions: [Layer5 Discussion Forum][forum] and
  [Layer5 Community Slack][slack]

[contrib]: https://github.com/layer5io/academy-example/blob/master/CONTRIBUTING.md
[docs]: https://docs.layer5.io/cloud/academy/
[example]: https://github.com/layer5io/academy-example/
[theme]: https://github.com/layer5io/academy-theme/
[figma]: https://www.figma.com/file/5ZwEkSJwUPitURD59YHMEN/Layer5-Designs
[figma-invite]: https://www.figma.com/team_invite/redeem/GvB8SudhEOoq3JOvoLaoMs
[forum]: https://discuss.layer5.io
[slack]: http://slack.layer5.io
