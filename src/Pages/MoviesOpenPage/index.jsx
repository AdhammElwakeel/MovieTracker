import FreeTrial from "../../components/FreeTrial";
import MovieDetailSlider from "../../components/PosterDetailsPage";
import "./MoviesOpenPage.css";
import MovieDataSlide from "../../components/MovieDataSlide";
import CastDetails from "../../components/Cast";
import Description from "../../components/Description";
import Reviews from "../../components/Reviews";
import useMovieDetails from "../../Hooks/useMovieDetails";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const { details, cast, reviews, isLoading, isError } = useMovieDetails(id);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading movie details</div>;
  if (!details) return <div>No movie data found</div>;

  return (
    <>
      <div className="movies-details-page">
        <div className="slider-section">
          <MovieDetailSlider />
        </div>
        <div className="pageDetails">
          <div className="movie-information">
            <Description text={details.overview} />
            <CastDetails cast={cast} />
            <Reviews reviews={reviews} />
          </div>
          <div className="movie-data">
            <MovieDataSlide movieDetails={details} />
          </div>
        </div>

        <FreeTrial />
      </div>
    </>
  );
};

export default MovieDetails;
