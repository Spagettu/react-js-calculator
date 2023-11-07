/* eslint-disable react/prop-types */
import style from "./textField.module.css";

export const TextField = ({ count, change, str, equal, ...props }) => {
  return (
    <div className={style.textField}>
      <input
        value={str ? str : count}
        className={equal ? style.equal : style.input}
        type="text"
        {...props}
        onChange={() => change()}
      />

      <div className={style.count}>{count}</div>
    </div>
  );
};
