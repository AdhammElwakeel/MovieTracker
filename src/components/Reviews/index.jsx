import "./Reviews.css";
import Star from "../../assets/icons/Star";
import Plus from "../../assets/icons/Plus";

const Reviews = () => {
  return (
    <>
      <div className="reviews">
        <div className="reviews-head">
          <div className="review-title">
            <h6>Reviews</h6>
          </div>
          <div className="add-review-button">
            <button className="add-review">
              <Plus /> add your review
            </button>
          </div>
        </div>

        <div className="reviews-box">
          <div className="review-container">
            <div className="container-head">
              <div className="author-info">
                <div className="author-name">
                  <h6>Aniket Roy</h6>
                </div>
                <div className="author-nation">
                  <p>From India</p>
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
                for the movie by herself. I went to the cinemas to watch but had
                a houseful board so couldn’t watch it.
              </p>
            </div>
          </div>

          <div className="review-container">
            <div className="container-head">
              <div className="author-info">
                <div className="author-name">
                  <h6>Aniket Roy</h6>
                </div>
                <div className="author-nation">
                  <p>From India</p>
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
                for the movie by herself. I went to the cinemas to watch but had
                a houseful board so couldn’t watch it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Reviews;
