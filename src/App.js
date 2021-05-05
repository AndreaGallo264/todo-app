import React, { useState } from "react";

//Mocked data
import data from "./data.json";

//Components
import Header from "./Header";

function App() {
  const [toDoList, setToDoList] = useState(data);
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
