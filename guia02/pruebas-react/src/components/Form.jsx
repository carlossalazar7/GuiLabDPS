import React, {useState} from 'react';
import Todo from './Todo';

const Form = () => {
    const [todo, setTodo] =useState()
    const [todos, setTodos] = useState([
        {todo:'todo 1'},
        {todo:'todo 2'},
        {todo:'todo 3'},
    ]);

    const handleChange =  e => setTodo({[e.target.name]: e.target.value})
    const handleClick = e =>  {
        if(Object.keys(todo).length === 0 || todo.todo.trim()=== ''){
            alert('el campo no puede estar vacio')
        }
        setTodos([...todos,todo])
    }
    return (
        <>
        <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="">Agregar tarea</label>
            <input type="text" name="todo" onChange={handleChange}/>
            <button onClick={handleClick}>Agregar</button>
        </form>
            {
                todos.map((value, index)  => (<Todo todo={value.todo} />))
            }
        </>
    )
}
export default Form;