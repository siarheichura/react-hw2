import "./App.css";

import { Counter } from "./Counter";
import { Clock } from "./Clock";
import { Timer } from "./Timer";

import { useState } from "react";
import { EmojiList } from "./Emoji";
import { EmojiItem } from "./Emoji/EmojiItem";

import { Form } from "./Form";

import emojiList from "./Emoji/emojiDataBase.json";

function App() {
  return (
    <div className="App">
      {/* <h1>Task 1 Counter</h1>
      <div className="counterWrapper">
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>

      <h1>Task 2 Clock</h1>
      <Clock />

      <h1>Task 3 Timer</h1>
      <Timer /> */}

      <h1>Task 4 Emodji</h1>
      <EmojiList emojiesList={emojiList} />
    </div>
  );
}

export default App;
