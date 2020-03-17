import React from 'react'
import {connect} from 'react-redux'
import CreateReaction from './CreateReaction'
import MessageReaction from './MessageReaction'

function MessageBoard(props) {

    const filterReaction=(reaction, id)=> {
        console.log('reaction::', reaction, 'id:::')
        const reactionFilter = reaction.find(item=> {
            return item.messageId==id
        })
        return reactionFilter
    }
    return (
        <div>
            {props.message && props.message.map(item=> {
                return (
                            <div key={item.id}>
                                <h4>{new Date(item.timestamp).toLocaleString()}</h4>
                                <p>{item.text}</p>
                                <h4>{item.userName}</h4>
                                <CreateReaction messageId={item.id}/>
                                <MessageReaction messageReaction={filterReaction(props.reaction, item.id)} />
                                <hr />
                            </div>
                        ) 
            })}
        </div>
    )

}

const mapStateToProps=(state)=> {
    return {
        message: state.message,
        reaction: state.reaction
    }
}

export default connect(mapStateToProps)(MessageBoard)