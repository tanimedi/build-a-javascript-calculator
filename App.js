import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [display, setDisplay] = React.useState(0);
  const [result, setResult] = React.useState(0);

  function allClear() {
    setDisplay(0);
    setResult(0);
  }

  function handleSigns(event) {
    const buttonText = event.target.innerText;
    if (buttonText === "-" && isNaN(display)) {
      if (
        isNaN(result.charAt(result.length - 1)) &&
        isNaN(result.charAt(result.length - 2))
      ) {
        setDisplay(buttonText);
      } else {
        setResult(result + buttonText);
        setDisplay(buttonText);
      }
    } else if (isNaN(display)) {
      if (
        isNaN(result.charAt(result.length - 1)) &&
        isNaN(result.charAt(result.length - 2))
      ) {
        setResult(result.slice(0, -2) + buttonText);
      } else {
        setResult(result.slice(0, -1) + buttonText);
        setDisplay(buttonText);
        console.log(5.1);
      }
    } else {
      setResult((prevResult) => prevResult + buttonText);
      setDisplay(buttonText);
      console.log(5.2);
    }
  }

  function handleDecimal(event) {
    const buttonText = event.target.innerText;
    if (isNaN(display)) {
      setDisplay(".");
      setResult(result + buttonText);
      console.log(2.1);
    } else if (typeof display === "number") {
      setDisplay(display + buttonText);
      setResult(result + buttonText);
      console.log(2.2);
    } else if (display.includes(".")) {
      setDisplay(display);
      console.log(2.3);
    }
  }

  function inputNumber(event) {
    const buttonText = event.target.innerText;
    if (display === 0 && buttonText === 0) {
      setDisplay(parseInt(buttonText));
      console.log(1.1);
    } else if (display === 0) {
      setDisplay(parseInt(buttonText));
      setResult(buttonText);
      console.log(3.1);
    } else if (
      isNaN(result.charAt(result.length - 1)) &&
      isNaN(result.charAt(result.length - 2))
    ) {
      setResult((prevResult) => prevResult.slice(0, -1));
      setResult((prevResult) => prevResult + "(" + -buttonText + ")");
      setDisplay(buttonText);
    } else if (display.includes(".")) {
      setDisplay(display + buttonText);
      setResult(result + buttonText);
    } else {
      setDisplay(buttonText);
      setResult(result + buttonText);
      console.log(6.2);
    }
  }
  console.log(result);
  function cleanInputs() {
    result.replaceAll("X", "*");
    setResult(result);
    console.log(result);
  }

  function calculate() {
    setDisplay((prevResult) => {
      setResult(prevResult);
      return eval(result);
    });
  }

  return (
    <div className="App">
      <div id="container">
        <div id="display">{display}</div>
        <div id="clear" className="button" onClick={allClear}>
          AC
        </div>
        <div id="divide" className="button" onClick={handleSigns}>
          /
        </div>
        <div id="multiply" className="button" onClick={handleSigns}>
          *
        </div>
        <div className="button" onClick={inputNumber}>
          7
        </div>
        <div className="button" onClick={inputNumber}>
          8
        </div>
        <div className="button" onClick={inputNumber}>
          9
        </div>
        <div id="subtract" className="button" onClick={handleSigns}>
          -
        </div>
        <div className="button" onClick={inputNumber}>
          4
        </div>
        <div className="button" onClick={inputNumber}>
          5
        </div>
        <div className="button" onClick={inputNumber}>
          6
        </div>
        <div id="add" className="button" onClick={handleSigns}>
          +
        </div>
        <div className="button" onClick={inputNumber}>
          1
        </div>
        <div className="button" onClick={inputNumber}>
          2
        </div>
        <div className="button" onClick={inputNumber}>
          3
        </div>
        <div id="equals" className="button" onClick={calculate}>
          =
        </div>
        <div id="zero" className="button" onClick={inputNumber}>
          0
        </div>
        <div id="decimal" className="button" onClick={handleDecimal}>
          .
        </div>
      </div>
    </div>
  );
}
