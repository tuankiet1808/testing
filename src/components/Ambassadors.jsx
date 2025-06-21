import React from 'react';
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
  return (
    <section className="ambassadors" id="ambassadors">
      <h2>Đại sứ thương hiệu</h2>
      <div className="ambassador-list">
        {ambassadors.map((amb, index) => (
          <div className="ambassador-card" key={index}>
            <img src={amb.image} alt={amb.name} />
            <h3>{amb.name}</h3>
            <p className="title">{amb.title}</p>
            <p className="quote">❝ {amb.quote} ❞</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ambassadors;
