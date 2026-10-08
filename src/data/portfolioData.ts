export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  heroStatement: string;
  about: string;
  cvUrl: string;
}

export interface WhatIBuildCategory {
  title: string;
  description: string;
  technologies: string[];
}

export interface CaseStudyCapability {
  category: string;
  details: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  role?: string;
  type: string;
  timeline?: string;
  location?: string;
  context?: string;
  description: string;
  technologies?: string[];
  overview?: string[];
  capabilities?: CaseStudyCapability[];
  businessCapabilities?: string[];
  technicalCapabilities?: string[];
  features?: string[];
  isCaseStudy?: boolean;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  type?: string;
  location?: string;
  timeline: string;
  responsibilities: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface EducationItem {
  institution: string;
  faculty: string;
  timeline: string;
  major: string;
  graduationProject?: {
    name: string;
    description: string;
  };
}

export const personalInfo: PersonalInfo = {
  name: "Asem Yousry",
  title: "Backend Developer",
  location: "Ain-Shams, Cairo, Egypt",
  email: "asem23yousry@gmail.com",
  phone: "+201029111171",
  linkedin: "https://linkedin.com/in/asem-yousry", // Configurable
  github: "https://github.com/Asem7Yousry",        // Configurable
  heroStatement: "Building backend applications, RESTful APIs, and reliable server-side systems with Node.js and modern backend technologies.",
  about: "Backend Developer with 2 years of experience developing web applications using Node.js, Express.js, and NestJS. Experienced in designing RESTful APIs and working across relational and NoSQL databases including MongoDB, PostgreSQL, and MySQL. Skilled in caching, asynchronous job processing with Redis and RabbitMQ, containerization with Docker, AWS deployment, and secure payment processing with Stripe. Collaborates effectively within Agile teams to translate business logic into dependable server-side architecture.",
  cvUrl: `${import.meta.env.BASE_URL}Asem-Yousry-CV.pdf`
};

export const coreTechnologies: string[] = [
  "Node.js",
  "Express.js",
  "NestJS",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "RabbitMQ",
  "Docker",
  "AWS",
  "Stripe"
];

export const whatIBuild: WhatIBuildCategory[] = [
  {
    title: "REST APIs",
    description: "Designing and developing robust backend applications and production-ready RESTful APIs.",
    technologies: ["Node.js", "Express.js", "NestJS"]
  },
  {
    title: "Data & Databases",
    description: "Architecting schemas, relationships, and queries across relational and document databases.",
    technologies: ["MongoDB", "PostgreSQL", "MySQL"]
  },
  {
    title: "Caching & Async Processing",
    description: "Implementing in-memory caching layers and asynchronous background processing pipelines.",
    technologies: ["Redis", "BullMQ", "RabbitMQ"]
  },
  {
    title: "Authentication",
    description: "Securing systems with stateless token authentication and granular role-based authorization.",
    technologies: ["JWT", "RBAC", "Bcrypt"]
  },
  {
    title: "Payments & Integrations",
    description: "Processing transactions, recurring subscription billing, and verifiable webhook synchronization.",
    technologies: ["Stripe", "Webhooks", "Billing"]
  },
  {
    title: "Infrastructure",
    description: "Containerizing services, configuring reverse proxies, and setting up automated CI/CD pipelines.",
    technologies: ["Docker", "AWS", "Nginx", "CI/CD"]
  }
];

export const engineeringFocusList: string[] = [
  "API Design",
  "Database Design",
  "Caching",
  "Asynchronous Processing",
  "Message Queues",
  "Authentication",
  "Authorization",
  "WebSockets",
  "Webhooks",
  "Payment Integration",
  "Containerization",
  "CI/CD",
  "System Design",
  "SOLID Principles",
  "Design Patterns"
];

export const tasawakProject: ProjectItem = {
  id: "tasawak",
  name: "Tasawak",
  role: "Backend Developer",
  type: "Full-featured E-commerce Platform",
  timeline: "Sep 2025 – Present",
  context: "Freelance",
  description: "Tasawak is a full-featured e-commerce platform built with Node.js and Express.js, delivering complete commerce capabilities from catalogs to order fulfillment and recurring subscriptions.",
  overview: [
    "Product catalog",
    "Product variations",
    "Cart management",
    "Order processing",
    "Coupon system",
    "Subscription plans"
  ],
  technologies: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Redis",
    "RabbitMQ",
    "Stripe",
    "Docker",
    "AWS",
    "Nginx",
    "GitHub Actions",
    "Git"
  ],
  capabilities: [
    {
      category: "AUTHENTICATION",
      details: ["JWT", "Role-Based Access Control"]
    },
    {
      category: "PAYMENTS",
      details: ["Stripe", "Payment Processing", "Subscriptions", "Webhooks"]
    },
    {
      category: "DATA",
      details: ["MongoDB", "Mongoose"]
    },
    {
      category: "CACHING",
      details: ["Redis", "TTL-based expiration"]
    },
    {
      category: "MESSAGING",
      details: ["RabbitMQ", "Asynchronous Processing"]
    },
    {
      category: "INFRASTRUCTURE",
      details: ["Docker", "AWS EC2", "AWS S3", "Nginx"]
    },
    {
      category: "CI/CD",
      details: ["GitHub Actions"]
    },
    {
      category: "NOTIFICATIONS",
      details: ["Transactional email notifications using Nodemailer"]
    }
  ],
  isCaseStudy: true
};

