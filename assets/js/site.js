(() => {
  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  const mobileNavQuery = window.matchMedia('(max-width: 760px)');

  if (header) {
    const updateHeader = () => {
      header.classList.toggle('scrolled', window.scrollY > 8);
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }

  if (menuButton && nav) {
    const setMenu = (open) => {
      nav.classList.toggle('open', open);
      menuButton.setAttribute('aria-expanded', String(open));

      document.body.classList.toggle(
        'nav-open',
        open && mobileNavQuery.matches
      );
    };

    menuButton.addEventListener('click', () => {
      setMenu(!nav.classList.contains('open'));
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        setMenu(false);
      });
    });

    document.addEventListener('keydown', (event) => {
      if (
        event.key === 'Escape' &&
        nav.classList.contains('open')
      ) {
        setMenu(false);
        menuButton.focus();
      }
    });

    document.addEventListener('click', (event) => {
      if (
        !mobileNavQuery.matches ||
        !nav.classList.contains('open')
      ) {
        return;
      }

      if (
        nav.contains(event.target) ||
        menuButton.contains(event.target)
      ) {
        return;
      }

      setMenu(false);
    });

    const syncMenu = () => {
      if (!mobileNavQuery.matches) {
        setMenu(false);
      }
    };

    if (mobileNavQuery.addEventListener) {
      mobileNavQuery.addEventListener('change', syncMenu);
    } else if (mobileNavQuery.addListener) {
      mobileNavQuery.addListener(syncMenu);
    }
  }

  const engagementGroups =
    document.querySelectorAll('.engagement-group');

  if (engagementGroups.length) {
    const mobileQuery =
      window.matchMedia('(max-width: 720px)');

    const syncEngagementGroups = () => {
      engagementGroups.forEach((group) => {
        const button =
          group.querySelector('.group-toggle');

        if (!button) return;

        if (mobileQuery.matches) {
          group.classList.remove('is-open');
          button.setAttribute(
            'aria-expanded',
            'false'
          );
        } else {
          group.classList.add('is-open');
          button.setAttribute(
            'aria-expanded',
            'true'
          );
        }
      });
    };

    engagementGroups.forEach((group) => {
      const button =
        group.querySelector('.group-toggle');

      if (!button) return;

      button.addEventListener('click', () => {
        if (!mobileQuery.matches) return;

        const open =
          group.classList.toggle('is-open');

        button.setAttribute(
          'aria-expanded',
          String(open)
        );
      });
    });

    if (mobileQuery.addEventListener) {
      mobileQuery.addEventListener(
        'change',
        syncEngagementGroups
      );
    } else if (mobileQuery.addListener) {
      mobileQuery.addListener(
        syncEngagementGroups
      );
    }

    syncEngagementGroups();
  }

  const reduceMotion =
    window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

  const revealItems =
    document.querySelectorAll('[data-reveal]');

  if (
    !reduceMotion &&
    'IntersectionObserver' in window
  ) {
    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(
                'is-visible'
              );

              observer.unobserve(
                entry.target
              );
            }
          });
        },
        {
          threshold: 0.12
        }
      );

    revealItems.forEach((item) => {
      observer.observe(item);
    });
  } else {
    revealItems.forEach((item) => {
      item.classList.add('is-visible');
    });
  }
})();
