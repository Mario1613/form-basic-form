import React from 'react'
import Title from './component/Title';
import { TodoList } from './component/TodoList';
import {TodoProvider} from './context/TodoProvider';

export const Todo = () => {


  return (
    <TodoProvider>
    <Title/>
   <TodoList/>
    </TodoProvider>
  )
}

