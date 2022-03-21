import logo from './logo.svg';
import './App.css';
import { MoralisProvider } from 'react-moralis';

function App() {
  return (
    <MoralisProvider appId="tBervYPJOVX8CXUeuiVWW3R0CGIpgW0d3RMzloJv" serverUrl="https://h2najvg6rsdj.usemoralis.com:2053/server">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
    </MoralisProvider>
  );
}

export default App;
