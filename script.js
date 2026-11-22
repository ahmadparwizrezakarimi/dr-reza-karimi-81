const SITE_DATA = {
  fa: {
    dir: "rtl",
    splashTitle: "به جهان من خوش آمدید",
    splashSub: "با ورود به صفحه، پروفایل یک لایک دریافت می‌کند و نشید متناسب با زبان انتخابی پخش می‌شود.",
    enterBtn: "ورود به جهان من ✨",
    role: "دانشجوی طب معالجوی · پوهنتون تاج",
    name: 'احمد پرویز <span>رضا کریمی</span>',
    bio: "در جست‌وجوی دانشی که زندگی را بهتر می‌سازد؛ میان دنیای طبابت، مطالعات دینی، زبان عربی، سنوکر، فوتبال و رؤیاهایی برای آینده.",
    nasheedPlaying: "نشید فارسی در حال اجرا",
    nasheedPaused: "نشید متوقف شد",
    toggleAudio: "▶ پخش / توقف نشید",
    likeLabel: "لایک پروفایل",
    universeTitle: "جهان من را کشف کنید",
    defaultDetail: "روی هر کارت بزنید تا توضیح کامل آن نمایش داده شود.",
    cards: [
      {
        title: "🩺 طبابت و دانش پزشکی",
        desc: "شناخت بدن انسان و آماده‌شدن برای خدمت صادقانه.",
        detail: "طبابت برای من پیوند دانش علمی با اخلاق، دلسوزی و مسئولیت‌پذیری در قبال سلامت انسان‌هاست."
      },
      {
        title: "📖 مطالعات دینی و عربی",
        desc: "فهم عمیق‌تر متون، ارزش‌های معنوی و زیبایی زبان عربی.",
        detail: "مطالعات دینی و زبان عربی افق فکری را وسیع‌تر می‌سازد و دانش را با معنا و اخلاق پیوند می‌دهد."
      },
      {
        title: "🎱 سنوکر، فوتبال و مطالعه",
        desc: "تمرکز، استراتژی، انرژی و رشد پیوسته.",
        detail: "در کنار درس و مطالعه، سنوکر دقت و تمرکز را تقویت می‌کند و فوتبال شور و نشاط می‌آورد."
      }
    ],
    qaTitle: "گفت‌وگو با جهان من",
    qaDefault: "یکی از پرسش‌های بالا را انتخاب کنید.",
    qas: [
      { q: "چرا طبابت؟", a: "چون می‌خواهم با علم پزشکی در خدمت تسکین درد و حفظ سلامت انسان‌ها باشم." },
      { q: "پیوند علم و دین؟", a: "علم ابزار شناخت و خدمت است و معنویت و اخلاق جهت درست را به آن می‌دهند." },
      { q: "شعار مسیر من؟", a: "آینده را با دانش، صبر و تلاش پیوسته می‌سازند." }
    ],
    connectTitle: "راه‌های ارتباط",
    nasheedChant: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ — دانش، ایمان و تلاش برای فردایی روشن."
  },
  ar: {
    dir: "rtl",
    splashTitle: "أهلاً بك في عالمي الشخصي",
    splashSub: "عند الدخول سيتم تسجيل إعجاب للملف الشخصي وتشغيل النشيد المناسب للغة المختارة.",
    enterBtn: "الدخول إلى العالم ✨",
    role: "طالب الطب البشري · جامعة تاج",
    name: 'أحمد برويز <span>رضا كريمي</span>',
    bio: "في طلب العلم النافع الذي يرقى بالحياة؛ بين الطب، والدراسات الدينية، واللغة العربية، والسنوكر، وكرة القدم.",
    nasheedPlaying: "النشيد العربي قيد التشغيل",
    nasheedPaused: "تم إيقاف النشيد",
    toggleAudio: "▶ تشغيل / إيقاف النشيد",
    likeLabel: "إعجاب بالملف",
    universeTitle: "اكتشف عالمي",
    defaultDetail: "اضغط على أي بطاقة لعرض التفاصيل الكاملة.",
    cards: [
      {
        title: "🩺 الطب والعلوم الطبية",
        desc: "فهم جسم الإنسان والاستعداد لخدمة الناس بأمانة.",
        detail: "الطب عندي جمع بين العلم الدقيق والرحمة والأخلاق لخدمة صحة الإنسان."
      },
      {
        title: "📖 الدراسات الدينية والعربية",
        desc: "تعميق الفهم وجماليات اللغة العربية والقيم.",
        detail: "الدراسات الدينية واللغة العربية تفتح آفاق الفكر وتمنح العلم روحاً ورسالة."
      },
      {
        title: "🎱 السنوكر وكرة القدم والمطالعة",
        desc: "تركيز، تخطيط، حيوية ونمو مستمر.",
        detail: "السنوكر يطور التركيز والدقة، وكرة القدم تمنح الحيوية، والمطالعة تبني الفكر."
      }
    ],
    qaTitle: "حوار سريع",
    qaDefault: "اختر أحد الأسئلة بالأعلى.",
    qas: [
      { q: "لماذا الطب؟", a: "لأكون عوناً في تخفيف آلام الناس وحفظ صحتهم بعلم وأمانة." },
      { q: "العلم والإيمان؟", a: "العلم نور يوضح الطريق، والقيم والإيمان يضبطان الوجهة." },
      { q: "شعار المسير؟", a: "بالعلم والصبر والعمل المستمر تُبنى المستقبلات المشرقة." }
    ],
    connectTitle: "طرق التواصل",
    nasheedChant: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ — عِلْمٌ وَعَمَلٌ وَسَكِينَةٌ."
  },
  en: {
    dir: "ltr",
    splashTitle: "Welcome to My Digital Universe",
    splashSub: "Entering adds a welcome like to the profile and plays the nasheed matched to your selected language.",
    enterBtn: "Enter Universe ✨",
    role: "Medical Student · Taj University",
    name: 'Ahmad Parwiz <span>Reza Karimi</span>',
    bio: "Seeking knowledge that elevates life—spanning medicine, religious studies, Arabic, snooker, football, and future vision.",
    nasheedPlaying: "English nasheed playing",
    nasheedPaused: "Nasheed paused",
    toggleAudio: "▶ Play / Pause Nasheed",
    likeLabel: "Profile Likes",
    universeTitle: "Explore My Universe",
    defaultDetail: "Click any card to read more details.",
    cards: [
      {
        title: "🩺 Medicine & Health",
        desc: "Understanding human biology to serve with integrity.",
        detail: "Medicine for me unites scientific rigor with compassion and genuine care for people."
      },
      {
        title: "📖 Faith & Arabic",
        desc: "Deeper textual insight, ethics, and the richness of Arabic.",
        detail: "Religious studies and Arabic broaden perspective and anchor knowledge in purpose."
      },
      {
        title: "🎱 Snooker, Football & Reading",
        desc: "Focus, strategy, energy, and steady growth.",
        detail: "Snooker sharpens focus and strategy, football brings energy, and reading fuels growth."
      }
    ],
    qaTitle: "Ask My Universe",
    qaDefault: "Pick one of the prompts above.",
    qas: [
      { q: "Why medicine?", a: "To combine medical knowledge with compassion in service of human health." },
      { q: "Science & values?", a: "Knowledge powers capability while ethics and faith guide purpose." },
      { q: "Core motto?", a: "Build the future through steady learning, patience, and consistent effort." }
    ],
    connectTitle: "Connect",
    nasheedChant: "In the name of God—steady learning, calm focus, and purposeful growth."
  }
};

