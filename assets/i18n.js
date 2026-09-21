const translations = {
  ru: {
    'meta.title': 'Сергей Восканян | AI Automation Architect & Technical PM',
    'hire.status': 'Открыт к предложениям • Remote • Senior',
    'hero.name.first': 'Сергей',
    'hero.name.last': 'Восканян',
    'hero.role': 'AI Automation Architect & Technical PM',
    'hero.bio': 'Архитектор умных систем: от сложных ETL-пайплайнов до внедрения AI-агентов. Соединяю инженерный подход и 15 лет маркетинга, чтобы превратить хаос в автономный бизнес-инструмент.',
    'hero.hint': 'Парсинг • AI-скоринг • cover letter • автоотклики | Swagger • Docker • до 70% меньше рутины',
    'hero.scroll': 'Смотреть кейсы',
    'section.career': 'Карьера и квалификация',
    'exp.timeline': 'Опыт работы',
    'exp.education': 'Образование и сертификаты',
    'edu.universities': 'Высшее образование',
    'edu.certs': 'Курсы и сертификаты',
    'edu.mgupp.name': 'МГУПП',
    'edu.mgtu.name': 'МГТУ им. Баумана',
    'edu.mai.name': 'МАИ',
    'edu.mgupp': 'Кибернетика — магистр',
    'edu.mgtu': 'Повышение квалификации',
    'edu.mai': 'Московский авиационный институт — повышение квалификации',
    'cert.yandex': 'Яндекс.Директ PRO (2025)',
    'cert.google': 'Google Ads Expert (2025)',
    'cert.n8n': 'n8n Expert',
    'cert.bitrix': 'Bitrix24 Specialist',
    'cert.swiftbook': 'SwiftBook (iOS Dev)',
    'cert.1c': '1С:Предприятие 8.1',
    'exp.github': 'GitHub Activity',
    'section.cases': 'Кейсы и проекты',
    'tab.all': 'Все',
    'tab.ai': 'AI и Автоматизация',
    'tab.marketing': 'Маркетинг и SEO',
    'label.featured': 'Главное',
    'status.live': 'Live',
    'status.archived': 'В архиве',
    'status.private': 'Приватный',
    'btn.demo': 'Демо',
    'btn.repo': 'Репозиторий',
    'btn.case': 'Смотреть кейс',
    'status.workflow_repo': 'workflow в репо',
    'status.code_on_request': 'код по запросу',
    'cat.seo_ai': 'SEO AI',
    'cat.fullstack_ai': 'Full-Stack AI',
    'cat.ai_automation': 'AI Automation',
    'cat.nocode': 'No-Code Solution',
    'cat.content_analysis': 'Content Analysis',
    'cat.lead_capture': 'Lead Capture',
    'cat.chat_automation': 'Chat Automation',
    'cat.email_automation': 'Email Automation',
    'cat.content_distribution': 'Content Distribution',
    'cat.conversational_ai': 'Conversational AI',
    'cat.growth_marketing': 'Growth Marketing',
    'cat.engineering': 'Engineering',
    'case.seo_tool.desc': 'Сервис экспресс-аудита сайтов. Анализирует теги, структуру и изображения, считает SEO Score и выдает рекомендации.',
    'case.job_hunter.desc': 'Мультиагентная платформа для автопоиска вакансий. Парсит источники, фильтрует через LLM-скоринг, парсит резюме в DB и генерирует сопроводительные письма.',
    'case.shedevrum.desc': 'Агент ведет канал в Шедеврум и Telegram через Alice AI. Автоматически ищет тренды, регенерирует промпты и публикует контент. Управление с тг-бота.',
    'case.seo_agent.desc': 'ИИ‑агент анализирует данные GSC и Яндекс Вебмастера. Находит проблемы и пишет рекомендации.',
    'case.linkedin.desc': 'Мини-решение для авто-выгрузки вакансий: LinkedIn → Apify → Google Sheets. Фильтрация по ключам.',
    'case.content_intel.desc': 'Шаблон n8n для глубокого анализа сайтов: конвертирует HTML в Markdown и через GPT-4 формирует отчет.',
    'case.order.desc': 'Мост для статических сайтов: Webhook → Google Sheets + TG уведомления.',
    'case.jivo.desc': 'Интеграция JivoSite: проброс диалогов в Google Sheets и Telegram.',
    'case.email.desc': 'Авто-обработка писем (IMAP): очистка от мусора и форматирование заявок в CRM.',
    'case.rss.desc': 'Система мониторинга RSS-каналов с авто-трансляцией в Telegram.',
    'case.dialog.desc': 'Telegram‑ассистент с памятью: логирует диалоги и отвечает через Gemini.',
    'case.brands.desc': 'Масштабирование Parker, Edding и DYMO. Построение сквозной аналитики.',
    'case.legacy.desc': 'Перевод систем с 1С на современные стеки. Автоматизация отчетности.',
    'tl.1.date': '2023 — Наст. время',
    'tl.1.title': 'AI Marketing & Automation Lead / IT Project Manager',
    'tl.1.desc': 'Руководство кросс-функциональной командой. Разработка AI-агентов и ETL-пайплайнов: API → PostgreSQL → Looker Studio.',
    'tl.1.b1': 'Автоматизация рутины 70%',
    'tl.1.b2': 'SEO +40%',
    'tl.2.date': '2014 — 2022',
    'tl.2.title': 'Lead Product Manager / Digital Strategist',
    'tl.2.desc': 'Масштабирование 20+ брендов (Edding, DYMO, Parker). Вывод на маркетплейсы, SEO-доминирование в нишах и автоматизация воронки.',
    'tl.2.b1': '+25–30% ежегодный рост',
    'tl.2.b2': 'CPA −20%',
    'tl.3.date': '2013 — 2014',
    'tl.3.title': 'E-commerce Project Manager / PPC Lead',
    'tl.3.desc': 'Запуск интернет-магазина на 1С-Битрикс с нуля. Автоматизация воронки продаж и интеграция с агрегаторами.',
    'tl.3.b1': '+20% заказов',
    'tl.3.b2': 'CPL -25%',
    'tl.4.date': '2009 — 2013',
    'tl.4.title': 'Руководитель интернет-магазина (E-commerce)',
    'tl.4.desc': 'Управление командой и операционкой. Оптимизация логистики (сокращение цикла на 30%).',
    'tl.4.b1': '+30% заказов',
    'tl.4.b2': 'CPL -20%',
    'tl.5.date': '2008 — 2009',
    'tl.5.title': 'Программист 1С (Системная интеграция)',
    'tl.5.desc': 'Внедрение «1С:Предприятие» для строительной отрасли. Миграция данных, доработка конфигураций под ТЗ и автоматизация отчетности для ФНС.',
    'section.eco': 'AI Ecosystem & Media',
    'eco.shedevrum.p': 'Telegram канал AI-блогера',
    'eco.nanobanana.p': 'AI Lab & Community',
    'eco.youtube.p': 'AI Music & Video Clips',
    'eco.suno.p': 'Generative Audio Tracks',
    'contact.title': 'Давайте создадим что-то крутое',
    'contact.sub': 'Ищете архитектора для автоматизации бизнеса или внедрения AI? Я на связи.',
    'contact.tg': 'Написать в Telegram',
    'footer.copy': '© 2026 Сергей Восканян • AI Automation Architect & Technical PM',
    'lang.label': 'Выбор языка'
  },
  en: {
    'meta.title': 'Sergey Voskanyan | AI Automation Architect & Technical PM',
    'hire.status': 'Open for Hire • Remote • Senior Expert',
    'hero.name.first': 'Sergey',
    'hero.name.last': 'Voskanyan',
    'hero.role': 'AI Automation Architect & Technical PM',
    'hero.bio': 'Architect of intelligent systems: from complex ETL pipelines to AI agents. I combine engineering with 15 years in marketing to turn chaos into autonomous business tools.',
    'hero.hint': 'Parsing • AI scoring • cover letter • auto-apply | Swagger • Docker • up to 70% less routine',
    'hero.scroll': 'View cases',
    'section.career': 'Career path & foundation',
    'exp.timeline': 'Experience timeline',
    'exp.education': 'Education & certifications',
    'edu.universities': 'Universities',
    'edu.certs': 'Certifications & courses',
    'edu.mgupp.name': 'MGUPP (Moscow State University of Food Production)',
    'edu.mgtu.name': 'Bauman Moscow State Technical University',
    'edu.mai.name': 'MAI (Moscow Aviation Institute)',
    'edu.mgupp': 'Cybernetics — Master\'s degree',
    'edu.mgtu': 'Professional development',
    'edu.mai': 'Professional development',
    'cert.yandex': 'Yandex Direct PRO (2025)',
    'cert.google': 'Google Ads Expert (2025)',
    'cert.n8n': 'n8n Expert',
    'cert.bitrix': 'Bitrix24 Specialist',
    'cert.swiftbook': 'SwiftBook (iOS Dev)',
    'cert.1c': '1C:Enterprise 8.1',
    'exp.github': 'GitHub Activity',
    'section.cases': 'Cases & projects',
    'tab.all': 'All',
    'tab.ai': 'AI & Automation',
    'tab.marketing': 'Marketing & SEO',
    'label.featured': 'Featured',
    'status.live': 'Live',
    'status.archived': 'Archived',
    'status.private': 'Private',
    'btn.demo': 'VIEW DEMO',
    'btn.repo': 'VIEW REPO',
    'btn.case': 'VIEW CASE',
    'status.workflow_repo': 'workflow in repo',
    'status.code_on_request': 'code on request',
    'cat.seo_ai': 'SEO AI',
    'cat.fullstack_ai': 'Full-Stack AI',
    'cat.ai_automation': 'AI Automation',
    'cat.nocode': 'No-Code Solution',
    'cat.content_analysis': 'Content Analysis',
    'cat.lead_capture': 'Lead Capture',
    'cat.chat_automation': 'Chat Automation',
    'cat.email_automation': 'Email Automation',
    'cat.content_distribution': 'Content Distribution',
    'cat.conversational_ai': 'Conversational AI',
    'cat.growth_marketing': 'Growth Marketing',
    'cat.engineering': 'Engineering',
    'case.seo_tool.desc': 'Express website audit service. Analyzes tags, structure, and images, calculates SEO Score, and delivers recommendations.',
    'case.job_hunter.desc': 'Multi-agent platform for automated job search. Parses sources, filters via LLM scoring, parses resumes into DB, and generates cover letters.',
    'case.shedevrum.desc': 'Agent runs Shedevrum and Telegram channels via Alice AI. Finds trends, regenerates prompts, and publishes content. Managed via Telegram bot.',
    'case.seo_agent.desc': 'AI agent analyzes GSC and Yandex Webmaster data. Finds issues and writes recommendations.',
    'case.linkedin.desc': 'Mini solution for auto-exporting jobs: LinkedIn → Apify → Google Sheets. Keyword filtering.',
    'case.content_intel.desc': 'n8n template for deep site analysis: converts HTML to Markdown and builds a report via GPT-4.',
    'case.order.desc': 'Bridge for static sites: Webhook → Google Sheets + Telegram notifications.',
    'case.jivo.desc': 'JivoSite integration: forwards chats to Google Sheets and Telegram.',
    'case.email.desc': 'Automated email processing (IMAP): filters noise and formats leads for CRM.',
    'case.rss.desc': 'RSS monitoring with auto-broadcast to Telegram.',
    'case.dialog.desc': 'Telegram assistant with memory: logs dialogs and replies via Gemini.',
    'case.brands.desc': 'Scaling Parker, Edding, and DYMO. End-to-end analytics setup.',
    'case.legacy.desc': 'Migrating systems from 1C to modern stacks. Reporting automation.',
    'tl.1.date': '2023 — Present',
    'tl.1.title': 'AI Marketing & Automation Lead / IT Project Manager',
    'tl.1.desc': 'Leading a cross-functional team. Building AI agents and ETL pipelines: API → PostgreSQL → Looker Studio.',
    'tl.1.b1': '70% routine automation',
    'tl.1.b2': 'SEO +40%',
    'tl.2.date': '2014 — 2022',
    'tl.2.title': 'Lead Product Manager / Digital Strategist',
    'tl.2.desc': 'Scaled 20+ brands (Edding, DYMO, Parker). Marketplaces, SEO dominance, funnel automation.',
    'tl.2.b1': '+25–30% YoY growth',
    'tl.2.b2': 'CPA −20%',
    'tl.3.date': '2013 — 2014',
    'tl.3.title': 'E-commerce Project Manager / PPC Lead',
    'tl.3.desc': 'Launched a 1C-Bitrix store from scratch. Sales funnel automation and aggregator integrations.',
    'tl.3.b1': '+20% orders',
    'tl.3.b2': 'CPL -25%',
    'tl.4.date': '2009 — 2013',
    'tl.4.title': 'E-commerce Store Lead',
    'tl.4.desc': 'Team and operations management. Logistics optimization (30% shorter cycle).',
    'tl.4.b1': '+30% orders',
    'tl.4.b2': 'CPL -20%',
    'tl.5.date': '2008 — 2009',
    'tl.5.title': '1C Developer (Systems integration)',
    'tl.5.desc': 'Deployed 1C:Enterprise for construction. Data migration, custom configs, tax reporting automation.',
    'section.eco': 'AI Ecosystem & Media',
    'eco.shedevrum.p': 'Telegram channel of AI blogger',
    'eco.nanobanana.p': 'AI Lab & Community',
    'eco.youtube.p': 'AI Music & Video Clips',
    'eco.suno.p': 'Generative Audio Tracks',
    'contact.title': 'Let\'s build something great',
    'contact.sub': 'Looking for an architect for business automation or AI adoption? I\'m available.',
    'contact.tg': 'Message on Telegram',
    'footer.copy': '© 2026 Sergey Voskanyan • AI Automation Architect & Technical PM',
    'lang.label': 'Language'
  },
};

