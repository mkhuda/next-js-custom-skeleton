import Frisbee from 'frisbee';

/**
 * Call an API Service with Frisbee
 *
 * @param auth
 * @returns {undefined}
 */
const Api = (auth) => new Frisbee({
  baseURI: "https://api.host.com",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${auth.getToken()}`
  },
});

export default Api;

