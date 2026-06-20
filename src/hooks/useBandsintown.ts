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

// ? how often does bandsintown data change ?
// refresh every hour for now
// cached response now live in localStorage for an hour
// this survives hard refreshes, too
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour
const CACHE_PREFIX = 'bandsintown-cache:';

interface CacheEntry {
  timestamp: number;
  data: EventData[];
}

/**
 * Reads a cached Bandsintown response from localStorage, returning it only if it exists and is
 * still within the TTL window. Any parse/storage error is swallowed so a bad entry just falls
 * through to a fresh fetch.
 *
 * @param key The localStorage key for this artist/endpoint pair.
 * @returns The cached event data, or null if missing, stale, or unreadable.
 */
function readCache(key: string): EventData[] | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const entry = JSON.parse(raw) as CacheEntry;
    if (Date.now() - entry.timestamp > CACHE_TTL_MS) return null;
    return entry.data;
  } catch {
    return null;
  }
}

/**
 * Writes a Bandsintown response to localStorage with the current timestamp. Storage failures
 * (quota, private mode, etc.) are ignored since the cache is a nice-to-have, not load-bearing.
 *
 * @param key The localStorage key for this artist/endpoint pair.
 * @param data The event data to cache.
 */
function writeCache(key: string, data: EventData[]): void {
  try {
    const entry: CacheEntry = { timestamp: Date.now(), data };
    localStorage.setItem(key, JSON.stringify(entry));
  } catch {
    // ignore - if we can't cache, we just refetch next time
  }
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

    const cacheKey = `${CACHE_PREFIX}${artistId}:${endpoint}`;

    // serve from cache when it's still fresh - no network hit on mount/refresh within the TTL
    const cached = readCache(cacheKey);
    if (cached) {
      setData(cached);
      setLoading(false);
      setError(null);
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

        const result = (await res.json()) as EventData[];
        writeCache(cacheKey, result);
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
