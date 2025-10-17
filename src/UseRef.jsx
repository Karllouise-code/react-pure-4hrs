import React, { useState, useEffect, useRef } from "react";

function UseRef() {
  //   let [number, setNumber] = useState(0);
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  //   console.log("ref: ", ref);

  useEffect(() => {
    console.log("test");
    console.log("inpRef: ", inputRef);

    // const interval = setInterval(() => {
    //   setNumber((n) => n + 1);
    // }, 1000);
    // return () => clearInterval(interval);
  }, []);

  function handleClick() {
    // setNumber((n) => n + 1);
    // ref.current += 1;
    // console.log(ref.current);

    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "red";
    // reset to other
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick2() {
    inputRef2.current.focus();
    inputRef2.current.style.backgroundColor = "red";
    // reset to other
    inputRef.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick3() {
    inputRef3.current.focus();
    inputRef3.current.style.backgroundColor = "red";
    // reset to other
    inputRef.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
  }

  return (
    <>
      <button onClick={handleClick}>Clicked me!</button>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick2}>Clicked me 2!</button>
      <input ref={inputRef2} type="text" />
      <button onClick={handleClick3}>Clicked me 3!</button>
      <input ref={inputRef3} type="text" />
    </>
  );
}

export default UseRef;
