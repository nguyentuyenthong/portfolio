# Button

Nút hành động chính của Untitled UI. Cấu trúc Figma: component **Button** bọc instance **_Button base** + text layer. Label mặc định trong file: **Button CTA**.

---

## Figma properties overview

| Property | Values (exact) |
|----------|----------------|
| **Size** | `sm`, `md`, `lg`, `xl` |
| **Hierarchy** | `Primary`, `Secondary color`, `Secondary gray`, `Tertiary color`, `Tertiary gray`, `Link color`, `Link gray` |
| **Icon** | `False`, `Dot`, `Leading`, `Trailing`, `Only` |
| **Destructive** | `False`, `True` |
| **State** | `Default`, `Hover`, `Focused`, `Disabled` |

- **Component set:** Button — `1038:34411`
- **Inner base:** _Button base — `1037:37979`
- **Page:** ↳ Buttons — `1:1183`
- **File:** `iIaJsj0vXT0bbWyp4PACu9`

---

## Anatomy

| No. | Element | Display | Notes |
|-----|---------|---------|-------|
| 1 | Button (wrapper) | Required | `border-radius: 8px` |
| 2 | _Button base | Required | Auto-layout row, center, gap `8px` |
| 3 | Text | Required | Default copy: `Button CTA`, style **Text sm/Semibold** |

---

## Specification (_Button base)

### Size → padding (Figma layout)

| Size | Padding | Gap | Typography |
|------|---------|-----|------------|
| sm | `8px 14px` | `8px` | Text sm/Semibold — 14px / 20px / 600 |
| md | `10px 16px` | `8px` | Text sm/Semibold |
| lg | `12px 20px` | `8px` | Text sm/Semibold |
| xl | `12px 20px` | `8px` | UNKNOWN_FROM_FIGMA (dùng cùng lg trong demo) |

- **Border radius:** `8px`
- **Border width:** `1px` (khi có stroke)
- **Shadow (có shadow):** Shadow/xs → `0px 1px 2px 0px rgba(10, 13, 18, 0.05)`

### Hierarchy × State (md, Icon=False) — Figma fills/strokes

Map Figma → Thickness semantic (branding = `--brand-*` @ `#444CE7` Indigo):

| Hierarchy | State | Background | Border | Text |
|-----------|-------|------------|--------|------|
| Primary | Default | Brand/600 → `--brand-600` | Brand/600 | White → `--white` |
| Primary | Hover | Brand/700 → `--brand-700` | Brand/700 | White |
| Primary | Disabled | Brand/200 → `--brand-200` | Brand/200 | White |
| Primary + Destructive | Default | Error/600 → `--error-600` | Error/600 | White |
| Primary + Destructive | Hover | Error/700 → `--error-700` | Error/700 | White |
| Secondary color | Default | Brand/50 → `--brand-50` | Brand/50 | Brand/700 → `--brand-700` |
| Secondary color | Hover | Brand/100 → `--brand-100` | Brand/100 | Brand/700 |
| Secondary gray | Default | White | Gray/300 → `--gray-300` | Gray/700 → `--gray-700` |
| Secondary gray | Hover | Gray/50 → `--gray-50` | Gray/300 | Gray/700 |
| Secondary gray | Disabled | White | Gray/200 → `--gray-200` | UNKNOWN_FROM_FIGMA |
| Tertiary color | Default | transparent | none | Brand/700 → `--brand-700` |
| Tertiary color | Hover | Brand/50 | none | Brand/700 |
| Tertiary gray | Default | transparent | none | Gray/600 → `--gray-600` |
| Tertiary gray | Hover | Gray/50 | none | Gray/600 |
| Link color | Default | transparent | none | Brand/700 | 
| Link gray | Default | transparent | none | Gray/600 → `--gray-600` |

Link variants: **không padding** trên _Button base (layout hug).

---

## CSS class contract (Thickness HTML)

```html
<button type="button" class="uu-button"
  data-uu-size="md"
  data-uu-hierarchy="primary"
  data-uu-destructive="false">
  Button CTA
</button>
```

- **Handoff:** file này (`button.md`) — designer/dev/AI đọc trước khi implement
- **Browser demo:** `components/button/button.css` + `button-demo.html`

---

## Manual verification required

- Text color một số Tertiary/Link/Disabled variants: lấy từ node text con khi Figma API hết quota.
- State **Focused** (focus ring 4px): cần node `State=Focused` riêng — pattern error: `focused 4px error-100`.
- Size **xl** padding: chưa trích node riêng.

---

*Thickness · Untitled UI FREE v2.0 · Figma `iIaJsj0vXT0bbWyp4PACu9` · Button `1038:34411` · Generated: 2026-05-27 · Verification: partial (Framelink MCP)*
