import React, { useState } from "react";
import "./App.style.css";

const App = () => {
  const [bmi, setBmi] = useState(0);
  const [info, setInfo] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const handleBmi = () => {
    let val = (
      [(weight) / (height) / (height)] * 10000
    ).toFixed(1);
    setBmi(val);
    if (val < 18.5) {
      setInfo("Under Weight");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("Healthy");
    } else if (val > 24.9 && val < 30) {
      setInfo("Overweight");
    } else {
      setInfo("Obese");
    }
  };
  return (
    <div className="Container">
      <h1>BMI Calculator</h1>
      <div className="row grid">
      <input
        type="number"
        data-testid="input-height"
        onChange={({target: {value}}) => setHeight(value)}
        placeholder="height in cm"
      />
      <input
        type="number"
        data-testid="input-weight"
        onChange={({target: {value}}) => setWeight(value)}
        placeholder="Weight in kg"
      />
      <button onClick={handleBmi}
       data-testid="btn-calc"
      >Calculate</button> </div>
      {bmi > 0 && (<>
      <div className="col">
      <h2 data-testid="calculation">Your BMI: {bmi}</h2>
      <strong>Diagnosis: {"  "}{info}</strong></div>
      </>)}
     
    </div>
  );
};

export default App;
