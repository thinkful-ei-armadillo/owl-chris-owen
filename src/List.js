import React, { Component } from 'react';
import Card from './Card';
import {participants} from './participants';

class List extends Component {
  static defaultProps = {participants};
  render() {
    //generate cards, array of objects, for participants
    const cards = this.props.participants.map(item => 
      <Card
        avatar={item.avatar} 
        name={item.name}
        inSession={item.inSession}
        key={item.id}
        />);

    console.log(`${cards[0].inSession} is "cards[0].inSession"`)
    // create two arrays
    let {inSession, leftSession} = ['']
    //for each card object, put it either in inSession or leftSession arrays
    cards.forEach(card => card.inSession ? inSession.push(card): leftSession.push(card))
    // then display inSession array before leftSession array
    return (
      <ul className="List">
        {inSession}
        {leftSession}
      </ul>
    )
  }
}

export default List;