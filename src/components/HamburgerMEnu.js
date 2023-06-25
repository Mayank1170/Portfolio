import React, { useState } from 'react';
import './Navigation.css';
let count=0;

function clr(){
  count = count+1
  console.log(count);
  if(count%2 === 0){
    document.getElementById("bookmark").style.backgroundColor = "#3B82F6";
  }
  else{
    document.getElementById("bookmark").style.backgroundColor = "#2F2F2F";
    
  }
}
const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className="top-nav">
      <div className="overflow-hidden">

        <div id="bookmark" className="bg-blue-500 float-right w-[440px] h-12 right-28 top-24 absolute translate-x-2/4 text-center rotate-45">
          <h1 className="my-2 font-extrabold text-lg ">Follow On GitHub</h1>
        </div>
      </div>
      <input
        id="menu-toggle"
        type="checkbox"
        checked={menuOpen}
        onChange={handleMenuToggle}
        onClick= {clr}
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
