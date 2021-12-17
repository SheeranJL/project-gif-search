import React, {useContext, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './searchbar.scss';
import {appContext} from '../../Context/context.js';
import CustomButton from '../Buttons/buttons.js';

const SearchBar = () => {

  const {data:{search, location, saved}, actions} = useContext(appContext);
  const [query, setQuery] = useState('');
  let history = useHistory();
  console.log(history)

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.updateSearch(query);
    setQuery('');
  }

  const changeLocation = () => {

    if (location === '/') {
      actions.setLocation('/saved');
      history.push('/saved');
    } else {
      actions.setLocation('/');
      history.push('/');
    };
  };



  return (
    <div className='nav-bar-container'>

      <div onClick={() => history.push('/')} className='title'>
        <span>Gif Search App</span>
      </div>

      {
        location === '/'
        ?
        <div className='search-bar'>
          <form onSubmit={handleSubmit}>
            <input className='input' onChange={handleChange} type='text' placeholder='Search..' value={query} />
            <CustomButton className='search-button' type='submit'>&#128270;</CustomButton>
          </form>
        </div>
        : null
      }

      <div className='saved-button'>
      {
        location === '/'
        ? <span onClick={changeLocation}>Saved ({saved.length})</span>
        : <span onClick={changeLocation}>Home</span>
      }
      </div>


    </div>
  )
}

export default SearchBar;
