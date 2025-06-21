import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Gửi dữ liệu về backend ở đây nếu có (emailJS, Firebase...)
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <section className="contact" id="contact">
      <h2>Liên hệ với chúng tôi</h2>
      <p>Gửi thông tin để được tư vấn hoặc báo giá sản phẩm Arena Scoreboard.</p>

      {!submitted ? (
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Họ và tên"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email liên hệ"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Nội dung liên hệ..."
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Gửi liên hệ</button>
        </form>
      ) : (
        <p className="success-msg">✅ Cảm ơn bạn đã gửi liên hệ! Chúng tôi sẽ phản hồi sớm.</p>
      )}
    </section>
  );
};

export default ContactForm;
