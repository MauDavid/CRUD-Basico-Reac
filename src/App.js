import React from "react";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CrudApp from "./componentes/CrudApp";

function App() {
  return (
    <div className="App">
      <h1>CRUD APP</h1>
      <CrudApp />
    </div>
  );
}

export default App;
