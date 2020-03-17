import React from 'react'
import PubSub from '../pubsub'
import {addMessage} from '../actions/message'
import {PubSubContext} from '../pubsub'
import uuid from 'uuid/v4'
import {connect} from 'react-redux'

class PublishMessage extends React.Component {
    constructor() {
        super()
        this.state={
            text: ''
        }
    }

    handleChange=(e)=> {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit=(e)=> {
        e.preventDefault()
        this.context.pubsub.publish(addMessage({text: this.state.text, timestamp: Date.now(), id: uuid(), userName: this.props.username}))

    }

    render() {
        return (
            <div>
                <h3>Got Something to</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="message">Enter Text</label>
                    <input type="text" name="text" value={this.state.text} onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
    static contextType=PubSubContext
}

const mapStateToProps=(state)=> {
    return {
        username: state.username
    }
}

export default connect(mapStateToProps)(PublishMessage)