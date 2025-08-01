'use client';

import { useState, useMemo, useCallback } from 'react';
import { services } from '@/lib/data/services';
import { useAllServiceStatus } from '@/lib/hooks/useServiceStatus';
import { useFavorites } from '@/lib/hooks/useFavorites';
import { Service } from '@/types/status';
import { ServiceCard } from './ServiceCard';
import { ServiceModal } from './ServiceModal';
import { SearchBar } from './SearchBar';
import { FavoritesBar } from './FavoritesBar';
import { ExportButton } from './ExportButton';
import { KeyboardShortcuts } from './KeyboardShortcuts';
import ThemeToggle from './ThemeToggle';
import { LiveTimestamp } from './LiveTimestamp';
import { RefreshCw, Activity, AlertTriangle, CheckCircle, XCircle, Search } from 'lucide-react';

const CATEGORIES = [
  'all',
  'gaming',
  'cloud',
  'development',
  'social',
  'entertainment',
  'finance',
  'storage',
  'security',
  'analytics'
] as const;

// Status type constants
type StatusType = 'online' | 'offline' | 'degraded' | 'checking';

// Status configuration for consistent theming
const STATUS_CONFIG = {
  online: {
    label: 'Online',
    icon: CheckCircle,
    color: 'text-green-600 dark:text-green-400',
    bg: 'bg-green-100 dark:bg-green-900/20',
    dot: 'bg-green-500',
  },
  degraded: {
    label: 'Degraded',
    icon: AlertTriangle,
    color: 'text-yellow-600 dark:text-yellow-400',
    bg: 'bg-yellow-100 dark:bg-yellow-900/20',
    dot: 'bg-yellow-500',
  },
  offline: {
    label: 'Offline',
    icon: XCircle,
    color: 'text-red-600 dark:text-red-400',
    bg: 'bg-red-100 dark:bg-red-900/20',
    dot: 'bg-red-500',
  },
  checking: {
    label: 'Checking',
    icon: Activity,
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-100 dark:bg-blue-900/20',
    dot: 'bg-blue-500',
  },
} as const;

