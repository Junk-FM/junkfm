import { useBandsintown } from '@junkfm';

// fetch and format shows
export function useUpcomingShows() {
  const { data: events, loading, error } = useBandsintown('1026065', 'events');

  // filter out past if not filtered
    const upcomingShows = events?.filter((event) => {
        return new Date(event.datetime) > new Date();
    });

    return { upcomingShows, loading, error };

}
