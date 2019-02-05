import React, { Component } from 'react';
import './App.css';
import List from './List';
import Chat from './Chat';
// import Stage from './Stage';


class App extends Component {
  render() {
    console.log(this.props);
    return (
      <section class="App-container">
        <List participants={this.props}/>
        <Chat />
        {/* <Stage /> */}
      </section>
    );
  }
}

export default App;
