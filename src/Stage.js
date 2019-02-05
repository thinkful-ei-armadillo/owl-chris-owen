import React, { Component } from 'react';
import {participants} from './participants'; 
import Performer from './Performer'; 
class Stage extends Component {
    render(){
        const onStage = participants.filter(participant => participant.onStage)
        const cards = onStage.map((participant, index) => <Performer name={participant.name} avatar={participant.avatar} key={index} />); 
        return(
            <div className="Stage">
                {cards}
            </div>
        )
    }
}

export default Stage;