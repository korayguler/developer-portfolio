import React from 'react';

export default function Card(props) {
  const folder = './projects/';

  return (
    <div
      className='card animate__animated animate__jackInTheBox'
      key={props.name}
    >
      <img src={folder + props.image} loading='lazy' alt={props.name} />
      <span className='name'>{props.name}</span>
      <div className='tags'>
        {props.tech.map((e) => {
          return <span>{e}</span>;
        })}
      </div>
      <div className='url'>
        <a
          className='btn btn-hover'
          href={props.source}
          target='_blank'
          rel='noreferrer'
        >
          Source
        </a>
        {props.live && (
          <a
            className={'btn btn-hover'}
            href={props.live}
            target='_blank'
            rel='noreferrer'
          >
            {' '}
            Preview
          </a>
        )}
      </div>
    </div>
  );
}
