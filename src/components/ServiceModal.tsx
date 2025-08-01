'use client';

import { useState, useEffect } from 'react';
import { Service, ServiceStatus } from '@/types/status';
import { useServiceStatus } from '@/lib/hooks/useServiceStatus';
import { StatusBadge, StatusIndicator } from './StatusIndicator';
import { X, ExternalLink, RefreshCw, Clock, Zap, Star, StarIcon, TrendingUp, AlertCircle, Activity } from 'lucide-react';

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
    if (time < 1000) return `${time}ms`;
    return `${(time / 1000).toFixed(1)}s`;
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'text-green-600 dark:text-green-400';
      case 'offline': return 'text-red-600 dark:text-red-400';
      case 'degraded': return 'text-yellow-600 dark:text-yellow-400';
      default: return 'text-blue-600 dark:text-blue-400';
    }
  };

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-50 dark:bg-green-900/10';
      case 'offline': return 'bg-red-50 dark:bg-red-900/10';
      case 'degraded': return 'bg-yellow-50 dark:bg-yellow-900/10';
      default: return 'bg-blue-50 dark:bg-blue-900/10';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-card border border-border/50 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/50">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-muted/50 rounded-xl">
              <div className="text-3xl text-foreground">
                <service.icon />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">{service.name}</h2>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={onToggleFavorite}
              className={`p-2 rounded-lg transition-all duration-200 ${
                isFavorite 
                  ? 'text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 hover:bg-yellow-100 dark:hover:bg-yellow-900/30' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}
              title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            >
              {isFavorite ? <StarIcon className="w-5 h-5 fill-current" /> : <Star className="w-5 h-5" />}
            </button>
            
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Current Status */}
          <div className={`p-6 rounded-xl ${getStatusBgColor(status.status)}`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <StatusIndicator status={status.status} size="lg" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Current Status</h3>
                  <p className={`text-sm font-medium ${getStatusColor(status.status)}`}>
                    {status.status.charAt(0).toUpperCase() + status.status.slice(1)}
                  </p>
                </div>
              </div>
              <StatusBadge status={status.status} />
            </div>
            
            {status.error && (
              <div className="flex items-start space-x-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-red-700 dark:text-red-300 mb-1">Error Details</h4>
                  <p className="text-sm text-red-600 dark:text-red-400">{status.error}</p>
                </div>
              </div>
            )}
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-background border border-border/50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-muted-foreground font-medium">Response Time</span>
                <Zap className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">
                {formatResponseTime(status.responseTime)}
              </div>
              <div className="text-xs text-muted-foreground">
                Avg: {formatResponseTime(averageResponseTime)}
              </div>
            </div>

            <div className="bg-background border border-border/50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-muted-foreground font-medium">Last Checked</span>
                <Clock className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="text-sm font-semibold text-foreground mb-2">
                {formatLastChecked(status.lastChecked)}
              </div>
              <button
                onClick={refresh}
                disabled={isLoading}
                className="flex items-center space-x-2 text-xs text-primary hover:text-primary/80 transition-colors font-medium"
              >
                <RefreshCw className={`w-3 h-3 ${isLoading ? 'animate-spin' : ''}`} />
                <span>Refresh Now</span>
              </button>
            </div>

            <div className="bg-background border border-border/50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-muted-foreground font-medium">Category</span>
                <Activity className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="text-sm font-semibold text-foreground capitalize">
                {service.category}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Service type
              </div>
            </div>
          </div>

          {/* Response Time Chart */}
          {responseHistory.length > 0 && (
            <div className="bg-background border border-border/50 rounded-xl p-6">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Response Time History</h3>
              </div>
              <div className="flex items-end space-x-1 h-32">
                {responseHistory.map((time, index) => {
                  const maxTime = Math.max(...responseHistory);
                  const height = Math.max((time / maxTime) * 100, 2);
                  const isLatest = index === responseHistory.length - 1;
                  return (
                    <div
                      key={index}
                      className={`rounded-t flex-1 transition-all ${
                        isLatest ? 'bg-primary' : 'bg-primary/60'
                      }`}
                      style={{ height: `${height}%` }}
                      title={`${time}ms`}
                    />
                  );
                })}
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-3">
                <span>20 checks ago</span>
                <span>Latest check</span>
              </div>
            </div>
          )}

          {/* Service Details */}
          <div className="bg-background border border-border/50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Service Information</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-border/30">
                <span className="text-muted-foreground">Category:</span>
                <span className="font-medium text-foreground capitalize">{service.category}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/30">
                <span className="text-muted-foreground">Website:</span>
                <a 
                  href={service.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:text-primary/80 flex items-center space-x-1 transition-colors"
                >
                  <span>{service.url.replace(/https?:\/\//, '')}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              {service.checkUrl && service.checkUrl !== service.url && (
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Status Endpoint:</span>
                  <span className="font-medium text-foreground text-xs">
                    {service.checkUrl.replace(/https?:\/\//, '')}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-border/50 bg-muted/20">
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span>Auto-refreshing every 5 seconds</span>
          </div>
          
          <div className="flex space-x-3">
            <a
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium shadow-sm hover:shadow-md"
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