# Portfolio — Nguyen Tuyen Thong

One-page portfolio site built with **Thickness Design System**.

## Chạy local

### Cách 1 — Mở trực tiếp
Double-click `index.html` hoặc mở bằng browser.

> Sau khi sửa file trong `partials/`, chạy `npm run build` (trong `source-code/`) để cập nhật `index.html`.

### Cách 2 — Dev server (khuyến nghị)
```bash
cd source-code
npm install
npm run dev
```
Mở http://localhost:5173/Portfolio/index.html

Case study AVN-TT: http://localhost:5173/case-study/avn-tt/01-summary.html

Build lại HTML sau khi chỉnh partials:
```bash
cd source-code
npm run build
```

### Cách 3 — Python
```bash
cd Portfolio
python -m http.server 8080
```

## Cấu trúc

```
Portfolio/
├── index.html              # Trang chính (build từ template)
├── index.template.html     # Shell ghép partials
├── partials/               # HTML tách theo section & element
│   ├── layout/             # head, nav, footer, blobs
│   ├── sections/           # hero, projects, experience, about, thinking
│   └── elements/           # card, badge, accordion item, ...
├── assets/                 # Ảnh, resume PDF
├── library/                # Thickness DS — tokens + components (duy nhất)
├── styles/                 # portfolio.css, case-study.css
└── source-code/            # npm, scripts JS, node_modules, Cursor hooks
    ├── scripts/            # portfolio.js, build-portfolio.js, ...
    ├── package.json
    └── .cursor/
```

## Design System

Mọi component/token nằm trong **`library/`** và **`assets/`** ngay trong thư mục Portfolio — một nguồn duy nhất, không còn bản sao ở `design-system/`.

- `library/foundations/thickness.css` + `base.css` — tokens
- `library/components/` — Untitled UI components (Thickness)
- Demo index: `library/break-point/index.html`
- Icons sync: `cd source-code && npm run sync:icons`

**Agents:** đọc `../rules/AGENTS.md` · Skills: `../skills/thickness-*`

## Quy ước `source-code/`

Mọi file phát sinh liên quan code (npm, runtime JS, hooks, script Node dev) → đặt trong `source-code/`.

HTML + `styles/` + `assets/` giữ ở root Portfolio.
