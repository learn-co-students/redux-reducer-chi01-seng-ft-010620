export function managePresents(state = {numberOfPresents: 0}, action){
  // default: numberOfPresents = 0
  switch (action.type) {
    case "INCREASE":
      return {numberOfPresents: state.numberOfPresents + 1}
    case "DECREASE":
      return {numberOfPresents: state.numberOfPresents - 1}
    default:
      return state;
  }
}

// In managePresents.js, write a function called managePresents() that takes in the previous state and an action as its argument. Set an default value for the state argument - an object with a key, numberOfPresents, assigned to 0.
// Actions passed into this reducer will only have a type attribute, so they would look something like this:
//
//   ```js
//     action = {
//       type: "INCREASE"
//     }
//   ```
// If the reducer receives a type set to "INCREASE", return a new state where the value of numberOfPresents is increased by one. Use the tests to guide you as you build out this reducer.

// function reducer(state, action){
//   switch (action.type) {
//     case 'INCREASE_COUNT':
//       return {count: state.count + 1}
//     case 'DECREASE_COUNT':
//       return {count: state.count - 1}
//     default:
//       return state;
//   }
// }
