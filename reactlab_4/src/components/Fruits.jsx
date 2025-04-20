import React from "react";
import style from "./fruits.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll, selectAll, toggleFruits } from "../store/features/fruitsSlice";
import  classNames  from 'classnames';


const Fruits = () => {
    const allFruits=useSelector((state)=>state.fruits.fruits);
    const selectedFruits=useSelector((state)=>state.fruits.selectedFruits)
    const dispatch=useDispatch();
    function handleStyle(item){
        const isExist=selectedFruits.find(fruit=>fruit===item);
        if(isExist){
            return style.fruits_mainBtns_itemActive
        }else{
            return style.fruits_mainBtns_item
        }
    }
  return <div className={style.fruits}>
    <h2 className={style.fruits_title}>Meyvə Kartları</h2>
    <div className={style.fruits_changeBtns}>
        <button onClick={()=>dispatch(selectAll())} className={style.fruits_changeBtns_item}>Select All</button>
        <button onClick={()=>dispatch(deleteAll())} className={style.fruits_changeBtns_item}>Delete All</button>
    </div>
    <div className={style.fruits_mainBtns}>
        {allFruits.map(item=>(  
            <button onClick={()=>dispatch(toggleFruits(item))} className={classNames(handleStyle(item))} key={item.id}>{item.name}</button>
        ))}
    </div>
  </div>;
};

export default Fruits;
