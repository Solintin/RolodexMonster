import React from 'react';
import './Card.css';

export const Card = (props) => {
    return(
    <div className='card-container'>
        <img src= {`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}  alt="Monster"/>
        <h2 > 
            {props.monster.name} 
        </h2>
        {props.monster.email}
    </div>
)}