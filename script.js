const UNIVERSE_DATA = {
  fa: {
    dir: "rtl",
    welcome: "به جهان دیجیتال احمد پرویز رضا کریمی خوش آمدید · Welcome to the Digital Universe of Ahmad Parwiz Reza Karimi",
    enterBtn: "ENTER THE UNIVERSE · ورود به جهان",
    skipBtn: "عبور از مقدمه · Skip Intro",
    nav: {
      galaxy: "کهکشان 3D",
      bio: "بیوگرافی",
      planets: "سیاره‌ها",
      contact: "ارتباط"
    },
    hudBadge: "REAL-TIME 3D GALAXY · 8 WORLDS",
    hudHint: "برای چرخش بکشید، برای زوم نزدیک/دور کنید و روی سیاره بزنید",
    nasheedOffLabel: "نشید پس‌زمینه (پیش‌فرض خاموش): <strong>خاموش</strong>",
    nasheedOnLabel: "نشید پس‌زمینه در حال پخش: <strong>{track}</strong>",
    nasheedBtnOff: "▶ روشن کردن نشید",
    nasheedBtnOn: "❚❚ خاموش کردن نشید",
    planetsHeading: "۸ سیاره جهان دیجیتال A.P.R.K",
    bioKicker: "PERSONAL BIOGRAPHY · A.P.R.K",
    bioFullName: "احمد پرویز رضا کریمی",
    bioMeta: "محصل طب معالجوی · پوهنتون تاج (General Medicine · Taj University)",
    bioParagraph1:
      "من احمد پرویز رضا کریمی هستم؛ دانشجوی طب معالجوی در پوهنتون تاج با اشتیاق پیوسته به یادگیری عمیق، درک علمی بدن انسان و خدمت صادقانه به سلامت جامعه.",
    bioParagraph2:
      "مسیر فکری و علمی من میان دانش پزشکی، مطالعات اسلامی، یادگیری زبان عربی و علاقه‌مندی‌های شخصی مانند سنوکر، فوتبال و مطالعه شکل گرفته تا آینده‌ای متعادل، آگاهانه و اثرگذار بسازم.",
    phaseNotice:
      "فاز ۱ فعال شد (مقدمه سینمایی، کهکشان سه‌بعدی تعاملی ۸ سیاره‌ای، بیوگرافی و موتور نشید پس‌زمینه). بخش‌های آزمایشگاه سه‌بعدی پزشکی، گالری، تایم‌لاین، دیتابیس آنلاین و A.P.R.K AI در فازهای بعدی تکمیل می‌شوند.",
    likeBtnLabel: "لایک جهان A.P.R.K",
    contactHeading: "ارتباط با احمد پرویز رضا کریمی",
    planets: [
      {
        id: "biography",
        tag: "PLANET 01 · BIOGRAPHY",
        name: "بیوگرافی من",
        short: "دانشجوی طب معالجوی در پوهنتون تاج؛ پیوند دانش، اخلاق و تلاش برای آینده.",
        detail: "احمد پرویز رضا کریمی (A.P.R.K) — دانشجوی طب معالجوی در پوهنتون تاج؛ علاقه‌مند به آموختن، خدمت به انسان‌ها، مطالعات اسلامی، زبان عربی و رشد مستمر فردی."
      },
      {
        id: "medical",
        tag: "PLANET 02 · MEDICAL JOURNEY",
        name: "مسیر پزشکی",
        short: "تحصیل در رشته طب معالجوی در پوهنتون تاج و یادداشت‌های علمی.",
        detail: "مسیر تحصیلی طب معالجوی در پوهنتون تاج؛ تمرکز بر درک بنیادی علوم طبی، نظم مطالعاتی و آماده‌سازی برای مسئولیت حرفه‌ای آینده."
      },
      {
        id: "islamic",
        tag: "PLANET 03 · ISLAMIC STUDIES",
        name: "مطالعات اسلامی",
        short: "آشنایی عمیق‌تر با ارزش‌های دینی، معرفت و اخلاق.",
        detail: "بخش اختصاصی مطالعات اسلامی برای تعمیق فهم دینی، اخلاق و پیوند معنویت با زندگی علمی و روزمره."
      },
      {
        id: "arabic",
        tag: "PLANET 04 · ARABIC LANGUAGE",
        name: "زبان عربی",
        short: "یادگیری و درک متون و زیبایی‌های زبان عربی.",
        detail: "مسیر یادگیری زبان عربی به عنوان کلیدی برای درک دقیق‌تر متون علمی، دینی و ادبی."
      },
      {
        id: "interests",
        tag: "PLANET 05 · PERSONAL INTERESTS",
        name: "علاقه‌مندی‌های شخصی",
        short: "سنوکر، فوتبال، مطالعه، زبان عربی و علوم پزشکی.",
        detail: "ترکیب دقت و استراتژی در سنوکر، تحرک و روح تیمی در فوتبال، مطالعه مداوم و شوق یادگیری در علوم پزشکی و عربی."
      },
      {
        id: "timeline",
        tag: "PLANET 06 · TIMELINE & MEMORIES",
        name: "تایم‌لاین و خاطرات",
        short: "نقاط عطف مسیر تحصیلی و لحظات ماندگار.",
        detail: "گاه‌شمار مسیر علمی و شخصی؛ رویدادها و تاریخ‌های واقعی در فازهای بعدی از طریق مدیریت ثبت می‌شوند."
      },
      {
        id: "gallery",
        tag: "PLANET 07 · GALLERY",
        name: "گالری تصاویر و ویدئو",
        short: "مجموعه تصاویر و ویدئوهای منتخب با حفظ عکس پروفایل.",
        detail: "گالری بصری جهان A.P.R.K با حفظ تصویر اصلی پروفایل (profile.jpg) و قابلیت مدیریت در فازهای بعدی."
      },
      {
        id: "goals",
        tag: "PLANET 08 · GOALS & FUTURE",
        name: "اهداف و آینده",
        short: "چشم‌انداز علمی، حرفه‌ای و توسعه فردی.",
        detail: "ساختن آینده‌ای روشن با استمرار در یادگیری، پایبندی به ارزش‌ها و خدمت مؤثر در حوزه پزشکی."
      }
    ]
  },
  en: {
    dir: "ltr",
    welcome: "Welcome to the Digital Universe of Ahmad Parwiz Reza Karimi · به جهان دیجیتال احمد پرویز رضا کریمی خوش آمدید",
    enterBtn: "ENTER THE UNIVERSE",
    skipBtn: "Skip Intro",
    nav: {
      galaxy: "3D Galaxy",
      bio: "Biography",
      planets: "Planets",
      contact: "Connect"
    },
    hudBadge: "REAL-TIME 3D GALAXY · 8 WORLDS",
    hudHint: "Drag to orbit, pinch/scroll to zoom, and select any planet",
    nasheedOffLabel: "Background Nasheed (Default Off): <strong>Muted</strong>",
    nasheedOnLabel: "Nasheed Playing: <strong>{track}</strong>",
    nasheedBtnOff: "▶ Enable Nasheed",
    nasheedBtnOn: "❚❚ Mute Nasheed",
    planetsHeading: "8 Planets of the A.P.R.K Digital Universe",
    bioKicker: "PERSONAL BIOGRAPHY · A.P.R.K",
    bioFullName: "Ahmad Parwiz Reza Karimi",
    bioMeta: "Medical Student · Taj University (General Medicine)",
    bioParagraph1:
      "I am Ahmad Parwiz Reza Karimi, a General Medicine student at Taj University dedicated to continuous learning, understanding human health, and serving people with integrity.",
    bioParagraph2:
      "My journey bridges medical studies, Islamic studies, Arabic language learning, and personal interests including snooker, football, and reading to build a thoughtful and purposeful future.",
    phaseNotice:
      "Phase 1 active (Cinematic intro, interactive 8-planet 3D galaxy, biography, and optional background nasheed engine). Medical 3D lab, gallery, timeline, database backend, and A.P.R.K AI follow in upcoming phases.",
    likeBtnLabel: "Like A.P.R.K Universe",
    contactHeading: "Connect with Ahmad Parwiz Reza Karimi",
    planets: [
      {
        id: "biography",
        tag: "PLANET 01 · BIOGRAPHY",
        name: "My Biography",
        short: "General Medicine student at Taj University; uniting learning, ethics, and growth.",
        detail: "Ahmad Parwiz Reza Karimi (A.P.R.K) — Medical student at Taj University passionate about learning, helping others, Islamic studies, Arabic, and personal growth."
      },
      {
        id: "medical",
        tag: "PLANET 02 · MEDICAL JOURNEY",
        name: "Medical Journey",
        short: "General Medicine studies at Taj University and study reflections.",
        detail: "Academic path in General Medicine at Taj University, focused on core medical understanding, discipline, and future service."
      },
      {
        id: "islamic",
        tag: "PLANET 03 · ISLAMIC STUDIES",
        name: "Islamic Studies",
        short: "Exploring Islamic knowledge, values, and ethics.",
        detail: "Dedicated space for Islamic studies, deepening ethical grounding and thoughtful reflection."
      },
      {
        id: "arabic",
        tag: "PLANET 04 · ARABIC LANGUAGE",
        name: "Arabic Language",
        short: "Learning Arabic and appreciating its texts and structure.",
        detail: "Arabic language study supporting clearer comprehension of classical and modern texts."
      },
      {
        id: "interests",
        tag: "PLANET 05 · PERSONAL INTERESTS",
        name: "Personal Interests",
        short: "Snooker, football, reading, Arabic, and medical science.",
        detail: "Balancing focus and strategy in snooker, energy and teamwork in football, regular reading, and curiosity in medicine and Arabic."
      },
      {
        id: "timeline",
        tag: "PLANET 06 · TIMELINE & MEMORIES",
        name: "Memories & Timeline",
        short: "Educational milestones and meaningful moments.",
        detail: "Chronological life and study timeline; verified dates and milestones will be managed through admin tools in later phases."
      },
      {
        id: "gallery",
        tag: "PLANET 07 · GALLERY",
        name: "Gallery",
        short: "Curated images and videos preserving profile.jpg.",
        detail: "Visual archive for A.P.R.K while preserving the authentic profile.jpg photograph."
      },
      {
        id: "goals",
        tag: "PLANET 08 · GOALS & FUTURE",
        name: "Goals & Future",
        short: "Long-term vision for medicine, learning, and contribution.",
        detail: "Working steadily toward future medical and personal goals with discipline and clarity."
      }
    ]
  }
};