let currentLang = "fa";
let likes = 1;
let isLiked = true;
let isPlayingNasheed = false;
let audioCtx = null;
let noteTimer = null;

const splashEl = document.getElementById("splash");
const enterBtn = document.getElementById("enterBtn");
const likeBtn = document.getElementById("likeBtn");
const likeCountEl = document.getElementById("likeCount");
const toggleAudioBtn = document.getElementById("toggleAudioBtn");
const audioStatusEl = document.getElementById("audioStatus");
const themeBtn = document.getElementById("themeBtn");

function spawnFloatingHeart(x, y) {
  const heart = document.createElement("div");
  heart.className = "heart-float";
  heart.textContent = "❤️";
  heart.style.left = (x || window.innerWidth * 0.72) + "px";
  heart.style.top = (y || window.innerHeight * 0.45) + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1250);
}

function speakNasheedText(text, lang) {
  if (!("speechSynthesis" in window)) return;
  try {
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = lang === "ar" ? "ar-SA" : lang === "en" ? "en-US" : "fa-IR";
    msg.rate = 0.88;
    msg.pitch = 0.95;
    msg.volume = 0.75;
    window.speechSynthesis.speak(msg);
  } catch (_) {}
}

function startNasheed() {
  stopNasheed();
  isPlayingNasheed = true;
  const d = SITE_DATA[currentLang];
  audioStatusEl.innerHTML = `نشید پس‌زمینه: <strong>${d.nasheedPlaying}</strong>`;

  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (AudioCtx) {
    if (!audioCtx) audioCtx = new AudioCtx();
    if (audioCtx.state === "suspended") {
      audioCtx.resume().catch(() => {});
    }

    const scale = [293.66, 349.23, 440.0, 392.0, 349.23, 293.66, 220.0, 261.63];
    let step = 0;

    const triggerTone = () => {
      if (!isPlayingNasheed || !audioCtx) return;
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(scale[step % scale.length], now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.032, now + 0.25);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.55);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 1.6);
      step++;
    };

    triggerTone();
    noteTimer = setInterval(triggerTone, 1450);
  }

  speakNasheedText(d.nasheedChant, currentLang);
}

