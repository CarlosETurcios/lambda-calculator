import React from 'react';

const OperatorButton = props => {
  const { operators } = props;
  return (
    <button className='opButtons'>
      {/* {props.operators.value} */}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <span>{props.operators.char}</span>
    </button>
  );
};
export default OperatorButton;
