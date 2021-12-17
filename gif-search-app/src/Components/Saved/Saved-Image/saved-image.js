import React from 'react';
import './saved-image.scss';

const SavedImage = ({data}) => {

  console.log(data);

  return (
    <div className='saved-image-container'>

      <div className='left-side-image'>
        <img src={data.images.downsized_medium.url}/>
      </div>

      <div className='right-side-info'>
        <h3>{data.title}</h3>

        

      </div>

    </div>
  )
}

export default SavedImage;
