import { ReactNode } from "react";

export interface resourceLink {
  title: string;
  description: string;
  href: string;
}

export interface NextStepProps {
  href: string;
  title: string;
  description?: string;
  ctaText?: string;
  sectionDescription?: string;
}

export interface MDXComponentsCustomHeadingProps {
  children: React.ReactNode;
  level: number;
  id: string;
  className?: string;
}

export interface BackToTopProps {
  className?: string;
}

export interface NavigationSectionProps {
  title: string;
  items: NavigationItem[];
  isOpen: boolean;
  onToggle: () => void;
}

export interface NavigationItem {
  title: string;
  href: string;
  children?: NavigationItem[];
  icon?: string;
  order?: number;
  isExpanded?: boolean;
}

export interface NavigationSection {
  title: string;
  items: NavigationItem[];
}

export interface ButtonProps {
  href?: string;
  variant?:
    | "text"
    | "default"
    | "outline"
    | "secondary"
    | "tertiary"
    | "accent"
    | "muted"
    | "destructive"
    | "ghost"
    | "link"
    | "success"
    | "warning";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  arrow?: "right" | "left";
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

export interface SearchResultsProps {
  results: SearchResult[];
  searchQuery: string;
  onResultClick: () => void;
}

export interface SearchResult {
  title: string;
  href: string;
  section: string;
  breadcrumb: string[];
  searchableText: string;
}
