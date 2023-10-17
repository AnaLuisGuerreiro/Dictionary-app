import React from "react";

import "../styles/synonyms.css";

export default function Synonyms(props) {
  function capsLetter(synonym) {
    return synonym.charAt(0).toUpperCase() + synonym.slice(1);
  }

  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <div className="d-flex flex-wrap mt-5">
          <h4 className="">Synonyms: </h4>
          {props.synonyms.map((synonym, index) => {
            return (
              <ul key={index} className="mb-0">
                {" "}
                <li className="shadow-sm p-1 mb-5 rounded-pill">
                  {capsLetter(synonym)}
                </li>{" "}
              </ul>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
