import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const fetchMovieDetails = async (movieId) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
      append_to_response: "credits,reviews,similar,videos",
    },
  });
  return data;
};

const useMovieDetails = (id) => {
  const {
    data: movie,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["movieDetails", id],
    queryFn: () => fetchMovieDetails(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  const formattedData = movie
    ? {
        ...movie,
        poster_path: movie.poster_path
          ? `${IMAGE_BASE_URL}${movie.poster_path}`
          : null,
        backdrop_path: movie.backdrop_path
          ? `${IMAGE_BASE_URL}${movie.backdrop_path}`
          : null,
      }
    : null;

  return {
    isLoading,
    isError,
    error,
    details: formattedData,
    cast: movie?.credits?.cast || [],
    reviews: movie?.reviews?.results || [],
  };
};

export default useMovieDetails;
