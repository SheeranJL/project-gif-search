import React from 'react';
import {Link} from 'react-router-dom';
import './no-images.scss';

const NoImages = ({message}) => {

  return (
    <div className='no-images-container'>
      <h2 className='no-images-desc'>Please <Link className='direct-to-login' to='/login'>Login</Link> to save images</h2>
    </div>
  )
}


export default NoImages;
