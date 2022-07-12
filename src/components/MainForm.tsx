import React, { useState } from "react";
import Key from "./Key";
import List from "./List";

const KeysName: Array<string[]> = [
  [
    "`",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "Backspace",
  ],
  ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "Enter"],
  ["CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "\\"],
  ["Alt", "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Shift"],
  ["Control", "Meta", "Alt", "Space", "Alt", "Control"],
];

const InputForm = () => {
  const [enteredText, setEnteredText] = useState<string>("");

  return (
    <div>
      <input
        onChange={(e) => {
          setEnteredText(e.target.value);
        }}
        value={enteredText}
        onKeyDown={(e) => {
          console.log(e.key);
        }}
      ></input>

      <button
        onClick={() => {
          setEnteredText("");
        }}
      ></button>

      <List
        items={KeysName[0]}
        renderItem={(keyName) => <Key value={keyName} />}
      />
    </div>
  );
};

export default InputForm;
