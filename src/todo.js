import React, { Component,useState } from 'react';


const App = () =>{
    const [todos,setTodo] = useState([])
    const [text,setText] =useState("")
    const newText = (event) => {
        setText(event.target.value)
        console.log(text)
    }
    return (
        <React.Fragment>
            <h1>TODOリスト</h1>
            <input type="text" onChange={newText}></input>
            <button　onClick={() => setTodo([...todos,text])}>追加</button>
            <ul>
                {todos.map((todo,index)=>(
                    <li key={index}>{todo.text}</li>
                ))}
            </ul>
        </React.Fragment>
    )
}


export default App;