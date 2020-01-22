const API = 'http://localhost:3000'

let getAllCategories = () => fetch(API+"/categories").then(r => r.json())
let postNewBurger = (burgerObj) => fetch(API+"/burgers", {
  method: "POST",
  headers: {
    'Content-type': 'Application/json'
  },
  body: JSON.stringify(burgerObj),
}).then(r => r.json())

let Adaptor = {
  getAllCategories,
  postNewBurger
}
