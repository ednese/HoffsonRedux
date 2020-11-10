import React from 'react';

// STYLE
import './categorie.css';

// IMAGES
import vase from '../../assets/img/Vases/vase-home.jpg'
import lamp from '../../assets/img/Lights/light-home.jpg'
import clock from '../../assets/img/Clock/clock-home.jpg'

function Categorie() {
  const img = [{txt: 'VASES', link: '/vases', img: vase}, {txt: 'LAMPS', link: '/lamps', img: lamp}, {txt: 'CLOCKS', link: '/clocks', img: clock}];
  return (
    <div className="Categorie">
      <div className="categorie__inner">
        <h1 className="categorie__title">CATEGORIES</h1>
        <div className="categorie__element">
            {img.map((arg, i) => 
                <a key={i} href={arg.link} className="categorie__element__container">
                    <img className="categorie__element__img" key={i} src={arg.img} alt='img'/>
                    <h4 className="categorie__element__txt" >{arg.txt}</h4>
                </a>
            )}
        </div>
      </div>
    </div>
  );
}

export default Categorie;
