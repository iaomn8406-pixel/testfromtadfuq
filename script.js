/**
 * PEPSI BRAND DESIGN EXPERIMENT - MASTER SCRIPT ENGINE
 * Handles: 3D Arc Fan Carousel, Product Spotlight, Page Transitions,
 * Web Audio API Sound Synthesizer, Dynamic Particle Canvas,
 * Bilingual (AR/EN) Engine, and URL State Synchronization.
 */

// ============================================================================
// 1. FLAVOR DATA SYSTEM
// ============================================================================
const FLAVORS_DATA = [
  {
    id: 'classic',
    num: '01',
    numAr: '٠١',
    nameAr: 'بيبسي كلاسيك',
    nameEn: 'Pepsi Classic',
    shortNameAr: 'كولا كلاسيك',
    shortNameEn: 'Classic Cola',
    sloganAr: 'الأصل والانتعاش الخالد.',
    sloganEn: 'The original bold chill.',
    phraseAr: 'ما تشبه أحد',
    phraseEn: 'ORIGINAL BOLD',
    descAr: 'المذاق الأيقوني الأصيل الذي صنع التاريخ. توازن ساحر بين الفوران الصاخب وحلاوة الكولا المنعشة التي تأسر الحواس مع كل رشفة مثلجة.',
    descEn: 'The iconic classic flavor that defined refreshing. A timeless harmony of crisp carbonation and deep cola sweetness served ice-cold.',
    badgeAr: 'النكهة ٠١',
    badgeEn: 'FLAVOR 01',
    sweetness: 85,
    fizz: 95,
    citrus: 40,
    calories: '150 kcal',
    size: '330 ml',
    serving: 'يُقدّم مثلجاً عند ٤ درجات مئوية',
    servingEn: 'Best served ice-cold at 4°C',
    tagsAr: ['الأصل', 'فوران مكثف', 'كلاسيك'],
    tagsEn: ['Original', 'High Fizz', 'Classic'],
    category: 'classic',
    colors: {
      bgStart: '#000c1e',
      bgMid: '#00285d',
      bgEnd: '#00122e',
      primary: '#004bb5',
      accent: '#0085ca',
      glow: 'rgba(0, 102, 245, 0.55)',
      ray1: '#e31837',
      ray2: '#ffffff',
      dot: '#0052cc',
      textStroke: 'rgba(255, 255, 255, 0.22)'
    },
    imageCutout: 'images/can-classic-cutout.webp',
    imageStudio: 'images/can-classic.jpg'
  },
  {
    id: 'zero',
    num: '02',
    numAr: '٠٢',
    nameAr: 'بيبسي زيرو سكر',
    nameEn: 'Pepsi Zero Sugar',
    shortNameAr: 'زيرو سكر',
    shortNameEn: 'Zero Sugar',
    sloganAr: 'أقصى طعم، بلا سكر.',
    sloganEn: 'Maximum taste, zero sugar.',
    phraseAr: 'عشان تكون',
    phraseEn: 'MAX TASTE',
    descAr: 'قوة المذاق الكاملة بدون أي تنازلات وبصفر سكر. صُممت لتمنحك اندفاعة فوران حادة وطاقة منعشة تناسب أسلوب حياتك العصري الجريء.',
    descEn: 'Full-throttle Pepsi taste with zero sugar. Engineered with maximum refreshment and electric intensity for every moment.',
    badgeAr: 'النكهة ٠٢',
    badgeEn: 'FLAVOR 02',
    sweetness: 65,
    fizz: 100,
    citrus: 45,
    calories: '0 kcal',
    size: '330 ml',
    serving: 'يُقدّم فائق البرودة',
    servingEn: 'Best served ultra chilled',
    tagsAr: ['صفر سكر', 'طاقة مكثفة', 'خفيف'],
    tagsEn: ['Zero Sugar', 'Intense', 'Crisp'],
    category: 'zero',
    colors: {
      bgStart: '#05070a',
      bgMid: '#121622',
      bgEnd: '#080a0f',
      primary: '#00d2ff',
      accent: '#0090ff',
      glow: 'rgba(0, 210, 255, 0.45)',
      ray1: '#00d2ff',
      ray2: '#e31837',
      dot: '#1a2233',
      textStroke: 'rgba(0, 210, 255, 0.25)'
    },
    imageCutout: 'images/can-zero-cutout.webp',
    imageStudio: 'images/can-zero.jpg'
  },
  {
    id: 'diet',
    num: '03',
    numAr: '٠٣',
    nameAr: 'بيبسي دايت',
    nameEn: 'Diet Pepsi',
    shortNameAr: 'دايت سيلفر',
    shortNameEn: 'Diet Silver',
    sloganAr: 'خفة لا تُضاهى، ونقاء لا ينتهي.',
    sloganEn: 'Unrivaled lightness, pure chill.',
    phraseAr: 'صناعة الشغف',
    phraseEn: 'PURE LIGHT',
    descAr: 'لمن يقدّرون النقاء والخفة الفائقة. صودا انسيابية متوازنة تمنحك شعوراً لا يُقاوم بالانتعاش والرشاقة في كل وقت وبدون سعرات.',
    descEn: 'For those who appreciate pure, crisp lightness. Smooth carbonation that delivers clean, guilt-free refreshment.',
    badgeAr: 'النكهة ٠٣',
    badgeEn: 'FLAVOR 03',
    sweetness: 60,
    fizz: 85,
    citrus: 50,
    calories: '0 kcal',
    size: '250 ml',
    serving: 'يُقدّم مع مكعبات الثلج',
    servingEn: 'Best served over ice rocks',
    tagsAr: ['دايت', 'خفة مطلقة', 'صفر سعرات'],
    tagsEn: ['Diet', 'Pure Light', '0 Cal'],
    category: 'classic',
    colors: {
      bgStart: '#11151c',
      bgMid: '#242c3d',
      bgEnd: '#141a24',
      primary: '#94a3b8',
      accent: '#60a5fa',
      glow: 'rgba(96, 165, 250, 0.45)',
      ray1: '#93c5fd',
      ray2: '#ffffff',
      dot: '#64748b',
      textStroke: 'rgba(255, 255, 255, 0.2)'
    },
    imageCutout: 'images/can-diet-cutout.webp',
    imageStudio: 'images/can-diet.jpg'
  },
  {
    id: 'orange',
    num: '04',
    numAr: '٠٤',
    nameAr: 'بيبسي برتقال',
    nameEn: 'Pepsi Orange Twist',
    shortNameAr: 'برتقال تويست',
    shortNameEn: 'Orange Twist',
    sloganAr: 'نوّر رشفتك، وانطلق بحيوية.',
    sloganEn: 'Ignite your sip with citrus warmth.',
    phraseAr: 'نوّر رشفتك',
    phraseEn: 'SUNSET BURST',
    descAr: 'انفجار حمضي جريء من خلاصة البرتقال الذهبي الدافئ ممزوج بانتعاش بيبسي البارد. تجربة استوائية غنية تبث الطاقة في يومك.',
    descEn: 'A radiant citrus explosion blending sun-kissed orange zest with crisp sparkling cola for an instant rush of energy.',
    badgeAr: 'النكهة ٠٤',
    badgeEn: 'FLAVOR 04',
    sweetness: 88,
    fizz: 90,
    citrus: 85,
    calories: '140 kcal',
    size: '355 ml',
    serving: 'يُقدّم مثلجاً مع شريحة برتقال',
    servingEn: 'Served chilled with orange slice',
    tagsAr: ['برتقال طبيعي', 'حمضي غني', 'طاقة استوائية'],
    tagsEn: ['Natural Orange', 'Zesty', 'Tropical Vibe'],
    category: 'fruit',
    colors: {
      bgStart: '#200902',
      bgMid: '#571e05',
      bgEnd: '#290b02',
      primary: '#ff6b1a',
      accent: '#ff9248',
      glow: 'rgba(255, 107, 26, 0.55)',
      ray1: '#ff6b1a',
      ray2: '#ffc107',
      dot: '#ff6b1a',
      textStroke: 'rgba(255, 140, 66, 0.25)'
    },
    imageCutout: 'images/can-orange-cutout.webp',
    imageStudio: 'images/can-orange.jpg'
  },
  {
    id: 'lime',
    num: '05',
    numAr: '٠٥',
    nameAr: 'بيبسي ليمون تويست',
    nameEn: 'Pepsi Lime Twist',
    shortNameAr: 'ليمون منعش',
    shortNameEn: 'Zesty Lime',
    sloganAr: 'لمسة حمضية تُوقظ كل الحواس.',
    sloganEn: 'Electric citrus that awakens the senses.',
    phraseAr: 'طعم لا يُنسى',
    phraseEn: 'ELECTRIC LIME',
    descAr: 'حموضة الليمون الأخضر اللاذعة تلتقي بصودا بيبسي المنعشة في سمفونية لا تتكرر. مشروب الصيف الأمثل لكسر حرارة الأيام.',
    descEn: 'Electric green lime zing clashing with sparkling cola fizz. The ultimate crisp beverage designed to cut through thirst.',
    badgeAr: 'النكهة ٠٥',
    badgeEn: 'FLAVOR 05',
    sweetness: 72,
    fizz: 95,
    citrus: 95,
    calories: '135 kcal',
    size: '330 ml',
    serving: 'يُقدّم مع أوراق النعناع الطازج',
    servingEn: 'Served over crushed ice & fresh mint',
    tagsAr: ['ليمون أخضر', 'حمضية لاذعة', 'انتعاش صيفي'],
    tagsEn: ['Key Lime', 'Tart & Crisp', 'Summer Chill'],
    category: 'fruit',
    colors: {
      bgStart: '#04180e',
      bgMid: '#0c3821',
      bgEnd: '#061f13',
      primary: '#22c55e',
      accent: '#4ade80',
      glow: 'rgba(34, 197, 94, 0.5)',
      ray1: '#22c55e',
      ray2: '#bef264',
      dot: '#22c55e',
      textStroke: 'rgba(34, 197, 94, 0.25)'
    },
    imageCutout: 'images/can-lime-cutout.webp',
    imageStudio: 'images/can-lime.jpg'
  },
  {
    id: 'berry',
    num: '06',
    numAr: '٠٦',
    nameAr: 'بيبسي توت مشكل',
    nameEn: 'Pepsi Wild Berry',
    shortNameAr: 'توت مشكل',
    shortNameEn: 'Wild Berry',
    sloganAr: 'غموض النكهة وسحر التوت المخملي.',
    sloganEn: 'The mystery of wild velvet berries.',
    phraseAr: 'انتعاش مطلق',
    phraseEn: 'WILD BERRY',
    descAr: 'مزيج فاخر من توت العليق البري وثمار التوت الأسود مع لمسة فوران غنية. نكهة مخملية عميقة تأخذك إلى آفاق غير مسبوقة.',
    descEn: 'A sumptuous fusion of wild raspberries, dark berries, and effervescent cola. Deep, velvety, and irresistibly vibrant.',
    badgeAr: 'النكهة ٠٦',
    badgeEn: 'FLAVOR 06',
    sweetness: 90,
    fizz: 88,
    citrus: 60,
    calories: '145 kcal',
    size: '330 ml',
    serving: 'يُقدّم في كأس مثلج مع حبات التوت',
    servingEn: 'Served chilled with wild berries',
    tagsAr: ['توت بري', 'مخملي غني', 'نكهة جريئة'],
    tagsEn: ['Wild Berry', 'Velvety Rich', 'Bold Flavor'],
    category: 'fruit',
    colors: {
      bgStart: '#1d0411',
      bgMid: '#480a2a',
      bgEnd: '#240416',
      primary: '#ec4899',
      accent: '#f43f5e',
      glow: 'rgba(236, 72, 153, 0.55)',
      ray1: '#ec4899',
      ray2: '#c084fc',
      dot: '#ec4899',
      textStroke: 'rgba(236, 72, 153, 0.25)'
    },
    imageCutout: 'images/can-berry-cutout.webp',
    imageStudio: 'images/can-berry.jpg'
  }
];

