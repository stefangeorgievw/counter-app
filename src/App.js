import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };

  constructor(){
    super();
    console.log('App - Constructor');
  }

  componentDidMount(){
    //Ajax call
    console.log('App - Mounted');
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleReduce = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  render(){
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c=> c.value > 0).length}/>
      <main className='container'></main> 
      <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncrement}  onDelete={this.handleDelete} onReduce={this.handleReduce}/>
      </React.Fragment>
      );
  }
}

export default App;
