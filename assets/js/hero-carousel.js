(() => {
  const initHeroCarousel = () => {
    const media = document.querySelector('#section-hero .hero-media');
    if (!media || media.dataset.carouselReady === 'true') return;

    const images = [
      '/images/hero-carousel/01.jpg',
      '/images/hero-carousel/02.jpg',
      '/images/hero-carousel/03.jpg',
      '/images/hero-carousel/04.jpg',
      '/images/hero-carousel/heying.jpg',
      '/images/hero-carousel/heying2.jpg',
    ];
    const carousel = document.createElement('div');
    carousel.className = 'sigma-hero-carousel';
    carousel.setAttribute('aria-label', 'SIGMA Research Group photos');

    const slides = images.map((src, index) => {
      const slide = document.createElement('img');
      slide.className = `sigma-hero-slide${index === 0 ? ' is-active' : ''}`;
      slide.src = src;
      slide.alt = `SIGMA Research Group photo ${index + 1}`;
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
    previous.addEventListener('click', () => {
      current = (current - 1 + images.length) % images.length;
      showSlide(current);
    });
    next.addEventListener('click', () => {
      current = (current + 1) % images.length;
      showSlide(current);
    });
    carousel.addEventListener('click', (event) => {
      if (event.target.closest('button')) return;
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
    }, 5000);
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initHeroCarousel);
  else initHeroCarousel();
})();
