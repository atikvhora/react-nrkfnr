import React from 'react';
import './style.css';

const ShowNumber = (props) => {
  return (
    <>
      <div>
        <span>Number: {props.finalValue}</span>
      </div>
    </>
  );
};
export default ShowNumber;
