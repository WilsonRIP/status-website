'use client';

import { Service } from '@/types/status';
import { useServiceStatus } from '@/lib/hooks/useServiceStatus';
import { StatusIndicator } from './StatusIndicator';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';

interface FavoritesBarProps {
  favorites: Service[];
  onServiceClick: (service: Service) => void;
}

export function FavoritesBar({ favorites, onServiceClick }: FavoritesBarProps) {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (favorites.length === 0) {
    return (
      <div className="bg-card border border-border rounded-lg p-4 mb-6">
        <div className="flex items-center justify-center text-muted-foreground">
          <Star className="w-5 h-5 mr-2" />
          <span>No favorite services yet. Click the star icon on any service to add it here.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-foreground flex items-center">
          <Star className="w-5 h-5 mr-2 text-yellow-500" />
          Favorites ({favorites.length})
        </h2>
        
        {favorites.length > 6 && (
          <div className="flex space-x-1">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="p-1 rounded-md hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="p-1 rounded-md hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
      
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex space-x-3 overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {favorites.map((service) => (
          <FavoriteServiceCard
            key={service.id}
            service={service}
            onClick={() => onServiceClick(service)}
          />
        ))}
      </div>
    </div>
  );
}

function FavoriteServiceCard({ service, onClick }: { service: Service; onClick: () => void }) {
  const { status } = useServiceStatus(service.id);

  return (
    <button
      onClick={onClick}
      className="flex-shrink-0 bg-background border border-border rounded-lg p-3 hover:bg-accent transition-colors min-w-[120px]"
    >
      <div className="flex flex-col items-center space-y-2">
        <div className="relative">
          <div className="text-2xl">
            <service.icon />
          </div>
          <div className="absolute -bottom-1 -right-1">
            <StatusIndicator status={status.status} size="sm" />
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-sm font-medium text-foreground truncate max-w-[100px]">
            {service.name}
          </div>
          <div className="text-xs text-muted-foreground">
            {status.responseTime ? `${status.responseTime}ms` : 'N/A'}
          </div>
        </div>
      </div>
    </button>
  );
} 