import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <form action='/' method='get' id='searchbar'>
      
      <input 
        type='text' 
        id='header-search'
        placeholder='Search...'
        name='s'
      />
      <button type="submit"><FaSearch style={{verticalAlign: 'middle'}}/></button>
    </form>
  )
};


export default SearchBar;