let lang = "fa";
let selectedPlanetIndex = 0;
let likesCount = 0;
let nasheedEnabled = false; // پیش‌فرض خاموش طبق مشخصات
let audioCtx = null;
let nasheedInterval = null;
let lowPerfMode = false;

// مقدمه سینمایی و ذرات طلایی
function initIntroParticles() {
  const canvas = document.getElementById("introCanvas");
  const ctx = canvas.getContext("2d");
  let w = (canvas.width = window.innerWidth);
  let h = (canvas.height = window.innerHeight);

  const count = lowPerfMode ? 45 : 110;
  const particles = Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 2.2 + 0.6,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    alpha: Math.random() * 0.7 + 0.2
  }));

  function render() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212, 175, 55, ${p.alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(render);
  }
  render();

  window.addEventListener("resize", () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });

  if (window.gsap && !lowPerfMode) {
    gsap.from("#introBrand", { y: 26, opacity: 0, duration: 0.9, ease: "power3.out" });
    gsap.from("#introName", { y: 18, opacity: 0, duration: 0.9, delay: 0.2, ease: "power3.out" });
    gsap.to(".golden-portal", {
      scale: 1.06,
      duration: 2.6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }
}

// کهکشان سه‌بعدی واقعی با Three.js
let planetMeshes = [];
let cameraTargetPos = null;

function init3DGalaxy() {
  const canvas = document.getElementById("galaxyCanvas");
  if (!window.THREE || !canvas) return;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x040508, 0.012);

  const width = canvas.clientWidth || window.innerWidth;
  const height = canvas.clientHeight || 460;
  const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 300);
  camera.position.set(0, 14, 34);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: !lowPerfMode, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lowPerfMode ? 1.25 : 2));

  // نورپردازی
  scene.add(new THREE.AmbientLight(0xf3e5ab, 0.55));
  const coreLight = new THREE.PointLight(0xd4af37, 2.4, 90);
  scene.add(coreLight);

  // هسته طلایی کهکشان
  const coreGeo = new THREE.SphereGeometry(2.6, 28, 28);
  const coreMat = new THREE.MeshStandardMaterial({
    color: 0xd4af37,
    emissive: 0x8a6914,
    emissiveIntensity: 0.8,
    roughness: 0.25,
    metalness: 0.85
  });
  const coreMesh = new THREE.Mesh(coreGeo, coreMat);
  scene.add(coreMesh);

  // ستاره‌ها و غبار سحابی
  const starCount = lowPerfMode ? 650 : 1800;
  const starPositions = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i++) {
    const radius = 12 + Math.random() * 85;
    const theta = Math.random() * Math.PI * 2;
    const phi = (Math.random() - 0.5) * Math.PI * 0.65;
    starPositions[i * 3] = radius * Math.cos(theta) * Math.cos(phi);
    starPositions[i * 3 + 1] = radius * Math.sin(phi) * 0.45;
    starPositions[i * 3 + 2] = radius * Math.sin(theta) * Math.cos(phi);
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
  const starMat = new THREE.PointsMaterial({
    color: 0xf3e5ab,
    size: lowPerfMode ? 0.55 : 0.42,
    transparent: true,
    opacity: 0.85
  });
  const stars = new THREE.Points(starGeo, starMat);
  scene.add(stars);

  // ۸ سیاره با مدارهای واقعی
  const palette = [0xd4af37, 0x60a5fa, 0x34d399, 0xf59e0b, 0xc084fc, 0xf472b6, 0x38bdf8, 0xfbbf24];
  planetMeshes = [];

  for (let i = 0; i < 8; i++) {
    const orbitRadius = 6.5 + i * 2.5;
    const orbitCurve = new THREE.EllipseCurve(0, 0, orbitRadius, orbitRadius, 0, Math.PI * 2, false, 0);
    const orbitPts = orbitCurve.getPoints(lowPerfMode ? 48 : 96).map((p) => new THREE.Vector3(p.x, 0, p.y));
    const orbitGeo = new THREE.BufferGeometry().setFromPoints(orbitPts);
    const orbitMat = new THREE.LineBasicMaterial({ color: 0xd4af37, transparent: true, opacity: 0.22 });
    scene.add(new THREE.Line(orbitGeo, orbitMat));

    const pGeo = new THREE.SphereGeometry(i === 0 ? 1.15 : 0.82, 22, 22);
    const pMat = new THREE.MeshStandardMaterial({
      color: palette[i % palette.length],
      roughness: 0.4,
      metalness: 0.35
    });
    const mesh = new THREE.Mesh(pGeo, pMat);
    const angle = (i / 8) * Math.PI * 2;
    mesh.userData = { index: i, orbitRadius, angle, speed: 0.0022 + (8 - i) * 0.0002 };
    mesh.position.set(Math.cos(angle) * orbitRadius, 0, Math.sin(angle) * orbitRadius);
    scene.add(mesh);
    planetMeshes.push(mesh);
  }

  // تعامل لمسی و ماوس برای چرخش، زوم و انتخاب سیاره
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  let isDragging = false;
  let prevX = 0;
  let prevY = 0;
  let yaw = 0;
  let pitch = 0.42;
  let distance = 34;

  function updateCamera() {
    camera.position.x = distance * Math.sin(yaw) * Math.cos(pitch);
    camera.position.y = Math.max(4, distance * Math.sin(pitch));
    camera.position.z = distance * Math.cos(yaw) * Math.cos(pitch);
    camera.lookAt(0, 0, 0);
  }
  updateCamera();

  canvas.addEventListener("pointerdown", (e) => {
    isDragging = true;
    prevX = e.clientX;
    prevY = e.clientY;

    const rect = canvas.getBoundingClientRect();
    pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects(planetMeshes);
    if (hits.length > 0) {
      selectPlanet(hits[0].object.userData.index);
    }
  });

  window.addEventListener("pointermove", (e) => {
    if (!isDragging) return;
    const dx = e.clientX - prevX;
    const dy = e.clientY - prevY;
    prevX = e.clientX;
    prevY = e.clientY;
    yaw -= dx * 0.007;
    pitch = Math.min(1.25, Math.max(0.12, pitch + dy * 0.006));
    updateCamera();
  });

  window.addEventListener("pointerup", () => {
    isDragging = false;
  });

  canvas.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      distance = Math.min(68, Math.max(12, distance + e.deltaY * 0.025));
      updateCamera();
    },
    { passive: false }
  );

  function animate() {
    coreMesh.rotation.y += 0.006;
    stars.rotation.y += 0.0005;

    planetMeshes.forEach((m) => {
      m.userData.angle += m.userData.speed;
      m.position.x = Math.cos(m.userData.angle) * m.userData.orbitRadius;
      m.position.z = Math.sin(m.userData.angle) * m.userData.orbitRadius;
      m.rotation.y += 0.015;
      const isSelected = m.userData.index === selectedPlanetIndex;
      const targetScale = isSelected ? 1.35 : 1.0;
      m.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.12);
    });

    if (!isDragging) {
      yaw += 0.0012;
      updateCamera();
    }

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener("resize", () => {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || 460;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });
}

