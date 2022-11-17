import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'fetchApi';
import { MovieDetailsCard } from 'components/MovieDetailsCard/MoviDetailsCard';
import { Loader } from 'components/Loader/Loader';
import { ErrorView } from 'components/Error/Error';
import { Button, Title } from './MovieDetails.styled';



const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        fetchMovieDetails(movieId)
            .then(results => {
                setMovie(results)
            })
            .catch(error => {
                setError({ error })
                
            })
            .finally(() => setLoading(false))
    }, [movieId]);


    return (
        <>
              
            
             {loading && <Loader/>}
             {error && <ErrorView />}
            
            <Button to={location.state?.from ?? '/'}>Go back</Button>
            {movie && (
                <>
                <MovieDetailsCard movieDetails={movie} />            
            <div>
            <Title>Additional information:</Title>
            <Button to="cast" state={{ ...location.state }}>
            Cast
            </Button>
            <Button to="reviews" state={{ ...location.state }}>
            Reviews
            </Button>
                    </div>
                  <Outlet />   
            </>
            )
            }
        </>

    )

}

export default MovieDetails;