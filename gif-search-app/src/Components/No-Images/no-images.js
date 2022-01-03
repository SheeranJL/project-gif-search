import React, {useContext} from 'react';
import {appContext} from '../../Context/context.js';
import {Link} from 'react-router-dom';
import './no-images.scss';

const NoImages = () => {

  const {data} = useContext(appContext);

  return (
    <div className='no-images-container'>

      {
        data.saved.length === 0 && data.currentUser !== null
        ? <h2 className='no-images-desc'>Images you add will show here</h2>
        : <h2 className='no-images-desc'>Please <Link className='direct-to-login' to='/login'>Login</Link> to save images</h2>
      }

    </div>
  )
}


export default NoImages;
