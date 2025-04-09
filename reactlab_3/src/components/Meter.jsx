import React, { useState } from "react";
import styles from './styleComp.module.scss';
import classNames from "classnames";
import Buttons from "./Buttons";

const Meter = () => {
    const [count,setCount]=useState(0);
    const [isActive,setIsActive]=useState(false);

    const changeCountStyle=()=>{
        if(count>0){
            return styles.more_zero
        }
        if(count<0){
            return styles.less_zero
        }else{
           return styles.default_zero
        }

    }
  return <div>

<span className={classNames(changeCountStyle())}>{count}</span>
<Buttons setCount={setCount} isActive={isActive} setIsActive={setIsActive} count={count}/>

  </div>;
};

export default Meter;
