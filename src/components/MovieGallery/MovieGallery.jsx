import { Link } from 'react-router-dom';

import fallback from '../images/fallback.png';
import { BASE_URL_IMG } from 'fetchApi';
import { Wrapper, Info, Card, Img } from './MovieGallery.styled';

const MovieGallery = ({ movies, location }) => {
    return (
        <>
            <Wrapper>
                {movies.map(({ id, title, poster_path }) => (
                 
                          
                    <Card key={id}>
                       <Link to={`/movies/${id}`} state={{ from: location }}>
                        <Img src={poster_path ? `${BASE_URL_IMG}/${poster_path}` : fallback} alt={title} />
                        <Info>
                            <h2>{title}</h2>
                                </Info>  </Link>
                    </Card>       
                      
                          
                        
                ))}
            </Wrapper>
        </>
    )
};
export default MovieGallery;

