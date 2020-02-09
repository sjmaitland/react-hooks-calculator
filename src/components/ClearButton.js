import React, { useContext } from 'react';
import { NumberContext } from './NumberFunctions';

const ClearButton = () => {
  const { handleClearValue } = useContext(NumberContext);
  
  return (
    <button type="button" className="btn__row--1" onClick={() => handleClearValue()}>C</button>
  );
};

export default ClearButton;