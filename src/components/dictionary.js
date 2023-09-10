import React, { useState } from "react";
import book from "../img/book.png";

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
      <h1> Dictionary </h1>
      <img src={book} alt="book" width={200} />
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Type a word"
          autoFocus={true}
          onChange={handleUserWordChange}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
