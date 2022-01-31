import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({handleSearch}) => {
  
  

  return (
    <form action='/' method='get' id='searchbar'>
      <input 
        type='text' 
        id='header-search'
        placeholder= 'Search...'
        name='s'
        onChange={handleSearch}
      />
    </form>
  )
};


export default SearchBar;
