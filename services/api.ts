import { MediaType, ResultItem, TrendingResult } from '~/interfaces/apiresults';

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export const getTrending = async (): Promise<TrendingResult> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=1`
  );
  const json = await response.json();
  return json;
};

export const getSearchResults = async (query: string): Promise<TrendingResult> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  const json = await response.json();
  return json;
};

export const getMoiveDetails = async (id: number, type: MediaType): Promise<ResultItem> => {
  const response = await fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}`);
  const json = await response.json();
  return json;
};
