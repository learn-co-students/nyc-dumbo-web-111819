import React from 'react'

const ToDoCard = (props) => {
  // console.log(props.todo)
    // const showButton = () => {
    //   if()
    // }

    const handleCompleteClick = () => {
      props.handleCompleteChange(props.todo)
    }

    const handleDeleteClick = () => {
     props.handleRemoveTodo(props.todo)
    }
    return (
    <div className="ui card">
        <div className="content">
          <div className="header">{props.todo.title}</div>
          {/* The button will require some conditional rendering. 
            If the button is under the Incomplete Container, button should be blue and text should say Complete
            If the button is under Complete Container, button should be orange and text should say Incomplete 
            */}
          <button onClick={handleCompleteClick} className={`ui button ${props.todo.completed ? "orange" : "blue"}`}>{props.todo.completed ? "Incomplete" : "Completed"}</button>
          <button onClick={handleDeleteClick} className="ui button red">Delete</button>
        </div>
        
    </div>
    )
}

export default ToDoCard