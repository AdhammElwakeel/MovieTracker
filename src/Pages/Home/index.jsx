import Devices from "../../components/Devices";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";
import Freetrial from "../../components/FreeTrial";
import Plans from "../../components/Plans";
import Poster from "../../components/Poster";
import Categories from "../../components/Categories";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Poster />
      <div className="page">
        <Devices />
        <Categories />
        <FAQ />
        <Plans />
        <Freetrial />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
