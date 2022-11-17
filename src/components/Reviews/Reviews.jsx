import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'fetchApi';
import { ReviewsList, Text } from './Reviews.styled';
import { Loader } from '../Loader/Loader';
import { ErrorView } from '../Error/Error';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const getMoviesReview = () => {
      setLoading(true);
      fetchMovieReviews(movieId)
        .then(results => {
          if (results.length === 0) {
            return;
          }
          setReview(results)
        })
        .catch(error => {
          setError({ error })
        })
        .finally(() => setLoading(false))
    };
    getMoviesReview();
  }, [movieId]);

  return (
    
    <ReviewsList>
       {loading && <Loader/>}
       {error && <ErrorView />}
       {review ? 
          review.map(({ id, author, content }) => (
            <li key={id}>
              <span> Author: {author}</span>
              <p>{content}</p>
            </li>
          ))
        
       : <Text>We don't have any reviews for this movie.</Text>}
      
        </ReviewsList>
   
  );
};

export default Reviews;