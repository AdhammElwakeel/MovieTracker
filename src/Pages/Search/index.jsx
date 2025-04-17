import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useSearch from '../../Hooks/useSearch';
import SearchIcon from '../../assets/icons/search';
import Star from '../../assets/icons/Star';
import './Search.css';

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [mediaType, setMediaType] = useState('movie');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  // Use URLSearchParams to handle query parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('query') || '';
    const page = parseInt(params.get('page')) || 1;
    const type = params.get('type') || 'movie';

    setSearchQuery(query);
    setDebouncedQuery(query);
    setCurrentPage(page);
    setMediaType(type);
  }, [location.search]);

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
      // Update URL with search parameters
      const params = new URLSearchParams();
      if (searchQuery) params.set('query', searchQuery);
      if (currentPage > 1) params.set('page', currentPage.toString());
      if (mediaType !== 'movie') params.set('type', mediaType);
      navigate(`/search?${params.toString()}`, { replace: true });
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery, currentPage, mediaType, navigate]);

  const { data, isLoading, error } = useSearch(debouncedQuery, currentPage, mediaType);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo(0, 0);
  };

  return (
    <div className="search-container">
      <div className="search-header">
        <h1>Discover Movies & TV Shows</h1>
        <form onSubmit={handleSubmit} className="search-form">
          <div className="search-input-container">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for movies or TV shows..."
              className="search-input"
            />
            <button type="submit" className="search-button">
              <SearchIcon width="24" height="24" />
            </button>
          </div>
          <div className="search-type-toggle">
            <button
              className={mediaType === 'movie' ? 'active' : ''}
              onClick={() => setMediaType('movie')}
              type="button"
            >
              Movies
            </button>
            <button
              className={mediaType === 'tv' ? 'active' : ''}
              onClick={() => setMediaType('tv')}
              type="button"
            >
              TV Shows
            </button>
          </div>
        </form>
      </div>

      <div className="search-results">
        {isLoading ? (
          <div className="search-loading">
            <div className="loader"></div>
            <p>Searching...</p>
          </div>
        ) : error ? (
          <div className="search-error">
            <p>Something went wrong. Please try again.</p>
          </div>
        ) : data?.results?.length === 0 ? (
          <div className="no-results">
            <p>No results found. Try a different search.</p>
          </div>
        ) : (
          <>
            <div className="results-grid">
              {data?.results.map((item) => (
                <div
                  key={item.id}
                  className="result-card"
                  onClick={() => navigate(`/${item.media_type}/${item.id}`)}
                >
                  {item.poster_path ? (
                    <img
                      src={item.poster_path}
                      alt={item.title}
                      className="result-poster"
                    />
                  ) : (
                    <div className="result-poster-placeholder">
                      <span>{item.title[0]}</span>
                    </div>
                  )}
                  <div className="result-info">
                    <h3>{item.title}</h3>
                    <div className="result-meta">
                      {item.release_date && (
                        <span className="release-year">
                          {new Date(item.release_date).getFullYear()}
                        </span>
                      )}
                      {item.vote_average > 0 && (
                        <span className="rating">
                          <Star width="14" height="14" />
                          {item.vote_average.toFixed(1)}
                        </span>
                      )}
                    </div>
                    <p className="result-overview">{item.overview}</p>
                  </div>
                </div>
              ))}
            </div>
            {data?.total_pages > 1 && (
              <div className="pagination">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="pagination-button"
                >
                  Previous
                </button>
                <span className="page-info">
                  Page {currentPage} of {data.total_pages}
                </span>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === data.total_pages}
                  className="pagination-button"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Search;