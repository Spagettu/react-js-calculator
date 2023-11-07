import { useState } from "react";
import "./App.css";
import { TextField } from "./components/textField/textFiled";
import { ButtonList } from "./components/buttons/buttonList";
import { NumbersList } from "./components/numbersList/numbersList";

const buttons = [
  { id: 1, action: "+" },
  { id: 2, action: "=" },
  { id: 3, action: "-" },
  { id: 4, action: "C" },
];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export function App() {
  const [count, setCount] = useState(0); /* первое число для подсчета*/
  const [action, setAction] = useState("+"); /* знак действия / оператор*/
  const [str, setStr] = useState(""); /* число, вводимое в данный момент*/

  const decide = (e) => {
    /* обработка примера после нажатия на знак оператора или сброс */
    if (e == "C") {
      setStr("");
      setCount(0);
      setAction("+");
      return;
    }

    setAction(e);

    if (str) {
      switch (action) {
        case "+":
          setCount(count + Number(str));
          break;
        case "-":
          setCount(count - Number(str));
          break;
        default:
          console.log("def");
      }
    }
    setStr("");
  };

  const change = (e) => {
    /* запись вводимого числа*/

    setStr(str + e);
  };

  return (
    <div className="app">
      <div className="container">
        <TextField
          name="textField"
          className="textField"
          change={change}
          count={count}
          str={str}
          equal={action === "=" ? true : false}
        ></TextField>
        <NumbersList
          numbers={numbers}
          change={change}
          count={count}
        ></NumbersList>
        <ButtonList buttons={buttons} decide={decide}></ButtonList>
      </div>
    </div>
  );
}
