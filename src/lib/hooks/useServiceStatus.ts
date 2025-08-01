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
  const { data, error, isLoading, mutate } = useSWR(
    serviceIds.length > 0 ? serviceIds : null,
    async (ids: string[]) => {
      const promises = ids.map(id => 
        fetch(`/api/status/${id}`).then(res => res.json())
      );
      return Promise.all(promises);
    },
    {
      refreshInterval,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      dedupingInterval: 5000,
    }
  );

  const statuses = serviceIds.map((id, index) => ({
    id,
    status: isLoading ? 'checking' : (data?.[index]?.status || 'offline'),
    responseTime: data?.[index]?.responseTime,
    lastChecked: new Date(),
    error: error?.message || data?.[index]?.error,
  }));

  return {
    statuses,
    isLoading,
    hasError: !!error,
    refresh: mutate,
  };
} 