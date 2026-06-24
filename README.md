<p align="center">
  <img src=".github/readme/images/layer5-light-no-trim.svg"  width="40%" alt="Layer5 Logo">
</p>

<h1 align="center">Academy Theme</h1>

<p align="center">
  Reusable Hugo theme module that powers the Layer5 Academy. This module provides
  the layouts, shortcodes, and partials to get academy up and running.
</p>

<p align="center">
  <a href="https://layer5.io">
    <img src="https://img.shields.io/badge/Layer5-Academy-00B39F?style=for-the-badge" alt="Layer5 Academy">
  </a>
  <a href="https://gohugo.io/">
    <img src="https://img.shields.io/badge/Hugo-Framework-FF4088?logo=hugo&logoColor=white&style=for-the-badge" alt="Hugo">
  </a>
  <a href="LICENSE">
  <img src="https://img.shields.io/badge/License-Apache%202.0-blue?style=for-the-badge" alt="Apache 2.0 License">
  </a>
</p>

## Getting Started

The recommended approach to use this theme is through the
[academy starter template](https://github.com/layer5io/academy-example).

For comprehensive documentation, visit the
[official Academy documentation](https://docs.layer5.io/cloud/academy/).

## Development Commands

Common make targets for developing the Academy theme:

- **Install necessary tools and modules**
  ```bash
  make setup
  ```

- **Start the local Hugo development server**
  ```bash
  make site
  ```

- **Build the site for production**
  ```bash
  make build
  ```

- **Build the site for local consumption with custom base URL**
  ```bash
  make build-preview
  ```

- **Clean the Hugo cache and restart local setup**
  ```bash
  make clean
  ```

- **Fix Markdown linting issues**
  ```bash
  make lint-fix
  ```

- **Verify Go is installed locally**
  ```bash
  make check-go
  ```

## Content Structure

The Academy uses the following content hierarchy:

### Learning Path → Course → Module

In addition to this core structure, the following content types are available:

- **Lab** - Hands-on practical exercises
- **Challenge** - Skill assessment challenges
- **Test** - Knowledge assessments (test, optional-test,
  final-test)
- **Certification** - Certification programs

### Where Content Should Live

Keep publishable Academy content and any org-specific supporting files inside
the organization directory. Files outside the org directory are not part of
the publishable Academy content tree. Validation catches these cases, and the
files may be skipped during publication or change shared site behavior in
unexpected ways.

Use this general layout:

```text
content/
  learning-paths/
    <org-id>/
      _index.md
      course-1/
        _index.md
        module-1/
          _index.md
  certifications/
    <org-id>/
      _index.md
  challenges/
    <org-id>/
      _index.md
layouts/
  shortcodes/
    <org-id>/
      *.html
static/
  <org-id>/
    ...
data/
  <org-id>/
    ...
```

Put org-specific content, shortcodes, static files, and data under the org
directory. If you place them elsewhere, the Academy may not publish them and
the build can emit warnings or break shared assumptions for other content.

Shared theme assets, icons, and reusable partials should stay in
academy-theme itself rather than in a consuming org repository.

## Quiz JSON contract

Quiz JSON emitted by the `test` layouts is normalized toward the
`meshery/schemas` academy Quiz contract. The generated JSON now uses
canonical quiz/question field names, numeric `timeLimit`, hyphenated question
types, and UUIDs for page, parent, question, and option IDs.

Authors can still keep front matter ergonomic:

- page, question, and option `id` values may stay short slugs;
- legacy snake_case quiz keys such as `pass_percentage`, `time_limit`,
  `max_attempts`, `correct_answer`, and `is_correct` are still accepted in
  front matter during the transition;
- emitted UUIDs are derived deterministically from the content file path plus
  the authored ID, so repeated builds produce stable values.

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
Hugo process, so incremental rebuilds reuse the same response. Rebuild the
site completely to refresh the cached registry API response for fresh ID
lookups.

The Instructor Toolkit surfaces the same build-generated report.

## Important Notes

⚠️ **Deprecated Features**

- The `usestatic` shortcode is deprecated and should not be used in new
  content.

## Contributor Guide and Resources

## Community & Contributions

We warmly welcome contributions of all kinds! Whether you're improving documentation, enhancing the theme, fixing bugs, or proposing new features, your contributions help make the Academy ecosystem better for everyone.

Before getting started, please review the project's [contributing guidelines][contrib].

Contributors are expected to follow the [CNCF Code of Conduct](https://github.com/cncf/foundation/blob/master/code-of-conduct.md).

### Helpful Resources

* 📚 Academy [documentation][docs], [example][example], and [theme][theme]
* 🎨 Layer5 [designs and wireframes][figma] in Figma ([open invite][figma-invite])
* 🙋🏾🙋🏼 Connect through the [Layer5 Discussion Forum][forum] and [Layer5 Community Slack][slack]

<p>
<a href="https://slack.layer5.io">

<picture align="right">
  <source media="(prefers-color-scheme: dark)" srcset=".github/readme/images/slack-dark-128.png">
  <source media="(prefers-color-scheme: light)" srcset=".github/readme/images/slack-128.png">
  <img src=".github/readme/images/slack-128.png"
       width="120"
       align="right"
       alt="Join Layer5 Slack">
</picture>

</a>

<a href="https://layer5.io/community">
  <img src=".github/readme/images/community.svg"
       width="140"
       align="left"
       style="margin-right:10px;"
       alt="Layer5 Community">
</a>

✔️ <strong>Join</strong> the Layer5 Slack Community.<br />
✔️ <strong>Discuss</strong> in the Community Forum.<br />
✔️ <strong>Explore</strong> the Community Handbook.<br />
✔️ <strong>Start</strong> with the Newcomer's Guide.<br />

</p>

<br clear="both" />

---

[contrib]: https://github.com/layer5io/academy-example/blob/master/CONTRIBUTING.md
[docs]: https://docs.layer5.io/cloud/academy/
[example]: https://github.com/layer5io/academy-example/
[theme]: https://github.com/layer5io/academy-theme/
[figma]: https://www.figma.com/file/5ZwEkSJwUPitURD59YHMEN/Layer5-Designs
[figma-invite]: https://www.figma.com/team_invite/redeem/GvB8SudhEOoq3JOvoLaoMs
[forum]: https://discuss.layer5.io
[slack]: http://slack.layer5.io

