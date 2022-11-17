import axios from 'axios';

const API_KEY = '67411ce4d5e0b6db7c1c44c04cce0d92';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w300';

export const fetchTrendingMovie = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

export const fetchMovieSearch = async query => {
  const response = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`);
  return response.data.results;
};

export const fetchMovieDetails = async id => {
  const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return response.data;
};

export const fetchMovieReviews = async id => {
  const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
  return response.data.results;
};

export const fetchMovieCredits = async id => {
  const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  return response.data;
};