export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  availability: string;
  email: string;
  phone: string;
  githubUrl: string;
  linkedinUrl: string;
  portfolioUrl: string;
  resumePdfUrl: string;
  summary: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
}

export interface CaseStudySection {
  title: string;
  subtitle?: string;
  points: string[];
  codeSnippet?: {
    language: string;
    code: string;
    caption?: string;
  };
}

export interface FeaturedProject {
  id: string;
  title: string;
  shortDescription: string;
  badge: string;
  githubUrl: string;
  previewImage: string;
  architectureDiagram: string;
  tags: string[];
  overview: string;
  problemStatement: string;
  architectureExplanation: string;
  keyHighlights: string[];
  sections: {
    infrastructure: CaseStudySection;
    ci: CaseStudySection;
    gitops: CaseStudySection;
    networking: CaseStudySection;
    observability: CaseStudySection;
  };
  screenshots?: {
    url: string;
    caption: string;
    description: string;
  }[];
}

export interface AdditionalProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  githubUrl: string;
  technologies: string[];
  highlights: string[];
  diagramImage?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  status: 'Completed' | 'In Progress';
  certificateUrl?: string;
  date?: string;
  credentialId?: string;
  badgeText: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  highlights?: string[];
}
