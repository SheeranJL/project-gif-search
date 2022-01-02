import React from 'react';
import './buttons.scss';

const CustomButton = ({children, isGoogleButton, onClick, ...rest}) => {


  return (
    <button onClick={onClick} className={`${isGoogleButton ? 'custom-button google' : ''} custom-button`}>
      {children}
    </button>
  )
}

export default CustomButton;
