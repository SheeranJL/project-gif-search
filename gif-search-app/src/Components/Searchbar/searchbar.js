import React, {useContext, useState} from 'react';
import './searchbar.scss';
import {appContext} from '../../Context/context.js';
import CustomButton from '../Buttons/buttons.js';

const SearchBar = () => {
  const {data:{search}, actions} = useContext(appContext);

  const handleChange = (e) => {
    actions.setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search)
  }


  return (
    <div className='search-bar-container'>
      <form onSubmit={handleSubmit}>
        <input className='input' onChange={handleChange} type='text' placeholder='Search..' value={search} />
        <CustomButton className='search-button' type='submit'>Search!</CustomButton>
      </form>
    </div>
  )
}

export default SearchBar;
