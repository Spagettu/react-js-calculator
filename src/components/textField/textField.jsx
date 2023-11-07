/* eslint-disable react/prop-types */
import style from "./textField.module.css";

export const TextField = ({ count, number, equal, ...props }) => {
  return (
    <div className={style.textField}>
      <div className={equal ? style.equal : style.input} {...props}>
        {number ? number : count}
      </div>

      <div className={style.count}>{count}</div>
    </div>
  );
};
