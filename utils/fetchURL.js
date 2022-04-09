const fetchURL = async ({
  url, method = 'GET', body = {},
}) => {
  if (method === 'POST') {
    const response = await fetch(url, {
      method,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  }
  const response = await fetch(url, {
    method,
  });
  return response.json();
};
export default fetchURL;
