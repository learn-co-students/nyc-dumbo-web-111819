const API = 'http://localhost:3000'

let getAllCategories = () => fetch(API+"/categories").then(r => r.json())
let postNewBurger = (burgerObj) => fetch(API+"/burgers", {
  method: "POST",
  headers: {
    'Content-type': 'Application/json'
  },
  body: JSON.stringify(burgerObj),
}).then(r => r.json())

let createNewOrder = (username, arrayOfIds) => {
  return fetch(API + '/orders', {
    method: "POST",
    headers: {
      'Content-type': 'Application/json'
    },
    body: JSON.stringify({
      username,
      arrayOfIds
    })
  })
  .then(r => r.json())
}


let orderHistory = (name) => {
  return fetch(API + '/users/history', {
    method: "POST",
    headers: {
      'Content-type': 'Application/json'
    },
    body: JSON.stringify({
      chicken: name
    })
  })
  .then(r => r.json())
}

let Adaptor = {
  getAllCategories,
  postNewBurger,
  orderHistory,
  createNewOrder
}





















//
