/**
 * Portfolio page interactions
 */

/* ── Mobile nav toggle ─────────────────── */
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
const navOverlay = document.getElementById('nav-overlay');
const siteNav = navToggle?.closest('.uu-site-nav');

function setNavOpen(open) {
  if (!navToggle || !navLinks) return;
  navLinks.classList.toggle('is-open', open);
  navToggle.setAttribute('aria-expanded', String(open));
  if (siteNav) siteNav.dataset.uuMenuOpen = String(open);
  if (navOverlay) {
    navOverlay.classList.toggle('is-visible', open);
    navOverlay.hidden = !open;
    navOverlay.setAttribute('aria-hidden', String(!open));
  }
  document.body.classList.toggle('portfolio-nav-open', open);
}

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    setNavOpen(!navLinks.classList.contains('is-open'));
  });

  navOverlay?.addEventListener('click', () => setNavOpen(false));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && siteNav?.dataset.uuMenuOpen === 'true') {
      setNavOpen(false);
    }
  });

  navLinks.querySelectorAll('.uu-site-nav__link').forEach((link) => {
    link.addEventListener('click', () => setNavOpen(false));
  });
}

/* Home / logo (#top) -> luon cuon len dau trang (header co the o day tren mobile) */
document.querySelectorAll('a[href="#top"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    setNavOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

/* ── Scroll-triggered floating nav ─────── */
const scrollNav = document.getElementById('scrollNav');
const scrollNavLinks = scrollNav ? scrollNav.querySelectorAll('.pf-scroll-nav__link') : [];
const sectionIds = ['top', 'projects', 'experience', 'about', 'contact'];

function setActiveNavSection(id) {
  scrollNavLinks.forEach((link) => {
    link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
  });

  document.querySelectorAll('.uu-site-nav__link').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === `#${id}`) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

function updateActiveNavFromScroll() {
  const probe = window.innerHeight * 0.38;
  let current = 'top';

  sectionIds.forEach((id) => {
    if (id === 'contact') return;
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= probe) current = id;
  });

  const contact = document.getElementById('contact');
  if (contact) {
    const { top, bottom } = contact.getBoundingClientRect();
    const nearPageEnd =
      window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 12;
    const contactInFocus = top <= probe || (top < window.innerHeight && bottom > probe) || nearPageEnd;
    if (contactInFocus) current = 'contact';
  }

  setActiveNavSection(current);
}

function bindNavLinkActive(link) {
  link.addEventListener('click', () => {
    const id = link.getAttribute('href')?.replace(/^#/, '');
    if (id) setActiveNavSection(id);
  });
}

if (scrollNav) {
  const hero = document.getElementById('hero');

  const updateScrollNavVisibility = () => {
    const threshold = (hero?.offsetHeight ?? 480) * 0.45;
    scrollNav.classList.toggle('is-visible', window.scrollY > threshold);
  };

  const onScroll = () => {
    updateScrollNavVisibility();
    updateActiveNavFromScroll();
  };

  updateScrollNavVisibility();
  updateActiveNavFromScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  scrollNavLinks.forEach(bindNavLinkActive);
  document.querySelectorAll('.uu-site-nav__link[href^="#"]').forEach(bindNavLinkActive);
  window.addEventListener('hashchange', () => {
    const id = location.hash.replace(/^#/, '') || 'top';
    if (sectionIds.includes(id)) setActiveNavSection(id);
  });
}

/* ── Experience accordion (single open) ── */
const accordion = document.querySelector('[data-accordion]');
if (accordion) {
  accordion.querySelectorAll('.portfolio-accordion__item').forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      accordion.querySelectorAll('.portfolio-accordion__item').forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });
}


/* ── Draggable floating badges (hero) ─────────────────────── */
document.querySelectorAll('.pf-float-badge').forEach((badge) => {
  let dragging = false, startX, startY, startLeft, startTop;
  badge.addEventListener('mousedown', (e) => {
    e.preventDefault();
    dragging = true;
    badge.classList.add('is-dragging');
    const rect = badge.getBoundingClientRect();
    const parent = badge.closest('.portfolio-hero') || badge.parentElement;
    const pRect = parent.getBoundingClientRect();
    startX = e.clientX; startY = e.clientY;
    startLeft = rect.left - pRect.left; startTop = rect.top - pRect.top;
    badge.style.left = startLeft + 'px'; badge.style.top = startTop + 'px';
    badge.style.right = 'auto'; badge.style.bottom = 'auto';
  });
  document.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    badge.style.left = (startLeft + (e.clientX - startX)) + 'px';
    badge.style.top  = (startTop  + (e.clientY - startY)) + 'px';
  });
  document.addEventListener('mouseup', () => {
    if (!dragging) return;
    dragging = false; badge.classList.remove('is-dragging');
  });
});
