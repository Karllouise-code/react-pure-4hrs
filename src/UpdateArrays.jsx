import React, { useState } from "react";

function UpdateArrays() {
  const [foods, setFoods] = useState(["Pizza", "Burger", "Sushi"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    if (newFood.trim() !== "") {
      // setFoods([...foods, newFood]);
      setFoods((f) => [...f, newFood]); // safer way when relying on previous state
      document.getElementById("foodInput").value = "";
    }
  }

  function handleRemoveFood(index) {
    setFoods((f) => f.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>Update Arrays in State</h2>
      <h3>List of Foods:</h3>

      <ul>
        {foods.map((food, index) => (
          <li key={index}>
            {food}
            <button onClick={() => handleRemoveFood(index)}>Remove</button>
          </li>
        ))}
      </ul>
      {/* <button onClick={handleAddFood}>Add Food</button> */}
      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}

export default UpdateArrays;
