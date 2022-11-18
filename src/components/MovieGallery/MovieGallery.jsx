import { Link } from 'react-router-dom';

import fallback from '../images/fallback.png';
import { BASE_URL_IMG } from 'fetchApi';
import { Wrapper, Info, Card, Img } from './MovieGallery.styled';

const MovieGallery = ({ movies, location }) => {
    return (
        
            <Wrapper>
                {movies.length > 0 && movies.map(({ id, title, poster_path }) => (
                  <li key={id}>
                          
                    
                        <Link to={`/movies/${id}`} state={{ from: location }}>
                         <Card key={id} >   
                        <Img src={poster_path ? `${BASE_URL_IMG}/${poster_path}` : fallback} alt={title} />
                        <Info>
                            <h2>{title}</h2>
                                </Info> 
                         </Card>   </Link>     
                      
                 </li>         
                        
                ))}
            </Wrapper>
       
    )
};
export default MovieGallery;

