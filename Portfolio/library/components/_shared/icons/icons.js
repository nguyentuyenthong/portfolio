/**
 * Thickness — Untitled UI icon helper (HTML demos)
 * Data: registry.json · CSS: ../icon.css
 *
 * Usage:
 *   <script type="module">
 *     import { icon, iconForComponent, listIconNames, searchIcons } from './icons.js';
 *     el.innerHTML = await icon('SearchLg', { size: 20 });
 *   </script>
 */
const REGISTRY_URL = new URL('./registry.json', import.meta.url);

let _cache = null;

export async function loadRegistry() {
  if (_cache) return _cache;
  const res = await fetch(REGISTRY_URL);
  _cache = await res.json();
  return _cache;
}

/**
 * @param {string} name - Untitled icon name (e.g. SearchLg)
 * @param {{ size?: 14|16|20|24, className?: string, interactive?: boolean }} [opts]
 */
export async function icon(name, opts = {}) {
  const reg = await loadRegistry();
  const entry = reg.icons[name];
  if (!entry) {
    console.warn(`[thickness-icons] Unknown icon: ${name}`);
    return '';
  }
  const size = opts.size || entry.defaultSize || 20;
  const sizeClass = `uu-icon--${size}`;
  const extra = [opts.className, opts.interactive ? 'uu-icon--interactive' : '']
    .filter(Boolean)
    .join(' ');
  const snippet = entry.snippet.replace(
    /class="uu-icon[^"]*"/,
    `class="uu-icon ${sizeClass}${extra ? ` ${extra}` : ''}"`
  );
  return snippet;
}

/**
 * @param {string} componentKey - registry key (e.g. buttons, table)
 * @param {'leading'|'trailing'|'menu'|string} slot
 */
export async function iconForComponent(componentKey, slot, index = 0) {
  const reg = await loadRegistry();
  const map = reg.byComponent[componentKey];
  if (!map) return icon(reg.byContext.search || 'SearchLg');
  const slotVal = map[slot];
  const name = Array.isArray(slotVal) ? slotVal[index] || slotVal[0] : slotVal;
  return icon(name);
}

export async function resolveContext(contextKey) {
  const reg = await loadRegistry();
  const name = reg.byContext[contextKey];
  return name ? icon(name) : '';
}

/** Danh sách tên icon (A–Z) */
export async function listIconNames() {
  const reg = await loadRegistry();
  return Object.keys(reg.icons).sort();
}

/** Tìm icon theo tên (case-insensitive substring) */
export async function searchIcons(query, limit = 48) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const names = await listIconNames();
  return names.filter((n) => n.toLowerCase().includes(q)).slice(0, limit);
}

/** Meta registry (count, syncedAt) */
export async function iconMeta() {
  const reg = await loadRegistry();
  return reg.meta || {};
}
