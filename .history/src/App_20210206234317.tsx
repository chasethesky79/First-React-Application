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
  return <h1>My React App !!</h1>
}

export default App;
