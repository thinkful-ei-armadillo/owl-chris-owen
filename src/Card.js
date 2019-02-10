import React, { Component } from 'react';
import './Card.css'
class Card extends Component {
  render() {
    const statusStr = this.props.inSession ? 'In Session': 'left'
    return (
      <li className="Card" id={this.props.id}>
        <img src={this.props.avatar} alt="avatar" />
        <span className='name'>{this.props.name} </span>
        <span className='inSession'>{statusStr}</span>
      </li>
    )
  }
}

export default Card;