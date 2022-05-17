import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import HomePage from './pages/HomePage';
import Reviews from './Reviews/Reviews';

// import MoviesPage from './pages/MoviesPage';
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
// import MovieDetailsPage from './pages/MovieDetailsPage';
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
// import Cast from './Cast/Cast';
const Cast = lazy(() => import('./Cast/Cast'));

// const Reviews = lazy(() => './Reviews/Reviews');

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<h1>LOADING...</h1>}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/movies" element={<MoviesPage />} />

          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
