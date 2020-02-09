import React from 'react';
import CollectiveCalcButtons from './CollectiveCalcButtons';
import FuncButton from './FuncButton';
import ClearButton from './ClearButton';
import DisplayScreen from './DisplayScreen';
import EqButton from './EqButton';
import BackspaceButton from './BackspaceButton';
import NegNumButton from './NegNumButton';

const Calculator = () => {
  return (
    <div className = "calculator">
      <>
          <DisplayScreen />
      </>

      <>
        <div class="calculator__btns">

          <>
            <div className="btn__row--1">
              <ClearButton />
              <BackspaceButton />
              <NegNumButton />
              <FuncButton buttonValue = "/" />
            </div>
          </>

          <>
            <div className="btn__row--2">
              <CollectiveCalcButtons buttonValue = { 7 } />
              <CollectiveCalcButtons buttonValue = { 8 } />
              <CollectiveCalcButtons buttonValue = { 9 } />
              <FuncButton buttonValue = "*" />
            </div>
          </>

          <>
            <div className="btn__row--3">
              <CollectiveCalcButtons buttonValue = { 4 } />
              <CollectiveCalcButtons buttonValue = { 5 } />
              <CollectiveCalcButtons buttonValue = { 6 } />
              <FuncButton buttonValue = "-" />
            </div>
          </>

          <>
            <div className="btn__row--4">
              <CollectiveCalcButtons buttonValue = { 1 } />
              <CollectiveCalcButtons buttonValue = { 2 } />
              <CollectiveCalcButtons buttonValue = { 3 } />
              <FuncButton buttonValue = "+" />
            </div>
          </>

          <>
            <div className="btn__row--5">
              <CollectiveCalcButtons buttonValue = { 0 } />
              <CollectiveCalcButtons buttonValue = "." />
              <EqButton />
            </div>
          </>
        </div>
      </>
    </div>
  )
}

export default Calculator;