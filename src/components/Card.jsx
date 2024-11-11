import Button from './Button'

function Card({ firstName, title, age, animal, click }) {

  return (
    <div className="card">
      <p>{firstName}</p>
      <p>Title: {title}</p>
      <p>Age: {age}</p>
      <p>Animal: {animal}</p>
      <Button text='Click me' click={click} />
    </div>
  );
}

export default Card;