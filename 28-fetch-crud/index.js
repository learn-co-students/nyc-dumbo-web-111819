console.log("%c Hello! Please write some nice Javascript code here.", "color: lightseagreen")

// DOM Elements
const todoList = document.querySelector("#to-do-items")
const todoForm = document.querySelector("#new-to-do")

// Get the URL for the fetch request
const TODO_URL = "http://localhost:3000/to_do_items"

// initial fetch
fetch(TODO_URL)
  .then(r => r.json())
  .then(todos => {
    renderAllTodos(todos)
  })

// Event Listeners
todoForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // get some data from the form input
  const newTodoTitle = e.target.title.value

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
      // add the todo to the DOM
      renderOneTodo(todo)
    })
})

// Render Helpers
function renderOneTodo(todo) {
  console.log("rendering one todo:", todo)
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