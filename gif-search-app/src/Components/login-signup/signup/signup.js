import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import './signup.scss';
import {auth, createUserProfileDocument} from '../../../firebase/firebase.js';

import CustomButton from '../../Buttons/buttons.js';

const SignUp = ({toggleMethod, currentMethod}) => {

  //Local state variables//
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmedPassword, setConfirmedPassword] = useState('')
  const [passwordMatch, setPasswordMatch] = useState(true);

  const history = useHistory();

  //On field input change this function will populate the local state above with the respective field values//
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

  //On form submission we take the values of each field and run them through the createUserWithEmailAndPassword function from our firebase utilities. This will then create an account in firestore which will allow the user to sign in.
  const handleSubmit = async (e) => {
    console.log(email, password)
    e.preventDefault();

    //If 'password', and 'confirmed password' fields don't match, then display an error stating so
    if (password !== confirmedPassword) {
      setPasswordMatch(false);
      return
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, {displayName});
      setDisplayName('');
      setEmail('');
      setPassword('');
      setConfirmedPassword('');
      setPasswordMatch(true);
      history.push('/')
    } catch(error) {
      console.log('Error during signup', error)
    }

  }


  return (
    <div className='signup-container'>
      <h3 >Create a new account</h3>

      <form className='login-form' onSubmit={handleSubmit}>

        <label for='displayName'>Username</label>
        <input type='displayName' name='displayName' onChange={handleChange} value={displayName}/>

        <label for='email'>Email</label>
        <input type='email' name='email' onChange={handleChange} value={email}/>

        <label className={passwordMatch ? '' : 'no-match'} for='password'>Password</label>
        <input type='password' name='password' onChange={handleChange} value={password}/>

        <label className={passwordMatch ? '' : 'no-match'} for='confirmedPassword'>Confirm Password</label>
        <input type='password' name='confirmedPassword' onChange={handleChange} value={confirmedPassword}/>

        <CustomButton type='submit' >Sign up!</CustomButton>

        <span className='toggle-method' onClick={() => toggleMethod(!currentMethod)}> Already have an account? Sign in! </span>

      </form>

    </div>
  )
}

export default SignUp;
