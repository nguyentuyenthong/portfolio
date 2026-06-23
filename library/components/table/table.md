# Tables

Component Tables của Thickness map từ Untitled UI React: `components/application/table/table.tsx`.

Docs: `https://www.untitledui.com/react/components/tables`

---

## Mục tiêu

- **TableCard**: khung card có header + table + footer.
- **Table**: header row + body rows + selection checkbox + sorting indicator (tĩnh trong HTML demo).
- **Pagination**: footer luôn dùng **component Pagination đã gene** (`components/pagination/`), không tạo pagination riêng cho table.

---

## Anatomy (HTML)

```html
<section class="uu-table-card" data-uu-size="md">
  <header class="uu-table-card__header">
    <div class="uu-table-card__title-wrap">
      <div class="uu-table-card__title-row">
        <h2 class="uu-table-card__title">Team members</h2>
        <span class="uu-badge" data-uu-color="gray" data-uu-type="pill" data-uu-size="sm">100 users</span>
      </div>
      <p class="uu-table-card__desc">Manage your team members and their account permissions.</p>
    </div>
    <div class="uu-table-card__trailing">…</div>
  </header>

  <div class="uu-table-scroll">
    <table class="uu-table" role="table" aria-label="Team members">
      <thead class="uu-table__head">
        <tr class="uu-table__head-row">
          <th class="uu-table__th uu-table__th--select">…</th>
          <th class="uu-table__th"><span class="uu-table__th-sort">Name …</span></th>
          …
        </tr>
      </thead>
      <tbody>
        <tr class="uu-table__row">…</tr>
      </tbody>
    </table>
  </div>

  <footer class="uu-table-card__footer">
    <!-- dùng pagination component (advanced cho desktop table) -->
    <nav class="uu-pagination uu-pagination--card-advanced">…</nav>
  </footer>
</section>
```

---

## Sizing

- `data-uu-size="md"`: row cao hơn (`~72px`), cell padding `24px`
- `data-uu-size="sm"`: row thấp hơn (`~56px`), cell padding `20px`

---

## States (CSS)

- **Hover row**: nền `--background-secondary`
- **Divider line**: `border-bottom` token `--border-secondary`
- **Alternating fills**: thêm `data-uu-alt="true"` vào `tbody` hoặc set trên `.uu-table__row` (demo dùng selector `nth-child`)

---

## Pagination trong Table

- Desktop table: dùng `.uu-pagination--card-advanced` (3 vùng: Page input | page nav | Rows/page).
- Mobile: pagination sẽ tự fallback theo CSS trong `pagination.css` (Prev + “Page X of Y” + Next).

---

## Files

- CSS: `components/table/table.css`
- Demo: `components/table/table-demo.html`

