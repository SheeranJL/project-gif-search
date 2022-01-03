import React, {useContext, useState, useEffect} from 'react';
import {Link, useHistory, useLocation} from 'react-router-dom';
import './header.scss';
import {appContext} from '../../Context/context.js';
import CustomButton from '../Buttons/buttons.js';
import {auth} from '../../firebase/firebase.js';

const Header = () => {

  const {data: {search, location, saved, currentUser}, actions} = useContext(appContext);

  let history = useHistory();
  const newLocation = useLocation();

  useEffect( () => {
  }, [newLocation])

  const handleSignout = async() => {
    await auth.signOut();
    await actions.setSaved([]);
  }


  return (
    <div className='nav-bar-container'>

      <div onClick={() => history.push('/')} className='title'>
        <span>Gif Search</span>
      </div>

      <div className='login-out-buttons'>


      </div>


      <div className='login-out-buttons'>
          <Link className='saved' to='/'>Home</Link>
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
