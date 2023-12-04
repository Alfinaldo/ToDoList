import { useState } from "react"
import ListTask from "./ListTask"
import { v4 as uuidv4 } from "uuid"
import { useToast } from '@chakra-ui/react'


export default function Container({todos, setTodos, update, setUpdate}) {
  const toast = useToast()
  console.log(todos)
  const [tasks, setTasks] = useState('')

  const addTodo = () => {
    if(!tasks) return
    if(update) {
      const updateItem = todos.map((todo) => todo.id === update ? {...todo, tasks} : todo)
      setTodos(updateItem)
      setUpdate(null)
      setTasks('')
    } else {
      const newTodo = {id : uuidv4(), tasks, checked: false}
      setTodos([...todos, newTodo])
      setTasks('')
      toast ({
       description: "Task created.",
       status: 'success',
       duration: 2000,
       position: 'top',
       isClosable: true,
     })
    }
  }

  return (
    <div>
        <div className="container">
          <div className="wrapperr">
            <h1>📝ToDoList <span>App</span></h1>
            <div className="input-group">
              <input type="text"
              placeholder="what will you do today ?"
              value={tasks}
              onChange={(e) => setTasks(e.target.value)}
              />
              <button onClick={addTodo}>{update ? 'Update' : 'Add'}</button>
            </div>
            <ListTask todos={todos} setTodos={setTodos} tasks={tasks} setTasks={setTasks} setUpdate={setUpdate} />
          </div>
        </div>
    </div>
  )
}
