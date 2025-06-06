'use client';

import { useState, useEffect } from 'react';
import { Service } from '@/types/status';

const FAVORITES_KEY = 'status-dashboard-favorites';

export function useFavorites(services: Service[]) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      if (stored) {
        setFavoriteIds(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Failed to load favorites:', error);
    }
  }, []);

  // Save favorites to localStorage whenever favoriteIds changes
  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoriteIds));
    } catch (error) {
      console.error('Failed to save favorites:', error);
    }
  }, [favoriteIds]);

  const toggleFavorite = (serviceId: string) => {
    setFavoriteIds(prev => {
      if (prev.includes(serviceId)) {
        return prev.filter(id => id !== serviceId);
      } else {
        return [...prev, serviceId];
      }
    });
  };

  const isFavorite = (serviceId: string) => favoriteIds.includes(serviceId);

  const favoriteServices = services.filter(service => favoriteIds.includes(service.id));

  const clearFavorites = () => setFavoriteIds([]);

  return {
    favoriteServices,
    toggleFavorite,
    isFavorite,
    clearFavorites,
    favoriteCount: favoriteIds.length
  };
} 