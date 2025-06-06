import { IconType } from 'react-icons';

export interface Service {
  id: string;
  name: string;
  url: string;
  description: string;
  icon: IconType;
  checkUrl?: string;
  category: 'gaming' | 'social' | 'development' | 'cloud' | 'entertainment' | 'finance' | 'storage' | 'security' | 'analytics' | 'other';
}

export interface ServiceStatus {
  id: string;
  status: 'online' | 'offline' | 'degraded' | 'checking';
  responseTime?: number;
  lastChecked: Date;
  uptime?: number;
  error?: string;
}

export interface StatusResponse {
  success: boolean;
  responseTime: number;
  status: 'online' | 'offline' | 'degraded';
  error?: string;
} 