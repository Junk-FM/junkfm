import { useState, useEffect } from 'react';

const API_BASE_URL = 'https://rest.bandsintown.com/artists';
const BANDSINTOWN_API_KEY = import.meta.env.VITE_BANDSINTOWN_API_KEY; // exposed key on the client side is fine, perhaps move to Netlify serverless function later

if (!BANDSINTOWN_API_KEY) {
  throw new Error('Bandsintown API key is not defined in environment variables');
}

interface EventData {
  id: string;
  datetime: string;
  venue: {
    name: string;
    city: string;
    region: string;
    country: string;
    street_address: string;
  };
  url: string;
}

export function useBandsintown(artistId: string, endpoint: 'info' | 'events') {
  const [data, setData] = useState<EventData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!artistId) {
      setData(null);
      setLoading(false);
      setError('Missing artist ID');
      return;
    }

    const controller = new AbortController();
    let isActive = true;

    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const url =
          endpoint === 'info'
            ? `${API_BASE_URL}/id_${artistId}?app_id=${BANDSINTOWN_API_KEY}`
            : `${API_BASE_URL}/id_${artistId}/events?app_id=${BANDSINTOWN_API_KEY}`;

        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const result = await res.json();
        if (isActive) setData(result);
      } catch (err) {
        if (controller.signal.aborted) return;
        if (isActive) setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        if (isActive) setLoading(false);
      }
    }

    fetchData();

    return () => {
      isActive = false;
      controller.abort();
    };
  }, [artistId, endpoint]);

  return { data, loading, error };
}
