import "./Poster.css";

//icons
import WatchIcon from "../../assets/icons/watch-icon";
import poster from "../../assets/images/poster.png";

const Poster = () => {
  return (
    <div className="poster">
      <img src={poster} alt="poster" />
      <div className="poster-content">
        <div className="poster-heading-text">
          <h3>The Best Streaming Experience</h3>
          <p>
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </p>
        </div>
        <button className="poster-button">
          <WatchIcon />
          Start Watching Now
        </button>
      </div>
    </div>
  );
};

export default Poster;
