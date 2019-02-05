import React, { Component } from 'react';
import './App.css';
import List from './List';
import Chat from './Chat';
import Stage from './Stage';


class App extends Component {
  render() {
    return (
      <section className="App-container">
        <List />
        <Chat />
        <Stage /> 
      </section>
    );
  }
}

export default App;
