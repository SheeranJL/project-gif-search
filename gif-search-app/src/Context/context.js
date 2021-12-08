import React, {useState, createContext, useEffect} from 'react'
import Key from '../keys.js'

export const appContext = createContext();

export const Provider = (props) => {

  const [search, setSearch] = useState('cats');
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${Key}&q=${search}&limit=24&offset=0&rating=g&lang=en`)
  })


  return (
    <appContext.Provider value={{
      data: {gifs, search},
      actions: {setSearch}
    }}>
      {props.children}
    </appContext.Provider>
  )

}
