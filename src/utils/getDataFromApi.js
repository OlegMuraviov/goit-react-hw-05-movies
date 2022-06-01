import axios from 'axios';

const API_KEY = 'c2c2179bae59e0599504e4f54aeda7db';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: API_KEY,
  },
});

// TRENDS = 'trending/all/day'
export const getPopularMovies = async () => {
  const { data } = await instance.get('trending/all/day');
  return data;
};

// MOVIEbyID = 'movie/{id}'
export const getMovieById = async id => {
  const { data } = await instance.get(`movie/${id}`);
  return data;
};

// MOVIEbySearch = 'search/movie'
export const getMovieBySearch = async searchedMovie => {
  const { data } = await instance.get(`search/movie?query=${searchedMovie}`);
  return data;
};

// CREDITS = '/movie/{movie_id}/credits';

export const getCredits = async id => {
  const { data } = await instance.get(`movie/${id}/credits`);
  return data;
};

// REVIEWS = '/movie/{movie_id}/reviews';

export const getReviews = async id => {
  const { data } = await instance.get(`movie/${id}/reviews`);
  return data;
};
