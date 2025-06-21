import React, { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import './HeroSlider.css';

import img1 from '../assets/scoreboard.png';
import img2 from '../assets/1.jpg';
import img3 from '../assets/2.jpg';
import img4 from '../assets/3.jpg';
import img5 from '../assets/4.png';
import img6 from '../assets/5.jpg';
import img7 from '../assets/img1.png';
import img8 from '../assets/img2.png';
import img9 from '../assets/img3.png';
import img10 from '../assets/img4.png';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const HeroSlider = () => {
  useEffect(() => {
    const splide = new Splide('.hero-slider-splide', {
      type: 'loop',
      perPage: 1,
      autoplay: true,
      interval: 3000,
      pauseOnHover: false,
      arrows: false,
      pagination: true,
      drag: true,
    });

    splide.mount();

    return () => splide.destroy();
  }, []);

  return (
    <section className="hero-v2" id="heroslider">
      <div className="hero-content">
        <h1>
          Bảng điểm thông minh <span>Arena</span>
        </h1>
        <p>
          Giải pháp tối ưu cho thi đấu Billiards chuyên nghiệp – cảm ứng hiện đại, thống kê thời gian thực,
          kết nối trực tuyến, giao diện đột phá.
        </p>
        <div className="hero-buttons">
          <a href="#features" className="btn primary">Khám phá tính năng</a>
          <a href="#contact" className="btn outline">Liên hệ tư vấn</a>
        </div>
      </div>

      <div className="hero-slider-wrapper">
        <div className="splide hero-slider-splide">
          <div className="splide__track">
            <ul className="splide__list">
              {images.map((img, index) => (
                <li className="splide__slide" key={index}>
                  <div className="hero-slide-item">
                    <img src={img} alt={`slide-${index}`} />
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

export default HeroSlider;
