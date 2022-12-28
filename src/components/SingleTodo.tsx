import React, { FormEvent, useState, useEffect, useRef } from 'react';
import { Todo } from '../model';
import './styles.css';
import { AiFillEdit, AiTwotoneDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';


type props = {
    item: Todo;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<props> = ({ item, setTodos }: props) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(item.todo)


    const handleDone = (id: number) => {
        setTodos(prevState => (prevState.map(item => item.id === id ? { ...item, isDone: !item.isDone } : item)))
    }
    const handleDelete = (id: number) => {
        setTodos(prevState => (prevState.filter(item => item.id !== id)))
        console.log(id, item)
    }

    const handleSubmit = (e: FormEvent, id: number) => {
        e.preventDefault();
        setTodos(prevState => (prevState.map(item => item.id === id ? { ...item, todo: editTodo } : item)))
        setEdit(false)

    }

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [edit])
    return (
        <form className="todos__single" onSubmit={e => handleSubmit(e, item.id)}>
            {
                edit ? <input ref={inputRef} type="text" className="todos__single-text" value={editTodo} onChange={(e) => setEditTodo(e.target.value)} /> : item.isDone ? <s className="todos__single-text">{item.todo}</s> : <span className="todos__single-text">{item.todo}</span>
            }



            <div>
                <span className="icon" onClick={() => {
                    if (!edit && !item.isDone) {
                        setEdit(!edit)
                    } else {

                    }
                }}><AiFillEdit /></span>
                <span className="icon" onClick={() => handleDelete(item.id)}><AiTwotoneDelete /></span>
                <span className="icon" onClick={() => handleDone(item.id)}><MdDone /></span>
            </div>

        </form>
    )
}

export default SingleTodo
