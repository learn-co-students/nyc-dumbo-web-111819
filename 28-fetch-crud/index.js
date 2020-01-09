console.log("%c Hello! Please write some nice Javascript code here.", "color: lightseagreen")

let allTodos = []

// DOM Elements
const todoList = document.querySelector("#to-do-items")
const todoForm = document.querySelector("#new-to-do")

// Get the URL for the fetch request
const TODO_URL = "http://localhost:3000/to_do_items"

// initial fetch
fetch(TODO_URL)
  .then(r => r.json())
  .then(todos => {
    allTodos = todos
    renderAllTodos(todos)
  })

console.log(allTodos)

// Event Listeners
todoForm.addEventListener("submit", (e) => {
  console.log(allTodos)
  e.preventDefault()
  console.log("this form submits")

  // get some data from the form input
  const newTodoTitle = e.target.title.value

  console.log("line 25")
  // fetch -> send data to the server
  fetch(TODO_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "title": newTodoTitle,
      "done": false
    })
  })
    .then(r => r.json())
    .then(todo => {
      console.log("line 39")
      // add the todo to the DOM
      renderOneTodo(todo)
    })

  console.log("line 44")

})

// Render Helpers
function renderOneTodo(todo) {
  console.log(todo)
  // create the element
  const newLi = document.createElement("li")
  newLi.classList.add("item")
  if (todo.done) {
    newLi.classList.add("done")
  }
  newLi.innerHTML = `
    <input id="to-do-item-${todo.id}" type="checkbox" ${todo.done ? "checked" : ""} />
    <label for="to-do-item-${todo.id}" class="js-title middle aligned content">${todo.title}</label>
    <button>×</button>
  `
  // append to the todo list
  todoList.append(newLi)
}

function renderAllTodos(todoArray) {
  todoArray.forEach(todo => {
    renderOneTodo(todo)
  })
}

// <li class="item">
//   <input id="to-do-item-1" type="checkbox" checked />
//   <label for="to-do-item-1" class="js-title middle aligned content">Walk the cat</label>
//   <button>×</button>
// </li>

// When the page loads, fetch all todo items and add them to the `to-do-items` list. 
// Each `li` should have the following HTML: