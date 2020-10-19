import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {filterOrderProducts, filterPriceProducts} from '../store/actions/actionsProducts'

function Filter(products, dispatch) {
  const [slide, setSlider] = useState(0);

  const filterPrice = (e) => {
    filterPriceProducts(products, e.target.value, dispatch)
    setSlider(e.target.value)
  }
  return (
    <div className="row">
        <div style={{color: 'white'}} className="col-md-4">
            {products.length} products found.
        </div>
        <div className="col-md-4">
            <label  style={{color: 'white'}}>
                Order by
                <select className="form-control" onChange={(e) => filterOrderProducts(products, e.target.value, dispatch)}>
                    <option value="">Select</option>
                    <option value="lowest">Lowest to highest</option>
                    <option value="highest">Highest to lowest</option>
                </select>
            </label>
        </div>
        <div className="col-md-4">
            <span style={{color: 'white'}} id="rangeValue">{slide}</span>
            <br/>
            <input type="range" name="" value={slide} onChange={e => filterPrice(e)} min="0" max="600"/>
        </div>
    </div>
  );
}

const useFilter = () => {
    const products = useSelector(({products}) => products)
    const dispatch = useDispatch()
    return Filter(products.items, dispatch);
  }

export default useFilter;
