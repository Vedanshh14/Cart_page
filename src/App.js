
import './App.css';
import { useState } from 'react';
import React from 'react';
import data from './Data';
import Topline from './Components/Topline.js'
import Items from './Components/Items.js'

function App() {
   const [items,setItems]= useState(data)
  return (
    <div>
      <Topline></Topline>
      <Items items={items}></Items>
      

     

    </div>
  );
}

export default App;
