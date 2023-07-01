import { useState } from 'react';
import './App.css';

function App() {
  const def_h = 120;
  const def_w = 50;

  const [height, setHeight] = useState(def_h);
  const [weight, setWeight] = useState(def_w);

  function onHeightChange(event) {
    const inputHeight = event.target.value;
    setHeight(inputHeight);
  }

  function onWeightChange(event) {
    const inputWeight = event.target.value;
    setWeight(inputWeight);
  }

  let bmi = Math.round((weight / (height ** 2)) * 10000);
  let bmiDesc = null;

  if (bmi < 18.5) {
    bmiDesc = "underweight";
  } else if (bmi < 25) {
    bmiDesc = "normal";
  } else if (bmi < 30) {
    bmiDesc = "overweight";
  } else {
    bmiDesc = "obese";
  }

  return (
    <div className="main">
      <div className="info">
        <h1>bmi calculator</h1>
        <span className="arial">weight: {weight} kg</span>
        <input
          onChange={onWeightChange}
          type="range"
          step="1"
          min="40"
          max="180"
        />
        <span className="arial">height: {height} cm</span>
        <input
          onChange={onHeightChange}
          type="range"
          step="1"
          min="120"
          max="220"
        />
        <span>your BMI is: </span>
        <p className="mathresult arial">{bmi}</p>
        <span>you are: {bmiDesc}</span>
      </div>
    </div>
  );
}

export default App;
