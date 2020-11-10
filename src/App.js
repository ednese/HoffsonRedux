import React, {useEffect} from 'react';

// STYLE
import './index.css';

// REDUX
import {useDispatch} from 'react-redux'
import {fetchProducts} from './store/actions/actionsProducts'
import {setCarts} from './store/actions/actionsCarts'

// ROUTER
import {Route, useLocation} from 'react-router-dom';

// COMPONENTS
import Home from './components/pages/home';
import Vase from './components/pages/vase';
import Lamp from './components/pages/lamp';
import Clock from './components/pages/clock';
import ShopCart from './components/pages/shoppingcart';

// ROUTES
const routes = [
  { path: '/', Component: Home },
  { path: '/vases', Component: Vase },
  { path: '/lamps', Component: Lamp },
  { path: '/clocks', Component: Clock },
  { path: '/shoppingcart', Component: ShopCart },
]

function App() {
  const dispatch = useDispatch()
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProducts(dispatch);
    if (localStorage.cart)
      setCarts(JSON.parse(localStorage.cart), dispatch);
  }, [dispatch, pathname])
  return (
      <div>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path} component={Component}/>
          ))}
      </div>
  );
}

export default App;
