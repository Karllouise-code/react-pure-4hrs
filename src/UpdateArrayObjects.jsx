import React, { useState } from "react";

function UpdateArrayObjects() {
  const [cars, setCars] = useState([
    // { make: "Honda", model: "Civic", year: 2020 },
    // { make: "Toyota", model: "Camry", year: 2020 },
    // { make: "Ford", model: "Mustang", year: 2020 },
  ]);

  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleAddCar = () => {
    const newCar = {
      make: carMake,
      model: carModel,
      year: carYear,
    };
    setCars((c) => [...c, newCar]);
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  };

  function handleRemoveCar(index) {
    setCars((c) => c.filter((_, i) => i !== index));
  }

  function handleCarYearChange(e) {
    setCarYear(e.target.value);
  }

  function handleCarMakeChange(e) {
    setCarMake(e.target.value);
  }

  function handleCarModelChange(e) {
    setCarModel(e.target.value);
  }

  return (
    <div>
      <h2>Update Array of Objects in State</h2>
      <h3>List of Cars:</h3>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            {car.year} - {car.make} {car.model} &nbsp;
            <button onClick={() => handleRemoveCar(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input type="number" value={carYear} onChange={handleCarYearChange} placeholder="Enter year" /> <br />
      <input type="text" value={carMake} onChange={handleCarMakeChange} placeholder="Enter car make" /> <br />
      <input type="text" value={carModel} onChange={handleCarModelChange} placeholder="Enter car model" /> <br />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}

export default UpdateArrayObjects;
