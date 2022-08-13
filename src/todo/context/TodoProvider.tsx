import React, { useReducer } from 'react'
import { TodoState } from '../interface/interfaces';
import { TodoContext } from './TodoContext';
import { todoReducer } from './todoReducer';


const INITIAL_STATE:TodoState = {
  todoCount:2,
  todos:[
    {
      id:"1",
      desc:"Recoletar las piedras del infinito",
      completed:false,

    },
    {
      id:"2",
      desc:"Recoletar las piedras del alma",
      completed:false,

    }
  ],
  completed:0,
  pending:2
}
interface Props {
    children: JSX.Element | JSX.Element[]
}


export const TodoProvider = ({children}:Props) => {

  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);



  const toggleTodo = (id:string)=>{
    dispatch({type:'toggleTodo', payload:{id}})
  }



  return (
    <TodoContext.Provider value={{todoState, toggleTodo}}>
        {children}
    </TodoContext.Provider>
  )
}

