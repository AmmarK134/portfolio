import React from 'react';
import './home.css';
import ammar from '../../assets/ammar.JPG';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <img src={ammar} alt="Profile" className="home-image" />
        <div className="home-text">
          <h2>Welcome to My Portfolio</h2>
          <p>Here you can find information about me, my projects, and how to contact me.</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
