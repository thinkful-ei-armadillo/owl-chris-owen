import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <li className="Card" id={this.props.id}>
        <img src={this.props.avatar} alt="avatar"></img>
        <span className='name'>{this.props.name}</span>
        <span className='inSession'>{this.props.inSession}</span>
      </li>
    )
  }
}

export default Card;