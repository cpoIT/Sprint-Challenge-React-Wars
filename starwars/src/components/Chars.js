import React from "react";

// const message = 'Hello!';

const Chars = props => {

  return (
      <div className='card'>
      <h1 className='name'>{props.swChar.name}</h1>
      <p>DOB: {props.swChar.birth_year}</p>
      <p>Height: {props.swChar.height}</p>
      <p>Eye Color: {props.swChar.eye_color}</p>
      </div>
  )
}
export default Chars; 
