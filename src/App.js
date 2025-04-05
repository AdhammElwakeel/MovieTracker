import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shows from "./Pages/Shows";
import Subscriptions from "./Pages/Subscriptions";
import Support from "./Pages/Support";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MovieDetails from "./Pages/MoviesOpenPage";
import SeriesDetails from "./Pages/SeriesDetails";
function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 10,
        retry: 2,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies-shows" element={<Shows />} />
            <Route path="/support" element={<Support />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/series/:id" element={<SeriesDetails />} />
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
