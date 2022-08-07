import {
  MovieInfoCard,
  MovieInfoPoster,
  MovieInfoTitle,
  MovieInfoBlock,
} from './MovieInfo.styled';
import { ratingNormalize, releaseDataNormalize } from 'utils/movieDataNormaliz';

export const MovieInfo = ({ movie }) => {
  return (
    <MovieInfoCard>
      <MovieInfoPoster
        src={
          movie.poster_path
            ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path
            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'
        }
        alt=""
        width="100px"
      />
      <div>
        <MovieInfoTitle>
          {movie.title}
          {'  '}
          <span>({releaseDataNormalize(movie.release_date)})</span>
        </MovieInfoTitle>
        <MovieInfoBlock>
          Rating: <span>{ratingNormalize(movie.vote_average)}</span>
        </MovieInfoBlock>
        <MovieInfoBlock>Overview: {movie.overview}</MovieInfoBlock>
        <MovieInfoBlock>
          Genres:
          <ul>
            {movie.genres.map(genre => {
              return <li key={genre.id}>{genre.name}</li>;
            })}
          </ul>
        </MovieInfoBlock>
      </div>
    </MovieInfoCard>
  );
};
