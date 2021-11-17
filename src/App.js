import React, { useState, useEffect } from 'react';
import ShowNumber from './ShowNumber';
import './style.css';

export default function App() {
  const [numberArray, setNumber] = useState([]);
  const [finalValue, setFinalNumber] = useState('');

  const numbArray = [1, 3, 5, 7, 9];

  const onChangeNumber = (e) => {
    let valueArray = e.target.value.split(',');
    let newValueArray = [];
    valueArray.map((item) => {
      newValueArray.push(item);
    });
    setNumber(newValueArray);
  };

  const onSubmitNumber = () => {
    let minTempValue = 0;
    let maxTempValue = 0;
    if (numberArray.length === 0) {
      alert('number Is Required');
      return;
    } else {
      let minValue = Math.min.apply(Math, numberArray);
      let maxValue = Math.max.apply(Math, numberArray);

      numberArray.map((item, index) => {
        if (minValue !== parseInt(item)) {
          maxTempValue = maxTempValue + parseInt(item);
        }
        if (maxValue !== parseInt(item)) {
          minTempValue = minTempValue + parseInt(item);
        }
      });
      setFinalNumber(minTempValue + ' ' + maxTempValue);
    }
  };

  useEffect(() => {}, [numberArray]);

  return (
    <div>
      <label>Enter Comma Seprated Value: </label>
      <input type="text" name="inpNumber" onChange={(e) => onChangeNumber(e)} />
      <input type="button" value="submit" onClick={() => onSubmitNumber()} />
      <ShowNumber finalValue={finalValue}></ShowNumber>
    </div>
  );
}
