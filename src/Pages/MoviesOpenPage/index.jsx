import FreeTrial from "../../components/FreeTrial";
import MovieSlider from "../../components/Slider";
import "./MoviesOpenPage.css";
import MovieDataSlide from "../../components/MovieDataSlide";
import CastDetails from "../../components/Cast";
import Description from "../../components/Description";
import Reviews from "../../components/Reviews";
const MovieDetails = () => {
  return (
    <>
      <div className="movies-details-page">
        <div className="slider-section">
          {" "}
          <MovieSlider />
        </div>
        <div className="pageDetails">
          <div className="movie-information">
            <Description />
            <CastDetails />
            <Reviews />
          </div>
          <div className="movie-data">
            <MovieDataSlide />
          </div>
        </div>

        <FreeTrial />
      </div>
    </>
  );
};
export default MovieDetails;
