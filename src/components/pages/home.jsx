import React from 'react';

// COMPONENTS
import Nav from '../navigation/navigation';
import Header from '../header/header';
import Categorie from '../categorie/categorie';

function Home() {
  return (
    <div className="Home">
        <Nav/>
        <Header/>
        <Categorie/>
    </div>
  );
}

export default Home;
