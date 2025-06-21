import React from 'react';
import './HeroSlider.css';
import scoreboard from '../assets/scoreboard.png'; // Đảm bảo đường dẫn đúng đến logo
const HeroSlider = () => {
  return (
    <section className="hero-v2">
      <div className="hero-content">
        <h1>Bảng điểm thông minh <span>Arena</span></h1>
        <p>
          Giải pháp tối ưu cho thi đấu Billiards chuyên nghiệp – cảm ứng hiện đại, thống kê thời gian thực,
          kết nối trực tuyến, giao diện đột phá.
        </p>
        <div className="hero-buttons">
          <a href="#features" className="btn primary">Khám phá tính năng</a>
          <a href="#contact" className="btn outline">Liên hệ tư vấn</a>
        </div>
      </div>
      <div className="hero-image">
        <img src={scoreboard} alt="Arena Scoreboard" />
      </div>
    </section>
  );
};

export default HeroSlider;
