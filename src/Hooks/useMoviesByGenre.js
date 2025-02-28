import { useState, useEffect } from "react";

const useMoviesByGenre = (genreIds) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMoviesByGenre = async (genreId, genreName) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`,
            accept: "application/json",
          },
        },
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch data for genre ${genreName}`);
      }

      const data = await response.json();
      const moviePosters = data.results
        .slice(0, 4)
        .map((movie) => `https://image.tmdb.org/t/p/w500${movie.poster_path}`);

      return {
        name: genreName,
        images: moviePosters,
      };
    } catch (error) {
      console.error(`Error fetching ${genreName} movies:`, error);
      return {
        name: genreName,
        images: [],
      };
    }
  };

  useEffect(() => {
    const fetchAllCategories = async () => {
      setIsLoading(true);
      try {
        const categoriesData = await Promise.all(
          genreIds.map((genre) => fetchMoviesByGenre(genre.id, genre.name)),
        );

        setCategories(categoriesData);
        setIsLoading(false);
      } catch (error) {
        setError("Failed to fetch categories data. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchAllCategories();
  }, [genreIds]);

  return { categories, isLoading, error };
};

export default useMoviesByGenre;
