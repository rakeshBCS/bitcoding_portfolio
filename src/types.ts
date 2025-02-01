export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
  technologies: string[];
  responsibilities: string[];
  details: string;
  status?: 'completed' | 'ongoing';
  figmaLink?: string;
}