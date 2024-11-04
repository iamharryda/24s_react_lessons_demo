import { useState } from "react";
import "./App.css";
import Card from "./Card";
import personsData from "./data/personsData";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <header>
        <h1>Demo app for practicing React</h1>
      </header>
      <main>
        {isLoggedIn ? (
          <div>
            <p>This is the list</p>
            {personsData.map((whatever) => (
              <Card
                key={whatever.id}
                firstName={whatever.firstName}
                title={whatever.title}
                age={whatever.age}
                animal={whatever.animal}
              />
            ))}

            <button onClick={handleLogin}>Log in</button>
          </div>
        ) : (
          <div>
            <p>Please log in to see the list</p>{" "}
            <button onClick={handleLogin}>Log in</button>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
