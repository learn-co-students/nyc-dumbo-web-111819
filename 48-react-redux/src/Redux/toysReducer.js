import data from '../data'

const initialState = {
  toys: data,
  selectedToy: {}
}


// the return value of the ToysReducer becomes the new state
const toysReducer = (state = initialState, action) => {

  switch (action.type) {

    case "ADD_TOY":
      let newToy = action.payload
      let newArray = [...state.toys, newToy]

      return {...state, toys: newArray}

    case "LIKE_TOY":

      let updatedArr = state.toys.map(toyObj => {
        if (toyObj.id === action.payload) {
          return {...toyObj, likes: toyObj.likes + 1}
        } else{
          return toyObj
        }
      })

      return {...state, toys: updatedArr}

    default:
      return state
  }

}


// COPY ME

// let initialState = {
//
// }

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// }

// export default reducer


export default toysReducer
