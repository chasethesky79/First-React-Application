import React from 'react';
import logo from './logo.svg';
import { Confirm, IProps } from './Confirm'
import './App.css';

const App = () => {
  const props: IProps = {
    title: 'React tutorial title',
    content: 'React tutorial content',
    cancelOption: 'No way'
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. my react and typescript app now !!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and typescript
        </a>
      </header>
      <Confirm {...props}/>
    </div>
  );
}

export default App;
