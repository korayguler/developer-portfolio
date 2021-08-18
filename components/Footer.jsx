import React from 'react';
import Image from 'next/image';
export default function Footer() {
  return (
    <footer className='footer'>
      <span>
        <a
          href='https://github.com/korayguler/developer-portfolio'
          target='_blank'
          rel='noreferrer'
        >
          made with
          <span className='icon'>
            <i className='fas fa-heart'></i>
          </span>
          open Source
        </a>
      </span>
    </footer>
  );
}
