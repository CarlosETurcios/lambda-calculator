import React, {useState} from "react";
import {operators} from '../../../data';
import OperatorButton from './OperatorButton.js';
//import any components needed

//Import your array data to from the provided data file

const Operators = (props ) => {
  // STEP 2 - add the imported data to state
  const [oper, setoperator] = useState(operators);
  return (
    <div>
      <div className='buttons_container'>
        {oper.map((index)=>(
          <OperatorButton operators={index}/>
        ))}
      </div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
export default Operators