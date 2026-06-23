# Notification (Toast)

Thông báo nổi (toast) của Untitled UI. Card trắng có shadow lớn, featured icon tròn theo màu trạng thái, title + supporting text + actions + nút đóng.

---

## Untitled properties overview

| Property | Values (exact) |
|----------|----------------|
| **Color** | `gray`, `brand`, `success`, `warning`, `error`, `info` |
| **Icon** | featured icon tròn (modern double-ring) |
| **Actions** | `None`, `Buttons`, `Link` |
| **Dismiss (X)** | `True`, `False` |

- **Component:** Application / Notifications
- **Brand accent:** `--brand-600` (#444CE7)

---

## Anatomy

| No. | Element | Display | Notes |
|-----|---------|---------|-------|
| 1 | `.uu-notification` (wrapper) | Required | radius `12px`, padding `16px`, `max-width: 400px`, shadow-lg |
| 2 | `.uu-notification__icon` | Required | Featured icon tròn `40px`, double ring theo màu |
| 3 | `.uu-notification__body` | Required | title + text + actions |
| 4 | `.uu-notification__title` | Required | **Text sm/Semibold** — `--text-primary` |
| 5 | `.uu-notification__text` | Optional | **Text sm/Regular** — `--text-tertiary` |
| 6 | `.uu-notification__actions` | Optional | `is-primary` cho action chính (brand) |
| 7 | `.uu-notification__close` | Optional | Nút X `28px`, icon `16px` |

---

## Specification

| Thuộc tính | Giá trị | Token |
|------------|---------|-------|
| Padding | 16px | `--spacing-xl` |
| Gap (icon ↔ body) | 16px | `--spacing-xl` |
| Gap title ↔ text | 4px | `--spacing-xs` |
| Actions margin-top | 8px | `--spacing-md` |
| Radius | 12px | `--radius-xl` |
| Featured icon | 40px tròn | `--radius-full` |
| Shadow | Shadow/lg | `0 12px 16px -4px rgba(10,13,18,.08), 0 4px 6px -2px rgba(10,13,18,.03)` |
| Max width | 400px | — |

### Color → featured icon (ring + icon)

| `data-uu-color` | Icon color | Ring color · subtle bg | Icon gợi ý |
|-----------------|------------|------------------------|------------|
| gray | `--icon-secondary` | `--border-primary` · `--background-secondary` | InfoCircle |
| brand | `--icon-brand` | `--border-brand` · `--background-brand-subtle` | InfoCircle |
| success | `--icon-success` | `--border-success` · `--background-success-subtle` | CheckCircle |
| warning | `--icon-warning` | `--border-warning` · `--background-warning-subtle` | AlertTriangle |
| error | `--icon-error` | `--border-error` · `--background-error-subtle` | AlertCircle |
| info | `--icon-info` | `--border-info` · `--background-info-subtle` | InfoCircle |

---

## CSS class contract (Thickness HTML)

```html
<div class="uu-notification" data-uu-color="success" role="status">
  <span class="uu-notification__icon"><!-- CheckCircle 20px --></span>
  <div class="uu-notification__body">
    <p class="uu-notification__title">Successfully saved!</p>
    <p class="uu-notification__text">Your changes have been saved to the cloud.</p>
    <div class="uu-notification__actions">
      <button type="button">Dismiss</button>
      <button type="button" class="is-primary">View changes</button>
    </div>
  </div>
  <button type="button" class="uu-notification__close" aria-label="Close"><!-- XClose 16px --></button>
</div>
```

---

*Thickness · Untitled UI FREE v2.0 · Component Notifications · Generated: 2026-06-22 · Icons: CheckCircle, AlertCircle, AlertTriangle, InfoCircle, XClose*
