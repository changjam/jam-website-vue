import type { Dictionary } from './types'

const zh: Dictionary = {
  center: {
    name: '張家誠',
    latin: 'Jam Chang',
    title: '全端工程師',
    tagline: '喜歡把想法做成看得到、用得到的東西',
  },
  nodes: [
    // ── 左翼：人生軸 ──
    {
      id: 'about',
      label: '關於我',
      sub: 'About',
      emoji: '👋',
      color: 'navy',
      side: 'left',
      content: {
        type: 'about',
        paragraphs: [
          '我是張家誠，一名來自台灣的軟體工程師，擁有 2 年以上的網站開發經驗，擅長 AI 應用與 DevOps。',
          '喜歡把複雜的問題拆解成簡單的步驟，一步步做成看得到、用得到的產品；也熱衷於嘗試新工具，把繁瑣的流程自動化。',
        ],
        highlights: ['📍 現居臺中', '💼 全端工程師', '🎓 雲科大 資管系', '⚡ AI × DevOps'],
      },
    },
    {
      id: 'career',
      label: '工作經歷',
      sub: 'Career',
      emoji: '💼',
      color: 'career',
      side: 'left',
      content: {
        type: 'career',
        jobs: [
          {
            company: 'Wondercore 萬達康股份有限公司',
            position: '全端工程師',
            period: '2024.12 - 現在',
            location: '臺中',
            achievements: [
              '負責公司網站的開發與維護',
              '為團隊導入 Kubernetes，提升應用的可擴展性與可靠性',
              '以 GitHub Actions + ArgoCD 設計 CI/CD 流程，實現自動化部署',
              '開發「KOL 分析系統」與「競品分析系統」，替代第三方服務、每月省下數萬元預算',
              '開發內部 VSCode Extension，整合 JIRA 與 Git Diff，統一團隊 commit 品質',
            ],
          },
          {
            company: 'BigGo 樂方股份有限公司',
            position: '軟體工程師',
            period: '2023.02 - 2024.12',
            location: '高雄',
            achievements: [
              '開發 AI 新聞系統，自動歸納整合多來源事件並生成完整新聞文章',
              '優化浮水印偵測模型，透過調參與資料增強將準確率從 80% 提升至 95%',
              '交付多項 AI 產品：產品搜尋助手、圖片 NSFW 偵測、浮水印偵測、AI 新聞等',
              '開發內部 Chrome Extension 整合圖片審核流程，審核效率提升 50%',
            ],
          },
        ],
      },
    },
    {
      id: 'education',
      label: '學歷',
      sub: 'Education',
      emoji: '🎓',
      color: 'education',
      side: 'left',
      content: {
        type: 'education',
        schools: [
          {
            school: '國立雲林科技大學',
            degree: '資訊管理學系 學士',
            period: '2019.09 - 2023.06',
            location: '雲林',
            achievements: [
              '畢業 GPA 3.65 / 4.0，學業表現優異',
              '擔任組長帶領團隊獲系上專題競賽 A 組第一名',
              '專題「以深度學習判斷插管位置是否正確」入圍 2023 全國大專專題競賽決賽',
              '擔任系隊隊長兩年，負責練球與賽事規劃，培養領導與協調能力',
            ],
          },
        ],
      },
    },
    {
      id: 'projects',
      label: '作品',
      sub: 'Projects',
      emoji: '🧩',
      color: 'projects',
      side: 'left',
      content: {
        type: 'projects',
        projects: [
          {
            name: 'Kashi-O 日文歌曲學習平台',
            desc: '專為日文歌曲學習設計的平台，結合流行音樂、動漫原聲學日語，由 React + Next.js 開發。',
            image: 'kashi_o',
            link: 'https://github.com/changjam/Kashi-O',
            tags: ['React', 'Next.js', 'AI'],
          },
          {
            name: 'Time To Order 訂餐系統',
            desc: '3 人團隊開發的訂餐系統，具 OCR 功能可快速建立菜單，幫企業搭建專屬訂餐平台。',
            image: 'time_to_order',
            link: 'https://github.com/changjam/TimeToOrder',
            tags: ['Vue', 'Python', 'AI'],
          },
          {
            name: 'HackMD RAG Chatbot',
            desc: '串接 HackMD API 並結合 RAG，打造專屬於你的知識庫聊天機器人。',
            image: 'hackmd_rag_webui',
            link: 'https://github.com/changjam/hackmd-rag-api',
            tags: ['Python', 'Vue', 'AI'],
          },
          {
            name: 'LLM Extension',
            desc: 'Chrome Extension 結合大語言模型，快速分析網頁資訊。',
            image: 'llm_extension',
            link: 'https://github.com/changjam/llm-extension',
            tags: ['Extension', 'AI'],
          },
          {
            name: 'Real Time Speech To Text',
            desc: '使用 Fast Whisper 即時翻譯各國語言。',
            image: 'real_time_speech',
            link: 'https://github.com/changjam/real_time_speech_to_text',
            tags: ['Python', 'AI'],
          },
          {
            name: 'JSON Repair Library',
            desc: '修復錯誤的 JSON 格式，讓大語言模型的輸出更穩定。',
            image: 'json_repair',
            link: 'https://github.com/changjam/jsam_json_repair',
            tags: ['Python', 'Library'],
          },
          {
            name: 'ETT Website',
            desc: '偵測氣管內插管位置是否正常的網站，畢業專題的前端實作。',
            image: 'ETT_Website',
            link: 'https://github.com/changjam/ETT_Website',
            tags: ['Vue'],
          },
          {
            name: 'Typing Game',
            desc: '參考 MonkeyType 的打字遊戲，以 Vue3 開發。',
            image: 'typing_game',
            link: 'https://github.com/changjam/Typing-Game',
            tags: ['Vue', 'SCSS'],
          },
          {
            name: 'AI Comments Filter',
            desc: 'Chrome Extension，自動過濾掉你不喜歡的留言。',
            image: 'ai_comments_filter',
            link: 'https://github.com/changjam/ai_comments_filter',
            tags: ['Extension', 'AI'],
          },
          {
            name: 'getNoteAPI',
            desc: '串接 HackMD API，快速建立與管理你的文章。',
            image: 'get_note_api',
            link: 'https://github.com/changjam/getNoteAPI',
            tags: ['Python'],
          },
          {
            name: 'todoList',
            desc: '以 Django 開發的待辦網頁，可新增、刪除、完成任務。',
            image: 'todoList',
            link: 'https://github.com/changjam/todoList',
            tags: ['Django', 'Python'],
          },
          {
            name: 'Text Editor',
            desc: '運用 16 種設計模式與物件導向概念實作的文字編輯器。',
            image: 'text_editor',
            link: 'https://github.com/changjam/Text_Editor',
            tags: ['Java'],
          },
        ],
      },
    },
    {
      id: 'contact',
      label: '聯絡我',
      sub: 'Contact',
      emoji: '✉️',
      color: 'contact',
      side: 'left',
      content: {
        type: 'links',
        links: [
          { label: 'GitHub', handle: '@changjam', href: 'https://github.com/changjam', emoji: '🐙' },
          { label: 'LinkedIn', handle: 'Jam Chang', href: 'https://www.linkedin.com/', emoji: '💼' },
          {
            label: 'Email',
            handle: 'changjam60@gmail.com',
            href: 'mailto:changjam60@gmail.com',
            emoji: '📮',
          },
        ],
      },
    },

    // ── 右翼：技能樹 ──
    {
      id: 'frontend',
      label: '前端開發',
      sub: 'Frontend',
      emoji: '🎨',
      color: 'frontend',
      side: 'right',
      content: {
        type: 'skill',
        description:
          '擅長以 Vue.js、React.js 等框架開發網頁服務，善用 SCSS 與 ESLint 維持程式碼品質，並常用 Tailwind CSS、Bootstrap 快速完成切版。',
        items: [
          { name: 'Vue.js', logo: 'vue_logo' },
          { name: 'Nuxt.js', logo: 'nuxt_logo' },
          { name: 'React.js', logo: 'react_logo' },
          { name: 'Next.js', logo: 'next_logo' },
          { name: 'TypeScript' },
          { name: 'Tailwind CSS', logo: 'tailwind_logo' },
          { name: 'SCSS', logo: 'scss_logo' },
          { name: 'Bootstrap', logo: 'bootstrap_logo' },
          { name: 'ESLint', logo: 'eslint_logo' },
        ],
      },
    },
    {
      id: 'backend',
      label: '後端開發',
      sub: 'Backend',
      emoji: '⚙️',
      color: 'backend',
      side: 'right',
      content: {
        type: 'skill',
        description:
          '習慣以 Python、Go 開發後端服務，資料庫使用過 PostgreSQL、MongoDB、Redis 與 ElasticSearch。',
        items: [
          { name: 'Python', logo: 'python_logo' },
          { name: 'Go', logo: 'go_logo' },
          { name: 'FastAPI', logo: 'fastapi_logo' },
          { name: 'Node.js', logo: 'nodejs_logo' },
          { name: 'PostgreSQL', logo: 'postgresql_logo' },
          { name: 'MongoDB', logo: 'mongo_db' },
          { name: 'Redis' },
          { name: 'ElasticSearch' },
        ],
      },
    },
    {
      id: 'ai',
      label: 'AI 應用',
      sub: 'AI',
      emoji: '🤖',
      color: 'ai',
      side: 'right',
      content: {
        type: 'skill',
        description:
          '有豐富的模型使用經驗：YOLO、U-Net、Stable Diffusion、CLIP 與各種大型語言模型。曾開發客服機器人、AI 新聞、產品搜圖等專案。',
        items: [
          { name: 'LLM / RAG', logo: 'openAI_logo' },
          { name: 'Hugging Face', logo: 'hugging_face' },
          { name: 'YOLO' },
          { name: 'U-Net' },
          { name: 'Stable Diffusion' },
          { name: 'CLIP' },
        ],
      },
    },
    {
      id: 'devops',
      label: 'DevOps',
      sub: 'DevOps',
      emoji: '🚀',
      color: 'devops',
      side: 'right',
      content: {
        type: 'skill',
        description:
          '曾協助公司導入 Kubernetes 管理容器化應用，並以 GitHub Actions + ArgoCD 設計 CI/CD 流程降低手動部署成本，使用過 GCP、Azure、Heroku 等雲端平台。',
        items: [
          { name: 'Docker', logo: 'docker_logo' },
          { name: 'Kubernetes', logo: 'k8s' },
          { name: 'ArgoCD', logo: 'argocd_logo' },
          { name: 'GitHub Actions' },
          { name: 'GCP' },
          { name: 'Azure' },
          { name: 'Linux' },
        ],
      },
    },
    {
      id: 'extension',
      label: '外掛開發',
      sub: 'Extension',
      emoji: '🧩',
      color: 'extension',
      side: 'right',
      content: {
        type: 'skill',
        description:
          '擅長開發各類實用小工具，具豐富的 Chrome Extension 開發經驗；也寫過整合 JIRA 與 Git Diff、以 LLM 生成團隊規範 commit message 的 VSCode Extension。',
        items: [
          { name: 'Chrome Extension', logo: 'chrome_extension' },
          { name: 'VSCode Extension' },
          { name: 'JIRA 整合' },
          { name: 'Git Diff × LLM' },
        ],
      },
    },
  ],
  ui: {
    localeSwitch: 'EN',
    close: '關閉',
    viewProject: '查看專案',
    hintDrag: '拖曳可移動畫布 · 點擊節點看詳情',
  },
}

export default zh
