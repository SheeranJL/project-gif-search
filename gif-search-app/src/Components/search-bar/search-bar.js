import React, {useState, useContext, useEffect} from 'react';
import {appContext} from '../../Context/context.js';
import './search-bar.scss';

const SearchBar = () => {

  const [query, setQuery] = useState('');
  const {data, actions} = useContext(appContext);

  //list of nouns to periodically display in the searchbar as a placeholder.
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

  //selecting a random word from the array above
  const [word, setWord] = useState(nouns[Math.floor(Math.random() * (nouns.length - 1) + 1)])

  //on page load, call the randomPlaceholder function which will select a new random word every three seconds
  useEffect(() => {
    randomPlaceholder();
  }, [])

  const randomPlaceholder = () => {
    setInterval(() => {
      let randomNumber = Math.floor(Math.random() * (nouns.length - 1) + 1);
      setWord(nouns[randomNumber])
    }, 3000)
  }

  //On field input change this function will populate the local state above with the respective field values//
  const handleChange = (e) => {
    setQuery(e.target.value)
  };

  //When the user submits a word in the search bar, this function will run and pass the string valye to the updateSearch fuction in our context which will repopulate the page with new corresponsing images from the gif api.
  const handleSubmit = (e) => {
    e.preventDefault();
    actions.updateSearch(query);
    setQuery('');
  }

  return (
    <div className='search-bar'>
      <form onSubmit={handleSubmit}>
        <div className='input-field-container'>
          <input className='input-field' onChange={handleChange} type='text' placeholder={`Search for ${word}`} value={query} />
        </div>
      </form>
    </div>
  )
}

export default SearchBar;
