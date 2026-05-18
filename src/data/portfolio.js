export const siteMeta = {
  brand: 'risha.dev',
  location: 'The Hague, NL',
  role: 'Full-Stack Software Development Engineer',
  email: 'janicerx10@gmail.com',
}

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  eyebrow: 'currently on Search Year Visa / biomedical Engineering background ',
  title: 'Hi, I\'m Risha',
  intro:
    //'I design and ship full-stack software with a bias for clean interfaces, measurable outcomes, and infrastructure that does not become the team\'s next problem.',
    'I am a full-stack software engineer and have experience working with Java (Spring Boot), Python, and modern front-end frameworks (Vue/React). I have developed projects ranging from RAG-based AI systems to full-featured web platforms.',
  commandLines: [
    '$ whoami',
    'full-stack software-engineer --focus platform, product, frontend-architecture',
    '$ education',
    '🇳🇱 The University of Leiden, Master of Science',
    '🇦🇺 The University of Sydney, Bachelor of Biomedical Engineering (Honours)',
    '🇦🇺 The University of Sydney, Bachelor of Arts',
    '$ priorities',
    'reliability && team-cooperation && measurable-outcomes',
  ],
  labels: [
    'Python', 
    'Java',
    'VUE/React',
    //'typescript',
    'platform tooling',
    'observability',
  ],
  stats: [
    { label: 'primary mode', value: 'full-stack' },
    { label: 'languages', value: 'English, Chinese(Native), Japanese (N1)' },
    { label: 'hobbies', value: 'Piano(ABRSM8), Electric Guitar' },
  ],
}

export const about = {
  summary:
    'I am an active learner and always open to new technical challenges. Equipped with an engineering mindset and a background in biomedical engineering, I bring a unique perspective to software development, combining analytical problem-solving skills with a user-centric approach.',
  paragraphs: [
    'I optimize for software that keeps its shape after launch. That means clear ownership boundaries, useful abstractions, practical testing, and enough instrumentation to debug reality instead of arguing about it.',
    'Most of my strongest work has come from translating ambiguity into operating systems for a team: a frontend that scales cleanly, an API surface that stays predictable, or delivery workflows that make shipping feel routine instead of risky.',
  ],
}

export const skills = [
  {
    category: 'Frontend',
    items: ['React', 'VUE', 'Component design', 'State management', 'Performance optimisation'],
  },
  {
    category: 'Backend',
    items: ['Java', 'Python', 'API design', 'Event-driven services', 'Node.js'],
  },
  {
    category: 'Platform',
    items: ['AWS', 'Docker', 'CI/CD', 'Observability', 'Infrastructure debugging'],
  },
  {
    category: 'Ways of Working',
    items: ['System design', 'Technical writing', 'Cross-functional delivery', 'Mentoring'],
  },
]

