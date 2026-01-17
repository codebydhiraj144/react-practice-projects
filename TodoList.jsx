import { useState } from "react"

export default function TodoList(){

    // state to store all todo items
    let [todos, setTodos] = useState(["sample task"])

    // state to store current input value
    let [newTodo, setNewTodo] = useState("")

    // function to add new task to todo list
    let addNewTask = () => {
        if(newTodo.trim() === "") return; // stop if input is empty
        setTodos([...todos, newTodo])     // add new task to existing todos
        setNewTodo("")                    // clear input box
    }

    // function to update input value while typing
    let updateTodoValue = (event) => {
        setNewTodo(event.target.value)    // store input value in state
    }

    // function to delete a todo item
    let deleteTodo = (index) => {
        // remove the todo whose index matches
        let newTodos = todos.filter((_, i) => i !== index)
        setTodos(newTodos)                // update todo list
    }

    return(
        <div>

            {/* input box to type new task */}
            <input 
                placeholder="add a task"
                value={newTodo}
                onChange={updateTodoValue}
            />

            {/* button to add new task */}
            <button onClick={addNewTask}>Add task</button>

            <hr />

            {/* heading */}
            <h4>Todo List</h4>

            <ul>
                {
                    // loop through todos array
                    todos.map((todo, index) => (
                        <li key={index}>
                            {todo}

                            {/* button to delete specific task */}
                            <button
                                onClick={() => deleteTodo(index)}
                                style={{ marginLeft: "10px" }}
                            >
                                ❌
                            </button>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}
