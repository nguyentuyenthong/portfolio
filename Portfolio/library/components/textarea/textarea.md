# Textarea

Ô nhập nhiều dòng theo [Untitled UI — Textarea](https://www.untitledui.com/react/components/textareas).

**Source:** `untitleduico/react` → `components/base/textarea/textarea.tsx`

---

## Properties

| Property | Values |
|----------|--------|
| size | `sm`, `md` (default `md`) |
| isInvalid | boolean |
| isDisabled | boolean |
| isRequired | boolean |

---

## Anatomy

| Element | Class |
|---------|-------|
| Root | `.uu-field.uu-textarea` + `data-uu-size` |
| Control | `.uu-control` |
| Textarea | `.uu-control__input` |
| Label / hint | shared field — `components/_shared/field.css` |

---

## Specification

| Size | Min-height | Padding / font |
|------|------------|----------------|
| sm | `5rem` | `spacing-lg`, text-sm |
| md | `5rem` | `spacing-lg` 14px horizontal, text-md |

- `resize: vertical` trên textarea
- States (focus, invalid, disabled): giống `input.md` — dùng ring token `--field-border-*`

---

## HTML class contract

```html
<div class="uu-field uu-textarea" data-uu-size="md">
  <label class="uu-field__label" for="ta1">Mô tả</label>
  <div class="uu-control">
    <textarea id="ta1" class="uu-control__input" rows="4" placeholder="…"></textarea>
  </div>
  <p class="uu-field__hint">Gợi ý tùy chọn</p>
</div>
```

- Implementation (demo chạy): `components/textarea/textarea.css` (import `field.css`)
- Demo: `components/textarea/textarea-demo.html`

---

*Thickness · Untitled UI · textarea · Generated: 2026-05-27*
