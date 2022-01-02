import React, {useState, createContext, useEffect} from 'react'
import {useHistory} from 'react-router-dom';

import Key from '../keys.js'

export const appContext = createContext();

export const Provider = (props) => {

  const [search, setSearch] = useState('cats');
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [test, setTest] = ('');
  const [saved, setSaved] = useState([]);
  const [location, setLocation] = useState('/');
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchData = async() => {
      let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${Key}&q=${search}&limit=24&offset=0&rating=g&lang=en`)
      let data = await response.json()
      console.log(data)

      if (data.data.length) {
        await setGifs(data.data);
        await setLoading(false);
      } else {
        setGifs([])
        await setLoading(true);
      }

    }
    fetchData(search)
  }, [search])

  const updateSearch = (value) => {
    setSearch(value)
  }

  return (
    <appContext.Provider value={{
      data: {gifs, search, loading, saved, location, currentUser},
      actions: {updateSearch, setTest, setSaved, setLocation, setCurrentUser},
    }}>
      {props.children}
    </appContext.Provider>
  )

}
