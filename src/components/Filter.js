import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {filterSizeProducts, filterOrderProducts} from '../store/actions/actionsProducts'

const tab = ['All', 'XXL', 'XL', 'L', 'M', 'S'];
function Filter(products, dispatch) {
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
        <label  style={{color: 'white'}}>
                Filter size
                <select className="form-control" onChange={(e) => filterSizeProducts(products, e.target.value, dispatch)}>
                    {tab.map((item, i) => <option key={i} value={item}>{item}</option>)}
                </select>
            </label>
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
