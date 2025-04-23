import "./Devices.css";

import Mobile from "../../assets/icons/Mobile-icon";

const Devices = () => {
  return (
    <div className="devices-page">
      <div className="section-title">
        <h2>We Provide you streaming experience across various devices.</h2>
        <p>
          With StreamVibe, you can enjoy your favorite movies and TV shows
          anytime, anywhere. Our platform is designed to be compatible with a
          wide range of devices, ensuring that you never miss a moment of
          entertainment.
        </p>
      </div>
      <div className="section-box">
        <div className="box">
          <div className="box-heading">
            <div className="icon-container">
              <Mobile />
            </div>
            <h2>Smartphones</h2>
          </div>
          <div className="box-content">
            <p>
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
        </div>

        <div className="box">
          <div className="box-heading">
            <div className="icon-container">
              <Mobile />
            </div>
            <h2>Tablet</h2>
          </div>
          <div className="box-content">
            <p>
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
        </div>

        <div className="box">
          <div className="box-heading">
            <div className="icon-container">
              <Mobile />
            </div>
            <h2>Smart TV</h2>
          </div>
          <div className="box-content">
            <p>
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
        </div>

        <div className="box">
          <div className="box-heading">
            <div className="icon-container">
              <Mobile />
            </div>
            <h2>Laptops</h2>
          </div>
          <div className="box-content">
            <p>
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
        </div>

        <div className="box">
          <div className="box-heading">
            <div className="icon-container">
              <Mobile />
            </div>
            <h2>Gaming Consoles</h2>
          </div>
          <div className="box-content">
            <p>
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
        </div>

        <div className="box">
          <div className="box-heading">
            <div className="icon-container">
              <Mobile />
            </div>
            <h2>VR Headsets </h2>
          </div>
          <div className="box-content">
            <p>
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Devices;
