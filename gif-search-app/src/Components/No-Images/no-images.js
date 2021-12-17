import React from 'react';
import './no-images.scss';

const NoImages = ({message}) => {

  return (
    <div className='no-images-container'>
      <h2 className='no-images-desc'>{message}</h2>
    </div>
  )
}


export default NoImages;
