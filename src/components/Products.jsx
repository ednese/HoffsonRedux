import React, {useState} from 'react';

// REDUX
import {useSelector, useDispatch} from 'react-redux'
import {addToCart} from '../store/actions/actionsCarts'

function Products(item, carts, dispatch, type) {
    const [value, setValue] = useState([1, 1, 1, 1, 1]);
    const [add, setAdd] = useState('');
    const [time, setTime] = useState('');
    const [toggle, setToggle] = useState(false);
    const handleValue = (v, i) => {
      let newValue = [...value];
      if (v >= 0 && v <= 99)
        newValue[i] = v;
      setValue(newValue);
    }
    const addBasket = (product, n) => {
      if (toggle === 'open')
        clearTimeout(time);
      setAdd(n + ' ' + product.title + ' ');
      setToggle('open');
      addToCart(carts, product, dispatch, n)
      setTime(setTimeout(() => {setToggle('close');}, 4000)); 
    }
    return (
    <div className="product">
      {toggle?
      <div className={"product__add " + toggle}>
        <b>{add}</b> has been added to your shopping cart.
        <a href="/shoppingcart"> See</a>
        <div onClick={() => setToggle('close')}>
            <span/>
        </div>
      </div> : ''}
      {item.filter(product => product.type === type)
      .map(product => {
        return (
          <div key={product.id} className={+ product.sku%2 ? "product__inner" : "product__inner cream"}>
            <img className={`product__inner__img product__inner_${product.type}`} src={`/HoffsonRedux/products/${product.type}s/${product.type}_${product.sku}.png`} alt={product.title}/>
            <div className="product__inner__box">
              <div className="product__inner__box__top">
                <div className="product__inner__box__top__txt">
                  <h1 className="title">{product.title}</h1>
                  <p className="style">{product.style}</p>
                </div>
                <p className="product__inner__box__top__price">{'$' + product.price}</p>
              </div>
              <p className="product__inner__box__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div className="product__inner__box__number">
                <span className="minus" onClick={() => handleValue(value[product.sku-1]-1, product.sku-1)}/>
                <input className="input" value={value[product.sku-1]} onChange={e => !isNaN(e.target.value) && e.target.value <= 99 ? handleValue(parseInt(e.target.value), product.sku-1) : ''}></input>
                <div className="more" onClick={() => handleValue(value[product.sku-1]+1, product.sku-1)}>
                    <span/>
                </div>
              </div>
              <button className="product__inner__box__cart" onClick={() => addBasket(product, value[product.sku-1])}>Add To Cart</button>
            </div>
          </div>
        )
      })}
    </div>
  );
}

const useProducts = (type) => {
  const products = useSelector(({products}) => products.filteredItems)
  const carts = useSelector(({cart}) => cart.items)
  const dispatch = useDispatch()
  return Products(products, carts, dispatch, type);
}

export default useProducts;
