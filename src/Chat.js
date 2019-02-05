import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {chatEvents} from './messages';
import {participants} from './participants';


class Chat extends Component {
  static defaultProps = chatEvents;
  render() {
    // iterate through chatevents, turning each event into the person that corresponds
    // alternatively, when showing events, fetch participant[chatEvents.participantId] since the ids match indices
    return (
      <section className="message-pane">
        {this.props.map(msg => <Message type={msg.type} time={msg.time} timestamp={msg.timestamp} id={msg.participantId} />)}
      </section>
    )
  }
}


export default Chat;

let people = chatEvents.map((message) => participants[message.participantId]  )
}