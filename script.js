
document.addEventListener("DOMContentLoaded", function () {
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });
});
