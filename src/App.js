import React from 'react';
import Cart from './components/Cart'
import './App.css';

const items = [
  { id: 1, name: 'Spices', price: 1.25, qty: 2},
  { id: 2, name: 'Meat', price: 5.45, qty: 2},
  { id: 3, name: 'Vegetables', price: 2.65, qty: 5}
]

function App() {
  return (
    <div className="App">
      <Cart initialItems={items} />
    </div>
  );
}

export default App;
