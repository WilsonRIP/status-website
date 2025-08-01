import { ServiceConfig, ServiceCategory } from './types';
import { Service } from '@/types/status';
import { validateService, groupServicesByCategory } from './builder';

// Import all service categories
import { gamingServices } from './gaming';
import { cloudServices } from './cloud';
import { developmentServices } from './development';
import { socialServices } from './social';
import { entertainmentServices } from './entertainment';
import { financeServices } from './finance';

// Combine all services
export const allServices: ServiceConfig[] = [
  ...gamingServices,
  ...cloudServices,
  ...developmentServices,
  ...socialServices,
  ...entertainmentServices,
  ...financeServices,
  // Add other categories here as they are created
];

// Validate all services on import
allServices.forEach(service => {
  if (!validateService(service)) {
    console.error(`Invalid service configuration: ${service.id}`);
  }
});

// Export individual categories
export { gamingServices } from './gaming';
export { cloudServices } from './cloud';
export { developmentServices } from './development';
export { socialServices } from './social';
export { entertainmentServices } from './entertainment';
export { financeServices } from './finance';

// Export grouped services
export const servicesByCategory = groupServicesByCategory(allServices);

// Type assertion function to convert ServiceConfig to Service
export function asService(service: ServiceConfig): Service {
  return {
    id: service.id,
    name: service.name,
    url: service.url,
    description: service.description,
    icon: service.icon,
    checkUrl: service.checkUrl,
    category: service.category as Service['category']
  };
}

// Convert all services to Service type for backward compatibility
export const servicesAsService: Service[] = allServices.map(asService);

// For backward compatibility with existing code
export const services = servicesAsService;

// Utility functions
export function getServicesByCategory(category: ServiceCategory): ServiceConfig[] {
  return allServices.filter(service => service.category === category);
}

export function getServiceById(id: string): ServiceConfig | undefined {
  return allServices.find(service => service.id === id);
}

export function getServicesByTag(tag: string): ServiceConfig[] {
  return allServices.filter(service => service.tags?.includes(tag));
}

export function getServicesByPriority(priority: 'low' | 'medium' | 'high' | 'critical'): ServiceConfig[] {
  return allServices.filter(service => service.priority === priority);
}

export function searchServices(query: string): ServiceConfig[] {
  const lowercaseQuery = query.toLowerCase();
  return allServices.filter(service => 
    service.name.toLowerCase().includes(lowercaseQuery) ||
    service.description.toLowerCase().includes(lowercaseQuery) ||
    service.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}

// Export types and utilities
export * from './types';
export { validateService, groupServicesByCategory, createService, createServices } from './builder'; 