import React, { Component } from 'react';
import Card from './Card';
import {participants} from './participants';

class List extends Component {
  static defaultProps = {participants};
  render() {
    const cards = this.props.participants.map(item => <Card avatar={item.avatar} 
      name={item.name} inSession={item.inSession} key={item.id} />);
      return (
      <ul className="List">
        {cards}
      </ul>
    )
  }
}

export default List;