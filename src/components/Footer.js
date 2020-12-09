import React from 'react';

export default function Footer() {
  return (
    <footer className='footer'>
      <span>
        <a
          href='https://github.com/korayguler/developer-portfolio'
          target='_blank'
          rel='noreferrer'
        >
          made with{' '}
          <span style={{ 'color': '#A81020' }}>
            <i class='fas fa-heart'></i>
          </span>{' '}
          open Source
        </a>
      </span>
    </footer>
  );
}
