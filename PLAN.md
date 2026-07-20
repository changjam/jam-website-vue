# jam-website-vue 規劃文件

這份文件規劃一個全新的個人一頁式介紹網站：以 **Vue 3 + Tailwind CSS** 開發成 SPA、不考慮 SEO，畫面不需捲動，改以「以 Jam 為中心節點、技能／經歷延伸出去」的節點圖（mermaid mindmap 的視覺概念）呈現，點擊節點會彈出 detail popup，配色沿用現有 [jam-website-nuxt](../jam-website-nuxt) 的深藍／灰藍色調，並加入適度的進場與互動動畫。完成後透過 GitHub Actions 部署到 GitHub Pages（預設 `github.io` 網址）。讀者是 Jam 本人，讀完可以確認技術選型、內容架構、視覺規則與 CI/CD 流程是否符合預期，核准後即可依此文件開始開發。

## 架構概覽

```mermaid
mindmap
  root((jam-website-vue))
    技術選型
      Vue 3 + Vite + TypeScript
      Tailwind CSS
      無 Vue Router（單頁免切換）
      輕量自製 i18n（zh / en）
    節點圖內容
      中心節點（姓名／職稱／一句話介紹）
      About 節點（自我介紹）
      技能節點（前端／後端／AI／DevOps）
      Contact 節點（社群連結）
      點擊節點彈出 detail popup
    視覺規則
      沿用深藍／灰藍配色
      單一畫面、不捲動、大量留白
      進場淡入 + 節點連線動畫
      hover／popup 使用適度過渡動畫
    CI/CD
      GitHub Actions build
      upload-pages-artifact
      deploy-pages
      預設 github.io 網址
```

## 目標與非目標

**目標**
- 單一畫面的個人介紹，不需捲動，以節點圖（Jam 為中心、技能／經歷為外圍節點）呈現。
- 視覺乾淨、留白充足，資訊密度低；點擊節點才展開細節，預設畫面保持簡潔。
- 中英文可切換。
- 適度的進場與互動動畫（節點淡入、連線繪製、popup 過渡），但不過度花俏。
- 推送到 `main` 後自動建置並部署到 GitHub Pages。

**非目標**
- 不做 SEO（沒有 meta/OG 優化、sitemap、prerender）。
- 不做履歷式的條列經歷、時間軸。
- 不做多頁路由、CMS、後端 API。
- 不做誇張的視覺特效（卡片翻轉、大幅位移的 hover 浮動、粒子效果等）。

## 技術選型

| 項目 | 選擇 | 理由 |
|---|---|---|
| 框架 | Vue 3 + `<script setup>` + TypeScript | 純 SPA 不需要 Nuxt 的 SSR/SEO 能力，Vite 建置快、設定單純 |
| 建置工具 | Vite | 官方推薦、GitHub Pages 靜態輸出天然契合 |
| 路由 | 不使用 Vue Router | 只有一頁，區塊用錨點捲動即可，減少依賴 |
| 樣式 | Tailwind CSS | Utility-first，容易控制留白／字級的一致性，且不必額外維護自訂 class 命名 |
| i18n | 自製 `useLocale()` composable + `zh.ts` / `en.ts` 字典 | 只有兩語言、內容量小，`vue-i18n` 對這規模是過重的依賴 |
| 套件管理 | npm（Node 20.x），與 jam-website-nuxt 一致 | 維持環境一致性 |
| 測試 | 不建立測試套件 | 靜態展示頁，複雜度不足以支撐測試投資 |
| Lint | ESLint（vue + typescript 基本規則，由 create-vue 內建） | 維持程式碼品質，但不引入額外風格框架 |

## 視覺設計規則

沿用 [assets/public.scss](../jam-website-nuxt/assets/public.scss) 的色調，但只取色彩，不沿用裝飾風格（漸層、陰影、卡片邊角裝飾都不搬過來），色彩會定義在 Tailwind 的 theme 中，元件直接用 Tailwind class（如 `bg-bg`、`text-ink`、`text-accent`）取用。

| Tailwind token | 色碼 | 用途 | 來源 |
|---|---|---|---|
| `bg` | `#FDFDFA` | 背景 | `$opposite-color` |
| `ink` | `#121E2A` | 主要文字 | `$primary-color` |
| `accent` | `#446c94` | 強調色（連結、標籤邊框） | `$secondary-color` |
| `accent-light` | `#b9d9fa` | 次要強調（極少量點綴） | `$light-blue` |

**設計約束**：
- 整個畫面固定在單一 viewport（`h-screen overflow-hidden`），不捲動；節點圖置中，依 `min(vw, vh)` 縮放以適應各種螢幕。
- 字體使用系統字體堆疊（`-apple-system, "PingFang TC", "Segoe UI", sans-serif`），不額外載入 Web Font，維持輕量與一致觀感。
- 節點與中心卡片不使用陰影、漸層；popup 允許一層淺陰影以區隔浮層與背景。
- 動畫規則：
  - 進場：中心節點與外圍節點依序淡入 + 輕微縮放（各節點加上小段 `transition-delay` 做出從中心擴散的效果），連線用 SVG `stroke-dashoffset` 做「畫出來」的效果。
  - Hover／focus：節點邊框轉為強調色並些微放大（`scale(1.08)`），不做位移型的浮動。
  - Popup：淡入 + 輕微縮放進場、淡出退場，約 150–200ms。
  - 語言切換：文字淡入淡出。
