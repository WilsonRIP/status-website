# Service Management System

This directory contains a modular and scalable system for managing service configurations in the status website.

## Structure

```text
services/
├── types.ts          # TypeScript types and interfaces
├── builder.ts        # Service builder utility
├── index.ts          # Main export file
├── template.ts       # Template for new services
├── gaming.ts         # Gaming services
├── cloud.ts          # Cloud and infrastructure services
└── README.md         # This file
```

## Key Features

### 🔧 Service Builder Pattern

The `ServiceBuilder` class provides a fluent API for creating services with validation:

```typescript
import { createService } from './builder';

const service = createService('my-service')
  .setName('My Service')
  .setUrl('https://example.com')
  .setDescription('Service description')
  .setIcon(SiExample)
  .setCheckUrl('https://example.com/status')
  .setCategory('development')
  .setPriority('high')
  .setTags(['api', 'monitoring'])
  .build();
```

### 📁 Modular Organization

Services are organized by category in separate files:

- `gaming.ts` - Gaming platforms and services
- `cloud.ts` - Cloud infrastructure and hosting
- `development.ts` - Development tools and platforms
- `social.ts` - Social media and communication
- `entertainment.ts` - Entertainment and media services
- `finance.ts` - Financial and payment services
- `storage.ts` - File storage and backup services
- `security.ts` - Security and privacy services
- `analytics.ts` - Analytics and monitoring services
- `other.ts` - Miscellaneous services

### 🎯 Utility Functions

The system provides several utility functions for working with services:

```typescript
import { 
  getServicesByCategory,
  getServiceById,
  getServicesByTag,
  getServicesByPriority,
  searchServices,
  servicesByCategory
} from './index';

// Get all gaming services
const gamingServices = getServicesByCategory('gaming');

// Find a specific service
const service = getServiceById('steam');

// Search services by tag
const apiServices = getServicesByTag('api');

// Get critical services
const criticalServices = getServicesByPriority('critical');

// Search services by name/description/tags
const results = searchServices('cloud');
```

### ✅ Validation

All services are automatically validated on import:

- Required fields are checked
- URL formats are validated
- Duplicate IDs are detected

## Adding New Services

### 1. Create a New Category File (if needed)

```typescript
// src/lib/data/services/new-category.ts
import { ServiceConfig } from './types';
import { createService } from './builder';
import { SiExample } from 'react-icons/si';

export const newCategoryServices: ServiceConfig[] = [
  createService('new-service')
    .setName('New Service')
    .setUrl('https://newservice.com')
    .setDescription('Description of the new service')
    .setIcon(SiExample)
    .setCheckUrl('https://newservice.com/status')
    .setCategory('new-category')
    .setPriority('medium')
    .build(),
];
```

### 2. Add to Index File

```typescript
// src/lib/data/services/index.ts
import { newCategoryServices } from './new-category';

export const allServices: ServiceConfig[] = [
  ...gamingServices,
  ...cloudServices,
  ...newCategoryServices, // Add the new category
];
```

### 3. Update Types (if adding new category)

```typescript
// src/lib/data/services/types.ts
export type ServiceCategory = 
  | 'gaming'
  | 'cloud'
  | 'new-category' // Add new category
  | 'other';
```

## Service Configuration

### Required Fields

- `id`: Unique identifier for the service
- `name`: Display name
- `url`: Main website URL
- `description`: Service description
- `icon`: React icon component
- `checkUrl`: Status check URL
- `category`: Service category

### Optional Fields

- `priority`: Service priority level
- `tags`: Array of tags for searchability
- `metadata`: Additional custom data
- `status`: Current service status

### Categories

- `gaming`: Gaming platforms and services
- `cloud`: Cloud infrastructure and hosting
- `development`: Development tools and platforms
- `social`: Social media and communication
- `entertainment`: Entertainment and media services
- `finance`: Financial and payment services
- `storage`: File storage and backup services
- `security`: Security and privacy services
- `analytics`: Analytics and monitoring services
- `other`: Miscellaneous services

### Priorities

- `low`: Non-critical services
- `medium`: Standard services
- `high`: Important services
- `critical`: Essential services

## Benefits

1. **Scalability**: Easy to add new services and categories
2. **Maintainability**: Services are organized by category
3. **Type Safety**: Full TypeScript support with validation
4. **Developer Experience**: Fluent API for creating services
5. **Searchability**: Built-in search and filtering capabilities
6. **Validation**: Automatic validation of service configurations
7. **Backward Compatibility**: Existing code continues to work

## Migration from Old Structure

The new system maintains backward compatibility. Existing imports will continue to work:

```typescript
// Old way (still works)
import { services } from '@/lib/data/services';

// New way (recommended)
import { allServices, getServicesByCategory } from '@/lib/data/services';
```

## Best Practices

1. **Use descriptive IDs**: Make IDs unique and meaningful
2. **Choose appropriate icons**: Use icons that represent the service
3. **Set meaningful tags**: Add tags for better searchability
4. **Validate URLs**: Ensure all URLs are valid before adding
5. **Choose appropriate priority**: Set priority based on service importance
6. **Group related services**: Put related services in the same category
7. **Use the builder pattern**: Always use the ServiceBuilder for consistency