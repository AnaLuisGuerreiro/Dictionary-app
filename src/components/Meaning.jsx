import React from "react";

import Synonyms from "./Synonyms";

export default function Meaning(props) {
  let definition = props.meaning.definition;
  return (
    <div className="Meaning">
      <br />
      <h3>{props.meaning.partOfSpeech}</h3>
      <strong>Definition:</strong>
      <p>"{definition[0].toUpperCase() + definition.slice(1)}"</p>

      {/* Display examples if exist info */}
      {props.meaning.example && (
        <div>
          <strong>Example:</strong>
          <em>{props.meaning.example}</em>
        </div>
      )}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
