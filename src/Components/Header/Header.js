import React from 'react';
import './Header.css';
import Typed from '../Typed'





const Header = props => {
  return (
    <header id="welcome-section">
      <div className="forest" />
      <div className="silhouette" />
      <div className="moon" />
      <div className="container">
        <p>
          <div>
             I am
          </div>
        <Typed/>
        </p>
        <div className="buttons">
          <a href="https://drive.google.com/file/d/1SwJpq81N8s8g6mJZAMXZa-4Q8h5H7y1t/view?usp=sharing">My Resume</a>
          <a href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;