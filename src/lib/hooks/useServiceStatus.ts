import useSWR from 'swr';
import { ServiceStatus, StatusResponse } from '@/types/status';

const fetcher = async (url: string): Promise<StatusResponse> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch status');
  }
  return response.json();
};

export function useServiceStatus(serviceId: string, refreshInterval = 30000) {
  const { data, error, isLoading, mutate } = useSWR(
    `/api/status/${serviceId}`,
    fetcher,
    {
      refreshInterval,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      dedupingInterval: 5000,
    }
  );

  const status: ServiceStatus = {
    id: serviceId,
    status: isLoading ? 'checking' : (data?.status || 'offline'),
    responseTime: data?.responseTime,
    lastChecked: new Date(),
    error: error?.message || data?.error,
  };

  return {
    status,
    error: !!error,
    isLoading,
    refresh: mutate,
  };
}

export function useAllServiceStatus(serviceIds: string[], refreshInterval = 30000) {
  const results = serviceIds.map(id => useServiceStatus(id, refreshInterval));
  
  return {
    statuses: results.map(r => r.status),
    isLoading: results.some(r => r.isLoading),
    hasError: results.some(r => r.error),
    refresh: () => results.forEach(r => r.refresh()),
  };
} 