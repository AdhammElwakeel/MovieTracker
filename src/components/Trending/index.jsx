import "./Trending.css";

// icons
import ChevronLeftIcon from "../../assets/icons/chevron-left";
import SeasonsIcon from "../../assets/icons/Seasons";
import ChevronRightIcon from "../../assets/icons/chevron-right";
import StarIcon from "../../assets/icons/Star";

// hooks
import fetchTrendingMovies from "../../hooks/useTrending";
import { useNavigate } from "react-router-dom";

const Trending = ({ mediaType = "movie", title = "Trending Now" }) => {
  const { media, isLoading, error } = fetchTrendingMovies(mediaType);
  const navigate = useNavigate();

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (isLoading) {
    return <div className="loading"> </div>;
  }

  const scrollLeft = () => {
    document.getElementById(`trending-slider-${mediaType}`).scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    document.getElementById(`trending-slider-${mediaType}`).scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="trending-page">
      <div className="trending-header">
        <h2>{title}</h2>
        <div className="slider-controls">
          <button className="slider-btn" onClick={scrollLeft}>
            <ChevronLeftIcon />
          </button>
          <button className="slider-btn" onClick={scrollRight}>
            <ChevronRightIcon />
          </button>
        </div>
      </div>

      <div className="trending-cards-container">
        <div className="trending-cards" id={`trending-slider-${mediaType}`}>
          {media.map((item) => (
            <div
              className="trending-card"
              key={item.id}
              onClick={() => {
                navigate(
                  `/${mediaType === "tv" ? "series" : "movie"}/${item.id}`,
                );
              }}
            >
              <div
                className="poster-img"
                style={{
                  backgroundImage: `url(${item.poster_path})`,
                  backgroundColor: "lightgray",
                }}
              ></div>

              <div className="poster-details">
                <div className="movie-rating">
                  <StarIcon /> {Math.round(item.vote_average)}
                </div>
                <div className="movie-info">
                  <SeasonsIcon />{" "}
                  {mediaType === "tv"
                    ? `${item.number_of_seasons} Season${item.number_of_seasons !== 1 ? "s" : ""}`
                    : item.runtime}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
