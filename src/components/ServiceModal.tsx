'use client';

import { useState, useEffect } from 'react';
import { Service, ServiceStatus } from '@/types/status';
import { useServiceStatus } from '@/lib/hooks/useServiceStatus';
import { StatusBadge, StatusIndicator } from './StatusIndicator';
import { X, ExternalLink, RefreshCw, Clock, Zap, Star, StarIcon } from 'lucide-react';

interface ServiceModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export function ServiceModal({ 
  service, 
  isOpen, 
  onClose, 
  isFavorite,
  onToggleFavorite 
}: ServiceModalProps) {
  const { status, isLoading, refresh } = useServiceStatus(
    service?.id || '', 
    5000 // Refresh every 5 seconds for modal
  );
  
  const [responseHistory, setResponseHistory] = useState<number[]>([]);

  useEffect(() => {
    if (status.responseTime) {
      setResponseHistory(prev => [...prev.slice(-19), status.responseTime!]);
    }
  }, [status.responseTime]);

  if (!isOpen || !service) return null;

  const formatResponseTime = (time: number | undefined) => {
    if (!time) return 'N/A';
    return `${time}ms`;
  };

  const formatLastChecked = (date: Date) => {
    const now = new Date();
    const diff = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diff < 60) return `${diff} seconds ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
    return `${Math.floor(diff / 3600)} hours ago`;
  };

  const averageResponseTime = responseHistory.length > 0 
    ? Math.round(responseHistory.reduce((a, b) => a + b, 0) / responseHistory.length)
    : status.responseTime || 0;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card border border-border rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-4">
            <div className="text-3xl">
              <service.icon />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">{service.name}</h2>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={onToggleFavorite}
              className={`p-2 rounded-md transition-colors ${
                isFavorite 
                  ? 'text-yellow-500 hover:text-yellow-600' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            >
              {isFavorite ? <StarIcon className="w-5 h-5 fill-current" /> : <Star className="w-5 h-5" />}
            </button>
            
            <button
              onClick={onClose}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Current Status */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-background rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Status</span>
                <StatusIndicator status={status.status} size="md" />
              </div>
              <StatusBadge status={status.status} />
            </div>

            <div className="bg-background rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Response Time</span>
                <Zap className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="text-2xl font-bold text-foreground">
                {formatResponseTime(status.responseTime)}
              </div>
              <div className="text-xs text-muted-foreground">
                Avg: {formatResponseTime(averageResponseTime)}
              </div>
            </div>

            <div className="bg-background rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Last Checked</span>
                <Clock className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="text-sm font-medium text-foreground">
                {formatLastChecked(status.lastChecked)}
              </div>
              <button
                onClick={refresh}
                disabled={isLoading}
                className="flex items-center space-x-1 text-xs text-primary hover:text-primary/80 transition-colors mt-1"
              >
                <RefreshCw className={`w-3 h-3 ${isLoading ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </button>
            </div>
          </div>

          {/* Response Time Chart */}
          {responseHistory.length > 0 && (
            <div className="bg-background rounded-lg p-4">
              <h3 className="text-lg font-semibold text-foreground mb-4">Response Time History</h3>
              <div className="flex items-end space-x-1 h-24">
                {responseHistory.map((time, index) => {
                  const height = Math.max((time / Math.max(...responseHistory)) * 100, 2);
                  return (
                    <div
                      key={index}
                      className="bg-primary rounded-t flex-1 transition-all"
                      style={{ height: `${height}%` }}
                      title={`${time}ms`}
                    />
                  );
                })}
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>20 checks ago</span>
                <span>Latest</span>
              </div>
            </div>
          )}

          {/* Service Details */}
          <div className="bg-background rounded-lg p-4">
            <h3 className="text-lg font-semibold text-foreground mb-4">Service Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Category:</span>
                <span className="font-medium text-foreground capitalize">{service.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">URL:</span>
                <a 
                  href={service.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:text-primary/80 flex items-center space-x-1"
                >
                  <span>{service.url.replace(/https?:\/\//, '')}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              {service.checkUrl && service.checkUrl !== service.url && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status Endpoint:</span>
                  <span className="font-medium text-foreground text-xs">
                    {service.checkUrl.replace(/https?:\/\//, '')}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Error Details */}
          {status.error && (
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-destructive mb-2">Error Details</h3>
              <p className="text-sm text-destructive/80">{status.error}</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-border">
          <div className="text-xs text-muted-foreground">
            Auto-refreshing every 5 seconds
          </div>
          
          <div className="flex space-x-2">
            <a
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              <span>Visit Service</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 