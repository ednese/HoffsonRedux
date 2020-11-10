import React from 'react';

// REDUX
import {useSelector, useDispatch} from 'react-redux'
import {removeToCart, updateToCart} from '../store/actions/actionsCarts'

// OPTIONS
import _ from 'lodash';

function Basket(carts, products, dispatch) {
  const total = Math.round(carts.reduce((a, c) => a + c.price *c.count, 0)*100)/100;
  const tax = total < 100? 5 : 0;
  return (
    <div className="cart">
      <h1 className="cart__title">Shopping bag</h1>
      <div className="cart__inner">
        {carts.length ?
        <h2 className="cart__status">You Have {carts.length} products in the Basket.</h2>
        :<h2 className="cart__status">Basket is empty</h2>}
        {carts.length > 0 && 
        <div className="cart__inner" key={carts.id}>
          {carts.map((item, i) => {
            return ( 
            <div className="cart__box" key={i}>
              <img key={i + 25} className={`cart__box__img cart__box_${item.type}`} src={`/HoffsonRedux/products/${item.type}s/${item.type}_${item.sku}.png`} alt={item.title}/>
              <div className="cart__box__right" key={i + 50}>
                <div className="cart__box__right__top" key={item.id}>
                  <div className="cart__box__right__top__txt" key={i + 75}>
                    <b className="title">{item.title}</b>
                    <p className="paragraph">{item.style}</p>
                  </div>
                  <p className="cart__box__right__top__price">${Math.round(item.price * item.count * 100)/100}</p>
                </div>
                <div className="cart__box__right__bottom" key={i + 100}>
                  <select className="number" defaultValue={item.count} onChange={e => updateToCart(carts, item, dispatch, e.target.value)} name="articles" id="number-articles">
                    {_.range(1, 99 + 1).map((option, i) => <option key={i} value={option}>{option}</option>)} 
                  </select>
                  <p className="remove" onClick={(e) => removeToCart(carts, item, dispatch)}>Remove product</p>
                </div>
              </div>
            </div>
              )
          })}
          {carts.length ? <p className="cart__inner__delete" onClick={() => {
            if (window.confirm('Are you sure you wish to delete your bag?')) removeToCart(carts, products, dispatch, 1)
          }}>Remove bag</p> : ""}
          <div className="cart__inner__cost">
            <p>Delivery cost</p>
            <p>${tax}</p>
          </div> 
          <div className="cart__inner__total">
            <p>Total(Incl. tax)</p>
            <p>${total > 100? total : Math.round((total + tax)*100)/100}</p>
          </div> 
        </div>
        }
        {carts.length ? <button className="cart__checkout" onClick={() => alert('Checkout need to implement...')}>Continue to checkout</button> : ""}
      </div>
    </div>
  );
}

const useBasket = () => {
  const products = useSelector(({products}) => products.filteredItems)
  const carts = useSelector(({cart}) => cart.items)
  const dispatch = useDispatch()
  return Basket(carts, products, dispatch);
}

export default useBasket;
