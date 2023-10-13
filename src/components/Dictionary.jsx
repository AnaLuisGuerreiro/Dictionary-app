import React, { useState } from "react";
import axios from "axios";

import Results from "./Results";

import "../styles/dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  // API RESQUEST
  function search(event) {
    event.preventDefault();

    // Documentation - https://www.shecodes.io/learn/apis/dictionary
    const key_api = "37ao80323cfe0b171ed40af823227b0t";
    const api_url = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${key_api}`;

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
      <Results results={results} />
    </div>
  );
}
