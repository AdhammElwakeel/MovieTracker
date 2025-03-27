import "./ContactUs.css";
import ContactUsPoster from "../../assets/images/support.png";

const ContactUs = () => {
  return (
    <div className="ContactUsPage">
      <div className="ContactUs-left">
        <div className="contactUsTitle">
          <h2>Welcome to our support page!</h2>
          <p>
            We're here to help you with any problems you may be having with our
            product.
          </p>
          <div className="posterPhoto">
            <img src={ContactUsPoster} alt="poster" />
          </div>
        </div>
      </div>

      <div className="ContactUs-right">
        <div className="form-container">
          <form>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  className="label-type"
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  className="label-type"
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter Last Name"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="label-type"
                  id="email"
                  name="email"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <div className="phone-input-container">
                  <select id="country-code" name="country-code">
                    <option value="+20">🇪🇬 </option>
                    <option value="+1">🇺🇸 </option>
                    <option value="+966">🇸🇦 </option>
                    <option value="+971">🇦🇪</option>
                  </select>
                  <input
                    type="tel"
                    className="phone-input"
                    id="phone"
                    name="phone"
                    placeholder="Enter Phone Number"
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="label-type"
                id="message"
                name="message"
                placeholder="Enter your Message"
                rows="5"
              ></textarea>
            </div>

            <div className="form-footer">
              <div className="checkbox-group">
                <input type="checkbox" id="terms" name="termsAccepted" />
                <div className="label-term" htmlFor="terms">
                  I agree with Terms of Use and Privacy Policy
                </div>
              </div>
              <button className="submit-button" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
