import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { ALADIN_KEY } from '@/constants/aladin';

export function useAladinQuery<T>(
  key: (string | number)[],
  endpoint: string,
  params: Record<string, string | number> = {},
  staleTime: number = 1000 * 60 * 100,
): UseQueryResult<T> {
  const searchParams = new URLSearchParams({
    TTBKey: ALADIN_KEY,
    output: 'js',
    Version: '20131101',
    ...Object.fromEntries(Object.entries(params).map(([k, v]) => [k, String(v)])),
  });

  // 프록시 경로 사용
  const url = `/aladin/${endpoint}?${searchParams.toString()}`;

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
