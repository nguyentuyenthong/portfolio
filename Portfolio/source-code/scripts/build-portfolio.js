/**
 * Ghép partials HTML thành index.html
 * Usage: node source-code/scripts/build-portfolio.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const TEMPLATE = path.join(ROOT, 'index.template.html');
const OUTPUT = path.join(ROOT, 'index.html');
const INCLUDE_RE = /<!--\s*@include\s+([^\s]+)\s*-->/g;

function resolveInclude(includePath, stack) {
  const abs = path.resolve(ROOT, includePath.replace(/\//g, path.sep));
  if (!fs.existsSync(abs)) {
    throw new Error(`Include not found: ${includePath}`);
  }
  if (stack.has(abs)) {
    throw new Error(`Circular include: ${includePath}`);
  }

  stack.add(abs);
  const content = fs.readFileSync(abs, 'utf8');
  const resolved = content.replace(INCLUDE_RE, (_, nested) => resolveInclude(nested, new Set(stack)));
  stack.delete(abs);
  return resolved;
}

function buildFromFile(filePath) {
  const abs = path.resolve(filePath);
  const content = fs.readFileSync(abs, 'utf8');
  return content.replace(INCLUDE_RE, (_, includePath) => resolveInclude(includePath, new Set()));
}

if (!fs.existsSync(TEMPLATE)) {
  console.error('Missing index.template.html');
  process.exit(1);
}

const html = buildFromFile(TEMPLATE);
fs.writeFileSync(OUTPUT, html, 'utf8');
console.log(`Built ${path.relative(ROOT, OUTPUT)}`);
