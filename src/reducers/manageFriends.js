export function manageFriends(state = {friends: [],}, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return (
        {...state,
          friends:[
            ...state.friends,
              action.friend
            ]
          }
      )
    case "REMOVE_FRIEND":
      const index = state.friends.findIndex(friend => (friend.id === action.id))
      return (
        {...state,
          friends: [
            ...state.friends.slice(0, index),
            ...state.friends.slice(index + 1)
          ]}
      )
    default:
      return state;
  }
}

// In manageFriends.js, write a function called manageFriends that takes in the previous state and an action as its argument. Here, the initial state should be an object with a key, friends, set to an empty array.
// This time, the reducer should be able to handle two actions, "ADD_FRIEND" and "REMOVE_FRIEND". When adding a friend, the action will include a friend key assigned to an object with name, hometown, and id keys.
//
// ```js
//   action = {
//     type: "ADD_FRIEND",
//     friend: {
//       name: "Chrome Boi"
//       homewtown: "NYC",
//       id: 1
//     }
//   }
// ```
// When our reducer receives "ADD_FRIEND", it should return a new state with this friend object added to the friends array.
//
// When removing a friend, instead of an object, the action will include an id key with an integer. Find the friend with the matching id and remove them. Thought of in another way, the reducer is really returning a new state with an array of friends that includes everyone except the removed friend.
//
// ```js
//   action = {
//     type: "REMOVE_FRIEND",
//     id: 1
//   }
// ```
// Both reducers should be pure functions. This means that the functions cannot change any object defined outside of the functions. It also means that given an input, the reducers will always return the same output

// let dog = {id: 1, name: 'scooby', color: 'brown', age: 4};
//
// let olderDog = {...dog, age: dog.age + 1}

// let dog = {id: 1, name: 'scooby', color: 'brown', age: 4};
// // if scooby had a birthday, we could write:
// let olderDog = Object.assign({}, dog, {age: dog.age + 1})
