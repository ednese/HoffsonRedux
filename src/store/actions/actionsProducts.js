import {FETCH_PRODUCTS} from './types';
import {FILTER_PRODUCTS} from './types';

export const fetchProducts = (dispatch) => {
    return (
        fetch("./db.json")
            .then(res => res.json())
            .then(data => {
                return dispatch({type: FETCH_PRODUCTS, payload: data.products})
            })
        )
}

export const filterOrderProducts = (products, order, dispatch) => {
    return dispatch(
        {
            type: FILTER_PRODUCTS,
            payload: order ==='lowest'? products.sort((a, b) => a.price - b.price) : order ==='highest'? products.sort((a, b) => b.price - a.price): products
        }
    )
}

export const filterPriceProducts = (products, price, dispatch) => {
    return dispatch(
        {
            type: FILTER_PRODUCTS,
            payload: products.filter(i => i.price >= price)
        }
    )
}

