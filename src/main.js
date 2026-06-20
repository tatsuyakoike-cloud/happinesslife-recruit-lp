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
    <section class="scrollStory" id="top" aria-label="HappinessLife株式会社 採用ページ ファーストビュー">
      <div class="scrollStorySpacer" aria-hidden="true"></div>
      <div class="scrollStorySticky">
        <div class="scrollStoryImages" aria-hidden="true">
          ${[0, 1, 2].map((index) => imageTag(
            assets.images[index],
            remoteAssets.images[index],
            '',
            `class="scrollStoryImage${index === 0 ? ' is-active' : ''}"`
          )).join('')}
        </div>
        <div class="scrollStoryOverlay"></div>
        <div class="scrollStoryUi">
          <h1 class="sr-only">HappinessLife株式会社 採用LP</h1>
          <div class="header">
            <a class="logoWrap" href="#about" aria-label="HappinessLife 採用ページ本文へ">
              ${imageTag(assets.logo, remoteAssets.logo, 'Happiness Life')}
            </a>
            <a class="miniBtn" href="#entry">ENTRY</a>
          </div>
          <div class="scrollStoryCopy">
            <p class="scrollStoryLine">次世代の営業会社。</p>
            <p class="scrollStoryLine">AIを活用した営業スキルで、</p>
            <p class="scrollStoryLine">関わる人の人生を変える。</p>
          </div>
          <div class="scrollStorySteps" aria-hidden="true">
            <span class="scrollStoryStep is-active"></span>
            <span class="scrollStoryStep"></span>
            <span class="scrollStoryStep"></span>
          </div>
          <div class="scrollStoryProgress" aria-hidden="true">
            <span class="scrollStoryProgressFill"></span>
          </div>
          <div class="scrollText">SCROLL</div>
        </div>
      </div>
    </section>

    <main class="main" aria-hidden="true">
      <section class="section secondView" id="about">
        <div class="container">
          <div class="introBlock">
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
                <div class="chipList is-ghost">
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
            <div class="flow flowSteps reveal">
              <div class="flowItem">
                <span class="flowNum">01</span>
                <div class="flowBody"><h3>現場を理解する</h3><p>商材、ターゲット、導線、来店状況を把握し、成果につながる動きを設計します。</p></div>
              </div>
              <div class="flowItem">
                <span class="flowNum">02</span>
                <div class="flowBody"><h3>お客様と接点をつくる</h3><p>声かけ・ヒアリング・提案を通じて、お客様の課題やニーズを引き出します。</p></div>
              </div>
              <div class="flowItem">
                <span class="flowNum">03</span>
                <div class="flowBody"><h3>チームで成果をつくる</h3><p>メンバー同士で連携しながら、現場全体の成果を最大化していきます。</p></div>
              </div>
              <div class="flowItem">
                <span class="flowNum">04</span>
                <div class="flowBody"><h3>振り返って改善する</h3><p>うまくいった理由・改善点を整理し、次の現場に活かします。</p></div>
              </div>
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

initReveal();
initScrollStory();

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
  }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });

  items.forEach((item) => observer.observe(item));
}

const STORY_LINE_COUNT = 3;

function initScrollStory() {
  const section = document.querySelector('.scrollStory');
  const main = document.querySelector('.main');
  if (!section || !main) return;

  const spacer = section.querySelector('.scrollStorySpacer');
  const panel = section.querySelector('.scrollStorySticky');
  const images = [...section.querySelectorAll('.scrollStoryImage')];
  const lines = [...section.querySelectorAll('.scrollStoryLine')];
  const steps = [...section.querySelectorAll('.scrollStoryStep')];
  const progressFill = section.querySelector('.scrollStoryProgressFill');
  const scrollText = section.querySelector('.scrollText');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.documentElement.style.setProperty('--hero-scroll-steps', '3');

  if (prefersReduced) {
    images.forEach((img, i) => img.classList.toggle('is-active', i === 0));
    lines.forEach((line) => line.classList.add('is-visible'));
    steps.forEach((step, i) => step.classList.toggle('is-active', i === STORY_LINE_COUNT - 1));
    section.classList.add('is-complete');
    panel?.classList.add('is-complete');
    main.classList.add('is-unlocked');
    main.removeAttribute('aria-hidden');
    if (progressFill) progressFill.style.width = '100%';
    return;
  }

  let ticking = false;

  function getProgress() {
    if (!spacer) return 0;
    const maxScroll = Math.max(spacer.offsetHeight - window.innerHeight, 1);
    return Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
  }

  function update() {
    ticking = false;
    const progress = getProgress();
    const isComplete = progress >= 0.998;

    section.classList.toggle('is-complete', isComplete);
    panel?.classList.toggle('is-complete', isComplete);
    main.classList.toggle('is-unlocked', isComplete);
    main.toggleAttribute('aria-hidden', !isComplete);
    document.body.classList.toggle('is-hero-active', !isComplete);

    if (progressFill) {
      progressFill.style.width = `${progress * 100}%`;
    }

    if (scrollText) {
      scrollText.style.opacity = progress >= 0.92 ? '0' : '1';
    }

    if (!isComplete) {
      images.forEach((img, index) => {
        const center = STORY_LINE_COUNT <= 1 ? 0 : index / (STORY_LINE_COUNT - 1);
        const distance = Math.abs(progress - center) * (STORY_LINE_COUNT - 1);
        const opacity = Math.max(0, 1 - distance * 0.85);
        const scale = 1.04 + (1 - opacity) * 0.08;
        img.style.opacity = String(opacity);
        img.style.transform = `scale(${scale})`;
        img.classList.toggle('is-active', opacity > 0.45);
      });

      lines.forEach((line, index) => {
        const threshold = index / STORY_LINE_COUNT + 0.03;
        line.classList.toggle('is-visible', progress >= threshold);
      });

      steps.forEach((step, index) => {
        const threshold = (index + 0.5) / STORY_LINE_COUNT;
        step.classList.toggle('is-active', progress >= threshold - 0.1);
      });
    }
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
}

