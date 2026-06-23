# Progress

Thanh tiến độ & spinner loading theo [Untitled UI — Progress indicators](https://www.untitledui.com/react/components/progress-indicators).

**Source:** `untitleduico/react` → `components/base/progress-indicators/progress-indicators.tsx`

---

## Properties overview

| Variant | Class |
|---------|--------|
| Progress bar | `.uu-progress` + `.uu-progress__bar` |
| Progress sm | `.uu-progress.uu-progress--sm` |
| Spinner | `.uu-spinner` |

---

## Anatomy

### Progress bar

| Element | Notes |
|---------|-------|
| Track | `.uu-progress` — height 8px (sm: 6px), bg `--gray-200` |
| Fill | `.uu-progress__bar` — width % inline style, bg `--brand-600` |

### Spinner

| Element | Notes |
|---------|-------|
| `.uu-spinner` | 2rem, border 3px, top `--brand-600`, animation spin |

---

## Specification

| Property | Token / value |
|----------|----------------|
| Track radius | `--radius-sm` |
| Fill radius | `--radius-sm` |
| Max width (demo) | 20rem |
| Brand fill | `--brand-600` |

---

## HTML class contract

```html
<div class="uu-progress" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
  <div class="uu-progress__bar" style="width: 40%"></div>
</div>

<div class="uu-spinner" role="status" aria-label="Đang tải"></div>
```

- Implementation (demo chạy): `components/progress/progress.css`
- Demo: `components/progress/progress-demo.html`

---

*Thickness · Untitled UI · progress-indicators.tsx · Generated: 2026-05-27*
