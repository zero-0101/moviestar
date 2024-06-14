export interface TrendingResult {
  page: number;
  results: ResultItem[];
  total_pages: number;
  total_results: number;
}

export interface ResultItem {
  backdrop_path: string;
  id: number;
  original_name?: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  name?: string;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  first_air_date?: string;
  vote_average: number;
  vote_count: number;
  origin_country?: string[];
  original_title?: string;
  title?: string;
  release_date?: string;
  video?: boolean;
}

export enum MediaType {
  Moive = 'moive',
  TV = 'tv',
}
