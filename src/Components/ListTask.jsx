import { FaTrashAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { AiFillEdit } from "react-icons/ai";
import StatusTask from "./StatusTask";
import Swal from "sweetalert2";

export default function ListTask({todos, setTodos, setTasks, setUpdate}) {

  const toggleChecked = (id) => {
    const checked = todos.map((todo) => todo.id === id ? {...todo, checked: !todo.checked} : todo)
    setTodos(checked)
  }

  const editTodo = (id) => {
    const edited = todos.find((todo) => todo.id === id )
    if(edited) {
      setTasks(edited.tasks)
      setUpdate(id)
    }   
  }


  const deleteTodo = (id) => {
    const deleted = todos.filter((todo) => todo.id !== id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your tasks has been deleted.",
          icon: "success"
        });
        setTodos(deleted)
      }
    });
  }

  return (
    <div>
        <div className="list-task">
              <StatusTask todos={todos} setTodos={setTodos} />
            <div className="wrapper">
             {todos.length < 1 ?  <p>No have task👽</p> : ""}
             <div className="overflow-screen">
            {todos.map((todo) => (
              <div key={todo.id} className="action">
              <li className="group">
              <div className="left">
              <input type="checkbox" 
              checked={todo.checked}
              onChange={() => toggleChecked(todo.id)}
              /> 
              <span style={todo.checked ? {textDecoration : 'line-through'} : {}}>{todo.tasks}</span> 
              </div>
              <div className="right"> 
               {todo.checked ? <FaCheck /> :  <FaXmark style={{color: 'rgb(235, 38, 38', width: '23px', height: '23px'}} /> }
              <AiFillEdit onClick={() => editTodo(todo.id)} />
              <FaTrashAlt onClick={() => deleteTodo(todo.id)} />
              </div>
              </li>
              </div>
            ))}
           </div>
            </div>
        </div>
    </div>
  )
}
