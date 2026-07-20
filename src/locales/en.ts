import type { Dictionary } from './types'

const en: Dictionary = {
  center: {
    name: '張家誠',
    latin: 'Jam Chang',
    title: 'Full-Stack Engineer',
    tagline: 'I like turning ideas into things people can see and use',
  },
  nodes: [
    // ── Left wing: life ──
    {
      id: 'about',
      label: 'About Me',
      sub: '關於我',
      emoji: '👋',
      color: 'navy',
      side: 'left',
      content: {
        type: 'about',
        paragraphs: [
          "I'm Jam Chang, a software engineer from Taiwan with 2+ years of web development experience, specializing in AI applications and DevOps.",
          'I enjoy breaking complex problems into simple steps and shipping products people can actually use — and I love automating tedious workflows with new tools.',
        ],
        highlights: ['📍 Based in Taichung', '💼 Full-Stack Engineer', '🎓 YunTech, IM', '⚡ AI × DevOps'],
      },
    },
    {
      id: 'career',
      label: 'Career',
      sub: '工作經歷',
      emoji: '💼',
      color: 'career',
      side: 'left',
      content: {
        type: 'career',
        jobs: [
          {
            company: 'Wondercore',
            position: 'Full-Stack Engineer',
            period: 'Dec 2024 - Present',
            location: 'Taichung',
            achievements: [
              'Develop and maintain the company websites',
              'Introduced Kubernetes to improve app scalability and reliability',
              'Designed a CI/CD pipeline with GitHub Actions + ArgoCD for automated deploys',
              'Built a "KOL analysis" and "competitor analysis" system, saving tens of thousands of NTD/month over third-party services',
              'Built an internal VSCode Extension integrating JIRA and Git Diff to standardize commit quality',
            ],
          },
          {
            company: 'BigGo',
            position: 'Software Engineer',
            period: 'Feb 2023 - Dec 2024',
            location: 'Kaohsiung',
            achievements: [
              'Built an AI news system that summarizes multi-source events into full articles',
              'Improved a watermark-detection model from 80% to 95% accuracy via tuning and data augmentation',
              'Delivered many AI products: product search assistant, NSFW detection, watermark detection, AI news',
              'Built an internal Chrome Extension for image review, boosting team efficiency by 50%',
            ],
          },
        ],
      },
    },
    {
      id: 'education',
      label: 'Education',
      sub: '學歷',
      emoji: '🎓',
      color: 'education',
      side: 'left',
      content: {
        type: 'education',
        schools: [
          {
            school: 'National Yunlin University of Science and Technology',
            degree: 'B.B.A. in Information Management',
            period: 'Sep 2019 - Jun 2023',
            location: 'Yunlin',
            achievements: [
              'Graduated with a GPA of 3.65 / 4.0',
              'Led the team as leader to win 1st place (Group A) in the department capstone competition',
              'Capstone "Determining endotracheal tube position with deep learning" reached the national finals in 2023',
              'Served two years as sports team captain, organizing practices and matches',
            ],
          },
        ],
      },
    },
    {
      id: 'projects',
      label: 'Projects',
      sub: '作品',
      emoji: '🧩',
      color: 'projects',
      side: 'left',
      content: {
        type: 'projects',
        projects: [
          {
            name: 'Kashi-O',
            desc: 'A platform for learning Japanese through pop songs and anime soundtracks, built with React + Next.js.',
            image: 'kashi_o',
            link: 'https://github.com/changjam/Kashi-O',
            tags: ['React', 'Next.js', 'AI'],
          },
          {
            name: 'Time To Order',
            desc: 'A team-built ordering system with OCR to quickly create menus for any business.',
            image: 'time_to_order',
            link: 'https://github.com/changjam/TimeToOrder',
            tags: ['Vue', 'Python', 'AI'],
          },
          {
            name: 'HackMD RAG Chatbot',
            desc: 'Connects to the HackMD API and combines RAG to build a chatbot over your own notes.',
            image: 'hackmd_rag_webui',
            link: 'https://github.com/changjam/hackmd-rag-api',
            tags: ['Python', 'Vue', 'AI'],
          },
          {
            name: 'LLM Extension',
            desc: 'A Chrome Extension powered by an LLM to quickly analyze web page content.',
            image: 'llm_extension',
            link: 'https://github.com/changjam/llm-extension',
            tags: ['Extension', 'AI'],
          },
          {
            name: 'Real Time Speech To Text',
            desc: 'Uses Fast Whisper to translate languages in real time.',
            image: 'real_time_speech',
            link: 'https://github.com/changjam/real_time_speech_to_text',
            tags: ['Python', 'AI'],
          },
          {
            name: 'JSON Repair Library',
            desc: 'Repairs malformed JSON for more stable LLM output.',
            image: 'json_repair',
            link: 'https://github.com/changjam/jsam_json_repair',
            tags: ['Python', 'Library'],
          },
          {
            name: 'ETT Website',
            desc: 'A website to detect endotracheal tube position — the frontend of my capstone project.',
            image: 'ETT_Website',
            link: 'https://github.com/changjam/ETT_Website',
            tags: ['Vue'],
          },
          {
            name: 'Typing Game',
            desc: 'A typing game inspired by MonkeyType, built with Vue3.',
            image: 'typing_game',
            link: 'https://github.com/changjam/Typing-Game',
            tags: ['Vue', 'SCSS'],
          },
          {
            name: 'AI Comments Filter',
            desc: 'A Chrome Extension that filters out comments you dislike.',
            image: 'ai_comments_filter',
            link: 'https://github.com/changjam/ai_comments_filter',
            tags: ['Extension', 'AI'],
          },
          {
            name: 'getNoteAPI',
            desc: 'Connects to the HackMD API to quickly create and manage articles.',
            image: 'get_note_api',
            link: 'https://github.com/changjam/getNoteAPI',
            tags: ['Python'],
          },
          {
            name: 'todoList',
            desc: 'A Django todo web app to add, delete, and complete tasks.',
            image: 'todoList',
            link: 'https://github.com/changjam/todoList',
            tags: ['Django', 'Python'],
          },
          {
            name: 'Text Editor',
            desc: 'A text editor implemented with 16 design patterns and OOP concepts.',
            image: 'text_editor',
            link: 'https://github.com/changjam/Text_Editor',
            tags: ['Java'],
          },
        ],
      },
    },
    {
      id: 'contact',
      label: 'Contact',
      sub: '聯絡我',
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

    // ── Right wing: skills ──
    {
      id: 'frontend',
      label: 'Frontend',
      sub: '前端開發',
      emoji: '🎨',
      color: 'frontend',
      side: 'right',
      content: {
        type: 'skill',
        description:
          'I build web services with Vue.js and React.js, keeping code quality up with SCSS and ESLint, and moving fast with Tailwind CSS and Bootstrap.',
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
      label: 'Backend',
      sub: '後端開發',
      emoji: '⚙️',
      color: 'backend',
      side: 'right',
      content: {
        type: 'skill',
        description:
          'I develop backend services in Python and Go, with hands-on experience across PostgreSQL, MongoDB, Redis, and ElasticSearch.',
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
      label: 'AI',
      sub: 'AI 應用',
      emoji: '🤖',
      color: 'ai',
      side: 'right',
      content: {
        type: 'skill',
        description:
          'Experienced with many models — YOLO, U-Net, Stable Diffusion, CLIP, and various LLMs. Shipped chatbots, AI news systems, and product image search.',
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
          'I introduced Kubernetes to manage containerized apps and designed a CI/CD pipeline with GitHub Actions + ArgoCD, deploying across GCP, Azure, and Heroku.',
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
      label: 'Extensions',
      sub: '外掛開發',
      emoji: '🧩',
      color: 'extension',
      side: 'right',
      content: {
        type: 'skill',
        description:
          'I love building practical little tools — with rich Chrome Extension experience, plus a VSCode Extension that integrates JIRA and Git Diff and uses an LLM to generate commit messages.',
        items: [
          { name: 'Chrome Extension', logo: 'chrome_extension' },
          { name: 'VSCode Extension' },
          { name: 'JIRA Integration' },
          { name: 'Git Diff × LLM' },
        ],
      },
    },
  ],
  ui: {
    localeSwitch: '中',
    close: 'Close',
    viewProject: 'View project',
    hintDrag: 'Drag to pan · Click a node for details',
  },
}

export default en
