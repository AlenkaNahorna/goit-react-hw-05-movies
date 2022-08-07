import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Box } from 'styles/Box';
import { Loader } from 'components/Loader/Loader';
import { SharedLayout } from 'layout/SharedLayout';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      minHeight="100vh"
    >
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}></Route>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </Box>
  );
};
