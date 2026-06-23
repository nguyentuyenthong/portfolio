# Thickness Components

**Quy tắc & workflow:** **[`../rules/`](../rules/)** — **[typography-map.md](../rules/typography-map.md)** (Tailwind→Thickness), **[typography.md](../rules/typography.md)**, **[component-workflow.md](../rules/component-workflow.md)**.

**Agents:** đọc [`../../AGENTS.md`](../../AGENTS.md) · Skills: `.cursor/skills/thickness-*` · Index: [`registry.index.json`](registry.index.json)

## Cấu trúc

```
components/
  <name>/
    <name>.md      # spec handoff (designer / dev / AI) — format mẫu: button.md
    <name>.css     # CSS chạy demo browser (*-demo.html, page demo import)
    <name>-demo.html
  _shared/
    field.css
    icon.css       # quy tắc: rules/icons.md
    demo-shell.css
  registry.index.json       # Agent entry — đọc đầu tiên
  registry.base.json
  registry.catalog.json     # Full Untitled catalog (pending/generated)
  registry.portfolio.json   # Wave 1: nav, hero, card, footer
  _shared/icons/
    registry.json           # Icon names + SVG snippets
    icons-demo.html
    icons.js
```

### Portfolio patterns (Wave 1)

`site-nav` · `hero-section` · `project-card` · `site-footer` — demo: [`../demo/portfolio/portfolio.html`](../demo/portfolio/portfolio.html) · React: [`../react/`](../react/)

## Demo index

Mở [`../demo/index.html`](../demo/index.html).

**Icons gallery** (1.179 icon): [`components/_shared/icons/icons-demo.html`](components/_shared/icons/icons-demo.html) — search + copy tên. Cập nhật: `npm run sync:icons` (từ `Portfolio/`).

## Nguồn Untitled UI

[untitleduico/react](https://github.com/untitleduico/react) · Icons: [untitledui.com/resources/icons](https://www.untitledui.com/resources/icons)
