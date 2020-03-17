import React from 'react'
import {REACTION_OBJECTS} from '../reactionTypes'
import {addReaction} from '../actions/reaction'
import {PubSubContext} from '../pubsub'
import uuid from 'uuid/v4'
import {connect} from 'react-redux'

class CreateReaction extends React.Component {
    static contextType=PubSubContext

    publishReaction=(type, emoji)=> {
        console.log('message in the state', this.props.message)
        const {username, messageId}=this.props
        console.log('username::::', username)
        this.context.pubsub.publish(addReaction({type, emoji, username, messageId}))
    }

    render() {
    return (
        <div>
            {REACTION_OBJECTS.map((reaction)=> {
            return <span onClick={()=> {
                this.publishReaction(reaction.type, reaction.emoji)
            }} style={{margin: 5, cursor: 'pointer'}} key={reaction.type}>{reaction.emoji}</span>
            })}
        </div>
    )
}
}

const mapStateToProps=(state)=> {
    return {
        message: state.message,
        username: state.username
    }
}

export default connect(mapStateToProps)(CreateReaction)