// موتور نشید پس‌زمینه (اختیاری و پیش‌فرض خاموش)
function startNasheedEngine() {
  stopNasheedEngine();
  nasheedEnabled = true;

  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (AudioCtx) {
    if (!audioCtx) audioCtx = new AudioCtx();
    if (audioCtx.state === "suspended") {
      audioCtx.resume().catch(() => {});
    }
    const track = document.getElementById("nasheedTrackSelect").value;
    const scale =
      track === "horizon_en"
        ? [261.63, 329.63, 392.0, 493.88, 392.0, 329.63, 293.66, 246.94]
        : [293.66, 349.23, 440.0, 392.0, 349.23, 293.66, 220.0, 261.63];

    let step = 0;
    const playNote = () => {
      if (!nasheedEnabled || !audioCtx) return;
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(scale[step % scale.length], now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.028, now + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.65);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 1.7);
      step++;
    };

    playNote();
    nasheedInterval = setInterval(playNote, 1500);
  }
  renderNasheedStatus();
}

function stopNasheedEngine() {
  nasheedEnabled = false;
  if (nasheedInterval) {
    clearInterval(nasheedInterval);
    nasheedInterval = null;
  }
  renderNasheedStatus();
}

function renderNasheedStatus() {
  const d = UNIVERSE_DATA[lang];
  const selectEl = document.getElementById("nasheedTrackSelect");
  const trackName = selectEl.options[selectEl.selectedIndex].text;
  const labelEl = document.getElementById("nasheedLabel");
  const playBtn = document.getElementById("nasheedPlayBtn");
  const topBtn = document.getElementById("nasheedToggleBtn");

  if (nasheedEnabled) {
    labelEl.innerHTML = d.nasheedOnLabel.replace("{track}", trackName);
    playBtn.textContent = d.nasheedBtnOn;
    topBtn.textContent = "♫ نشید: روشن";
    topBtn.setAttribute("aria-pressed", "true");
  } else {
    labelEl.innerHTML = d.nasheedOffLabel;
    playBtn.textContent = d.nasheedBtnOff;
    topBtn.textContent = lang === "en" ? "♫ Nasheed: Off" : "♫ نشید: خاموش";
    topBtn.setAttribute("aria-pressed", "false");
  }
}

