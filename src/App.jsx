import "./App.css";
import Card from './Card'

function App() {
  return (
    <div>
      <header>LOGO</header>
      <main>
        <Card firstName="Margit" title="CEO" age="29" />
        <Card firstName="Karin" title="Designer" age="45" />
        <Card firstName="Kati" title="Developer" age="25" />
        <Card firstName="John" title="Developer" age="25" />
        <Card firstName="Jane" title="Developer" age="25" />
      </main>
    </div>
  );
}

export default App;
