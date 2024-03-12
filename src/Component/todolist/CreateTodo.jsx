import React, { useState } from 'react'

function CreateTodo() {
    const [value, setValue] = React.useState('')
    const [todo, setTodo] = useState([])

    const [editIndex, setEditIndex] = useState(null)
    let x = 10;

    // const y = x- 1;
    // console.log(`x:${x--}, y`);
    console.log(++x);

    const handleAddTodo = (e) => {
        e.preventDefault();

        if (editIndex) {
            setTodo((pre) => {
                let newTodo = [...pre];
                newTodo[editIndex] = value
                console.log(newTodo, 'newTodo');
                return newTodo;
            })
        }
        else {
            setTodo((prevTodo) => {
                return [...prevTodo, value];
            })
        }
        setEditIndex(null)
        setValue("");

    };
    console.log(todo, 'todo//');

    const editTodo = (index) => {

        setEditIndex(index);
        setValue(todo[index]);
    }

    console.log(editIndex, 'index');
    const deleteTodo = (index) => {
        console.log(index);
        const delIndex = todo.filter((item, i) => i !== index)
        console.log(delIndex, 'delIndex');
        setTodo(delIndex)



    }

    return (
        <div>

            <input type="text" placeholder='create to do  list' onChange={(e) => setValue(e.target.value)} value={value} />

            <button onClick={handleAddTodo}>  {editIndex !== null ? "Save" : "Add"}</button>
           <ul>
                {todo.map((items, index) => {
                    return (

                        <li key={index}>
                            <span>{items}</span>

                            <button onClick={() => editTodo(index)}> edit</button>
                            <button onClick={() => deleteTodo(index)}> delete</button>

                        </li>

                    )
                })}
            </ul>
        </div>
    )
}

export default CreateTodo
