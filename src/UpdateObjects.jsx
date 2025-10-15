import React, { useState } from "react";

function UpdateObjects() {
  const [car, setCar] = useState({
    make: "Honda",
    model: "Civic",
    year: 2020,
  });

  function handleYearChange(e) {
    // setCar({ ...car, year: e.target.value });
    setCar((c) => ({ ...c, year: e.target.value })); // safer way when relying on previous state
  }

  function handleMakeChange(e) {
    // setCar({ ...car, make: e.target.value });
    setCar((c) => ({ ...c, make: e.target.value })); // safer way when relying on previous state
  }

  function handleModelChange(e) {
    // setCar({ ...car, model: e.target.value });
    setCar((c) => ({ ...c, model: e.target.value })); // safer way when relying on previous state
  }


  return (
    <div>
      <h2>Update Objects in State</h2>
      <p>
        Your favorite car is: {car.make} {car.model} {car.year}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} /> <br />
      <input type="text" value={car.make} onChange={handleMakeChange} /> <br />
      <input type="text" value={car.model} onChange={handleModelChange} /> <br />
    </div>
  );
}

export default UpdateObjects;
