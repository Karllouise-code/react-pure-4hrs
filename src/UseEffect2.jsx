import React, { useEffect, useState } from "react";

function UseEffect2() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("event added");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("event removed");
    };
  }, []);

  useEffect(() => {
    document.title = `${width} | ${height}`;
    console.log("useEffect called");
    return () => {
      // SOME CLEANUP CODE
      console.log("useEffect cleanup");
    };
  }, [width, height]);

  return (
    <div>
      <h1>UseEffect2</h1>

      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </div>
  );
}

export default UseEffect2;
