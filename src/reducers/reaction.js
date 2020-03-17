const initialReaction=[]

const reactionReducer=(state=initialReaction, action)=> {
    switch(action.type) {
        case 'ADD_REACTION' : {
            return [...state, action.payload]
        }
        default: {
            return [...state]
        }
    }
}

export default reactionReducer