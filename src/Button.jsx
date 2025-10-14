function Button() {
  const styles = {
    backgroundColor: "hsl(200, 100%, 50%)",
    border: "none",
    color: "white",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
  };
  let count = 0;

  /*  const handleClick = (name) => {
    // console.log("Button clicked!");
    if (count < 3) {
      count++;
      console.log(`${name} you clicked me ${count} time/s`);
    } else {
      console.log(`${name} stop clicking me!`);
    }
  } */

  /* const handleClick2 = (name) => {
    console.log(`${name} stop clicking me`);
  } */

  const handleClick = (e) => {
    console.log("e: ", e);
    e.target.textContent = "Ouched! 😱";
  };

  return (
    // <button onClick={(e) => handleClick(e)} style={styles}>
    <button onDoubleClick={handleClick} style={styles}>
      Click Me 😁
    </button>
  );
}

export default Button;
