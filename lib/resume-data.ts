export const personalInfo = {
  name: "Binal Shah",
  title: "Junior Data Analyst",
  subtitle: "Python, SQL & Data Analytics",
  location: "Melbourne, Victoria",
  contact: {
    email: "sbinal182@gmail.com",
    phone: "0403 892 199",
    linkedin: "linkedin.com/in/binalshah",
    github: "github.com/binal182",
    portfolio: null
  },
  summary: "Recent IT graduate with hands-on experience in Python, SQL, and database design. Built data pipelines, designed relational databases, and created analytics systems through academic and internship projects. Proven leadership through training 6+ team members and coordinating 200+ person events. Seeking Junior Data Analyst role to apply technical skills and grow toward Data Engineering.",
  elevatorPitch: "I'm a Junior Data Analyst who combines strong Python and SQL skills with proven leadership abilities. At AusBiz Consulting, I built an AI-powered data platform with dual vector databases and automated pipelines. I've trained teams, managed 200+ person events, and created production-quality systems. I'm eager to start my career in data analytics and grow toward data engineering and AI/ML roles.",
  careerObjective: "Junior Data Analyst to Data Engineer to ML/AI Engineer pathway",
  visaStatus: {
    current: "Student Visa (Subclass 500)",
    expiry: "November 28, 2025",
    workRights: "48 hours fortnightly"
  },
  availability: {
    currentStatus: "Part-time during study, full-time post-graduation",
    startDate: "Immediate",
    flexibleSchedule: true,
    rotatingRosters: true,
    eveningShifts: true
  },
  transport: {
    driversLicense: "Valid Victoria driver's license",
    hasCar: false,
    publicTransport: "Reliable public transport user"
  },
  salaryExpectations: {
    minimum: 65000,
    target: "65000-70000",
    currency: "AUD",
    negotiable: true
  }
}

export const technicalSkills = {
  programmingLanguages: ["Python", "JavaScript/TypeScript", "Java", "PHP"],
  dataAnalytics: ["Python (Pandas, NumPy)", "SQL (SQLite, PostgreSQL, MySQL)", "Excel", "Data processing"],
  databases: ["SQLite", "PostgreSQL", "MySQL", "ChromaDB", "Upstash", "Database design", "Query optimization"],
  webDevelopment: ["Next.js", "React", "Flask", "Tailwind CSS", "shadcn/ui"],
  tools: ["Git/GitHub", "VS Code", "GitHub Copilot", "Claude Sonnet", "Vercel", "Deputy"],
  specialized: ["RAG systems", "Vector databases", "Computer vision (face_recognition library)", "AI agent development"]
}

