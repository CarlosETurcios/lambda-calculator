import React from 'react';

function NumberButton(props) {
  //const {number} = props;
  return (
    <button className='numsButton'>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.number}
    </button>
  );
}
export default NumberButton;
