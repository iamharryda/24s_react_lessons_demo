import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const name = "Margit Tennosaar";
const first_page = 1998;

const demo = (
  <div>
    <h1>Hello World! My name is {name}</h1>
    <p>I have {2024 - first_page} years of building webpages experience</p>
  </div>
);

const Demo = () => {
  return (
    <div>
      <h1>Hello Component! My name is {name}</h1>
      <p>I have {2024 - first_page} years of building webpages experience</p>
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode><App/></StrictMode>
);
