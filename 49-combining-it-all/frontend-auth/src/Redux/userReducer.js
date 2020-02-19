const initialState = {
  user: {
    owned_snacks: []
  },
  token: ""
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case "SAVE_USER_TO_STATE":

      return {...state, user: action.payload.user, token: action.payload.token}
      // return {...state, ...action.payload}

    case "SAVE_SNACK_TO_USER":

      return {
        ...state,
        user: {
          ...state.user,
          owned_snacks: [...state.user.owned_snacks, action.payload]
        }
      }

    default:
      return state;
  }

}

export default userReducer
