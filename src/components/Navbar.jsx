import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo_1.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleClick = (id) => {
    setActiveLink(id);
    closeMenu();
  };

  useEffect(() => {
    const sectionIds = [
      'heroslider',
      'gallery',
      'partners',
      'ambassadors',
      'features',
      'pricing',
      'contact'
    ];

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const navItems = [
    { id: 'heroslider', label: 'Giới thiệu' },
    { id: 'gallery', label: 'Hình ảnh' },
    { id: 'partners', label: 'Khách hàng' },
    { id: 'ambassadors', label: 'Đại sứ' },
    { id: 'features', label: 'Tính năng' },
    { id: 'pricing', label: 'Bảng giá' },
    { id: 'contact', label: 'Liên hệ' }
  ];

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <a href="#navbar">
          <img src={logo} alt="Arena Logo" className="navbar__logo-image" />
        </a>
      </div>

      <nav className={`navbar__menu ${isOpen ? 'open' : ''}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => handleClick(item.id)}
                className={activeLink === item.id ? 'active' : ''}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={`navbar__toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
    </header>
  );
};

export default Navbar;
