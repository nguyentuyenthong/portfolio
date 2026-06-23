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

const sections = ['hero', 'projects', 'experience', 'about', 'contact'];
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        link.removeAttribute('aria-current');
        if (href === `#${id}` || (id === 'hero' && href === '#top')) {
          link.setAttribute('aria-current', 'page');
        }
      });
    });
  },
  { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
);

sections.forEach((id) => {
  const el = document.getElementById(id);
  if (el) observer.observe(el);
});

document.getElementById('top')?.addEventListener('focus', () => {}, { passive: true });

const accordion = document.querySelector('[data-accordion]');
if (accordion) {
  const items = accordion.querySelectorAll('.portfolio-accordion__item');
  items.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      items.forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });
}
