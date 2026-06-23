/**
 * Sync @untitledui/icons → Thickness registry.json
 * Run: npm run sync:icons (from source-code/)
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const NODE_MODULES = path.join(ROOT, 'source-code/node_modules');
const ICONS_PKG = path.join(NODE_MODULES, '@untitledui/icons/dist/index.d.ts');
const TARGETS = [
  path.join(ROOT, 'library/components/_shared/icons/registry.json'),
];

function parseIconNames(dts) {
  return [...dts.matchAll(/export \{ (\w+) \} from/g)].map((m) => m[1]);
}

function toThicknessSnippet(svgMarkup, defaultSize = 20) {
  const viewBoxMatch = svgMarkup.match(/viewBox="([^"]+)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

  let inner = svgMarkup
    .replace(/^<svg[^>]*>/, '')
    .replace(/<\/svg>$/, '')
    .trim();

  const snippet = `<svg class="uu-icon uu-icon--${defaultSize}" viewBox="${viewBox}" fill="none" aria-hidden="true">${inner}</svg>`;

  return { viewBox, snippet };
}

async function buildIconEntry(name) {
  const mod = await import(`@untitledui/icons/${name}`);
  const Component = mod[name];
  if (!Component) {
    throw new Error(`Missing export: ${name}`);
  }
  const raw = renderToStaticMarkup(createElement(Component));
  const { viewBox, snippet } = toThicknessSnippet(raw, 20);
  return {
    untitledName: name,
    viewBox,
    defaultSize: 20,
    snippet,
  };
}

async function main() {
  if (!fs.existsSync(ICONS_PKG)) {
    console.error('Missing @untitledui/icons — run: cd source-code && npm install');
    process.exit(1);
  }

  const existingPath = TARGETS.find((p) => fs.existsSync(p));
  const existing = existingPath
    ? JSON.parse(fs.readFileSync(existingPath, 'utf8'))
    : { byComponent: {}, byContext: {} };

  const names = parseIconNames(fs.readFileSync(ICONS_PKG, 'utf8'));
  console.log(`Syncing ${names.length} icons from @untitledui/icons…`);

  const icons = {};
  let done = 0;
  const batchSize = 50;

  for (let i = 0; i < names.length; i += batchSize) {
    const batch = names.slice(i, i + batchSize);
    const entries = await Promise.all(
      batch.map(async (name) => {
        try {
          return [name, await buildIconEntry(name)];
        } catch (err) {
          console.warn(`  skip ${name}:`, err.message);
          return null;
        }
      })
    );

    for (const entry of entries) {
      if (entry) icons[entry[0]] = entry[1];
    }

    done += batch.length;
    if (done % 200 === 0 || done === names.length) {
      console.log(`  ${done}/${names.length}`);
    }
  }

  const registry = {
    $schema: 'thickness-icons/v1',
    meta: {
      source: 'https://www.untitledui.com/resources/icons',
      package: '@untitledui/icons',
      style: 'line',
      cssClass: 'uu-icon',
      rules: 'library/rules/icons.md',
      syncedAt: new Date().toISOString().slice(0, 10),
      count: Object.keys(icons).length,
      license: 'MIT',
    },
    byComponent: existing.byComponent || {},
    byContext: existing.byContext || {},
    icons,
  };

  const json = `${JSON.stringify(registry, null, 2)}\n`;

  for (const target of TARGETS) {
    const dir = path.dirname(target);
    if (!fs.existsSync(dir)) continue;
    fs.writeFileSync(target, json, 'utf8');
    console.log(`Wrote ${target} (${registry.meta.count} icons)`);
  }

  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
