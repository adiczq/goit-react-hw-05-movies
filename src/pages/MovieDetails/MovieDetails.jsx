import React, { Suspense, useEffect, useRef, useState } from 'react';
import {
  NavLink,
  Outlet,
  useParams,
  useLocation,
  Link,
} from 'react-router-dom';
import * as API from '../../services/api';
import css from './MovieDetails.module.css';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieID } = useParams();
  const [searchResult, setSearchResult] = useState({});
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.fetchQuery(`3/movie/${movieID}?`);
        setSearchResult(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [movieID]);

  const {
    poster_path,
    original_name,
    original_title,
    vote_average,
    overview,
    genres,
  } = searchResult;

  return (
    <>
      <Link className={css.button} to={backLinkLocationRef.current}>
        Back
      </Link>
      <div className={css.section}>
        <img
          className={css.image}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'http://dummyimage.com/150x200/c0c0c0'
          }
          alt=""
        />
        <div className={css.desc}>
          <h1>{original_name || original_title || 'Not found'}</h1>
          <p>User score: {vote_average * 10 || 'Not found'}%</p>
          <h3>Overview</h3>
          <p>{overview || 'Not found'}</p>
          {genres && genres.length > 0 && (
            <>
              <h3>Genres</h3>
              <p>{genres.map(genre => genre.name).join(', ')}</p>
            </>
          )}
        </div>
      </div>
      <hr />
      <section className={css.addInfo}>
        <h2>Additional information</h2>
        <ul className={css.list}>
          <li>
            <NavLink className={css.item} to="cast">
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink className={css.item} to="reviews">
              Reviews
            </NavLink>
          </li>
        </ul>
      </section>
      <hr />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
