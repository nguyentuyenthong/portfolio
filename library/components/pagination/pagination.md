# Pagination

Phân trang theo [Untitled UI — Pagination](https://www.untitledui.com/react/components/pagination).

**Source:** `untitleduico/react` → `application/pagination/pagination.tsx`, `pagination-dot.tsx`, `pagination-line.tsx`

---

## Properties overview

| Variant | Class modifier | Device chính |
|---------|----------------|--------------|
| Card default | `.uu-pagination--card-default` | Mobile — footer list/card |
| Card advanced | `.uu-pagination--card-advanced` | Desktop — table / data |
| Dot | `.uu-pagination--dot` | Carousel overlay |
| Line | `.uu-pagination--line` | Carousel progress bar |

---

## Khi nào dùng (gene UI demo)

| Ngữ cảnh | Variant |
|----------|---------|
| Mobile list/card footer | **card-default** — Prev/Next + `Page 3 of 10` |
| Desktop table footer | **card-advanced** — First/Prev/số trang/Next/Last + rows/page |
| Carousel / gallery | **dot** hoặc **line** (một loại, overlay bottom-center) |

Không dùng dot/line cho table. Không dùng card-default cho table desktop khi đã có card-advanced.

---

## Anatomy (card-default)

| Element | Notes |
|---------|-------|
| Root | `.uu-pagination.uu-pagination--card-default` |
| Grid | 3 cột: icon Prev \| label \| icon Next |
| Label | `.uu-pagination__mobile-label` — `Page <strong>n</strong> of <strong>m</strong>` |
| Buttons | `.uu-pagination__icon-btn` — dùng `.uu-button` secondary sm |

## Anatomy (card-advanced)

| Element | Notes |
|---------|-------|
| Layout | flex, space-between — rows/page trái, nav giữa/phải |
| Page input | nhập trang trực tiếp |
| Page numbers | `.uu-pagination__page`, `aria-current="page"` |
| Rows per page | select 10/25/50/100 |

---

## Specification (shared)

| Element | Size / token |
|---------|----------------|
| Page button | min 36×36px, radius `--radius-md` |
| Active page | bg `--field-hover`, text `--text-secondary` |
| Border top (card) | `--border-primary`, padding 12px 16px |

---

## HTML class contract

### Mobile — card default

```html
<nav class="uu-pagination uu-pagination--card-default" aria-label="Phân trang">
  <!-- Prev icon button · mobile label · Next icon button -->
</nav>
```

### Desktop — card advanced

```html
<nav class="uu-pagination uu-pagination--card-advanced" aria-label="Phân trang">
  <!-- rows per page · first/prev/pages/next/last -->
</nav>
```

- Implementation (demo chạy): `components/pagination/pagination.css` (import `button.css`)
- Demo: `components/pagination/pagination-demo.html`

---

*Thickness · Untitled UI · pagination · Generated: 2026-05-27*
