import {ADD_TO_CART} from './types';
import {REMOVE_FROM_CART} from './types';

export const setCarts = (carts, dispatch) => {
    return dispatch(
        {
            type: ADD_TO_CART,
            payload: carts
        }
    )
}

export const addToCart = (items, product, dispatch, number) => {
    const cart = items.slice();
    let check = false;
    cart.forEach(cart => {
        if (cart.id === product.id) {
            check = true;
            cart.count += number;
            if (cart.count > 99)
                cart.count = 99;
        }
    });
    let tmp = [...cart];
    if (!check) {
        tmp.push({...product, count:number})
    }
    localStorage.setItem("cart", JSON.stringify(tmp));
    return dispatch(
        {
            type: ADD_TO_CART,
            payload: tmp
        }
    )
}
export const updateToCart = (items, product, dispatch, number) => {
    const cart = items.slice();
    cart.forEach(cart => {
        if (cart.id === product.id) {
            cart.count = number;
        }
    });
    let tmp = [...cart];
    localStorage.setItem("cart", JSON.stringify(tmp));
    return dispatch(
        {
            type: ADD_TO_CART,
            payload: tmp
        }
    )
}
export const removeToCart = (items, product, dispatch, remove) => {
    let tmp = [...items].filter((i) => i.id !== product.id);
    if (remove)
        tmp = [];
    localStorage.setItem("cart", JSON.stringify(tmp));
    return dispatch(
        {
            type: REMOVE_FROM_CART,
            payload: tmp
        }
    )
}