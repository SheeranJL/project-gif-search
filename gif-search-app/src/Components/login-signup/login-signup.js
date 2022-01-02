import React, {useState} from 'react';
import './login-signup.scss';

import Login from './login/login.js';
import SignUp from './signup/signup.js';

const SignInAndUp = () => {

  const [method, toggleMethod] = useState(true)

  return (
    <div className='sign-in-and-up-container'>

      {
        method
        ? <Login toggleMethod={toggleMethod} currentMethod={method}/>
        : <SignUp toggleMethod={toggleMethod} currentMethod={method}/>
      }

    </div>
  )
}

export default SignInAndUp;
