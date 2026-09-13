# 農數通 AgriDataGo — 介紹網站

農數通（AgriDataGo）LINE 官方帳號的公開介紹網站，使用 React + Vite 建置，`npm run build` 後輸出純靜態檔案，可直接部署到 GitHub Pages 等靜態主機。

內容架構對應三個獨立頁面（各自掛載一個 React root，非 SPA 路由，方便以純靜態檔案部署），並提供四種語言：

- `index.html` / `privacy.html` / `terms.html` — 繁體中文（預設，網站根目錄）
- `zh-Hans/` — 简体中文
- `en/` — English
- `ja/` — 日本語

每個語言各自是完整的一組 `index.html`／`privacy.html`／`terms.html`，彼此以頁尾「語言切換」連結，並在 `<head>` 加上 `hreflang` 對應標籤。LINE Bot 指令（如 `#設定芭樂08:30`）在所有語言版本中都保留原始繁體中文寫法，因為後端實際比對的是繁體字串——翻譯頁面只翻譯說明文字，不翻譯指令本身。

原始網頁版內容參考自既有的靜態介紹頁，重新整理為 React 元件並統一品牌為「農數通 AgriDataGo」（英／日文版僅使用「AgriDataGo」）。

## 特色

- **無障礙**：跳到主要內容連結、語意化地標（`header`／`main`／`nav`／`footer`）、區塊以 `aria-labelledby` 對應標題、鍵盤可視焦點樣式、裝飾性圖示以 `aria-hidden` 隱藏。
- **HTML5 語意化**：依內容性質使用 `section`／`article`／`dl`／`dt`／`dd` 等標籤，標題階層完整（`h1` → `h2` → `h3`）。
- **標題錨點**：每個標題旁都有可點擊的 `#` 永久連結，方便分享到特定段落。
- **RWD**：`.wrap` 容器搭配流動版面，並在 480px 以下的斷點微調字級與間距；觸控裝置會固定顯示標題錨點（無 hover 狀態時）。
- **SEO**：各頁皆有獨立 `description`／`canonical`／`hreflang`／Open Graph／Twitter Card 標籤，首頁附 JSON-LD 結構化資料，並提供 `robots.txt`、`sitemap.xml`（含各語言版本）。

## 開發

```bash
npm install
npm run dev
```

## 建置靜態檔案

```bash
npm run build
```

輸出於 `dist/`，包含所有語言版本的頁面、對應的 CSS／JS，以及 `CNAME`（自訂網域 `agridatago.shyetech.com`）。可用 `npm run preview` 本機預覽建置結果。

## 目錄結構

```
en/、ja/、zh-Hans/    非預設語言的 HTML 進入點（結構同根目錄）
src/
  entry-home.jsx                各頁面的掛載入口（繁體中文，預設）
  entry-privacy.jsx
  entry-terms.jsx
  entry-home-en.jsx             其他語言的掛載入口，命名為 entry-<頁面>-<語言>.jsx
  entry-privacy-en.jsx
  ...
  pages/
    Home.jsx / Privacy.jsx / Terms.jsx      繁體中文（預設）
    en/       Home.jsx / Privacy.jsx / Terms.jsx
    ja/       Home.jsx / Privacy.jsx / Terms.jsx
    zh-Hans/  Home.jsx / Privacy.jsx / Terms.jsx
  components/
    Footer.jsx    含語言切換選單，依 locale／page 產生連結
    Heading.jsx   帶錨點連結的標題元件
  i18n/
    locales.js    語言清單與路徑對應
  constants.js    共用常數（如 LINE 好友連結）
  styles.css
```
