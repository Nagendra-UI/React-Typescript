import React, { useRef } from 'react'
import { Todo } from '../model';
import './styles.css';

type props = {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (event: React.FormEvent) => void
}

const InputField: React.FC<props> = ({ todo, setTodo, handleAdd }: props) => {
    console.log(todo)
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <form className='input' onSubmit={(e) => {
            handleAdd(e);
            inputRef.current?.blur();

        }}>
            <input className='input__box' type="input" placeholder='Enter a task' ref={inputRef} value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button className='input_submit' type="submit">Go</button>
        </form>
    )
}

export default InputField
