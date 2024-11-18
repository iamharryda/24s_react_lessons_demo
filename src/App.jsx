import { useState } from "react";
import Card from "./components/Card";
import personsData from "./data/personsData";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  const handleClick = (id) => {
    console.log('I am Clicked', id)
  }

  return (
    <>
      <header>
        <h1>Demo app for practicing React</h1>
        <Button
          text={isLoggedIn ? "Log out" : "Log in"}
          click={toggleLogin}
        />



      </header>
      <main>
        {isLoggedIn ? (
          <>
            <h2>Employees</h2>
            <div className="list">
              {personsData.map((whatever) => (
                <Card
                  key={whatever.id}
                  firstName={whatever.firstName}
                  title={whatever.title}
                  age={whatever.age}
                  animal={whatever.animal}
                  onClick={() => handleClick(whatever.id)}

                />
              ))}
            </div>
          </>
        ) : (
          <div>
            <p>Please log in to see the list</p>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
