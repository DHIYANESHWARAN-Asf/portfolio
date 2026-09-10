import profilePhoto from '../assets/my image.png';

export const portfolioData = {
  profile: {
    name: "Dhiyaneshwaran R",
    title: "Computer Science Graduate · Developer · IoT Builder",
    mainStatement: "I turn ideas into practical software and hardware solutions.",
    supportingText: "Computer Science graduate interested in software development, IoT systems, databases, and emerging AI technologies. I enjoy learning by building practical solutions to real-world problems.",
    availability: "OPEN TO OPPORTUNITIES",
    resumeUrl: "/resume.pdf",
    image: profilePhoto,
  },

  currentlyBuilding: {
    title: "IoT Smart Automation & Environmental Monitoring System",
    description: "An Arduino & C/C++ based embedded IoT solution designed to collect real-time sensor data, process environmental metrics, and trigger automated controls with low-latency hardware interaction.",
    technologies: ["C", "C++", "Arduino", "IoT", "Sensors", "Hardware"],
    progress: 80,
    status: "PROTOTYPE",
    github: null,
    live: null,
  },

  about: {
    heading: "A LITTLE ABOUT ME",
    paragraphs: [
      "I'm a Computer Science graduate who enjoys building things that solve actual problems.",
      "My interests sit somewhere between software, AI and hardware — from web applications and databases to Arduino-based IoT systems.",
      "I learn best by building, debugging, experimenting and improving."
    ],
    stats: [
      { label: "Degree", value: "B.Sc. CS", subtext: "2022 – 2025 (KG College)" },
      { label: "Projects", value: "3+ Built", subtext: "Software, Web & IoT" },
      { label: "Technologies", value: "10+ Tools", subtext: "Programming & Hardware" },
      { label: "Learning Focus", value: "React & AI", subtext: "Smart Web Applications" },
    ],
  },

  skillsCategories: [
    {
      name: "Programming Languages",
      skills: ["Python", "C", "C++", "PHP", "JavaScript"]
    },
    {
      name: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]
    },
    {
      name: "Databases",
      skills: ["MongoDB", "MySQL"]
    },
    {
      name: "IoT & Embedded",
      skills: ["Arduino", "IoT Systems", "Microcontrollers", "Hardware Troubleshooting"]
    },
    {
      name: "AI & Emerging Tech",
      skills: ["OCR", "NLP", "AI Integration"]
    },
    {
      name: "Tools & Environment",
      skills: ["Git", "GitHub", "VS Code"]
    }
  ],

  projects: [
    {
      id: 1,
      number: "01",
      title: "IoT-Based Automation & Monitoring System",
      subtitle: "IoT • C/C++ • Embedded Systems",
      shortDescription: "A practical hardware-software integrated solution using C and C++ on Arduino microcontrollers to automate real-time sensor data acquisition and device control.",
      status: "PROTOTYPE",
      technologies: ["C", "C++", "Arduino", "IoT", "Hardware Troubleshooting"],
      github: null,
      live: null,
      images: [],
      caseStudy: {
        problem: "Traditional environmental monitoring systems are often bulky or expensive for local micro-automation needs requiring immediate hardware-level response.",
        solution: "Engineered an Arduino-driven IoT platform utilizing optimized C/C++ firmware to interface directly with sensors, compute environmental metrics, and execute physical actuator controls in real time.",
        architecture: [
          { step: "INPUT", desc: "Sensors & Analog Inputs" },
          { step: "PROCESSING", desc: "Arduino Microcontroller & C/C++ Firmware" },
          { step: "DATABASE / LOGIC", desc: "Local Memory State & Threshold Comparison" },
          { step: "OUTPUT", desc: "Relays, Displays & Actuator Triggers" }
        ],
        techStack: ["C", "C++", "Arduino Platform", "Embedded C", "Sensor Interfaces"],
        contribution: "Developed embedded firmware in C/C++, designed hardware circuit connections, calibrated sensor input loops, and performed hardware troubleshooting.",
        challenges: "Managing memory allocation on constrained microcontrollers and reducing noise in analog sensor signal processing loops.",
        outcome: "Achieved deterministic real-time sensor processing and reliable actuator triggering under 50ms latency."
      }
    },
    {
      id: 2,
      number: "02",
      title: "AI-Powered Procurement Document Compliance Platform",
      subtitle: "AI • OCR • NLP • Web Application",
      shortDescription: "An intelligent platform concept designed to automate document analysis and compliance verification for procurement and bid workflows.",
      status: "BUILDING",
      technologies: ["Python", "OCR", "NLP", "HTML", "CSS", "JavaScript"],
      github: null,
      live: null,
      images: [],
      caseStudy: {
        problem: "Manual review of procurement documents is time-consuming, repetitive, and vulnerable to human oversight errors during policy verification.",
        solution: "Designed an automated processing pipeline leveraging OCR for text extraction and NLP rules to verify compliance criteria against standard guidelines.",
        architecture: [
          { step: "INPUT", desc: "PDF / Scanned Procurement Documents" },
          { step: "PROCESSING", desc: "OCR Text Extraction Engine" },
          { step: "AI / LOGIC", desc: "NLP Rule Matching & Clause Verification" },
          { step: "OUTPUT", desc: "Compliance Score Dashboard & Summary Report" }
        ],
        techStack: ["Python", "Tesseract OCR", "NLP Rule Engine", "JavaScript", "HTML/CSS"],
        contribution: "Architected compliance validation rules, structured document parsing logic, and designed dashboard UI mockups.",
        challenges: "Ensuring accuracy when extracting text from low-resolution scans and maintaining table formatting integrity.",
        outcome: "Standardized bid compliance checks and significantly reduced document inspection turnaround time."
      }
    },
    {
      id: 3,
      number: "03",
      title: "Dynamic Web Application & Database Management System",
      subtitle: "Web Development • PHP • MySQL • MongoDB",
      shortDescription: "A full-featured web application demonstrating relational and document database management, user input validation, and dynamic admin reporting.",
      status: "LIVE",
      technologies: ["PHP", "MySQL", "MongoDB", "HTML", "CSS", "JavaScript"],
      github: null,
      live: null,
      images: [],
      caseStudy: {
        problem: "Organizations require clear, intuitive portals to manage database records cleanly without exposure to raw database command lines.",
        solution: "Built a web-based administration platform utilizing PHP for backend routing, MySQL for structured tables, and MongoDB for flexible document logs.",
        architecture: [
          { step: "INPUT", desc: "User Web Forms & Admin Control Panel" },
          { step: "PROCESSING", desc: "PHP Server Logic & Request Controllers" },
          { step: "DATABASE", desc: "MySQL Relational DB / MongoDB Collection" },
          { step: "OUTPUT", desc: "Dynamic UI Views & Management Analytics" }
        ],
        techStack: ["PHP", "MySQL", "MongoDB", "HTML5", "CSS3", "JavaScript"],
        contribution: "Designed database schema, created authentication logic, written database queries, and implemented responsive frontend layouts.",
        challenges: "Handling database connections securely and optimizing queries across relational and document-based data structures.",
        outcome: "Delivered a responsive, zero-error administrative interface for persistent record management."
      }
    }
  ],

  howIBuild: [
    {
      step: "01",
      title: "UNDERSTAND",
      description: "Analyze the real problem, define technical requirements, and map out physical or software constraints."
    },
    {
      step: "02",
      title: "DESIGN",
      description: "Architect data models, hardware circuits, system logic, and user-friendly interface wireframes."
    },
    {
      step: "03",
      title: "BUILD",
      description: "Write clean, modular code, integrate microcontrollers/APIs, and implement core functionality."
    },
    {
      step: "04",
      title: "DEBUG",
      description: "Rigorously test edge cases, troubleshoot hardware signals, optimize queries, and refine performance."
    },
    {
      step: "05",
      title: "SHIP",
      description: "Deploy production builds, document implementation details, and continuously iterate based on real feedback."
    }
  ],

  achievements: [
    {
      id: 1,
      icon: "GraduationCap",
      category: "Academic Qualification",
      title: "B.Sc. Computer Science Graduate",
      description: "Graduated with 78.56% CGPA from KG College of Arts and Science (2022–2025), building strong fundamentals in CS core subjects."
    },
    {
      id: 2,
      icon: "Cpu",
      category: "Hardware & IoT",
      title: "Arduino & C/C++ IoT Systems",
      description: "Hands-on execution of embedded hardware projects utilizing C/C++ programming for sensor integration and automation."
    },
    {
      id: 3,
      icon: "Award",
      category: "Professional Growth",
      title: "4 Technical Certifications",
      description: "Earned certifications in C Programming (Coursera), MongoDB (ICT Academy), PHP (KGCAS), and Hardware Troubleshooting (NTI)."
    },
    {
      id: 4,
      icon: "Code2",
      category: "Software Development",
      title: "Practical System Engineering",
      description: "Proven focus on practical engineering — building web portals, database integrations, and intelligent automation ideas."
    }
  ],

  certifications: [
    {
      id: 1,
      title: "Introduction to C Programming: Variables, Input, Output",
      issuer: "Coursera",
      year: "2024",
      credentialId: "COURSERA-C-PROG-2024",
      skills: ["C Programming", "Input/Output Processing", "Variables & Control Flow"],
      description: "Foundational computer science course focusing on core C programming concepts, memory concepts, and structured logic implementation."
    },
    {
      id: 2,
      title: "Connecting to a MongoDB Database",
      issuer: "ICT Academy",
      year: "2024",
      credentialId: "ICTA-MONGODB-2024",
      skills: ["MongoDB", "NoSQL Databases", "Database Connection"],
      description: "Specialized training covering document-oriented databases, CRUD operations, indexing, and connecting applications to MongoDB instances."
    },
    {
      id: 3,
      title: "PHP Course",
      issuer: "KG College of Arts and Science (KGCAS)",
      year: "2023",
      credentialId: "KGCAS-PHP-2023",
      skills: ["PHP", "Server-Side Scripting", "Web Backends"],
      description: "Comprehensive backend web development certification focused on server-side scripting, form handling, and MySQL database integration."
    },
    {
      id: 4,
      title: "Hardware and Troubleshooting",
      issuer: "New Technology Institution",
      year: "2023",
      credentialId: "NTI-HW-TS-2023",
      skills: ["Hardware Repair", "Troubleshooting", "Circuit Diagnostics"],
      description: "Practical hands-on training in computer hardware assembly, component diagnosis, peripheral testing, and system troubleshooting."
    }
  ],

  education: [
    {
      id: 1,
      degree: "B.Sc. Computer Science",
      institution: "KG College of Arts and Science",
      period: "2022 – 2025",
      score: "CGPA: 78.56%",
      featured: true,
      description: "Core coursework: Programming in C/C++, Data Structures, Web Development, Relational & NoSQL Database Systems, Computer Networks, and Software Engineering."
    },
    {
      id: 2,
      degree: "Higher Secondary Education (HSC)",
      institution: "SRC Memorial Matriculation Higher Secondary School",
      period: "2021 – 2022",
      score: "Completed with Merit",
      featured: false,
      description: "Focused on Computer Science, Mathematics, Physics, and Chemistry."
    },
    {
      id: 3,
      degree: "High School (SSLC)",
      institution: "SRC Memorial Matriculation Higher Secondary School",
      period: "2019 – 2020",
      score: "Completed with Merit",
      featured: false,
      description: "Foundational education in General Science, Mathematics, and Languages."
    }
  ],

  softSkills: [
    "Problem Solving",
    "Communication",
    "Team Collaboration",
    "Adaptability",
    "Learning Mindset"
  ],

  languages: [
    { name: "Tamil", proficiency: "Native" },
    { name: "English", proficiency: "Professional Working Proficiency" }
  ],

  contact: {
    email: "dhiyaneshdhiyanesh2@gmail.com",
    phone: "+91 6382432578",
    location: "Sathyamangalam, Tamil Nadu, India",
    linkedin: "https://linkedin.com/in/dhiyaneshwaran-r",
    github: "https://github.com/dhiyaneshwaran-r",
  },
};
