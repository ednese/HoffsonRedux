import {FETCH_PRODUCTS} from './types';
import {FILTER_PRODUCTS_SIZE} from './types';
import {FILTER_PRODUCTS_ORDER} from './types';

export const fetchProducts = (dispatch) => {
    return (
        fetch("./db.json")
            .then(res => res.json())
            .then(data => {
                return dispatch({type: FETCH_PRODUCTS, payload: data.products})
            })
        )
}

export const filterSizeProducts = (products, size, dispatch) => {
    return dispatch(
        {
            type: FILTER_PRODUCTS_SIZE,
            payload: {
                size: size,
                items: size ==='All'? products: products.filter(i => i.availableSizes.indexOf(size)>=0)
            }
        }
    )
}

export const filterOrderProducts = (products, order, dispatch) => {
    return dispatch(
        {
            type: FILTER_PRODUCTS_ORDER,
            payload: order ==='lowest'? products.sort((a, b) => a.price - b.price) : order ==='highest'? products.sort((a, b) => b.price - a.price): products
        }
    )
}
