/**
 * Orphan guard — không để dòng cuối chỉ còn 1–4 từ đơn lẻ.
 * Gắn 4 từ cuối của mỗi khối copy bằng non-breaking space.
 * @see rules/typography.md
 */
(function orphanGuard() {
  const NBSP = '\u00A0';
  const TAIL_WORDS = 4;
  const SKIP_TAGS = new Set(['SCRIPT', 'STYLE', 'CODE', 'PRE', 'SVG', 'A', 'BUTTON']);

  const SELECTORS = [
    '.uu-section__title',
    '.uu-section__body',
    '.uu-section__label',
    '.portfolio-hero__headline',
    '.uu-site-footer__cta-title',
    '.case-list__title',
    '.case-kicker',
    '.case-metric .uu-section__body',
    '.uu-button-group__item',
    'figcaption',
    '.portfolio-section-header h2',
    '.portfolio-section-header p',
    '.portfolio-accordion__role',
    '.portfolio-accordion__company',
    '.portfolio-accordion__list li',
    '.uu-project-card__title',
    '.uu-project-card__desc',
    '.portfolio-about-card__body',
    '.portfolio-about-card__tools',
    '.case-hero__back',
  ].join(', ');

  function bindTailWords(text, tailCount) {
    const normalized = text.replace(/\s+/g, ' ').trim();
    if (!normalized) return text;

    const words = normalized.split(' ');
    if (words.length <= tailCount) {
      return words.join(NBSP);
    }

    const head = words.slice(0, -tailCount).join(' ');
    const tail = words.slice(-tailCount).join(NBSP);
    return `${head} ${tail}`;
  }

  function collectTextNodes(element) {
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.textContent?.trim()) return NodeFilter.FILTER_REJECT;

        let parent = node.parentElement;
        while (parent && parent !== element) {
          if (SKIP_TAGS.has(parent.tagName)) return NodeFilter.FILTER_REJECT;
          parent = parent.parentElement;
        }

        return NodeFilter.FILTER_ACCEPT;
      },
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    return nodes;
  }

  function guardElement(element) {
    const tailCount = Number.parseInt(element.dataset.orphanTail || TAIL_WORDS, 10) || TAIL_WORDS;
    const textNodes = collectTextNodes(element);
    if (!textNodes.length) return;

    const lastNode = textNodes[textNodes.length - 1];
    lastNode.textContent = bindTailWords(lastNode.textContent, tailCount);
  }

  function init() {
    document.querySelectorAll(SELECTORS).forEach(guardElement);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
