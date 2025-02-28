import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesShows from "./Pages/MoviesShows";
import Subscriptions from "./Pages/Subscriptions";
import Support from "./Pages/Support";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies-shows" element={<MoviesShows />} />
              <Route path="/support" element={<Support />} />
              <Route path="/subscriptions" element={<Subscriptions />} />
            </Routes>
          </div>
        </Router>
      </>
    </div>
  );
}

export default App;
