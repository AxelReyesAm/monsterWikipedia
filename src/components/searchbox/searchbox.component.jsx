import React from "react";
import './searchbox.styles.css';

export const Searchbox = ({placeholder,handleChange}) => (
    <div>
        <input 
        className="search" 
        type='search' 
        placeholder={placeholder} 
        onChange={handleChange}/>
    </div>
);