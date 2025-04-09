import React, { useEffect, useState } from "react";
import styles from './styleComp.module.scss';
import classNames from "classnames";

const Buttons = ({setCount,setIsActive,isActive,count}) => {

    let autoCount;
    isActive?autoCount="Stop":autoCount="Start"
   
    useEffect(()=>{
        let timer;
        if(isActive){
            timer= setInterval(()=>{
                setCount(prev=>prev+1)
            },1000)
        }
        return ()=>clearInterval(timer)
    },[isActive])


  return <div>

    <button className={styles.decreaseBtn} onClick={()=>setCount(prev=>prev-1)}>-1</button>
    <button className={styles.resetBtn} onClick={()=>setCount(prev=>prev=0)}>Reset</button>
    <button className={styles.increaseBtn} onClick={()=>setCount(prev=>prev+1)}>+1</button>
    <button className={classNames(isActive?styles.autoCountActive:styles.autoCountNonActive)} onClick={()=>setIsActive(prev=>!prev)}>{autoCount} Auto-Count</button>
  </div>;
};

export default Buttons;