// ============================================================================
// 2. STATE MANAGER
// ============================================================================
function safeGet(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}
const state = {
  currentIndex: 0,
  lang: safeGet('pepsi_lang') === 'en' ? 'en' : 'ar',
  sound: safeGet('pepsi_sound') === 'true',
  isAnimating: false,
  touchStartX: 0,
  touchStartY: 0
};

// ============================================================================
// 3. WEB AUDIO API SYNTHESIZER (100% Free, Zero External Dependencies)
// ============================================================================
class SodaAudioEngine {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Realistic soda effervescence fizz sound
  playFizz() {
    if (!state.sound) return;
    this.init();
    if (!this.ctx) return;

    try {
      const bufferSize = this.ctx.sampleRate * 0.45;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.12));
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(3200, this.ctx.currentTime);
      filter.Q.setValueAtTime(3.5, this.ctx.currentTime);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.45);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start();
    } catch (e) {
      console.warn('Audio play error', e);
    }
  }

  // Smooth futuristic whoosh for carousel sliding
  playWhoosh() {
    if (!state.sound) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(140, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(380, this.ctx.currentTime + 0.18);
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.35);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.36);
    } catch (e) {}
  }

  // Crisp soda can pull-tab pop
  playPop() {
    if (!state.sound) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(750, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(180, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.09);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.1);
      setTimeout(() => this.playFizz(), 70);
    } catch (e) {}
  }
}

const audio = new SodaAudioEngine();

// ============================================================================
// 4. SHARED HELPERS
// ============================================================================
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const EASE_OUT = 'cubic-bezier(0.22, 1, 0.36, 1)';
const EASE_IN_OUT = 'cubic-bezier(0.77, 0, 0.18, 1)';

const isAr = () => state.lang === 'ar';
const tr = (key) => (i18n[state.lang] && i18n[state.lang][key]) || key;
const pick = (d, field) => d[field + (isAr() ? 'Ar' : 'En')];

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Web Animations helper that always resolves (even when animations are unsupported)
function animateEl(el, keyframes, options) {
  if (!el || !el.animate || prefersReducedMotion) return Promise.resolve();
  const anim = el.animate(keyframes, { fill: 'forwards', ...options });
  return anim.finished.then(() => anim).catch(() => anim);
}

// Animate to a state that is written to inline style first, so nothing depends on
// a filling animation (avoids stale opacity on GPU-composited layers)
function playTo(el, keyframes, options) {
  if (!el) return Promise.resolve();
  el.getAnimations && el.getAnimations().forEach((a) => a.cancel());
  const last = keyframes[keyframes.length - 1];
  if ('opacity' in last) el.style.opacity = String(last.opacity);
  if ('transform' in last) el.style.transform = last.transform;
  if (!el.animate || prefersReducedMotion) return Promise.resolve();
  const anim = el.animate(keyframes, { ...options, fill: 'none' });
  return anim.finished.catch(() => {});
}

