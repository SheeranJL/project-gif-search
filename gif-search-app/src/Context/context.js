import React, {useState, createContext, useEffect, useRef} from 'react'
import {useHistory} from 'react-router-dom';
import {saveDataToFirebase} from '../firebase/firebase.js';

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
  const isFirstRender = useRef(true)

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

    if (currentUser) {
      console.log('triggered')
      saveDataToFirebase(currentUser.id, saved);
    }


    fetchData(search)
  }, [search, saved])


  const updateSearch = (value) => {
    setSearch(value)
  }


  return (
    <appContext.Provider value={{
      data: {gifs, search, loading, saved, location, currentUser, isFirstRender},
      actions: {updateSearch, setTest, setSaved, setLocation, setCurrentUser},
    }}>
      {props.children}
    </appContext.Provider>
  )

}
