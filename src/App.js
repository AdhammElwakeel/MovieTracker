import "./App.css";

// components
import Navbar from "./components/Navbar";

// pages
import Subscriptions from "./pages/Subscriptions";
import Support from "./pages/Support";
import Home from "./pages/Home";
import Shows from "./pages/Shows";
import MovieDetails from "./pages/MoviesOpenPage";
import SeriesDetails from "./pages/SeriesDetails";
import TopMoviesPage from "./pages/TopMoviesPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
            <Route path="/movies/top" element={<TopMoviesPage />} />
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
