import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SplitText } from '../src/components/SplitText'
import { IProps } from '../src/models/input';

const props: IProps = {
  text: 'Fred,Jane,Bob',
  delimiter: ','
}

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
        <SplitText {...props}/>
      </header>
    </div>
  );
}

export default App;
