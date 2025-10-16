import { useState, useEffect } from 'react';

interface Event {
  id: string;
  type: string;
  visitorId: string;
  metadata: Record<string, unknown>;
  createdAt: string;
  pageUrl?: string | null;
}

export function useEvents(pollingInterval = 5000) {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    async function fetchEvents() {
      try {
        const response = await fetch('/api/events');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = (await response.json()) as Event[];
        if (mounted) {
          setEvents(data);
          setError(null);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err : new Error('Failed to fetch events'));
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    }

    // Initial fetch
    void fetchEvents();

    // Set up polling
    const intervalId = setInterval(() => {
      void fetchEvents();
    }, pollingInterval);

    // Cleanup
    return () => {
      mounted = false;
      clearInterval(intervalId);
    };
  }, [pollingInterval]);

  return { events, isLoading, error };
}