export const projects = [
  {
    name: 'AI Healthcare Conversational Assistant ',
    label: '[p01]',
    repoUrl: 'https://github.com/Rishi-Mishima/RAG-smart-flowpai',
    tagline: 'A retrieval-augmented generation system that provides real-time, context-aware responses to healthcare professionals.',
    impact:
      'Built a production-grade RAG-based healthcare conversational system, enabling real-time semantic search over 5,000+ medical documents with <500 ms latency',
    architecture:
      'Designed end-to-end RAG pipeline covering ingestion, chunking, embedding, indexing, hybrid retrieval, and streaming response generation', 
    stack: ['Java', 'SpringBoot', 'Python', 'LangChain', 'Elasticsearch', 'Redis', 'RabbitMQ', 'MongoDB'],
    metrics: ['<500 ms latency>', '200+ concurrent users', '5,000+ medical documents'],
    highlights: [
      'Implemented hybrid retrieval (Elasticsearch BM25 + vector search), significantly improving semantic relevance and recall accuracy', 
      'Handled 200+ concurrent users via Redis caching and RabbitMQ-based asynchronous processing, reducing first-token latency by 70%'
    ],
  },
  {
    name: 'Developer Community Platform',
    label: '[p02]',
    repoUrl: 'https://github.com/Rishi-Mishima/developer-workflow-graph',
    tagline: 'A scalable developer community platform with high-concurrency caching, asynchronous messaging, and real-time ranking systems',
    impact:
      'Developed a scalable backend system supporting content publishing, user interactions, and real-time notifications',
    architecture:
      'Designed multi-level caching architecture (Caffeine + Redis, Cache Aside), improving hot-content API QPS by 25% and reducing latency by 40%.',
    stack: ['Java', 'SpringBoot', 'MyBatis', 'MySql', 'Redis', 'RabbitMQ', 'Caffeine', 'Elasticsearch'],
    metrics: ['25% improvement in hot-content API QPS', '40% reduction in latency', 'visible improvement in user engagement metrics'],
    highlights: [
      'Implemented Redis ZSet-based ranking system for high-concurrency activity tracking with strong consistency guarantees',
      'Built asynchronous event-driven pipelines using RabbitMQ, reducing request latency by 30% and improving system coupling',
      'Reduced redundant database access by introducing ThreadLocal-based user context caching, improving throughput under concurrent load',
    ],
  },
  {
    name: 'Pricing Intelligence Engine',
    label: '[p03]',
    repoUrl: 'https://github.com/Rishi-Mishima/pricing-intelligence-engine',
    tagline: 'Decision support platform combining market signals with internal experiments.',
    impact:
      'Improved pricing confidence for product leadership by combining external benchmarks, demand trends, and experiment output into a consistent review workflow.',
    architecture:
      'Used scheduled collectors, asynchronous workers, analyst review tools, and policy-aware APIs to keep decision inputs fresh without manual spreadsheet work.',
    stack: ['React', 'Python', 'FastAPI', 'Postgres', 'Celery', 'AWS'],
    metrics: ['$1.2M modeled uplift', '4 regions', '12 automated data feeds'],
    highlights: [
      'Built review tooling that separated system recommendations from human approval.',
      'Created ingestion checks to flag stale or contradictory competitive data.',
      'Balanced scheduled batch collection with on-demand analysis endpoints for planners.',
    ],
  },
]

export const experience = [
  {
    period: '2023 -> Present',
    role: 'Software Development Engineer',
    company: 'Current Company',
    summary:
      'Owning internal platform and product initiatives with a focus on reliability, frontend system quality, and delivery workflows that scale beyond a single team.',
    achievements: [
      'Led cross-functional delivery on tooling used by product, platform, and operations teams.',
      'Improved deployment confidence through stronger observability and release feedback loops.',
    ],
  },
  {
    period: '2021 -> 2023',
    role: 'Full Stack Engineer',
    company: 'Previous Team',
    summary:
      'Delivered customer-facing features across frontend applications, APIs, and cloud infrastructure while tightening the engineering handoff from design to production.',
    achievements: [
      'Owned greenfield features end-to-end from discovery through rollout and support.',
      'Reduced repeated incidents by documenting patterns and turning them into reusable defaults.',
    ],
  },
  {
    period: '2019 -> 2021',
    role: 'Engineering Intern -> Junior Engineer',
    company: 'Earlier Experience',
    summary:
      'Built a foundation in debugging, testing, and product delivery by contributing to production systems under guidance from senior engineers.',
    achievements: [
      'Shipped targeted improvements to internal tools and customer workflows.',
      'Developed strong habits around code review, instrumentation, and incremental delivery.',
    ],
  },
]

export const contacts = [
  {
    label: 'Email',
    value: 'risha@example.com',
    href: 'mailto:risha@example.com',
    detail: 'Best for hiring or project discussions.',
  },
  {
    label: 'GitHub',
    value: 'github.com/risha',
    href: 'https://github.com/',
    detail: 'Code samples, experiments, and shipped side projects.',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/risha',
    href: 'https://linkedin.com/',
    detail: 'Career history and professional network.',
  },
]
