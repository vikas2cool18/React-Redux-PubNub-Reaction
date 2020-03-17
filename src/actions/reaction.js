export const addReaction=(reaction)=> {
    return {
        type: 'ADD_REACTION',
        payload: reaction
    }
}