import * as THREE from 'three';
import './styles.css';

const ENTRY_URL = 'https://happinesslife-corp.studio.site/contact';
const CASUAL_MAIL_URL = 'mailto:happinesslife0116@gmail.com?subject=%E6%8E%A1%E7%94%A8%E5%BF%9C%E5%8B%9F%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6&body=HappinessLife%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%81%AE%E6%8E%A1%E7%94%A8%E3%83%9A%E3%83%BC%E3%82%B8%E3%82%92%E8%A6%8B%E3%81%A6%E9%80%A3%E7%B5%A1%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%0D%0A%0D%0A%E3%80%90%E3%81%8A%E5%90%8D%E5%89%8D%E3%80%91%0D%0A%E3%80%90%E9%9B%BB%E8%A9%B1%E7%95%AA%E5%8F%B7%E3%80%91%0D%0A%E3%80%90%E5%B8%8C%E6%9C%9B%E8%81%B7%E7%A8%AE%E3%80%91%0D%0A%E3%80%90%E8%B3%AA%E5%95%8F%E3%83%BB%E7%9B%B8%E8%AB%87%E5%86%85%E5%AE%B9%E3%80%91';

const assets = {
  logo: '/images/logo.png',
  images: [
    '/images/event-wide.jpg',
    '/images/booth-front.jpg',
    '/images/booth-orange.jpg',
    '/images/colorful-booth.jpg',
    '/images/event-staff.jpg',
    '/images/uq-counter.jpg',
    '/images/au-event.jpg'
  ]
};

const remoteAssets = {
  logo: 'https://cdn.goope.jp/196485/221203143622qyu6.png',
  images: [
    'https://cdn.goope.jp/196485/221203180334-638b10e63199e.jpg',
    'https://cdn.goope.jp/196485/221203180309-638b10cd7970f.jpg',
    'https://cdn.goope.jp/196485/221203180304-638b10c8745e4.jpg',
    'https://cdn.goope.jp/196485/230211175054gvwr_l.jpg',
    'https://cdn.goope.jp/196485/221203181401dde9_l.jpg',
    'https://cdn.goope.jp/196485/221203181411rq9h_l.jpg',
    'https://cdn.goope.jp/196485/221203181454ze64_l.jpg'
  ]
};

