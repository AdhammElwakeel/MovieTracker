import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const fetchSearchResults = async ({ queryKey }) => {
  const [, { query, page, type }] = queryKey;
  
  if (!query) return [];

  try {
    const { data } = await axios.get(`${BASE_URL}/search/${type}`, {
      params: {
        api_key: API_KEY,
        query,
        page,
        include_adult: false,
        language: "en-US"
      }
    });

    return {
      results: data.results.map(item => ({
        id: item.id,
        title: type === 'movie' ? item.title : item.name,
        poster_path: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : null,
        release_date: item.release_date || item.first_air_date,
        vote_average: item.vote_average,
        media_type: type,
        overview: item.overview
      })),
      page: data.page,
      total_pages: data.total_pages,
      total_results: data.total_results
    };
  } catch (error) {
    throw new Error("Failed to fetch search results");
  }
};

const useSearch = (searchQuery, page = 1, type = "movie") => {
  return useQuery({
    queryKey: ["search", { query: searchQuery, page, type }],
    queryFn: fetchSearchResults,
    enabled: Boolean(searchQuery),
    keepPreviousData: true
  });
};

export default useSearch;