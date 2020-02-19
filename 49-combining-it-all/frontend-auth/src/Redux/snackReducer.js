const initialState = {
  all: []
}

const snackReducer = (state = initialState, {type, payload}) => {
  switch (type) {

    case "INITIALIZE_SNACKS":
      return {...state, all: payload}

    default:
      return state;

  }
}


export default snackReducer
