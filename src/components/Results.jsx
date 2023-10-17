import React from "react";
import books from "../img/books.png";

import Meaning from "./Meaning";

import "../styles/results.css";

export default function Results(props) {
  function capsLetter(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  if (props.results) {
    return (
      <div className="Results">
        <div className="info-word rounded p-2 row">
          <div className="col-10">
            <h2>{capsLetter(props.results.word)}</h2>
            <p>/ {props.results.phonetic} /</p>
          </div>
          <div className="col-2 text-center">
            <img src={books} alt="books" width={100} />
          </div>
        </div>
        <div>
          {props.results.meanings.map((meaning, index) => {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
