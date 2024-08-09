import React from 'react';
import './home.css';
import ammar from '../../assets/ammar.JPG';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <img src={ammar} alt="Ammar" className="ammarPic" />
        <div className="home-text">
          <h2>Hi</h2>
          <p>I’m Ammar Kashif, a dedicated Computer Science student at 
            Toronto Metropolitan University with a passion for programming 
            and game development. With over four years of experience in Java
            and a solid foundation in Python, I am currently expanding my 
            skills in web development with HTML, CSS, and JavaScript. 
            My journey includes freelance software development, where 
            I’ve created custom games and enhanced existing applications, 
            as well as experience as a Computer Science tutor, fostering 
            a positive learning environment for students.</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
