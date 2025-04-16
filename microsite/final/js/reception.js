document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.reception-summary, .reception-stats, .awards');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 },
  );

  fadeElements.forEach((el) => observer.observe(el));
});