function stopNasheed() {
  isPlayingNasheed = false;
  if (noteTimer) {
    clearInterval(noteTimer);
    noteTimer = null;
  }
  if ("speechSynthesis" in window) {
    try {
      window.speechSynthesis.cancel();
    } catch (_) {}
  }
  audioStatusEl.innerHTML = `نشید پس‌زمینه: <strong>${SITE_DATA[currentLang].nasheedPaused}</strong>`;
}

function applyLanguage(lang) {
  currentLang = lang;
  const d = SITE_DATA[lang];

  document.documentElement.lang = lang;
  document.documentElement.dir = d.dir;
  document.body.setAttribute("data-lang", lang);

  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  document.getElementById("splashTitle").textContent = d.splashTitle;
  document.getElementById("splashSub").textContent = d.splashSub;
  enterBtn.textContent = d.enterBtn;
  document.getElementById("heroRole").textContent = d.role;
  document.getElementById("heroName").innerHTML = d.name;
  document.getElementById("heroBio").textContent = d.bio;
  toggleAudioBtn.textContent = d.toggleAudio;
  document.getElementById("likeText").textContent = d.likeLabel;
  document.getElementById("secUniverse").textContent = d.universeTitle;
  document.getElementById("detailPanel").textContent = d.defaultDetail;
  document.getElementById("secQa").textContent = d.qaTitle;
  document.getElementById("qaAnswer").textContent = d.qaDefault;
  document.getElementById("secConnect").textContent = d.connectTitle;

  const cardsGrid = document.getElementById("cardsGrid");
  cardsGrid.innerHTML = "";
  d.cards.forEach((cardItem, idx) => {
    const box = document.createElement("div");
    box.className = "universe-card";
    box.innerHTML = `<h3>${cardItem.title}</h3><p>${cardItem.desc}</p>`;
    box.addEventListener("click", () => {
      document.querySelectorAll(".universe-card").forEach((el) => el.classList.remove("active"));
      box.classList.add("active");
      document.getElementById("detailPanel").textContent = cardItem.detail;
    });
    if (idx === 0) box.classList.add("active");
    cardsGrid.appendChild(box);
  });

  const qaButtons = document.getElementById("qaButtons");
  qaButtons.innerHTML = "";
  d.qas.forEach((qaItem) => {
    const btn = document.createElement("button");
    btn.className = "chip";
    btn.textContent = qaItem.q;
    btn.addEventListener("click", () => {
      document.getElementById("qaAnswer").textContent = qaItem.a;
    });
    qaButtons.appendChild(btn);
  });

  if (isPlayingNasheed) {
    startNasheed();
  } else {
    audioStatusEl.innerHTML = `نشید پس‌زمینه: <strong>${d.nasheedPaused}</strong>`;
  }
}

enterBtn.addEventListener("click", (e) => {
  splashEl.classList.add("hidden");
  likes += 1;
  isLiked = true;
  likeCountEl.textContent = likes;
  likeBtn.classList.add("liked");
  spawnFloatingHeart(e.clientX, e.clientY);
  startNasheed();
});

likeBtn.addEventListener("click", (e) => {
  if (!isLiked) {
    likes += 1;
    isLiked = true;
    likeBtn.classList.add("liked");
    spawnFloatingHeart(e.clientX, e.clientY);
  } else {
    likes = Math.max(0, likes - 1);
    isLiked = false;
    likeBtn.classList.remove("liked");
  }
  likeCountEl.textContent = likes;
});

toggleAudioBtn.addEventListener("click", () => {
  if (isPlayingNasheed) {
    stopNasheed();
  } else {
    startNasheed();
  }
});

document.querySelectorAll("[data-lang]").forEach((btn) => {
  btn.addEventListener("click", () => {
    applyLanguage(btn.getAttribute("data-lang"));
  });
});

themeBtn.addEventListener("click", () => {
  const html = document.documentElement;
  const nextTheme = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", nextTheme);
});

document.getElementById("saveVcfBtn").addEventListener("click", () => {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Reza Karimi;Ahmad Parwiz;;;",
    "FN:Ahmad Parwiz Reza Karimi (_A.P.R.K_)",
    "EMAIL:ahmadparwizrezakarimi873@gmail.com",
    "URL:https://ahmadparwizrezakarimi.github.io/dr-reza-karimi-81/",
    "END:VCARD"
  ].join("\n");

  const blob = new Blob([vcard], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "Ahmad_Parwiz_Reza_Karimi.vcf";
  link.click();
  URL.revokeObjectURL(url);
});

applyLanguage("fa");
