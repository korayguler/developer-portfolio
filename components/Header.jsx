import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { fetchUserData } from '../utils/fetchUserData';

export default function Header() {
  const [social, setSocial] = useState([]);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    fetchUserData().then((items) => {
      setSocial(items.social);
      setProfile(items.profile);

      if (localStorage.getItem('theme') !== null) {
        document.body.classList.add(localStorage.getItem('theme'));
      } else {
        if (profile.theme === 'dark') {
          document.body.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        }
      }
    });
  }, []);

  function theme() {
    if (localStorage.getItem('theme') === null) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.removeItem('theme');
    }
  }

  return (
    <header className='header'>
      <div className='logo'>
        <Link href='/'>
          <a>{profile.fullname}</a>
        </Link>
      </div>
      <nav className='nav'>
        <Link href='/'>
          <a className='btn btn-hover'>Home</a>
        </Link>
        <Link href='/projects'>
          <a className='btn btn-hover'>Projects</a>
        </Link>
        <Link href='/posts'>
          <a className='btn btn-hover'>Posts</a>
        </Link>
      </nav>
      <div className='helpers'>
        <span className='social'>
          {social.map((s, i) => (
            <a href={s.url} target='_blank' rel='noreferrer' key={i}>
              <i className={s.icon}></i>
            </a>
          ))}
        </span>
        <span className='theme' onClick={(e) => theme()}>
          <i className='fas fa-adjust'></i>
        </span>
      </div>
    </header>
  );
}
