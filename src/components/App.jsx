import React, {useState} from "react";

function App() {

  //const state = React.useState();
  // Example: Destructuring in ES6
  const [count, setCount] = useState(0);

  const safariRenderHack = { opacity: count % 2 ? 1 : 0.99 };

  //const [red, green, blue] = [64, 115, 158];
  //console.log(red);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1 style={safariRenderHack}>{count}</h1>
      <button onClick={decrease} >-</button>
      <button onClick={increase} >+</button>
    </div>
  );
}

export default App;
