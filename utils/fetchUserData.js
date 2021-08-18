import { server } from './config';
export const fetchUserData = async () => {
  const response = await fetch(`${server}/data.json`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const data = await response.json();
  return data;
};
