import React, { useState } from "react";
import style from "./todoList.module.scss";
import ToDoListitem from "./ToDoListitem";


const ToDoList = () => {
    const [todos,setTodos]=useState([]);
    const [todoValue,setTodoValue]=useState("");
    const addTodo=(e)=>{
        e.preventDefault();
        const newTodo={
            id:Date.now(),
            value:todoValue,
        };
        setTodos(prev=>[...prev,newTodo]);
        setTodoValue("")
    }

  return <div className={style.toDoList}>
    <form onSubmit={addTodo} className={style.toDoList_form} >
        <input onChange={(e)=>setTodoValue(e.target.value)} value={todoValue} className={style.toDoList_form_input} type="text" placeholder="add to list"/>
        <button type="submit" className={style.toDoList_form_btn}>Add</button>
    </form>
    <ToDoListitem todos={todos} setTodos={setTodos}/>

  </div>;
};

export default ToDoList;
