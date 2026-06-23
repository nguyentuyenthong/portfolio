# Tabs

Điều hướng theo tab của Untitled UI (`Application/Tabs`). Một `Tabs` bọc `TabList` chứa nhiều `Tab`, kèm `TabPanel`.

---

## Untitled properties overview

| Property | Values (exact) |
|----------|----------------|
| **Type** | `button-brand`, `button-gray`, `button-border`, `button-minimal`, `underline` (horizontal); `line` (vertical) |
| **Size** | `sm`, `md` |
| **Orientation** | `horizontal`, `vertical` |
| **Full width** | `True`, `False` |
| **State** | `Default`, `Hover`, `Selected`, `Focused`, `Disabled` |
| **Icon** | `False`, `Leading` |
| **Badge** | `False`, `number/string` |

- **Component:** Application / Tabs · React `components/application/tabs/tabs.tsx`
- **Brand accent:** `--brand-600` (#444CE7)

---

## Anatomy

| No. | Element | Display | Notes |
|-----|---------|---------|-------|
| 1 | `.uu-tabs` (wrapper) | Required | Cột, full width |
| 2 | `.uu-tab-list` | Required | `data-uu-type`, `data-uu-size`, `data-uu-fullwidth` |
| 3 | `.uu-tab` | Required | `aria-selected`, `role="tab"` |
| 4 | `.uu-tab__badge` | Optional | Pill số bên cạnh label |
| 5 | `.uu-tab-panel` | Optional | Nội dung `role="tabpanel"` |

---

## Specification

### Size → padding / typography (Untitled `sizes`)

| Size | Padding (button types) | Typography | Icon |
|------|------------------------|------------|------|
| sm | `8px 12px` → `--spacing-md --spacing-lg` | Text sm/Semibold (14 / 20 / 600) | 16px |
| md | `12px 12px` → `--spacing-lg --spacing-lg` | Text md/Semibold (16 / 24 / 600) | 20px |

Underline: padding `0 2px 12px` (không bo góc, viền dưới 2px).

### Type → container + selected/hover

| Type | Container | Selected / Hover (bg · text) | Untitled token |
|------|-----------|------------------------------|----------------|
| button-brand | gap 4px | `--background-brand-subtle` · `--text-brand` | `bg-brand-primary_alt` `text-brand-secondary` |
| button-gray | gap 4px | `--background-secondary` · `--text-secondary` | `bg-primary_hover` `text-secondary` |
| button-border | bg `--background-secondary`, inset ring `--border-secondary`, radius 10/12px, pad 4/6px | `--surface-default` · `--text-secondary` + shadow-sm | `bg-secondary_alt` → `bg-primary_alt` |
| button-minimal | bg `--background-secondary`, inset ring `--border-secondary`, radius 8px, gap 2px | `--surface-default` · `--text-secondary` + shadow-xs + inset ring `--border-primary` | `bg-primary_alt` `shadow-xs` `ring-primary` |
| underline | bottom border 1px `--border-secondary`, gap 12px | border-bottom 2px `--brand-600` · `--text-brand` | `border-fg-brand-primary_alt` |

Default tab text: `--text-quaternary` (gray-500).

### Map Untitled → Thickness

| Untitled (Tailwind) | Thickness |
|---------------------|-----------|
| `text-quaternary` | `--text-quaternary` |
| `bg-brand-primary_alt` | `--background-brand-subtle` (`--brand-50`) |
| `text-brand-secondary` | `--text-brand` (`--brand-700`) |
| `bg-primary_hover` / `bg-secondary_alt` | `--background-secondary` (`--gray-50`) |
| `bg-primary_alt` | `--surface-default` (white) |
| `ring-secondary` | `--border-secondary` (`--gray-300`) |
| `ring-primary` | `--border-primary` (`--gray-200`) |
| `shadow-sm` | `0 1px 3px rgba(10,13,18,.1)` |
| `shadow-xs` | `0 1px 2px rgba(10,13,18,.05)` |

---

## CSS class contract (Thickness HTML)

```html
<div class="uu-tabs">
  <div class="uu-tab-list" role="tablist" data-uu-type="button-brand" data-uu-size="sm">
    <button class="uu-tab" role="tab" aria-selected="true">My details</button>
    <button class="uu-tab" role="tab" aria-selected="false">Profile
      <span class="uu-tab__badge">2</span>
    </button>
    <button class="uu-tab" role="tab" aria-selected="false">Password</button>
  </div>
  <div class="uu-tab-panel" role="tabpanel">…</div>
</div>
```

---

*Thickness · Untitled UI FREE v2.0 · Tabs (`components/application/tabs/tabs.tsx`) · Generated: 2026-06-22*
