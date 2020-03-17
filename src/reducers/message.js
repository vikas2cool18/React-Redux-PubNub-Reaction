const messageInitialValue=[]

const messageReducer=(state=messageInitialValue, action)=> {
    switch(action.type) {
        case 'ADD_MESSAGE' : {
            return [
                ...state,
                action.payload
            ]
        }
        default: {
            return [...state]
        }
    }
}

export default messageReducer