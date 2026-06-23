# Empty State

Trạng thái rỗng của Untitled UI (`Application/EmptyState`): featured icon + title + description + footer actions. Dùng cho danh sách trống, không có kết quả tìm kiếm, chưa có dữ liệu.

---

## Untitled properties overview

| Property | Values (exact) |
|----------|----------------|
| **Size** | `sm`, `md`, `lg` |
| **Media** | `FeaturedIcon`, `Illustration`, `FileTypeIcon`, `Avatar` |
| **Footer** | actions (buttons), optional |

- **Component:** Application / EmptyState · React `components/application/empty-state/empty-state.tsx`

---

## Anatomy

| No. | Element | Display | Notes |
|-----|---------|---------|-------|
| 1 | `.uu-empty-state` (wrapper) | Required | Cột, căn giữa, `max-width: 32rem` |
| 2 | `.uu-empty-state__header` | Required | Bọc media (featured icon) |
| 3 | `.uu-empty-state__icon` | Optional | Featured icon `48px` (sm/md) / `56px` (lg) |
| 4 | `.uu-empty-state__content` | Required | title + description, `max-width: 22rem` |
| 5 | `.uu-empty-state__title` | Required | Text md/lg/xl theo size |
| 6 | `.uu-empty-state__text` | Optional | Text sm / md (lg) — `--text-tertiary` |
| 7 | `.uu-empty-state__footer` | Optional | Hàng nút, gap `12px` |

---

## Specification (Untitled mapping)

| Size | Title | Description | Featured icon | Content gap / mb | Header mb |
|------|-------|-------------|---------------|------------------|-----------|
| sm | Text md (16) semibold | Text sm (14) | 48px / icon 24 | 4px / 24px | 16px |
| md | Text lg (18) semibold | Text sm (14) | 48px / icon 24 | 8px / 32px | 20px |
| lg | Text xl (20) semibold | Text md (16) | 56px / icon 28 | 8px / 32px | 20px |

### Token map

| Thuộc tính | Token |
|------------|-------|
| Featured icon radius | `--radius-lg` (10px) |
| Featured icon bg | `--surface-default` + inset ring `--border-primary` |
| Icon color | `--icon-secondary` |
| Title color | `--text-primary` |
| Description color | `--text-tertiary` |
| Footer gap | `--spacing-lg` (12px) |

---

## CSS class contract (Thickness HTML)

```html
<div class="uu-empty-state" data-uu-size="md">
  <div class="uu-empty-state__header">
    <span class="uu-empty-state__icon"><!-- SearchLg 24px --></span>
  </div>
  <div class="uu-empty-state__content">
    <p class="uu-empty-state__title">No projects found</p>
    <p class="uu-empty-state__text">Your search did not match any projects. Try again or create a new project.</p>
  </div>
  <div class="uu-empty-state__footer">
    <button class="uu-button" data-uu-size="md" data-uu-hierarchy="secondary-gray">Clear search</button>
    <button class="uu-button" data-uu-size="md" data-uu-hierarchy="primary">New project</button>
  </div>
</div>
```

---

*Thickness · Untitled UI FREE v2.0 · EmptyState (`components/application/empty-state/empty-state.tsx`) · Generated: 2026-06-22 · Icons: SearchLg, FileX02, Plus*
