import { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

// Refactoring class component to function component which uses a React hook
const Calculator = () => {
  // initializing current state `initCalc` and function that updates the state `setCalculater`
  const [initCalc, setCalculator] = useState({ total: null, next: null, operation: null });

  // Defining function to handle click events and update state
  const handleClick = (event) => {
    // Changes initial calculator state by calling imported `calculate` function
    setCalculator(calculate(initCalc, event.target.innerHTML));
  };
  // Definfing HTML that should be rendered to the DOM
  return (
    <div className="container text-center mt-5 col-6" id="calc-container">
      <div className="row g-2">
        <div className="col d-flex justify-content-end align-items-center" id="result">
          {initCalc.next || initCalc.operation || initCalc.total || 0}
        </div>
      </div>

      <div className="row justify-content-center align-items-center g-2">
        <Button value="AC" handleClick={handleClick} />
        <Button value="+/-" handleClick={handleClick} />
        <Button value="%" handleClick={handleClick} />
        <Button value="÷" handleClick={handleClick} />
      </div>

      <div className="row justify-content-center align-items-center g-2">
        <Button value="7" handleClick={handleClick} />
        <Button value="8" handleClick={handleClick} />
        <Button value="9" handleClick={handleClick} />
        <Button value="x" handleClick={handleClick} />
      </div>

      <div className="row justify-content-center align-items-center g-2">
        <Button value="4" handleClick={handleClick} />
        <Button value="5" handleClick={handleClick} />
        <Button value="6" handleClick={handleClick} />
        <Button value="-" handleClick={handleClick} />
      </div>

      <div className="row justify-content-center align-items-center g-2">
        <Button value="1" handleClick={handleClick} />
        <Button value="2" handleClick={handleClick} />
        <Button value="3" handleClick={handleClick} />
        <Button value="+" handleClick={handleClick} />
      </div>

      <div className="row justify-content-center align-items-center g-2 wide-button">
        <Button value="0" handleClick={handleClick} />
        <Button value="." handleClick={handleClick} />
        <Button value="=" handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
