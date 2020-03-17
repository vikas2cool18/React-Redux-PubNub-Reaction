import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import messageReducer from '../reducers/message'
import usernameReducer from '../reducers/username'
import reactionReducer from '../reducers/reaction'

const configureStore=()=> {
    const store=createStore(combineReducers({
        message: messageReducer,
        username: usernameReducer,
        reaction: reactionReducer
    }),applyMiddleware(thunk))

    return store
}

export default configureStore