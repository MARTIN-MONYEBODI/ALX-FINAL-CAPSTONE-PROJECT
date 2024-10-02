import axios from 'axios';

const API_KEY = '7b480773';  // API key
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

// Function to fetch movies by search term
export const fetchMovies = async (searchTerm) => {
  try {
    const response = await axios.get(`${BASE_URL}&s=${searchTerm}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data from OMDB API", error);
    return null;
  }
};

// Function to fetch detailed movie information by ID
export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}&i=${movieId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details", error);
    return null;
  }
};