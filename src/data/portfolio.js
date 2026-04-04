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
  title: 'Hi, my name is Risha, a passionate full-stack software engineer.',
  intro:
    //'I design and ship full-stack software with a bias for clean interfaces, measurable outcomes, and infrastructure that does not become the team\'s next problem.',
    'I have experience across the stack, working with Java (Spring Boot), Python, and modern front-end frameworks (Vue/React), and have developed projects ranging from RAG-based AI systems to full-featured web platforms',
  commandLines: [
    '$ whoami',
    'full-stack software-engineer --focus platform, product, frontend-architecture',
    '$ education',
    '🇳🇱 The University of Leiden, Master of Science',
    '🇦🇺 The University of Sydney, Bachelor of Biomedical Engineering (Honours) and Bachelor of Arts',
    '$ priorities',
    'reliability && delivery-speed && maintainable-systems',
  ],
  labels: [
    'java',
    'react',
    //'typescript',
    'distributed systems',
    'platform tooling',
    'observability',
  ],
  stats: [
    { label: 'primary mode', value: 'full-stack' },
    { label: 'languages', value: 'English, Chinese, Japanese (N1)' },
    { label: 'languages', value: 'English, Chinese, Japanese (N1)' },
  ],
}

export const about = {
  summary:
    'My work usually sits at the seam between product demands and systems constraints. I enjoy shaping interfaces, tightening backend contracts, and reducing the friction that slows good teams down.',
  paragraphs: [
    'I optimize for software that keeps its shape after launch. That means clear ownership boundaries, useful abstractions, practical testing, and enough instrumentation to debug reality instead of arguing about it.',
    'Most of my strongest work has come from translating ambiguity into operating systems for a team: a frontend that scales cleanly, an API surface that stays predictable, or delivery workflows that make shipping feel routine instead of risky.',
  ],
  principles: [
    'Prefer explicit contracts over tribal knowledge.',
    'Use metrics to justify architecture, not decorate it.',
    'Keep UX fast, calm, and readable before making it clever.',
  ],
}

export const skills = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Vite', 'Design systems', 'Performance tuning'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'API design', 'Event-driven services', 'PostgreSQL'],
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
    name: 'Realtime Incident Command',
    label: '[p01]',
    tagline: 'Internal incident operations surface for platform and reliability teams.',
    impact:
      'Cut mean time to detect by 42% by unifying telemetry, alert routing, and live response context into one operational view.',
    architecture:
      'Built as an event-driven system with queue-backed ingestion, typed service contracts, websocket updates, and an auditable incident timeline for every responder action.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Kafka', 'OpenTelemetry'],
    metrics: ['42% faster detection', '99.95% uptime', '7 teams onboarded'],
    highlights: [
      'Designed the dashboard information hierarchy for active incidents and escalation paths.',
      'Implemented ingestion services that normalized alert payloads before fan-out.',
      'Added responder-focused audit logs so postmortems could trace system and human actions together.',
    ],
  },
  {
    name: 'Developer Workflow Graph',
    label: '[p02]',
    tagline: 'Pipeline analysis tooling for CI efficiency and release reliability.',
    impact:
      'Reduced CI waste and flaky deployment loops by exposing dependency bottlenecks, cache misses, and repeated failure paths across the delivery pipeline.',
    architecture:
      'Modeled build, test, and release execution as a queryable graph with incremental snapshots, commit-linked traces, and historical comparisons for hot paths.',
    stack: ['TypeScript', 'Vite', 'Go', 'ClickHouse', 'Docker', 'GitHub Actions'],
    metrics: ['31% faster pipelines', '18k jobs analyzed/day', '23% fewer reruns'],
    highlights: [
      'Defined the event schema linking git commits, jobs, and artifact state.',
      'Built a lightweight frontend optimized for dense operational data instead of marketing-style dashboards.',
      'Introduced cache-hit diagnostics that helped teams remove the most expensive invalidations first.',
    ],
  },
  {
    name: 'Pricing Intelligence Engine',
    label: '[p03]',
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