export const skills = {
  technical: [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", proficiency: "Advanced", context: "Pandas, NumPy, Flask, data analysis, AI/ML projects" },
        { name: "JavaScript/TypeScript", proficiency: "Advanced", context: "Next.js, React, modern web development" },
        { name: "Java", proficiency: "Intermediate", context: "Academic coursework" },
        { name: "PHP", proficiency: "Intermediate", context: "Web development" }
      ]
    },
    {
      category: "Data & Analytics",
      skills: [
        { name: "SQL", proficiency: "Advanced", context: "SQLite, PostgreSQL, MySQL, query optimization" },
        { name: "Pandas", proficiency: "Advanced", context: "Data manipulation and processing" },
        { name: "NumPy", proficiency: "Advanced", context: "Numerical computation" },
        { name: "Excel", proficiency: "Intermediate", context: "Data analysis and processing" }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "SQLite", proficiency: "Advanced", context: "Local database development" },
        { name: "PostgreSQL", proficiency: "Intermediate", context: "Production database systems" },
        { name: "MySQL", proficiency: "Intermediate", context: "Relational database design" },
        { name: "ChromaDB", proficiency: "Advanced", context: "Vector database for RAG applications" },
        { name: "Upstash", proficiency: "Intermediate", context: "Serverless vector database" },
        { name: "Database Design", proficiency: "Advanced", context: "Schema design, normalization, query optimization" }
      ]
    },
    {
      category: "Web Development",
      skills: [
        { name: "Next.js", proficiency: "Advanced", context: "App Router, React 19 integration" },
        { name: "React", proficiency: "Advanced", context: "Server Components, modern features" },
        { name: "Flask", proficiency: "Advanced", context: "Full-stack Python web applications" },
        { name: "Tailwind CSS", proficiency: "Advanced", context: "Responsive design" },
        { name: "shadcn/ui", proficiency: "Intermediate", context: "UI component library" }
      ]
    },
    {
      category: "Specialized",
      skills: [
        { name: "RAG systems", proficiency: "Advanced", context: "Production RAG implementation" },
        { name: "Vector databases", proficiency: "Advanced", context: "ChromaDB, Upstash" },
        { name: "Computer vision", proficiency: "Intermediate", context: "face_recognition library" },
        { name: "AI agent development", proficiency: "Intermediate", context: "MCP Protocol, AI integration" }
      ]
    },
    {
      category: "Tools",
      skills: [
        { name: "Git/GitHub", proficiency: "Advanced", context: "Version control" },
        { name: "VS Code", proficiency: "Advanced", context: "Primary development environment" },
        { name: "GitHub Copilot", proficiency: "Advanced", context: "AI-assisted development" },
        { name: "Claude Sonnet", proficiency: "Advanced", context: "Architecture decisions, debugging" },
        { name: "Vercel", proficiency: "Intermediate", context: "Deployment platform" },
        { name: "Deputy", proficiency: "Intermediate", context: "Workforce management" }
      ]
    }
  ],
  softSkills: [
    {
      skill: "Leadership & Team Management",
      proficiency: "Advanced",
      examples: [
        "Trained and mentored 6+ new hires",
        "Reduced onboarding time by 40%",
        "Coordinated 13-member volunteer teams",
        "Led event planning for 200+ participants"
      ]
    },
    {
      skill: "Technical Communication",
      proficiency: "Advanced",
      examples: [
        "Created technical documentation",
        "Trained teams on complex systems",
        "Presented to 200+ audiences"
      ]
    },
    {
      skill: "Problem-Solving & Innovation",
      proficiency: "Advanced",
      examples: [
        "Pioneered multi-AI development workflow",
        "Created automated testing frameworks",
        "Reduced onboarding time by 40%"
      ]
    }
  ]
}

