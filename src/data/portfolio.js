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
    stack: ['RAG', 'Java', 'SpringBoot', 'Python', 'LangChain', 'Elasticsearch', 'Redis', 'RabbitMQ', 'MongoDB'],
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
    name: 'Java-Based Mini Database Engine',
    label: '[p03]',
    repoUrl: 'https://github.com/Rishi-Mishima/javabased-minidb',
    tagline: 'A lightweight relational database engine implemented in Java, supporting basic SQL operations, indexing, and transaction management.',
    impact:
      'Built a functional mini database engine demonstrating core database concepts and operations, showcasing understanding of data storage, indexing, and query processing.',
    architecture:
      'Implemented MVCC and Two-Phase Locking (2PL) to ensure serializable isolation under concurrent workloads, demonstrating strong consistency guarantees in a multi-threaded environment.',
    stack: ['Java', 'MVCC', 'B+ Tree', 'Java NIO', 'Socket programming'],
    metrics: ['functional database engine', '5ms lookup latency', 'query execution over TCP sockets'],
    highlights: [
      'Designed WAL-based crash recovery mechanism ensuring ACID compliance and data durability',
      'Developed B+ Tree indexing structure enabling efficient range queries and reducing lookup latency to ˜5ms for 1M records',
      'Designed client-server architecture over TCP sockets to support remote SQL-like query execution',
    ],
  },
]

export const experience = [
  {
    period: '2021.06 -> 2022.06',
    role: 'University Research Assistant',
    company: 'University of Sydney',
    summary:
    'Developed a Python-based data analysis pipeline for MRI contrast agent research using Pandas, NumPy, and Matplotlib, enabling efficient processing and visualisation of large datasets.',
    achievements: [
      'Extracted and analyzed nanoparticle relaxivity data from biomedical literature, identifying key factors influencing MRI performance',
      'Automated data extraction and analysis processes, reducing manual effort by 50% and accelerating research insights',
    ],
  },
  {
    period: '2019.06 -> 2019.09',
    role: 'Student Biomedical Engineer Intern',
    company: 'St. John\'s Hospital Sydney',
    summary:
      'medical device verfication and validation, including software testing, documentation, and regulatory compliance support for medical devices used in clinical settings.',
    achievements: [
      'Assisted in the verification and validation of medical devices, ensuring compliance with regulatory requirements.',
      'Participated in the documentation and reporting of medical device testing results.',
    ],
  },

]

export const contacts = [
  {
    label: 'Email',
    value: 'janicerx10@gmail.com',
    href: 'mailto:janicerx10@gmail.com',
    detail: 'Open for opportunities or project discussions.',
  },
  {
    label: 'GitHub',
    value: 'github.com/rishi-mishima',
    href: 'https://github.com/Rishi-Mishima',
    detail: 'Code samples, experiments, and shipped side projects.',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/risha',
    href: 'https://linkedin.com/',
    detail: 'Career history and professional network.',
  },
]
