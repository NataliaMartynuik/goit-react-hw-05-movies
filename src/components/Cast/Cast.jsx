import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieCredits } from 'fetchApi';
import { BASE_URL_IMG } from 'fetchApi';
import default_img from '../images/default_img.png';
import { Wrapper } from './Cast.styled';
import { Box } from '../Box/Box.styled';
import { Loader } from '../Loader/Loader';
import { ErrorView } from '../Error/Error';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

 
  useEffect(() => {
    const getMoviesCast = () => {
      setLoading(true);
      fetchMovieCredits(movieId)
        .then(results => {
          if (results.cast.length === 0) {
            return;
          }
          setCast(results.cast)
        })
        .catch(error => {
          setError({ error })
        })
        .finally(() => setLoading(false))
    };
    getMoviesCast();
  }, [movieId]);


  return (
    <Box>
      
      <Wrapper>
       {loading && <Loader/>}
       {error && <ErrorView />}
        {cast.map(({ id, name, character, profile_path }) => {
          return (
            <li key={id}>
              <img
                src={profile_path ? `${BASE_URL_IMG}/${profile_path}` : default_img}
                alt={name} />
              <div>
                <p>Name: {name}</p>
                <p>Character: {character}</p>
              </div>
            </li>
          );
        })}
      </Wrapper>
    </Box>
  );
};

export default Cast;