function selectPlanet(index) {
  selectedPlanetIndex = index;
  const p = UNIVERSE_DATA[lang].planets[index];
  document.getElementById("activePlanetTag").textContent = p.tag;
  document.getElementById("activePlanetTitle").textContent = `${p.name}`;
  document.getElementById("activePlanetDesc").textContent = p.short;
  document.getElementById("planetDetailBox").innerHTML = `<strong>${p.name}</strong> — ${p.detail}`;

  document.querySelectorAll(".planet-pill").forEach((btn, idx) => {
    btn.classList.toggle("active", idx === index);
  });
}

function applyLanguage(nextLang) {
  lang = nextLang;
  const d = UNIVERSE_DATA[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = d.dir;
  document.body.setAttribute("data-lang", lang);

  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  document.getElementById("introWelcome").textContent = d.welcome;
  document.getElementById("enterUniverseBtn").textContent = d.enterBtn;
  document.getElementById("skipIntroBtn").textContent = d.skipBtn;
  document.getElementById("navGalaxy").textContent = d.nav.galaxy;
  document.getElementById("navBio").textContent = d.nav.bio;
  document.getElementById("navPlanets").textContent = d.nav.planets;
  document.getElementById("navContact").textContent = d.nav.contact;
  document.getElementById("hudBadge").textContent = d.hudBadge;
  document.getElementById("hudHint").textContent = d.hudHint;
  document.getElementById("planetsHeading").textContent = d.planetsHeading;
  document.getElementById("bioKicker").textContent = d.bioKicker;
  document.getElementById("bioFullName").textContent = d.bioFullName;
  document.getElementById("bioMeta").textContent = d.bioMeta;
  document.getElementById("bioParagraph1").textContent = d.bioParagraph1;
  document.getElementById("bioParagraph2").textContent = d.bioParagraph2;
  document.getElementById("phaseNotice").textContent = d.phaseNotice;
  document.getElementById("likeBtnLabel").textContent = d.likeBtnLabel;
  document.getElementById("contactHeading").textContent = d.contactHeading;

  const grid = document.getElementById("planetSelectorGrid");
  grid.innerHTML = "";
  d.planets.forEach((p, idx) => {
    const b = document.createElement("button");
    b.className = "planet-pill" + (idx === selectedPlanetIndex ? " active" : "");
    b.textContent = `${idx + 1}. ${p.name}`;
    b.addEventListener("click", () => selectPlanet(idx));
    grid.appendChild(b);
  });

  selectPlanet(selectedPlanetIndex);
  renderNasheedStatus();
}

function dismissIntro() {
  document.getElementById("introOverlay").classList.add("dismissed");
}

document.getElementById("enterUniverseBtn").addEventListener("click", dismissIntro);
document.getElementById("skipIntroBtn").addEventListener("click", dismissIntro);

document.querySelectorAll("[data-lang]").forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.getAttribute("data-lang")));
});

