document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(document.querySelectorAll('.carousel-slide'));
  const prevButton = document.querySelector('.carousel-btn.prev');
  const nextButton = document.querySelector('.carousel-btn.next');
  let index = 0;

  function updateCarousel() {
    const slideWidth = slides[0].clientWidth;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  nextButton.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    updateCarousel();
  });

  prevButton.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  window.addEventListener('resize', updateCarousel);
  updateCarousel();

  setInterval(() => {
    index = (index + 1) % slides.length;
    updateCarousel();
  }, 5000);
});
