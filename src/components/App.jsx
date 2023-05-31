import React, { useState } from "react";

//Must use Hook inside a functional component

function App() {
  // var count = 0;
  const [count, setCount] = React.useState(0);

  //ES6 - Destructuring: complex structures (Objects, Arrays)
  // const rgb = [155, 89, 182];
  // const [red, green, blue] = [155, 89, 182];

  // console.log(green);

  function Decrease() {
    // count++;
    setCount(count - 1);
  }

  function Increase() {
    // count++;
    setCount(count + 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={Decrease}>-</button>
      <button onClick={Increase}>+</button>
    </div>
  );
}

export default App;
