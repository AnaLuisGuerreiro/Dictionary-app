import React, { useState } from "react";
import axios from "axios";

import Results from "./Results";
import Images from "./Images";

import "../styles/dictionary.css";

export default function Dictionary(props) {
  const [word, setWord] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [images, setImages] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  // APIs RESQUEST
  function handleImagesApi() {
    // Documentation - https://unsplash.com/documentation
    const api_key_images = "75vc4Ifmeky3yEEAb_ox5nnN0_Wl2DVDenzDlm1D0-g";
    const api_url_images = `https://api.unsplash.com/search/photos/?client_id=${api_key_images}&query=${word}&per_page=8`;

    axios
      .get(api_url_images)
      .then((response) => {
        setImages(response.data.results);
      })
      .catch((error) => {
        setImages(null);
      });
  }

  function handleDictionaryApi() {
    // Documentation - https://www.shecodes.io/learn/apis/dictionary
    const key_api_dictionary = "37ao80323cfe0b171ed40af823227b0t";
    const api_url_dictionary = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${key_api_dictionary}`;

    axios
      .get(api_url_dictionary)
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
    handleDictionaryApi();
    handleImagesApi();
  }

  function handleUserWordChange(event) {
    setWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    handleDictionaryApi();
    handleImagesApi();
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
        <Images images={images} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
