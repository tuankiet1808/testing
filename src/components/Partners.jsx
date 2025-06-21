import React, { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import './Partners.css';

import kh1 from '../assets/kh1.jpg';
import kh2 from '../assets/kh2.jpg'; 
import kh3 from '../assets/kh3.jpg';  
import kh4 from '../assets/kh4.jpg'; 
import kh5 from '../assets/kh5.jpg';
import kh6 from '../assets/kh6.jpg';    

const partners = [
  { name: 'CLB Carom 340', logo: kh1 },
  { name: 'B52 Billiards', logo: kh2 },
  { name: 'Arena Cup 2024', logo: kh3 },
  { name: 'Carom Club HN', logo: kh4 },
  { name: 'Carom Club DN', logo: kh5 },
  { name: 'Carom Club QG', logo: kh6 },
];

const Partners = () => {
  useEffect(() => {
    new Splide('.splide.partners-slider', {
      type: 'slide',
      perPage: 4,
      perMove: 1,
      gap: '16px',
      arrows: false,
      pagination: true,
      autoplay: true,
      interval: 3000,
      pauseOnHover: false,
      resetProgress: false,
      rewind: true,
      breakpoints: {
        1024: {
          perPage: 2,
          padding: '1rem',
        },
        768: {
          perPage: 1,
          padding: '1rem',
        },
      },
    }).mount();
  }, []);

  return (
    <section className="partners" id="partners">
      <h2>Khách hàng</h2>
      <p className="sub">Hơn 100+ câu lạc bộ và giải đấu tin dùng Arena Scoreboard</p>
      <div className="partners-wrapper">
        <div className="splide partners-slider">
          <div className="splide__track">
            <ul className="splide__list">
              {partners.map((p, index) => (
                <li className="splide__slide" key={index}>
                  <div className="partner-card">
                    <img src={p.logo} alt={p.name} />
                    <p>{p.name}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
