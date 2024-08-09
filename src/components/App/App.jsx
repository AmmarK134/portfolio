import { useState } from 'react'
import './App.css'
import Home from '../Home/home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
      <h2>Ammar Kashif</h2>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Chat</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <Home /> {}
    </div>
  )
}

export default App
