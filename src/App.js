
import './App.css';
import { useState } from 'react';
import React from 'react';
import data from './Data';
import Topline from './Components/Topline.js'
import Items from './Components/Items.js'

function App() {
  const [items, setItems] = useState(data);
  const [total, setTotal] = useState(0);

  function remove_item(id) {
    const newItems = items.filter(tour => tour.id !== id);
    setItems(newItems);
    if (newItems.length === 0) {
      setTimeout(() => {
        alert('No more items, Please refresh');
      }, 0);
    }
  }

  function add_price(id, price) {
    setTotal(total + price);
    const newItems = items.filter(tour => tour.id !== id);
    setItems(newItems);

    if (newItems.length === 0) {
      setTimeout(() => {
        alert('No more items, Please refresh');
      }, 0);
    }
  }

  return (
    <div>
      <Topline total={total}  />
      <Items items={items} remove_item={remove_item} add_price={add_price}  />
    </div>
  );
}

export default App;
