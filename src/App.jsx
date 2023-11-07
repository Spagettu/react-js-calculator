import { useState, useEffect } from "react";
import "./App.css";
import { TextField } from "./components/textField/textField";
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
  const [number, setNumber] = useState(""); /* число, вводимое в данный момент*/

  useEffect(() => {
    document.addEventListener("keydown", click);
    return () => document.removeEventListener("keydown", click);
  });

  const click = (e) => {
    if (/[0-9]/.test(e.key)) {
      setNumber((prev) => prev + e.key);
    }
  };

  const decide = (e) => {
    /* обработка примера после нажатия на знак оператора или сброс */
    if (e == "C") {
      setNumber("");
      setCount(0);
      setAction("+");
      return;
    }

    setAction(e);

    if (number) {
      switch (action) {
        case "+":
          setCount(count + Number(number));
          break;
        case "-":
          setCount(count - Number(number));
          break;
        default:
          console.log("def");
      }
    }
    setNumber("");
  };

  const change = (e) => {
    setNumber((prev) => prev + e);
  };

  return (
    <div className="app">
      <div className="container">
        <TextField
          count={count}
          number={number}
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

//tested in Firefox
