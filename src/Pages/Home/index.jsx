// Components
import Devices from "../../components/Devices";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";
import FreeTrial from "../../components/FreeTrial";
import Plans from "../../components/Plans";
import Poster from "../../components/Poster";
import Categories from "../../components/Categories";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Poster />
      <div className="page">
        <Categories />
        <Devices />
        <FAQ />
        <Plans />
        <FreeTrial />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
