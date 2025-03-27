import "./MovieDataSlide.css";
import RelaaseYear from "../../assets/icons/releaseYear";
import AvailableLanguages from "../../assets/icons/AvailableLanguages";
import Star from "../../assets/icons/Star";
const MovieDataSlide = () => {
  return (
    <>
      <div className="movie-release-year">
        <div className="release-year-header">
          <RelaaseYear />
          <p>Released Year</p>
        </div>
        <h6>2022</h6>
      </div>

      <div className="Available-Language">
        <div className="title">
          <AvailableLanguages />
          <h6>Available Languages</h6>
        </div>

        <div className="Language-support">
          <div className="language">
            <p>English</p>
          </div>
          <div className="language">
            <p>English</p>
          </div>
          <div className="language">
            <p>English</p>
          </div>
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
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>

                <div className="rate-count">
                  <p>4.5</p>
                </div>
              </div>
            </div>

            <div className="rating-box">
              <div className="rating-box-title">
                <p>TMDB</p>
              </div>
              <div className="star-count">
                <div className="star-rate">
                  <Star />
                  <Star />
                  <Star />
                </div>

                <div className="rate-count">
                  <p>3</p>
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
            <div className="genre-box">
              <p>Action</p>
            </div>

            <div className="genre-box">
              <p>Action</p>
            </div>
          </div>
        </div>
      </div>

      <div className="director-container">
        <div className="director-header">
          <p>Director</p>
        </div>
        <div className="director-info">
          <div className="director-avatar"></div>
          <div className="director-name">
            <h6>Rishab Shetty</h6>
            <p>From India</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default MovieDataSlide;
