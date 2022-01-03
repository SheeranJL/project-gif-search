import React from 'react';
import './no-gifs.scss';

const NoGifs = ({message}) => {

  return (
    <div className='no-gifs-container'>
      <h2 className='no-gifs-desc'>{message}</h2>
    </div>
  )

}

export default NoGifs
