import React from "react";
import ToDoList from "../../components/ToDoList/ToDoList";
import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
  return <div style={{marginTop:"20px"}}>
    <NavLink to="todolist">Employee List</NavLink>
    <Outlet/>
  </div>;
}; 

export default Home;
