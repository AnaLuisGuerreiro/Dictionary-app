import React, { useState } from "react";
import axios from "axios";

import "../styles/dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    const key_api = "37ao80323cfe0b171ed40af823227b0t";
    const api_url = `https:api.shecodes.io/dictionary/v1/define?word=${word}&key=${key_api}`;

    axios.get(api_url).then(handleResponse);
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
