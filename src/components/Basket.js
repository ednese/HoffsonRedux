import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {removeToCart} from '../store/actions/actionsCarts'

function Basket(carts, products, dispatch) {
  return (
    <div className="alert alert-info">
        {carts.length ? <div>You Have {carts.length} products in the Basket.</div>: "Basket is empty"}
        {carts.length > 0 && 
        <div key={carts.id}>
          <ul>
            {carts.map(item => {
              return ( 
              <li key={item.id}>
                <b>{item.title}</b>
                | {item.count} = ${Math.round(item.price * item.count * 100)/100}
                <button className="btn btn-danger" onClick={(e) => removeToCart(carts, item, dispatch)}>X</button>
              </li> )
            })}
          </ul>
          {carts.length ? <button className="btn btn-danger" onClick={() => removeToCart(carts, products, dispatch, 1)}>Delete All Articles</button> : ""}
          Total: ${Math.round(carts.reduce((a, c) => a + c.price *c.count, 0)*100)/100}
        </div>
        }
        {carts.length ? <button className="btn btn-primary" onClick={() => alert('Checkout need to implement...')}>Checkout</button> : ""}
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
