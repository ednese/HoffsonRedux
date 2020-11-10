import React, {useState} from 'react';

// STYLE
import './burger.css'

function Burger(tab) {
  const [active, setActive] = useState(false);
  const [slide, setSlide] = useState('');
  const toggle = () => {
    setActive(!active);
    toggleSlide()
  };
  const toggleSlide = () => {
      if (!active === true)
        setSlide('open')
      else if (!active === false)
        setSlide('close')
  }
  return (
    <div className="Burger">
        <div className={active? 'burger__icon active' : 'burger__icon'} onClick={toggle}>
            <span/>
        </div>
        <div className={'burger__anim ' + slide}>
          <div className="burger__sidebar">
              <ul className="burger__sidebar__items">
                  {tab.map((item, index) => <li key={index} ><a href={item.link}>{item.name}</a></li>)}
                  <li><a href="/shoppingcart">ShoppingCart</a></li>
              </ul>
          </div>
        </div>
        
    </div>
  );
}
export default Burger;