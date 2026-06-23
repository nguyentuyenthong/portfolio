# Utility button

Nút icon-only (refresh, menu, đóng…) theo [Untitled UI — Utility buttons](https://www.untitledui.com/react/components/buttons).

**Source:** `untitleduico/react` → `components/base/buttons/button-utility.tsx`

---

## Properties overview

| Property | Values |
|----------|--------|
| **Size** | `xs`, `sm` |
| **Color** | `secondary` (filled shell), `tertiary` (ghost) |
| **State** | default, hover, focus-visible, disabled |

---

## Anatomy

| Element | Notes |
|---------|-------|
| Button | `.uu-utility-btn` — padding 6px, radius 6px |
| Icon | SVG 16px (`xs`) hoặc 20px (`sm`) — `rules/icons.md` |

---

## Specification

### Color × state

| Color | Default | Hover |
|-------|---------|-------|
| secondary | bg `--field-default`, border `--field-border-default`, shadow xs | bg `--field-hover`, icon `--icon-primary` |
| tertiary | transparent | bg `--field-hover`, icon `--icon-primary` |

### Focus / disabled

| State | Style |
|-------|--------|
| focus-visible | outline 2px `--brand-500`, offset 2px |
| disabled | opacity 0.5, `not-allowed` |

### Toolbar ERP (desktop)

- Refresh trong page header: `data-uu-size="sm"` `data-uu-color="secondary"`
- Có thể set width/height 40px trong page spec nếu mockup yêu cầu vuông lớn hơn

---

## HTML class contract

```html
<button type="button" class="uu-utility-btn" data-uu-size="sm" data-uu-color="secondary" aria-label="Làm mới">
  <!-- SVG 20px, stroke 1.5 -->
</button>
```

- Implementation (demo chạy): `components/utility-button/utility-button.css`
- Demo: `components/utility-button/utility-button-demo.html`

---

*Thickness · Untitled UI · button-utility.tsx · Generated: 2026-05-27*
