import "./Trending.css";
import ChevronLeft from "../../assets/icons/chevron-left";
import Seasons from "../../assets/icons/Seasons";
import ChevronRight from "../../assets/icons/chevron-right";
import fetchTrendingMovies from "../../Hooks/useTrending";
import Star from "../../assets/icons/Star";

const Trending = ({ mediaType = "movie", title = "Trending Now" }) => {
  const { media, isLoading, error } = fetchTrendingMovies(mediaType);

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
            <ChevronLeft />
          </button>
          <button className="slider-btn" onClick={scrollRight}>
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="trending-cards-container">
        <div className="trending-cards" id={`trending-slider-${mediaType}`}>
          {media.map((item) => (
            <div className="trending-card" key={item.id}>
              <div
                className="poster-img"
                style={{
                  backgroundImage: `url(${item.poster_path})`,
                  backgroundColor: "lightgray",
                }}
              ></div>

              <div className="poster-details">
                <div className="movie-rating">
                  <Star /> {Math.round(item.vote_average)}
                </div>
                <div className="movie-info">
                  <Seasons />{" "}
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
