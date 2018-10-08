import React from 'react';
import './StarWars.css';
import Chars from './Chars';

 const CharList = props => {
    return (
        <div className='charlist'>
            {props.char.map((char, i) => 
                <Chars key={i} char={char} />
            )}
    
        </div>
    )
}
 export default CharList; 