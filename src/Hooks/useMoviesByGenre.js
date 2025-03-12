import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const fetchMoviesByGenre = async ({ id, name }) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        sort_by: "popularity.desc",
        with_genres: id,
        page: 1,
      },
    });

    return {
      name,
      images: data.results
        .slice(0, 4)
        .map((movie) => `${IMAGE_BASE_URL}${movie.poster_path}`),
    };
  } catch (error) {
    console.error(`Error fetching ${name} movies:`, error);
    throw new Error(`Failed to fetch ${name}: ${error.message}`);
  }
};

const useMoviesByGenre = (genreIds) => {
  const {
    data: categories = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movies-by-genre", genreIds],
    queryFn: () => Promise.all(genreIds.map(fetchMoviesByGenre)),
    enabled: genreIds?.length > 0,
  });

  return { categories, isLoading, error: error?.message || null };
};

export default useMoviesByGenre;
