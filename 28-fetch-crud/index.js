console.log("%c Hello! Please write some nice Javascript code here.", "color: lightseagreen")

// DOM Elements
const todoList = document.querySelector("#to-do-items")
const todoForm = document.querySelector("#new-to-do")

// API
const TODO_URL = "http://localhost:3000/to_do_items"

function createTodo(newTodoTitle) {
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
}

function deleteTodo(id, li) {
  // delete THIS todo from the server
  // DELETE /to_do_items/:id

  const deleteUrl = `${TODO_URL}/${id}`
  fetch(deleteUrl, {
    method: "DELETE"
  })
    .then(r => r.json())
    .then(() => {
      // delete THIS todo's li from the dom
      li.remove()
    })
}

function updateTodo(todoId, todoLi, done) {
  // update the todo on the server
  fetch(`${TODO_URL}/${todoId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "done": done
    })
  })
    .then(r => r.json())
    .then(updatedTodo => {
      if (updatedTodo.done) {
        todoLi.classList.add("done")
      } else {
        todoLi.classList.remove("done")
      }
    })
  // update the dom for the todo
}

// Initial Render
fetch(TODO_URL)
  .then(r => r.json())
  .then(todos => {
    renderAllTodos(todos)
  })

// Event Listeners
// DELEGATION
// todoList.addEventListener("click", e => {
//   if (e.target.tagName === "BUTTON") {
//     const todoId = e.target.dataset.id
//     const todoLi = e.target.closest("li")
//     deleteTodo(todoId, todoLi)

//   } if (e.target.tagName === "INPUT") {
//     const todoId = e.target.dataset.id
//     const todoLi = e.target.closest("li")
//     // change the status to done or not done
//     const done = e.target.checked
//     updateTodo(todoId, todoLi, done)
//   }
// })

todoForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // get some data from the form input
  const newTodoTitle = e.target.title.value

  createTodo(newTodoTitle)

})

// Render Helpers
function renderOneTodo(todo) {
  // console.log("rendering one todo:", todo)
  // create the element
  const newLi = document.createElement("li")
  newLi.classList.add("item")
  if (todo.done) {
    newLi.classList.add("done")
  }
  newLi.innerHTML = `
    <input data-id="${todo.id}" id="to-do-item-${todo.id}" type="checkbox" ${todo.done ? "checked" : ""} />
    <label for="to-do-item-${todo.id}" class="js-title middle aligned content">${todo.title}</label>
    <button data-break="true" data-id="${todo.id}">×</button>
  `

  // INDIVIDUAL EVENT HANDLERS (closure)
  const deleteButton = newLi.querySelector("button")
  const checkbox = newLi.querySelector(`#to-do-item-${todo.id}`)
  checkbox.addEventListener("click", e => {
    const done = e.target.checked
    updateTodo(todo.id, newLi, done)
  })

  deleteButton.addEventListener("click", e => {
    deleteTodo(todo.id, newLi)
  })

  // append to the todo list
  todoList.append(newLi)
}

function renderAllTodos(todoArray) {
  todoArray.forEach(todo => {
    renderOneTodo(todo)
  })
}