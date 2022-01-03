import React, {useState, useContext, useEffect} from 'react';
import {appContext} from '../../Context/context.js';
import './search-bar.scss';

const SearchBar = () => {

  const [query, setQuery] = useState('');
  const {data, actions} = useContext(appContext);

  let nouns = [
    'cats',
    'dogs',
    'trees',
    'pizza',
    'space',
    'computers',
    'crystals',
    'colors',
    'rainbow',
    'coffee',
    'food',
    'beaches',
    'funny',
    'weird',
    'funny',
    'famous',
    'interesting',
    'memes',
    'cute',
    'scary',
    'movies',
    'robots',
    'cars',
    'sports',
    'disco',
    'fractals',
    'pigs'
  ]

  const [word, setWord] = useState(nouns[Math.floor(Math.random() * (nouns.length - 1) + 1)])

  useEffect(() => {
    randomPlaceholder();
  }, [])

  const randomPlaceholder = () => {
    setInterval(() => {
      let randomNumber = Math.floor(Math.random() * (nouns.length - 1) + 1);
      setWord(nouns[randomNumber])
    }, 3000)
  }

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

        <input className='input-field' onChange={handleChange} type='text' placeholder={`Search for ${word}`} value={query} />
      </form>
    </div>
  )
}

export default SearchBar;
