import React, {useContext, useState, useEffect} from 'react';
import {Link, useHistory, useLocation} from 'react-router-dom';
import './header.scss';
import {appContext} from '../../Context/context.js';
import CustomButton from '../Buttons/buttons.js';
import {auth} from '../../firebase/firebase.js';

const Header = () => {

  const {data: {search, location, saved, currentUser}, actions} = useContext(appContext);

  const newLocation = useLocation();
  const history = useHistory();

  //On sign-out this function will call the signOut function from firebase auth library then clear the saved photos from local state//
  const handleSignout = async() => {
    await auth.signOut();
    await actions.setSaved([]);
  }


  return (
    <div className='nav-bar-container'>

      <div onClick={() => {
        history.push('/')
        actions.setSearch('cats')
      }} className='title'>
        <span>Gif Search</span>
      </div>

      <div className='login-out-buttons'>


      </div>


      <div className='login-out-buttons'>
          <Link className='saved' to='/' onClick={() => actions.setSearch('cats')} >Home</Link>
          <Link className='saved' to='/saved'>Saved</Link>
          {
            currentUser
            ? <span className='logout' onClick={handleSignout}>Signout</span>
            : <Link className='saved' to='/login'>Login</Link>
          }
      </div>


    </div>
  )
}

export default Header;
