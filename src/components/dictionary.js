import React from "react";

export default function Dictionary() {
  return (
    <div className="Dictionary">
      <form>
        <input type="text" placeholder="Type a word" />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