export const workExperience = [
  {
    company: "AusBiz Consulting",
    position: "AI/Data Intern",
    duration: "Jul 2025 - Sep 2025",
    location: "Sydney",
    description: "Developed AI-powered Digital Twin platform using cutting-edge spec-driven development methodology combining GitHub Copilot, Claude Sonnet 4.0, and v0 for an integrated AI-assisted workflow.",
    achievements: [
      "Architected and deployed dual-vector database system (ChromaDB for local development + Upstash for production) handling vector embeddings with optimized retrieval performance",
      "Engineered automated data transformation pipeline converting unstructured resume text into 50+ searchable JSON chunks with semantic embeddings for intelligent querying",
      "Built production-grade RAG (Retrieval-Augmented Generation) system enabling natural language queries against professional profile data with context-aware responses",
      "Implemented continuous integration testing framework using custom Food RAG validation system to ensure 95%+ query accuracy",
      "Developed modern web application using Next.js 15 App Router, React 19 Server Components, and Vercel AI SDK for seamless AI integration",
      "Pioneered multi-AI tool development workflow: GitHub Copilot for code generation, Claude Sonnet 4.0 agent mode for architecture decisions, v0 for UI/UX rapid prototyping"
    ],
    technologies: [
      "Next.js 15",
      "React 19",
      "Python",
      "ChromaDB",
      "Upstash",
      "Claude Sonnet 4.0",
      "GitHub Copilot",
      "Vercel AI SDK",
      "MCP Protocol",
      "shadcn/ui",
      "Tailwind CSS"
    ],
    skillsDeveloped: [
      "RAG pipeline architecture",
      "Vector database implementation",
      "Data pipeline engineering",
      "AI-assisted development",
      "Automated testing frameworks"
    ],
    impact: "Created first-of-its-kind interactive resume technology demonstrating modern AI development practices and production-ready RAG implementation",
    keywords: [
      "AI",
      "RAG",
      "vector databases",
      "data pipeline",
      "production-ready"
    ],
    reference: {
      name: "Callum Bir",
      title: "Supervisor",
      company: "AusBiz Consulting",
      contact: "Available upon request"
    }
  },
  {
    company: "Abel Tasman Village Association Ltd",
    position: "Administrative Assistant",
    duration: "Mar 2024 - Jan 2025",
    location: "Sydney",
    description: "Managed front-desk operations and administrative support in aged care facility, ensuring efficient daily operations and high-quality resident care coordination.",
    achievements: [
      "Managed front-desk operations including reception, scheduling, and responding to daily inquiries",
      "Handled and maintained 5+ appointments weekly with accuracy using internal systems",
      "Assisted with documentation, filing, and record-keeping in compliance with data privacy standards",
      "Responded to resident and family inquiries via phone and email with professionalism and care",
      "Supported management and visiting professionals with scheduling and logistical coordination"
    ],
    technologies: [],
    skillsDeveloped: [
      "Administrative operations",
      "Data privacy compliance",
      "Scheduling coordination",
      "Customer service"
    ],
    impact: "Ensured efficient daily operations and high-quality resident care coordination",
    keywords: [
      "administrative",
      "front-desk",
      "scheduling",
      "data privacy"
    ],
    reference: null
  },
  {
    company: "Zeus Street Greek",
    position: "Assistant Manager",
    duration: "Dec 2022 - Dec 2025",
    location: "Sydney",
    description: "Supervised daily operations and staff management in high-volume food service environment, ensuring exceptional customer service and operational excellence.",
    achievements: [
      "Supervised 5-10 staff, ensuring smooth daily operations and consistent customer satisfaction",
      "Delivered excellent service during high-volume hours, handling $3,000+ daily transactions",
      "Managed staff timesheets and coordinated scheduling",
      "Upsold products and recommended add-ons to enhance customer experience",
      "Recognised by management for reliability, teamwork, and leadership during peak trading periods",
      "Supported visual merchandising and store presentation to maintain a clean, organized, and customer-friendly environment",
      "Experienced in unpacking stock deliveries, organizing back-of-house areas, and replenishing shelves"
    ],
    technologies: [],
    skillsDeveloped: [
      "Team supervision",
      "Staff management",
      "Customer service",
      "Operations coordination"
    ],
    impact: "Maintained exceptional customer service and operational excellence in high-volume environment",
    keywords: [
      "management",
      "supervision",
      "customer service",
      "team leadership"
    ],
    reference: {
      name: "Sailesh Upreti",
      title: "Manager",
      company: "Zeus Street Greek",
      contact: "0452 389 096"
    }
  }
]

export const extracurricularExperience = [
  {
    company: "Students for Liberty Australia",
    position: "Local Coordinator",
    duration: "Jan 2023 - May 2024",
    location: "Sydney",
    description: "Managed large-scale educational programs and volunteer operations across Sydney and Melbourne, coordinating with international leadership team.",
    achievements: [
      "Orchestrated logistics for 200+ participant workshops including venue coordination, speaker management, and technology setup",
      "Built and managed 13-member volunteer team across Sydney and Melbourne markets using regular team meetings, goal-setting frameworks, and performance recognition programs",
      "Achieved 85% engagement success rate measured through attendance tracking, participant feedback surveys, and program conversion to ongoing membership",
      "Managed hybrid event technology infrastructure seamlessly integrating Microsoft Teams, Zoom, and in-person components for accessible program delivery",
      "Coordinated budget approval and expense tracking for multiple concurrent programs, ensuring financial accountability and ROI documentation for leadership reporting",
      "Maintained consistent volunteer engagement through weekly Google Meet check-ins, social meetups, and professional development opportunities"
    ],
    technologies: [
      "Microsoft Teams",
      "Zoom",
      "Google Meet"
    ],
    skillsDeveloped: [
      "Event planning",
      "Volunteer coordination",
      "Budget management",
      "Hybrid event technology"
    ],
    impact: "Successfully scaled educational programs across two major metropolitan areas while maintaining high engagement and volunteer retention rates",
    keywords: [
      "event management",
      "volunteer coordination",
      "logistics",
      "leadership"
    ],
    reference: null
  }
]

