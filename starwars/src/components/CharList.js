import React from 'react';
import './StarWars.css';
import Chars from './Chars';

 const CharList = props => {
    return (
        <div className='charlist'>
            {props.chars.map(char => 
                <Chars swChar={char} />
            )}
    
        </div>
    )
}
 export default CharList; 