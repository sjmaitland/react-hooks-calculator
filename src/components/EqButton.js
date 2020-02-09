import React, { useContext } from 'react';
import { NumberContext } from './NumberFunctions';

const EqButton = () => {
  const { doTheMath }  = useContext(NumberContext);
    return (
      <button type="button" className="btn--equals" onClick={ () => doTheMath() }>=</button>
    );
};

export default EqButton;