- 技能等節點本身只顯示標籤文字，詳細內容（技能清單、自介段落、聯絡連結）點擊後才在 popup 顯示。

## 內容規劃

畫面不捲動，改以節點圖呈現：

- **中心節點** — 姓名、職稱、一句話介紹，固定顯示、不可點擊。
- **外圍節點**（環繞中心，點擊後彈出 popup 顯示細節）：
  1. **About** — 1–2 段簡短自我介紹文字，不走履歷式條列。
  2. **Frontend / Backend / AI / DevOps** — 各自對應一組技能標籤。
  3. **Contact** — GitHub / LinkedIn / Email 等連結。

節點統一用 `label` + `content`（`text` / `tags` / `links` 三種類型之一）描述，方便之後增減節點或調整內容類型。

文案內容（姓名、職稱、自介文字、技能清單、連結網址）由 Jam 後續提供或直接沿用 nuxt 版本 [locales/zh-tw.json](../jam-website-nuxt/locales/zh-tw.json) 整理精簡版，開發時先用 placeholder 撐版。

## 專案結構

```
jam-website-vue/
├── .github/workflows/deploy.yml   # CI/CD
├── public/
│   └── favicon 等靜態資源
├── src/
│   ├── main.ts
│   ├── App.vue                     # 全螢幕不捲動容器，組裝 GraphView
│   ├── components/
│   │   ├── GraphView.vue           # 節點圖容器：SVG 連線 + 節點排版 + popup 開關
│   │   ├── CenterNode.vue          # 中心節點（姓名／職稱／一句話介紹）
│   │   ├── SkillNode.vue           # 外圍節點（可點擊，含進場/hover 動畫）
│   │   ├── NodeDetail.vue          # 節點 detail popup
│   │   └── LocaleSwitch.vue
│   ├── composables/
│   │   ├── useLocale.ts            # 中英文切換
│   │   └── useGraphLayout.ts       # 依節點數量計算環繞座標與進場延遲
│   ├── locales/
│   │   ├── types.ts                # Dictionary / GraphNode 型別
│   │   ├── zh.ts
│   │   └── en.ts
│   └── assets/main.css             # @import "tailwindcss" + theme tokens
├── index.html
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## CI/CD 規劃

使用 GitHub 官方 Pages 部署流程（`actions/upload-pages-artifact` + `actions/deploy-pages`），不採用推送 `gh-pages` branch 的舊式做法。

流程（`.github/workflows/deploy.yml`）：

1. 觸發條件：push 到 `main`。
2. `actions/checkout` → `actions/setup-node`（Node 20）→ `npm ci` → `npm run build`（Vite 輸出到 `dist/`）。
3. `actions/upload-pages-artifact` 上傳 `dist/`。
4. `actions/deploy-pages` 部署。
5. Repo 設定 `Settings → Pages → Source` 改為 GitHub Actions。

**網域**：先用 GitHub 預設網域 `<username>.github.io/jam-website-vue`（暫不處理 `jamchang.com` 的網域衝突，之後要接自訂網域再回來調整）。因此：
- `vite.config.ts` 的 `base` 設為 `/jam-website-vue/`（對應 repo 名稱的子路徑）。
- 不需要 `CNAME` 檔案。

## Repo 規劃

- 由我建立 GitHub repo，名稱 `jam-website-vue`，**public**（private repo 在個人免費帳號下無法使用 GitHub Pages，且部署出去的網站本身仍是公開網址，改用 public 對個人作品集也沒有風險）。
- 本機路徑：`/Users/jam/Desktop/project/jam-website-vue`。

## 風險與待確認事項

- **內容文案**：Hero 一句話介紹、About 段落、Skills 標籤、Contact 連結網址目前尚未定案，開發時會先用 placeholder，待 Jam 提供或確認後再替換。
- **未來自訂網域**：目前先掛預設 `github.io` 網址，之後若要換成 `jamchang.com` 或其他網域，需要先處理與 jam-website-nuxt 的網域衝突（新舊站只能有一個用該網域）。

## 開發階段

核准本文件後，依序進行：

1. 建立 GitHub repo（public）並在本機初始化 Vite + Vue3 + TS + Tailwind 專案骨架。
2. 建立 `useLocale` 與 zh/en 字典，串接四個區塊元件與 placeholder 文案。
3. 用 Tailwind 套用色彩與留白版型，確認 RWD（手機／桌機）表現。
4. 撰寫 `.github/workflows/deploy.yml`，設定 Vite `base` 路徑。
5. 本機 `npm run build` 驗證輸出，推送 GitHub 後確認 Actions 部署成功、`github.io` 網址可正常訪問。
