import React from "react";
import "./Top10Movies.css";
import useTopItems from "../../Hooks/useTopItem";
import { movieGenres } from "../../constants/genres";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const Top10Movies = () => {
  const { categories, isLoading, error } = useTopItems(movieGenres, "movie");
  const navigate = useNavigate();

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div className="top10-movies">
      <div className="top10-movies__container">
        <h1 className="top10-movies__title">Top 10 Movies</h1>
        
        {error ? (
          <div className="top10-movies__error">{error}</div>
        ) : isLoading ? (
          <div className="top10-movies__loading">Loading top movies...</div>
        ) : (
          <div className="top10-movies__categories">
            {categories.map((category, index) => (
              <div className="top10-movies__category" key={index}>
                <h2 className="top10-movies__category-title">{category.name}</h2>
                <div className="top10-movies__grid">
                  {category.images.map((movie, movieIndex) => (
                    <div 
                      className="top10-movies__item" 
                      key={movieIndex}
                      onClick={() => handleMovieClick(movie.id)}
                    >
                      <div className="top10-movies__rank">{movieIndex + 1}</div>
                      <img 
                        src={movie.image} 
                        alt={movie.title} 
                        className="top10-movies__image" 
                      />
                      <div className="top10-movies__info">
                        <h3 className="top10-movies__movie-title">{movie.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Top10Movies;