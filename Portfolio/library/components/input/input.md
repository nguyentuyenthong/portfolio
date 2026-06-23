# Input

Text field theo [Untitled UI React — Inputs](https://www.untitledui.com/react/components/inputs).

**Source:** `untitleduico/react` → `components/base/input/input.tsx`

---

## Properties

| Property | Values |
|----------|--------|
| size | `sm`, `md`, `lg` (default `md`) |
| isInvalid | boolean |
| isDisabled | boolean |
| isRequired | boolean |

---

## Anatomy

| Element | Notes |
|---------|-------|
| Label | `text-sm font-medium text-secondary`, `*` khi required (`text-brand-tertiary`) |
| Control | `rounded-lg bg-primary shadow-xs ring-1 ring-primary` |
| Input | transparent bg, `placeholder:text-placeholder` |
| Hint | `text-sm text-tertiary`; invalid → `text-error-primary` |

---

## States (control ring)

| State | Border / ring |
|-------|----------------|
| Default | `ring-1 ring-primary` → `--field-border-default` |
| Focus | `ring-2 ring-brand` → `--field-border-focus` 2px |
| Invalid | `ring-error_subtle` → `--border-error` |
| Invalid + focus | `ring-2 ring-error` → `--error-500` |
| Disabled | `opacity-50`, `cursor-not-allowed` |

---

## Sizes (padding)

| Size | Padding | Font |
|------|---------|------|
| sm | `px-3 py-2` (12×8px) | text-sm |
| md | `px-3 py-2` | text-md |
| lg | `px-3.5 py-2.5` | text-md |

---

## CSS contract

```html
<div class="uu-field uu-input" data-uu-size="md">
  <label class="uu-label">Email<span class="uu-label__required">*</span></label>
  <div class="uu-control">
    <input class="uu-control__input" type="email" placeholder="you@company.com" />
  </div>
  <span class="uu-hint">This is a hint text to help user.</span>
</div>
```

*Thickness · source: GitHub untitleduico/react · 2026-05-27*
