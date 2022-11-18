import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from "react";
import SharedLayout from './SharedLayout/SharedLayout';
import { Loading } from './Loader/Loader';



const Movies = lazy(() => import('pages/Movies'));
const Home = lazy(() => import('pages/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loading />} >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />  
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </Suspense>
    </>
  );
};

export default App;