import React from 'react';
import logo from './logo.svg';
import './App.css';
import { IConfirmProps, IProps } from './models/input-props';
import { Confirm } from './components/Confirm';
import { IState } from '../src/models/input-props';
import { useState } from 'react';

const props: IProps = {
  text: 'Fred,Jane,Bob',
  delimiter: ','
}
const iState: IState = {
  confirmOpen: true
}

const App: React.FC<{}> = () => {
  const [appState, setAppState] = useState(iState);
  const confirmProps: IConfirmProps = {
    title: 'This is where the title goes',
    content: 'This is where the content goes',
    handleOkClick: () => setAppState({ confirmOpen: false }),
    handleCancelClick: () => setAppState({ confirmOpen: false }),
    open: appState.confirmOpen
  }

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
      </header>
      <Confirm {...confirmProps}/>
    </div>
  );
}

export default App;
