export const personalInfo = {
  name: "Asem Yousry",
  title: "Backend Developer",
  location: "Ain-Shams, Cairo, Egypt",
  email: "asem23yousry@gmail.com",
  phone: "+201029111171",
  linkedin: "https://linkedin.com/in/placeholder", // Configurable
  github: "https://github.com/placeholder",       // Configurable
  heroStatement: "Building backend applications, RESTful APIs, and reliable server-side systems with Node.js and modern backend technologies.",
  about: `Backend Developer with 2 years of experience in developing web applications using Node.js, Express.js, and NestJS. Experienced in building RESTful APIs and working with MongoDB, PostgreSQL, MySQL, Redis, Docker, AWS, and Stripe. Proven ability in Agile environments and cross-functional collaboration.`,
  cvUrl: "/Asem-Yousry-CV.pdf"
};

export const coreTechnologies = [
  "Node.js", "Express.js", "NestJS", "MongoDB", "PostgreSQL",
  "Redis", "RabbitMQ", "Docker", "AWS", "Stripe"
];

export const engineeringFocus = [
  {
    title: "REST APIs",
    description: "Designing and developing backend applications and RESTful APIs."
  },
  {
    title: "Data & Databases",
    description: "Working with MongoDB, PostgreSQL, and MySQL."
  },
  {
    title: "Caching & Async Processing",
    description: "Working with Redis, BullMQ, and RabbitMQ."
  },
  {
    title: "Authentication",
    description: "JWT authentication and role-based access control."
  },
  {
    title: "Payments & Integrations",
    description: "Stripe payment processing and subscription billing."
  },
  {
    title: "Infrastructure",
    description: "Docker, AWS, Nginx, and CI/CD."
  }
];

export const featuredProjects = [
  {
    id: "tasawak",
    name: "Tasawak",
    role: "Backend Developer",
    type: "Full-featured E-commerce Platform",
    timeline: "Sep 2025 – Present",
    context: "Freelance",
    description: "Tasawak is a full-featured e-commerce platform built with Node.js and Express.js.",
    overview: ["Product catalog", "Product variations", "Cart management", "Order processing", "Coupon system", "Subscription plans"],
    capabilities: [
      { category: "AUTHENTICATION", details: ["JWT", "Role-Based Access Control"] },
      { category: "PAYMENTS", details: ["Stripe", "Payment Processing", "Subscriptions", "Webhooks"] },
      { category: "DATA", details: ["MongoDB", "Mongoose"] },
      { category: "CACHING", details: ["Redis", "TTL-based expiration"] },
      { category: "MESSAGING", details: ["RabbitMQ", "Asynchronous Processing"] },
      { category: "INFRASTRUCTURE", details: ["Docker", "AWS EC2", "AWS S3", "Nginx", "CI/CD", "GitHub Actions"] },
      { category: "OTHER", details: ["Transactional email notifications with Nodemailer"] }
    ],
    isCaseStudy: true
  },
  {
    id: "machine-genius",
    name: "Machine Genius",
    role: "Backend Developer",
    location: "Cairo",
    timeline: "Jun 2024 – Jul 2025",
    description: "Machine Genius is a company management system handling complete employee lifecycle processes.",
    businessCapabilities: ["KPI tracking", "Salary calculations", "Deductions", "Bonuses", "Holiday management", "Attendance tracking"],
    technicalCapabilities: ["Real-time dashboards", "WebSocket", "Live HR notifications", "PostgreSQL", "Automated email notifications", "Payroll workflows", "HR workflows"]
  },
  {
    id: "street-suite",
    name: "Street Suite",
    type: "Trading Platform",
    context: "Developed as part of my work at Machine Genius.",
    technologies: ["Python", "Django", "Django REST Framework", "Celery"],
    capabilities: ["RESTful APIs", "Ticker alerts", "Asynchronous background processing"]
  },
  {
    id: "wagba",
    name: "Wagba",
    type: "Graduation Project",
    description: "A homemade food e-commerce platform connecting users with trusted home-based chefs offering nutritious and hygienic meals.",
    features: ["Delivery location live tracking using Google Maps APIs"]
  }
];

export const experience = [
  {
    id: "exp-tasawak",
    title: "Backend Developer",
    company: "Tasawak",
    type: "Freelance",
    timeline: "Sep 2025 – Present",
    responsibilities: [
      "Engineered a full-featured e-commerce platform using Node.js and Express.js.",
      "Built product catalog functionality and worked with product variations.",
      "Implemented cart management, order processing, coupon functionality, and subscription plans.",
      "Integrated Stripe for payment processing, subscription billing, and webhook handling.",
      "Used Redis for caching and TTL-based expiration.",
      "Used MongoDB through Mongoose.",
      "Used RabbitMQ for message brokering and asynchronous/background processing.",
      "Implemented JWT authentication and role-based access control.",
      "Implemented transactional email notifications with Nodemailer.",
      "Containerized the application using Docker.",
      "Used AWS EC2 and AWS S3 for static file storage.",
      "Used Nginx as a reverse proxy.",
      "Configured GitHub Actions CI/CD pipelines.",
      "Used Git for version control."
    ]
  },
  {
    id: "exp-mg",
    title: "Backend Developer",
    company: "Machine Genius",
    location: "Cairo",
    timeline: "Jun 2024 – Jul 2025",
    responsibilities: [
      "Developed Machine Genius, a company management system working on employee lifecycle processes.",
      "Implemented KPI tracking, salary calculations, deductions, bonuses, holiday management, and attendance tracking.",
      "Built real-time dashboards and implemented live HR notifications using WebSocket.",
      "Integrated PostgreSQL.",
      "Developed automated email notifications.",
      "Worked on payroll events and HR workflows.",
      "Developed Street Suite using Python, Django, and Django REST Framework.",
      "Implemented RESTful APIs and ticker alerts.",
      "Used Celery for asynchronous background processing."
    ]
  }
];

export const skills = [
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
    items: ["AWS", "EC2", "S3", "Docker", "CI/CD", "Nginx", "Git", "GitHub", "Kubernetes"]
  },
  {
    category: "Problem Solving & Architecture",
    items: ["Data Structures & Algorithms", "System Design", "SOLID Principles", "Design Patterns"]
  }
];

export const education = [
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
