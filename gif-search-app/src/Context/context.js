import React, {useState, createContext, useEffect, useRef} from 'react'
import {useHistory} from 'react-router-dom';
import {saveDataToFirebase} from '../firebase/firebase.js';

import Key from '../keys.js'

export const appContext = createContext();

export const Provider = (props) => {

  //App context state variables//
  const [search, setSearch] = useState('cats');
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [test, setTest] = ('');
  const [saved, setSaved] = useState([]);
  const [location, setLocation] = useState('/');
  const [currentUser, setCurrentUser] = useState(null);
  const [isFirstRender, setIsFirstRender] = useState(true);

  //On initial loading, we obtain a list of gifs from our giphy api, firstly with the initial value of 'cats' and populate our 'gifs' state variable with the returned response/
  useEffect(() => {

    const fetchData = async() => {
      let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${Key}&q=${search}&limit=24&offset=0&rating=g&lang=en`)
      let data = await response.json()
      console.log(data)

      if (data.data.length) {
        await setGifs(data.data);
        await setLoading(false);
        setIsFirstRender(false);
      } else {
        setGifs([])
        await setLoading(true);

      }
    }
    if (currentUser) {
      //If there is a current user logged in, any gifs a user saves will be pushed to firebase againt their account.
      saveDataToFirebase(currentUser.id, saved);
    }
    fetchData(search)
  }, [search, saved])


  //This function will remove a saved item from the users saved gifs. It will filter through the list of gifs and purge that which are deleted.
  const removeItemFromSaved = (item) => {
    console.log(item);
    const filteredList = saved.filter(i => i.id !== item)
    setSaved([...filteredList])
  }

  //On field input change this function will populate the local state above with the respective field values//
  const updateSearch = (value) => {
    setSearch(value)
  }


  return (
    <appContext.Provider value={{
      data: {gifs, search, loading, saved, location, currentUser, isFirstRender},
      actions: {updateSearch, setTest, setSaved, setLocation, setCurrentUser, removeItemFromSaved, setIsFirstRender, setSearch},
    }}>
      {props.children}
    </appContext.Provider>
  )

}