export const projects = [
  {
    name: "My Digital Twin - AI-Powered Professional Platform",
    description: "Production-quality AI platform demonstrating modern RAG architecture, vector database optimization, and AI-assisted development workflows.",
    technologies: [
      "Next.js 15",
      "React 19",
      "Python",
      "ChromaDB",
      "Upstash",
      "Vector Embeddings",
      "Vercel AI SDK",
      "Claude Sonnet 4.0",
      "GitHub Copilot",
      "v0",
      "MCP Protocol",
      "shadcn/ui",
      "Tailwind CSS"
    ],
    role: "Lead Developer and AI Integration Specialist",
    duration: "Jul 2025 - Sep 2025",
    outcomes: [
      "Engineered sophisticated data transformation pipeline processing structured resume data into 50+ semantic chunks with metadata tagging",
      "Implemented dual-vector database architecture: ChromaDB for local development + Upstash serverless vector DB for production deployment",
      "Built RAG system using vector similarity search with cosine similarity matching, enabling natural language queries with contextually accurate responses",
      "Developed automated quality assurance framework using custom Food RAG testing system to validate retrieval accuracy across 20+ test query scenarios",
      "Created modern full-stack application leveraging Next.js 15 App Router, React 19 Server Components for optimal performance",
      "Pioneered integrated AI development workflow: GitHub Copilot for 60%+ code generation, Claude Sonnet 4.0 agent mode, v0 for rapid UI prototyping"
    ],
    technicalInnovation: "First implementation combining local + serverless vector databases for development-production parity in RAG applications",
    links: {
      github: "github.com/binal182/binal_digital-twin_py"
    }
  },
  {
    name: "Smart Attendance System - Computer Vision Capstone",
    description: "Comprehensive database-driven attendance analytics platform with computer vision integration, built entirely independently from system design to deployment.",
    technologies: [
      "Python 3.8+",
      "Flask",
      "SQLite",
      "face_recognition library",
      "Flask-SQLAlchemy",
      "NumPy",
      "Pillow",
      "Pandas",
      "Werkzeug",
      "Flask-CORS",
      "HTML/CSS"
    ],
    role: "Full-Stack Developer and System Architect",
    duration: "Academic Capstone Project",
    outcomes: [
      "Architected normalized relational database schema (SQLite) with 5+ interconnected tables following Third Normal Form (3NF)",
      "Designed three-tier role-based access control system with completely differentiated user experiences (Admin/Teacher/Student)",
      "Integrated computer vision pipeline using face_recognition library with 128-dimensional facial encoding, reducing manual entry time by 90%",
      "Implemented Flask-SQLAlchemy ORM for database abstraction enabling easy migration to PostgreSQL/MySQL",
      "Built secure authentication system with Werkzeug password hashing (PBKDF2 with salt) and Flask-CORS",
      "Created automated reporting engine generating downloadable CSV reports with Pandas",
      "Developed complex SQL query architecture utilizing JOINs, aggregations, and date-based filtering"
    ],
    databaseHighlights: [
      "Multi-table relational architecture with foreign key relationships",
      "Indexed columns for optimized query performance",
      "Normalized schema preventing data redundancy"
    ],
    scale: "System designed to handle 1000+ users, 50+ classes, and 10,000+ attendance records",
    links: {}
  }
]

export const education = [
  {
    institution: "Victoria University",
    degree: "Bachelor of Information Technology",
    field: "Information Technology",
    graduation: "September 2025",
    location: "Sydney",
    relevantCoursework: [
      "Web & Mobile Development",
      "Cloud Application Development",
      "Data Analytics for Cyber Security",
      "Big Data",
      "ICT Business Analytics",
      "Cyber Security Essentials (TCP/IP, DNS, DHCP)"
    ]
  }
]

export const leadershipAchievements = [
  {
    achievement: "Trained and mentored 6+ new hires with measurable improvement in retention",
    impact: "Reduced onboarding time by 40% through systematic training approach"
  },
  {
    achievement: "Coordinated 13-member volunteer teams across Sydney and Melbourne",
    impact: "Led event planning for 200+ student participants"
  },
  {
    achievement: "Created first-of-its-kind interactive resume technology using vector embeddings",
    impact: "Demonstrated production-quality RAG implementation"
  },
  {
    achievement: "Recognized by Zeus Street Greek leadership",
    impact: "Consistently high customer satisfaction and teamwork"
  }
]

export const references = [
  {
    name: "Callum Bir",
    title: "Supervisor",
    company: "AusBiz Consulting",
    relationship: "AI/Data Internship (Jul-Sep 2025)",
    contact: "Available upon request"
  },
  {
    name: "Sailesh Upreti",
    title: "Manager",
    company: "Zeus Street Greek",
    relationship: "Customer Experience & Training (Dec 2022-Present)",
    contact: "0452 389 096"
  }
]

