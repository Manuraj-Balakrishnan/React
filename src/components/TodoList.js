import { useState, useEffect } from "react";

let nextId = 0;
export const TodoList = () =>{
    //input box
    //add add button
    //print the added list
    //add delete button

    const [inputValue, setInputValue] = useState("");
    const [todoValue, setTodoValue]  = useState([]);
    
    return (
        <div className="todo-container">
            <div className="search-container">
                <input type="text" placeholder="Enter the list" value={inputValue} onChange={(e)=>{
                    setInputValue(e.target.value);
                }} />
                <button className="search-btn" onClick={()=>{
                    setTodoValue([...todoValue,{ id: nextId++, todo: inputValue }]);
                    console.log(todoValue);
                }}>Add</button>
            </div>

            <ul>
                {todoValue.map((value)=>
                 <li key={value.id + value.todo} className="todo-list">
                    {value.todo}
                    <button className="search-btn"  onClick={()=>{
                        let result = todoValue.filter((val)=> val.id != value.id);
                        console.log(result);
                        setTodoValue(result);
                    }}>Delete</button>
                 </li>
                )}
            </ul>
        </div>
    )
}