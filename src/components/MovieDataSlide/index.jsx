import "./MovieDataSlide.css";
import RelaaseYear from "../../assets/icons/releaseYear";
import AvailableLanguages from "../../assets/icons/AvailableLanguages";
import Star from "../../assets/icons/Star";

const MovieDataSlide = ({ movieDetails }) => {
  if (!movieDetails) return null;

  const releaseYear = movieDetails.release_date
    ? movieDetails.release_date.split("-")[0]
    : "";

  const director = movieDetails.credits?.crew?.find(
    (person) => person.job === "Director",
  ) || { name: "", profile_path: null };

  const renderStars = (rating) => {
    const normalizedRating = Math.min(Math.floor(rating / 2), 5);
    const stars = [];

    for (let i = 0; i < normalizedRating; i++) {
      stars.push(<Star key={i} />);
    }

    return stars;
  };

  return (
    <>
      <div className="movie-release-year">
        <div className="release-year-header">
          <RelaaseYear />
          <p>Released Year</p>
        </div>
        <h6>{releaseYear}</h6>
      </div>

      <div className="Available-Language">
        <div className="title">
          <AvailableLanguages />
          <h6>Available Languages</h6>
        </div>

        <div className="Language-support">
          {movieDetails.spoken_languages?.map((language, index) => (
            <div className="language" key={index}>
              <p>{language.english_name || language.name}</p>
            </div>
          ))}
        </div>

        <div className="Ratings">
          <div className="ratingTitle">
            <Star stroke="#999" fill="none" />
            <p>Ratings</p>
          </div>
          <div className="rating-container">
            <div className="rating-box">
              <div className="rating-box-title">
                <p>IMDb</p>
              </div>
              <div className="star-count">
                <div className="star-rate">
                  {renderStars(movieDetails.vote_average || 0)}
                </div>

                <div className="rate-count">
                  <p>{movieDetails.vote_average?.toFixed(1) || "N/A"}</p>
                </div>
              </div>
            </div>

            <div className="rating-box">
              <div className="rating-box-title">
                <p>TMDB</p>
              </div>
              <div className="star-count">
                <div className="star-rate">
                  {renderStars(movieDetails.vote_average || 0)}
                </div>

                <div className="rate-count">
                  <p>{movieDetails.vote_average?.toFixed(1) || "N/A"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="genre">
          <div className="genre-title">
            <p>Genre</p>
          </div>
          <div className="genre-container">
            {movieDetails.genres?.map((genre, index) => (
              <div className="genre-box" key={genre.id || index}>
                <p>{genre.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="director-container">
        <div className="director-header">
          <p>Director</p>
        </div>
        <div className="director-info">
          <div
            className="director-avatar"
            style={
              director.profile_path
                ? {
                    backgroundImage: `url(https://image.tmdb.org/t/p/w185${director.profile_path})`,
                  }
                : {}
            }
          ></div>
          <div className="director-name">
            <h6>{director.name}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDataSlide;
