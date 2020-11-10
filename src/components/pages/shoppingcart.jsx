import React from 'react';

// STYLE
import './style/shopcart.css'
import './style/shopcart_responsive.css'

// COMPONENTS
import Nav from '../navigation/navigation';
import useBasket from '../Basket';

function ShopCart() {
  return (
    <div className="ShopCart">
      <div className="background"/>
      <Nav/>
      {useBasket()}
    </div>
  );
}

export default ShopCart;
