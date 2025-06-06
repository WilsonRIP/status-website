'use client';

import { Service } from '@/types/status';
import { useServiceStatus } from '@/lib/hooks/useServiceStatus';
import { StatusBadge, StatusIndicator } from './StatusIndicator';
import { ExternalLink, RefreshCw, Star, StarIcon } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onServiceClick: () => void;
}

export function ServiceCard({ 
  service, 
  isFavorite, 
  onToggleFavorite, 
  onServiceClick 
}: ServiceCardProps) {
  const { status, isLoading, refresh } = useServiceStatus(service.id);

  const formatResponseTime = (time: number | undefined) => {
    if (!time) return 'N/A';
    if (time < 1000) return `${time}ms`;
    return `${(time / 1000).toFixed(1)}s`;
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-all group">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div 
          className="flex items-center space-x-3 cursor-pointer flex-1"
          onClick={onServiceClick}
        >
          <div className="text-2xl">
            <service.icon />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {service.name}
            </h3>
            <p className="text-sm text-muted-foreground truncate">
              {service.description}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 ml-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite();
            }}
            className={`p-1.5 rounded-md transition-colors ${
              isFavorite 
                ? 'text-yellow-500 hover:text-yellow-600' 
                : 'text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100'
            }`}
            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorite ? <StarIcon className="w-4 h-4 fill-current" /> : <Star className="w-4 h-4" />}
          </button>
          
          <StatusIndicator status={status.status} size="md" />
        </div>
      </div>

      {/* Status Badge */}
      <div className="mb-4">
        <StatusBadge status={status.status} />
        {status.error && (
          <p className="text-xs text-destructive/80 mt-1 truncate" title={status.error}>
            {status.error}
          </p>
        )}
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-xs text-muted-foreground">Response Time</p>
          <p className="text-sm font-medium text-foreground">
            {formatResponseTime(status.responseTime)}
          </p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Last Check</p>
          <p className="text-sm font-medium text-foreground">
            {status.lastChecked.toLocaleTimeString()}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <button
          onClick={(e) => {
            e.stopPropagation();
            refresh();
          }}
          disabled={isLoading}
          className="flex items-center space-x-1 px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
        >
          <RefreshCw className={`w-3 h-3 ${isLoading ? 'animate-spin' : ''}`} />
          <span>Refresh</span>
        </button>

        <div className="flex items-center space-x-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onServiceClick();
            }}
            className="text-xs text-primary hover:text-primary/80 transition-colors"
          >
            View Details
          </button>
          
          <a
            href={service.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center space-x-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>Visit</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
} 