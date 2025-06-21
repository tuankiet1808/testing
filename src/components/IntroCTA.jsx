import React from 'react';
import './IntroCTA.css';
import { FaTabletAlt, FaChartLine, FaWifi} from 'react-icons/fa';

const benefits = [
  {
    icon: <FaTabletAlt />,
    title: 'Giao diện cảm ứng',
    desc: 'Trực quan, dễ thao tác trên mọi thiết bị màn hình cảm ứng, phù hợp mọi lứa tuổi.',
  },
  {
    icon: <FaChartLine />,
    title: 'Thống kê chuyên sâu',
    desc: 'Tự động tính điểm, lưu lịch sử, hỗ trợ bảng xếp hạng và phân tích sau trận.',
  },
  {
    icon: <FaWifi />,
    title: 'Kết nối thời gian thực',
    desc: 'Đồng bộ bảng điểm với livestream, chia sẻ nhanh kết quả lên mạng xã hội.',
  },
  {
    icon: <FaWifi />,
    title: 'Hỗ trợ nhiều thể loại',
    desc: 'Tương thích các thể loại bi-a như Carom, Pool, Libre, linh hoạt cấu hình luật chơi.',
  },
];

const IntroCTA = () => {
  return (
    <section className="intro-benefits" id="intro">
      <div className="intro-benefits-container">
        <h2>
          Vì sao chọn <span>Arena Scoreboard?</span>
        </h2>
        <div className="benefits-grid">
          {benefits.map((item, index) => (
            <div className="benefit-card" key={index}>
              <div className="benefit-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <a href="#contact" className="cta-button">Liên hệ tư vấn</a>
      </div>
    </section>
  );
};

export default IntroCTA;
