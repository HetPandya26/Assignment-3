import React from "react";
import Button from "./Button";
import "./App.css";

const App = () => {
  const handlePrimaryClick = () => {
    alert("Primary button clicked!");
  };

  const handleSecondaryClick = () => {
    alert("Secondary button clicked!");
  };
return (

    <div id="part">
      <h1>Button Demostration</h1>
      <Button id="pri-btn" variant="primary" label="Primary Button" onClick={handlePrimaryClick} />
      <Button id="sec-btn" variant="secondary" label="Secondary Button" onClick={handleSecondaryClick} />
    </div>
  );
};

export default App;
