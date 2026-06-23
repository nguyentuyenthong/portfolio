# Badge

Nhãn trạng thái / metadata ngắn (read-only) theo [Untitled UI — Badges](https://www.untitledui.com/react/components/badges).

**Source:** `untitleduico/react` → `components/base/badges/badges.tsx`

---

## Properties

| Property | Values |
|----------|--------|
| `data-uu-type` | `pill` (default), `badge` |
| `data-uu-size` | `sm`, `md`, `lg` |
| `data-uu-color` | `gray`, `brand`, `success`, `warning`, `error`, `info` |
| Dot | `.uu-badge__dot` (optional) |

---

## Typography & padding

| Size | Font | Line height | Pill padding |
|------|------|-------------|--------------|
| sm | **12px** | 18px | `2px 8px` |
| md | **14px** | 20px | `2px 10px` |
| lg | **16px** | 24px | `4px 12px` |

Type `badge`: padding ngang hẹp hơn một chút, radius `sm` (md/lg dùng `radius-md` cho lg).

---

## Color (subtle — branding Thickness)

| Color | Background | Text | Border |
|-------|------------|------|--------|
| gray | `--gray-50` | `--gray-700` | `--gray-200` |
| brand | `--brand-50` | `--brand-700` | `--brand-200` |
| success | `--success-50` | `--success-700` | `--success-200` |
| warning | `--warning-50` | `--warning-700` | `--warning-200` |
| error | `--error-50` | `--error-700` | `--error-200` |
| info | `--info-50` | `--info-700` | `--info-200` |

---

## HTML

```html
<span class="uu-badge" data-uu-type="pill" data-uu-size="md" data-uu-color="success">
  <span class="uu-badge__dot" aria-hidden="true"></span>
  Hoạt động
</span>
```

---

## Khi nào dùng Badge vs Tag

Xem **`rules/tags-and-badges.md`** (bảng phân biệt + gợi ý size theo ngữ cảnh / table / mobile).

---

## Files

- `components/badge/badge.css`
- `components/badge/badge-demo.html`
