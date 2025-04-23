import "./ContactUs.css";

import { useState } from "react";
import ContactUsPoster from "../../assets/images/support.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+20",
    phone: "",
    message: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "required";
    }

    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "You must accept the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        countryCode: "+20",
        phone: "",
        message: "",
        termsAccepted: false,
      });

      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      setErrors({
        ...errors,
        form: "There was an error submitting the form. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

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
          {isSubmitted ? (
            <div className="success-message">
              <h3>Thank you for contacting us!</h3>
              <p>
                We have received your message and will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    className={`label-type ${errors.firstName ? "error-input" : ""}`}
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter First Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    className={`label-type ${errors.lastName ? "error-input" : ""}`}
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter Last Name"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className={`label-type ${errors.email ? "error-input" : ""}`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <div className="phone-input-container">
                    <select
                      id="country-code"
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                    >
                      <option value="+20">🇪🇬 </option>
                      <option value="+1">🇺🇸 </option>
                      <option value="+966">🇸🇦 </option>
                      <option value="+971">🇦🇪</option>
                    </select>
                    <input
                      type="tel"
                      className={`phone-input ${errors.phone ? "error-input" : ""}`}
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter Phone Number"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className={`label-type ${errors.message ? "error-input" : ""}`}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your Message"
                  rows="5"
                ></textarea>
              </div>

              <div className="form-footer">
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="terms"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                  />
                  <div className="label-term">
                    I agree with Terms of Use and Privacy Policy
                  </div>
                </div>

                <button
                  className="submit-button"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </div>

              {errors.form && (
                <div className="error-message form-error">{errors.form}</div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
