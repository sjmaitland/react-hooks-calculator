import React, { useContext } from 'react';
import { NumberContext } from './NumberFunctions';

const DisplayScreen = () => {
  const { number, storedNumber, functionType } = useContext(NumberContext);

  return (
    <div className="row__display">
      <div className = { storedNumber && storedNumber.length > 12 ? 'display__calc' : undefined }>
        {!number.length && !storedNumber ? '0' : number || storedNumber }
      </div>

      <div className = { storedNumber && storedNumber.length > 12 ? 'display__store' : undefined }>
        {!storedNumber ? 'Enter some numbers' : `${ storedNumber } ${ functionType } ${ number }`}
      </div>
    </div>
  );
};

export default DisplayScreen;