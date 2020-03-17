import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import PubSub, {PubSubContext} from './pubsub'
import {addMessage} from './actions/message'
import uuid from 'uuid/v4'

const store=configureStore()

store.subscribe(()=> {
    console.log(store.getState())
})

const pubsub = new PubSub()

pubsub.addListener({
    message: messageObject=> {
        const {message, channel} = messageObject

        console.log('Message::', message, 'channel::::', channel)

        store.dispatch(message)
    }
})

/* setTimeout(()=> {
    pubsub.publish(addMessage({text: 'Hello World', timestamp: Date.now(), id: uuid()}))
}, 1000) */

const jsx=(
    <Provider store={store}>
        <PubSubContext.Provider value={{pubsub}}>
        <App />
        </PubSubContext.Provider>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));
