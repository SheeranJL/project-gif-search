import React, {useState, useRef} from 'react';
import {useHistory} from 'react-router-dom';
import './login.scss';
import CustomButton from '../../Buttons/buttons.js';
import {signInWithGoogle} from '../../../firebase/firebase.js';
import {auth} from '../../../firebase/firebase.js';


const Login = ({toggleMethod, currentMethod}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory();
  const [incorrectLogin, setIncorrectLogin] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value)
    } else {
      setPassword(e.target.value)
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
      setIncorrectLogin(false);
      history.push('/');
    } catch(error) {
      console.log('error signing in w/ u/p', error)
      setIncorrectLogin(true);
    }
  }

  const redirectAfterGoogleAuth = async() => {

    try {
      await signInWithGoogle();
      history.push('/')

    } catch(error) {
      console.log('error signing in with google')
    }

  }

  return (
    <div className='login-container'>
      <h3>Log in with existing account</h3>

      <form className='login-form' onSubmit={handleSubmit}>

        <label for='email'>Email</label>
        <input type='email' name='email' value={email} onChange={handleChange}/>

        <label for='password'>Password</label>
        <input type='password' name='password' value={password} onChange={handleChange}/>

        <div className='sign-in-buttons'>
          <CustomButton>Sign in</CustomButton>
          <CustomButton isGoogleButton onClick={redirectAfterGoogleAuth}>Google</CustomButton>
        </div>

        <p className={incorrectLogin ? 'incorrect-login' : 'hidden'}>Incorrect login</p>

        <span className='toggle-method' onClick={() => toggleMethod(!currentMethod)}> Don't have an account? Create one! </span>

      </form>

    </div>
  )
}

export default Login;
