import React from "react";
import style from "./fruits.module.scss";
import { useSelector } from "react-redux";

const SelectFruits = () => {
  const selectData = useSelector((state) => state.fruits.selectedFruits);
  const selectFruits = useSelector((state) => state.fruits.selectedFruits);
  return (
    <div className={style.fruits}>
      <h2 className={style.fruits_title}>Seçilmiş Meyvələr</h2>
      <span className={style.fruits_message}>
        {selectData.length === 0
          ? "Səbət boşdur"
          : `${selectData.length} meyvə seçildi`}
      </span>
      <div className={style.fruits_mainBtns}>
        {selectFruits.map((item) => (
          <div className={style.fruits_mainBtns_item} key={item.id}>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectFruits;
