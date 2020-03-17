import React from 'react'
import {connect} from 'react-redux'

function MessageReaction(props) {
    console.log('Message Reactions',props.messageReaction)
    if(!props.messageReaction) return null
    return (
        <div>
            
                
                
                    <span key={props.messageReaction.id}>{props.messageReaction.username} - {props.messageReaction.emoji}</span>
                
        
        </div>
    )
}

const mapStateToProps=(state)=> {
    return {
        reaction: state.reaction,
        message: state.message
    }
}

export default connect(mapStateToProps)(MessageReaction)