import React, { useEffect, useState, useCallback} from 'react';
import './home.css';
import ammar from '../../assets/ammar.JPG';
import instagram from '../../assets/instagram.svg';
import discord from '../../assets/discord.svg';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linked.svg';
import Typewriter from "typewriter-effect";
import { useSpring, animated } from 'react-spring';

const Home = () => {

  return (
    <section id="home" className="home">
      <div className="links">
        <a href="https://instagram.com/ammar_kashif14" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" className="social-icon" />
        </a>
        <a href="https://discordapp.com/users/617090443452088350" target="_blank" rel="noopener noreferrer">
          <img src={discord} alt="Discord" className="social-icon" />
        </a>
        <a href="https://github.com/ammark134" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/ammar-kashif-84a31217a/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="social-icon" />
        </a>
      </div>
      <div className="home-content">
        <img src={ammar} alt="Ammar" className="ammarPic" />
        <div className="home-text">
          <div className="typewriter-container">
            <Typewriter
              onInit={(typewriter) => {
              typewriter
              .typeString("'Natural Born Toronto Man'")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Computer Scientist")
              .pauseFor(1000)
              .start();
            }}
            options={{
              loop: true, 
            }}
            />
          </div>
          <p>
            I’m Ammar Kashif, a dedicated Computer Science student at Toronto Metropolitan University with a passion for programming and game development. With over four years of experience in Java and a solid foundation in Python, I am currently expanding my skills in web development with HTML, CSS, and JavaScript. My journey includes freelance software development, where I’ve created custom games and enhanced existing applications, as well as experience as a Computer Science tutor, fostering a positive learning environment for students.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