function imageTag(src, fallbackSrc, alt = '', attrs = '') {
  return `<img src="${src}" onerror="this.onerror=null;this.src='${fallbackSrc}'" alt="${alt}" ${attrs}>`;
}

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="lp">
    <section class="hero" aria-label="HappinessLife株式会社 採用ページ ファーストビュー">
      <h1 class="sr-only">HappinessLife株式会社 採用LP</h1>
      <div class="heroFallback" aria-hidden="true">
        ${assets.images.slice(0, 6).map((src, index) => imageTag(src, remoteAssets.images[index], '')).join('')}
      </div>
      <canvas class="webglCanvas" id="heroCanvas"></canvas>
      <div class="heroUi">
        <div class="header">
          <a class="logoWrap" href="#about" aria-label="HappinessLife 採用ページ本文へ">
            ${imageTag(assets.logo, remoteAssets.logo, 'Happiness Life')}
          </a>
          <a class="miniBtn" href="#entry">ENTRY</a>
        </div>
        <div class="scrollText">SCROLL</div>
      </div>
    </section>

    <main class="main">
      <section class="section" id="about">
        <div class="container">
          <div class="reveal">
            <div class="kicker">RECRUIT MESSAGE</div>
            <h2 class="title">現場を動かす力は、<br><span>人生を前に進める力になる。</span></h2>
            <p class="lead">
              HappinessLifeは、通信イベント・営業代行・販売支援・人材ソリューションを軸に、
              お客様とクライアントの成果をつくる会社です。
              ただ商品を案内するだけではなく、現場を設計し、人を巻き込み、成果まで責任を持つ。
              その経験は、どこでも通用する営業力・企画力・改善力になります。
            </p>
          </div>

          <div class="grid grid2 alignStart values">
            <div class="card imageCard reveal">
              ${imageTag(assets.images[0], remoteAssets.images[0], 'HappinessLifeのイベント現場')}
              <div class="imageCaption">
                <strong>イベントを、成果が出る現場に変える。</strong>
                <span>企画・準備・接客・クロージング・改善まで、現場の中心で動く仕事です。</span>
              </div>
            </div>

            <div class="card reveal">
              <div class="cardInner tallCenter">
                <div class="kicker">WHY JOIN US</div>
                <h3>未経験でも、現場で伸びる。</h3>
                <p>
                  通信商材の知識、接客トーク、販売導線、イベント運営、チーム連携。
                  入社後は実際の現場を通じて、営業として必要な力を段階的に身につけていきます。
                </p>
                <div class="chipList">
                  <span class="chip">接客力</span>
                  <span class="chip">営業力</span>
                  <span class="chip">企画力</span>
                  <span class="chip">改善力</span>
                  <span class="chip">チーム運営</span>
                  <span class="chip">現場対応力</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section compact">
        <div class="container">
          <div class="reveal">
            <div class="kicker">BUSINESS</div>
            <h2 class="title">HappinessLifeの仕事</h2>
            <p class="lead">
              中心となるのは、通信キャリアのイベント運営・販売支援・人材ソリューション。
              現場で成果を出すために、集客から提案、接客、改善まで一貫して関わります。
            </p>
          </div>

          <div class="grid grid3 values">
            <article class="card reveal">
              <div class="cardInner">
                <span class="number">01</span>
                <h3>通信イベント運営</h3>
                <p>au、UQ mobile、SoftBank、Y!mobile、docomoなどの通信領域を中心に、商業施設や店舗での販売促進イベントを運営します。</p>
              </div>
            </article>
            <article class="card reveal">
              <div class="cardInner">
                <span class="number">02</span>
                <h3>営業代行・販売支援</h3>
                <p>商品知識と接客力を活かし、お客様への案内から契約・販売拡大までを支援。現場で成果を出す営業力が求められます。</p>
              </div>
            </article>
            <article class="card reveal">
              <div class="cardInner">
                <span class="number">03</span>
                <h3>研修・改善サポート</h3>
                <p>スタッフ教育、営業研修、トークスキル研修、販売員研修など、店舗や現場の売上向上につながる支援も行います。</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="grid grid2 alignStart">
            <div class="reveal">
              <div class="kicker">WORK STYLE</div>
              <h2 class="title">ただ立つだけの<br>現場ではない。</h2>
              <p class="lead">
                HappinessLifeの現場では、準備・声かけ・ヒアリング・提案・クロージング・振り返りまで、
                一人ひとりが成果に向き合います。自分の動きが売上やお客様の反応に直結するからこそ、
                成長実感を得やすい仕事です。
              </p>
            </div>
            <div class="flow reveal">
              <div class="flowItem"><div><h3>現場を理解する</h3><p>商材、ターゲット、導線、来店状況を把握し、成果につながる動きを設計します。</p></div></div>
              <div class="flowItem"><div><h3>お客様と接点をつくる</h3><p>声かけ・ヒアリング・提案を通じて、お客様の課題やニーズを引き出します。</p></div></div>
              <div class="flowItem"><div><h3>チームで成果をつくる</h3><p>メンバー同士で連携しながら、現場全体の成果を最大化していきます。</p></div></div>
              <div class="flowItem"><div><h3>振り返って改善する</h3><p>うまくいった理由・改善点を整理し、次の現場に活かします。</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section class="section compact">
        <div class="container">
          <div class="reveal">
            <div class="kicker">PERSON</div>
            <h2 class="title">こんな人と働きたい</h2>
          </div>
          <div class="grid grid4 values">
            <article class="card reveal"><div class="cardInner"><h3>人と話すことが好き</h3><p>会話を通じて相手の課題を見つけ、提案することに前向きな人。</p></div></article>
            <article class="card reveal"><div class="cardInner"><h3>成長意欲がある</h3><p>未経験でも、営業力・接客力・現場対応力を身につけたい人。</p></div></article>
            <article class="card reveal"><div class="cardInner"><h3>チームで動ける</h3><p>個人プレーだけでなく、周囲と連携しながら成果を目指せる人。</p></div></article>
            <article class="card reveal"><div class="cardInner"><h3>前向きに改善できる</h3><p>失敗をそのままにせず、次に活かす行動ができる人。</p></div></article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="grid grid2 alignStart">
            <div class="card imageCard reveal">
              ${imageTag(assets.images[1], remoteAssets.images[1], 'HappinessLifeのイベントブース')}
              <div class="imageCaption">
                <strong>自分の提案で、現場の空気が変わる。</strong>
                <span>接客・販売・イベント運営を通じて、実践的な営業スキルが身につきます。</span>
              </div>
            </div>
            <div class="card reveal">
              <div class="cardInner tallCenter">
                <div class="kicker">CAREER</div>
                <h3>身につくスキル</h3>
                <p>商品知識だけではなく、相手の状況を読み取る力、提案する力、現場を改善する力、チームで成果をつくる力を伸ばせる環境です。</p>
                <div class="chipList">
                  <span class="chip">ヒアリング力</span>
                  <span class="chip">提案力</span>
                  <span class="chip">クロージング力</span>
                  <span class="chip">イベント設計</span>
                  <span class="chip">売上改善</span>
                  <span class="chip">教育・育成</span>
                  <span class="chip">課題発見</span>
                  <span class="chip">AI活用</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section compact">
        <div class="container">
          <div class="reveal">
            <div class="kicker">JOB DESCRIPTION</div>
            <h2 class="title">募集要項</h2>
            <p class="lead">給与・勤務地・雇用形態が確定したら、下記を差し替えて公開してください。</p>
          </div>
          <div class="reveal values">
            <table class="jobTable">
              <tbody>
                <tr><th>募集職種</th><td>イベント運営スタッフ / 販売支援スタッフ / 営業スタッフ</td></tr>
                <tr><th>仕事内容</th><td>通信イベントの運営、接客・販売支援、来場者へのヒアリング、サービス提案、現場改善、チーム連携など</td></tr>
                <tr><th>対象</th><td>未経験歓迎。人と話すことが好きな方、営業力を身につけたい方、成長意欲のある方</td></tr>
                <tr><th>勤務地</th><td>関東エリアの商業施設・携帯ショップ・イベント会場など。詳細は面談時に確認</td></tr>
                <tr><th>勤務時間</th><td>案件・現場により変動。詳細は面談時に確認</td></tr>
                <tr><th>給与</th><td>経験・スキル・稼働条件により決定。詳細は面談時に確認</td></tr>
                <tr><th>選考フロー</th><td>応募 / カジュアル面談 → 面接 → 条件確認 → 稼働開始</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section class="section" id="entry">
        <div class="container">
          <div class="entryBox reveal">
            <div class="kicker">ENTRY</div>
            <h2>まずは、話を聞いてみる。</h2>
            <p>
              仕事内容、働き方、現場の雰囲気、未経験からの始め方など、気になることをカジュアルに確認できます。
              少しでも興味があれば、まずはお問い合わせください。
            </p>
            <div class="btnRow">
              <a class="btn primary" href="${ENTRY_URL}" target="_blank" rel="noopener">応募・問い合わせをする</a>
              <a class="btn secondary" href="${CASUAL_MAIL_URL}">メールで相談する</a>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer">
        <div class="container footerInner">
          <span>© HappinessLife Inc. Recruit Landing Page</span>
          <span>Communication Event / Sales Support / Training</span>
        </div>
      </footer>
    </main>
  </div>
