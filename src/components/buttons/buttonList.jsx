/* eslint-disable react/prop-types */
import React from "react";
import { Button } from "./button.jsx";
import style from "./button.module.css";

export const ButtonList = ({ buttons, ...rest }) => {
  return (
    <div className={style.buttonList}>
      {buttons.map((i) => (
        <Button key={i.id} {...i} {...rest}></Button>
      ))}
    </div>
  );
};
