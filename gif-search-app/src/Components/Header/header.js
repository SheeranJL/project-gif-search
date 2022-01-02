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

  return (
    <div className='nav-bar-container'>

      <div onClick={() => history.push('/')} className='title'>
        <span>Gif Search</span>
      </div>

      <div className='login-out-buttons'>
        {
          currentUser
          ? (
            <>
            {
              history.location.pathname === '/'
              ? <Link className='saved' to='/saved'>Saved</Link>
              : <Link className='saved' to='/'>Home</Link>
            }
            <span className='logout' onClick={() => auth.signOut()}>Signout</span>
            </>
          )
          : <Link className='saved' to='/login'>Login</Link>
        }

      </div>

    </div>
  )
}

export default Header;
