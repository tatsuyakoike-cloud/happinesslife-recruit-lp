# Cursor Agent / Claude Code 完走プロンプト

あなたは、Cursor / Claude Code 上で作業する実装・公開エージェントです。
このワークスペースに入っている HappinessLife株式会社の採用LPファイル一式を使い、ローカル確認、ビルド修正、GitHub push、Vercel本番公開確認まで、可能な限り自走して完了してください。

## 0. ゴール

HappinessLife株式会社の採用LPを、Vite + Vanilla JavaScript + Three.js 構成の静的サイトとして公開する。

完了状態は以下です。

- `npm install` または `npm ci` が成功している
- `npm run build` が成功している
- `npm run preview` または `npm run dev` で表示確認できる
- ファーストビューの Three.js / WebGL 演出が動く
- WebGL または画像読み込み失敗時も fallback で大きく崩れない
- スマホ幅でも大きな表示崩れがない
- 応募・問い合わせ導線がある
- GitHub に push 済み
- Vercel の本番URLで公開、または GitHub 連携デプロイが走る状態になっている

## 1. 最重要ルール

- 原則、途中でユーザー確認待ちにしない。
- エラーが出たら、ログを読み、原因を切り分け、修正し、再実行する。
- 1回で直らなくても、`npm run build` が通るまで修正を続ける。
- React化、Next.js化、WordPress化、バックエンド追加はしない。
- 今回は Vite + Vanilla JavaScript + Three.js の静的LPとして進める。
- 既存デザイン方針を大きく壊さない。
- ファーストビューは大きな採用コピー中心ではなく、Three.js / WebGL のグラフィック演出を主役にする。
- 給与、勤務地、雇用形態、福利厚生、休日など、未確定の採用条件を勝手に断定しない。
- 未確定情報は「詳細は面談時に確認」「経験・スキル・稼働条件により決定」「確定後に差し替え」などにする。
- `.env*`, `node_modules`, `dist`, `.vercel` はコミットしない。
- 認証情報、トークン、シークレットは絶対にコミットしない。

## 2. 止まってよい条件

以下の場合だけ、最終報告で「ユーザー作業が必要」と明記して止まってよい。

- GitHub 認証がなく、`gh auth status` または `git push` が認証エラーになる
- Vercel 認証がなく、`vercel whoami` または `vercel deploy` が認証エラーになる
- GitHub repository URL が未設定で、かつ `gh` CLI も未ログインでリポジトリ作成できない
- Vercel のチーム選択・プロジェクト権限が必要で、CLIから先に進めない

ただし、その場合も以下までは必ず完了させる。

- ソース修正
- `npm install` / `npm ci`
- `npm run build` 成功
- Git commit 作成
- push / deploy のために必要な具体コマンドの提示

## 3. まず実行する確認

現在地とファイル構成を確認する。

```bash
pwd
ls -la
find . -maxdepth 3 -type f | sort | sed -n '1,160p'
```

ZIPだけが置かれている場合は、展開してプロジェクトディレクトリへ移動する。

```bash
unzip '*.zip' -d ./_extracted || true
find . -maxdepth 3 -name package.json -print
```

`package.json` があるディレクトリをプロジェクトルートとして作業する。

## 4. 必須ファイル確認

以下を確認し、不足していたら作成・修正する。

- `index.html`
- `package.json`
- `src/main.js`
- `src/styles.css`
- `public/images/` 配下の画像、または画像URL fallback
- `.gitignore`
- `README.md`
- `vercel.json` は必要に応じて追加

`.gitignore` は最低限以下を含める。

```gitignore
node_modules
dist
.vercel
.env
.env.*
.DS_Store
```

## 5. 技術スタックを固定

`package.json` は Vite + Three.js で動く状態にする。

必要な scripts は以下。

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

Three.js は npm package から import する。CDN読み込みへ変更しない。

## 6. 依存関係インストール

`package-lock.json` がある場合は、まず `npm ci` を試す。
失敗した場合は `npm install` に切り替えてよい。

```bash
npm ci || npm install
```

失敗した場合は、`package.json`、Node version、lockfileの問題を確認して修正する。

## 7. ビルド確認と修正ループ

必ず実行する。

```bash
npm run build
```

エラーが出た場合は、以下の方針で自分で修正する。

- import エラー：パス、拡張子、export/import を修正
- Three.js エラー：import文、API、バージョン差異を確認して修正
- 画像パスエラー：`public/images/xxx` はHTML/JS内では `/images/xxx` として参照
- CSS エラー：構文、閉じ括弧、セレクタを確認
- Vite エラー：`index.html` と `src/main.js` の読み込みを確認
- chunk size warning：ビルド成功なら公開を止めない。必要なら最終報告に warning として記載

`npm run build` が成功するまで完了にしない。

## 8. 表示確認

ビルド成功後、可能なら以下を実行する。

```bash
npm run preview -- --host 127.0.0.1
```

または、開発確認として以下を実行する。

```bash
npm run dev -- --host 127.0.0.1
```

確認すること。

