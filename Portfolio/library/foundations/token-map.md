# Token Map — Untitled UI → Thickness

Dùng khi đọc `.tsx` Untitled hoặc Tailwind theme và chuyển sang CSS Thickness.

## Brand colors

| Untitled (`theme.css`) | Thickness (`primitives.css`) |
|------------------------|------------------------------|
| `--color-brand-25` … `950` | `--brand-25` … `--brand-950` |
| Primary interactive | `--brand-600` (#444CE7) |
| Primary hover | `--brand-700` |

## Gray scale

| Untitled | Thickness |
|----------|-----------|
| `gray-25` … `gray-950` | `--gray-25` … `--gray-950` |

## Semantic (ưu tiên trong component CSS)

| Untitled tailwind / variable | Thickness semantic |
|------------------------------|-------------------|
| `bg-primary` | `--background-primary` |
| `bg-secondary` | `--background-secondary` |
| `bg-brand-solid` | `--background-brand-solid` |
| `text-primary` | `--text-primary` |
| `text-tertiary` | `--text-tertiary` |
| `text-brand-secondary` | `--text-brand-secondary` |
| `border-primary` | `--border-primary` |
| `ring-brand` | `box-shadow` với `--brand-500` |
| Field border | `--field-border-default` |
| Error text | `--text-error` |
| Success | `--text-success` |

## Spacing

Untitled spacing scale = Thickness `--spacing-*` (4px base grid).  
`gap-2` → `--spacing-md` (8px) · `p-4` → `--spacing-xl` (16px) · `py-3 px-4` → `--spacing-lg` `--spacing-xl`.

## Radius

| Untitled | Thickness |
|----------|-----------|
| `rounded-lg` | `--radius-md` (8px) |
| `rounded-xl` | `--radius-xl` (12px) |
| `rounded-full` | `--radius-full` |

## Typography

**Chi tiết đầy đủ:** [`library/rules/typography-map.md`](../rules/typography-map.md)

| Untitled / Tailwind | Thickness |
|---------------------|-----------|
| `text-sm font-semibold` | `.uu-text-sm.uu-font-semibold` hoặc token sm + semibold |
| `text-md` / `text-base` | `--font-size-text-md` / `.uu-text-md` |
| `text-2xl`+ hero | `.uu-display-xs` … `.uu-display-md` |
| `font-sans` | `--font-family` (Inter) |
| `tabular-nums` | `.uu-tabular-nums` |
| `tracking-wide` + `uppercase` | `.uu-tracking-caps.uu-uppercase` |

## Shadow

| Untitled | Thickness (demo) |
|----------|------------------|
| Shadow/xs | `0 1px 2px 0 rgba(10, 13, 18, 0.05)` |
| Shadow/sm | `0 1px 3px rgba(10, 13, 18, 0.1)` |

## Icon color

| Untitled | Thickness |
|----------|-----------|
| `text-fg-quaternary` | `--icon-tertiary` |
| `text-fg-secondary` | `--icon-secondary` |
| On brand | `--icon-on-brand` |

## Button hierarchy map (quick ref)

| Untitled Hierarchy | Background | Border | Text |
|--------------------|------------|--------|------|
| Primary | `--brand-600` | `--brand-600` | `--white` |
| Secondary color | `--brand-50` | `--brand-50` | `--brand-700` |
| Secondary gray | `--white` | `--gray-300` | `--gray-700` |
| Tertiary color | transparent | transparent | `--brand-700` |
| Link color | transparent | — | `--brand-700` |

Chi tiết state: `components/button/button.md`.
