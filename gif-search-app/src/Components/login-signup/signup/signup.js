import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import '../login/login.scss';
import {auth, createUserProfileDocument} from '../../../firebase/firebase.js';

import CustomButton from '../../Buttons/buttons.js';

const SignUp = ({toggleMethod, currentMethod}) => {

  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmedPassword, setConfirmedPassword] = useState('')

  const history = useHistory();

  const handleChange = (e) => {
    if (e.target.name === 'displayName') {
      setDisplayName(e.target.value)
    } else if (e.target.name === 'email') {
      setEmail(e.target.value)
    } else if (e.target.name === 'password') {
      setPassword(e.target.value)
    } else if (e.target.name === 'confirmedPassword') {
      setConfirmedPassword(e.target.value)
    }
  }


  const handleSubmit = async (e) => {
    console.log(email, password)
    e.preventDefault();

    if (password !== confirmedPassword) {
      alert('Both passwords must match')
      return
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, {displayName});
      setDisplayName('');
      setEmail('');
      setPassword('');
      setConfirmedPassword('');
      history.push('/')
    } catch(error) {
      console.log('Error during signup', error)
    }

  }


  return (
    <div className='login-container'>
      <h3>Create a new account</h3>

      <form className='login-form' onSubmit={handleSubmit}>

        <label for='displayName'>Username</label>
        <input type='displayName' name='displayName' onChange={handleChange} value={displayName}/>

        <label for='email'>Email</label>
        <input type='email' name='email' onChange={handleChange} value={email}/>

        <label for='password'>Password</label>
        <input type='password' name='password' onChange={handleChange} value={password}/>

        <label for='confirmedPassword'>Confirm Password</label>
        <input type='password' name='confirmedPassword' onChange={handleChange} value={confirmedPassword}/>

        <CustomButton type='submit' >Sign up!</CustomButton>

        <span className='toggle-method' onClick={() => toggleMethod(!currentMethod)}> Already have an account? Sign in! </span>

      </form>

    </div>
  )
}

export default SignUp;
