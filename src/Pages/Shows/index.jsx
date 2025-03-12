import Categories from "../../components/Categories";
import FreeTrial from "../../components/FreeTrial";
import NewRelase from "../../components/New_Relase";
import Slider from "../../components/Slider";
import Trending from "../../components/Trending";
import { movieGenres, tvGenres } from "../../constants/genres";
import TopItems from "../../components/TopMovies";
import "./Shows.css";
import useTopItems from "../../Hooks/useTopItem";

const Shows = () => {
  const {
    categories: movieCategories,
    isLoading: isLoadingMovies,
    error: movieError,
  } = useTopItems(movieGenres, "movie");

  const {
    categories: tvCategories,
    isLoading: isLoadingTv,
    error: tvError,
  } = useTopItems(tvGenres, "tv");

  return (
    <div className="Movies-shows">
      <Slider />
      <div className="Genres">
        <h2 className="Genres-title">Movies</h2>
        <Categories />
        <TopItems
          title="Top 10 Movies in Genres"
          categories={movieCategories}
          isLoading={isLoadingMovies}
          error={movieError}
        />
        <Trending />
        <NewRelase />
      </div>

      <div className="Genres">
        <h2 className="Genres-title">Shows</h2>
        <TopItems
          title="Top 10 TV Shows in Genres"
          categories={tvCategories}
          isLoading={isLoadingTv}
          error={tvError}
        />
        <Trending mediaType="tv" title="Trending TV Shows" />
        <NewRelase type="tv" />
      </div>
      <FreeTrial />
    </div>
  );
};

export default Shows;
