/* eslint-disable react/prop-types */
import React from "react";
import style from "./number.module.css";

export const NumbersList = ({ numbers, change, ...rest }) => {
  return (
    <div className={style.numberList}>
      {numbers.map((i) => (
        <button className={style.number} key={i} onClick={() => change(i)}>
          {i}
        </button>
      ))}
    </div>
  );
};