- ページが表示される
- ファーストビューに Three.js / WebGL 演出がある
- WebGL失敗時でも fallback が表示される
- ロゴ・写真が表示される
- セクションが縦にスクロールできる
- CTAボタンがある
- 応募・問い合わせリンクが機能する
- スマホ幅でも崩れない
- 横スクロールが出ない
- コンソールに致命的なエラーがない

ブラウザ確認ツールがない場合でも、HTML/CSS/JSを確認し、明らかな崩れやミスを修正する。

## 9. LP内容の調整方針

HappinessLife株式会社の採用LPとして、以下が伝わる構成にする。

- 通信イベント・販売支援・営業代行・研修の会社であること
- 現場で成果をつくる仕事であること
- 未経験でも営業力・接客力・現場対応力が身につくこと
- 条件だけでなく、成長環境や現場の魅力で応募意欲を高めること
- まず話を聞いてみる、応募する、問い合わせる導線があること

過度な脚色や、未確認の採用条件の断定はしない。

## 10. 応募導線の確認

`src/main.js` や HTML 内に応募URL・問い合わせURLがある場合、定数化して差し替えやすくする。

例：

```js
const ENTRY_URL = 'https://happinesslife-corp.studio.site/contact'
const CASUAL_MAIL_URL = 'mailto:happinesslife0116@gmail.com?subject=採用応募について'
```

確定URLがない場合は、既存の問い合わせURLまたは mailto を維持する。
リンク切れや `#` のままのCTAは避ける。

## 11. Vercel設定

`vercel.json` がある場合は、Vite静的サイトとして公開できる設定にする。

推奨：

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install"
}
```

ただし既存のVercel連携に問題が出る場合は、無理に変更しない。
Viteの標準出力先は `dist` として扱う。

## 12. Git commit

Git管理されているか確認する。

```bash
git status
```

未初期化の場合：

```bash
git init
git branch -M main
```

変更内容を確認して commit する。

```bash
git add .
git commit -m "feat: complete HappinessLife recruit landing page" || true
```

commit済みで差分がない場合は、そのまま次へ進む。

## 13. GitHub push

まず remote を確認する。

```bash
git remote -v
```

### remote がある場合

現在のbranchを確認し、mainへpushする。

```bash
git branch --show-current
git push -u origin main
```

もし現在branchが main でない場合は、状況に応じて main に揃える。

### remote がない場合

`gh` CLI が使えるか確認する。

```bash
gh --version || true
gh auth status || true
```

`gh` がログイン済みなら、リポジトリを作成してpushする。
今回の目的は公開なので、既存方針がなければ public repository で作成してよい。
クライアント情報をpublic repoに置くのが不適切と判断される場合は private にする。

publicで作る場合：

```bash
gh repo create happinesslife-recruit-lp --public --source=. --remote=origin --push
```

privateで作る場合：

```bash
gh repo create happinesslife-recruit-lp --private --source=. --remote=origin --push
```

`gh` が未ログインの場合は、GitHub作業だけ止めて、最終報告に以下を出す。

```bash
git remote add origin <GitHub repository URL>
git push -u origin main
```

## 14. Vercel本番公開

Vercel CLI が使えるか確認する。

```bash
npx vercel --version
npx vercel whoami || true
```

ログイン済みなら、本番公開を試す。

```bash
npx vercel deploy --prod --yes
```

もし `vercel deploy --prod --yes` でプロジェクト未リンクのエラーが出る場合は、以下を試す。

```bash
npx vercel link --yes
npx vercel deploy --prod --yes
```

Vercel CLI が未ログイン・権限不足の場合は、GitHub push まで完了させ、最終報告で以下の設定を案内する。

- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

GitHub連携済みの場合、push後にVercel側の自動デプロイ状況も確認する。

## 15. 最後に必ず再確認

公開作業後、最後にもう一度実行する。

```bash
npm run build
```

成功していることを確認してから最終報告する。

## 16. 最終報告フォーマット

作業完了後、必ず以下の形式で報告する。

```md
## 作業完了報告

### 実施したこと
- 
- 
- 

### 確認結果
- npm install / npm ci：成功 or 失敗内容
- npm run build：成功 or 失敗内容
- npm run preview / npm run dev：確認結果
- PC表示：確認結果
- スマホ表示：確認結果
- Three.js / WebGL：確認結果
- fallback表示：確認結果
- 応募導線：確認結果

### 修正した主なファイル
- 
- 
- 

### GitHub
- push状況：
- repository：
- branch：
- commit：

### Vercel
- 公開状況：
- 公開URL：
- 追加で必要な作業：

### 注意点
- 未確定の採用条件：
- 公開前にクライアント確認した方がよい点：
```

## 17. 完走基準

次の状態になるまで、完了扱いにしない。

- `npm run build` が成功している
- Git commit がある
- GitHub push 済み、または認証不足以外の準備が完了している
- Vercel本番公開済み、または認証不足以外の準備が完了している
- 最終報告に公開URLまたは残作業コマンドが明記されている

ここまで、確認待ちで止めずに進めてください。
