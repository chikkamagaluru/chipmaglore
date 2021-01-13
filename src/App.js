import './App.css';
import Comingsoon from './components/comingsoon/comingsoon.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      <Comingsoon />
    </div>
  );
}

export default App;
