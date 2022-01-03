import React, {useContext} from 'react';
import {appContext} from '../../Context/context.js';
import './saved.scss';

import SavedImage from './Saved-Image/saved-image.js';
import NoImages from '../No-Images/no-images.js';


const SavedPage = () => {

  const {data, actions} = useContext(appContext);

  return (
    <div className='saved-page-container'>
      {
        data.saved.length
        ? data.saved.map((image, index) => <SavedImage data={image} key={image.id} />)
        : <NoImages />
      }
    </div>
  )
}

export default SavedPage;
