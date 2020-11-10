import React from 'react';

// STYLE
import './style/article.css'
import './style/article_responsive.css'

// COMPONENTS
import Nav from '../navigation/navigation';
import useProduct from '../Products';

function Clock() {
  return (
    <div className="Clock">
      <Nav/>
      {useProduct('clock')}
    </div>
  );
}

export default Clock;
