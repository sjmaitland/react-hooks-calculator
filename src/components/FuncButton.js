import React, { useContext } from 'react';
import { NumberContext } from './NumberFunctions';

const FuncButton = ({ buttonValue }) => {
  const { handleSetCalcFunction } = useContext(NumberContext);

  return (
    <button type="button" className="button--function" onClick={() => handleSetCalcFunction(buttonValue)}>{ buttonValue }</button>
  );
};

export default FuncButton;