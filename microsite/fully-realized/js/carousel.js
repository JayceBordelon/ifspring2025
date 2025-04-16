document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(document.querySelectorAll('.carousel-slide'));
  const prevButton = document.querySelector('.carousel-btn.prev');
  const nextButton = document.querySelector('.carousel-btn.next');
  let index = 0;
  let autoScrollInterval;

  function updateCarousel() {
    const slideWidth = slides[0].clientWidth;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  function startAutoScroll() {
    clearInterval(autoScrollInterval);
    autoScrollInterval = setInterval(() => {
      index = (index + 1) % slides.length;
      updateCarousel();
    }, 5000);
  }

  nextButton.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    updateCarousel();
    startAutoScroll(); 
  });

  prevButton.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
    startAutoScroll(); 
  });

  window.addEventListener('resize', updateCarousel);

  updateCarousel();
  startAutoScroll(); 
});