function toggleNasheed() {
  if (nasheedEnabled) {
    stopNasheedEngine();
  } else {
    startNasheedEngine();
  }
}

document.getElementById("nasheedPlayBtn").addEventListener("click", toggleNasheed);
document.getElementById("nasheedToggleBtn").addEventListener("click", toggleNasheed);
document.getElementById("nasheedTrackSelect").addEventListener("change", () => {
  if (nasheedEnabled) startNasheedEngine();
  else renderNasheedStatus();
});

document.getElementById("perfToggleBtn").addEventListener("click", (e) => {
  lowPerfMode = !lowPerfMode;
  e.target.classList.toggle("active", lowPerfMode);
  e.target.setAttribute("aria-pressed", String(lowPerfMode));
  init3DGalaxy();
});

document.getElementById("likeUniverseBtn").addEventListener("click", () => {
  likesCount += 1;
  document.getElementById("likeCounter").textContent = String(likesCount);
});

document.getElementById("downloadVcardBtn").addEventListener("click", () => {
  const vcf = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Reza Karimi;Ahmad Parwiz;;;",
    "FN:Ahmad Parwiz Reza Karimi (A.P.R.K)",
    "TITLE:Medical Student - Taj University",
    "EMAIL:ahmadparwizrezakarimi873@gmail.com",
    "URL:https://ahmadparwizrezakarimi.github.io/dr-reza-karimi-81/",
    "END:VCARD"
  ].join("\n");
  const blob = new Blob([vcf], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Ahmad_Parwiz_Reza_Karimi_APRK.vcf";
  a.click();
  URL.revokeObjectURL(url);
});

initIntroParticles();
applyLanguage("fa");
init3DGalaxy();
