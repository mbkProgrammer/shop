import WINDOW from './window';

const fetchURL = async ({
  url, method = 'GET', body = {},
}) => {
  const user = WINDOW.cookies
    ? WINDOW.cookies.get('user')
    : {};
  const params = {
    method,
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (user && user.access_token) {
    params.headers['x-access-token'] = user.access_token;
  }
  if (method === 'POST') {
    params.body = JSON.stringify(body);
  }
  const response = await fetch(url, params);
  return response.json();
};
export default fetchURL;
