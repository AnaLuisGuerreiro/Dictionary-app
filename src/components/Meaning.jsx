import React from "react";

import Synonyms from "./Synonyms";

export default function Meaning(props) {
  function capsLetter(definition) {
    return definition.charAt(0).toUpperCase() + definition.slice(1);
  }

  return (
    <div className="Meaning">
      <div className="shadow p-3 mb-5 bg-body-tertiary rounded mt-3 border">
        <h3>{props.meaning.partOfSpeech}</h3>
        <h4>Definition:</h4>
        <p>{capsLetter(props.meaning.definition)}.</p>

        {/* Display examples if exist info */}
        {props.meaning.example && (
          <div>
            <h4>Example:</h4>
            <em>" {capsLetter(props.meaning.example)}."</em>
          </div>
        )}
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
