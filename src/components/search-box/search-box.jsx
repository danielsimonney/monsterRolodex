import React, {Component} from "react";
import './search-box.css'

export const SearchBox= ({ placeholder,handleChange,filter,value}) => {
    return(       
    <input className='search' 
    type="search"
    value={value}
    id={filter} 
    placeholder={placeholder}
    onChange={handleChange}/>
)
}