export function StatusDashboard() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusType | 'all'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'name-desc' | 'status' | 'category' | 'response-time'>('name');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  
  const serviceIds = useMemo(() => services.map(s => s.id), []);
  const { statuses, isLoading, refresh } = useAllServiceStatus(serviceIds);
  const { favoriteServices, toggleFavorite, isFavorite } = useFavorites(services);

  // Convert statuses array to record for efficient access
  const statusRecord = useMemo(() => {
    const record: Record<string, { status: StatusType; responseTime?: number; lastChecked: Date; error?: string }> = {};
    statuses.forEach((status, index) => {
      record[serviceIds[index]] = status;
    });
    return record;
  }, [statuses, serviceIds]);

  // Create status record for export (matching ExportButton interface)
  const exportStatusRecord = useMemo(() => {
    const record: Record<string, { status: StatusType; responseTime?: number; lastChecked: Date; error?: string }> = {};
    statuses.forEach((status, index) => {
      record[serviceIds[index]] = status;
    });
    return record;
  }, [statuses, serviceIds]);

  // Calculate status counts efficiently
  const statusCounts = useMemo(() => {
    const counts = {
      online: 0,
      degraded: 0,
      offline: 0,
      checking: 0,
    };

    statuses.forEach(status => {
      if (status.status in counts) {
        counts[status.status as keyof typeof counts]++;
      } else {
        counts.checking++;
      }
    });

    return counts;
  }, [statuses]);

  const totalServices = statuses.length;
  const operationalPercentage = totalServices > 0 
    ? Math.round((statusCounts.online / totalServices) * 100) 
    : 0;

  // Memoized filtered and sorted services
  const filteredAndSortedServices = useMemo(() => {
    let filtered = services;

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query) ||
        service.category.toLowerCase().includes(query)
      );
    }

    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(service => {
        const status = statusRecord[service.id]?.status || 'checking';
        return status === statusFilter;
      });
    }

    // Sorting
    return [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'status':
          const statusOrder: Record<StatusType, number> = { 
            online: 0, 
            degraded: 1, 
            checking: 2, 
            offline: 3 
          };
          const statusA = statusRecord[a.id]?.status || 'checking';
          const statusB = statusRecord[b.id]?.status || 'checking';
          return statusOrder[statusA] - statusOrder[statusB];
        case 'category':
          return a.category.localeCompare(b.category);
        case 'response-time':
          const timeA = statusRecord[a.id]?.responseTime ?? 999999;
          const timeB = statusRecord[b.id]?.responseTime ?? 999999;
          return timeA - timeB;
        default: // 'name'
          return a.name.localeCompare(b.name);
      }
    });
  }, [selectedCategory, searchQuery, statusFilter, sortBy, statusRecord]);

  const getStatusMessage = useCallback(() => {
    if (statusCounts.offline > 0) {
      return `${statusCounts.offline} service${statusCounts.offline > 1 ? 's' : ''} experiencing issues`;
    } else if (statusCounts.degraded > 0) {
      return `${statusCounts.degraded} service${statusCounts.degraded > 1 ? 's' : ''} with degraded performance`;
    } else if (statusCounts.online === totalServices) {
      return 'All services operational';
    } else {
      return 'Checking service status...';
    }
  }, [statusCounts, totalServices]);

  const handleToggleSearch = useCallback(() => {
    if (typeof window !== 'undefined' && (window as { focusSearchBar?: () => void }).focusSearchBar) {
      (window as { focusSearchBar?: () => void }).focusSearchBar!();
    }
  }, []);

  const handleExport = useCallback(() => {
    // Export functionality handled by ExportButton component
  }, []);

  const handleServiceClick = useCallback((service: Service) => {
    setSelectedService(service);
  }, []);

  const handleToggleFavorite = useCallback((serviceId: string) => {
    toggleFavorite(serviceId);
  }, [toggleFavorite]);

  const handleStatusFilterChange = useCallback((status: string) => {
    setStatusFilter(status as StatusType | 'all');
  }, []);

  const handleSortChange = useCallback((sort: string) => {
    setSortBy(sort as 'name' | 'name-desc' | 'status' | 'category' | 'response-time');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-primary/10 rounded-xl">
                <Activity className="w-8 h-8 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                  Service Status
                </h1>
                <p className="text-sm text-muted-foreground mt-1">
                  Real-time monitoring of {totalServices} services
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <ExportButton 
                services={services} 
                statuses={exportStatusRecord} 
                aria-label="Export service status data"
              />
              <button
                onClick={() => refresh()}
                disabled={isLoading}
                className="inline-flex items-center space-x-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 disabled:opacity-50 shadow-sm hover:shadow-md"
                title="Refresh all services"
                aria-label="Refresh all services"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} aria-hidden="true" />
                <span className="font-medium">Refresh</span>
              </button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            statusFilter={statusFilter}
            onStatusFilterChange={handleStatusFilterChange}
            sortBy={sortBy}
            onSortChange={handleSortChange}
            totalResults={filteredAndSortedServices.length}
          />
        </div>

        {/* Favorites Bar */}
        <FavoritesBar
          favorites={favoriteServices}
          onServiceClickAction={handleServiceClick}
        />

        {/* Enhanced Stats Section */}
        <div className="mb-8">
          {/* Overall Status Card */}
          <div className="bg-gradient-to-r from-card to-card/80 border border-border/50 rounded-2xl p-6 mb-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-xl ${operationalPercentage === 100 
                  ? STATUS_CONFIG.online.bg 
                  : operationalPercentage >= 90 
                    ? STATUS_CONFIG.degraded.bg 
                    : STATUS_CONFIG.offline.bg}`}>
                  {operationalPercentage === 100 ? (
                    <CheckCircle className={`w-8 h-8 ${STATUS_CONFIG.online.color}`} aria-hidden="true" />
                  ) : operationalPercentage >= 90 ? (
                    <AlertTriangle className={`w-8 h-8 ${STATUS_CONFIG.degraded.color}`} aria-hidden="true" />
                  ) : (
                    <XCircle className={`w-8 h-8 ${STATUS_CONFIG.offline.color}`} aria-hidden="true" />
                  )}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {operationalPercentage}% Operational
                  </h2>
                  <p className="text-muted-foreground" aria-live="polite">
                    {getStatusMessage()}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Last Updated</p>
                <LiveTimestamp />
              </div>
            </div>
          </div>

          {/* Status Counts Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(STATUS_CONFIG).map(([key, config]) => (
              <div 
                key={key} 
                className="bg-card border border-border/50 rounded-xl p-4 hover:shadow-md transition-all duration-200"
                aria-label={`${config.label}: ${statusCounts[key as keyof typeof statusCounts]} services`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">{config.label}</p>
                    <p className={`text-2xl font-bold ${config.color}`}>
                      {statusCounts[key as keyof typeof statusCounts]}
                    </p>
                  </div>
                  <div className={`w-3 h-3 ${config.dot} rounded-full shadow-sm ${key === 'checking' ? 'animate-pulse' : ''}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Category Filter */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">Categories</h3>
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-card border border-border/50 text-foreground hover:bg-accent hover:border-border hover:shadow-sm'
                }`}
                aria-pressed={selectedCategory === category}
                aria-label={`Filter by ${category === 'all' ? 'all categories' : category} services`}
              >
                {category === 'all' ? 'All Services' : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">
              {selectedCategory === 'all' ? 'All Services' : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
            </h3>
            <p className="text-sm text-muted-foreground">
              {filteredAndSortedServices.length} service{filteredAndSortedServices.length !== 1 ? 's' : ''}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedServices.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service}
                isFavorite={isFavorite(service.id)}
                onToggleFavoriteAction={() => handleToggleFavorite(service.id)}
                onServiceClickAction={() => handleServiceClick(service)}
              />
            ))}
          </div>

          {filteredAndSortedServices.length === 0 && (
            <div 
              className="text-center py-16 bg-card border border-border/50 rounded-2xl"
              role="region"
              aria-live="polite"
            >
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">No services found</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                {searchQuery || statusFilter !== 'all' 
                  ? 'Try adjusting your search terms or filters to find what you\'re looking for.' 
                  : 'No services are available in this category at the moment.'
                }
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Footer */}
      <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <LiveTimestamp />
              <span className="text-sm text-muted-foreground">•</span>
              <p className="text-sm text-muted-foreground">
                Auto-refresh every 30 seconds
              </p>
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>Powered by Next.js & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        isFavorite={selectedService ? isFavorite(selectedService.id) : false}
        onToggleFavorite={() => selectedService && handleToggleFavorite(selectedService.id)}
      />

      {/* Keyboard Shortcuts */}
      <KeyboardShortcuts
        onRefreshAllAction={refresh}
        onToggleSearchAction={handleToggleSearch}
        onExportAction={handleExport}
      />
    </div>
  );
}