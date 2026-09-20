(() => {
  const initHeroCarousel = () => {
    const media = document.querySelector('#section-hero .hero-media');
    if (!media || media.dataset.carouselReady === 'true') return;

    const images = [
      '/images/hero-carousel/01.jpg',
      '/images/hero-carousel/02.jpg',
      '/images/hero-carousel/03.jpg',
      '/images/hero-carousel/04.jpg',
      '/images/hero-carousel/05.jpg?v=20260920-1',
      '/images/hero-carousel/heying.jpg',
      '/images/hero-carousel/heying2.jpg',
    ];
    const carousel = document.createElement('div');
    carousel.className = 'sigma-hero-carousel';
    carousel.setAttribute('aria-label', 'SIGMA Research Group photos');

    const lightbox = document.createElement('div');
    lightbox.className = 'sigma-lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Enlarged hero image');
    lightbox.innerHTML = '<button class="sigma-lightbox-close" type="button" aria-label="Close enlarged image">×</button><button class="sigma-lightbox-arrow sigma-lightbox-arrow-prev" type="button" aria-label="Previous enlarged image">‹</button><img alt=""><button class="sigma-lightbox-arrow sigma-lightbox-arrow-next" type="button" aria-label="Next enlarged image">›</button>';
    document.body.appendChild(lightbox);
    const lightboxImage = lightbox.querySelector('img');
    const lightboxPrevious = lightbox.querySelector('.sigma-lightbox-arrow-prev');
    const lightboxNext = lightbox.querySelector('.sigma-lightbox-arrow-next');
    const closeLightbox = () => lightbox.classList.remove('is-open');
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox || event.target.classList.contains('sigma-lightbox-close')) closeLightbox();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeLightbox();
      if (!lightbox.classList.contains('is-open')) return;
      if (event.key === 'ArrowLeft') lightboxPrevious.click();
      if (event.key === 'ArrowRight') lightboxNext.click();
    });

    const slides = images.map((src, index) => {
      const slide = document.createElement('img');
      slide.className = `sigma-hero-slide${index === 0 ? ' is-active' : ''}`;
      slide.src = src;
      slide.alt = `SIGMA Research Group photo ${index + 1}`;
      slide.setAttribute('role', 'button');
      slide.setAttribute('tabindex', '0');
      slide.addEventListener('click', () => {
        current = index;
        lightboxImage.src = slide.src;
        lightboxImage.alt = slide.alt;
        lightbox.classList.add('is-open');
      });
      slide.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          slide.click();
        }
      });
      // Preload every slide so the transition never switches to an empty frame.
      slide.loading = 'eager';
      carousel.appendChild(slide);
      return slide;
    });

    const dots = document.createElement('div');
    dots.className = 'sigma-hero-dots';
    const previous = document.createElement('button');
    previous.type = 'button';
    previous.className = 'sigma-hero-arrow sigma-hero-arrow-prev';
    previous.setAttribute('aria-label', 'Previous photo');
    previous.innerHTML = '&#8249;';
    const next = document.createElement('button');
    next.type = 'button';
    next.className = 'sigma-hero-arrow sigma-hero-arrow-next';
    next.setAttribute('aria-label', 'Next photo');
    next.innerHTML = '&#8250;';
    const showSlide = (nextIndex) => {
      if (!slides[nextIndex] || (slides[nextIndex].complete && slides[nextIndex].naturalWidth === 0)) return;
      slides.forEach((slide, index) => slide.classList.toggle('is-active', index === nextIndex));
      dots.querySelectorAll('button').forEach((dot, index) => dot.classList.toggle('is-active', index === nextIndex));
    };
    images.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = `sigma-hero-dot${index === 0 ? ' is-active' : ''}`;
      dot.setAttribute('aria-label', `Show photo ${index + 1}`);
      dot.addEventListener('click', () => {
        current = index;
        showSlide(current);
      });
      dots.appendChild(dot);
    });

    let current = 0;
    lightboxPrevious.addEventListener('click', () => {
      current = (current - 1 + images.length) % images.length;
      showSlide(current);
      lightboxImage.src = slides[current].src;
      lightboxImage.alt = slides[current].alt;
    });
    lightboxNext.addEventListener('click', () => {
      current = (current + 1) % images.length;
      showSlide(current);
      lightboxImage.src = slides[current].src;
      lightboxImage.alt = slides[current].alt;
    });
    previous.addEventListener('click', () => {
      current = (current - 1 + images.length) % images.length;
      showSlide(current);
    });
    next.addEventListener('click', () => {
      current = (current + 1) % images.length;
      showSlide(current);
    });
    carousel.appendChild(previous);
    carousel.appendChild(next);
    carousel.appendChild(dots);
    // Keep the theme-generated image in place as a layout and loading fallback.
    media.classList.add('has-sigma-carousel');
    media.appendChild(carousel);
    media.dataset.carouselReady = 'true';

    window.setInterval(() => {
      current = (current + 1) % images.length;
      showSlide(current);
    }, 8000);
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initHeroCarousel);
  else initHeroCarousel();
})();
