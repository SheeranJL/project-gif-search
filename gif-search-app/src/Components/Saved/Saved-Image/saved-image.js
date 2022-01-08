import React, {useContext} from 'react';
import {appContext} from '../../../Context/context.js';

import './saved-image.scss';

const SavedImage = ({data}) => {

  const {actions} = useContext(appContext);

  //if a user click on 'remove', this function will call the removeItemFromSaved function from context which will attempt to remove the saved image from the users saved images and further, remove it from firestore.
  const handleRemove = () => {
    actions.removeItemFromSaved(data.id);
  }


  return (
    <div className='saved-image-container'>

      <div className='image-saved'>
        <img className='actual-saved-image' src={data.images.downsized_medium.url}/>
        <button className='remove-button' onClick={handleRemove} >Remove</button>
      </div>

      <div className='title-info'>
        <h3>{data.title}</h3>
      </div>

    </div>
  )
}

export default SavedImage;
