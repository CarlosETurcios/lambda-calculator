import React from 'react';

const SpecialButton = props => {
  const { specials } = props;
  return (
    <button className='specialButton'>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <span>{specials}</span>
    </button>
  );
};
export default SpecialButton;