function resetInline(el) {
  if (!el) return;
  el.getAnimations && el.getAnimations().forEach((a) => a.cancel());
  el.style.opacity = '';
  el.style.transform = '';
}

// Apply the flavor identity (CSS custom properties are registered with @property,
// so the gradients interpolate smoothly between flavors)
function applyTheme(data) {
  const s = document.documentElement.style;
  const c = data.colors;
  s.setProperty('--flavor-bg-start', c.bgStart);
  s.setProperty('--flavor-bg-mid', c.bgMid);
  s.setProperty('--flavor-bg-end', c.bgEnd);
  s.setProperty('--flavor-primary', c.primary);
  s.setProperty('--flavor-accent', c.accent);
  s.setProperty('--flavor-glow', c.glow);
  s.setProperty('--flavor-ray-1', c.ray1);
  s.setProperty('--flavor-ray-2', c.ray2);
  s.setProperty('--flavor-text-stroke', c.textStroke);
  const meta = $('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', c.bgStart);
}

function toArabicDigits(str) {
  return String(str).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]);
}

function countUp(el, target, duration = 1100) {
  if (!el) return;
  const fmt = (v) => (isAr() ? toArabicDigits(v) : String(v));
  if (prefersReducedMotion) { el.textContent = fmt(target); return; }
  const start = performance.now();
  const tick = (now) => {
    const p = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = fmt(Math.round(target * eased));
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

// Small inline icon set (stroke icons, inherit currentColor)
const ICONS = {
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  drop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.7s6 6.5 6 11.3a6 6 0 0 1-12 0c0-4.8 6-11.3 6-11.3z"/></svg>',
  fire: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c4 0 7-3 7-7 0-3-2-5.5-3.5-7-.3 2-1.5 3-2.5 3 0-3-1.5-6-4-8 0 3-1.5 5-3 6.5S4 13 4 15c0 4 3 7 8 7z"/></svg>',
  snow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>'
};

// ============================================================================
// 5. PARTICLES & BUBBLES CANVAS ENGINE (pauses when hidden / covered)
// ============================================================================
class ParticlesEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d', { alpha: true });
    this.particles = [];
    this.numParticles = window.innerWidth < 640 ? 22 : 42;
    this.running = false;
    this.paused = false;
    this.frame = null;

    this.resize();
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => this.resize(), 150);
    });
    document.addEventListener('visibilitychange', () => (document.hidden ? this.stop() : this.start()));
    this.initParticles();
    if (!prefersReducedMotion) this.start();
  }

  resize() {
    // Draw at 1x DPR: bubbles are soft anyway and this keeps fill-rate low
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  initParticles() {
    this.particles = [];
    for (let i = 0; i < this.numParticles; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: Math.random() * 3.6 + 1.4,
        speedY: Math.random() * 0.7 + 0.25,
        speedX: (Math.random() - 0.5) * 0.35,
        alpha: Math.random() * 0.45 + 0.18,
        pulse: Math.random() * Math.PI
      });
    }
  }

  setPaused(p) {
    this.paused = p;
    if (p) this.stop(); else this.start();
  }

  start() {
    if (this.running || this.paused || document.hidden || prefersReducedMotion) return;
    this.running = true;
    const loop = () => {
      if (!this.running) return;
      this.draw();
      this.frame = requestAnimationFrame(loop);
    };
    this.frame = requestAnimationFrame(loop);
  }

  stop() {
    this.running = false;
    if (this.frame) cancelAnimationFrame(this.frame);
  }

  draw() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);
    for (const p of this.particles) {
      p.y -= p.speedY;
      p.x += p.speedX;
      p.pulse += 0.03;
      if (p.y < -10) { p.y = this.height + 10; p.x = Math.random() * this.width; }
      if (p.x < 0) p.x = this.width;
      if (p.x > this.width) p.x = 0;
      const a = p.alpha * (0.7 + 0.3 * Math.sin(p.pulse));
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${a})`;
      ctx.fill();
      if (p.radius > 3.2) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${a * 0.22})`;
        ctx.fill();
      }
    }
  }
}

// ============================================================================
// 6. THE 3D FAN ARC CAROUSEL (Hero Showcase in index.html)
// ============================================================================
class CansArcCarousel {
  constructor() {
    this.stage = document.getElementById('cans-stage');
    if (!this.stage) return;
    this.hero = $('.hero-showcase');
    this.items = $$('.can-item', this.stage);
    this.total = FLAVORS_DATA.length;
    this.outlinedPhrase = document.getElementById('outlined-phrase');
    this.flavorTitle = document.getElementById('flavor-title');
    this.flavorSlogan = document.getElementById('flavor-slogan');
    this.counterCurrent = document.getElementById('counter-current');
    this.counterTotal = document.getElementById('counter-total');
    this.exploreLink = document.getElementById('explore-link');
    this.dots = $$('.flavor-dot');
    this.prevBtn = document.getElementById('arc-prev');
    this.nextBtn = document.getElementById('arc-next');
    this.lastTextIndex = -1;
    this.lastLang = null;

    // Intro: cans rise into the arc one after another
    if (!prefersReducedMotion) this.stage.classList.add('intro');
    this.bindEvents();
    this.updateLayout();
    if (!prefersReducedMotion) {
      requestAnimationFrame(() => requestAnimationFrame(() => {
        this.stage.classList.remove('intro');
        setTimeout(() => this.stage.classList.add('intro-done'), 1400);
      }));
    }
  }

  get spotlightOpen() {
    return !!(window.spotlight && window.spotlight.isOpen);
  }

  // Visual direction: the left arrow always brings the can on the left to the center
  visualStep(side) {
    // side: -1 = left, +1 = right
    const rtl = isAr();
    return side < 0 ? (rtl ? 1 : -1) : (rtl ? -1 : 1);
  }

