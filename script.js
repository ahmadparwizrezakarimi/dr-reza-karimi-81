document.addEventListener("DOMContentLoaded", function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const languageButton = document.getElementById("language");
  let english = false;

  if (languageButton) {
    languageButton.addEventListener("click", function () {
      english = !english;
      document.documentElement.lang = english ? "en" : "fa";
      document.documentElement.dir = english ? "ltr" : "rtl";
      document.body.classList.toggle("en", english);

      document.querySelectorAll("[data-fa][data-en]").forEach(function (element) {
        element.textContent = english ? element.dataset.en : element.dataset.fa;
      });

      languageButton.textContent = english ? "دری" : "EN";
    });
  }

  const revealElements = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries, currentObserver) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(function (element) {
      observer.observe(element);
    });
  } else {
    revealElements.forEach(function (element) {
      element.classList.add("visible");
    });
  }
});