`;

const page = document.querySelector('.lp');

initReveal();
initWebGLHero();

function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  items.forEach((item) => observer.observe(item));
}

function initWebGLHero() {
  const hero = document.querySelector('.hero');
  const canvas = document.querySelector('#heroCanvas');
  if (!hero || !canvas) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let width = 1;
  let height = 1;
  let time = 0;
  let targetMouseX = 0;
  let targetMouseY = 0;
  let mouseX = 0;
  let mouseY = 0;
  let animationFrameId = null;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0, 10.8);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance'
  });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));

  const world = new THREE.Group();
  scene.add(world);

  scene.add(new THREE.AmbientLight(0xffffff, 1.2));

  const keyLight = new THREE.PointLight(0xff8a2a, 3.1, 28);
  keyLight.position.set(-3.8, 3.4, 5.2);
  scene.add(keyLight);

  const blueLight = new THREE.PointLight(0x4085ff, 2.2, 24);
  blueLight.position.set(4.2, -2.4, 4);
  scene.add(blueLight);

  const pinkLight = new THREE.PointLight(0xe7317b, 2.2, 24);
  pinkLight.position.set(2.6, 2.6, 3.8);
  scene.add(pinkLight);

  const textureLoader = new THREE.TextureLoader();
  const cards = [];

  const vertexShader = `
    uniform float uTime;
    uniform float uWave;
    varying vec2 vUv;

    void main() {
      vUv = uv;
      vec3 p = position;
      float waveA = sin((p.x * 2.2) + uTime * 0.9) * 0.035;
      float waveB = cos((p.y * 3.1) - uTime * 0.7) * 0.028;
      p.z += (waveA + waveB) * uWave;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
    }
  `;

  const fragmentShader = `
    uniform sampler2D uTexture;
    uniform float uOpacity;
    varying vec2 vUv;

    void main() {
      vec4 tex = texture2D(uTexture, vUv);
      float d = distance(vUv, vec2(0.5, 0.5));
      float vignette = smoothstep(0.82, 0.18, d);
      vec3 warm = vec3(1.0, 0.44, 0.09) * 0.045;
      vec3 color = tex.rgb * (0.78 + vignette * 0.27) + warm;
      gl_FragColor = vec4(color, uOpacity);
    }
  `;

  const cardSpecs = [
    { x: -3.8, y: 1.35, z: -0.2, w: 3.2, h: 2.28, ry: 0.22, rz: -0.06, scale: 1.05 },
    { x: 0.25, y: 1.6, z: -0.7, w: 3.7, h: 2.56, ry: -0.08, rz: 0.04, scale: 1.14 },
    { x: 3.62, y: 0.58, z: -0.3, w: 3.0, h: 2.14, ry: -0.24, rz: 0.07, scale: 1.02 },
    { x: -2.8, y: -1.55, z: 0.1, w: 3.1, h: 2.2, ry: 0.18, rz: 0.08, scale: 1.08 },
    { x: 1.52, y: -1.42, z: 0.2, w: 3.55, h: 2.38, ry: -0.15, rz: -0.05, scale: 1.08 },
    { x: 4.55, y: -1.55, z: -1.1, w: 2.5, h: 1.86, ry: -0.24, rz: -0.02, scale: 0.88 },
    { x: -5.0, y: -0.2, z: -1.4, w: 2.55, h: 1.82, ry: 0.32, rz: 0.03, scale: 0.86 }
  ];

  assets.images.forEach((url, index) => createCard(url, cardSpecs[index], index));

  const particlesA = createParticles(720, 6.2, 0xff8a22, 0.018, 0.52);
  const particlesB = createParticles(420, 5.2, 0xffffff, 0.012, 0.36);
  const particlesC = createParticles(300, 5.7, 0x3f85ff, 0.015, 0.34);

  const ringA = createRing(4.25, 0xff7a1a, 0.32, { x: 1.15, y: 0.2, z: -0.08 });
  const ringB = createRing(5.1, 0xe7317b, 0.18, { x: 1.4, y: -0.32, z: 0.22 });
  const ringC = createRing(3.52, 0xffffff, 0.14, { x: 1.25, y: 0.62, z: -0.44 });

  const phoneA = createPhone(-4.9, 2.38, -0.1, 1.08, 0xff7a1a);
  const phoneB = createPhone(4.75, 1.8, -0.55, 0.86, 0xe7317b);
  const phoneC = createPhone(-0.6, -2.72, -0.22, 0.74, 0x2b7cff);

  window.addEventListener('resize', resize, { passive: true });
  hero.addEventListener('pointermove', onPointerMove, { passive: true });

  resize();
  hero.classList.add('is-webgl-ready');
  animate();

  function fallbackTexture(index) {
    const c = document.createElement('canvas');
    c.width = 1024;
    c.height = 640;
    const ctx = c.getContext('2d');
    const gradients = [
      ['#ff7a1a', '#e7317b', '#111111'],
      ['#e7317b', '#2b7cff', '#0c0c0c'],
      ['#ffb14a', '#ff7a1a', '#141414'],
      ['#2b7cff', '#ff7a1a', '#0a0a0a']
    ];
    const colors = gradients[index % gradients.length];
    const grad = ctx.createLinearGradient(0, 0, c.width, c.height);
    grad.addColorStop(0, colors[0]);
    grad.addColorStop(0.52, colors[1]);
    grad.addColorStop(1, colors[2]);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.globalAlpha = 0.16;
    for (let i = 0; i < 26; i += 1) {
      ctx.beginPath();
      ctx.arc(Math.random() * c.width, Math.random() * c.height, 30 + Math.random() * 130, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
    }
    ctx.globalAlpha = 0.18;
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#ffffff';
    for (let i = 0; i < 18; i += 1) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * c.width, Math.random() * c.height);
      ctx.lineTo(Math.random() * c.width, Math.random() * c.height);
      ctx.stroke();
    }
    const texture = new THREE.CanvasTexture(c);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
    return texture;
  }

  function coverTexture(texture, planeRatio) {
    const img = texture.image;
    if (!img || !img.width || !img.height) return;
    const imageRatio = img.width / img.height;
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    if (imageRatio > planeRatio) {
      texture.repeat.x = planeRatio / imageRatio;
      texture.repeat.y = 1;
      texture.offset.x = (1 - texture.repeat.x) / 2;
      texture.offset.y = 0;
    } else {
      texture.repeat.x = 1;
      texture.repeat.y = imageRatio / planeRatio;
      texture.offset.x = 0;
      texture.offset.y = (1 - texture.repeat.y) / 2;
    }
    texture.needsUpdate = true;
  }

  function createCard(url, spec, index) {
    const group = new THREE.Group();
    group.position.set(spec.x, spec.y, spec.z);
    group.rotation.set(0, spec.ry || 0, spec.rz || 0);
    group.scale.setScalar(spec.scale || 1);

    const geometry = new THREE.PlaneGeometry(spec.w, spec.h, 34, 24);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: fallbackTexture(index) },
        uTime: { value: 0 },
        uWave: { value: 1 },
        uOpacity: { value: 0.84 }
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false
    });

    const mesh = new THREE.Mesh(geometry, material);
    group.add(mesh);

    const shadow = new THREE.Mesh(
      new THREE.PlaneGeometry(spec.w + 0.18, spec.h + 0.18),
      new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0.24,
        depthWrite: false
      })
    );
    shadow.position.z = -0.05;
    shadow.position.y = -0.06;
    group.add(shadow);
    group.add(makeFrame(spec.w, spec.h));

    textureLoader.load(
      url,
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        coverTexture(texture, spec.w / spec.h);
        material.uniforms.uTexture.value = texture;
        material.uniforms.uTexture.value.needsUpdate = true;
      },
      undefined,
      () => {}
    );

    world.add(group);
    cards.push({ group, material, baseX: spec.x, baseY: spec.y, baseZ: spec.z, index });
  }

  function makeFrame(w, h) {
    const hw = w / 2;
    const hh = h / 2;
    const points = [
      new THREE.Vector3(-hw, -hh, 0),
      new THREE.Vector3(hw, -hh, 0),
      new THREE.Vector3(hw, hh, 0),
      new THREE.Vector3(-hw, hh, 0),
      new THREE.Vector3(-hw, -hh, 0)
    ];
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.26 });
    const line = new THREE.Line(geometry, material);
    line.position.z = 0.04;
    return line;
  }

  function createParticles(count, radius, color, size, opacity) {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const r = radius * (0.35 + Math.random() * 0.65);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      positions[i * 3 + 0] = Math.sin(phi) * Math.cos(theta) * r * 1.25;
      positions[i * 3 + 1] = Math.sin(phi) * Math.sin(theta) * r * 0.62;
      positions[i * 3 + 2] = Math.cos(phi) * r * 0.55;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      color,
      size,
      transparent: true,
      opacity,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const points = new THREE.Points(geometry, material);
    world.add(points);
    return points;
  }

  function createRing(radius, color, opacity, rotation) {
    const geometry = new THREE.TorusGeometry(radius, 0.008, 8, 240);
    const material = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const ring = new THREE.Mesh(geometry, material);
    ring.rotation.set(rotation.x, rotation.y, rotation.z);
    world.add(ring);
    return ring;
  }

  function createPhone(x, y, z, scale, color) {
    const group = new THREE.Group();
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(0.58, 1.1, 0.035),
      new THREE.MeshStandardMaterial({ color, roughness: 0.18, metalness: 0.18, transparent: true, opacity: 0.38 })
    );
    const screen = new THREE.Mesh(
      new THREE.PlaneGeometry(0.47, 0.86),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.13 })
    );
    screen.position.z = 0.022;
    const home = new THREE.Mesh(
      new THREE.CircleGeometry(0.035, 24),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.24 })
    );
    home.position.z = 0.024;
    home.position.y = -0.47;
    group.add(body, screen, home);
    group.position.set(x, y, z);
    group.scale.setScalar(scale);
    world.add(group);
    return group;
  }

  function resize() {
    const rect = hero.getBoundingClientRect();
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
    const isMobile = width < 680;
    world.scale.setScalar(isMobile ? 0.68 : width < 980 ? 0.82 : 1);
    camera.position.z = isMobile ? 12.6 : 10.8;
  }

  function onPointerMove(event) {
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    targetMouseX = (x - 0.5) * 2;
    targetMouseY = (y - 0.5) * 2;
  }

  function animate() {
    const speed = prefersReduced ? 0.25 : 1;
    time += 0.012 * speed;
    mouseX += (targetMouseX - mouseX) * 0.045;
    mouseY += (targetMouseY - mouseY) * 0.045;

    world.rotation.y = mouseX * 0.09 + Math.sin(time * 0.22) * 0.045;
    world.rotation.x = -mouseY * 0.045 + Math.cos(time * 0.18) * 0.02;

    particlesA.rotation.y += 0.0009 * speed;
    particlesA.rotation.x += 0.0004 * speed;
    particlesB.rotation.y -= 0.0007 * speed;
    particlesC.rotation.z += 0.0008 * speed;

    ringA.rotation.z += 0.0018 * speed;
    ringB.rotation.z -= 0.0012 * speed;
    ringC.rotation.z += 0.001 * speed;

    phoneA.rotation.y = Math.sin(time * 0.72) * 0.55;
    phoneA.rotation.z = Math.cos(time * 0.42) * 0.12;
    phoneB.rotation.y = Math.cos(time * 0.58) * 0.52;
    phoneB.rotation.z = Math.sin(time * 0.5) * 0.1;
    phoneC.rotation.y = Math.sin(time * 0.62) * 0.5;
    phoneC.rotation.z = Math.sin(time * 0.38) * 0.12;

    cards.forEach((card) => {
      const offset = card.index * 0.74;
      card.group.position.y = card.baseY + Math.sin(time * 0.8 + offset) * 0.12;
      card.group.position.x = card.baseX + Math.cos(time * 0.52 + offset) * 0.055;
      card.group.rotation.z += Math.sin(time + offset) * 0.00016 * speed;
      card.material.uniforms.uTime.value = time + offset;
    });

    camera.position.x += (mouseX * 0.38 - camera.position.x) * 0.025;
    camera.position.y += (-mouseY * 0.26 - camera.position.y) * 0.025;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
    animationFrameId = requestAnimationFrame(animate);
  }

  window.addEventListener('beforeunload', () => {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    renderer.dispose();
  });
}
