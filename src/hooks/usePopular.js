import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const fetchMovies = async () => {
  const response = await axios.get(`${BASE_URL}/movie/popular`, {
    params: {
      api_key: process.env.REACT_APP_TMDB_API_KEY,
      language: "en-US",
      page: 1,
      adult: false,
    },
  });

  return response.data.results.map((movie) => ({
    id: movie.id,
    title: movie.title,
    desc: movie.overview,
    image: `${IMAGE_BASE_URL}${movie.backdrop_path || movie.poster_path}`,
  }));
};

export const useMovies = () => {
  const {
    data: movies = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["popular-movies"],
    queryFn: fetchMovies,
  });

  return {
    movies,
    loading: isLoading,
    error: error ? error.message : null,
  };
};
