import React, {useState, useContext} from 'react';
import {appContext} from '../../Context/context.js';
import './search-bar.scss';

const SearchBar = () => {

  const [query, setQuery] = useState('');
  const {data, actions} = useContext(appContext);

  const handleChange = (e) => {
    setQuery(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.updateSearch(query);
    setQuery('');
  }

  return (
    <div className='search-bar'>
      <form onSubmit={handleSubmit}>
        <input className='input-field' onChange={handleChange} type='text' placeholder='Search..' value={query} />
      </form>
    </div>
  )
}

export default SearchBar;
