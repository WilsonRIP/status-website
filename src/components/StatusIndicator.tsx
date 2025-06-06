'use client';

import { ServiceStatus } from '@/types/status';

interface StatusIndicatorProps {
  status: ServiceStatus['status'];
  size?: 'sm' | 'md' | 'lg';
  showPulse?: boolean;
}

export function StatusIndicator({ 
  status, 
  size = 'md', 
  showPulse = true 
}: StatusIndicatorProps) {
  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
  };

  const statusColors = {
    online: 'bg-green-500',
    offline: 'bg-red-500',
    degraded: 'bg-yellow-500',
    checking: 'bg-gray-400',
  };

  const pulseColors = {
    online: 'animate-pulse bg-green-400',
    offline: 'animate-pulse bg-red-400',
    degraded: 'animate-pulse bg-yellow-400',
    checking: 'animate-pulse bg-gray-300',
  };

  return (
    <div className="relative flex items-center">
      <div
        className={`
          ${sizeClasses[size]} 
          ${statusColors[status]} 
          rounded-full
        `}
      />
      {showPulse && status !== 'checking' && (
        <div
          className={`
            absolute 
            ${sizeClasses[size]} 
            ${pulseColors[status]} 
            rounded-full 
            opacity-75
          `}
        />
      )}
    </div>
  );
}

interface StatusBadgeProps {
  status: ServiceStatus['status'];
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const badgeStyles = {
    online: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    offline: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
    degraded: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
    checking: 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400',
  };

  const statusText = {
    online: 'Online',
    offline: 'Offline',
    degraded: 'Degraded',
    checking: 'Checking...',
  };

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium
        ${badgeStyles[status]}
      `}
    >
      <StatusIndicator status={status} size="sm" showPulse={false} />
      {statusText[status]}
    </span>
  );
} 