# Metric Card

Thẻ chỉ số (KPI) của Untitled UI (`Application/Metrics`): title + giá trị lớn + chỉ báo thay đổi (tăng/giảm). Tuỳ chọn featured icon và menu "more".

---

## Untitled properties overview

| Property | Values (exact) |
|----------|----------------|
| **Type** | `simple`, `icon` |
| **Trend** | `positive`, `negative` |
| **More menu** | `True`, `False` |

- **Component:** Application / Metrics · React `components/application/metrics/metrics.tsx`
- **Brand accent:** `--brand-600` (#444CE7)

---

## Anatomy

| No. | Element | Display | Notes |
|-----|---------|---------|-------|
| 1 | `.uu-metric` (card) | Required | radius `12px`, padding `24px`, inset ring `--border-secondary` |
| 2 | `.uu-metric__top` | Required | title (+ featured icon) ↔ more menu |
| 3 | `.uu-metric__icon` | type=icon | Featured icon `48px`, bg `--background-brand-subtle` |
| 4 | `.uu-metric__title` | Required | Text md/Semibold — `--text-tertiary` |
| 5 | `.uu-metric__value` | Required | Display sm (30px) semibold + `tabular-nums` |
| 6 | `.uu-metric__change` | Optional | Badge tăng/giảm + nhãn "vs last month" |
| 7 | `.uu-metric__more` | Optional | Nút DotsVertical `20px` |

---

## Specification

| Thuộc tính | Giá trị | Token |
|------------|---------|-------|
| Padding | 24px | `--spacing-3xl` |
| Gap (top ↔ bottom) | 24px | `--spacing-3xl` |
| Radius | 12px | `--radius-xl` |
| Value | Display sm (30 / 38 / 600) | `--font-size-display-sm` + `--font-weight-semibold` |
| Title | Text md/Semibold | `--text-tertiary` |

### Trend → màu badge

| `data-uu-trend` | Badge color | Icon |
|-----------------|-------------|------|
| positive | `--text-success` | ArrowUp / TrendUp01 |
| negative | `--text-error` | ArrowDown / TrendDown01 |

### Type icon → featured icon

| Phần | Token |
|------|-------|
| Featured icon bg | `--background-brand-subtle` (`--brand-50`) |
| Featured icon color | `--icon-brand` (`--brand-600`) |
| Radius | `--radius-lg` (10px) |

---

## CSS class contract (Thickness HTML)

```html
<div class="uu-metric" data-uu-trend="positive" data-uu-type="simple">
  <div class="uu-metric__top">
    <p class="uu-metric__title">Total revenue</p>
    <button class="uu-metric__more" aria-label="More"><!-- DotsVertical --></button>
  </div>
  <div class="uu-metric__bottom">
    <p class="uu-metric__value">$72,540</p>
    <span class="uu-metric__change">
      <span class="uu-metric__change-badge"><!-- ArrowUp -->12%</span>
      vs last month
    </span>
  </div>
</div>
```

---

*Thickness · Untitled UI FREE v2.0 · Metrics (`components/application/metrics/metrics.tsx`) · Generated: 2026-06-22 · Icons: ArrowUp, ArrowDown, TrendUp01, TrendDown01, DotsVertical*
