# Loading Indicator

Vòng quay tải của Untitled UI (`Application/LoadingIndicator`). SVG xoay, màu brand trên track xám, có label tuỳ chọn bên dưới.

---

## Untitled properties overview

| Property | Values (exact) |
|----------|----------------|
| **Type** | `line-simple`, `line-spinner`, `dot-circle` |
| **Size** | `sm`, `md`, `lg`, `xl` |
| **Label** | text tuỳ chọn |

- **Component:** Application / LoadingIndicator · React `components/application/loading-indicators/loading-indicator.tsx`

---

## Anatomy

| No. | Element | Display | Notes |
|-----|---------|---------|-------|
| 1 | `.uu-loading` (wrapper) | Required | Cột, căn giữa, gap `16px` (xl = `20px`) |
| 2 | `.uu-loading__spinner` | Required | SVG `animation: spin 0.8s linear infinite` |
| 3 | `.uu-loading__track` | line-simple | Vòng nền — `--background-tertiary` (gray-100) |
| 4 | `.uu-loading__arc` | Required | Cung brand — `--brand-600` |
| 5 | `.uu-loading__label` | Optional | Text sm (sm/md) hoặc text lg (lg/xl) — `--text-secondary` |

---

## Specification

| Size | Spinner | Label | Gap |
|------|---------|-------|-----|
| sm | 32px | Text sm/Medium | 16px |
| md | 48px | Text sm/Medium | 16px |
| lg | 56px | Text lg/Medium | 16px |
| xl | 64px | Text lg/Medium | 20px |

| Phần | Untitled | Token Thickness |
|------|----------|-----------------|
| Track | `text-bg-tertiary` | `--background-tertiary` |
| Arc | `stroke-fg-brand-primary` | `--brand-600` |
| Label | `text-secondary` | `--text-secondary` |

- `prefers-reduced-motion`: animation chậm lại còn 2s.

---

## CSS class contract (Thickness HTML)

```html
<div class="uu-loading" data-uu-size="md" role="status" aria-label="Loading">
  <svg class="uu-loading__spinner" viewBox="0 0 32 32" fill="none">
    <circle class="uu-loading__track" cx="16" cy="16" r="14" stroke-width="4" />
    <circle class="uu-loading__arc" cx="16" cy="16" r="14" stroke-width="4"
      stroke-dasharray="100" stroke-dashoffset="75" stroke-linecap="round" />
  </svg>
  <span class="uu-loading__label">Loading…</span>
</div>
```

---

*Thickness · Untitled UI FREE v2.0 · LoadingIndicator (`components/application/loading-indicators/loading-indicator.tsx`) · Generated: 2026-06-22*
