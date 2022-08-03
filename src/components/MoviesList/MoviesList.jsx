import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  MovList,
  MovListItem,
  MovListItemPoster,
  MovTitle,
} from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <MovList>
      {movies.map(movie => {
        return (
          <MovListItem key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <MovListItemPoster
                src={
                  movie.poster_path
                    ? 'https://image.tmdb.org/t/p/w300' + movie.poster_path
                    : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'
                }
                alt=""
              />
              <MovTitle>{movie.title}</MovTitle>
            </Link>
          </MovListItem>
        );
      })}
    </MovList>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
