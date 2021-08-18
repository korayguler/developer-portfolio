import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import fetchMediumPosts from '../utils/fetchMediumPosts';
export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchMediumPosts().then((data) => {
      setPosts(data.items);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className='posts animate__animated animate__lightSpeedInLeft   '>
          {posts.map((e, i) => {
            return (
              <a
                className='post'
                href={e.link}
                target='_blank'
                rel='noreferrer'
                key={i}
              >
                <div className='image'>
                  <img src={e.thumbnail} alt={e.title} />
                </div>
                <div className='content'>
                  <h2>{e.title}</h2>
                  <p>
                    {e.categories.map((e, i) => {
                      return <span key={i}>{e}</span>;
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
