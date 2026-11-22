
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

// ============================================
// A.P.R.K — 3D DIGITAL UNIVERSE
// ============================================

(function () {
  function startAPRKUniverse() {
    if (!window.THREE) {
      console.error("Three.js library not loaded.");
      return;
    }

    const THREE = window.THREE;
    const canvas = document.getElementById("universe");

    if (!canvas || canvas.dataset.aprk3d === "active") return;
    canvas.dataset.aprk3d = "active";

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x05050b);
    scene.fog = new THREE.FogExp2(0x05050b, 0.012);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    camera.position.set(0, 4, 19);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    // LIGHTING
    scene.add(new THREE.AmbientLight(0xffffff, 1.4));

    const centralLight = new THREE.PointLight(0xffd58a, 180, 100);
    centralLight.position.set(0, 3, 5);
    scene.add(centralLight);

    // STAR FIELD
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = [];

    for (let i = 0; i < 2200; i++) {
      starPositions.push(
        (Math.random() - 0.5) * 180,
        (Math.random() - 0.5) * 120,
        (Math.random() - 0.5) * 100
      );
    }

    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starPositions, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      color: 0xd8caff,
      size: 0.12,
      transparent: true,
      opacity: 0.9
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // CENTRAL SUN
    const sunGeometry = new THREE.SphereGeometry(1.8, 48, 48);
    const sunMaterial = new THREE.MeshBasicMaterial({
      color: 0xffd27a
    });

    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    // SUN GLOW
    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(2.2, 32, 32),
      new THREE.MeshBasicMaterial({
        color: 0x9d63ff,
        transparent: true,
        opacity: 0.12,
        side: THREE.BackSide
      })
    );

    scene.add(glow);

    // PLANETS
    const planets = [];
    const planetSettings = [
      { name: "MEDICINE", color: 0x48dfff, radius: 0.65, distance: 4.5, speed: 0.35 },
      { name: "ISLAMIC STUDIES", color: 0xe8c477, radius: 0.85, distance: 7, speed: 0.23 },
      { name: "ARABIC", color: 0x9565ff, radius: 0.55, distance: 9.5, speed: 0.18 },
      { name: "READING", color: 0x5ce0b5, radius: 0.7, distance: 12, speed: 0.14 },
      { name: "SPORTS", color: 0xff7caa, radius: 0.6, distance: 14.5, speed: 0.11 }
    ];

    planetSettings.forEach((data, index) => {
      const geometry = new THREE.SphereGeometry(data.radius, 40, 40);

      const material = new THREE.MeshStandardMaterial({
        color: data.color,
        metalness: 0.45,
        roughness: 0.3,
        emissive: data.color,
        emissiveIntensity: 0.15
      });

      const planet = new THREE.Mesh(geometry, material);

      planet.userData = data;
      planet.userData.angle = index * 1.25;

      scene.add(planet);
      planets.push(planet);

      const orbit = new THREE.Mesh(
        new THREE.RingGeometry(data.distance - 0.012, data.distance + 0.012, 160),
        new THREE.MeshBasicMaterial({
          color: data.color,
          transparent: true,
          opacity: 0.3,
          side: THREE.DoubleSide
        })
      );

      orbit.rotation.x = Math.PI / 2;
      scene.add(orbit);
    });

    // TOUCH AND MOUSE CONTROL
    let dragging = false;
    let previousX = 0;
    let previousY = 0;
    let rotationX = 0;
    let rotationY = 0;
    let zoom = 19;

    function pointerDown(event) {
      dragging = true;
      previousX = event.clientX;
      previousY = event.clientY;
    }

    function pointerMove(event) {
      if (!dragging) return;

      const dx = event.clientX - previousX;
      const dy = event.clientY - previousY;

      rotationY += dx * 0.004;
      rotationX += dy * 0.003;

      rotationX = Math.max(-0.8, Math.min(0.8, rotationX));

      previousX = event.clientX;
      previousY = event.clientY;
    }

    function pointerUp() {
      dragging = false;
    }

    renderer.domElement.addEventListener("pointerdown", pointerDown);
    window.addEventListener("pointermove", pointerMove);
    window.addEventListener("pointerup", pointerUp);

    renderer.domElement.addEventListener("wheel", event => {
      zoom += event.deltaY * 0.015;
      zoom = Math.max(8, Math.min(35, zoom));
    }, { passive: true });

    // PLANET SELECTION
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    renderer.domElement.addEventListener("click", event => {
      const rect = renderer.domElement.getBoundingClientRect();

      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const hits = raycaster.intersectObjects(planets);

      if (hits.length) {
        const selected = hits[0].object;
        const info = document.getElementById("planetInfo");

        if (info) {
          info.textContent = selected.userData.name;
          info.classList.add("visible");
        }
      }
    });

    // ANIMATION
    const clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);

      const time = clock.getElapsedTime();

      sun.rotation.y += 0.002;
      glow.scale.setScalar(1 + Math.sin(time * 1.5) * 0.035);

      stars.rotation.y += 0.00012;

      planets.forEach(planet => {
        const data = planet.userData;

        data.angle += data.speed * 0.003;

        planet.position.x = Math.cos(data.angle) * data.distance;
        planet.position.z = Math.sin(data.angle) * data.distance;
        planet.position.y = Math.sin(data.angle * 2) * 0.35;

        planet.rotation.y += 0.008;
      });

      scene.rotation.x += (rotationX - scene.rotation.x) * 0.04;
      scene.rotation.y += (rotationY - scene.rotation.y) * 0.04;

      camera.position.z += (zoom - camera.position.z) * 0.08;

      renderer.render(scene, camera);
    }

    // RESPONSIVE
    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    animate();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startAPRKUniverse);
  } else {
    startAPRKUniverse();
  }
})();
