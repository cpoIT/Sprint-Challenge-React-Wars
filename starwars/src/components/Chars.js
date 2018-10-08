import React from "react";

// const message = 'Hello!';

const Chars = props => {

  return (
      <div className='card'>
      <p>DOB: {props.char.birth_year}</p>
      <p>Height: {props.char.height}</p>
      <p className='eyeColor'>Eye Color: {props.char.eye_color}</p>
      <p>Film Appearances: {props.char.films.length}</p>
      <h1 className='name'>{props.char.name}</h1>
      </div>
  )
}
export default Chars; 
