# File Upload

Tải tệp của Untitled UI (`Application/FileUpload`): vùng kéo-thả (drop zone) + danh sách tệp có thanh tiến trình. Trạng thái: uploading · complete · failed.

---

## Untitled properties overview

| Property | Values (exact) |
|----------|----------------|
| **Dropzone** | default · dragging · disabled |
| **File item state** | `uploading`, `complete`, `failed` |
| **Item variant** | `progress-bar`, `progress-fill` |

- **Component:** Application / FileUpload · React `components/application/file-upload/file-upload-base.tsx`

---

## Anatomy

| No. | Element | Display | Notes |
|-----|---------|---------|-------|
| 1 | `.uu-file-upload` (root) | Required | Cột, gap `16px` |
| 2 | `.uu-file-upload__dropzone` | Required | radius `12px`, inset ring `--border-secondary`, pad `16px 24px` |
| 3 | `.uu-file-upload__icon` | Required | Featured icon UploadCloud `40px` |
| 4 | `.uu-file-upload__cta` | Required | "Click to upload" (link brand) "or drag and drop" |
| 5 | `.uu-file-upload__hint` | Optional | Text xs — `--text-tertiary` |
| 6 | `.uu-file-upload__list` | Optional | Danh sách `.uu-file-item` |
| 7 | `.uu-file-item` | — | file icon + name + meta + delete + progress |

---

## Specification

### Drop zone

| Thuộc tính | Giá trị | Token |
|------------|---------|-------|
| Padding | 16px 24px | `--spacing-xl` `--spacing-3xl` |
| Radius | 12px | `--radius-xl` |
| Ring | inset 1px `--border-secondary` | — |
| Dragging | inset 2px `--border-brand` | `.is-dragging` |
| Disabled | bg `--background-secondary` | `data-uu-disabled="true"` |

### File item state → status color

| State | Status color | Icon | Hiển thị |
|-------|--------------|------|----------|
| uploading | `--text-quaternary` | UploadCloud02 | "Uploading…" + progress bar |
| complete | `--text-success` | CheckCircle | "Complete" + bar 100% |
| failed | `--text-error` (ring 2px `--border-error`) | — | "Failed" + nút "Try again" |

### Progress bar

| Phần | Token |
|------|-------|
| Track | `--background-tertiary` (gray-100), height `8px`, radius full |
| Fill | `--brand-600` |
| Value | Text sm/Medium + `tabular-nums` |

---

## CSS class contract (Thickness HTML)

```html
<div class="uu-file-upload">
  <div class="uu-file-upload__dropzone">
    <span class="uu-file-upload__icon"><!-- UploadCloud02 --></span>
    <div class="uu-file-upload__prompt">
      <p class="uu-file-upload__cta"><button>Click to upload</button> or drag and drop</p>
      <p class="uu-file-upload__hint">SVG, PNG, JPG or GIF (max. 800×400px)</p>
    </div>
  </div>
  <ul class="uu-file-upload__list">
    <li class="uu-file-item" data-uu-state="uploading">
      <span class="uu-file-item__icon"><!-- file icon --></span>
      <div class="uu-file-item__body">
        <div class="uu-file-item__head">
          <div class="uu-file-item__info">
            <p class="uu-file-item__name">document.pdf</p>
            <div class="uu-file-item__meta">
              <span>200 KB</span>
              <span class="uu-file-item__sep"></span>
              <span class="uu-file-item__status"><!-- icon -->Uploading…</span>
            </div>
          </div>
          <button class="uu-file-item__delete" aria-label="Delete"><!-- Trash01 --></button>
        </div>
        <div class="uu-file-item__progress">
          <div class="uu-progress-track"><div class="uu-progress-fill" style="width:40%"></div></div>
          <span class="uu-progress-value">40%</span>
        </div>
      </div>
    </li>
  </ul>
</div>
```

---

*Thickness · Untitled UI FREE v2.0 · FileUpload (`components/application/file-upload/file-upload-base.tsx`) · Generated: 2026-06-22 · Icons: UploadCloud02, CheckCircle, Trash01, FileX02*
