import React, { Component } from 'react'

class Performer extends Component {
    render(){
        return(
        <div>
            <span className='name'>{this.props.name}</span>
            <img src={this.props.avatar} alt="avatar"></img>
        </div>
        )
    }
}

export default Performer 