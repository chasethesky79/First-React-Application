import React from 'react';
import logo from './logo.svg';
import { Confirm, IProps } from './Confirm'
import './App.css';

interface IState {
  confirmOpen: boolean;
  confirmMessage: string;
  confirmVisible: boolean;
  countDown: number;
}

class App extends React.Component<{}, IState> {
 
   private timer: number = 0;
   constructor(props: {}) {
     super(props);
     this.state = {
       confirmOpen: false,
       confirmMessage: 'Please hit the confirm button',
       confirmVisible: true,
       countDown: 10
     }
   }
   componentDidMount = () => {
     this.timer = window.setInterval(() => {
        this.setState((prevState) => ({
          countDown: prevState.countDown - 1
        }), () => {
          if (this.state.countDown <= 0) {
            clearInterval(this.timer);
            this.setState({
              confirmMessage: 'Too late to confirm!',
              confirmVisible: false
            })
          }
        })
     }, 1000)
   }

   componentWillUnmount = () => {
     clearInterval(this.timer);
   }

  public render() {
    const props: IProps = {
      title: 'React tutorial title',
      content: 'React tutorial content',
      cancelOption: 'No way',
      open: this.state.confirmOpen,
      handleCancelClick: this.handleCancelClickHandler
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
      <p>Confirm message {this.state.confirmMessage}</p>
      {this.state.confirmVisible && 
      <button onClick={this.handleConfirmClick}>Confirm</button>}
      <Confirm {...props}/>
    </div>
  );
  }

  handleCancelClickHandler = () => {
    this.setState({
      confirmOpen: false,
      confirmMessage: 'Take a break i am sure you will like it later'
    });
    clearInterval(this.timer);
  }
  
  handleConfirmClick = () => {
    this.setState({
      confirmOpen: true,
      confirmMessage: 'Cool, carry on reading'
    });
    clearInterval(this.timer);
  }

  static getDerivedStateFromProps = (props: {}, state: IState) => {
    console.log(`STATE AND PROPS ${JSON.stringify(state)}`);
  }
}

export default App;
