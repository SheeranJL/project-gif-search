import React, {useContext} from 'react';
import {appContext} from '../../Context/context.js';
import './image.scss';
import CustomButton from '../Buttons/buttons.js';

const Image = (props) => {


  const {actions, data} = useContext(appContext);

  //This function is called whenever a user clicks 'save' on an image. The fuction will loop through existing saved images and return nothing if there is an existing saved image with the same ID//
  //If the image isn't a duplicate it will save the image to the saved context state and it will appear on the saved page//
  const handleSaveImage = () => {
    const findExisting = data.saved.find((image) => image.id === props.data.id)
    if (findExisting) {
      return
    } else {
      actions.setSaved([...data.saved, props.data])
    }
  }


  return (
    <div className='image'>
      <img className='gif' src={props.data.images.fixed_width.webp}/>
      {
        data.currentUser ? <button onClick={handleSaveImage} className='save-image-button'>Save</button> : null
      }

    </div>
  )
}


export default Image;
