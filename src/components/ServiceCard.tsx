'use client';

import { Service } from '@/types/status';
import { useServiceStatus } from '@/lib/hooks/useServiceStatus';
import { StatusBadge, StatusIndicator } from './StatusIndicator';
import { ExternalLink, RefreshCw, Star, StarIcon, Clock, Zap, AlertCircle } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  isFavorite: boolean;
  onToggleFavoriteAction: () => void;
  onServiceClickAction: () => void;
}

// Static mappings for status styles
const STATUS_COLORS = {
  online: 'text-green-600 dark:text-green-400',
  offline: 'text-red-600 dark:text-red-400',
  degraded: 'text-yellow-600 dark:text-yellow-400',
  default: 'text-blue-600 dark:text-blue-400',
} as const;

const STATUS_BG_COLORS = {
  online: 'bg-green-50 dark:bg-green-900/10',
  offline: 'bg-red-50 dark:bg-red-900/10',
  degraded: 'bg-yellow-50 dark:bg-yellow-900/10',
  default: 'bg-blue-50 dark:bg-blue-900/10',
} as const;

// Pure utility functions (moved outside component)
const formatResponseTime = (time: number | undefined): string => {
  if (time == null) return 'N/A';
  return time < 1000 ? `${time}ms` : `${(time / 1000).toFixed(1)}s`;
};

const getStatusColor = (status: string): string => 
  STATUS_COLORS[status as keyof typeof STATUS_COLORS] || STATUS_COLORS.default;

const getStatusBgColor = (status: string): string => 
  STATUS_BG_COLORS[status as keyof typeof STATUS_BG_COLORS] || STATUS_BG_COLORS.default;

export function ServiceCard({
  service,
  isFavorite,
  onToggleFavoriteAction,
  onServiceClickAction,
}: ServiceCardProps) {
  const { status, isLoading, refresh } = useServiceStatus(service.id);
  const { status: currentStatus, responseTime, lastChecked, error } = status;

  return (
    <div className="group relative bg-card border border-border/50 rounded-xl p-6 hover:shadow-lg hover:border-border transition-all duration-200 hover:-translate-y-1">
      {/* Favorite Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavoriteAction();
        }}
        className={`absolute top-4 right-4 p-2 rounded-lg transition-all duration-200 ${
          isFavorite
            ? 'text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 hover:bg-yellow-100 dark:hover:bg-yellow-900/30'
            : 'text-muted-foreground hover:text-foreground hover:bg-accent opacity-0 group-hover:opacity-100'
        }`}
        title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        aria-label={isFavorite ? 'Remove favorite' : 'Add to favorites'}
      >
        {isFavorite ? (
          <StarIcon className="w-4 h-4 fill-current" aria-hidden="true" />
        ) : (
          <Star className="w-4 h-4" aria-hidden="true" />
        )}
      </button>

      {/* Header */}
      <div
        className="flex items-start space-x-4 cursor-pointer mb-4"
        onClick={onServiceClickAction}
      >
        <div className="flex-shrink-0 p-3 bg-muted/50 rounded-lg group-hover:bg-muted transition-colors">
          <div className="text-2xl text-foreground">
            <service.icon aria-hidden="true" />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
            {service.name}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {service.description}
          </p>
          <div className="flex items-center space-x-2 mt-2">
            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md">
              {service.category}
            </span>
          </div>
        </div>
      </div>

      {/* Status Section */}
      <div className={`mb-4 p-4 rounded-lg ${getStatusBgColor(currentStatus)}`}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <StatusIndicator status={currentStatus} size="sm" />
            <span
              className={`text-sm font-medium ${getStatusColor(currentStatus)}`}
              aria-live="polite"
            >
              {currentStatus.charAt(0).toUpperCase() + currentStatus.slice(1)}
            </span>
          </div>
          <StatusBadge status={currentStatus} />
        </div>

        {error && (
          <div
            className="flex items-start space-x-2 mt-2 p-2 bg-red-50 dark:bg-red-900/20 rounded-md"
            role="alert"
          >
            <AlertCircle
              className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <p
              className="text-xs text-red-700 dark:text-red-300 overflow-hidden text-ellipsis"
              title={error}
            >
              {error}
            </p>
          </div>
        )}
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center space-x-2 p-3 bg-muted/30 rounded-lg">
          <Zap className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
          <div>
            <p className="text-xs text-muted-foreground font-medium">Response</p>
            <p className="text-sm font-semibold text-foreground">
              {formatResponseTime(responseTime)}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 p-3 bg-muted/30 rounded-lg">
          <Clock className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
          <div>
            <p className="text-xs text-muted-foreground font-medium">Last Check</p>
            <p className="text-sm font-semibold text-foreground">
              {lastChecked.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-border/50">
        <button
          onClick={(e) => {
            e.stopPropagation();
            refresh();
          }}
          disabled={isLoading}
          className="flex items-center space-x-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-all duration-200 disabled:opacity-50"
          aria-label="Refresh service status"
        >
          <RefreshCw
            className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`}
            aria-hidden="true"
          />
          <span>Refresh</span>
        </button>

        <div className="flex items-center space-x-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onServiceClickAction();
            }}
            className="px-3 py-2 text-sm text-primary hover:text-primary/80 hover:bg-primary/10 rounded-lg transition-all duration-200 font-medium"
            aria-label="View service details"
          >
            Details
          </button>

          <a
            href={service.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center space-x-1 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-all duration-200"
            aria-label="Visit service website"
          >
            <span>Visit</span>
            <ExternalLink className="w-3 h-3" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}