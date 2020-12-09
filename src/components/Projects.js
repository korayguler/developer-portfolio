import React, { useState, useEffect } from 'react';
import Card from './Card';
import { getData } from '../helper/getData';
import Loader from './Loader';
export default function Portfolio() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData().then((items) => {
      setData(items.projects);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div class='row' data-portfolio>
          {data.map((e) => {
            return <Card {...e} />;
          })}
        </div>
      )}
    </>
  );
}
