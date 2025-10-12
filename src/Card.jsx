// function Card({ title, description, image }) {
import profilePic from './assets/01-KARLRITO.jpeg'
function Card() {
  return (
    <div className="card">
    {/* <div className="card">
      <img src={image} alt={title} />
      <div className="card-body">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div> */}
    
    {/* <img src="https://placehold.co/150" alt="Lark" /> */}
    <img className="card-image" src={profilePic} alt="Lark" />
    <h2 className="card-title">Lark</h2>
    <p className="card-text">I make websites and play gacha games.</p>

    </div>

  );
}

export default Card;