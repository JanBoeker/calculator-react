import React, {useState} from "react";

function App() {

  //const state = React.useState();
  // Example: Destructuring in ES6
  const [count, setCount] = useState("");

  const safariRenderHack = { opacity: count % 2 ? 1 : 0.99 };

  function plusOne() {
    setCount(count + "1");
  }

  return (
    <div className="container">
      <h1 style={safariRenderHack}>{count}</h1>
      <div>
        <button onClick={plusOne}>1</button>
        <button>2</button>
        <button>3</button>
      </div>
      <div>
        <button>4</button>
        <button>5</button>
        <button>6</button>
      </div>
      <div>
        <button>7</button>
        <button>8</button>
        <button>9</button>
      </div>
    </div>
  );
}

export default App;
