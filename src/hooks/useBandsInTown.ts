import { useState, useEffect } from 'react';

const API_BASE_URL = 'https://rest.bandsintown.com/artists';
const API_KEY = import.meta.env.VITE_BANDSINTOWN_API_KEY;

console.log('api key:', API_KEY);

interface EventData {
  id: string;
  datetime: string;
  venue: {
    name: string;
    city: string;
    country: string;
  };
  url: string;
}

export function useBandsintown(artistId: string, endpoint: 'info' | 'events') {
  const [data, setData] = useState<EventData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const url =
          endpoint === 'info'
            ? `${API_BASE_URL}/id_${artistId}?app_id=${API_KEY}`
            : `${API_BASE_URL}/id_${artistId}/events?app_id=${API_KEY}`;

        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [artistId, endpoint]);

  return { data, loading, error };
}
