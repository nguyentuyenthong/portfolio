# Avatar

Ảnh đại diện / chữ viết tắt theo [Untitled UI — Avatars](https://www.untitledui.com/react/components/avatars).

**Source:** `untitleduico/react` → `components/base/avatar/avatar.tsx`

---

## Properties overview

| Property | Values |
|----------|--------|
| **Size** | `xs`, `sm`, `md`, `lg`, `xl` |
| **Border** | `data-uu-border="true"` — outline trắng |
| **Status** | `.uu-avatar__status` — `online` (default), `offline` |

---

## Anatomy

| Element | Notes |
|---------|-------|
| Container | `.uu-avatar` — circle, overflow hidden |
| Image | `img` full bleed, `object-fit: cover` |
| Fallback | initials / background `--gray-100` |
| Status dot | góc dưới-phải, 25% size, border 2px white |

---

## Specification

### Size

| Size | Dimensions | Font (fallback) |
|------|------------|-----------------|
| xs | 1.5rem | `--font-size-text-xs` |
| sm | 2rem | `--font-size-text-sm` |
| md | 2.5rem | `--font-size-text-md` |
| lg | 3rem | `--font-size-text-lg` |
| xl | 3.5rem | `--font-size-text-xl` |

### Status colors

| Status | Background |
|--------|--------------|
| online | `--success-500` |
| offline | `--gray-400` |

---

## HTML class contract

```html
<div class="uu-avatar" data-uu-size="md" data-uu-border="true">
  <img src="…" alt="Admin" width="40" height="40" />
  <span class="uu-avatar__status" data-status="online" aria-hidden="true"></span>
</div>
```

- Implementation (demo chạy): `components/avatar/avatar.css`
- Demo: `components/avatar/avatar-demo.html`

---

*Thickness · Untitled UI · avatar.tsx · Generated: 2026-05-27*
