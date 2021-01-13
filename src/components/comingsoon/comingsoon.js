import React from 'react';
import './comingsoon.css';

function comingsoon(props) {
    return (
        <div className="App">
        <header className="Comingsoon">
          <img src="https://react-coming-soon.maksv.me/web-development.svg" className="App-logo" alt="logo" />
          <p>
           Coming Soon
          </p>
          <a
            className="App-link"
            href="https://chipmaglore.org"
            target="_blank"
            rel="noopener noreferrer">
            www.chipmaglore.org
          </a>
        </header> 
      </div>
    );
}

export default comingsoon;