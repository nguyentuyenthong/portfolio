# Modal

Dialog xác nhận / form ngắn theo [Untitled UI — Modals](https://www.untitledui.com/react/components/modals).

**Source:** `untitleduico/react` → `components/application/modals/modal.tsx`

---

## Figma properties overview

| Property | Values |
|----------|--------|
| **Layout** | `stacked` (icon trên), `horizontal` (icon trái) |
| **Tone** | `default`, `warning`, `destructive`, `success` |
| **Size** | `sm` (400px), `md` (480px), `lg` (640px) |
| **Dismissable** | overlay click, Escape, nút close (tùy prototype) |

Primitives React: `DialogTrigger` · `ModalOverlay` · `Modal` · `Dialog` — HTML prototype map sang `.uu-modal` + `role="dialog"`.

---

## Anatomy

| Element | Class | Notes |
|---------|-------|-------|
| Root | `.uu-modal` | `position: fixed; inset: 0; z-index: --z-modal`. Thêm `.is-open` khi hiển thị |
| Overlay | `.uu-modal__overlay` | Nền mờ + blur; click để đóng (nếu dismissable) |
| Panel | `.uu-modal__panel` | Surface trắng, shadow-xl, radius 2xl |
| Close | `.uu-modal__close` | `uu-utility-btn` góc phải trên |
| Content | `.uu-modal__content` | Padding panel |
| Header | `.uu-modal__header` | Icon + copy — layout theo `data-uu-layout` |
| Featured icon | `.uu-modal__featured-icon` | Vòng tròn 48px; tone theo `data-uu-tone` |
| Copy block | `.uu-modal__copy` | Title + description |
| Title | `.uu-modal__title` | Text lg / Semibold |
| Description | `.uu-modal__description` | Text sm / Regular, `--text-tertiary` |
| Footer | `.uu-modal__footer` | Hàng nút; mobile stack, desktop row |
| Checkbox row | `.uu-modal__field` | Optional — checkbox / toggle trong body (pattern Form) |

---

## Specification

### Overlay (`ModalOverlay`)

| Thuộc tính | Giá trị | Token |
|------------|---------|-------|
| Nền | Gray 950 @ 70% | `color-mix(in srgb, var(--gray-950) 70%, transparent)` |
| Blur | 6px | `backdrop-filter: blur(6px)` |
| Padding ngang | 16px → 32px @ sm | `--spacing-xl` → `--spacing-4xl` |
| Padding dọc | 16px / clamp bottom | `--spacing-xl`, `--spacing-4xl` @ sm |
| Căn panel | center (desktop), bottom-safe (mobile) | `align-items: flex-end` → `center` @ 640px |

### Panel (`Modal`)

| Thuộc tính | Giá trị | Token |
|------------|---------|-------|
| Nền | Primary surface | `--surface-default` |
| Radius | 12px → 16px @ sm | `--radius-xl` → `--radius-2xl` |
| Shadow | XL | `--shadow-xl` |
| Width | theo `data-uu-size` | sm 400 / md 480 / lg 640 |
| Max height | viewport − padding overlay | `max-height: min(90dvh, …)` |
| Padding nội dung | 24px | `--spacing-3xl` |
| Gap header → footer | 24px | `--spacing-3xl` |

### Featured icon

| Tone | Nền | Icon |
|------|-----|------|
| default | `--brand-50` | `--icon-brand` / `--brand-600` |
| warning | `--warning-50` | `--icon-warning` |
| destructive | `--error-50` | `--icon-error` |
| success | `--success-50` | `--icon-success` |

Kích thước: 48×48px (`3rem`), icon 24px.

### Footer actions

| Variant | Nút trái | Nút phải |
|---------|----------|----------|
| Default | `secondary-gray` — Cancel | `primary` — Confirm |
| Destructive | `secondary-gray` — Cancel | `primary` + `data-uu-destructive="true"` — Delete |
| Warning | `secondary-gray` | `primary` |

Footer gap: `--spacing-lg`. Mobile: full-width stack (primary trên). Desktop: `justify-content: flex-end`, nút auto width.

---

## Map Untitled → Thickness

| Untitled (Tailwind / theme) | Thickness |
|-----------------------------|-----------|
| `bg-overlay/70` | `color-mix(… gray-950 70%)` |
| `backdrop-blur-[6px]` | `blur(6px)` |
| `bg-primary` | `--surface-default` |
| `rounded-2xl` | `--radius-2xl` |
| `shadow-xl` | `--shadow-xl` |
| `text-primary` | `--text-primary` |
| `text-tertiary` | `--text-tertiary` |
| Featured warning ring | `--warning-50` + `--icon-warning` |
| Featured error ring | `--error-50` + `--icon-error` |

---

## HTML contract

### Stacked left aligned

```html
<div class="uu-modal is-open" data-uu-layout="stacked" data-uu-tone="default" data-uu-size="md">
  <div class="uu-modal__overlay" data-uu-dismiss></div>
  <div class="uu-modal__panel" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <button type="button" class="uu-modal__close uu-utility-btn" data-uu-size="sm" data-uu-color="tertiary" aria-label="Đóng">
      <!-- XClose icon -->
    </button>
    <div class="uu-modal__content">
      <div class="uu-modal__header">
        <div class="uu-modal__featured-icon" data-uu-tone="default" aria-hidden="true"></div>
        <div class="uu-modal__copy">
          <h2 class="uu-modal__title" id="modal-title">Tiêu đề modal</h2>
          <p class="uu-modal__description">Mô tả ngắn hoặc câu hỏi xác nhận.</p>
        </div>
      </div>
      <div class="uu-modal__footer">
        <button type="button" class="uu-button" data-uu-size="lg" data-uu-hierarchy="secondary-gray">Hủy</button>
        <button type="button" class="uu-button" data-uu-size="lg" data-uu-hierarchy="primary">Xác nhận</button>
      </div>
    </div>
  </div>
</div>
```

### Horizontal

Đặt `data-uu-layout="horizontal"` trên `.uu-modal` — icon và copy cùng hàng.

### Preview trong demo (không full viewport)

Thêm `.uu-modal--inline` trên root + bọc `.demo-modal-stage`.

---

## Accessibility

- `role="dialog"` + `aria-modal="true"` trên panel
- `aria-labelledby` → `.uu-modal__title` (hoặc `aria-label` nếu không có title)
- Focus trap: prototype dùng `<dialog>` hoặc script demo (`modal-demo.js`)
- Escape / overlay: `data-uu-dismiss` khi `data-uu-dismissable="true"` (mặc định)
- `prefers-reduced-motion`: tắt zoom animation

---

## Files

- `components/modal/modal.css`
- `components/modal/modal-demo.html`
- `components/modal/modal-demo.js` (mở/đóng cho demo tương tác)

*Thickness · Untitled UI · modal · 2026-06-14*
