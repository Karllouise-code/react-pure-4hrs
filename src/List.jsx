// function List(props) {
function List({items = [], category = "Items"}) {
    // const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
    // convert to obj
    /* const fruits = [
        { name: 'Apple', calories: 95 },
        { name: 'Banana', calories: 105 },
        { name: 'Cherry', calories: 50 },
        { name: 'Date', calories: 20 },
        { name: 'Elderberry', calories: 70 }
    ]; */
    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // this is alphabetical
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // reverse alphabetical
    // calories
    // fruits.sort((a, b) => a.calories - b.calories); // ascending
    // fruits.sort((a, b) => b.calories - a.calories); // descending
    
    
    // const fruitItems = fruits.map((fruit, index) => <li key={index}>{fruit}</li>);

    /* const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
    const highCalFruits = fruits.filter((fruit) => fruit.calories > 100);

    const fruitItems = fruits.map((fruit, index) => 
                        <li key={index}>Name: {fruit.name}:
                        &nbsp;<b>{fruit.calories}</b></li>
                    );

                    const lowCalFruitItems = lowCalFruits.map((fruit, index) => 
                        <li key={index}>Name: {fruit.name}:
                        &nbsp;<b>{fruit.calories}</b></li>
                    );
                    
                    const highCalFruitItems = highCalFruits.map((fruit, index) => 
                        <li key={index}>Name: {fruit.name}:
                        &nbsp;<b>{fruit.calories}</b></li>
                    ); */
    
    const itemList = items.map((item, index) =>
        <li key={index}>Name: {item.name}:
        &nbsp;<b>{item.calories}</b></li>
    );

    return (
        <>
            {/* <h3>All Fruits</h3>
            <ol>
                {fruitItems}
            </ol>
            <h3>Low Calorie Fruits</h3>
            <ol>
                {lowCalFruitItems}
            </ol>
            <h3>High Calorie Fruits</h3>
            <ol>
                {highCalFruitItems}
            </ol> */}
            <h3 className="list-category">{category} List</h3>
            <ol className="list-items">
                {itemList}
            </ol>
        </>
    )
}

export default List;