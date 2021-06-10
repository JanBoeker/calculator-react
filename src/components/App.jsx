import React, {useState} from "react";

function App() {

  const [operator, setOperator] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [solution, setSolution] = useState("");

  function handleClick(event) {

    //prevents the page from been refreshed after pushing a button
    event.preventDefault();

    const value = event.target.value;

    if (solution !== "") {
      setA(solution);
      setB("");
      setOperator("");
      setSolution("");
    } 

    if (value === "AC") {
      clear();

    } else if (value === "=") {
      setSolution(solveEquasion());

    } else if ((value === "+") || 
               (value === "-") || 
               (value === "*") || 
               (value === "/")) {
      setOperator(value);

    } else if ((value === "0") ||
               (value === "1") ||
               (value === "2") ||
               (value === "3") ||
               (value === "4") ||
               (value === "5") ||
               (value === "6") ||
               (value === "7") ||
               (value === "8") ||
               (value === "9") ||
               (value === ",")) {
      if (operator === "") {
        setA((prevValue) => {
          return prevValue + value;
        });
      } else {
        setB((prevValue) => {
          return prevValue + value;
        });
      }
    } else {
      console.log("Uups, something went wrong.");
    }
  }
  
  function clear() {
    setA("");
    setB("");
    setOperator("");
    setSolution("");
  }
  
  function solveEquasion() {
    if (a !== "" && b !== "" && operator !== "") {
      switch(operator) {
        case "+":
          return parseFloat(a)+ parseFloat(b);
          break;
        case "-":
          return parseFloat(a) - parseFloat(b);
          break;
        case "*":
          return parseFloat(a) * parseFloat(b);
          break;
        case "/":
          if (b !== 0) {
            return parseFloat(a) / parseFloat(b);
          } else {
            return "error";
          }
          break;
        default:
          return "wrong operator";
      }
    } else {
      console.log("Please insert values first.");
    }
  }

  return (
    <div classvalue="container">
      <h1>{a + operator  + b + (solution !== "" ? "=" : "")  + solution}</h1>
      <table>
        <tbody>
          <tr>
            <td><button onClick={handleClick} value="7" >7</button></td>
            <td><button onClick={handleClick} value="8" >8</button></td> 
            <td><button onClick={handleClick} value="9" >9</button></td>
            <td><button onClick={handleClick} value="+" >+</button></td>
          </tr>
          <tr>
            <td><button onClick={handleClick} value="4" >4</button></td>
            <td><button onClick={handleClick} value="5" >5</button></td> 
            <td><button onClick={handleClick} value="6" >6</button></td>
            <td><button onClick={handleClick} value="-" >-</button></td>
          </tr>
          <tr>
            <th><button onClick={handleClick} value="1" >1</button></th>
            <th><button onClick={handleClick} value="2" >2</button></th> 
            <th><button onClick={handleClick} value="3" >3</button></th>
            <td><button onClick={handleClick} value="*" >*</button></td>
          </tr>
          <tr>
            <th><button onClick={handleClick} value="0" >0</button></th>
            <th><button onClick={handleClick} value="." >,</button></th> 
            <th><button onClick={handleClick} value="=" >=</button></th>
            <td><button onClick={handleClick} value="/" >/</button></td>
            
            <td><button onClick={handleClick} value="AC" >AC</button></td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}

export default App;
