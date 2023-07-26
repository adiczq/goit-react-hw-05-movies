import React from 'react';
import PropTypes from 'prop-types';
import css from './ReviewsItem.module.css';

const ReviewsItem = ({ item }) => {
  return (
    <li className={css.item}>
      <p className={css.name}>{item.author || 'Not found'}</p>
      <p className={css.text}>{item.content || 'Not found'}</p>
    </li>
  );
};

export default ReviewsItem;

ReviewsItem.propTypes = {
  item: PropTypes.object.isRequired,
};
