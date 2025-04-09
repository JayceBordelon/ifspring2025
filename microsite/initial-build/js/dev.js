$(document).ready(function () {
  const entries = document.querySelectorAll('.dev-entry');

  const observer = new IntersectionObserver(
    (entriesList) => {
      entriesList.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    },
    {
      threshold: 0.3,
    },
  );

  entries.forEach((el) => observer.observe(el));
});
