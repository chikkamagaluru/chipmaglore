import logo from './logo.svg';
import './App.css';
import Image from 'react-bootstrap/Image';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image src="https://react-coming-soon.maksv.me/web-development.svg" 
        className="App-logo"  
        alt="comingsoon" 
        fluid="true" 
        height="600px" 
        width="600px">
        </Image>

        <p>
          Coming Soon
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
