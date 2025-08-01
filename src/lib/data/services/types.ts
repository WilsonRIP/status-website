import { IconType } from 'react-icons';

export interface ServiceConfig {
  id: string;
  name: string;
  url: string;
  description: string;
  icon: IconType;
  checkUrl?: string;
  category: ServiceCategory;
  status?: 'operational' | 'degraded' | 'outage' | 'maintenance';
  priority?: 'low' | 'medium' | 'high' | 'critical';
  tags?: string[];
  metadata?: Record<string, unknown>;
}

export type ServiceCategory = 
  | 'gaming'
  | 'cloud'
  | 'development'
  | 'social'
  | 'entertainment'
  | 'finance'
  | 'storage'
  | 'security'
  | 'analytics'
  | 'other';

export interface ServiceBuilder {
  id: string;
  name: string;
  url: string;
  description: string;
  icon: IconType;
  checkUrl: string;
  category: ServiceCategory;
  priority?: 'low' | 'medium' | 'high' | 'critical';
  tags?: string[];
  metadata?: Record<string, unknown>;
}

export interface ServiceGroup {
  category: ServiceCategory;
  services: ServiceConfig[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  'gaming',
  'cloud', 
  'development',
  'social',
  'entertainment',
  'finance',
  'storage',
  'security',
  'analytics',
  'other'
];

export const CATEGORY_LABELS: Record<ServiceCategory, string> = {
  gaming: 'Gaming',
  cloud: 'Cloud & Infrastructure',
  development: 'Development & Tools',
  social: 'Social & Communication',
  entertainment: 'Entertainment & Media',
  finance: 'E-commerce & Finance',
  storage: 'File Storage',
  security: 'Security & Privacy',
  analytics: 'Analytics & Monitoring',
  other: 'Other Services'
};

export const CATEGORY_COLORS: Record<ServiceCategory, string> = {
  gaming: '#FF6B6B',
  cloud: '#4ECDC4',
  development: '#45B7D1',
  social: '#96CEB4',
  entertainment: '#FFEAA7',
  finance: '#DDA0DD',
  storage: '#98D8C8',
  security: '#BB8FCE',
  analytics: '#F7DC6F',
  other: '#A8E6CF'
}; 