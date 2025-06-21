import React, { useState } from 'react';
import './Features.css';

import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';

const items = [
 {
    title: 'Tính năng bảng điểm',
    content: (
      <div>
          <h2  style={{ textAlign: 'center', marginBottom: '20px' , fontSize: '24px', fontWeight: 'bold' }}>
            Bảng điểm thông minh Arena – Đồng hành chuyên nghiệp cho mọi trận đấu billiards
          </h2>
      <div className="features-grid">
        {[
          {
            title: "Thiết lập trận đấu nhanh chóng",
            desc: (
              <>
                <p className="mb-2">Arena giúp thiết lập trận đấu đơn giản chỉ với vài thao tác:</p>
                <ul>
                  <li>Lựa chọn số lượng người chơi: 1v1, 2v2 hoặc nhiều hơn.</li>
                  <li>Cài đặt thể loại thi đấu: Pool hoặc Carom.</li>
                  <li>Tuỳ chỉnh quy tắc: Giới hạn thời gian và điểm mục tiêu.</li>
                </ul>
              </>
            ),
            image: img1,
          },
          {
            title: "Hiển thị thông tin chi tiết trận đấu",
            desc: (
              <ul>
                <li>Hiển thị tên người chơi rõ ràng.</li>
                <li>Điểm số cập nhật theo thời gian thực.</li>
                <li>Thời gian thi đấu: thời gian lượt cơ và tổng trận.</li>
                <li>Thông tin thể loại thi đấu kèm hiển thị camera.</li>
              </ul>
            ),
            image: img2,
          },
          {
            title: "Tích hợp Camera",
            desc: (
              <ul>
                <li>Ghi lại toàn bộ trận đấu để lưu giữ và xem lại.</li>
                <li>Hỗ trợ tua lại những tình huống quan trọng.</li>
              </ul>
            ),
            image: img3,
          },
          {
            title: "Bảng xếp hạng",
            desc: (
              <ul>
                <li>Hiển thị thứ hạng, số trận, điểm tích lũy.</li>
                <li>Ghi lại thành tích cá nhân.</li>
                <li>Công khai thông tin để tăng động lực thi đấu.</li>
              </ul>
            ),
            image: img4,
          },
          {
            title: "Lịch sử các trận đấu",
            desc: (
              <ul>
                <li>Danh sách trận đấu theo thời gian.</li>
                <li>Thông tin gồm tên người chơi, thời gian, kết quả.</li>
              </ul>
            ),
            image: img5,
          },
        ].map((f, i) => (
          <div className="feature-card" key={i}>
            <img
              src={f.image}
              alt={f.title}
              className="feature-image"
            />
            <h3 className="feature-title">{f.title}</h3>
            <div className="feature-desc">{f.desc}</div>
          </div>
        ))}
      </div>
      </div>
    ),
  },
{
  title: 'Thông số kỹ thuật',
    content: (
      <ul>
        <li><strong>Tên sản phẩm:</strong> Arena Scoreboard</li>
        <li><strong>Kích thước:</strong> 21.5 inch</li>
        <li><strong>Hệ điều hành:</strong> Android 12</li>
        <li><strong>CPU:</strong> Octa-core (4 ARM Cortex A73 @ 2.0GHz & 4 Cortex A53 @ 2.0GHz)</li>
        <li><strong>RAM:</strong> 4GB</li>
        <li><strong>ROM:</strong> 64GB</li>
        <li><strong>Độ phân giải:</strong> Full HD (1080×1920)</li>
      </ul>
    ),
  },

  {
    title: 'Chia sẻ từ khách hàng',
    content: (
      <div className="testimonial-list">
        <div className="testimonial">
          <p>
            “Từ khi CLB sử dụng Arena Scoreboard, mọi trận đấu trở nên chuyên nghiệp hơn hẳn. 
            Thành viên rất hào hứng nhờ tính năng bảng điểm trực quan, thống kê chính xác và phát lại camera. 
            Giải đấu nội bộ gần đây diễn ra suôn sẻ như sân chơi chuyên nghiệp.”
          </p>
          <div className="customer-info">
            <img src={img1} alt="CLB Bi-a ABC" />
            <div>
              <strong>Nguyễn Văn Nam</strong><br />
              Chủ nhiệm CLB Bi-a ABC
            </div>
          </div>
        </div>

        <div className="testimonial">
          <p>
            “Arena Scoreboard thực sự là bước đột phá cho các giải đấu nghiệp dư. 
            Chúng tôi dễ dàng điều hành, ghi nhận kết quả và phát lại trận đấu cho các thành viên phân tích kỹ thuật.”
          </p>
          <div className="customer-info">
            <img src={img2} alt="CLB Bi-a StarZone" />
            <div>
              <strong>Trần Thị Hương</strong><br />
              Quản lý CLB Bi-a StarZone
            </div>
          </div>
        </div>

        <div className="testimonial">
          <p>
            “Tôi rất ấn tượng với hệ thống bảng điểm thông minh của Arena. Không chỉ đẹp, dễ dùng mà còn giúp tiết kiệm thời gian quản lý. 
            Sự hiện đại này là điều mà các CLB hiện nay đang rất cần.”
          </p>
          <div className="customer-info">
            <img src={img3} alt="CLB Bi-a Victory" />
            <div>
              <strong>Phạm Quốc Anh</strong><br />
              Trưởng ban tổ chức CLB Bi-a Victory
            </div>
          </div>
        </div>
      </div>
    )
  }



];

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="accordion-item">
    <button className="accordion-button" onClick={onClick}>
      <span className={`arrow ${isOpen ? 'open' : ''}`}>&#9656;</span>
      {title}
    </button>
    <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
      {content}
    </div>
  </div>
);

const Features = () => {
  const [openIndexes, setOpenIndexes] = useState([]);


  const toggleIndex = (index) => {
    setOpenIndexes(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="accordion-section" id="features">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndexes.includes(index)}
          onClick={() => toggleIndex(index)}
        />
      ))}
    </div>
  );
};

export default Features;
