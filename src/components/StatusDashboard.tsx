'use client';

import { useState, useMemo } from 'react';
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
import { RefreshCw, Activity } from 'lucide-react';

const categories = [
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

export function StatusDashboard() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [exportMenuOpen, setExportMenuOpen] = useState(false);
  
  const serviceIds = services.map(s => s.id);
  const { statuses, isLoading, refresh } = useAllServiceStatus(serviceIds);
  const { favoriteServices, toggleFavorite, isFavorite } = useFavorites(services);

  // Convert statuses array to record for easier access
  const statusRecord = useMemo(() => {
    const record: Record<string, any> = {};
    statuses.forEach((status, index) => {
      record[serviceIds[index]] = status;
    });
    return record;
  }, [statuses, serviceIds]);

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
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'status':
          const statusA = statusRecord[a.id]?.status || 'checking';
          const statusB = statusRecord[b.id]?.status || 'checking';
          const statusOrder = { online: 0, degraded: 1, checking: 2, offline: 3 };
          return statusOrder[statusA as keyof typeof statusOrder] - statusOrder[statusB as keyof typeof statusOrder];
        case 'category':
          return a.category.localeCompare(b.category);
        case 'response-time':
          const timeA = statusRecord[a.id]?.responseTime || 999999;
          const timeB = statusRecord[b.id]?.responseTime || 999999;
          return timeA - timeB;
        default: // 'name'
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [selectedCategory, searchQuery, statusFilter, sortBy, statusRecord]);

  const getStatusCounts = () => {
    const counts = {
      online: 0,
      offline: 0,
      degraded: 0,
      checking: 0,
    };

    statuses.forEach(status => {
      counts[status.status]++;
    });

    return counts;
  };

  const statusCounts = getStatusCounts();
  const totalServices = statuses.length;
  const operationalPercentage = totalServices > 0 
    ? Math.round((statusCounts.online / totalServices) * 100) 
    : 0;

  const handleToggleSearch = () => {
    if ((window as any).focusSearchBar) {
      (window as any).focusSearchBar();
    }
  };

  const handleExport = () => {
    setExportMenuOpen(!exportMenuOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Activity className="w-8 h-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  Service Status Dashboard
                </h1>
                <p className="text-sm text-muted-foreground">
                  Real-time monitoring of service availability
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <ExportButton services={services} statuses={statusRecord} />
              <button
                onClick={refresh}
                disabled={isLoading}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
                title="Refresh all services"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                <span>Refresh All</span>
              </button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-6">
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            statusFilter={statusFilter}
            onStatusFilterChange={setStatusFilter}
            sortBy={sortBy}
            onSortChange={setSortBy}
            totalResults={filteredAndSortedServices.length}
          />
        </div>

        {/* Favorites Bar */}
        <FavoritesBar
          favorites={favoriteServices}
          onServiceClick={setSelectedService}
        />

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Overall Status</p>
                <p className="text-2xl font-bold text-foreground">
                  {operationalPercentage}%
                </p>
                <p className="text-xs text-muted-foreground">Operational</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                <Activity className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Online</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {statusCounts.online}
                </p>
                <p className="text-xs text-muted-foreground">Services</p>
              </div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Degraded</p>
                <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                  {statusCounts.degraded}
                </p>
                <p className="text-xs text-muted-foreground">Services</p>
              </div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Offline</p>
                <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                  {statusCounts.offline}
                </p>
                <p className="text-xs text-muted-foreground">Services</p>
              </div>
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border text-foreground hover:bg-accent'
              }`}
            >
              {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedServices.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service}
              isFavorite={isFavorite(service.id)}
              onToggleFavorite={() => toggleFavorite(service.id)}
              onServiceClick={() => setSelectedService(service)}
            />
          ))}
        </div>

        {filteredAndSortedServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {searchQuery || statusFilter !== 'all' 
                ? 'No services match your current filters.' 
                : 'No services found in this category.'
              }
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <LiveTimestamp />
            <p className="text-sm text-muted-foreground">
              Auto-refresh every 30 seconds
            </p>
          </div>
        </div>
      </footer>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        isFavorite={selectedService ? isFavorite(selectedService.id) : false}
        onToggleFavorite={() => selectedService && toggleFavorite(selectedService.id)}
      />

      {/* Keyboard Shortcuts */}
      <KeyboardShortcuts
        onRefreshAll={refresh}
        onToggleSearch={handleToggleSearch}
        onExport={handleExport}
      />
    </div>
  );
} 