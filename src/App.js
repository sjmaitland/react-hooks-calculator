import React from 'react';
import Calculator from './components/Calculator';
import NumberFunctions from './components/NumberFunctions'; 
import './styles/App.css';

const App = () => (
  <NumberFunctions>
    <Calculator />
  </NumberFunctions>
);

export default App;