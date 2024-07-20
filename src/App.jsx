import { useState } from "react";
import React from "react";
import "./App.css";
import Container from "./Components/Container";

const App = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const clearMessages = () => {
    setError("");
    setSuccess("");
  };

  const resetbtn =()=> {
    setInput1('');
    setInput2('');
    setResult(null);
   clearMessages();
}


  
  const validateAndCalculate = (operation) => {
    clearMessages();

    const parsedNum1 = parseFloat(input1);
    const parsedNum2 = parseFloat(input2);

// validation checking

    if (!input1 || !input2) {
      setError("Please enter both numbers.");
      return;
    }

    if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
      setError("Please enter valid numbers.");
      return;
    }

// calculations

switch (operation) {
  case 'addition':
    setResult(parsedNum1 + parsedNum2);
    setSuccess(`Success: ${input1} + ${input2} = ${parsedNum1 + parsedNum2}`);
    break;
  case 'subtraction':
    setResult(parsedNum1 - parsedNum2);
    setSuccess(`Success: ${input1} - ${input2} = ${parsedNum1 - parsedNum2}`);
    break;
  case 'multiplication':
    setResult(parsedNum1 * parsedNum2);
    setSuccess(`Success: ${input1} * ${input2} = ${parsedNum1 * parsedNum2}`);
    break;
  case 'division':
    if (parsedNum2 !== 0) {
      setResult(parsedNum1 / parsedNum2);
      setSuccess(`Success: ${input1} / ${input2} = ${parsedNum1 / parsedNum2}`);
    } else {
      setError('Cannot divide by zero.');
    }
    break;
  default:
    setError('Invalid operation.');
}


    };


  return (
    <div>
      <Container result={result} error={error} success={success} resetbtn={resetbtn} validateAndCalculate={validateAndCalculate} setInput2={setInput2} setInput1={setInput1} input2={input2} input1={input1}  />
    </div>
  );
};


export default App;
