# jam-website-vue

Jam 的個人一頁式介紹網站。Vue 3 + TypeScript + Tailwind CSS 打造的純前端 SPA，不含 SSR/SEO，部署在 GitHub Pages。詳細規劃請見 [PLAN.md](PLAN.md)。

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

推送到 `main` 分支後，[.github/workflows/deploy.yml](.github/workflows/deploy.yml) 會自動建置並部署到 GitHub Pages。

Repo 設定需要手動做一次：`Settings → Pages → Source` 選擇 **GitHub Actions**。

## 專案結構

- [src/components/](src/components/) — Hero / About / Skills / Contact / LocaleSwitch 五個區塊元件
- [src/composables/useLocale.ts](src/composables/useLocale.ts) — 中英文切換邏輯
- [src/locales/](src/locales/) — 中英文內容字典
