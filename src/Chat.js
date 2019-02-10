import React, {Component} from 'react';
import {chatEvents} from './messages';
import Message from './Message'


class Chat extends Component {
  static defaultProps = {chatEvents};
  render() {
    return(
      <ul className="message-pane">
        {this.props.chatEvents.map((msg, index) =>
         <Message
          message={msg.message}
          type={msg.type}
          time={msg.time}
          timestamp={msg.timestamp}
          id={msg.participantId}
          key={index} />)}
      </ul>
    )
  }
}


export default Chat;
