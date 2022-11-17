import { useState, useEffect } from 'react';
import { fetchTrendingMovie } from 'fetchApi';
import MovieGallery from 'components/MovieGallery/MovieGallery';
import { Loader } from 'components/Loader/Loader';
import { ErrorView } from 'components/Error/Error';
import { Title } from './Home.styled';
import { Box } from 'components/Box/Box.styled';



const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const getMovies = () => {
      setLoading(true);
      fetchTrendingMovie()
        .then(results => {
          setMovies(results);
        })
        .catch(error => {
          setError({ error });
        })
        .finally(() => setLoading(false));
    };
    getMovies();
  }, [])
    
    

  return (
    <Box>
      <Title>Trending Movies</Title>
      {loading && <Loader/>}
      {error && <ErrorView />}
      {movies && <MovieGallery movies={movies} />}  
      
    </Box>
  );
};

export default Home;