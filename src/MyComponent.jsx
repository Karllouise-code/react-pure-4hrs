import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(25);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    // name = 'Rito'
    setName("Karl Rito");
  };

  const incrementAge = () => {
    setAge(age + 2);
  };

  return (
    <div>
      <p>Hello {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>

      <p>Employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={() => setIsEmployed(!isEmployed)}>
        Toggle Status
      </button>
    </div>
  );
}

export default MyComponent;
