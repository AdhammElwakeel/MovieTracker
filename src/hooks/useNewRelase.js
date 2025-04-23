import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const fetchNewMovies = async (type) => {
  try {
    if (type === "movie") {
      const { data } = await axios.get(`${BASE_URL}/movie/upcoming`, {
        params: { api_key: API_KEY },
      });

      return data.results.map((movie) => ({
        id: movie.id,
        date: movie.release_date,
        poster_path: movie.poster_path
          ? `${IMAGE_BASE_URL}${movie.poster_path}`
          : null,
      }));
    } else if (type === "tv") {
      const { data } = await axios.get(`${BASE_URL}/discover/tv`, {
        params: {
          api_key: API_KEY,
          with_poster: true,
          "vote_count.gte": 10,
          "first_air_date.gte": "2025-01-01",
        },
      });

      return data.results.map((show) => ({
        id: show.id,
        name: show.name || show.original_name,
        first_air_date: show.first_air_date,
        vote_average: show.vote_average,
        poster_path: show.poster_path
          ? `${IMAGE_BASE_URL}${show.poster_path}`
          : null,
      }));
    }
  } catch (error) {
    console.error("Error fetching new releases:", error);
    throw new Error(`Failed to fetch new releases: ${error.message}`);
  }
};

const useNewReleases = (type) => {
  const {
    data: releases = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["new-releases", type],
    queryFn: () => fetchNewMovies(type),
    enabled: !!type,
  });

  return { releases, isLoading, error: error?.message || null };
};

export default useNewReleases;
