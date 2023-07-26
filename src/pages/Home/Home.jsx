import React from 'react';
import MovieItem from 'components/MovieItem/MovieItem';
import { useEffect, useState } from 'react';
import * as API from 'services/api';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.fetchQuery('3/trending/all/day?')
      .then(response => {
        setMovies([...response.results]);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <ul className={css.list}>
      {movies.length &&
        movies.map(movie => <MovieItem key={movie.id} item={movie} />)}
    </ul>
  );
};

export default Home;
