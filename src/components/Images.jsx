import React from "react";

import "../styles/images.css";

export default function Images(props) {
  console.log(props.images);
  if (props.images) {
    return (
      <div className="Images">
        <div className="row mt-5">
          {props.images.map((url, index) => {
            return (
              <ul key={index} className="col-3">
                <li>
                  <img
                    src={url.urls.regular}
                    alt="images"
                    className="img-fluid rounded"
                  />
                </li>
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
