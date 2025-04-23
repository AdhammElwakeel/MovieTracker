import "./Categories.css";

// Icons
import RightIcon from "../../assets/icons/Right";

// constants
import { genreIds } from "../../constants/genreIds";

//hooks
import useMoviesByGenre from "../../Hooks/useMoviesByGenre";

const Categories = () => {
  const { categories, isLoading, error } = useMoviesByGenre(genreIds);

  if (error) {
    return <div className="error-message">{error}</div>;
  }
  if (isLoading) {
    return <div className="loading"> </div>;
  }

  return (
    <>
      <div className="categories-header">
        <h2>Explore our wide variety of categories</h2>
        <p>
          Whether you're looking for a comedy to make you laugh, a drama to make
          you think, or a documentary to learn something new.
        </p>
      </div>
      <div className="categories-items">
        {isLoading ? (
          <p>Loading categories...</p>
        ) : categories.length > 0 ? (
          categories.map((category, index) => (
            <div className="categories-card" key={index}>
              <div className="images-section">
                {category.images.length > 0
                  ? category.images.map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={img}
                        alt={`${category.name} Movie Poster`}
                      />
                    ))
                  : Array(4)
                      .fill(0)
                      .map((_, imgIndex) => (
                        <div key={imgIndex} className="placeholder-image"></div>
                      ))}
              </div>
              <div className="content-info">
                <h3>{category.name}</h3>
                <RightIcon />
              </div>
            </div>
          ))
        ) : (
          <p>No categories available</p>
        )}
      </div>
    </>
  );
};

export default Categories;
