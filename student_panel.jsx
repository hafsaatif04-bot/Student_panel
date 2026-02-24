import React, { useState, useEffect } from "react";
import "./student_panel.css";

function Counter() {
  const [num, setNum] = useState(0);
  const [square, setSquare] = useState(0);

  // Runs once when component loads
  useEffect(() => {
    console.log("Counter component loaded");
  }, []);

  // Update square when num changes
  useEffect(() => {
    setSquare(num * num);
  }, [num]);

  return (
    <div className="counter-section">
      <h3>Counter Section</h3>
      <p>Number: {num}</p>
      {num < 0 && <p className="negative">Negative number</p>}
      <p>Square: {square}</p>
      <button onClick={() => setNum(num + 1)}>Increment</button>
      <button onClick={() => setNum(num - 1)}>Decrement</button>
    </div>
  );
}

function StudentPanel() {
  const [login, setLogin] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [feedback, setFeedback] = useState("");

  return (
    <div className={darkMode ? "panel dark" : "panel light"}>
      <h2>Student Interaction Panel</h2>

      {/* Login Section */}
      <div className="section">
        <p>Status: {login ? "Logged In" : "Logged Out"}</p>
        <button onClick={() => setLogin(!login)}>
          {login ? "Logout" : "Login"}
        </button>
      </div>

      {/* Click Counter */}
      <div className="section">
        <p>Total Clicks: {clicks}</p>
        <button onClick={() => setClicks(clicks + 1)}>Click Me</button>
      </div>

      {/* Theme Switch */}
      <div className="section">
        <button onClick={() => setDarkMode(!darkMode)}>
          Switch to {darkMode ? "Light" : "Dark"} Theme
        </button>
      </div>

      {/* Feedback */}
      <div className="section">
        <input
          type="text"
          placeholder="Enter feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <p>Feedback Preview: {feedback}</p>
      </div>

      {/* Counter Component */}
      <Counter />
    </div>
  );
}

export default StudentPanel;
