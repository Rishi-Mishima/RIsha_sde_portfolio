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
    'I am a full-stack Java-focused Software Engineer building backend systems, AI agents and RAG applications, with hands-on experience in database internals and system design.',
  background:
    'With a background in Biomedical Engineering, I also bring experience in biosignal processing, embedded systems, and medical device development, including Arduino/MATLAB-based prototyping, risk analysis, verification and validation, along with familiarity with medical device quality and risk-management frameworks such as ISO 13485 and ISO 14971.',

  commandLines: [
    '$ whoami',
    'software-engineer --focus java-backend, ai-agents, rag and more',
    '$ education',
    '🇳🇱 The University of Leiden, Master of Science',
    '🇦🇺 The University of Sydney, Bachelor of Biomedical Engineering (Honours)',
    '🇦🇺 The University of Sydney, Bachelor of Arts',
    '$ priorities',
    'reliability && team-cooperation && measurable-outcomes',
  ],
  labels: [
    'AI Agents',
    'Java',
    'RAG',
    'Vue / React',
    'Backend Engineering',
    'Product Mindset',
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
    category: 'AI Engineering',
    items: [
      'AI Agents', 'RAG', 'LLM Tool Calling', 'ReAct', 'Plan-and-Execute', 'Vector Search',
    ],
  },
  {
    category: 'Backend',
    items: [
      'Java',
      'Spring Boot',
      'Python',
      'REST API Design',
      'MySQL',
      'Redis',
    ],
  },
  {
    category: 'Frontend',
    items: ['React', 'VUE', 'Component design', 'State management', 'Performance optimisation'],
  },
  {
    category: 'Ways of Working',
    items: ['System design', 'Technical writing', 'Cross-functional delivery', 'Mentoring'],
  },
]

export const projects = [
  {
    name: 'Multi-Agent Collaborative Terminal Development Assistant',
    label: '[p01]',
    repoUrl: '[https://github.com/Rishi-Mishima/java-cli](https://github.com/Rishi-Mishima/java-cli)',
    tagline: 'A Java-based command-line AI Agent runtime with ReAct tool calling, multi-agent collaboration, memory management, and codebase RAG',
    impact:
      'Built a terminal-first AI Agent runtime for local development workflows, enabling natural language-driven task planning, code retrieval, file operations, and command execution',
    architecture:
      'Designed a modular Agent runtime integrating ReAct execution, Plan-and-Execute task decomposition, ToolRegistry-based tool orchestration, MCP tool extension, layered memory, and SQLite-backed code retrieval.',
    stack: [
      'Java 17',
      'Maven',
      'Jackson',
      'OkHttp',
      'JLine',
      'SQLite JDBC',
      'JavaParser',
      'Jieba',
      'Ollama Embedding',
      'MCP',
    ],
    metrics: [
      'Supports multi-round LLM tool calling with observation feedback',
      'Supports concurrent batch execution for independent DAG tasks',
      'Supports hybrid semantic and keyword-based code retrieval',
    ],
    highlights: [
      'Implemented the core ReAct Agent loop with LLM function calling, tool call parsing, multi-round observation feedback, and final response generation',
      'Built a Plan-and-Execute and multi-agent workflow where Planner generates task plans, Workers execute subtasks, and Reviewer validates results with retry support',
      'Designed a DAG-based task dependency model with topology-driven scheduling and concurrent batch execution for independent tasks',
      'Implemented layered memory with short-term conversation memory, long-term factual memory, summary memory, tool result records, and local JSON persistence',
      'Encapsulated codebase RAG as a search_code tool using AST-based code chunking, relationship extraction, Ollama embeddings, and SQLite persistence',
    ],
  },
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
    name: 'Java-Based Mini Database Engine',
    label: '[p03]',
    repoUrl: 'https://github.com/Rishi-Mishima/java-miniDB',
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
