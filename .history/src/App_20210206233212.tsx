import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SplitText } from '../src/components/SplitText'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <SplitText text='Fred,Jane,Bob'/>
      </header>
    </div>
  );
}

export default App;
