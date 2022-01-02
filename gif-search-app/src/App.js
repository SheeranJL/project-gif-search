import './App.scss';
import React, {useEffect, useState, useContext} from 'react';
import {auth, createUserProfileDocument} from './firebase/firebase.js';
import {appContext} from './Context/context.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Components//
import MainPage from './Components/Mainpage/main-page.js';
import SavedPage from './Components/Saved/saved.js';
import Header from './Components/Header/header.js';
import SignInAndUp from './Components/login-signup/login-signup.js';


function App() {

  const {data, actions} = useContext(appContext);


  let unsubscribeFromAuth = null;

  useEffect(() => {

    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth, data.saved);

        console.log(userAuth);

        userRef.onSnapshot(snapShot => {
          actions.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data,
            userData: {
              displayName: userAuth.displayName,
              email: userAuth.email,
            }
          })
        })
      }
      actions.setCurrentUser(userAuth);
    })


  }, [])

  return (
    <div className="app-container">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/saved' component={SavedPage} />
          <Route path='/login' component={SignInAndUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
