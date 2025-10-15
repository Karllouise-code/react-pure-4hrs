import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // NORMAL
    // setCount(count + 1);

    // UPDATER FUNCTION // still much better or recommended
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  const decrement = () => {
    // setCount(count - 1); // NORMAL

    // UPDATER FUNCTION // still much better or recommended
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  };

  const reset = () => {
    setCount(0);  // just fine
    // setCount((c) => 0); // wouldnt be necessary
  };

  return (
    <div className="counter-container">
      <p className="count-display">{count}</p>
      <button className="counter-button" onClick={decrement}>
        Decrement
      </button>
      <button className="counter-button" onClick={reset}>
        Reset
      </button>
      <button className="counter-button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
