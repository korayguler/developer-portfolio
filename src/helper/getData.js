export const getData = async () => {
  const response = await fetch(process.env.PUBLIC_URL + '/data.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const data = await response.json();
  return data;
};
