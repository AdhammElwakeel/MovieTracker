import "./NewRelease.css";

import { useRef } from "react";
import { useNavigate } from "react-router-dom";

// icons
import ChevronLeftIcon from "../../assets/icons/chevron-left";
import ChevronRightIcon from "../../assets/icons/chevron-right";

//hooks
import useNewReleases from "../../hooks/useNewRelase";

const NewRelease = ({ type = "movie" }) => {
  const { releases, isLoading, error } = useNewReleases(type);
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="newMovies-page">
      <div className="newMovies-header">
        <h2>New Releases</h2>
        <div className="slider-controls">
          <button className="slider-btn" onClick={scrollLeft}>
            <ChevronLeftIcon />
          </button>
          <button className="slider-btn" onClick={scrollRight}>
            <ChevronRightIcon />
          </button>
        </div>
      </div>
      <div className="newMovies-cards-container" ref={sliderRef}>
        <div className="newMovies-cards">
          {releases.map((movie) => (
            <div
              className="newMovies-card"
              key={movie.id}
              onClick={() => {
                navigate(`/${type === "tv" ? "series" : "movie"}/${movie.id}`);
              }}
            >
              <div
                className="poster-img"
                style={{
                  backgroundImage: `url(${movie.poster_path})`,
                  backgroundColor: "lightgray",
                }}
              ></div>

              <div className="poster-date-details">
                <div className="date">
                  Released at <span>{movie.date || movie.first_air_date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewRelease;
