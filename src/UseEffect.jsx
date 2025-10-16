import React, { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");

  useEffect(() => {
    console.log("useEffect called");
    document.title = `Count: ${count} | ${color}`;

    return () => {
        // SOME CLEANUP CODE
      console.log("useEffect cleanup");
    };
  }, [count, color]);

  function addCount() {
    setCount((c) => c + 1);
  }

  function subCount() {
    setCount((c) => c - 1);
  }

  function changeColor() {
    setColor((c) => (c === "red" ? "blue" : "red"));
  }

  return (
    <div>
      <h1>UseEffect</h1>
      <p style={{ color }}>Count: {count}</p>
      <button onClick={addCount}>Add Count</button>
      <button onClick={subCount}>Subtract Count</button>
      <br />
      {/* <button onClick={() => setColor((c) => (c === "red" ? "blue" : "red"))}>Change Color</button> */}
      <button onClick={changeColor}>Change Color</button>
      <p>Color: {color}</p>
    </div>
  );
}

export default UseEffect;
