import React, { useState } from "react";
import axios from "axios";

import Results from "./Results";

import "../styles/dictionary.css";

export default function Dictionary(props) {
  const [word, setWord] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  // API RESQUEST
  function search() {
    // Documentation - https://www.shecodes.io/learn/apis/dictionary
    const key_api = "37ao80323cfe0b171ed40af823227b0t";
    const api_url = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${key_api}`;

    axios
      .get(api_url)
      .then((response) => {
        if (response.data.word) {
          setResults(response.data);
          setError(null);
        } else {
          setError("Ups! English only or word not found...");
          setResults(null);
        }
      })
      .catch((error) => {
        setError("Error finding the word!");
        setResults(null);
      });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleUserWordChange(event) {
    setWord(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit} className="mb-5">
          <input
            type="search"
            placeholder="Type a word"
            autoFocus={true}
            onChange={handleUserWordChange}
            className="rounded-pill "
          />
          <input type="submit" value="🔍" className="rounded search" />
        </form>
        {error ? <div className="error-message">{error}</div> : null}
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
