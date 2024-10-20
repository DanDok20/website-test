import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css'
import logo from './assets/logo.png'
import menu_icon from './assets/menu-icon.png'

const App = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 500 ? setSticky(true) : setSticky(false)
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <div>
      <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo'/> 
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/quienes-somos">¿Quiénes Somos?</Link></li>
          <li><Link to="/servicios">Servicios</Link></li>
          <li><Link to="/testimonios">Testimonios</Link></li>
          <li><Link to="/contactanos">Contáctanos</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default App;
