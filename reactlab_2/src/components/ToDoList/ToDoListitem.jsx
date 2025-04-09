import React from "react";
import style from "./todoList.module.scss";
import { MdDeleteOutline } from "react-icons/md";

const ToDoListitem = ({ todos,setTodos }) => {
  function handleDelete (id){
    todos = todos.filter((item) => item.id !== id);
    setTodos(todos);
  };

  return ( 
    <div className={style.ToDoListitem}>
      <ul className={style.ToDoListitem_ul}>
        {todos.map((list) => (
          <li key={list.id} className={style.ToDoListitem_ul_item}>
            <p>{list.value}</p>
            <button onClick={()=>handleDelete(list.id)}>
              <MdDeleteOutline />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoListitem;
