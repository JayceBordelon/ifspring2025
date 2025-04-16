document.addEventListener('DOMContentLoaded', () => {
  const features = document.querySelectorAll('.gameplay-feature');

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

  features.forEach((feature) => observer.observe(feature));
});
