import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { fetchUserData } from '../utils/fetchUserData';
import Loader from '../components/Loader';

export default function PortfolioPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUserData().then((items) => {
      setData(items.projects);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className='row' data-portfolio>
          {data.map((e, i) => {
            return <Card {...e} key={i} />;
          })}
        </div>
      )}
    </>
  );
}
