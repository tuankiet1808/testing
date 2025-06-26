import React from 'react';
import './Footer.css';
import { FaFacebookF, FaYoutube, FaTiktok, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
//import logo from '../assets/logo.png'; // Assuming you have a logo image

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col logo">
          <img src="./Logo_trang_footer-01.svg" alt="Arena Logo" style={{height:150, width:150}}/>
        </div>

        <div className="footer-col">
          <h4>Menu</h4>
          <ul>
            <li><a href="navbar">Trang Chủ</a></li>
            <li><a href="Footer">Về Chúng Tôi</a></li>
            <li><a href="Footer">Giải Pháp</a></li>
            <li><a href="Footer">Sản Phẩm</a></li>
            <li><a href="Footer">Liên Hệ</a></li>
            <li><a href="Footer">Chính sách & Điều khoản</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Liên hệ</h4>
          <ul className="contact-info">
            <li><FaMapMarkerAlt /> 612B Đại Lộ Bình Dương, Phường Hiệp Thành, TP. Thủ Dầu Một, Bình Dương</li>
            <li><FaPhoneAlt /> +84 981 838 884</li>
            <li><FaEnvelope /> hi.arenabillard@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Arena © {new Date().getFullYear()}. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="Footer"><FaFacebookF /></a>
          <a href="Footer"><FaYoutube /></a>
          <a href="Footer"><FaTiktok /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
