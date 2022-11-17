import { Searchbar } from "components/SearchBar/SearchBar";
import { fetchMovieSearch } from "fetchApi"; 
import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import MovieGallery from 'components/MovieGallery/MovieGallery';
import { Loader } from 'components/Loader/Loader';
import { ErrorView } from 'components/Error/Error';


const Movies = () => {
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('query');



    useEffect(() => {
        if (!searchQuery) {
            return;
        }

        const getSearchMovies = () => {
            setLoading(true);
            fetchMovieSearch(searchQuery)
                .then(results => {
                    if (!results.length) {
                        toast.info('Sorry, no results were found');
                        return;
                    }
            setMovies(results);
        })

                .catch(error => {
                    setError('wwwwwww')
                    console.log(error)
            }) 
               
            .finally (setLoading(false))
            
        }
        getSearchMovies();
    }, [searchQuery]);

    const handleSubmit = query => {
        if (!query.trim()) {
            setMovies(null);
            toast.info('Please. enter search query!')
        }

        setSearchParams({ query })
    }

    return (
        <>
            <Searchbar onSubmit={handleSubmit} />
              {loading && <Loader/>}
              {error && <ErrorView />}
             {movies && <MovieGallery movies={movies}
                location={location} />}
            <ToastContainer position="top-center" autoClose={2000} />
        </>
    )
}

export default Movies;