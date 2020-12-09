import React, { useState, useEffect } from 'react';
import Loader from './Loader';
export default function Gallery() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data.items);
      setIsLoading(false);
      console.log(data);
    });
  }, []);

  async function getPosts() {
    const username = 'pddivine';
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`,
    );
    const result = await response.json();
    return result;
  }
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className='posts animate__animated animate__fadeInUpBig'>
          {posts.map((e) => {
            return (
              <a
                className='post'
                href={e.link}
                target='_blank'
                rel='noreferrer'
              >
                <div className='image'>
                  <img src={e.thumbnail} alt={e.title} />
                </div>
                <div className='content'>
                  <h2>{e.title}</h2>
                  <p>
                    {e.categories.map((e) => {
                      return <span>{e}</span>;
                    })}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      )}
    </>
  );
}
