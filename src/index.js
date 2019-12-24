import React from "react";
import ReactDOM from "react-dom";
import UseForm from "./UserForm";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <UseForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
