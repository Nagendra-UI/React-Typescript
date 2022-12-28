import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputFeild from './components/InputField';
import { Todo } from './model';
import TodosList from './components/TodosList';


function App() {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
      setTodo("")
    }
  }

  console.log(todos)

  return (
    <div className="App">
      <span className="App-header">
        TASKIFY
      </span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodosList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
