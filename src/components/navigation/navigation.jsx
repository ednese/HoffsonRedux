import React from 'react';

// STYLE
import './navigation.css';

// COMPONENT
import Burger from './burger/burger';

// ICONS
import logo from '../../assets/icones/logo.png'
import bag from '../../assets/icones/shopping-bag-white.svg'

function Nav() {
  const navLinks = [
      {name: 'Home', link: '/'},
      {name: 'Vases', link: '/vases'},
      {name: 'Lamps', link: '/lamps'},
      {name: 'Clocks', link: '/clocks'}
    ];
  return (
    <div className="nav">
      <div className="nav__inner">
          <a href='/' ><img className="nav__logo" src={logo} alt='logo'/></a>
          <ul className="nav__links">
              {navLinks.map((arg, i) => 
              <li className="nav__links__element" key={i}>
                  <a href={arg.link}>{arg.name}</a>
              </li>)}
          </ul>
          <a href="/shoppingcart" className="nav__bag">
            <img className="nav__bag__icone" src={bag} alt='logo'/>
          </a>
          {Burger(navLinks)}
      </div>
    </div>
  );
}

export default Nav;
