import axios from 'axios';

const API_KEY = 'c2c2179bae59e0599504e4f54aeda7db';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// TRENDS = 'trending/all/day'
export const getPopularMovies = () => {
  axios.defaults.params = {
    api_key: API_KEY,
  };
  return axios.get('trending/all/day').then(({ data }) => data);
};

// MOVIEbyID = 'movie/{id}'
export const getMovieById = id => {
  axios.defaults.params = {
    api_key: API_KEY,
  };
  return axios.get(`movie/${id}`).then(({ data }) => data);
};

// MOVIEbySearch = 'search/movie'
export const getMovieBySearch = searchedMovie => {
  axios.defaults.params = {
    query: searchedMovie,
    api_key: API_KEY,
  };
  return axios.get(`search/movie`).then(({ data }) => data);
};

// CREDITS = '/movie/{movie_id}/credits';

export const getCredits = id => {
  axios.defaults.params = {
    api_key: API_KEY,
  };
  return axios.get(`movie/${id}/credits`).then(({ data }) => data);
};

// REVIEWS = '/movie/{movie_id}/reviews';

export const getReviews = id => {
  axios.defaults.params = {
    api_key: API_KEY,
  };
  return axios.get(`movie/${id}/reviews`).then(({ data }) => data);
};
