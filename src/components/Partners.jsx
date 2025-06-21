import React from 'react';
import './Partners.css';
import kh1 from '../assets/kh1.jpg';
import kh2 from '../assets/kh2.jpg'; 
import kh3 from '../assets/kh3.jpg';  
import kh4 from '../assets/kh4.jpg'; 
import kh5 from '../assets/kh5.jpg';
import kh6 from '../assets/kh6.jpg';    

const partners = [
  { name: 'CLB Carom 340', logo: kh1 },
  { name: 'B52 Billiards', logo: kh2 },
  { name: 'Arena Cup 2024', logo: kh3 },
  { name: 'Carom Club HN', logo: kh4 },
  { name: 'Carom Club DN', logo: kh5 },
  { name: 'Carom Club QG', logo: kh6 },
];

const Partners = () => {
  return (
    <section className="partners" id="partners">
      <h2>Khách hàng </h2>
      <p className="sub">Hơn 100+ câu lạc bộ và giải đấu tin dùng Arena Scoreboard</p>
      <div className="partner-logos">
        {partners.map((p, index) => (
          <div className="partner-card" key={index}>
            <img src={p.logo} alt={p.name} />
            <p>{p.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
