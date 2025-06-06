'use client';

import { useState } from 'react';
import { Search, X, Filter } from 'lucide-react';

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

  return (
    <div className="space-y-4">
      {/* Main Search Bar */}
      <div className="relative flex items-center space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <input
            type="text"
            placeholder="Search services by name or description..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-10 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        
        <button
          onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
          className={`flex items-center space-x-2 px-4 py-3 rounded-lg border transition-colors ${
            showAdvancedFilters 
              ? 'bg-primary text-primary-foreground border-primary' 
              : 'bg-card border-border hover:bg-accent'
          }`}
        >
          <Filter className="w-4 h-4" />
          <span className="text-sm font-medium">Filters</span>
        </button>
      </div>

      {/* Advanced Filters */}
      {showAdvancedFilters && (
        <div className="bg-card border border-border rounded-lg p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Status Filter */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Filter by Status
              </label>
              <select
                value={statusFilter}
                onChange={(e) => onStatusFilterChange(e.target.value)}
                className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="all">All Statuses</option>
                <option value="online">Online Only</option>
                <option value="offline">Offline Only</option>
                <option value="degraded">Degraded Only</option>
                <option value="checking">Checking</option>
              </select>
            </div>

            {/* Sort Options */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Sort by
              </label>
              <select
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
                className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="name">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
                <option value="status">Status</option>
                <option value="category">Category</option>
                <option value="response-time">Response Time</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="pt-2 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Showing {totalResults} service{totalResults !== 1 ? 's' : ''}
              {searchQuery && (
                <span> matching "{searchQuery}"</span>
              )}
            </p>
          </div>
        </div>
      )}
    </div>
  );
} 