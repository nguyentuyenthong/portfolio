# Tooltip

Gợi ý khi hover/focus — prototype CSS thuần (không portal React).

**Source:** `untitleduico/react` → `components/base/tooltip/tooltip.tsx`

---

## Properties overview

| Property | Values |
|----------|--------|
| **Placement** | prototype: top-center (`::after` above trigger) |
| **Trigger** | `data-uu-tip` — nội dung tooltip |

---

## Anatomy

| Element | Notes |
|---------|-------|
| Wrap | `.uu-tooltip-wrap` — `position: relative`, inline-flex |
| Bubble | `::after` — `content: attr(data-uu-tip)` |

---

## Specification

| Property | Value |
|----------|-------|
| Background | `--brand-900` |
| Text | `--white`, xs, semibold |
| Padding | `--spacing-md` `--spacing-lg` |
| Radius | `--radius-md` |
| Shadow | `--shadow-lg` |
| Max width | 20rem |
| Offset | 6px above trigger |
| Show | `:hover`, `:focus-within` → opacity 1 |

---

## HTML class contract

```html
<span class="uu-tooltip-wrap" data-uu-tip="Giải thích ngắn">
  <button type="button" class="uu-utility-btn" … aria-label="…">…</button>
</span>
```

- Implementation (demo chạy): `components/tooltip/tooltip.css`
- Demo: `components/tooltip/tooltip-demo.html`

---

## Manual verification required

- Placement left/right/bottom: cần mở rộng CSS hoặc component mới.
- Arrow / description phụ: `data-uu-desc` reserved, chưa style.

---

*Thickness · Untitled UI · tooltip.tsx · Generated: 2026-05-27*
