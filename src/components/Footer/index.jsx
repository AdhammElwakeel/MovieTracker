import "../Footer/Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-Content">
          <div className="Links">
            <h4>Home</h4>
            <ul>
              <li>Categories</li>
              <li>Devices</li>
              <li>Pricing</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className="Links">
            <h4>Movies</h4>
            <ul>
              <li>Gernes</li>
              <li>Trending</li>
              <li>New Release</li>
              <li>Popular</li>
            </ul>
          </div>

          <div className="Links">
            <h4>Shows</h4>
            <ul>
              <li>Gernes</li>
              <li>Trending</li>
              <li>New Release</li>
              <li>Popular</li>
            </ul>
          </div>

          <div className="Links">
            <h4>Support</h4>
            <ul>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="Links">
            <h4>Subscription</h4>
            <ul>
              <li>Plans</li>
              <li>Features</li>
            </ul>
          </div>
          <div className="contact">
            <h4>Connect With Us</h4>
            <p>hallo@prodmast.com</p>
            <div className="socialIcons">
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
        <div className="customLine"></div>
        <div className="footer-bottom">
          <p>© 2025 tawkeel, All rights reserved</p>
          <div className="terms">
            <div>Terms & Conditions</div>
            <div>Privacy Policy</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
