import React, { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import './Ambassadors.css';

import nguyenthanhnam from '../assets/nguyenthanhnam.jpg';
import tranvanhuy from '../assets/tranvanhuy.jpeg';
import phanhieudinh from '../assets/phanhieudinh.jpg';

const ambassadors = [
  {
    name: 'Nguyễn Thành Nam',
    title: 'Vô địch Billiards Quốc Gia',
    image: nguyenthanhnam,
    quote: '“Bảng điểm Arena giúp tôi theo dõi trận đấu cực kỳ tiện lợi và chuyên nghiệp.”',
  },
  {
    name: 'Trần Văn Huy',
    title: 'Top 4 Giải Carom Miền Nam',
    image: tranvanhuy,
    quote: '“Không chỉ hiển thị điểm, Arena còn hỗ trợ cả xếp hạng và thống kê chi tiết.”',
  },
  {
    name: 'Phan Hiểu Đình',
    title: 'Huy chương vàng tại ASIAD lần thứ 16',
    image: phanhieudinh,
    quote: '“Không chỉ hiển thị điểm, Arena còn hỗ trợ cả xếp hạng và thống kê chi tiết.”',
  },
];

const Ambassadors = () => {
  useEffect(() => {
  new Splide('.splide.ambassador-slider', {
    type: 'slide',
    perPage: 3,
    perMove: 1,
    gap: '20px', // ❗ bỏ gap để không bị dư chiều rộng
    arrows: false,
    pagination: true,
    autoplay: true,
    interval: 3000,
    pauseOnHover: false,
    resetProgress: false,
    rewind: true,
    breakpoints: {
      1024: { perPage: 2, gap: '16px' }, // vẫn giữ khoảng cách ở tablet
      768: { perPage: 1, padding: '1rem' },
    },
  }).mount();

  }, []);

  return (
    <section className="ambassadors" id="ambassadors">
      <h2>Đại sứ thương hiệu</h2>
      <div className="ambassadors-wrapper">
        <div className="splide ambassador-slider">
          <div className="splide__track">
            <ul className="splide__list">
              {ambassadors.map((amb, index) => (
                <li className="splide__slide" key={index}>
                  <div className="ambassador-card">
                    <img src={amb.image} alt={amb.name} />
                    <h3>{amb.name}</h3>
                    <p className="title">{amb.title}</p>
                    <p className="quote">❝ {amb.quote} ❞</p>
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

export default Ambassadors;
