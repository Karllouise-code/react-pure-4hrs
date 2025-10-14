import React, { useState } from "react";

function MyComponent() {
  //   const [name, setName] = useState("Guest");
  //   const [age, setAge] = useState(25);
  //   const [isEmployed, setIsEmployed] = useState(false);

  //   const updateName = () => {
  //     // name = 'Rito'
  //     setName("Karl Rito");
  //   };

  //   const incrementAge = () => {
  //     setAge(age + 2);
  //   };

  const [name, setName] = useState("Doe");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("credit");
  const [shipping, setShipping] = useState("Delivery");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleQuantityChange(e) {
    setQuantity(e.target.value);
  }

  function handleCommentChange(e) {
    setComment(e.target.value);
  }

  function handlePaymentChange(e) {
    setPayment(e.target.value);
  }

  function handleShippingChange(e) {
    setShipping(e.target.value);
  }

  return (
    <div>
      {/* <p>Hello {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>

      <p>Employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={() => setIsEmployed(!isEmployed)}>
        Toggle Status
      </button> */}

      <input value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>

      <input type="number" value={quantity} onChange={handleQuantityChange} />
      <p>Quantity: {quantity}</p>

      <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions" />
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select Payment Method</option>
        <option value="cash">Cash</option>
        <option value="credit">Credit Card</option>
        <option value="check">Check</option>
      </select>
      <p>Payment: {payment}</p>

      {/* radio */}
      <label>
        <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange} />
        Pick up
      </label>
      <label>
        <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange} />
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
}

export default MyComponent;
