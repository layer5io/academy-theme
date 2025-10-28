# GitHub Copilot Agents for Academy Theme

This document provides guidance for GitHub Copilot agents working on the
Layer5 Academy Theme repository.

## Repository Overview

This repository contains a reusable Hugo theme module that powers Layer5
Academy. It provides layouts, shortcodes, and partials to build educational
content sites using the Hugo static site generator.

**Technology Stack:**

- Hugo (extended version 0.146.0+)
- Node.js & npm
- Go modules
- PostCSS & Autoprefixer
- Docsy theme as a base

## Development Environment

### Prerequisites

- Go (latest version)
- Node.js and npm
- Hugo Extended (0.146.0 or later)

### Setup Commands

```bash
# Install dependencies
npm install

# Run the development server
make site

# Build the site
make build

# Clean cache and restart
make clean
```

## Project Structure

- `/layouts/` - Hugo layout templates
- `/assets/` - CSS, JavaScript, and other static assets
- `/archetypes/` - Content templates for different types of educational content
  (courses, modules, labs, tests, certifications)
- `/static/` - Static files
- `/i18n/` - Internationalization files
- `hugo.yaml` - Main Hugo configuration
- `package.json` - Node.js dependencies and build scripts

## Key Features

This theme supports several educational content types through archetypes:

- **Courses** - Top-level course containers
- **Learning Paths** - Structured learning sequences
- **Modules** - Course sections
- **Labs** - Hands-on practice exercises
- **Tests & Challenges** - Assessment components
- **Certifications** - Credential tracking

## Development Guidelines

### Making Changes

1. **Local Development**: When developing this theme locally, link it to a Hugo
   site (like [academy-example](https://github.com/layer5io/academy-example))
   using a `replace` directive in the site's `go.mod` file:

   ```go
   replace github.com/layer5io/academy-theme => ../academy-theme
   ```

2. **Testing**: Always test changes with an actual Academy site to ensure
   layouts and components work correctly.

3. **Code Style**:
   - Follow existing code patterns and conventions
   - Use meaningful commit messages
   - Keep changes minimal and focused

### Linting

To fix Markdown linting issues:

```bash
make lint-fix
```

This requires `markdownlint-cli2` (will be auto-installed if using npm).

## Common Tasks for Agents

### Adding New Layouts

- Review existing layouts in `/layouts/` for patterns
- Ensure consistency with the Docsy base theme
- Test with multiple content types

### Modifying Styles

- CSS/SCSS files are in `/assets/`
- PostCSS is configured via `postcss.config.js`
- Changes should be compatible with the theme's responsive design

### Creating New Archetypes

- Add new content type templates in `/archetypes/`
- Follow the naming convention: `{type}.md`
- Include appropriate front matter defaults

### Updating Dependencies

- Hugo modules: Update `hugo.yaml` and run `hugo mod get -u`
- Node packages: Update `package.json` and run `npm install`
- Always test after dependency updates

## Important Notes

### What NOT to Change

- Do not modify core Hugo/Docsy functionality unless absolutely necessary
- Avoid breaking changes that would affect existing Academy sites using this
  theme
- Do not commit `node_modules/`, `public/`, or `resources/` directories

### Security Considerations

- Report security vulnerabilities to <security-vulns-reports@layer5.io>
- Never commit secrets or credentials
- Review the [SECURITY.md](./SECURITY.md) file for full security policy

### Git Workflow

- Follow the git flow described in [CONTRIBUTING-gitflow.md](./CONTRIBUTING-gitflow.md)
- Create descriptive pull request titles
- Reference related issues in commits and PRs

## Testing Your Changes

Since this is a theme module, testing requires:

1. **Link to a test site**: Use the academy-example repository or create a test site
2. **Verify layouts render correctly**: Check all content types (courses,
   modules, labs, etc.)
3. **Test responsive design**: Ensure mobile and desktop views work
4. **Validate navigation**: Menu, breadcrumbs, and links should function properly
5. **Check build output**: Run `make build` to ensure no errors

## Resources

- **Main Documentation**: [Layer5 Academy Docs](https://docs.layer5.io/cloud/academy/)
- **Starter Template**: [academy-example](https://github.com/layer5io/academy-example)
- **Hugo Documentation**: [gohugo.io](https://gohugo.io/)
- **Docsy Theme**: [docsy.dev](https://www.docsy.dev/)
- **Contributing Guide**: [CONTRIBUTING.md](./CONTRIBUTING.md)

## Getting Help

- Check existing issues: [GitHub Issues](https://github.com/layer5io/academy-theme/issues)
- Review pull requests for examples
- Consult the Layer5 community on Slack
- Read the Hugo and Docsy documentation for theme development patterns

## Workflow Integration

This repository uses GitHub Actions for:

- Version bumping (`bump-academy-version.yml`)
- Labeling and PR management
- Slack notifications
- Release drafting

Ensure your changes don't break CI/CD workflows.
