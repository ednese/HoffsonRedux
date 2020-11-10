import React from 'react';

// STYLE
import './style/article.css'
import './style/article_responsive.css'

// COMPONENTS
import Nav from '../navigation/navigation';
import useProduct from '../Products';

function Vase() {
  return (
    <div className="Vase">
      <Nav/>
      {useProduct('vase')}
    </div>
  );
}

export default Vase;