  bindEvents() {
    this.prevBtn && this.prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.navigate(this.visualStep(-1));
    });
    this.nextBtn && this.nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.navigate(this.visualStep(1));
    });

    // Clicking a can: bring it to the center then zoom into the spotlight
    this.items.forEach((item, index) => {
      item.addEventListener('click', () => {
        if (this.spotlightOpen) return;
        audio.playPop();
        if (state.currentIndex !== index) {
          this.goTo(index, true);
          setTimeout(() => window.spotlight && window.spotlight.open(index), 740);
        } else if (window.spotlight) {
          window.spotlight.open(index);
        }
      });
    });

    this.dots.forEach((dot, index) => dot.addEventListener('click', () => this.goTo(index)));

    if (this.exploreLink) {
      this.exploreLink.addEventListener('click', (e) => {
        if (!window.spotlight || !window.spotlight.el) return;
        e.preventDefault();
        window.spotlight.open(state.currentIndex);
      });
    }

    window.addEventListener('keydown', (e) => {
      if (this.spotlightOpen || $('.modal-backdrop.open')) return;
      if (e.key === 'ArrowLeft') this.navigate(this.visualStep(-1));
      else if (e.key === 'ArrowRight') this.navigate(this.visualStep(1));
      else if (e.key === 'Enter' && document.activeElement === document.body && window.spotlight) {
        window.spotlight.open(state.currentIndex);
      }
    });

    // Touch swipe
    const viewport = document.getElementById('cans-viewport');
    if (viewport) {
      viewport.addEventListener('touchstart', (e) => {
        state.touchStartX = e.touches[0].clientX;
        state.touchStartY = e.touches[0].clientY;
      }, { passive: true });
      viewport.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].clientX - state.touchStartX;
        const dy = e.changedTouches[0].clientY - state.touchStartY;
        if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
          // Swiping left reveals the can on the right
          this.navigate(this.visualStep(dx < 0 ? 1 : -1));
        }
      }, { passive: true });
    }

    // Mouse wheel cycles flavors ("scroll to discover")
    let wheelLock = false;
    if (this.hero) {
      this.hero.addEventListener('wheel', (e) => {
        if (this.spotlightOpen || wheelLock || Math.abs(e.deltaY) < 12) return;
        wheelLock = true;
        this.navigate(e.deltaY > 0 ? 1 : -1);
        setTimeout(() => (wheelLock = false), 700);
      }, { passive: true });
    }

    // Subtle parallax, throttled to one write per frame
    let px = 0, py = 0, queued = false;
    window.addEventListener('mousemove', (e) => {
      if (window.innerWidth < 800 || this.spotlightOpen || prefersReducedMotion) return;
      px = e.clientX / window.innerWidth - 0.5;
      py = e.clientY / window.innerHeight - 0.5;
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        this.stage.style.transform = `rotateY(${px * 8}deg) rotateX(${-py * 5}deg)`;
      });
    }, { passive: true });

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => this.updateLayout(), 120);
    });
  }

  navigate(direction) {
    let next = (state.currentIndex + direction + this.total) % this.total;
    this.goTo(next);
  }

  goTo(targetIndex, force) {
    if (targetIndex === state.currentIndex) return;
    if (state.isAnimating && !force) return;
    state.isAnimating = true;
    state.currentIndex = targetIndex;
    audio.playWhoosh();
    setTimeout(() => audio.playFizz(), 150);
    this.updateLayout();
    setTimeout(() => (state.isAnimating = false), 520);
  }

  // Jump without motion (used while the spotlight covers the carousel)
  jumpTo(index) {
    state.currentIndex = index;
    this.stage.classList.add('no-motion');
    this.updateLayout();
    void this.stage.offsetWidth;
    this.stage.classList.remove('no-motion');
  }

  updateLayout() {
    const activeData = FLAVORS_DATA[state.currentIndex];
    const w = window.innerWidth;
    const isMobile = w < 640;
    const isTablet = w >= 640 && w < 1024;

    applyTheme(activeData);

    this.items.forEach((item, i) => {
      let diff = i - state.currentIndex;
      if (diff > this.total / 2) diff -= this.total;
      if (diff < -this.total / 2) diff += this.total;
      const abs = Math.abs(diff);
      const dirSign = isAr() ? -1 : 1;

      const spacing = isMobile ? 115 : (isTablet ? 165 : 210);
      const posX = diff * spacing * dirSign;
      const posY = Math.pow(abs, 1.35) * (isMobile ? 18 : 26);
      const posZ = -abs * (isMobile ? 90 : 130);
      const rotY = -diff * (isMobile ? 12 : 15) * dirSign;
      const rotZ = diff * (isMobile ? 2.5 : 3.8) * dirSign;
      const scale = Math.max(0.6, 1.25 - abs * 0.18);
      item.style.setProperty('--d', `${abs * 70}ms`);

      if (diff === 0) {
        item.classList.add('active');
        item.style.transform = `translate3d(${posX}px, ${posY - 15}px, 50px) rotateY(${rotY}deg) rotateZ(${rotZ}deg) scale(${scale})`;
        item.style.opacity = '1';
        item.style.setProperty('--b', '1.08');
        item.style.zIndex = '30';
      } else {
        item.classList.remove('active');
        item.style.transform = `translate3d(${posX}px, ${posY}px, ${posZ}px) rotateY(${rotY}deg) rotateZ(${rotZ}deg) scale(${scale})`;
        item.style.opacity = String(Math.max(0.18, 1 - abs * 0.24));
        item.style.setProperty('--b', String(Math.max(0.55, 1 - abs * 0.16)));
        item.style.zIndex = String(20 - abs * 3);
      }
    });

    const textChanged = this.lastTextIndex !== state.currentIndex || this.lastLang !== state.lang;
    this.lastTextIndex = state.currentIndex;
    this.lastLang = state.lang;

    if (textChanged) {
      if (this.outlinedPhrase) {
        this.outlinedPhrase.classList.add('fade-out');
        clearTimeout(this.phraseTimer);
        this.phraseTimer = setTimeout(() => {
          this.outlinedPhrase.textContent = pick(activeData, 'phrase');
          this.outlinedPhrase.classList.remove('fade-out');
        }, 220);
      }
      if (this.flavorTitle) {
        this.flavorTitle.textContent = pick(activeData, 'name');
        this.flavorTitle.classList.remove('text-swap');
        void this.flavorTitle.offsetWidth;
        this.flavorTitle.classList.add('text-swap');
      }
      if (this.flavorSlogan) {
        this.flavorSlogan.textContent = pick(activeData, 'slogan');
        this.flavorSlogan.classList.remove('text-swap');
        void this.flavorSlogan.offsetWidth;
        this.flavorSlogan.classList.add('text-swap');
      }
    }

    if (this.counterCurrent) this.counterCurrent.textContent = isAr() ? activeData.numAr : activeData.num;
    if (this.counterTotal) this.counterTotal.textContent = isAr() ? '٠٦' : '06';
    if (this.exploreLink) this.exploreLink.href = `product.html?flavor=${activeData.id}`;
    this.dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === state.currentIndex);
      dot.setAttribute('aria-selected', index === state.currentIndex ? 'true' : 'false');
    });
  }
}

// ============================================================================
// 7. PRODUCT SPOTLIGHT (homepage zoom-in experience)
//    Product on the left, story on the right, staggered reveal,
//    animated switching between flavors, exit back to the arc,
//    and a CTA to the full product landing page.
// ============================================================================
class ProductSpotlight {
  constructor(carousel) {
    this.el = document.getElementById('spotlight');
    if (!this.el) return;
    this.carousel = carousel;
    this.isOpen = false;
    this.busy = false;
    this.index = 0;

    this.canHolder = $('#sp-can-holder', this.el);
    this.canImg = $('#sp-can', this.el);
    this.word = $('#sp-word', this.el);
    this.badge = $('#sp-badge', this.el);
    this.title = $('#sp-title', this.el);
    this.slogan = $('#sp-slogan', this.el);
    this.desc = $('#sp-desc', this.el);
    this.features = $('#sp-features', this.el);
    this.meters = $('#sp-meters', this.el);
    this.specs = $('#sp-specs', this.el);
    this.cta = $('#sp-cta', this.el);
    this.thumbs = $('#sp-thumbs', this.el);
    this.counter = $('#sp-counter', this.el);

    // Rays inside the spotlight reuse the hero artwork
    const rays = document.getElementById('rays-svg');
    const raysHost = $('#sp-rays', this.el);
    if (rays && raysHost) {
      const clone = rays.cloneNode(true);
      clone.removeAttribute('id');
      raysHost.appendChild(clone);
    }

    this.buildThumbs();
    this.bind();
  }

  buildThumbs() {
    if (!this.thumbs) return;
    this.thumbs.innerHTML = '';
    FLAVORS_DATA.forEach((f, i) => {
      const b = document.createElement('button');
      b.className = 'sp-thumb';
      b.type = 'button';
      b.style.setProperty('--thumb-glow', f.colors.glow);
      b.setAttribute('aria-label', pick(f, 'name'));
      b.innerHTML = `<img src="${f.imageCutout}" alt="" decoding="async">`;
      b.addEventListener('click', () => this.switchTo(i));
      this.thumbs.appendChild(b);
    });
  }

