
import { useTodos } from '../hooks/useTodos'

const Title = () => {
    const {pendingTodos} = useTodos();
  return <h1>Todo: {pendingTodos}</h1> 
}

export default Title