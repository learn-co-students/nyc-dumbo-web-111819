import React from 'react'
import ToDoCard from './ToDoCard'

const CompletedContainer = (props) => {
    // console.log(props.todos)
    return (
        <div>
            <h1>Completed Todos</h1>
            {
                props.todos.map(todo => <ToDoCard handleRemoveTodo={props.handleRemoveTodo} handleCompleteChange={props.handleCompleteChange} key={todo.id} todo={todo}/>)
            }
            {/* Render ToDo Card for each ToDo */}
             {/* Which Array method can you use? */}
        </div>
    )
}

export default CompletedContainer