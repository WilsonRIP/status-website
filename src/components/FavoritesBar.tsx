'use client';

import { Service } from '@/types/status';
import { useServiceStatus } from '@/lib/hooks/useServiceStatus';
import { StatusIndicator } from './StatusIndicator';
import { Star, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

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

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [favorites]);

  if (favorites.length === 0) {
    return (
      <div className="bg-gradient-to-r from-card to-card/80 border border-border/50 rounded-xl p-6 mb-8">
        <div className="flex items-center justify-center text-center">
          <div className="flex flex-col items-center space-y-3">
            <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-full">
              <Heart className="w-8 h-8 text-yellow-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">No favorites yet</h3>
              <p className="text-muted-foreground">
                Click the star icon on any service to add it to your favorites
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-card to-card/80 border border-border/50 rounded-xl p-6 mb-8 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-foreground flex items-center">
          <div className="p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg mr-3">
            <Star className="w-5 h-5 text-yellow-500" />
          </div>
          Favorites ({favorites.length})
        </h2>
        
        {favorites.length > 4 && (
          <div className="flex space-x-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="p-2 rounded-lg hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-sm"
              title="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="p-2 rounded-lg hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-sm"
              title="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
      
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2"
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'text-green-600 dark:text-green-400';
      case 'offline': return 'text-red-600 dark:text-red-400';
      case 'degraded': return 'text-yellow-600 dark:text-yellow-400';
      default: return 'text-blue-600 dark:text-blue-400';
    }
  };

  const formatResponseTime = (time: number | undefined) => {
    if (!time) return 'N/A';
    if (time < 1000) return `${time}ms`;
    return `${(time / 1000).toFixed(1)}s`;
  };

  return (
    <button
      onClick={onClick}
      className="flex-shrink-0 bg-background border border-border/50 rounded-xl p-4 hover:bg-accent hover:border-border hover:shadow-md transition-all duration-200 min-w-[140px] group"
    >
      <div className="flex flex-col items-center space-y-3">
        <div className="relative">
          <div className="p-3 bg-muted/50 rounded-lg group-hover:bg-muted transition-colors">
            <div className="text-2xl text-foreground">
              <service.icon />
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1">
            <StatusIndicator status={status.status} size="sm" />
          </div>
        </div>
        
        <div className="text-center space-y-1">
          <div className="text-sm font-semibold text-foreground truncate max-w-[120px] group-hover:text-primary transition-colors">
            {service.name}
          </div>
          <div className={`text-xs font-medium ${getStatusColor(status.status)}`}>
            {status.status.charAt(0).toUpperCase() + status.status.slice(1)}
          </div>
          <div className="text-xs text-muted-foreground">
            {formatResponseTime(status.responseTime)}
          </div>
        </div>
      </div>
    </button>
  );
} 