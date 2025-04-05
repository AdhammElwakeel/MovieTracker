import "./Cast.css";
import ChevronLeft from "../../assets/icons/chevron-left";
import ChevronRight from "../../assets/icons/chevron-right";

const CastDetails = ({ cast = [] }) => {
  const scrollLeft = () => {
    document.getElementById("cast-slider").scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    document.getElementById("cast-slider").scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="cast">
      <div className="cast-header">
        <div className="cast-title">
          <h6>Cast</h6>
        </div>
        <div className="cast-slider-controls">
          <button className="cast-slider-btn" onClick={scrollLeft}>
            <ChevronLeft />
          </button>
          <button className="cast-slider-btn" onClick={scrollRight}>
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="cast-container">
        <div className="cast-author" id="cast-slider">
          {cast.length > 0 ? (
            cast.map((actor) => {
              return (
                actor.profile_path && (
                  <div key={actor.id} className="cast-item">
                    <img
                      src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                      alt={actor.name}
                    />
                  </div>
                )
              );
            })
          ) : (
            <p>No cast information available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CastDetails;
