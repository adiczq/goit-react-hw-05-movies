import PropTypes from 'prop-types';

const BASE_URl = 'https://api.themoviedb.org/';
const KEY = '432d0a09cce951285c1f7d7c54617eee';

export const fetchQuery = async query => {
  const response = await fetch(`${BASE_URl}${query}api_key=${KEY}`);
  if (response.ok) {
    return response.json();
  }
  return await Promise.reject(new Error('error'));
};

fetchQuery.propTypes = {
  query: PropTypes.string.isRequired,
};
