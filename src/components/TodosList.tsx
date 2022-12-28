import React from 'react';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import './styles.css';

type props = {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodosList: React.FC<props> = ({ todos, setTodos }: props) => {
    return (
        <div className="todos">
            {todos.map((todo) => (<SingleTodo item={todo} key={todo.id} setTodos={setTodos} />))}
        </div>
    )
}

export default TodosList
