export const fetchAndInitializeSnacks = () => {

  return (dispatch, getState) => {
    fetch("http://localhost:4000/snacks")
    .then(r => r.json())
    .then((snacksArr) => {
      dispatch( initializeSnacks(snacksArr) )
    })

  }

}

// THUNKY STUFF

export const saveUserToState = (userInfo) => {
  return {
    type: "SAVE_USER_TO_STATE",
    payload: userInfo
  }
}

export const saveSnackToUserSnacks = (snack) => {
  return {
    type: "SAVE_SNACK_TO_USER",
    payload: snack
  }
}



export const initializeSnacks = (snacks) => {
  return {
    type: "INITIALIZE_SNACKS",
    payload: snacks
  }
}
