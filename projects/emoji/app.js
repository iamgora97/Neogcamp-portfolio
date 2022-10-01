import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Happy",
  "😔": "Sad",
  "😑": "annoyance",
  "🔥": "Fire",
  "😂": "Face with Tears of Joy",
  "🤣": "Rolling on the Floor Laughing",
  "😭": "Crying",
  "🫶": "Heart Hands",
  "✨": "Sparkles",
  "🥺": "Pleading Face",
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, SetMeaning] = useState("");

  //input type 1
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    //if above line fails then meaning is undefined
    if (meaning === undefined) {
      meaning = "We don't know try one from below";
    }
    SetMeaning(meaning);
  }

  //input type 2
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    SetMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>

      <input onChange={emojiInputHandler} />

      <h2>{meaning}</h2>

      <h3>Emoji's in our database</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "1.4rem", cursor: "pointer" }}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}