export const skillsMetrics = {
  technical: [
    { name: "Python", category: "Programming", source: "University Coursework & Professional Projects", description: "Developed through capstone computer vision project using face_recognition, NumPy, Pandas libraries. Enhanced at AusBiz Consulting internship working on AI/data solutions." },
    { name: "SQL & Database Design", category: "Database", source: "Academic Projects & Real-world Application", description: "Mastered through Smart Attendance System capstone project - designed normalized relational database schema with 5+ interconnected tables following 3NF principles. Used SQLite, SQLAlchemy ORM." },
    { name: "TypeScript/JavaScript", category: "Programming", source: "Self-taught & Project Development", description: "Learned through building interactive resume platform with Next.js 15, React 19. Applied in full-stack development with modern frameworks and component architecture." },
    { name: "Next.js/React", category: "Frontend", source: "Independent Innovation Project", description: "Acquired while creating first-of-its-kind interactive resume technology. Built with Next.js 15, React 19, Server Components, and modern web standards." },
    { name: "AI/ML & Vector Databases", category: "AI", source: "Cutting-edge Innovation Work", description: "Developed through building RAG systems with ChromaDB, Upstash vector databases. Integrated AI agents, embeddings, and Claude Sonnet 4.0 for intelligent applications." },
    { name: "Computer Vision", category: "AI", source: "Academic Capstone Project", description: "Implemented face recognition system using face_recognition library with 128-dimensional facial encoding. Built complete image processing pipeline with NumPy and Pillow." }
  ],
  leadership: [
    { name: "Team Leadership", category: "Management", source: "Zeus Street Greek & Students for Liberty", description: "Developed leading 6+ team members at Zeus Street Greek as Team Leader. Coordinated 13-member volunteer teams across Sydney and Melbourne for Students for Liberty." },
    { name: "Training & Mentoring", category: "Development", source: "Workplace Experience", description: "Gained through training and mentoring 6+ new hires at Zeus Street Greek. Developed systematic training approach that reduced onboarding time by 40%." },
    { name: "Event Coordination", category: "Management", source: "Student Organization Leadership", description: "Mastered through coordinating large-scale events for 200+ student participants with Students for Liberty across multiple universities and cities." },
    { name: "Process Improvement", category: "Operations", source: "Real-world Problem Solving", description: "Applied at Zeus Street Greek through systematic methodology implementation that improved team efficiency and reduced training time by 40%." },
    { name: "Customer Relations", category: "Communication", source: "Front-line Service Experience", description: "Developed through direct customer service at Zeus Street Greek, recognized by leadership for consistently high customer satisfaction scores." },
    { name: "Cross-cultural Collaboration", category: "Communication", source: "International Volunteer Work", description: "Built through coordinating teams across different cities and working with diverse volunteer groups in educational and liberty advocacy programs." }
  ],
  business: [
    { name: "Digital Innovation", category: "Innovation", source: "Independent Technology Development", description: "Created first-of-its-kind interactive resume technology using vector embeddings and AI. Pioneered integrated development workflow using GitHub Copilot, Claude AI, and modern tools." },
    { name: "Problem Solving", category: "Analysis", source: "Technical & Operational Challenges", description: "Applied across projects from debugging complex database schemas in capstone project to resolving customer service issues and optimizing team processes at Zeus Street Greek." },
    { name: "Data Analytics", category: "Analysis", source: "Academic Specialization & Internship", description: "Developed through Data Analytics for Cyber Security coursework and practical application during AusBiz Consulting AI/Data internship working on real business solutions." },
    { name: "Customer Experience", category: "Service", source: "Front-line Service Excellence", description: "Mastered through direct customer interactions at Zeus Street Greek, consistently achieving high satisfaction ratings and being recognized for exceptional service quality." },
    { name: "Technology Integration", category: "Technical", source: "Multi-tool Development Workflow", description: "Built expertise combining GitHub Copilot (60%+ code generation), Claude Sonnet 4.0 for architectural decisions, v0 for UI prototyping, and MCP protocol for AI agent integration." },
    { name: "Operational Efficiency", category: "Operations", source: "Process Optimization Experience", description: "Demonstrated through 40% reduction in onboarding time at Zeus Street Greek and successful coordination of 200+ person events with measurable engagement improvements." }
  ]
}