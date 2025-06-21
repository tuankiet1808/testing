import React from 'react';
import './Gallery.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.png';
import img5 from '../assets/5.jpg';
import img6 from '../assets/img6.png';
const images = [
img1,img2,img3,img4,img5,img6
];

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <h2>Hình ảnh thực tế</h2>
      <p className="sub">Một số hình ảnh về bảng điểm Arena tại các câu lạc bộ và giải đấu</p>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div className="gallery-item" key={index}>
            <img src={src} alt={`gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
