
function Button() {
  const styles = {
    backgroundColor: "hsl(200, 100%, 50%)",
    border: "none",
    color: "white",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
  }
  
  return (
    <button style={styles}>
      Click Me
    </button>
  )
}

export default Button