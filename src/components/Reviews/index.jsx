import "./Reviews.css";
import Star from "../../assets/icons/Star";
import { useRef } from "react";
import ChevronLeft from "../../assets/icons/chevron-left";
import ChevronRight from "../../assets/icons/chevron-right";

const Reviews = () => {
  const sliderRef = useRef(null);

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
    <>
      <div className="reviews">
        <div className="reviews-head">
          <div className="review-title">
            <h6>Reviews</h6>
          </div>
          <div className="slider-controls">
            <button className="slider-btn" onClick={scrollLeft}>
              <ChevronLeft />
            </button>
            <button className="slider-btn" onClick={scrollRight}>
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="reviews-box" ref={sliderRef}>
          <div className="review-container">
            <div className="container-head">
              <div className="author-info">
                <div className="author-name">
                  <h6>Adham elwakeel</h6>
                </div>
                <div className="author-nation">
                  <p>From Egypt</p>
                </div>
              </div>
              <div className="rating">
                <Star />
                <Star />
                <Star />
              </div>
            </div>
            <div className="review">
              <p>
                {" "}
                This movie was recommended to me by a very dear friend who went
                for the movie by herself. I went to the cinemas to watch
              </p>
            </div>
          </div>

          <div className="review-container">
            <div className="container-head">
              <div className="author-info">
                <div className="author-name">
                  <h6>Marwan khaled</h6>
                </div>
                <div className="author-nation">
                  <p>From Egypt</p>
                </div>
              </div>
              <div className="rating">
                <Star />
                <Star />
                <Star />
              </div>
            </div>
            <div className="review">
              <p>
                {" "}
                This movie was recommended to me by a very dear friend who went
                for the movie by herself.
              </p>
            </div>
          </div>

          <div className="review-container">
            <div className="container-head">
              <div className="author-info">
                <div className="author-name">
                  <h6>ahmed sabry</h6>
                </div>
                <div className="author-nation">
                  <p>From Egypt</p>
                </div>
              </div>
              <div className="rating">
                <Star />
                <Star />
                <Star />
              </div>
            </div>
            <div className="review">
              <p> This movie was recommended to me</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
