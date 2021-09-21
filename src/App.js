import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [display, setDisplay] = React.useState(0);
  const [result, setResult] = React.useState("");

  function allClear() {
    setDisplay(0);
    setResult("");
  }

  function handleSigns(event) {
    const buttonText = event.target.innerText;
    if (buttonText === "-" && isNaN(display)) {
      if (
        isNaN(result.charAt(result.length - 1)) &&
        isNaN(result.charAt(result.length - 2))
      ) {
        setDisplay(buttonText);
        console.log(5.1);
      } else {
        setResult(result + buttonText);
        setDisplay(buttonText);
        console.log(5.2);
      }
    } else if (isNaN(display)) {
      if (
        isNaN(result.charAt(result.length - 1)) &&
        isNaN(result.charAt(result.length - 2))
      ) {
        setResult(result.slice(0, -2) + buttonText);
        console.log(5.3);
      } else {
        setResult(result.slice(0, -1) + buttonText);
        setDisplay(buttonText);
        console.log(5.4);
      }
    } else {
      setResult((prevResult) => prevResult + buttonText);
      setDisplay(buttonText);
      console.log(5.5);
    }
  }

  function handleDecimal(event) {
    const buttonText = event.target.innerText;
    if (isNaN(display)) {
      setDisplay(".");
      setResult(result + buttonText);
      console.log(2.1);
    } else if (display.includes(".")) {
      setDisplay(display);
      console.log(2.3);
    } else if (
      display !== "+" ||
      display !== "/" ||
      display !== "*" ||
      display !== "-"
    ) {
      setDisplay(display + buttonText);
      setResult(result + buttonText);
      console.log(2.2);
    }
  }

  function inputNumber(event) {
    const buttonText = event.target.innerText;
    if (display === 0 && buttonText === "0") {
      setDisplay(parseInt(buttonText));
      console.log(1.1);
    } else if (display === 0) {
      setDisplay(buttonText);
      setResult(result + buttonText);
      console.log(1.2);
    } else if (
      isNaN(result.charAt(result.length - 1)) &&
      isNaN(result.charAt(result.length - 2)) &&
      result.charAt(result.length - 1) !== "."
    ) {
      setResult((prevResult) => prevResult.slice(0, -1));
      setResult((prevResult) => prevResult + "(" + -buttonText + ")");
      setDisplay(buttonText);
      console.log(1.3);
    } else if (
      display !== "+" &&
      display !== "/" &&
      display !== "*" &&
      display !== "-"
    ) {
      setDisplay(display + buttonText);
      setResult(result + buttonText);
      console.log(1.4);
    } else if (isNaN(display)) {
      setResult(result + buttonText);
      setDisplay(buttonText);
    } else if (display.includes(".")) {
      setDisplay(display + buttonText);
      setResult(result + buttonText);
    }
  }

  function calculate() {
    setResult(eval(result));
    setDisplay(eval(result));
  }
  console.log(result);
  return (
    <div className="App">
      <div id="container">
        <div id="display">{result}</div>
        <div id="inputs">{display}</div>

        <div id="clear" className="button" onClick={allClear}>
          AC
        </div>
        <div id="divide" className="button" onClick={handleSigns}>
          /
        </div>
        <div id="multiply" className="button" onClick={handleSigns}>
          *
        </div>
        <div id="seven" className="button" onClick={inputNumber}>
          7
        </div>
        <div id="eight" className="button" onClick={inputNumber}>
          8
        </div>
        <div id="nine" className="button" onClick={inputNumber}>
          9
        </div>
        <div id="subtract" className="button" onClick={handleSigns}>
          -
        </div>
        <div id="four" className="button" onClick={inputNumber}>
          4
        </div>
        <div id="five" className="button" onClick={inputNumber}>
          5
        </div>
        <div id="six" className="button" onClick={inputNumber}>
          6
        </div>
        <div id="add" className="button" onClick={handleSigns}>
          +
        </div>
        <div id="one" className="button" onClick={inputNumber}>
          1
        </div>
        <div id="two" className="button" onClick={inputNumber}>
          2
        </div>
        <div id="three" className="button" onClick={inputNumber}>
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
