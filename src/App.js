import React from 'react';
// COMPONENTS
import Home from './components/home/home';
import Payment from './components/payment/payment';
import Budget from './components/budget/budget';
// STYLES
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <Payment />
      <Budget />
    </div>
  );
}

export default App;
