import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useParams } from "react-router-dom";
import useMovieDetails from "../../Hooks/useMovieDetails";
import "./PosterDetailsPage.css";

const PosterDetailsPage = () => {
  const { id } = useParams();
  const { details, isLoading, isError } = useMovieDetails(id);

  if (isLoading)
    return (
      <div className="poster-details-container poster-details-loading">
        Loading...
      </div>
    );
  if (isError)
    return (
      <div className="poster-details-container poster-details-error">
        Failed to load movie details
      </div>
    );
  if (!details)
    return (
      <div className="poster-details-container poster-details-error">
        No movie details available
      </div>
    );

  return (
    <div className="poster-details-container">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{ nextEl: ".nav-button-next", prevEl: ".nav-button-prev" }}
        className="poster-details-slider"
      >
        <SwiperSlide>
          <div
            className="poster-background"
            style={{
              backgroundImage: `linear-gradient(0deg, #141414 0%, rgba(20, 20, 20, 0.6) 100%), url(${details.backdrop_path})`,
              backgroundSize: "cover",
              backgroundPosition: "center ",
            }}
          ></div>
          <div className="poster-content">
            <div className="poster-text">
              <h2 className="poster-title">{details.title}</h2>
              {details.tagline && (
                <p className="poster-tagline">{details.tagline}</p>
              )}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PosterDetailsPage;
