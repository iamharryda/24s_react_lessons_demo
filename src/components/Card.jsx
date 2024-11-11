function Card({ firstName, title, age, animal }) {

  return (
    <div className="card">
      <p>{firstName}</p>
      <p>Title: {title}</p>
      <p>Age: {age}</p>
      <p>Animal: {animal}</p>
    </div>
  );
}

export default Card;