  bind() {
    $('#sp-close', this.el).addEventListener('click', () => this.close());
    $('#sp-back', this.el).addEventListener('click', () => this.close());
    $('#sp-prev', this.el).addEventListener('click', () => this.step(-1));
    $('#sp-next', this.el).addEventListener('click', () => this.step(1));

    window.addEventListener('keydown', (e) => {
      if (!this.isOpen) return;
      if (e.key === 'Escape') this.close();
      else if (e.key === 'ArrowLeft') this.step(-1);
      else if (e.key === 'ArrowRight') this.step(1);
    });

    let sx = 0, sy = 0;
    this.el.addEventListener('touchstart', (e) => {
      sx = e.touches[0].clientX; sy = e.touches[0].clientY;
    }, { passive: true });
    this.el.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - sx;
      const dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.3) this.step(dx < 0 ? 1 : -1);
    }, { passive: true });

    // Wheel over the product stage switches flavors (text column keeps native scroll)
    let lock = false;
    const stage = $('.sp-stage', this.el);
    stage && stage.addEventListener('wheel', (e) => {
      if (!this.isOpen || lock || Math.abs(e.deltaY) < 12) return;
      lock = true;
      this.step(e.deltaY > 0 ? 1 : -1);
      setTimeout(() => (lock = false), 900);
    }, { passive: true });
  }

  // Physical step: -1 = previous (left arrow), +1 = next (right arrow)
  step(dir) {
    const next = (this.index + dir + FLAVORS_DATA.length) % FLAVORS_DATA.length;
    this.switchTo(next, dir);
  }

  fill(d) {
    this.el.style.setProperty('--sp-accent', d.colors.accent);
    if (this.word) this.word.textContent = pick(d, 'phrase');
    this.badge.textContent = pick(d, 'badge');

    // Title split into words for a masked rise reveal
    const words = pick(d, 'name').split(' ');
    this.title.innerHTML = words
      .map((w, i) => `<span class="sp-word-mask"><span class="sp-word-inner" style="--w:${i}">${w}</span></span>`)
      .join(' ');

    this.slogan.textContent = pick(d, 'slogan');
    this.desc.textContent = pick(d, 'desc');

    const tags = pick(d, 'tags');
    this.features.innerHTML = tags
      .map((t, i) => `<li style="--f:${i}"><span class="sp-feat-icon">${ICONS.check}</span>${t}</li>`)
      .join('');

    const meters = [
      { label: tr('sensorySweet'), value: d.sweetness, icon: ICONS.drop },
      { label: tr('sensoryFizz'), value: d.fizz, icon: ICONS.snow },
      { label: tr('sensoryZest'), value: d.citrus, icon: ICONS.fire }
    ];
    this.meters.innerHTML = meters
      .map((m) => `
        <div class="sp-meter">
          <div class="sp-meter-head"><span class="sp-meter-icon">${m.icon}</span><span>${m.label}</span><strong data-count="${m.value}">0</strong></div>
          <div class="sp-meter-track"><div class="sp-meter-fill" data-value="${m.value}"></div></div>
        </div>`)
      .join('');

    this.specs.innerHTML = `
      <div class="sp-spec"><span>${tr('volumeLabel')}</span><strong>${d.size}</strong></div>
      <div class="sp-spec"><span>${tr('caloriesLabel')}</span><strong>${d.calories}</strong></div>
      <div class="sp-spec wide"><span>${tr('servingTitle')}</span><strong>${isAr() ? d.serving : d.servingEn}</strong></div>`;

    this.cta.href = `product.html?flavor=${d.id}`;
    this.canImg.src = d.imageCutout;
    this.canImg.alt = pick(d, 'name');

    if (this.counter) {
      this.counter.textContent = `${isAr() ? d.numAr : d.num} / ${isAr() ? '٠٦' : '06'}`;
    }
    $$('.sp-thumb', this.thumbs).forEach((t, i) => t.classList.toggle('active', i === this.index));
  }

  runMeters() {
    $$('.sp-meter-fill', this.meters).forEach((bar, i) => {
      setTimeout(() => (bar.style.transform = `scaleX(${bar.dataset.value / 100})`), 120 * i);
    });
    $$('[data-count]', this.meters).forEach((el, i) => {
      setTimeout(() => countUp(el, +el.dataset.count), 120 * i);
    });
  }

  // Animate an image clone between two screen rectangles (FLIP)
  fly(src, from, to, { duration = 900, easing = EASE_IN_OUT, arc = -6 } = {}) {
    const clone = document.createElement('img');
    clone.src = src;
    clone.className = 'sp-fly-clone';
    Object.assign(clone.style, {
      left: `${to.left}px`, top: `${to.top}px`, width: `${to.width}px`, height: `${to.height}px`
    });
    const sx = from.width / to.width;
    const sy = from.height / to.height;
    const dx = from.left - to.left;
    const dy = from.top - to.top;
    clone.style.transform = `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`;
    document.body.appendChild(clone);
    const p = animateEl(clone, [
      { transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy}) rotate(0deg)` },
      { transform: `translate(${dx * 0.35}px, ${dy * 0.35 - 30}px) scale(${(sx + 1) / 2 * 1.04}) rotate(${arc}deg)`, offset: 0.55 },
      { transform: 'translate(0, 0) scale(1) rotate(0deg)' }
    ], { duration, easing, fill: 'forwards' });
    return p.then(() => clone);
  }

  async open(index) {
    if (!this.el || this.isOpen || this.busy) return;
    this.busy = true;
    this.isOpen = true;
    this.index = index;
    const d = FLAVORS_DATA[index];
    applyTheme(d);
    this.fill(d);

    const item = this.carousel.items[index];
    const srcImg = item.querySelector('img');
    const from = srcImg.getBoundingClientRect();

    document.body.classList.add('spotlight-open');
    this.carousel.hero && this.carousel.hero.classList.add('spot-active');
    window.particlesEngine && window.particlesEngine.setPaused(false);
    this.el.setAttribute('aria-hidden', 'false');
    this.el.classList.add('is-open');
    this.clearCanAnims();
    this.canHolder.classList.add('hidden-can');

    // Wait for the target image to have dimensions
    if (!this.canImg.complete) await new Promise((r) => { this.canImg.onload = r; this.canImg.onerror = r; });
    const to = this.canImg.getBoundingClientRect();

    item.classList.add('lifted');
    setTimeout(() => this.el.classList.add('is-in'), 420);
    setTimeout(() => this.runMeters(), 1100);

    const clone = await this.fly(srcImg.currentSrc || srcImg.src, from, to, { duration: prefersReducedMotion ? 0 : 950 });
    this.canHolder.classList.remove('hidden-can');
    clone.remove();
    this.el.classList.add('is-idle');
    $('#sp-close', this.el).focus({ preventScroll: true });
    this.busy = false;
    this.flushPending();
  }

  clearCanAnims() {
    resetInline(this.canHolder);
  }

  // Run a request that arrived while an animation was playing
  flushPending() {
    const p = this.pending;
    this.pending = null;
    if (!p || !this.isOpen) return;
    if (p.type === 'close') this.close();
    else if (p.type === 'switch') this.switchTo(p.index, p.dir);
  }

  async close() {
    if (!this.isOpen) return;
    if (this.busy) { this.pending = { type: 'close' }; return; }
    this.busy = true;
    const index = this.index;

    // Sync the arc to the flavor being viewed, without motion
    this.carousel.items.forEach((it) => it.classList.remove('lifted'));
    this.carousel.jumpTo(index);
    const item = this.carousel.items[index];
    item.classList.add('lifted');

    this.clearCanAnims();
    const from = this.canImg.getBoundingClientRect();
    const target = item.querySelector('img');

    // Measure where the can will rest once the arc has zoomed back (final state)
    const hero = this.carousel.hero;
    const viewport = $('.cans-fan-viewport', hero || document);
    let to;
    if (hero && viewport) {
      viewport.style.transition = 'none';
      hero.classList.remove('spot-active');
      to = target.getBoundingClientRect();
      hero.classList.add('spot-active');
      void viewport.offsetWidth;
      viewport.style.transition = '';
    } else {
      to = target.getBoundingClientRect();
    }

    this.el.classList.remove('is-in', 'is-idle');
    this.el.classList.add('is-closing');
    this.canHolder.classList.add('hidden-can');
    hero && hero.classList.remove('spot-active');
    const clone = await this.fly(this.canImg.currentSrc || this.canImg.src, from, to, { duration: prefersReducedMotion ? 0 : 780, arc: 5 });
    // the clone ends exactly at the can in the arc; swap it back
    item.classList.remove('lifted');
    clone.remove();

    this.el.classList.remove('is-open', 'is-closing');
    this.el.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('spotlight-open');
    this.canHolder.classList.remove('hidden-can');
    this.isOpen = false;
    this.busy = false;
    this.pending = null;
  }

  async switchTo(newIndex, dir) {
    if (!this.isOpen) return;
    if (this.busy) { this.pending = { type: 'switch', index: newIndex, dir }; return; }
    if (newIndex === this.index) return;
    this.busy = true;
    if (!dir) dir = newIndex > this.index ? 1 : -1;
    audio.playWhoosh();

    // 1. Outgoing: text collapses, can spins away
    this.el.classList.remove('is-in', 'is-idle');
    this.el.classList.add('is-swapping');
    await playTo(this.canHolder, [
      { transform: 'translateX(0) rotate(0deg) scale(1)', opacity: 1 },
      { transform: `translateX(${-dir * 140}px) rotate(${-dir * 16}deg) scale(0.82)`, opacity: 0 }
    ], { duration: 380, easing: 'cubic-bezier(0.55, 0, 0.9, 0.35)' });

    // 2. Swap identity + content
    this.index = newIndex;
    const d = FLAVORS_DATA[newIndex];
    applyTheme(d);
    this.fill(d);
    this.carousel.jumpTo(newIndex);
    this.carousel.items.forEach((it, i) => it.classList.toggle('lifted', i === newIndex));
    if (!this.canImg.complete) await new Promise((r) => { this.canImg.onload = r; this.canImg.onerror = r; });

    // 3. Incoming: can lands from the other side with a soft overshoot
    this.el.classList.remove('is-swapping');
    void this.el.offsetWidth;
    this.el.classList.add('is-in');
    setTimeout(() => this.runMeters(), 500);
    audio.playFizz();
    this.canHolder.classList.remove('hidden-can');
    await playTo(this.canHolder, [
      { transform: `translateX(${dir * 170}px) rotate(${dir * 18}deg) scale(0.82)`, opacity: 0 },
      { transform: `translateX(${-dir * 12}px) rotate(${-dir * 3}deg) scale(1.03)`, opacity: 1, offset: 0.7 },
      { transform: 'translateX(0) rotate(0deg) scale(1)', opacity: 1 }
    ], { duration: 720, easing: EASE_OUT });
    this.clearCanAnims();
    this.el.classList.add('is-idle');
    this.busy = false;
    this.flushPending();
  }

  refreshLanguage() {
    if (!this.el) return;
    $$('.sp-thumb', this.thumbs).forEach((t, i) => t.setAttribute('aria-label', pick(FLAVORS_DATA[i], 'name')));
    if (this.isOpen) {
      this.fill(FLAVORS_DATA[this.index]);
      this.runMeters();
    }
  }
}

// ============================================================================
// 8. LANGUAGE SWITCHER (Arabic <-> English)
// ============================================================================
const i18n = {
  ar: {
    brandName: 'بيبسي',
    navHome: 'الرئيسية',
    navProducts: 'التشكيلة',
    navDetails: 'تفاصيل النكهة',
    navStory: 'عن التجربة',
    contactBtn: 'تواصل',
    soundOn: 'صوت',
    soundOff: 'صامت',
    langToggle: 'EN',
    scrollDiscover: 'مرّر لتكتشف',
    flavorsLabel: 'النكهات',
    exploreFlavor: 'استكشف النكهة ←',
    allFlavors: 'جميع النكهات',
    classicDiet: 'كلاسيك ودايت',
    zeroSugar: 'زيرو سكر',
    fruitTwist: 'نكهات فواكه',
    exclusiveLineup: 'تشكيلة بيبسي الاستثنائية',
    lineupTitle: 'عالم من الانتعاش المتجدد',
    lineupSubtitle: 'استكشف ٦ نكهات مميزة صُممت لتمنحك أقصى درجات الطاقة والانتعاش المثلج في كل لحظة.',
    browseLineup: 'تصفح التشكيلة الكاملة',
    viewDetails: 'عرض التفاصيل ←',
    backToHome: '← العودة للرئيسية',
    sensorySweet: 'الحلاوة',
    sensoryFizz: 'الفوران',
    sensoryZest: 'الانتعاش الحمضي',
    servingTitle: 'طريقة التقديم المثالية',
    caloriesLabel: 'السعرات الحرارية',
    volumeLabel: 'الحجم الصافي',
    spHighlights: 'أبرز المميزات',
    spViewProduct: 'عرض المنتج',
    spBack: 'رجوع للرئيسية',
    spClose: 'إغلاق',
    spHint: 'بدّل بين النكهات',
    contactModalTitle: 'تجربة التصميم الإبداعي',
    contactModalDesc: 'هذا نموذج تصميم ومحاكاة بصرية غير رسمية، نرحب بآرائك وتقييمك الفني للتجربة.',
    contactName: 'الاسم الكريم',
    contactEmail: 'البريد الإلكتروني',
    contactNotes: 'ملاحظاتك وانطباعك عن التصميم',
    contactSubmit: 'إرسال التقييم الإبداعي',
    contactSuccess: 'شكراً لتقييمك! تم تسجيل انطباعك الإبداعي بنجاح.',
    menuTitle: 'القائمة الرئيسية'
  },
  en: {
    brandName: 'PEPSI',
    navHome: 'Home',
    navProducts: 'Lineup',
    navDetails: 'Flavor Details',
    navStory: 'About',
    contactBtn: 'Contact',
    soundOn: 'Sound',
    soundOff: 'Mute',
    langToggle: 'عربي',
    scrollDiscover: 'Scroll to explore',
    flavorsLabel: 'Flavors',
    exploreFlavor: 'Explore Flavor →',
    allFlavors: 'All Flavors',
    classicDiet: 'Classic & Diet',
    zeroSugar: 'Zero Sugar',
    fruitTwist: 'Fruit Infusions',
    exclusiveLineup: 'The Exceptional Pepsi Lineup',
    lineupTitle: 'A World of Endless Refreshment',
    lineupSubtitle: 'Discover 6 distinctive flavors crafted for maximum energy and ice-cold refreshment in every moment.',
    browseLineup: 'Browse the Full Lineup',
    viewDetails: 'View Details →',
    backToHome: '← Back to Home',
    sensorySweet: 'Sweetness',
    sensoryFizz: 'Effervescence',
    sensoryZest: 'Citrus Zest',
    servingTitle: 'Serving Recommendation',
    caloriesLabel: 'Energy / Calories',
    volumeLabel: 'Net Volume',
    spHighlights: 'Highlights',
    spViewProduct: 'View Product',
    spBack: 'Back to Home',
    spClose: 'Close',
    spHint: 'Switch flavors',
    contactModalTitle: 'Creative Design Showcase',
    contactModalDesc: 'This is an unofficial design experiment and concept study. We welcome your creative feedback.',
    contactName: 'Your Name',
    contactEmail: 'Email Address',
    contactNotes: 'Design Feedback & Thoughts',
    contactSubmit: 'Submit Creative Feedback',
    contactSuccess: 'Thank you! Your feedback has been recorded successfully.',
    menuTitle: 'Main Menu'
  }
};

function setLanguage(lang) {
  state.lang = lang;
  try { localStorage.setItem('pepsi_lang', lang); } catch (e) {}
  const dict = i18n[lang];

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('ltr', lang === 'en');

  $$('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });

  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) langBtn.textContent = dict.langToggle;
  const soundLabel = document.getElementById('sound-label');
  if (soundLabel) soundLabel.textContent = state.sound ? dict.soundOn : dict.soundOff;

  if (window.cansArc && window.cansArc.stage) window.cansArc.updateLayout();
  if (window.spotlight) window.spotlight.refreshLanguage();
  document.dispatchEvent(new CustomEvent('langchange'));
}

// ============================================================================
// 9. SOUND TOGGLE CONTROLLER
// ============================================================================
function initSoundToggle() {
  const soundBtn = document.getElementById('sound-toggle-btn');
  const soundLabel = document.getElementById('sound-label');
  if (!soundBtn) return;

  function updateSoundUI() {
    const dict = i18n[state.lang];
    soundBtn.classList.toggle('sound-on', state.sound);
    soundBtn.classList.toggle('sound-off', !state.sound);
    soundBtn.setAttribute('aria-pressed', state.sound ? 'true' : 'false');
    if (soundLabel) soundLabel.textContent = state.sound ? dict.soundOn : dict.soundOff;
  }

  soundBtn.addEventListener('click', () => {
    state.sound = !state.sound;
    try { localStorage.setItem('pepsi_sound', String(state.sound)); } catch (e) {}
    updateSoundUI();
    if (state.sound) audio.playFizz();
  });

  updateSoundUI();
}

// ============================================================================
// 10. MODAL & FEEDBACK ENGINE (Pure Design Experiment Mock)
// ============================================================================
function initContactModal() {
  const openBtns = $$('.open-contact-modal');
  const backdrop = document.getElementById('contact-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const form = document.getElementById('feedback-form');
  const toast = document.getElementById('toast-notice');
  if (!backdrop) return;

  const openModal = () => {
    backdrop.classList.add('open');
    backdrop.setAttribute('aria-hidden', 'false');
    const first = $('input', backdrop);
    first && setTimeout(() => first.focus(), 50);
  };
  const closeModal = () => {
    backdrop.classList.remove('open');
    backdrop.setAttribute('aria-hidden', 'true');
  };

  openBtns.forEach((btn) => btn.addEventListener('click', (e) => { e.preventDefault(); openModal(); }));
  closeBtn && closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', (e) => { if (e.target === backdrop) closeModal(); });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) closeModal();
  });

  form && form.addEventListener('submit', (e) => {
    e.preventDefault();
    closeModal();
    form.reset();
    audio.playPop();
    if (toast) {
      toast.textContent = i18n[state.lang].contactSuccess;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 3500);
    }
  });
}

// ============================================================================
// 11. PRODUCT DETAIL / LANDING PAGE (product.html)
//     Flavor switching happens in-place with animation + history support
// ============================================================================
class ProductDetailPage {
  constructor() {
    this.img = document.getElementById('detail-can-img');
    if (!this.img) return;
    this.wrap = document.getElementById('detail-can-wrap');
    this.panel = $('.detail-info-panel');
    this.pills = document.getElementById('detail-flavor-nav-pills');
    this.busy = false;
    this.index = this.indexFromUrl();
    state.currentIndex = this.index;

    this.render(true);
    this.bind();
    // Entrance
    requestAnimationFrame(() => {
      this.panel && this.panel.classList.add('is-in');
      this.runMeters();
    });
  }

  indexFromUrl() {
    const id = new URLSearchParams(window.location.search).get('flavor') || 'classic';
    const i = FLAVORS_DATA.findIndex((f) => f.id === id);
    return i === -1 ? 0 : i;
  }

  render(first) {
    const d = FLAVORS_DATA[this.index];
    applyTheme(d);
    if (first || this.img.getAttribute('src') !== d.imageCutout) this.img.src = d.imageCutout;
    this.img.alt = pick(d, 'name');
    const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
    set('detail-badge', pick(d, 'badge'));
    set('detail-title', pick(d, 'name'));
    set('detail-slogan', pick(d, 'slogan'));
    set('detail-desc', pick(d, 'desc'));
    set('calories-val', d.calories);
    set('volume-val', d.size);
    set('serving-val', isAr() ? d.serving : d.servingEn);
    document.title = `${pick(d, 'name')} | ${isAr() ? 'بيبسي' : 'Pepsi'}`;

    const word = document.getElementById('detail-word');
    if (word) word.textContent = pick(d, 'phrase');

    if (this.pills) {
      this.pills.innerHTML = '';
      FLAVORS_DATA.forEach((f, i) => {
        const pill = document.createElement('a');
        pill.href = `product.html?flavor=${f.id}`;
        pill.className = `nav-flavor-pill ${i === this.index ? 'active' : ''}`;
        pill.setAttribute('data-no-transition', '');
        pill.innerHTML = `<span class="pill-dot" style="background:${f.colors.primary}"></span><span>${pick(f, 'shortName')}</span>`;
        pill.addEventListener('click', (e) => {
          e.preventDefault();
          this.switchTo(i, true);
        });
        this.pills.appendChild(pill);
      });
    }
  }

  resetMeters() {
    ['sweet-fill', 'fizz-fill', 'zest-fill'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.style.transform = 'scaleX(0)';
    });
  }

  runMeters() {
    const d = FLAVORS_DATA[this.index];
    const vals = { 'sweet-fill': d.sweetness, 'fizz-fill': d.fizz, 'zest-fill': d.citrus };
    Object.entries(vals).forEach(([id, v], i) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.style.width = '100%';
      setTimeout(() => (el.style.transform = `scaleX(${v / 100})`), 250 + i * 120);
    });
  }

  bind() {
    window.addEventListener('popstate', () => {
      const i = this.indexFromUrl();
      if (i !== this.index) this.switchTo(i, false);
    });

    document.addEventListener('langchange', () => {
      this.render(false);
      this.runMeters();
    });

    window.addEventListener('keydown', (e) => {
      if ($('.modal-backdrop.open')) return;
      const n = FLAVORS_DATA.length;
      if (e.key === 'ArrowLeft') this.switchTo((this.index + (isAr() ? 1 : -1) + n) % n, true);
      if (e.key === 'ArrowRight') this.switchTo((this.index + (isAr() ? -1 : 1) + n) % n, true);
    });

    // Tilt follows the cursor (rAF throttled)
    if (this.wrap && !prefersReducedMotion) {
      let x = 0, y = 0, queued = false;
      window.addEventListener('mousemove', (e) => {
        if (window.innerWidth < 800) return;
        x = (e.clientX / window.innerWidth - 0.5) * 16;
        y = (e.clientY / window.innerHeight - 0.5) * 16;
        if (queued) return;
        queued = true;
        requestAnimationFrame(() => {
          queued = false;
          this.wrap.style.transform = `rotate(${-7 + x * 0.5}deg) translateY(${y}px)`;
        });
      }, { passive: true });
    }
  }

  async switchTo(i, push) {
    if (this.busy || i === this.index) return;
    this.busy = true;
    const dir = i > this.index ? 1 : -1;
    audio.playWhoosh();

    this.panel && this.panel.classList.remove('is-in');
    this.panel && this.panel.classList.add('is-out');
    this.resetMeters();
    await playTo(this.img, [
      { transform: 'translateY(0) rotate(0deg) scale(1)', opacity: 1 },
      { transform: `translateY(-40px) rotate(${-dir * 18}deg) scale(0.8)`, opacity: 0 }
    ], { duration: 380, easing: 'cubic-bezier(0.55, 0, 0.9, 0.35)' });

    this.index = i;
    state.currentIndex = i;
    if (push) history.pushState({ flavor: FLAVORS_DATA[i].id }, '', `product.html?flavor=${FLAVORS_DATA[i].id}`);
    this.render(false);
    await new Promise((r) => (this.img.complete ? r() : (this.img.onload = this.img.onerror = r)));

    this.panel && this.panel.classList.remove('is-out');
    void (this.panel && this.panel.offsetWidth);
    this.panel && this.panel.classList.add('is-in');
    this.runMeters();
    audio.playFizz();
    await playTo(this.img, [
      { transform: `translateY(60px) rotate(${dir * 16}deg) scale(0.8)`, opacity: 0 },
      { transform: `translateY(-8px) rotate(${-dir * 2}deg) scale(1.03)`, opacity: 1, offset: 0.7 },
      { transform: 'translateY(0) rotate(0deg) scale(1)', opacity: 1 }
    ], { duration: 720, easing: EASE_OUT });
    resetInline(this.img);
    this.busy = false;
  }
}

// ============================================================================
// 12. PRODUCTS CATALOG GRID (products.html) with animated filtering
// ============================================================================
function initProductsCatalogPage() {
  const grid = document.getElementById('catalog-products-grid');
  const filterBtns = $$('.filter-btn');
  if (!grid) return;
  let current = 'all';
  let busy = false;

  const matches = (f, filter) => filter === 'all' || f.category === filter;

  function build(filter) {
    grid.innerHTML = '';
    FLAVORS_DATA.filter((f) => matches(f, filter)).forEach((f, i) => {
      const card = document.createElement('article');
      card.className = 'product-card card-enter';
      card.style.setProperty('--card-glow', f.colors.glow);
      card.style.setProperty('--card-accent', f.colors.accent);
      card.style.setProperty('--i', i);
      const tags = pick(f, 'tags').map((t) => `<span class="card-tag">${t}</span>`).join('');
      card.innerHTML = `
        <div class="card-tags">${tags}</div>
        <a class="card-can-wrap" href="product.html?flavor=${f.id}" aria-label="${pick(f, 'name')}">
          <img src="${f.imageCutout}" alt="${pick(f, 'name')}" loading="lazy" decoding="async" width="540" height="1000">
        </a>
        <h3 class="card-title">${pick(f, 'name')}</h3>
        <p class="card-desc">${pick(f, 'slogan')}</p>
        <div class="card-footer">
          <div class="card-stats">
            <span>${tr('volumeLabel')}</span>
            <strong>${f.size} • ${f.calories}</strong>
          </div>
          <a href="product.html?flavor=${f.id}" class="card-link-btn">${tr('viewDetails')}</a>
        </div>`;
      grid.appendChild(card);
    });
  }

  async function renderGrid(filter, animated) {
    if (busy) return;
    busy = true;
    current = filter;
    if (animated && !prefersReducedMotion) {
      $$('.product-card', grid).forEach((c, i) => {
        c.classList.remove('card-enter');
        c.style.setProperty('--i', i);
        c.classList.add('card-leave');
      });
      await wait(300);
      // keep height stable during the swap to avoid page jumps
      grid.style.minHeight = `${grid.offsetHeight}px`;
    }
    build(filter);
    requestAnimationFrame(() => (grid.style.minHeight = ''));
    busy = false;
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      if (filter === current) return;
      filterBtns.forEach((b) => {
        b.classList.toggle('active', b === btn);
        b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
      });
      renderGrid(filter, true);
      audio.playFizz();
    });
  });

  document.addEventListener('langchange', () => build(current));
  build('all');
}

// ============================================================================
// 13. PAGE TRANSITIONS (curtain wipe between pages) + MOBILE MENU + REVEALS
// ============================================================================
function initPageTransitions() {
  const curtain = $('.page-curtain');
  if (!curtain) return;

  document.addEventListener('click', (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest('a[href]');
    if (!a || a.target === '_blank' || a.hasAttribute('download') || a.hasAttribute('data-no-transition')) return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin) return;
    if (url.pathname === location.pathname && url.search === location.search) {
      if (url.hash) return;
      e.preventDefault();
      return;
    }
    e.preventDefault();
    if (prefersReducedMotion) { location.href = url.href; return; }
    curtain.classList.remove('is-revealing');
    curtain.classList.add('is-leaving');
    audio.playWhoosh();
    setTimeout(() => (location.href = url.href), 520);
  });

  // Coming back through the bfcache: uncover the page again
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) {
      curtain.classList.remove('is-leaving');
      curtain.classList.add('is-revealing');
    }
  });
}

function initMobileMenu() {
  const header = $('.site-header');
  const nav = $('.nav-links', header || document);
  const actions = $('.header-actions', header || document);
  if (!header || !nav || !actions) return;
  const btn = document.createElement('button');
  btn.className = 'action-pill menu-toggle';
  btn.type = 'button';
  btn.setAttribute('aria-label', tr('menuTitle'));
  btn.setAttribute('aria-expanded', 'false');
  btn.innerHTML = '<span class="menu-lines" aria-hidden="true"><span></span><span></span></span>';
  actions.appendChild(btn);
  btn.addEventListener('click', () => {
    const open = header.classList.toggle('menu-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) header.classList.remove('menu-open');
  });
}

function initReveals() {
  const els = $$('[data-reveal]');
  if (!els.length) return;
  if (!('IntersectionObserver' in window) || prefersReducedMotion) {
    els.forEach((el) => el.classList.add('revealed'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach((el) => io.observe(el));
}

// ============================================================================
// 14. INITIALIZATION ROUTINE
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Apply saved language before anything renders text
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('ltr', state.lang === 'en');

  const langBtn = document.getElementById('lang-toggle-btn');
  langBtn && langBtn.addEventListener('click', () => setLanguage(state.lang === 'ar' ? 'en' : 'ar'));

  initSoundToggle();
  initContactModal();
  initMobileMenu();
  initPageTransitions();

  if (document.getElementById('particles-canvas')) {
    window.particlesEngine = new ParticlesEngine('particles-canvas');
  }

  if (document.getElementById('cans-stage')) {
    window.cansArc = new CansArcCarousel();
    window.spotlight = new ProductSpotlight(window.cansArc);
  }

  if (document.getElementById('detail-can-img')) {
    window.detailPage = new ProductDetailPage();
  }

  if (document.getElementById('catalog-products-grid')) {
    initProductsCatalogPage();
  }

  setLanguage(state.lang);
  initReveals();
});
