// src/App.tsx
import React from "react";
import Timer from "./Timer";
import "./App.css";

const App: React.FC = () => {
  const firstMetDate: Date = new Date("2024-07-24T09:25:00");
  const relationDate: Date = new Date("2024-11-07T20:20:00");

  return (
    <div className="App">
      <img src="src/assets/raw.jpeg" alt="own photo" />
      <h1>Time since we first met</h1>
      <Timer startDate={firstMetDate} />
      <h1>Time since we are in a relationship</h1>
      <Timer startDate={relationDate} />
    </div>
  );
};

export default App;
