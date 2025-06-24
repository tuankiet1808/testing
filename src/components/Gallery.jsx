import React, { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import './Gallery.css';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.png';
import img5 from '../assets/5.jpg';
import img6 from '../assets/img6.png';

const images = [img1, img2, img3, img4, img5, img6];

const Gallery = () => {
  useEffect(() => {
    const splide = new Splide('.splide', {
      type: 'slide',
      perPage: 3,
      perMove: 1,
      gap: '16px',
      arrows: false,
      pagination: true,
      autoplay: true,
      interval: 3000,
      pauseOnHover: false,
      resetProgress: false,
      rewind: true,
      padding: '1rem',
      breakpoints: {
        1024: {
          perPage: 2,
          padding: '1rem',
        },
        768: {
          perPage: 1,
          padding: '1.5rem',
        },
      },
    });

  splide.mount();

  // 👉 Cleanup khi component unmount (hoặc hot reload): tránh mount chồng
  return () => splide.destroy();
}, []);



  return (
    <section className="gallery" id="gallery">
      <h2>Hình ảnh thực tế</h2>
      <p className="sub">Một số hình ảnh về bảng điểm Arena tại các câu lạc bộ và giải đấu</p>

      <div className="gallery-wrapper">
        <div className="splide">
          <div className="splide__track">
            <ul className="splide__list">
              {images.map((src, index) => (
                <li className="splide__slide" key={index}>
                  <div className="gallery-item">
                    <img src={src} alt={`gallery-${index + 1}`} />
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

export default Gallery;
