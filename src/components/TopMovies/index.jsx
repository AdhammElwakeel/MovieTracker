import "./TopMovies.css";
import Right from "../../assets/icons/Right";

const TopItems = ({ title, categories = [], isLoading, error }) => {
  if (error) {
    return <div className="top-items__error">{error}</div>;
  }

  return (
    <>
      <div className="top-items__header">
        <h2 className="top-items__title">{title}</h2>
      </div>
      <div className="top-items__grid">
        {isLoading ? (
          <p className="top-items__loading">Loading categories...</p>
        ) : categories.length > 0 ? (
          categories.map((category, index) => (
            <div className="item-card" key={index}>
              <div className="item-card__images">
                {category.images.length > 0
                  ? category.images
                      .slice(0, 4)
                      .map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img.image}
                          alt={img.title}
                          className="item-card__image"
                        />
                      ))
                  : Array(4)
                      .fill(0)
                      .map((_, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="item-card__image item-card__image--placeholder"
                        />
                      ))}
              </div>
              <div className="item-card__content">
                <div className="item-card__info">
                  <div className="item-card__badge">
                    <p className="item-card__badge-text">Top 10 In</p>
                  </div>
                  <h3 className="item-card__category">{category.name}</h3>
                </div>
                <Right />
              </div>
            </div>
          ))
        ) : (
          <p className="top-items__empty">No categories available</p>
        )}
      </div>
    </>
  );
};

export default TopItems;
