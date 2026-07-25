/* ==========================================================================
   Sun* Asterisk Landing Page - Interactive JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll effect
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('header--scrolled');
    } else {
      header?.classList.remove('header--scrolled');
    }
  });

  // 2. Mobile menu drawer toggle
  const menuToggleBtn = document.querySelector('.header__toggle');
  const mobileNav = document.querySelector('#mobile-drawer');
  const mobileOverlay = document.querySelector('#mobile-overlay');
  const closeMenuBtn = document.querySelector('#close-drawer');

  function openMobileMenu() {
    mobileNav?.classList.remove('translate-x-full');
    mobileOverlay?.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileNav?.classList.add('translate-x-full');
    mobileOverlay?.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }

  menuToggleBtn?.addEventListener('click', openMobileMenu);
  closeMenuBtn?.addEventListener('click', closeMobileMenu);
  mobileOverlay?.addEventListener('click', closeMobileMenu);

  // 3. Counter Animation for Stats Block
  const statNumbers = document.querySelectorAll('.stats__number');
  let animated = false;

  function animateCounters() {
    statNumbers.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 2000; // 2 seconds
      const step = Math.ceil(target / (duration / 16));

      let current = 0;
      const updateCounter = () => {
        current += step;
        if (current >= target) {
          counter.textContent = target;
        } else {
          counter.textContent = current;
          requestAnimationFrame(updateCounter);
        }
      };
      updateCounter();
    });
  }

  // Intersection Observer for triggering counter animation when visible
  const statsSection = document.querySelector('.stats');
  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animateCounters();
          animated = true;
        }
      });
    }, { threshold: 0.4 });

    observer.observe(statsSection);
  }

  // 4. Interactive Business Domain Card Selection
  const businessCards = document.querySelectorAll('.business-card');
  businessCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      businessCards.forEach(c => {
        c.classList.remove('business-card--dark', 'business-card--active');
        c.classList.add('business-card--light');
      });
      card.classList.remove('business-card--light');
      card.classList.add('business-card--dark', 'business-card--active');
    });
  });

  // 5. Back to top button
  const backToTopBtn = document.querySelector('#back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn?.classList.remove('opacity-0', 'pointer-events-none');
      backToTopBtn?.classList.add('opacity-100', 'pointer-events-auto');
    } else {
      backToTopBtn?.classList.add('opacity-0', 'pointer-events-none');
      backToTopBtn?.classList.remove('opacity-100', 'pointer-events-auto');
    }
  });

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
