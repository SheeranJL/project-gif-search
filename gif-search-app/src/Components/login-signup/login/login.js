import React, {useState, useRef} from 'react';
import {useHistory} from 'react-router-dom';
import './login.scss';
import CustomButton from '../../Buttons/buttons.js';
import {signInWithGoogle} from '../../../firebase/firebase.js';
import {auth} from '../../../firebase/firebase.js';


const Login = ({toggleMethod, currentMethod}) => {

  //Local state for fields//
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory();
  const [incorrectLogin, setIncorrectLogin] = useState(false);


  //On field input change this function will populate the local state above with the respective field values//
  const handleChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value)
    } else {
      setPassword(e.target.value)
    }
  }


  //When a user clicks sign-in with an existing account, we will fire the signInWithEmailAndPassword utility from firebase auth, if successful, the user is pushed back to the home page.
  //If the login in incorrect, we set the incorrectLogin state boolean value to true which then displays an 'incorrect login' prompt
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


  //if a user decided to authenticate with google, we execute the signInWithGoogle utility from firebase auth then push the user to the home page.
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
