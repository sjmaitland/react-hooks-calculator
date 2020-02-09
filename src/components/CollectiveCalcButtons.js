import React, { useContext } from 'react';
import { NumberContext } from './NumberFunctions';

const CollectiveCalcButtons = ({ buttonValue }) => {
  const { handleSetDisplayValue } = useContext(NumberContext);

  return (
    <button type="button" onClick={() => handleSetDisplayValue(buttonValue)}>{ buttonValue }</button>
  );
};

export default CollectiveCalcButtons;