import "./TopMovies.css";

// icons
import RightIcon from "../../assets/icons/Right";

import { useNavigate } from "react-router-dom";

const TopItems = ({ title, categories = [], isLoading, error }) => {
  const navigate = useNavigate();

  if (error) {
    return <div className="top-items-error">{error}</div>;
  }

  const handleNavigateTopPage = () => {
    navigate("/top-movies-Page");
  };

  return (
    <>
      <div className="top-items-header">
        <h2 className="top-items-title">{title}</h2>
      </div>
      <div className="top-items-grid">
        {isLoading ? (
          <p className="top-items-loading">Loading categories...</p>
        ) : categories.length > 0 ? (
          categories.map((category, index) => (
            <div
              className="item-card"
              key={index}
              onClick={handleNavigateTopPage}
            >
              <div className="item-card-images">
                {category.images.length > 0
                  ? category.images
                      .slice(0, 4)
                      .map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img.image}
                          alt={img.title}
                          className="item-card-image"
                        />
                      ))
                  : Array(4)
                      .fill(0)
                      .map((_, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="item-card-image item-card-image-placeholder"
                        />
                      ))}
              </div>
              <div className="item-card-content">
                <div className="item-card-info">
                  <div className="item-card-badge">
                    <p className="item-card-badge-text">Top 10 In</p>
                  </div>
                  <h3 className="item-card-category">{category.name}</h3>
                </div>
                <RightIcon />
              </div>
            </div>
          ))
        ) : (
          <p className="top-items-empty">No categories available</p>
        )}
      </div>
    </>
  );
};

export default TopItems;
