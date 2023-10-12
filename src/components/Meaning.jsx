import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  let definition = props.meaning.definition;
  return (
    <div className="Meaning">
      <br />
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>"{definition[0].toUpperCase() + definition.slice(1)}"</p>
      <em>{props.meaning.example}</em>
    </div>
  );
}
