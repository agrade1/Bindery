import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { ALADIN_BASE_URL, ALADIN_KEY } from '@/constants/aladin';

export function useAladinQuery<T>(
  key: string[],
  endpoint: string,
  params: Record<string, string | number> = {},
  staleTime: number = 1000 * 60,
): UseQueryResult<T> {
  const searchParams = new URLSearchParams({
    TTBKey: ALADIN_KEY,
    output: 'js',
    Version: '20131101',
    ...Object.fromEntries(Object.entries(params).map(([k, v]) => [k, String(v)])),
  });

  const url = `${ALADIN_BASE_URL}${endpoint}?${searchParams.toString()}`;

  return useQuery<T>({
    queryKey: key,
    queryFn: async () => {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Aladin API 오류: ${res.status}`);
      return res.json();
    },
    staleTime,
  });
}
