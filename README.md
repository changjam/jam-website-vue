# jam-website-vue

Jam 的個人網站 —— 一個手繪風格的互動心智圖。以 Vue 3 + TypeScript + Tailwind CSS + rough.js 打造的純前端 SPA，中心是本人、向外延伸技能樹與人生軸，點節點看詳情，支援中英切換。部署於 GitHub Pages。設計說明見 [PLAN.md](PLAN.md)。

🔗 https://changjam.github.io/jam-website-vue/

## 環境需求

- Node.js `^22.18.0` 或 `>=24.12.0`
- npm

## 開發

```sh
npm install
npm run dev
```

## 建置

```sh
npm run build
```

`vue-tsc` 型別檢查與 `vite build` 會依序執行，輸出到 `dist/`。

## 部署

推送到 `main` 分支後，[.github/workflows/deploy.yml](.github/workflows/deploy.yml) 會自動建置並部署到 GitHub Pages。Repo 需一次性設定 `Settings → Pages → Source` 為 **GitHub Actions**。

## 改內容

- 文案（技能、經歷、作品、聯絡）：[src/locales/zh.ts](src/locales/zh.ts) / [src/locales/en.ts](src/locales/en.ts)
- 分支顏色：[src/assets/main.css](src/assets/main.css) 的 `@theme` 與 [src/theme.ts](src/theme.ts)
- 圖片素材：[public/logos/](public/logos/)、[public/projects/](public/projects/)、`public/avatar.webp`
