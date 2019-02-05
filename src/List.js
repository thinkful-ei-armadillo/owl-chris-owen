import React, { Component } from 'react';
import Card from './Card';

class List extends Component {
  render() {
    console.log(`List sees ${this.props} as props`);
    const cards = this.props.map((item) => <Card avatar={item.avatar} name={item.name} inSession={item.inSession} id={item.id} />)
    return (
      <ul class="List">
        {cards}
      </ul>
    )
  }
}

export default List;