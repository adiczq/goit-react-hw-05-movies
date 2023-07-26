import ReviewsItem from 'components/ReviewsItem/ReviewsItem';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'services/api';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieID } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    API.fetchQuery(`3/movie/${movieID}/reviews?`)
      .then(response => {
        setReviews([...response.results]);
      })
      .catch(() => {
        console.log('error');
      });
  }, [movieID]);
  return (
    <>
      {reviews.length > 0 ? (
        <ul className={css.list}>
          {reviews.map(item => (
            <ReviewsItem key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <p>Not found</p>
      )}
    </>
  );
};
export default Reviews;
