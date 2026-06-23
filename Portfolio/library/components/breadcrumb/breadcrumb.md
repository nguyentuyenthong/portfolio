# Breadcrumb (MDI tab strip)

Thanh tab MDI desktop ERP: các tab **liền nhau** (không spacing), viền dọc giữa tab, mỗi tab có **Close (X)**, cuối dãy có nút **+** thêm tab.

**Tách biệt** với `page-panel` và với `app-user-bar` (avatar + tên).

## Anatomy

| Part | Class |
|------|--------|
| Root | `.uu-breadcrumb` |
| Track (scroll ngang) | `.uu-breadcrumb__track` |
| Tab | `.uu-breadcrumb__tab` · modifier `--active` |
| Label | `.uu-breadcrumb__label` |
| Close | `.uu-breadcrumb__close` |
| Add | `.uu-breadcrumb__add` |

## States

| State | Màu chữ / icon close |
|-------|------------------------|
| Inactive | `--text-tertiary` |
| Active | `--text-brand` (Thickness branding) |

## Usage

```html
<nav class="uu-breadcrumb" aria-label="Breadcrumb">
  <div class="uu-breadcrumb__track" role="tablist">
    <div class="uu-breadcrumb__tab" role="tab" aria-selected="false">
      <span class="uu-breadcrumb__label">Loại hình khách hàng</span>
      <button type="button" class="uu-breadcrumb__close" aria-label="Đóng tab Loại hình khách hàng">…</button>
    </div>
    <div class="uu-breadcrumb__tab uu-breadcrumb__tab--active" role="tab" aria-selected="true">
      <span class="uu-breadcrumb__label">Giá bán</span>
      <button type="button" class="uu-breadcrumb__close" aria-label="Đóng tab Giá bán">…</button>
    </div>
  </div>
  <button type="button" class="uu-breadcrumb__add" aria-label="Thêm tab">+</button>
</nav>
```

## Demo

`demo/gia-ban/gia-ban.html`

*Thickness · breadcrumb · 2026-06-01*
