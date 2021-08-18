import { mediumUserName } from './config';
async function fetchMediumPosts() {
  const response = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUserName}`,
  );
  const result = await response.json();
  return result;
}

export default fetchMediumPosts;
