import React, { useContext } from 'react';
import { NumberContext } from './NumberFunctions';

const NegNumButton = () => {
  const { handleToggleNegative } = useContext(NumberContext);

  return (
    <button type="button" className="btn__row--1" onClick={ () => handleToggleNegative()}>+/-</button>
  );
};

export default NegNumButton;