# Section Header

2 variant Thickness dùng cho đầu section / page panel (map từ Untitled `TableCard.Header` + examples *Section header search input* / *Section header buttons*).

Docs: https://www.untitledui.com/react/components/section-headers  
Source tham chiếu: `components/application/table/table.tsx` (TableCardHeader), `table.demo.tsx`

---

## 2 variant (bắt buộc)

| Variant | Class modifier | Trailing |
|---------|----------------|----------|
| **Search input** | `.uu-section-header--search` | Input search `sm` + (tuỳ chọn) nút Filter |
| **Buttons** | `.uu-section-header--buttons` | Nút rời **hoặc** button group |

---

## Anatomy

```html
<header class="uu-section-header uu-section-header--buttons" data-uu-size="md">
  <div class="uu-section-header__leading">
    <div class="uu-section-header__title-row">
      <h2 class="uu-section-header__title">Team members</h2>
      <span class="uu-badge" data-uu-color="gray" data-uu-type="pill" data-uu-size="sm">100 users</span>
    </div>
    <p class="uu-section-header__desc">Manage your team…</p>
  </div>

  <div class="uu-section-header__actions" data-uu-actions-layout="buttons">
    <!-- xem bên dưới -->
  </div>
</header>
```

### Size

- `data-uu-size="md"` (default): padding `20px 24px` desktop
- `data-uu-size="sm"`: padding `16px 20px` desktop

---

## 1. Search input

```html
<header class="uu-section-header uu-section-header--search">
  …
  <div class="uu-section-header__actions">
    <div class="uu-field uu-input uu-section-header__search" data-uu-size="sm">
      <div class="uu-control uu-control--with-icon">
        <svg class="uu-input__icon uu-icon uu-icon--16">…</svg>
        <input class="uu-control__input" type="search" placeholder="Search" aria-label="Search" />
        <span class="uu-section-header__search-kbd" aria-hidden="true">⌘K</span>
      </div>
    </div>
    <button type="button" class="uu-button" data-uu-size="sm" data-uu-hierarchy="secondary-gray">Filters</button>
  </div>
</header>
```

- Search width desktop: **max 17.5rem** (`w-70` Untitled)
- Mobile: search **full width**, filter có thể full width bên dưới

---

## 2. Buttons — tùy chỉnh khi gene demo

Trailing dùng `data-uu-actions-layout` trên `.uu-section-header__actions`:

### `data-uu-actions-layout="buttons"` (mặc định)

Danh sách nút `.uu-button` riêng, `gap: 12px`, `data-uu-size="sm"`.

```html
<div class="uu-section-header__actions" data-uu-actions-layout="buttons">
  <div class="uu-section-header__buttons">
    <button type="button" class="uu-button" data-uu-size="sm" data-uu-hierarchy="secondary-gray">Import</button>
    <button type="button" class="uu-button" data-uu-size="sm" data-uu-hierarchy="primary">Add user</button>
  </div>
  <!-- button-group ẩn -->
  <div class="uu-button-group" data-uu-size="sm" role="group" hidden>…</div>
</div>
```

**Gene demo:** thêm/bớt nút, đổi hierarchy (`primary` / `secondary-gray`), icon leading trong `.uu-button`.

### `data-uu-actions-layout="button-group"`

Thay cụm nút bằng **segmented control** `.uu-button-group` (Untitled `base/button-group`).

```html
<div class="uu-section-header__actions" data-uu-actions-layout="button-group">
  <div class="uu-section-header__buttons" hidden>…</div>
  <div class="uu-button-group" data-uu-size="sm" role="group" aria-label="View">
    <button type="button" class="uu-button-group__item" aria-pressed="true">All</button>
    <button type="button" class="uu-button-group__item">Active</button>
    <button type="button" class="uu-button-group__item">Inactive</button>
  </div>
</div>
```

**Gene demo:** đổi label item, `aria-pressed` cho tab/view switcher, hoặc icon trong item.

> CSS tự ẩn block không dùng: `buttons` ẩn `.uu-button-group`, `button-group` ẩn `.uu-section-header__buttons`.

---

## Kết hợp Table + Pagination

Thứ tự khuyến nghị trong page ERP:

1. `.uu-section-header` (toolbar page)
2. `.uu-table-card` > table + footer `.uu-pagination--card-advanced`

Không nhét pagination vào section header.

---

## Files

- `components/section-header/section-header.css`
- `components/section-header/section-header-demo.html`
