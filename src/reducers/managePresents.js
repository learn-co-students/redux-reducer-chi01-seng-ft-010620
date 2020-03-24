export function managePresents(state, action){
    // let action = {type: 'INCREASE'}
    state = {numberOfPresents: 0}
    switch (action.type) {
        case 'INCREASE':
            return {numberOfPresents: state.numberOfPresents + 1}
    default:
        return state 
    }
}
