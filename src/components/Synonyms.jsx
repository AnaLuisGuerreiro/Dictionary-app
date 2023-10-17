import React from "react";

import "../styles/synonyms.css";

export default function Synonyms(props) {
  const hasShortSynonyms =
    props.synonyms && props.synonyms.some((synonym) => synonym.length < 10);

  function capsLetter(synonym) {
    return synonym.charAt(0).toUpperCase() + synonym.slice(1);
  }

  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <div className="d-flex flex-wrap mt-5">
          {hasShortSynonyms && <h4 className="">Synonyms: </h4>}
          {props.synonyms.map((synonym, index) => {
            // Check if synonym has less than 10 letters
            if (synonym.length < 10) {
              return (
                <ul key={index} className="mb-0">
                  {" "}
                  <li className="shadow-sm p-1 mb-5 rounded-pill">
                    {capsLetter(synonym)}
                  </li>{" "}
                </ul>
              );
            } else {
              return null; // Dont display synonyms longer than 10 letters
            }
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
