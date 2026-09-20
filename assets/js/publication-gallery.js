(() => {
  const initPublicationFigures = () => {
    const archive = document.querySelector('.sigma-publications');
    if (!archive) return;

    // The first twelve figures follow the publication order in the archive.
    const orderedFigures = {
      C51: '/images/publications/01.png',
      C50: '/images/publications/02.png',
      J48: '/images/publications/J48.png',
      J47: '/images/publications/J47.png',
      J46: '/images/publications/J46.png',
      J45: '/images/publications/J45.png',
      C49: '/images/publications/C49.png',
      C48: '/images/publications/04.png',
      C47: '/images/publications/05.png',
      C46: '/images/publications/06.png',
      C45: '/images/publications/07.png',
      C44: '/images/publications/08.png',
      J44: '/images/publications/09.png',
      J43: '/images/publications/10.png?v=20260920-1',
      J42: '/images/publications/11.png',
      J41: '/images/publications/12.png',
      J40: '/images/publications/13.png',
      J39: '/images/publications/14.png',
      J38: '/images/publications/15.png',
      C43: '/images/publications/16.png',
      C42: '/images/publications/17.png',
      C41: '/images/publications/18.png',
      C40: '/images/publications/19.png',
      C38: '/images/publications/C38.png',
      C37: '/images/publications/C37.png',
      C36: '/images/publications/C36.png',
      C35: '/images/publications/C35.png',
      C34: '/images/publications/C34.png',
      C33: '/images/publications/C33.png',
      C32: '/images/publications/C32.png',
      C31: '/images/publications/C31.png',
      J31: '/images/publications/J31.png?v=20260920-1',
      J30: '/images/publications/J30.png?v=20260920-1',
      C29: '/images/publications/C29.png?v=20260920-1',
      C28: '/images/publications/C28.png?v=20260920-1',
      C27: '/images/publications/C27.png?v=20260920-1',
      J29: '/images/publications/J29.png?v=20260920-1',
      J28: '/images/publications/J28.png?v=20260920-1',
      J27: '/images/publications/J27.png?v=20260920-1',
      J37: '/images/publications/J37.png',
      C26: '/images/publications/C26.png',
      C25: '/images/publications/C25.png',
    };

    const figures = {
      ...orderedFigures,
      C20: '/images/publications/C20.png?v=20260920-1',
      J21: '/images/publications/J21.png?v=20260920-1',
      J20: '/images/publications/J20.png?v=20260920-1',
      C21: '/images/publications/C21.png?v=20260920-1',
      C22: '/images/publications/C22.png?v=20260920-1',
      J26: '/images/publications/J26.png?v=20260920-1',
      J25: '/images/publications/J25.png?v=20260920-1',
      J24: '/images/publications/J24.png?v=20260920-1',
      J23: '/images/publications/J23.png?v=20260920-1',
      C25: '/images/publications/C25.png',
      C26: '/images/publications/C26.png',
      ...(window.SIGMA_PUBLICATION_FIGURES || {}),
    };
    const fallbackFigures = [
      '/images/publications/01.png',
      '/images/publications/02.png',
      '/images/publications/03.png',
      '/images/publications/04.png',
      '/images/publications/05.png',
      '/images/publications/06.png',
      '/images/publications/07.png',
      '/images/publications/08.png',
      '/images/publications/09.png',
      '/images/publications/10.png',
      '/images/publications/11.png',
      '/images/publications/12.png',
      '/images/publications/13.png',
      '/images/publications/14.png',
      '/images/publications/15.png',
      '/images/publications/16.png',
      '/images/publications/17.png',
      '/images/publications/18.png',
      '/images/publications/19.png',
    ];
    const cards = archive.querySelectorAll(':scope > p');
    const lightbox = document.createElement('div');
    lightbox.className = 'sigma-lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Enlarged framework figure');
    lightbox.innerHTML = '<button class="sigma-lightbox-close" type="button" aria-label="Close enlarged figure">×</button><img alt="">';
    document.body.appendChild(lightbox);
    const lightboxImage = lightbox.querySelector('img');
    const closeLightbox = () => lightbox.classList.remove('is-open');
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox || event.target.classList.contains('sigma-lightbox-close')) closeLightbox();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeLightbox();
    });

    cards.forEach((card, index) => {
      const match = card.textContent.trim().match(/^([CJ]\d+)\./);
      if (!match || card.dataset.figureReady === 'true') return;

      const paperId = match[1];
      const copy = document.createElement('div');
      copy.className = 'paper-copy';
      copy.innerHTML = card.innerHTML;

      const figure = document.createElement('figure');
      figure.className = 'paper-figure';
      figure.setAttribute('aria-label', `${paperId} framework figure`);
      figure.setAttribute('tabindex', '0');

      // Older papers reuse the available figures so every publication has a visual.
      const imagePath = figures[paperId] || fallbackFigures[index % fallbackFigures.length];
      if (imagePath) {
        const image = document.createElement('img');
        image.src = imagePath;
        image.alt = `${paperId} illustrative research framework`;
        image.loading = 'lazy';
        const openLightbox = () => {
          lightboxImage.src = image.src;
          lightboxImage.alt = image.alt;
          lightbox.classList.add('is-open');
        };
        image.addEventListener('click', openLightbox);
        figure.addEventListener('keydown', (event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openLightbox();
          }
        });
        image.addEventListener('error', () => {
          figure.innerHTML = '<div class="paper-figure-placeholder"><span>＋</span><small>Illustrative framework</small></div>';
        });
        figure.appendChild(image);
      } else {
        figure.innerHTML = '<div class="paper-figure-placeholder"><span>＋</span><small>Illustrative framework</small></div>';
      }

      card.replaceChildren(figure, copy);
      card.dataset.figureReady = 'true';
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPublicationFigures);
  } else {
    initPublicationFigures();
  }
})();
