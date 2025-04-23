import "./TopMoviesPage.css";

// hooks
import useTopItems from "../../hooks/useTopItem";

// constants
import { movieGenres } from "../../constants/genres";

//components
import Footer from "../../components/Footer";

import { useNavigate } from "react-router-dom";

const TopMoviesPage = () => {
  const { categories, isLoading, error } = useTopItems(movieGenres, "movie");
  const navigate = useNavigate();

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div className="topmovies">
      <div className="topmovies-container">
        <h1 className="topmovies-title">Top 10 Movies</h1>

        {error ? (
          <div className="topmovies-error">{error}</div>
        ) : isLoading ? (
          <div className="topmovies-loading">Loading top movies...</div>
        ) : (
          <div className="topmovies-categories">
            {categories.map((category, index) => (
              <div className="topmovies-category" key={index}>
                <h2 className="topmovies-category-title">{category.name}</h2>
                <div className="topmovies-grid">
                  {category.images.map((movie, movieIndex) => (
                    <div
                      className="topmovies-item"
                      key={movieIndex}
                      onClick={() => handleMovieClick(movie.id)}
                    >
                      <div className="topmovies-rank">{movieIndex + 1}</div>
                      <img
                        src={movie.image}
                        alt={movie.title}
                        className="topmovies-image"
                      />
                      <div className="topmovies-info">
                        <h3 className="topmovies-movie-title">{movie.title}</h3>
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

export default TopMoviesPage;
