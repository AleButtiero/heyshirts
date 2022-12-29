import React from 'react';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/itemlistcontainer';

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Hey Shirts! Tienda online de remeras"/>

    </div>
  ) 
}

export default App;