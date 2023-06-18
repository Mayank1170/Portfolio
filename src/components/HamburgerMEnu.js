import React, { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className="top-nav">
      <div>
      </div>
      <input
        id="menu-toggle"
        type="checkbox"
        checked={menuOpen}
        onChange={handleMenuToggle}
      />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className={`menu ${menuOpen ? 'open' : ''}`}>
        <li>about</li>
        <li>portfolio</li>
        <li>labs</li>
        <li>contact</li>
      </ul>
    </section>
  );
};

export default Navigation;
