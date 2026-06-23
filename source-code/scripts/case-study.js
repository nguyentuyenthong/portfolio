const nav = document.querySelector('.uu-site-nav');
const toggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.uu-site-nav__link');

toggle?.addEventListener('click', () => {
  const open = nav.getAttribute('data-uu-menu-open') === 'true';
  nav.setAttribute('data-uu-menu-open', String(!open));
  toggle.setAttribute('aria-expanded', String(!open));
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav.setAttribute('data-uu-menu-open', 'false');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

const tabRoot = document.querySelector('[data-case-tabs]');
if (tabRoot) {
  const tabs = tabRoot.querySelectorAll('[role="tab"]');
  const panels = tabs.length
    ? Array.from(tabs)
        .map((tab) => document.getElementById(tab.getAttribute('aria-controls')))
        .filter(Boolean)
    : [];

  const setActiveTab = (activeTab) => {
    tabs.forEach((tab) => {
      const isActive = tab === activeTab;
      tab.classList.toggle('is-selected', isActive);
      tab.setAttribute('aria-selected', String(isActive));
    });
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = document.getElementById(tab.getAttribute('aria-controls'));
      if (!target) return;
      setActiveTab(tab);
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      target.focus({ preventScroll: true });
    });
  });

  if (panels.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const match = tabRoot.querySelector(`[data-case-tab="${visible.target.id}"]`);
        if (match) setActiveTab(match);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5] }
    );

    panels.forEach((panel) => observer.observe(panel));
  }

  document.querySelectorAll('[data-case-tab-link]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const tabId = link.getAttribute('data-case-tab-link');
      const match = tabRoot.querySelector(`[data-case-tab="${tabId}"]`);
      const target = document.getElementById(tabId);
      if (!match || !target) return;
      event.preventDefault();
      setActiveTab(match);
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      target.focus({ preventScroll: true });
    });
  });
}
