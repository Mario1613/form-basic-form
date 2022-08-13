import { useTodos } from "../hooks/useTodos";
import {Todo} from "../interface/interfaces";

interface TodoItemProps {
    todo:Todo
}


const TodoItem = ({todo}:TodoItemProps) => {
    // const {toggleTodo} = useContext(TodoContext);

  const {toggleTodo} = useTodos()
  


    console.log(todo)
  return (
    <li 
    style={{
      cursor:'pointer',
      textDecoration: todo.completed? 'line-through':''
    }} 
    onClick={()=>toggleTodo(todo.id)}

    
    >{todo.desc}</li>
  )
}

export default TodoItem