import "../Footer/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-Content">
        <div className="links">
          <h4>Home</h4>
          <ul>
            <li>
              <a href="/categories">Categories</a>
            </li>
            <li>
              <a href="/devices">Devices</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="links">
          <h4>Movies</h4>
          <ul>
            <li>
              <a href="/movies/genres">Genres</a>
            </li>
            <li>
              <a href="/movies/trending">Trending</a>
            </li>
            <li>
              <a href="/movies/new-release">New Release</a>
            </li>
            <li>
              <a href="/movies/popular">Popular</a>
            </li>
          </ul>
        </div>

        <div className="links">
          <h4>Shows</h4>
          <ul>
            <li>
              <a href="/shows/genres">Genres</a>
            </li>
            <li>
              <a href="/shows/trending">Trending</a>
            </li>
            <li>
              <a href="/shows/new-release">New Release</a>
            </li>
            <li>
              <a href="/shows/popular">Popular</a>
            </li>
          </ul>
        </div>

        <div className="links">
          <h4>Support</h4>
          <ul>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="links">
          <h4>Subscription</h4>
          <ul>
            <li>
              <a href="/plans">Plans</a>
            </li>
            <li>
              <a href="/features">Features</a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h4>Connect With Us</h4>
          <p>hallo@prodmast.com</p>
          <div className="socialIcons">
            <a href="https://linkedin.com">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://facebook.com">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://instagram.com">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="customLine"></div>
      <div className="footer-bottom">
        <p>© 2025 tawkeel, All rights reserved</p>
        <div className="terms">
          <p>
            <a href="/terms">Terms & Conditions</a>
          </p>
          <p>
            <a href="/privacy">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
