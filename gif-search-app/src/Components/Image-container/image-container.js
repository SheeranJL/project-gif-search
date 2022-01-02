import './image-container.scss';
import React, {useContext, useState, useEffect} from 'react';
import {appContext} from '../../Context/context.js';

import Image from '../Image/image.js';
import NoImages from '../No-Images/no-images.js';
import SearchBar from '../search-bar/search-bar.js';

const ImageContainer = () => {

  const {data, loading} = useContext(appContext);

  return (
    <div className='image-page-container'>

      <div className='search-bar-comtainer'>
        <SearchBar />
      </div>

    {
      data.loading
      ?
      (
        <NoImages message='No images found, search again'/>
      ) : (
        <div className='image-container'>
          {data.gifs.map((gif) => <Image data={gif} />)}
        </div>
      )
    }
    </div>
  )

}

export default ImageContainer;
