/**
 * Hero headline — reveal marquee with fixed slot + per-word color
 */

const PF_HERO_WORDS = [
  { text: 'design system', theme: 'design-system' },
  { text: 'token driven', theme: 'token-driven' },
  { text: 'visual prototype', theme: 'visual-prototype' },
];

function initHeroMarquee() {
  const root = document.querySelector('[data-pf-hero-marquee]');
  if (!root) return;

  const slot = root.querySelector('.pf-hero-marquee__slot');
  const text = root.querySelector('.pf-hero-marquee__text');
  if (!slot || !text) return;

  let index = 0;

  const applyWord = (i) => {
    const word = PF_HERO_WORDS[i];
    text.textContent = word.text;
    root.dataset.pfWord = word.theme;
  };

  const measure = document.createElement('span');
  measure.className = 'pf-hero-marquee__text pf-hero-marquee__measure';
  measure.setAttribute('aria-hidden', 'true');
  slot.appendChild(measure);

  let maxWidth = 0;
  PF_HERO_WORDS.forEach((word) => {
    measure.textContent = word.text;
    maxWidth = Math.max(maxWidth, measure.offsetWidth);
  });
  measure.remove();

  slot.style.width = `${maxWidth}px`;

  applyWord(index);

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    text.style.clipPath = 'inset(0 0% 0 0)';
    return;
  }

  text.addEventListener('animationiteration', () => {
    index = (index + 1) % PF_HERO_WORDS.length;
    applyWord(index);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHeroMarquee);
} else {
  initHeroMarquee();
}
