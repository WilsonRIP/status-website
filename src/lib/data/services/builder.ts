import { ServiceConfig, ServiceCategory } from './types';

export class ServiceBuilder {
  private config: Partial<ServiceConfig> = {};

  constructor(id: string) {
    this.config.id = id;
  }

  setName(name: string): ServiceBuilder {
    this.config.name = name;
    return this;
  }

  setUrl(url: string): ServiceBuilder {
    this.config.url = url;
    return this;
  }

  setDescription(description: string): ServiceBuilder {
    this.config.description = description;
    return this;
  }

  setIcon(icon: ServiceConfig['icon']): ServiceBuilder {
    this.config.icon = icon;
    return this;
  }

  setCheckUrl(checkUrl: string): ServiceBuilder {
    this.config.checkUrl = checkUrl;
    return this;
  }

  setCategory(category: ServiceCategory): ServiceBuilder {
    this.config.category = category;
    return this;
  }

  setPriority(priority: 'low' | 'medium' | 'high' | 'critical'): ServiceBuilder {
    this.config.priority = priority;
    return this;
  }

  setTags(tags: string[]): ServiceBuilder {
    this.config.tags = tags;
    return this;
  }

  setMetadata(metadata: Record<string, unknown>): ServiceBuilder {
    this.config.metadata = metadata;
    return this;
  }

  build(): ServiceConfig {
    const requiredFields = ['id', 'name', 'url', 'description', 'icon', 'category'];
    
    for (const field of requiredFields) {
      if (!this.config[field as keyof ServiceConfig]) {
        throw new Error(`Missing required field: ${field}`);
      }
    }

    return this.config as ServiceConfig;
  }
}

// Convenience function to create a service
export function createService(id: string): ServiceBuilder {
  return new ServiceBuilder(id);
}

// Utility function to create multiple services at once
export function createServices(...builders: ServiceBuilder[]): ServiceConfig[] {
  return builders.map(builder => builder.build());
}

// Validation function
export function validateService(service: ServiceConfig): boolean {
  const requiredFields = ['id', 'name', 'url', 'description', 'icon', 'category'];
  
  for (const field of requiredFields) {
    if (!service[field as keyof ServiceConfig]) {
      console.error(`Service validation failed: Missing ${field} for service ${service.id}`);
      return false;
    }
  }

  // Validate URL format
  try {
    new URL(service.url);
    if (service.checkUrl) {
      new URL(service.checkUrl);
    }
  } catch {
    console.error(`Service validation failed: Invalid URL for service ${service.id}`);
    return false;
  }

  return true;
}

// Group services by category
export function groupServicesByCategory(services: ServiceConfig[]): Record<ServiceCategory, ServiceConfig[]> {
  const grouped: Record<ServiceCategory, ServiceConfig[]> = {
    gaming: [],
    cloud: [],
    development: [],
    social: [],
    entertainment: [],
    finance: [],
    storage: [],
    security: [],
    analytics: [],
    other: []
  };

  services.forEach(service => {
    if (grouped[service.category]) {
      grouped[service.category].push(service);
    } else {
      grouped.other.push(service);
    }
  });

  return grouped;
} 