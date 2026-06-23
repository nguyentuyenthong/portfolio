# Source code — Portfolio

Runtime JS, build script, npm và Cursor hooks.

## Scripts

| File | Dùng cho |
|------|----------|
| `build-portfolio.js` | Ghép `partials/` → `index.html` |
| `portfolio.js` | `index.html` — nav, scroll spy, accordion |
| `hero-marquee.js` | `index.html` — hero marquee |
| `case-study.js` | Case study AVN-TT |
| `main.js` | Entry dev (nếu cần) |
| `orphan-guard.js` | Kiểm tra link HTML mồ côi |

## Lệnh

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # cập nhật index.html sau khi sửa partials
npm run sync:icons
```
