/* eslint-disable react/prop-types */
import React from "react";
import style from "./button.module.css";

export const Button = ({ action, decide, ...rest }) => {
  return (
    <button className={style.button} onClick={() => decide(action)}>
      <h1> {action}</h1>
    </button>
  );
};
