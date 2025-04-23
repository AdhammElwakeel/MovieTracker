import "./Slider.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// icons
import PlusIcon from "../../assets/icons/Plus";
import PlayIcon from "../../assets/icons/Play";
import LikeIcon from "../../assets/icons/Like";

// hooks
import { useMovies } from "../../Hooks/usePopular";

const MovieSlider = () => {
  const { movies, isLoading, error } = useMovies();

  if (isLoading)
    return <div className="slider-container loading">Loading...</div>;
  if (error) return <div className="slider-container error">{error}</div>;

  const enableLoop = movies.length > 1;

  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
        autoplay={{ delay: 9000 }}
        loop={enableLoop}
        className="movie-slider"
      >
        <div className="custom-prev">&#10094;</div>
        <div className="custom-next">&#10095;</div>
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div
              className="slide-background"
              style={{
                backgroundImage: `linear-gradient(0deg, #141414 0%, rgba(20, 20, 20, 0) 100%), url(${movie.image})`,
              }}
            ></div>
            <div className="slide-overlay">
              <div className="movie-title">
                <h2>{movie.title}</h2>
                <p>{movie.desc}</p>
              </div>
              <div className="options">
                <button className="play-button">
                  <PlayIcon /> Play Now
                </button>
                <div className="icons">
                  <PlusIcon />
                </div>
                <div className="icons">
                  <LikeIcon />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSlider;
