import React from 'react';

// STYLE
import './style/article.css'
import './style/article_responsive.css'

// COMPONENTS
import Nav from '../navigation/navigation';
import useProduct from '../Products';

function Lamp() {
  return (
    <div className="Lamp">
      <Nav/>
      {useProduct('lamp')}
    </div>
  );
}

export default Lamp;
