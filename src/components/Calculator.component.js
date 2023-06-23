import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Calculator = () => {
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '%') {
      // Calculate percentage
      try {
        const percentage = eval(result) / 100;
        setResult(percentage.toString());
      } catch (error) {
        setResult('Error');
      }
    } else {
      setResult(result + value);
    }
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clear = () => {
    setResult('');
  };

  return (
    <div className="calculator bg-dark text-white p-3" style={{ width: '25%', height: '50vh' }}>
        <div className="display bg-secondary text-right p-2 mb-3">{result}</div>
        <div className="buttons">
        <div className="row mb-2">
          <div className="col-3">
            <button className="btn btn-dark btn-block" onClick={() => handleClick('(')}>(</button>
          </div>
          <div className="col-3">
            <button className="btn btn-dark btn-block" onClick={() => handleClick(')')}>)</button>
          </div>
          <div className="col-3">
            <button className="btn btn-dark btn-block" onClick={() => handleClick('%')}>%</button>
          </div>
          <div className="col-3">
            <button className="btn btn-dark btn-block" onClick={clear}>C</button>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-3">
            <button className="btn btn-secondary btn-block" onClick={() => handleClick('7')}>7</button>
          </div>
          <div className="col-3">
            <button className="btn btn-secondary btn-block" onClick={() => handleClick('8')}>8</button>
          </div>
          <div className="col-3">
            <button className="btn btn-secondary btn-block" onClick={() => handleClick('9')}>9</button>
          </div>
          <div className="col-3">
            <button className="btn btn-dark btn-block" onClick={() => handleClick('/')}>/</button>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-3">
            <button className="btn btn-secondary btn-block" onClick={() => handleClick('4')}>4</button>
          </div>
          <div className="col-3">
            <button className="btn btn-secondary btn-block" onClick={() => handleClick('5')}>5</button>
          </div>
          <div className="col-3">
            <button className="btn btn-secondary btn-block" onClick={() => handleClick('6')}>6</button>
          </div>
          <div className="col-3">
            <button className="btn btn-dark btn-block" onClick={() => handleClick('*')}>*</button>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-3">
            <button className="btn btn-secondary btn-block" onClick={() => handleClick('1')}>1</button>
          </div>
          <div className="col-3">
            <button className="btn btn-secondary btn-block" onClick={() => handleClick('2')}>2</button>
          </div>
          <div className="col-3">
            <button className="btn btn-secondary btn-block" onClick={() => handleClick('3')}>3</button>
          </div>
          <div className="col-3">
            <button className="btn btn-dark btn-block" onClick={() => handleClick('-')}>-</button>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-3">
            <button className="btn btn-secondary btn-block" onClick={() => handleClick('0')}>0</button>
          </div>
          <div className="col-3">
            <button className="btn btn-secondary btn-block" onClick={() => handleClick('.')}>.</button>
          </div>
          <div className="col-3">
            <button className="btn btn-secondary btn-block" onClick={calculate}>=</button>
          </div>
          <div className="col-3">
            <button className="btn btn-dark btn-block" onClick={() => handleClick('+')}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
