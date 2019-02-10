import React, { Component } from 'react';
import {participants} from './participants'; 
import './Message.css'

class Message extends Component {
    render() {
    const participant = participants[this.props.id - 1]; 
    const timestamp = new Date(this.props.timestamp);
        return (
            <li className="chat-event" key={this.props.id} kind={this.props.type}>
                <img src={participant.avatar} alt="avatar"></img>
                <span className='name'>{participant.name} </span>
                <span className='time'>{`${timestamp}`} </span>
                <span className="message">{this.props.message}</span>                
            </li>
        )
    }
}

export default Message; 