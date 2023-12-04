
import { useEffect, useState } from "react";
import Container from "./Components/Container"


function App() {

const [todos, setTodos] = useState([])
const [update, setUpdate] = useState(null)

useEffect(() => {
  const stored = JSON.parse(localStorage.getItem('todos'))
  setTodos(stored)
}, [])

useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos))
}, [todos])


    
  return (
  
    <section>
    <Container todos={todos} setTodos={setTodos} update={update} setUpdate={setUpdate}  />
    </section> 
  )
}

export default App
