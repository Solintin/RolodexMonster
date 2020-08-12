import React from 'react';
import './SearchBoxStyle.css'

export const SearchBox = (props) =>{
    return (
        <div > <input className='search'
        type='search' placeholder="Search  For Monsters" onChange={props.handleChange}
        />

        </div>
   
    ) 
}