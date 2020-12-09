import React, { useState, useEffect } from 'react';
import { getData } from '../helper/getData';
import Loader from './Loader';
export default function Home() {
  const [profile, setProfile] = useState({});
  const [frontend, setFrontend] = useState([]);
  const [backend, setBackend] = useState([]);
  const [devtools, setDevTools] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData().then((items) => {
      setProfile(items.profile);
      setFrontend(items.tools.frontend);
      setBackend(items.tools.backend);
      setDevTools(items.tools.devtools);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading && <Loader />}

      <section className='section animate__animated animate__jackInTheBox'>
        <h2 className='title'>About Me</h2>
        <div className='profile'>
          <img src={`./web/${profile.profilePic}`} alt='' />
          <div>
            <span>Hi, my name is</span>
            <h1>{profile.fullname}</h1>
            <p>{profile.about}</p>
            <div className='connect'>
              <a href={profile.email} className='btn btn-hover'>
                CONTACT
              </a>
              <a
                className='btn btn-hover'
                href={profile.resume}
                target='_blank'
                rel='noreferrer'
              >
                RESUME
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className='section section animate__animated animate__fadeInUpBig'>
        <h2 className='title'>Front-end Tools</h2>
        <div className='skills'>
          {frontend.map((e, i) => {
            return (
              <div className='skill-item' key={i}>
                <i className={e.icon}></i>
                <span>{e.tool}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className='section animate__animated animate__fadeInUpBig'>
        <h2 className='title'>Back-end Tools</h2>
        <div className='skills'>
          {backend.map((e, i) => {
            return (
              <div className='skill-item' key={i}>
                <i className={e.icon}></i>
                <span>{e.tool}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className='section section animate__animated animate__fadeInUpBig'>
        <h2 className='title'>Dev Tools</h2>
        <div className='skills'>
          {devtools.map((e, i) => {
            return (
              <div className='skill-item' key={i}>
                <i className={e.icon}></i>
                <span>{e.tool}</span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
