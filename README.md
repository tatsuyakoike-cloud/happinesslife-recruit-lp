# HappinessLife株式会社 採用LP

Vite + Vanilla JavaScript + Three.js で作成した採用LPです。
Cursor Agent / Claude Code に `AGENT_AUTOPUBLISH_PROMPT.md` を貼ると、ビルド確認、GitHub push、Vercel公開まで自走する前提で進められます。

## 技術構成

- Vite
- Vanilla JavaScript
- Three.js
- CSS
- Static hosting on Vercel

## ローカル確認

```bash
npm ci || npm install
npm run build
npm run preview
```

開発表示：

```bash
npm run dev
```

## Vercel設定

- Framework Preset: Vite
- Install Command: npm install
- Build Command: npm run build
- Output Directory: dist

## 重要な差し替えポイント

`src/main.js` の冒頭付近にある応募・問い合わせ導線を、確定URLに差し替えてください。

```js
const ENTRY_URL = 'https://happinesslife-corp.studio.site/contact'
const CASUAL_MAIL_URL = 'mailto:happinesslife0116@gmail.com?subject=採用応募について'
```

## 公開前に確認すること

- 画像素材の利用許諾
- 給与、勤務地、雇用形態、勤務時間などの採用条件
- 応募フォームURLまたはLINE導線
- 問い合わせ先メールアドレス
- OGP画像・title・description

## ファイル構成

```text
happinesslife-recruit-lp/
  index.html
  package.json
  package-lock.json
  vercel.json
  .gitignore
  README.md
  AGENT_AUTOPUBLISH_PROMPT.md
  public/images/
  src/main.js
  src/styles.css
```
