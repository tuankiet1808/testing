import React from 'react';
import './Pricing.css';

const pricingPlans = [
  {
    title: 'Gói Tiêu Chuẩn',
    price: '11.000.000₫',
    features: [
      'Màn hình cảm ứng 21″',
      'Kết nối Wifi/LAN',
      'Hỗ trợ Carom, Pool, Libre',
      'Hiển thị điểm và thời gian',
    ],
    cta: 'Liên hệ mua',
  },
  {
    title: 'Gói Chuyên Nghiệp',
    price: 'Liên hệ',
    features: [
      'Tất cả tính năng cơ bản',
      'Tùy chỉnh logo/giải đấu',
      'Giao diện thi đấu chuyên nghiệp',
      'Tích hợp thống kê & livestream',
    ],
    cta: 'Yêu cầu báo giá',
  },
];

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <h2>Bảng giá sản phẩm</h2>
      <div className="pricing-cards">
        {pricingPlans.map((plan, index) => (
          <div className="pricing-card" key={index}>
            <h3>{plan.title}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((f, i) => <li key={i}>{f}</li>)}

            </ul>
            <a href="#contact" className="pricing-btn">{plan.cta}</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
