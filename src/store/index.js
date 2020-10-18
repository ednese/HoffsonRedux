import {combineReducers, createStore} from 'redux'
import productReducer from './reducers/productReducer'
import cartReducer from './reducers/cartReducer'

const store = createStore (
    combineReducers({
        products: productReducer,
        cart: cartReducer
    })
)

export default store