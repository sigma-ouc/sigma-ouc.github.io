(() => {
  const initProjectGallery = () => {
    const table = document.querySelector('.sigma-projects-table');
    if (!table) return;

    const lightbox = document.createElement('div');
    lightbox.className = 'sigma-lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Enlarged project image');
    lightbox.innerHTML = '<button class="sigma-lightbox-close" type="button" aria-label="Close enlarged image">×</button><img alt="">';
    document.body.appendChild(lightbox);

    const preview = lightbox.querySelector('img');
    const close = () => lightbox.classList.remove('is-open');
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox || event.target.classList.contains('sigma-lightbox-close')) close();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') close();
    });

    table.querySelectorAll('td:nth-child(2) img').forEach((image) => {
      image.style.cursor = 'zoom-in';
      image.tabIndex = 0;
      const open = () => {
        preview.src = image.currentSrc || image.src;
        preview.alt = image.alt || 'Enlarged project image';
        lightbox.classList.add('is-open');
      };
      image.addEventListener('click', open);
      image.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          open();
        }
      });
    });
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initProjectGallery);
  else initProjectGallery();
})();
