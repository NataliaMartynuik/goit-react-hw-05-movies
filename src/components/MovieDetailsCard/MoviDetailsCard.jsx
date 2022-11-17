
import PropTypes from 'prop-types';
import fallback from '../images/fallback.png';
import { BASE_URL_IMG } from 'fetchApi';
import { Wrapper, Img, MovieInfo} from './MovieDetailsCard.styled'

export const MovieDetailsCard = ({
  movieDetails: {
    title,
    release_date,
    genres,
    overview = '',
    poster_path,
    vote_average,
  },
}) => {
  const year = release_date.slice(0, 4);
  
  return (
    <Wrapper>
      <Img
        src={poster_path ? `${BASE_URL_IMG}/${poster_path}` : fallback}
        alt={title}
      />
      <MovieInfo>
        <h1>
          {title} ({year})
        </h1>
        <p>User score: {vote_average}</p>

        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        {genres.map(({ id, name }) => (
          <span key={id}>{name} </span>
        ))}
      </MovieInfo>
    </Wrapper>
  );
};

MovieDetailsCard.propTypes = {
  movieDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }),
};