import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';


class Counter extends React.Component {
    state = { counter: 0, isTimerRunning: true };
  
    componentDidMount() {
      this.id = setInterval(() => {
        console.log('incrementing');
        this.increment();
      }, 1000);
    }
  
    componentWillUnmount() {
      clearTimeout(this.id);
    }
  
    increment = () => {
      this.setState({ counter: this.state.counter + 1 });
    };
    stopTimer = () => {
        //clearInterval(this.id);
        this.setState({isTimerRunning: !this.state.isTimerRunning});
        if (this.state.isTimerRunning) {
            clearInterval(this.id);
        }
        console.log(this.state.isTimerRunning);
    }
  
    render() {
      console.log('rendering');
      return (
      <>
      <button onClick={this.increment}>{this.state.counter}</button>
      <button onClick={this.stopTimer}>Stop Timer</button>
      </>
        );
    }
  }
  
  //export default Counter;

//new solution....!

class Counter extends React.Component {
  state = { counter: this.props.initialCounter };

  isRunning = true;

  startTimer = () => {
    this.id = setInterval(() => {
      this.increment();
    }, 1000);
  };

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  toggleTimer = () => {
    this.isRunning = !this.isRunning;
    if (!this.isRunning) {
      clearInterval(this.id);
    } else {
      this.startTimer();
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>{this.state.counter}</button>
        <button onClick={this.toggleTimer}>toggle Timer</button>
      </div>
    );
  }
}

export default Counter;

ReactDOM.render(<Counter />, document.getElementById('root'));

