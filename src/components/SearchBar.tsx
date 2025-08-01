'use client';

import { useState } from 'react';
import { Search, X, Filter, SlidersHorizontal, SortAsc } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  statusFilter: string;
  onStatusFilterChange: (status: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  totalResults: number;
}

export function SearchBar({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  sortBy,
  onSortChange,
  totalResults
}: SearchBarProps) {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  // Expose focus method via global function for keyboard shortcuts
  useState(() => {
    (window as any).focusSearchBar = () => {
      const searchInput = document.querySelector('input[placeholder*="Search services"]') as HTMLInputElement;
      if (searchInput) {
        searchInput.focus();
      }
    };
  }, []);

  const getStatusFilterLabel = (status: string) => {
    switch (status) {
      case 'online': return '🟢 Online';
      case 'offline': return '🔴 Offline';
      case 'degraded': return '🟡 Degraded';
      case 'checking': return '🔵 Checking';
      default: return 'All Statuses';
    }
  };

  const getSortLabel = (sort: string) => {
    switch (sort) {
      case 'name': return 'Name (A-Z)';
      case 'name-desc': return 'Name (Z-A)';
      case 'status': return 'Status';
      case 'category': return 'Category';
      case 'response-time': return 'Response Time';
      default: return 'Name (A-Z)';
    }
  };

  return (
    <div className="space-y-4">
      {/* Main Search Bar */}
      <div className="relative flex items-center space-x-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <input
            type="text"
            placeholder="Search services by name, description, or category..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-12 py-4 bg-card border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 text-base"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1 rounded-md hover:bg-accent"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        
        <button
          onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
          className={`flex items-center space-x-2 px-4 py-4 rounded-xl border transition-all duration-200 ${
            showAdvancedFilters 
              ? 'bg-primary text-primary-foreground border-primary shadow-md' 
              : 'bg-card border-border/50 hover:bg-accent hover:border-border hover:shadow-sm'
          }`}
        >
          <SlidersHorizontal className="w-5 h-5" />
          <span className="font-medium">Filters</span>
        </button>
      </div>

      {/* Quick Status Filters */}
      <div className="flex flex-wrap gap-2">
        {['all', 'online', 'degraded', 'offline'].map((status) => (
          <button
            key={status}
            onClick={() => onStatusFilterChange(status)}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              statusFilter === status
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'bg-card border border-border/50 text-foreground hover:bg-accent hover:border-border'
            }`}
          >
            {getStatusFilterLabel(status)}
          </button>
        ))}
      </div>

      {/* Advanced Filters */}
      {showAdvancedFilters && (
        <div className="bg-card border border-border/50 rounded-xl p-6 space-y-6 shadow-sm">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Advanced Filters</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Status Filter */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Filter by Status
              </label>
              <div className="space-y-2">
                {[
                  { value: 'all', label: 'All Statuses', icon: '📊' },
                  { value: 'online', label: 'Online Only', icon: '🟢' },
                  { value: 'offline', label: 'Offline Only', icon: '🔴' },
                  { value: 'degraded', label: 'Degraded Only', icon: '🟡' },
                  { value: 'checking', label: 'Checking', icon: '🔵' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => onStatusFilterChange(option.value)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-200 ${
                      statusFilter === option.value
                        ? 'bg-primary/10 border border-primary/20 text-primary'
                        : 'bg-muted/30 hover:bg-muted/50 border border-transparent'
                    }`}
                  >
                    <span className="text-lg">{option.icon}</span>
                    <span className="font-medium">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Options */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Sort by
              </label>
              <div className="space-y-2">
                {[
                  { value: 'name', label: 'Name (A-Z)', icon: '🔤' },
                  { value: 'name-desc', label: 'Name (Z-A)', icon: '🔤' },
                  { value: 'status', label: 'Status Priority', icon: '⚡' },
                  { value: 'category', label: 'Category', icon: '📁' },
                  { value: 'response-time', label: 'Response Time', icon: '⏱️' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => onSortChange(option.value)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-200 ${
                      sortBy === option.value
                        ? 'bg-primary/10 border border-primary/20 text-primary'
                        : 'bg-muted/30 hover:bg-muted/50 border border-transparent'
                    }`}
                  >
                    <span className="text-lg">{option.icon}</span>
                    <span className="font-medium">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="pt-4 border-t border-border/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Results:</span>
                <span className="text-lg font-semibold text-foreground">
                  {totalResults} service{totalResults !== 1 ? 's' : ''}
                </span>
              </div>
              
              {(searchQuery || statusFilter !== 'all') && (
                <button
                  onClick={() => {
                    onSearchChange('');
                    onStatusFilterChange('all');
                  }}
                  className="text-sm text-primary hover:text-primary/80 font-medium"
                >
                  Clear all filters
                </button>
              )}
            </div>
            
            {searchQuery && (
              <p className="text-sm text-muted-foreground mt-2">
                Searching for: <span className="font-medium text-foreground">"{searchQuery}"</span>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 