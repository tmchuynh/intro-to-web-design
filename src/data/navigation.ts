import {
  FaBolt,
  FaCogs,
  FaDatabase,
  FaNetworkWired,
  FaRocket,
  FaServer,
  FaTools,
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";

export const chapters = [
  {
    href: "/web-design-fundamentals/introduction-to-web-design",
    title: "Introduction to Web Design & UX/UI",
    description:
      "Understanding the basics of web design, including the professional communication and handoff process as well as the soft skills needed for success.",
    bgColor: "primary",
    icon: FaServer,
    ctaText: "Start Here",
  },
  {
    href: "/design-fundamentals/design-patterns",
    title: "Design Patterns",
    description:
      "Exploring common design patterns in web design, including layout techniques, navigation structures, and user interface components",
    bgColor: "secondary",
    icon: SiMysql,
    ctaText: "Design Database Schemas",
  },
  {
    href: "/design-fundamentals/design-principles",
    title: "Design Principles",
    description:
      "Understanding design principles such as color theory, typography, and layout to create visually appealing and user-friendly interfaces.",
    bgColor: "tertiary",
    icon: FaCogs,
    ctaText: "Design Database Schemas",
  },
  {
    href: "/technical-skills/responsive-and-adaptive-design",
    title: "Responsive and Adaptive Design",
    description:
      "Implementing responsive and adaptive design techniques to ensure web applications work seamlessly across various devices and screen sizes.",
    bgColor: "code",
    icon: FaNetworkWired,
    ctaText: "Learn API Design",
  },
  {
    href: "/branding-fundamentals/visual-design-principles",
    title: "Visual Design Principles",
    description:
      "Applying visual design principles such as composition, imagery, and iconography to enhance the aesthetic appeal of web applications.",
    bgColor: "sidebar-text",
    icon: FaRocket,
    ctaText: "Learn about Relational Databases",
  },
  {
    href: "/branding-fundamentals/case-studies",
    title: "Case Studies",
    description:
      "Analyzing real-world web design case studies to understand successful design strategies.",
    bgColor: "nav-item-active",
    icon: FaBolt,
    ctaText: "Explore Caching",
  },
  {
    href: "/design-systems-fundamentals/design-systems",
    title: "Design Systems",
    description:
      "Creating and maintaining design systems for consistent user experiences across applications.",
    bgColor: "table-head",
    icon: FaDatabase,
    ctaText: "Learn Database Design",
  },
  {
    href: "/practical-tools",
    title: "Tools and Utilities",
    description:
      "Exploring tools and utilities for web design, including design software, prototyping tools, and version control.",
    bgColor: "sidebar-foreground",
    icon: FaTools,
    ctaText: "Learn about Relational Databases",
  },
];

export const additional_resources = [
  {
    href: "https://nibmehub.com/opac-service/pdf/read/Web%20Design%20_%20the%20complete%20reference-%202nd%20Edition.pdf",
    title: "Web Design: The Complete Reference (PDF)",
  },
  {
    href: "https://students.aiu.edu/submissions/profiles/resources/onlineBook/a2g8K7_Web_Design_For_Beginners.pdf",
    title: "Web Design for Beginners (PDF)",
  },
  {
    href: "https://www.academia.edu/94128771/Practical_Web_Design_for_Absolute_Beginners",
    title: "Practical Web Design for Absolute Beginners (PDF)",
  },
  {
    href: "https://www.itdesk.info/Web_design-handbook.pdf",
    title: "Web Design Handbook (PDF)",
  },
  {
    href: "https://mediaserver.responsesource.com/fjd-profile/81228/web-design-in-easy-steps-5th-edn.pdf",
    title: "Web Design in Easy Steps (PDF)",
  },
  {
    href: "https://www.w3.org/standards/webdesign/",
    title: "W3C Web Design Standards",
  },
  {
    href: "https://developer.mozilla.org/en-US/docs/Learn_web_development",
    title: "MDN Web Docs: Learn Web Development",
  },
  {
    href: "https://www.freecodecamp.org/learn/responsive-web-design/",
    title: "freeCodeCamp: Responsive Web Design Certification",
  },
  {
    href: "https://www.linkedin.com/learning/topics/web-design",
    title: "LinkedIn Learning: Web Design Courses",
  },
  {
    href: "https://www.udemy.com/course/the-web-developer-bootcamp/",
    title: "Udemy: The Web Developer Bootcamp",
  },
  {
    href: "https://www.coursera.org/specializations/web-design",
    title: "Coursera: Web Design for Everybody",
  },
  {
    href: "https://teamtreehouse.com/tracks/front-end-web-development",
    title: "Treehouse: Front End Web Development",
  },
  {
    href: "https://www.codecademy.com/catalog/subject/web-design",
    title: "Codecademy: Web Design",
  },
  {
    href: "https://www.flux-academy.com/courses/web-design-masterclass",
    title: "Flux Academy: Web Design Masterclass",
  },

  {
    href: "https://www.smashingmagazine.com/category/design",
    title: "Smashing Magazine: Design Articles",
  },
  {
    href: "https://www.webdesignerdepot.com/",
    title: "Webdesigner Depot",
  },
  {
    href: "https://www.cssdesignawards.com/",
    title: "CSS Design Awards",
  },
];

export const databaseTypes = [
  {
    title: "Data Warehouses and Data Lakes",
    description: "",
  },
  {
    title: "NoSQL Databases",
    description: "",
  },
  {
    title: "Embedded",
    description: "",
  },
  {
    title: "In Memory",
    description: "",
  },
  {
    title: "Relational Databases",
    description: "",
  },
  {
    title: "Search Engines",
    description: "",
  },
  {
    title: "Time Series",
    description: "",
  },
];

export const utilitiesAndTools = [
  {
    title: "General Development Resources and Tools for Back End Development",
    description: "",
  },
  {
    title: "API Management",
    description: "",
  },
  {
    title: "Backup and Recovery Tools",
    description: "",
  },
  {
    title: "Database Management Tools",
    description: "",
  },
  {
    title: "Documentation and Schema Visualization Tools",
    description: "",
  },
  {
    title: "Load Testing and Benchmarking Tools",
    description: "",
  },
  {
    title: "Object Relational Mapping and Query Builders",
    description: "",
  },
  {
    title: "Schema Migration and Version Control",
    description: "",
  },
];

export const advancedTopics = [
  {
    title: "API Versioning",
    description: "",
  },
  {
    title: "ETL Processes",
    description: "",
  },
  {
    title: "Authentication and Authorization",
    description: "",
  },
  {
    title: "Deployment Strategies",
    description: "",
  },
  {
    title: "Docker",
    description: "",
  },
  {
    title: "Kubernetes",
    description: "",
  },
  {
    title: "Software Principles",
    description: "",
    children: [
      {
        title: "SOLID Principles",
        description: "",
      },
      {
        title: "Clean Code Practices",
        description: "",
      },
      {
        title: "Design Patterns",
        description: "",
      },
      {
        title: "Software Design Principles",
        description: "",
      },
    ],
  },
  {
    title: "API Security",
    description: "",
  },
  {
    title: "Quality Security Performance",
    description: "",
    children: [
      {
        title: "Testing Strategies",
        description: "",
        children: [
          {
            title: "Automating Tests",
            description: "",
          },
          {
            title: "Integration Testing",
            description: "",
          },
          {
            title: "Unit Testing",
            description: "",
          },
          {
            title: "Performance Testing",
            description: "",
          },
        ],
      },
      {
        title: "Performance Optimization",
        description: "",
        children: [
          {
            title: "Load Balancing",
            description: "",
          },
          {
            title: "Monitoring and Logging",
            description: "",
          },
          {
            title: "Scalability Strategies",
            description: "",
          },
          {
            title: "Performance Tuning",
            description: "",
          },
          {
            title: "Caching Strategies",
            description: "",
          },
          {
            title: "Database Optimization",
            description: "",
          },
        ],
      },
    ],
  },
];
