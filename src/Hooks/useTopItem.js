import { useQueries } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const fetchItemsByGenre = async (genre, type) => {
  if (!API_KEY) {
    throw new Error("API Key is missing. Please set REACT_APP_TMDB_API_KEY.");
  }

  const { id, name } = genre;

  try {
    const endpoint = type === "movie" ? "discover/movie" : "discover/tv";

    const response = await axios.get(`${BASE_URL}/${endpoint}`, {
      params: {
        api_key: API_KEY,
        with_genres: id,
        sort_by: "popularity.desc",
        page: 1,
        language: "en",
        include_adult: false,
        with_original_language: "ar",
      },
    });

    const items = response.data.results
      .filter((item) => item.genre_ids?.includes(id) && item.poster_path)
      .slice(0, 10);

    const images = items.map((item) => ({
      id: item.id,
      image: `${IMAGE_BASE_URL}${item.poster_path}`,
      title: item.title || item.name,
    }));

    return { name, images };
  } catch (error) {
    throw new Error(`Failed to fetch "${name}" ${type}: ${error.message}`);
  }
};

const useTopItems = (genres = [], type = "movie") => {
  const results = useQueries({
    queries: genres.map((genre) => ({
      queryKey: [`top-${type}`, genre.id],
      queryFn: () => fetchItemsByGenre(genre, type),
      enabled: !!genre.id,
      staleTime: 5 * 60 * 1000,
    })),
  });

  let categories = [];
  let isLoading = results.some((result) => result.isLoading);
  let error = results.find((result) => result.error)?.error?.message || null;

  categories = results
    .filter((result) => result.data)
    .map((result) => result.data);

  return { categories, isLoading, error };
};

export default useTopItems;
