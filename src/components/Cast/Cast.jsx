import React from 'react';
import CastItem from 'components/CastItem/CastItem';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'services/api';
import { nanoid } from 'nanoid';
import css from './Cast.module.css';

const Cast = () => {
  const { movieID } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    API.fetchQuery(`3/movie/${movieID}/credits?`)
      .then(response => {
        setCast([...response.cast]);
      })
      .catch(() => {
        console.log('error');
      });
  }, [movieID]);

  return (
    <>
      {cast.length > 0 && (
        <ul className={css.list}>
          {cast.map(item => (
            <CastItem key={nanoid()} item={item} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
