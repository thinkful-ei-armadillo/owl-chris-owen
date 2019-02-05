import React, { Component } from 'react';
import './App.css';
import List from './List';
// import Chat from './Chat';
import Stage from './Stage';
import {participants} from './participants';

class App extends Component {
  static defaultProps = participants;
  render() {
    return (
      <section class="App-container">
        <List participants={this.props} />
        {/* <Chat /> */}
        {/* <Stage /> */}
      </section>
    );
  }
}

export default App;
