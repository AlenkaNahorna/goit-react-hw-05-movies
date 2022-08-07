import { useState, useEffect, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMovieInfo } from 'api/getMovieInfo';
import { MovieItem } from './MovieDetails.styled';
import { MovieInfoBlock } from '../../components/MovieInfo/MovieInfo.styled';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import {
  BackLink,
  BackLinkIcon,
} from '../../components/BackLink/BackLink.staled';

import { Loader } from 'components/Loader/Loader';
import { Box } from 'styles/Box';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState();
  const location = useLocation().state?.from ?? '/';

  useEffect(() => {
    async function onMovieInfo() {
      try {
        const { data } = await getMovieInfo(movieId);
        setMovieInfo(data);
      } catch (error) {
        toast.info(`Something went wrong ${error}`);
      }
    }
    onMovieInfo();
  }, [movieId]);

  return (
    <Box max-width="768px">
      <BackLink to={location}>
        <BackLinkIcon />
        Go Back
      </BackLink>
      {movieInfo && (
        <div>
          <MovieInfo movie={movieInfo} />
          <MovieInfoBlock>Addictional information:</MovieInfoBlock>
          <ul>
            <MovieItem>
              <Link to="credits" state={{ from: location }}>
                Cast
              </Link>
            </MovieItem>
            <MovieItem>
              <Link to="reviews" state={{ from: location }}>
                Reviews
              </Link>
            </MovieItem>
          </ul>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </Box>
  );
};

export default MovieDetails;
