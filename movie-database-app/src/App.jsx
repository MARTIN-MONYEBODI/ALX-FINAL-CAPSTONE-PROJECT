import { useState } from 'react';
import { fetchMovies } from './services/api';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (searchTerm) => {
    const data = await fetchMovies(searchTerm);
    if (data && data.Search) {
      setMovies(data.Search);
      setError(null);
    } else {
      setMovies([]);
      setError("No movies found.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Movie Database</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      <MovieList movies={movies} />
    </div>
  );
}

export default App;