# Tag

Chip có thể đóng (filter / multi-select) theo [Untitled UI — Tags](https://www.untitledui.com/react/components/tags).

**Source:** `untitleduico/react` → `components/base/tags/tags.tsx`, `tag-close-x.tsx`

**Thickness chỉ gene:** Sizes + Close X. Không gene: count, checkbox, avatar, dot.

---

## Properties

| Property | Values |
|----------|--------|
| `data-uu-size` | `sm` (default), `md`, `lg` |
| `data-uu-color` | `gray` (default shell), `brand` (branding Thickness) |
| Close | `.uu-tag__close` + icon X (SVG) |

---

## Typography & padding (map Untitled)

| Size | Font | Line height | Padding (no close) |
|------|------|-------------|----------------------|
| sm | **12px** (`0.75rem`) | 18px | `3px 8px` |
| md | **14px** (`0.875rem`) | 20px | `2px 9px` |
| lg | **16px** (`1rem`) | 24px | `4px 10px` |

Có Close X: `padding-right` thêm ~4px; nút close padding/icon theo size (xem `tag.css`).

---

## Branding color

| `data-uu-color` | Background | Text | Border |
|-----------------|------------|------|--------|
| (default) | `--surface-default` | `--text-secondary` | `--border-secondary` |
| `brand` | `--brand-50` | `--brand-700` | `--brand-200` |
| `gray` | `--gray-50` | `--gray-700` | `--gray-200` |

Close hover: `--brand-100` / `--brand-600`. Focus ring: `--brand-500`.

---

## HTML

### Label only

```html
<span class="uu-tag" data-uu-size="md" data-uu-color="brand">Design</span>
```

### Close X

```html
<span class="uu-tag" data-uu-size="md" data-uu-color="brand">
  Design
  <button type="button" class="uu-tag__close" aria-label="Xóa tag Design">
    <svg class="uu-icon uu-icon--16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
  </button>
</span>
```

### Danh sách filter

```html
<div class="uu-tag-list" role="list" aria-label="Bộ lọc đang chọn">
  <!-- các .uu-tag -->
</div>
```

---

## Files

- `components/tag/tag.css`
- `components/tag/tag-demo.html`
- Quy tắc Tags vs Badges: `rules/tags-and-badges.md`
