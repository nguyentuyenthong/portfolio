# Alert

Banner phản hồi inline (thông báo trong trang) của Untitled UI. Card trắng + icon màu theo trạng thái + title + supporting text + actions + nút đóng.

---

## Figma / Untitled properties overview

| Property | Values (exact) |
|----------|----------------|
| **Color** | `gray`, `brand`, `success`, `warning`, `error`, `info` |
| **Icon** | `True`, `False` |
| **Actions** | `None`, `Buttons`, `Link` |
| **Dismiss (X)** | `True`, `False` |

- **Component:** Application / Alerts
- **Brand accent:** `--brand-600` (#444CE7)

---

## Anatomy

| No. | Element | Display | Notes |
|-----|---------|---------|-------|
| 1 | `.uu-alert` (wrapper) | Required | `border-radius: 12px`, padding `16px`, viền `1px`, nền trắng |
| 2 | `.uu-alert__icon` | Optional | Icon `20px`, màu theo `data-uu-color` |
| 3 | `.uu-alert__body` | Required | Cột: title + text + actions |
| 4 | `.uu-alert__title` | Required | **Text sm/Semibold** — 14 / 20 / 600 |
| 5 | `.uu-alert__text` | Optional | **Text sm/Regular** — màu `--text-secondary` |
| 6 | `.uu-alert__actions` | Optional | Hàng link/button, gap `12px`, margin-top `8px` |
| 7 | `.uu-alert__close` | Optional | Nút X `28px`, icon `16px` |

---

## Specification

### Layout → token

| Thuộc tính | Giá trị | Token Thickness |
|------------|---------|-----------------|
| Padding | 16px | `--spacing-xl` |
| Gap (icon ↔ body) | 12px | `--spacing-lg` |
| Gap title ↔ text | 4px | `--spacing-xs` |
| Actions gap | 12px | `--spacing-lg` |
| Actions margin-top | 8px | `--spacing-md` |
| Radius | 12px | `--radius-xl` |
| Border | 1px | `--width-border-thin` |
| Shadow | Shadow/xs | `0 1px 2px rgba(10,13,18,.05)` |

### Color → icon + border + actions

| `data-uu-color` | Border | Icon color | Icon gợi ý |
|-----------------|--------|------------|------------|
| gray | `--border-secondary` | `--icon-secondary` | AlertCircle |
| brand | `--border-brand` | `--icon-brand` | InfoCircle |
| success | `--border-success` | `--icon-success` | CheckCircle |
| warning | `--border-warning` | `--icon-warning` | AlertTriangle |
| error | `--border-error` | `--icon-error` | AlertCircle |
| info | `--border-info` | `--icon-info` | InfoCircle |

### Typography → token

| Element | Untitled / Tailwind | Token Thickness |
|---------|---------------------|-----------------|
| Title | `text-sm font-semibold text-primary` | `--font-size-text-sm` + `--font-weight-semibold` + `--text-primary` |
| Text | `text-sm text-secondary` | `--font-size-text-sm` + `--text-secondary` |
| Action | `text-sm font-semibold` | `--font-size-text-sm` + `--font-weight-semibold` (màu theo color) |

---

## CSS class contract (Thickness HTML)

```html
<div class="uu-alert" data-uu-color="success" role="status">
  <span class="uu-alert__icon"><!-- CheckCircle 20px --></span>
  <div class="uu-alert__body">
    <p class="uu-alert__title">Successfully updated</p>
    <p class="uu-alert__text">Your changes have been saved.</p>
    <div class="uu-alert__actions">
      <button type="button">Dismiss</button>
      <a href="#">View changes</a>
    </div>
  </div>
  <button type="button" class="uu-alert__close" aria-label="Close"><!-- XClose 16px --></button>
</div>
```

- **Handoff:** file này (`alert.md`)
- **Browser demo:** `alert.css` + `alert-demo.html`

---

*Thickness · Untitled UI FREE v2.0 · Component Alert · Generated: 2026-06-22 · Icons: AlertCircle, CheckCircle, AlertTriangle, InfoCircle, XClose*
