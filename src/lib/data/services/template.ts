import { ServiceConfig } from './types';
import { createService } from './builder';
import { SiGithub } from 'react-icons/si'; // Replace with actual icon

/**
 * Template for creating new services
 * 
 * Usage:
 * 1. Copy this template
 * 2. Replace the imports with actual icons
 * 3. Update the service configurations
 * 4. Add the new services to the index.ts file
 */

export const templateServices: ServiceConfig[] = [
  // Example service using the builder pattern
  createService('example-service')
    .setName('Example Service')
    .setUrl('https://example.com')
    .setDescription('This is an example service description')
    .setIcon(SiGithub)
    .setCheckUrl('https://example.com/status')
    .setCategory('other') // Choose from: gaming, cloud, development, social, entertainment, finance, storage, email, security, other
    .setPriority('medium') // Choose from: low, medium, high, critical
    .setTags(['example', 'template'])
    .setMetadata({
      // Optional additional metadata
      region: 'global',
      uptime: '99.9%'
    })
    .build(),

  // Another example with different priority
  createService('critical-service')
    .setName('Critical Service')
    .setUrl('https://critical.example.com')
    .setDescription('A critical service that needs high priority monitoring')
    .setIcon(SiGithub)
    .setCheckUrl('https://critical.example.com/health')
    .setCategory('development')
    .setPriority('critical')
    .setTags(['critical', 'monitoring', 'health'])
    .build(),

  // Example with minimal configuration
  createService('simple-service')
    .setName('Simple Service')
    .setUrl('https://simple.example.com')
    .setDescription('A simple service with basic configuration')
    .setIcon(SiGithub)
    .setCheckUrl('https://simple.example.com')
    .setCategory('other')
    .build(),
];

/**
 * Available categories:
 * - gaming: Gaming platforms and services
 * - cloud: Cloud infrastructure and hosting
 * - development: Development tools and platforms
 * - social: Social media and communication
 * - entertainment: Entertainment and media services
 * - finance: Financial and payment services
 * - storage: File storage and backup services
 * - email: Email and communication services
 * - security: Security and privacy services
 * - other: Miscellaneous services
 * 
 * Available priorities:
 * - low: Non-critical services
 * - medium: Standard services
 * - high: Important services
 * - critical: Essential services that require immediate attention
 * 
 * Tips:
 * - Use descriptive IDs that are unique across all services
 * - Provide clear, concise descriptions
 * - Use appropriate icons from react-icons
 * - Set meaningful tags for better searchability
 * - Choose appropriate priority levels
 * - Validate URLs before adding them
 */ 