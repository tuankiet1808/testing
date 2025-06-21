import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo_1.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false); // Scroll xuống
      } else if (currentScrollY < lastScrollY) {
        setShowNavbar(true); // Scroll lên
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${showNavbar ? 'visible' : 'hidden'}`}>
      <div className="navbar__logo">
        <a href="navbar">
          <img src={logo} alt="Arena Logo" className="navbar__logo-image" />
        </a>
      </div>

      <nav className={`navbar__menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#intro" onClick={closeMenu}>Giới thiệu</a></li>
          <li><a href="#features" onClick={closeMenu}>Tính năng</a></li>
          <li><a href="#gallery" onClick={closeMenu}>Hình ảnh</a></li>
          <li><a href="#partners" onClick={closeMenu}>Đối tác</a></li>
          <li><a href="#ambassadors" onClick={closeMenu}>Đại sứ</a></li>
          <li><a href="#pricing" onClick={closeMenu}>Bảng giá</a></li>
          <li><a href="#contact" onClick={closeMenu}>Liên hệ</a></li>
        </ul>
      </nav>

      <div className="navbar__toggle" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
    </header>
  );
};

export default Navbar;
