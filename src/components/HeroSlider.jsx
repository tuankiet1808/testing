import React, { useState, useEffect } from 'react';
import './HeroSlider.css';

import img1 from '../assets/scoreboard.png';
import img4 from '../assets/3.jpg';
import img5 from '../assets/4.png';
import img6 from '../assets/5.jpg';


const images = [img1, img4, img5, img6];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // đổi mỗi 3s

    return () => clearInterval(timer); // cleanup khi unmount
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

      <div className="hero-image fade">
        <img src={images[index]} alt={`Arena Scoreboard ${index + 1}`} />
      </div>
    </section>
  );
};

export default HeroSlider;
