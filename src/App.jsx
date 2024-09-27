import { useState } from "react";
import "./App.css";

function App() {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(0);

  const chooseFirstNumber = (number) => {
    console.log(number);
    if (number != "Clear") {
      if (firstNum == "0") {
        setFirstNum(number);
      } else {
        number = firstNum + number;
        setFirstNum(number);
      }
    } else {
      setFirstNum("0");
    }
  };

  const chooseSecondNumber = (number) => {
    console.log(number);
    if (number != "Clear") {
      if (secondNum == "0") {
        setSecondNum(number);
      } else {
        number = secondNum + number;
        setSecondNum(number);
      }
    } else {
      setSecondNum("0");
    }
  };

  const chooseOperator = (operator) => {
    console.log(operator);

    setOperator(operator);
  };

  const calculateResult = () => {
    switch (operator) {
      case "+":
        console.log("Add");
        setResult(Number(firstNum) + Number(secondNum));
        break;
      case "-":
        console.log("subtract");
        setResult(Number(firstNum) - Number(secondNum));
        break;
      case "*":
        console.log("multiply");
        setResult(Number(firstNum) * Number(secondNum));
        break;
      case "÷":
        console.log("divide");
        setResult(Number(firstNum) / Number(secondNum));
        break;
    }
  };

  // let test = 1;

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNum}</p>
        <div className="numbers">
          {/* <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
          <button>Clear</button> */}
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "Clear"].map(
            (num) => (
              <button key={num} onClick={() => chooseFirstNumber(num)}>
                {num}
              </button>
            )
          )}
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          {/* <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>÷</button> */}
          {["+", "-", "*", "÷"].map((num) => (
            <button key={num} onClick={() => chooseOperator(num)}>
              {num}
            </button>
          ))}
        </div>
      </div>

      <div className="panel">
        <p>{secondNum}</p>
        <div className="numbers">
          {/* <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
          <button>Clear</button> */}
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "Clear"].map(
            (num) => (
              <button key={num} onClick={() => chooseSecondNumber(num)}>
                {num}
              </button>
            )
          )}
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={() => calculateResult()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
