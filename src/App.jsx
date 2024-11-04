import "./App.css";
import Card from "./Card";
import { useState } from "react";

function App() {
  const [person, setPerson] = useState({
    firstName: "Emilia",
    title: "Developer",
    age: 52,
    animal: "fox"
  });

  return (
    <>
      <header><h1>Demo app for practicing React</h1></header>
      <main>
        <Card firstName={person.firstName} title={person.title} age={person.age} animal={person.animal} />
        <Card firstName="Margit" title="CEO" age="29" animal="fox" />
        <Card firstName="Karin" title="Designer" age="45" animal="fox" />
        <Card firstName="Kati" title="Developer" age="25" animal="fox" />
        <Card firstName="John" title="Developer" age="25" animal="fox" />
        <Card firstName="Jane" title="Developer" age="25" animal="fox" />
      </main>
    </>
  );
}

export default App;
