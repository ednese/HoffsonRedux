import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import useProducts from './components/Products';
import useFilter from './components/Filter';
import Basket from './components/Basket';
import './App.css';

function App() {
  return (
    <div className="return">
      <div className="container">
        <h1 style={{color: 'white'}}> Hoffson </h1>
        <hr/>
        <div className="row">
          <div className="col-md-7">
            {useFilter()}
            <hr/>
            {useProducts()}
          </div>
          <div className="col-md-5">
            {Basket()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
