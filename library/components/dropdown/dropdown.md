# Dropdown

Menu ngữ cảnh / action list theo [Untitled UI — Dropdowns](https://www.untitledui.com/react/components/dropdowns).

**Source:** `untitleduico/react` → `components/base/dropdown/dropdown.tsx`

---

## Anatomy

| Element | Class | Notes |
|---------|-------|-------|
| Root (optional) | `.uu-dropdown` | `position: relative` — bọc trigger + menu khi cần |
| Menu | `.uu-dropdown__menu` | `role="menu"`, panel trắng + shadow |
| Section | `.uu-dropdown__section` | Nhóm item; có thể có hoặc không title |
| Title | `.uu-dropdown__title` | Nhãn section — **màu nhạt hơn item** |
| Item | `.uu-dropdown__item` | `role="menuitem"` — nút `button` hoặc tương đương |
| Divider | `.uu-dropdown__divider` | `hr` hoặc `role="separator"` giữa section |

---

## Spacing (bắt buộc)

| Khoảng cách | Giá trị | Token / CSS |
|-------------|---------|-------------|
| Title → item đầu trong section | **4px** | `margin-bottom` trên `.uu-dropdown__title` → `var(--spacing-xs)` |
| Item → item trong cùng section | **0px** | Không `margin`/`gap` giữa các `.uu-dropdown__item` |
| Section → divider → section | **4px + line + 4px** | `.uu-dropdown__divider { margin: var(--spacing-xs) 0; }` |
| Section → section (không divider) | **12px** | `.uu-dropdown__section + .uu-dropdown__section` → `var(--spacing-lg)` |

> **Bộ lọc:** mỗi nhóm = section + `hr.uu-dropdown__divider` trước section kế (trừ nhóm đầu).

---

## Typography & color

| Phần | Font | Màu chữ |
|------|------|-----------|
| Title | **10px** (`0.625rem`), `font-weight: 600` | `--gray-400` (nhạt hơn item `--text-secondary`) |
| Item | **14px** (`text-sm`), `font-weight: 500` | `--text-secondary` |
| Item hover / focus | — | `--text-brand` trên `--background-brand-subtle` |
| Item active / selected | — | `--brand-700` trên `--brand-50` |

Item padding: `8px 10px` (`var(--spacing-md)` × 10px). Menu padding panel: `6px` (ngang).

---

## States (item)

| State | Hành vi |
|-------|---------|
| Default | Nền trong suốt, chữ `--text-secondary` |
| Hover / `:focus-visible` | Nền brand subtle, chữ brand |
| Active / `aria-selected="true"` | Nền `--brand-50`, chữ `--brand-700` |
| Disabled | `disabled` hoặc `.uu-dropdown__item--disabled` — opacity 0.5, không tương tác |

---

## Khi nào dùng (gene UI demo)

| Ngữ cảnh | Gợi ý |
|----------|--------|
| Menu ⋮ trên hàng bảng / card | 1–2 section; action nguy hiểm (Xóa) tách section cuối + **divider** |
| Avatar / profile trigger | Section “Tài khoản” + divider + Đăng xuất |
| Toolbar overflow | Có thể **không** title nếu chỉ 2–4 action phẳng |
| Chọn giá trị form | Dùng **Select** (`components/select/`), không Dropdown |

**Không** dùng dropdown cho navigation chính hoặc danh sách dài (> ~8 item) — cân nhắc drawer / modal.

---

## HTML contract

```html
<div class="uu-dropdown">
  <div class="uu-dropdown__menu" role="menu" aria-label="Menu thao tác">
    <div class="uu-dropdown__section">
      <p class="uu-dropdown__title">Thao tác</p>
      <button type="button" class="uu-dropdown__item" role="menuitem">Sao chép</button>
      <button type="button" class="uu-dropdown__item" role="menuitem">Chỉnh sửa</button>
    </div>
    <hr class="uu-dropdown__divider" />
    <div class="uu-dropdown__section">
      <button type="button" class="uu-dropdown__item" role="menuitem">Xóa</button>
    </div>
  </div>
</div>
```

### Flat list (legacy, không khuyến nghị cho demo mới)

`ul.uu-dropdown__menu > li.uu-dropdown__item` vẫn được CSS hỗ trợ; ưu tiên cấu trúc **section** ở trên để đúng spacing title/section.

---

## Files

- `components/dropdown/dropdown.css`
- `components/dropdown/dropdown-demo.html`

*Thickness · Untitled UI · dropdown · 2026-06-01*
