import "./Support.css";

// components
import FAQ from "../../components/FAQ";
import FreeTrial from "../../components/FreeTrial";
import ContactUs from "../../components/ContactUs";

const Support = () => {
  return (
    <div className="supportPage">
      <ContactUs />
      <FAQ />
      <FreeTrial />
    </div>
  );
};
export default Support;
