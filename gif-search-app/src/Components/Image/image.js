import React, {useContext} from 'react';
import {appContext} from '../../Context/context.js';
import './image.scss';
import CustomButton from '../Buttons/buttons.js';

const Image = (props) => {


  const {actions, data} = useContext(appContext);

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
      <button onClick={handleSaveImage} className='save-image-button'>Save</button>
    </div>
  )
}

export default Image;
