const state={ friends:[]}
export function manageFriends(state, action){
   switch(action.type){
       //adds the friend when type is 'ADD_FRIEND' and the action has a friend property with a name, hometown and id:
    case "ADD_FRIEND":
        return ({...state, friends:[...state.friends,action.friend]})
        // removes the friend when action type is 'REMOVE_FRIEND' and the action has a property of the friends id to be removed:
        case "REMOVE_FRIEND":
            const removalIndex = state.friends.findIndex(friend=>friend.id===action.id)
            return({...state,friends:[
                ...state.friends.slice(0,removalIndex),...state.friends.slice(removalIndex+1)
            ]})
// return ({...state.friends.filter(friend=>{
//    return friend.id !== action.id? friend : null
// })})
default:
    return state    }

}
