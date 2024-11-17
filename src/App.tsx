// src/App.tsx
import React from "react";
import Timer from "./Timer";
import "./App.css";

const App: React.FC = () => {
  const startDate: Date = new Date("2024-07-24T09:25:00");

  return (
    <div className="App">
      <h1>Time since we first met</h1>
      <Timer startDate={startDate} />
    </div>
  );
};

export default App;
