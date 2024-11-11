import { useState } from "react";
import Card from "./components/Card";
import personsData from "./data/personsData";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <>
      <header>
        <h1>Demo app for practicing React</h1>
        <button onClick={handleLogin}>
          {isLoggedIn ? "Log out" : "Log in"}
        </button>
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
