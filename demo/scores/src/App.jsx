// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import React from 'react';

const toggleDetails = (e) => {
  const button = e.currentTarget;
  const details = button.querySelector('.details');
  const icon = button.querySelector('.icon');
  
  if (details.style.display === 'block') {
    details.style.display = 'none';
    icon.textContent = '▼';
  } else {
    details.style.display = 'block';
    icon.textContent = '▲';
  }
};

function App() {
  return (
    <>
      <div>
        <h1>Upcoming Matches</h1>
        <button className="match-button" onClick={toggleDetails}>
          Match 1: Team A vs Team B
          <div className="details" style={{ display: 'none' }}>
            <p><strong>Match RESULT:</strong> TEAM A WON</p>
            <p><strong>Time:</strong> 5:00 PM</p>
          </div>
          <span className="icon">▼</span>
        </button>
        <button className="match-button" onClick={toggleDetails}>
          Match 2: Team C vs Team D
          <div className="details" style={{ display: 'none' }}>
            <p><strong>Date:</strong> August 26, 2024</p>
            <p><strong>Location:</strong> Stadium ABC</p>
            <p><strong>Time:</strong> 7:00 PM</p>
          </div>
          <span className="icon">▼</span>
        </button>
        <button className="match-button" onClick={toggleDetails}>
          Match 3: Team E vs Team F
          <div className="details" style={{ display: 'none' }}>
            <p><strong>Date:</strong> August 27, 2024</p>
            <p><strong>Location:</strong> Stadium DEF</p>
            <p><strong>Time:</strong> 6:00 PM</p>
          </div>
          <span className="icon">▼</span>
        </button>
      </div>
    </>
  );
}

export default App;