const LOCALE_MAP = { ru: 'ru-RU', en: 'en-US' };

const BADGE_STYLES = {
  demo: '000000?style=for-the-badge&logo=vercel&logoColor=white',
  repo: '181717?style=for-the-badge&logo=github',
  case: 'FF4154?style=for-the-badge&logo=canva'
};

function shieldBadgeUrl(kind, label) {
  const style = BADGE_STYLES[kind];
  if (!style) return '';
  const slug = encodeURIComponent(String(label).trim().replace(/\s+/g, '_'));
  return `https://img.shields.io/badge/${slug}-${style}`;
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.ru;
  document.documentElement.lang = lang === 'en' ? 'en' : 'ru';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  if (dict['meta.title']) document.title = dict['meta.title'];

  document.querySelectorAll('[data-i18n-badge]').forEach((img) => {
    const kind = img.getAttribute('data-i18n-badge');
    const key = `btn.${kind}`;
    if (dict[key] !== undefined) {
      img.src = shieldBadgeUrl(kind, dict[key]);
      img.alt = dict[key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
    btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
  });

  window.dispatchEvent(new CustomEvent('langchange', { detail: { lang, locale: LOCALE_MAP[lang] || LOCALE_MAP.ru } }));
}

function initI18n() {
  let saved = localStorage.getItem('lang');
  if (saved === 'hy' || !translations[saved]) {
    saved = 'ru';
    localStorage.setItem('lang', saved);
  }
  applyLanguage(saved);

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = btn.dataset.lang;
      localStorage.setItem('lang', next);
      applyLanguage(next);
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
