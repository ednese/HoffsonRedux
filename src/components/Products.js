import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {fetchProducts} from '../store/actions/actionsProducts'
import {addToCart, setCarts} from '../store/actions/actionsCarts'

function Products(item, carts, dispatch) {
  return (
    <div className="row">
      {item.map((product) => {
        return (
        <div key={product.id} className="col-md-4">
          <div key={product.id} className="thumbnail text-center">
            <a href={`#${product.id}`}>
              <img src={`/products/${product.sku}_2.jpg`} alt={product.title} ></img>
              <p>{product.title}</p>
              <p>{`Size: ${product.availableSizes}`}</p>
            </a>
            <div>
              <b style={{color: 'white'}}>{`$${product.price}  `}</b>
              <button className="btn btn-primary" onClick={() => addToCart(carts, product, dispatch)}>Add To Cart</button>
            </div>
          </div>
          <br/>
        </div>
        )
      })}
    </div>
  );
}

const useProducts = () => {
  const products = useSelector(({products}) => products.filteredItems)
  const carts = useSelector(({cart}) => cart.items)
  const dispatch = useDispatch()
  useEffect(() => {
    fetchProducts(dispatch);
    if (localStorage.cart)
      setCarts(JSON.parse(localStorage.cart), dispatch);
  }, [dispatch])
  return Products(products, carts, dispatch);
}

export default useProducts;
