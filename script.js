
document.addEventListener("DOMContentLoaded", function () {
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

  // YEAR
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();

  // LANGUAGE
  const languageButton = $("#language");
  let english = false;

  if (languageButton) {
    languageButton.addEventListener("click", function () {
      english = !english;
      document.documentElement.lang = english ? "en" : "fa";
      document.documentElement.dir = english ? "ltr" : "rtl";
      document.body.classList.toggle("en", english);

      $$("[data-fa][data-en]").forEach(element => {
        element.textContent = english ? element.dataset.en : element.dataset.fa;
      });

      languageButton.textContent = english ? "دری" : "EN";
    });
  }

  // CINEMATIC INTRO
  const intro = $("#intro");

  function closeIntro() {
    if (!intro || intro.classList.contains("intro-closed")) return;
    intro.classList.add("intro-closed");
    setTimeout(() => intro.style.display = "none", 1200);
  }

  const enterWorld = $("#enterWorld");
  const skipIntro = $("#skipIntro");

  if (enterWorld) enterWorld.addEventListener("click", closeIntro);
  if (skipIntro) skipIntro.addEventListener("click", closeIntro);

  // SCROLL REVEAL
  const revealElements = $$(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(element => observer.observe(element));
  } else {
    revealElements.forEach(element => element.classList.add("visible"));
  }

  // GALAXY PLANETS
  const planets = $$(".planet");
  const planetInfo = $("#planetInfo");

  planets.forEach(planet => {
    planet.addEventListener("click", () => {
      planets.forEach(item => item.classList.remove("active"));
      planet.classList.add("active");

      if (planetInfo) {
        planetInfo.textContent = planet.dataset.info || "";
        planetInfo.classList.add("visible");
      }
    });
  });

  // BACK TO TOP
  const backTop = $("#backTop");

  if (backTop) {
    backTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // SHARE SITE
  const shareSite = $("#shareSite");

  if (shareSite) {
    shareSite.addEventListener("click", async () => {
      const shareData = {
        title: document.title,
        text: "Discover the digital universe of A.P.R.K",
        url: window.location.href
      };

      try {
        if (navigator.share) {
          await navigator.share(shareData);
        } else if (navigator.clipboard) {
          await navigator.clipboard.writeText(window.location.href);
          showToast("Link copied successfully");
        } else {
          showToast("Sharing is not supported on this browser");
        }
      } catch (error) {
        if (error.name !== "AbortError") showToast("Unable to share right now");
      }
    });
  }

  // TOAST NOTIFICATIONS
  const toast = $("#toast");
  let toastTimer;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2800);
  }

  // SOUND CONTROL
  const soundToggle = $("#soundToggle");
  let soundEnabled = false;
  let audioContext = null;

  if (soundToggle) {
    soundToggle.addEventListener("click", () => {
      soundEnabled = !soundEnabled;
      soundToggle.classList.toggle("active", soundEnabled);
      soundToggle.setAttribute("aria-pressed", String(soundEnabled));

      showToast(soundEnabled ? "Sound effects enabled" : "Sound effects disabled");

      if (soundEnabled) {
        try {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          if (AudioContext) {
            audioContext = audioContext || new AudioContext();
            if (audioContext.state === "suspended") audioContext.resume();
          }
        } catch (error) {
          soundEnabled = false;
        }
      }
    });
  }

  // CURSOR GLOW
  const cursorGlow = $(".cursor-glow");

  if (cursorGlow && window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("pointermove", event => {
      cursorGlow.style.left = event.clientX + "px";
      cursorGlow.style.top = event.clientY + "px";
    }, { passive: true });
  }

  // INTERACTIVE CARD TILT
  const tiltCards = $$(".journey-card, .interest-item");

  if (window.matchMedia("(pointer: fine)").matches) {
    tiltCards.forEach(card => {
      card.addEventListener("pointermove", event => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;

        const rotateX = (0.5 - y) * 5;
        const rotateY = (x - 0.5) * 5;

        card.style.transform =
          `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
      });

      card.addEventListener("pointerleave", () => {
        card.style.transform = "";
      });
    });
  }

  // GALAXY CANVAS
  const canvas = $("#universe");

  if (canvas) {
    const ctx = canvas.getContext("2d");

    if (ctx) {
      let width = 0;
      let height = 0;
      let stars = [];
      let pointerX = 0;
      let pointerY = 0;

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      function resizeCanvas() {
        const ratio = Math.min(window.devicePixelRatio || 1, 2);
        width = window.innerWidth;
        height = window.innerHeight;

        canvas.width = width * ratio;
        canvas.height = height * ratio;
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";

        ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

        const count = Math.min(130, Math.floor((width * height) / 11000));

        stars = Array.from({ length: count }, () => ({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5 + 0.3,
          speed: Math.random() * 0.25 + 0.04,
          alpha: Math.random() * 0.65 + 0.2
        }));
      }

      function drawUniverse() {
        ctx.clearRect(0, 0, width, height);

        stars.forEach(star => {
          const x = star.x + pointerX * star.speed * 0.025;
          const y = star.y + pointerY * star.speed * 0.025;

          ctx.beginPath();
          ctx.arc(x, y, star.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(220, 200, 255, ${star.alpha})`;
          ctx.fill();
        });

        if (!reducedMotion) {
          stars.forEach(star => {
            star.y -= star.speed;

            if (star.y < -5) {
              star.y = height + 5;
              star.x = Math.random() * width;
            }
          });

          requestAnimationFrame(drawUniverse);
        }
      }

      window.addEventListener("resize", resizeCanvas);

      window.addEventListener("pointermove", event => {
        pointerX = event.clientX - width / 2;
        pointerY = event.clientY - height / 2;
      }, { passive: true });

      resizeCanvas();
      drawUniverse();
    }
  }

  // INITIALIZATION
  document.body.classList.add("aprk-ready");
});
