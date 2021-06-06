import React, {useState} from "react";

function App() {

  const [text, setText] = useState("");
  const [equasion, setEquasion] useState({a: 0, b: 0, operator = ""});
    
  function solveEquasion(event) {
    event.preventDefault();

    var result = 0;

    setEquasion((prevEquasion) => {
      return {
        ...prevEquasion,
        [b] : parseFloat(text)
      });

    if (operator === "+") {
      result =  a + b;
    } else if (operator === "-") {
      result = a - b;
    } else if (operator === "*") {
      result =  a * b;
    } else if (operator === "/") {
      result =  a / b;
    } else {
      console.log("Error: inkorrekt operator");
    }

    setText((prevValue) => {
      return (prevValue + "=" + result);
    });
  }
  
  function handleClick(event) {
    event.preventDefault();

    const newValue = event.target.value;

    setText((prevValue) => {
      return (prevValue + newValue);
    });
  }

  function setOperator(event) {
    event.preventDefault();

    const newValue = event.target.value;

    setEquasion((prevEquasion) => {
      return {
        ...prevEquasion,
        [a] : parseFloat(text),
        [operator] : newValue
      });

    setText((prevValue) => {
      return (prevValue + newValue);
    });
  }

  function clear(event) {
    event.preventDefault();

    setText("");
    setEquasion({a: 0, b: 0, operator: ""});
  }

  return (
    <div className="container">
      <h1>{text}</h1>
      <table>
        <tbody>
          <tr>
            <td><button onClick={handleClick} value="7" >7</button></td>
            <td><button onClick={handleClick} value="8" >8</button></td> 
            <td><button onClick={handleClick} value="9" >9</button></td>
            <td><button onClick={setOperator} value="+" >+</button></td>
          </tr>
          <tr>
            <td><button onClick={handleClick} value="4" >4</button></td>
            <td><button onClick={handleClick} value="5" >5</button></td> 
            <td><button onClick={handleClick} value="6" >6</button></td>
            <td><button onClick={setOperator} value="-" >-</button></td>
          </tr>
          <tr>
            <th><button onClick={handleClick} value="1" >1</button></th>
            <th><button onClick={handleClick} value="2" >2</button></th> 
            <th><button onClick={handleClick} value="3" >3</button></th>
            <td><button onClick={setOperator} value="*" >*</button></td>
          </tr>
          <tr>
            <th><button onClick={handleClick} value="0" >0</button></th>
            <th><button onClick={handleClick} value="." >,</button></th> 
            <th><button onClick={solveEquasion} value="=" >=</button></th>
            <td><button onClick={setOperator} value="/" >/</button></td>
            
            <td><button onClick={clear}>AC</button></td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}

export default App;
