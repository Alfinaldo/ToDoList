import Swal from "sweetalert2";


export default function StatusTask({todos, setTodos}) {

    const checkFalse = todos.map((todo) => todo.checked)
    const checkF = checkFalse.filter((c) => c === false)

    const checkedTrue = todos.map((todo) => todo.checked)
    const checkT = checkedTrue.filter((c) => c === true)

    const clearAllTask = () => {
        if(todos.length > 0) {
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
              setTodos([])
            }
          });
     } 
}


  return (
    <div>
        <div className="status-task">
            <div className="menu">
                <div className="complete">
                    <div className="text">Complete</div>
                    <div className="num">{checkT.length}</div>

                </div>
                <div className="uncomplete">
                <div className="text">Uncomplete</div>
                    <div className="num">{checkF.length}</div>
                </div>
                <div onClick={clearAllTask} className="clear-all">
                <div className="text">ClearAll</div>
                </div>
            </div>
        </div>
    </div>
  )
}
