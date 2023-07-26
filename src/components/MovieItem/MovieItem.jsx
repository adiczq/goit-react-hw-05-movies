import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from './MovieItem.module.css';

const MovieItem = ({ item }) => {
  const location = useLocation();

  return (
    <li>
      <Link
        className={css.movie}
        to={`/movies/${item.id}`}
        state={{ from: location }}
      >
        {item.original_name || item.original_title}
      </Link>
    </li>
  );
};

export default MovieItem;

MovieItem.propTypes = {
  item: PropTypes.object.isRequired,
};