export const standardProjects: ProjectItem[] = [
  {
    id: "machine-genius",
    name: "Machine Genius",
    role: "Backend Developer",
    location: "Cairo",
    timeline: "Jun 2024 – Jul 2025",
    type: "Company Management System",
    description: "Machine Genius is a company management system handling complete employee lifecycle processes, automating enterprise HR workflows, live monitoring, and payroll calculations.",
    businessCapabilities: [
      "KPI tracking",
      "Salary calculations",
      "Deductions & bonuses",
      "Holiday management",
      "Attendance tracking"
    ],
    technicalCapabilities: [
      "Real-time dashboards",
      "WebSocket integration",
      "Live HR notifications",
      "PostgreSQL database",
      "Automated email notifications",
      "Payroll & HR workflows"
    ],
    technologies: ["PostgreSQL", "WebSocket", "Automated Email Workflows", "Node.js"]
  },
  {
    id: "street-suite",
    name: "Street Suite",
    role: "Backend Developer",
    type: "Trading Platform",
    context: "Developed as part of my work at Machine Genius.",
    description: "A focused trading platform engineered for asynchronous financial event processing, market ticker notifications, and high-throughput data delivery.",
    technologies: ["Python", "Django", "Django REST Framework", "Celery"],
    features: [
      "RESTful APIs",
      "Ticker alerts",
      "Asynchronous background processing via Celery"
    ]
  },
  {
    id: "wagba",
    name: "Wagba",
    type: "Graduation Project",
    description: "A homemade food e-commerce platform connecting users with trusted home-based chefs offering nutritious and hygienic meals.",
    technologies: ["Google Maps APIs"],
    features: [
      "Delivery location live tracking using Google Maps APIs",
      "Homemade chef meal ordering platform"
    ]
  }
];

export const experience: ExperienceItem[] = [
  {
    id: "exp-tasawak",
    title: "Backend Developer",
    company: "Tasawak",
    type: "Freelance",
    timeline: "Sep 2025 – Present",
    responsibilities: [
      "Engineered a full-featured e-commerce platform using Node.js and Express.js.",
      "Built product catalog functionality.",
      "Worked with product variations.",
      "Implemented cart management.",
      "Implemented order processing.",
      "Implemented coupon functionality.",
      "Implemented subscription plans.",
      "Integrated Stripe for payment processing and subscription billing.",
      "Used Redis for caching and TTL-based expiration.",
      "Used MongoDB through Mongoose.",
      "Used RabbitMQ for message brokering and asynchronous/background processing.",
      "Implemented JWT authentication.",
      "Implemented role-based access control.",
      "Implemented Stripe webhook handling.",
      "Implemented transactional email notifications with Nodemailer.",
      "Containerized the application using Docker.",
      "Used AWS EC2.",
      "Used AWS S3 for static file storage.",
      "Used Nginx as a reverse proxy.",
      "Configured GitHub Actions CI/CD pipelines.",
      "Used Git for version control."
    ]
  },
  {
    id: "exp-machine-genius",
    title: "Backend Developer",
    company: "Machine Genius",
    location: "Cairo",
    timeline: "Jun 2024 – Jul 2025",
    responsibilities: [
      "Developed Machine Genius, a company management system.",
      "Worked on employee lifecycle processes.",
      "Implemented KPI tracking.",
      "Implemented salary calculations.",
      "Worked with deductions and bonuses.",
      "Worked with holiday management.",
      "Worked with attendance tracking.",
      "Built real-time dashboards.",
      "Implemented live HR notifications using WebSocket.",
      "Integrated PostgreSQL.",
      "Developed automated email notifications.",
      "Worked on payroll events and HR workflows.",
      "Developed Street Suite using Python, Django, and Django REST Framework.",
      "Implemented RESTful APIs.",
      "Implemented ticker alerts.",
      "Used Celery for asynchronous background processing."
    ]
  }
];

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "NestJS"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL"]
  },
  {
    category: "APIs & Integration",
    items: ["REST API", "WebSocket", "Webhook"]
  },
  {
    category: "Caching & Queues",
    items: ["Redis", "BullMQ", "RabbitMQ"]
  },
  {
    category: "Payments",
    items: ["Stripe"]
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS",
      "EC2",
      "S3",
      "ECR",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Nginx",
      "Git",
      "GitHub"
    ]
  },
  {
    category: "Problem Solving & Architecture",
    items: [
      "Data Structures & Algorithms",
      "System Design",
      "SOLID Principles",
      "Design Patterns"
    ]
  }
];

export const education: EducationItem[] = [
  {
    institution: "Modern Academy",
    faculty: "Faculty of Software Engineering",
    timeline: "2018 – 2023",
    major: "Web Development",
    graduationProject: {
      name: "Wagba",
      description: "A homemade food e-commerce platform connecting users with trusted home-based chefs offering nutritious and hygienic meals. Google Maps APIs were used for delivery location live tracking."
    }
  }
];
