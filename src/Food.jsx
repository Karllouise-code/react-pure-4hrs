function Food() {
    const food1 = "Pizza"
    const food2 = "sushi"
    const food3 = "tacos"
    
  return (
    <div>
        <h2>My Favorite Foods</h2>
        <ul>
            <li>{food1.toUpperCase()}</li>
            <li>{food2.toUpperCase()}</li>
            <li>{food3.toUpperCase()}</li>
        </ul>
    </div>
  )
}

export default Food