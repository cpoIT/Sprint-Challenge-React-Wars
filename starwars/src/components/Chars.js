import React from "react";

// const message = 'Hello!';

const Chars = props => (
    <div class="charsProfile">
      <h1>{props.starwarsChars.name}</h1>
      <ul>
        <li>DOB: {props.starwarsChars.birth_year}</li>
        <li>Eye Color: {props.starwarsChars.eye_color}</li>
        <li>Height{props.starwarsChars.height}</li>
      </ul>
    </div>
);

export default Chars;
