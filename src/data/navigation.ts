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
    href: "/introduction-to-web-design/introduction-to-web-design",
    title: "Introduction to Web Design & UX/UI",
    description:
      "Understanding the basics of web design, including the professional communication and handoff process as well as the soft skills needed for success.",
    bgColor: "primary",
    icon: FaServer,
    ctaText: "Start Here",
  },
  {
    href: "/web-design-101/design-patterns",
    title: "Design Patterns",
    description:
      "Exploring common design patterns in web design, including layout techniques, navigation structures, and user interface components",
    bgColor: "secondary",
    icon: SiMysql,
    ctaText: "Design Database Schemas",
  },
  {
    href: "/web-design-101/design-principles",
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
