const initialUsername='anonymous'

const usernameReducer=(state=initialUsername, action)=> {
    switch(action.type) {
        case 'SET_USERNAME' : {
            return action.payload
        }
        default: {
            return state
        }
    }
}

export default usernameReducer