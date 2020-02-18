export const addToy = (newToy) => {
  return {
    type: "ADD_TOY",
    payload: newToy
  }
}

export const likeToy = (id) => {
  return {
    type: "LIKE_TOY",
    payload: id
  }
}
