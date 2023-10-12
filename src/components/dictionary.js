import React, { useState } from "react";

import "../styles/dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState("");

  function search(event) {
    event.preventDefault();
    alert(word);
  }

  function handleUserWordChange(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Type a word"
          autoFocus={true}
          onChange={handleUserWordChange}
        />
        <input type="submit" value="🔍" />
      </form>
    </div>
  );
}
