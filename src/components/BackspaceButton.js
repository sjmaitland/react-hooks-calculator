import React, { useContext } from 'react';
import { NumberContext } from './NumberFunctions';

const BackspaceButton = () => {
  const { handleBackButton } = useContext(NumberContext);

  return(
    <button type="button" className="btn__row--1" onClick={() => handleBackButton()}>&#8592;</button>
  );
};

export default BackspaceButton;