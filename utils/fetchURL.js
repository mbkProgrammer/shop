const fetchURL = async ({
  url, method = 'GET', body = {},
}) => {
  if (method === 'POST') {
    const response = await fetch(url, {
      method,
      body: JSON.stringify(body),
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  }
  const response = await fetch(url, {
    method,
    redirect: 'follow',
  });
  return response.json();
};
export default fetchURL;
