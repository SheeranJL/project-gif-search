import React from 'react';
import './buttons.scss';

const CustomButton = ({children, isGoogleButton, onClick, ...rest}) => {


  return (
    <button onClick={onClick} type={isGoogleButton ? 'button' : ''} className={`${isGoogleButton ? 'custom-button google' : ''} custom-button`}>
      {children}
    </button>
  )
}

export default CustomButton;
