import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const fetchTrendingMedia = async (mediaType) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/trending/${mediaType}/day`, {
      params: { api_key: API_KEY },
    });

    if (mediaType === "tv") {
      const detailedResults = await Promise.all(
        data.results.slice(0, 20).map(async (show) => {
          try {
            const { data: showDetails } = await axios.get(
              `${BASE_URL}/tv/${show.id}`,
              { params: { api_key: API_KEY, with_original_language: "ar" } },
            );

            return {
              id: show.id,
              title: show.name,
              number_of_seasons: showDetails.number_of_seasons,
              vote_average: show.vote_average,
              poster_path: show.poster_path
                ? `${IMAGE_BASE_URL}${show.poster_path}`
                : null,
            };
          } catch (error) {
            console.error(`Error fetching details for show ${show.id}:`, error);
            return {
              id: show.id,
              title: show.name,
              number_of_seasons: "N/A",
              vote_average: show.vote_average,
              poster_path: show.poster_path
                ? `${IMAGE_BASE_URL}${show.poster_path}`
                : null,
            };
          }
        }),
      );
      return detailedResults;
    } else {
      // For movies
      return data.results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        runtime: movie.runtime || "N/A",
        vote_average: movie.vote_average,
        poster_path: movie.poster_path
          ? `${IMAGE_BASE_URL}${movie.poster_path}`
          : null,
      }));
    }
  } catch (error) {
    console.error(`Error fetching trending ${mediaType}:`, error);
    throw new Error(`Failed to fetch trending ${mediaType}: ${error.message}`);
  }
};

const useTrendingMedia = (mediaType = "movie") => {
  const {
    data: media = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: [`trending-${mediaType}`],
    queryFn: () => fetchTrendingMedia(mediaType),
  });

  return { media, isLoading, error: error?.message || null };
};

export default useTrendingMedia;
