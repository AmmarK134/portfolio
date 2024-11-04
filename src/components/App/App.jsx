import React, { useState } from 'react';
import './App.css';
import Home from '../Home/home';
import Chat from '../Chat/Chat'; // Import Chat component

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Ammar Kashif</h2> 
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#chat">Chat</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <Home /> 

      {/* Chat section at the bottom */}
      <div className="chat-box">
        <Chat />
      </div>
    </div>
  );
}

export default App;
