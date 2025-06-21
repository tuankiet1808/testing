import React from 'react';
import './Features.css';
import { FaWifi, FaTv, FaGamepad, FaChartBar } from 'react-icons/fa';

const features = [
  {
    icon: <FaTv />,
    title: 'Màn hình cảm ứng Full HD 21″',
    description: 'Giao diện trực quan, dễ sử dụng cho mọi lứa tuổi và loại hình thi đấu.',
  },
  {
    icon: <FaWifi />,
    title: 'Kết nối Wifi / LAN',
    description: 'Kết nối nhanh, ổn định – hỗ trợ thi đấu online, cập nhật dữ liệu theo thời gian thực.',
  },
  {
    icon: <FaGamepad />,
    title: 'Hỗ trợ mọi chế độ chơi',
    description: 'Carom, Pool, Libre... tuỳ chỉnh linh hoạt theo từng trận đấu hoặc câu lạc bộ.',
  },
  {
    icon: <FaChartBar />,
    title: 'Tích hợp báo cáo và thống kê',
    description: 'Ghi nhận lịch sử điểm, xếp hạng vận động viên, dữ liệu giải đấu...',
  },
];

const Features = () => {
  return (
    <section className="features" id="features">
      <h2>Tính năng nổi bật</h2>
      <div className="features-list">
        {features.map((feat, index) => (
          <div className="feature-card" key={index}>
            <div className="icon">{feat.icon}</div>
            <h3>{feat.title}</h3>
            <p>{feat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
