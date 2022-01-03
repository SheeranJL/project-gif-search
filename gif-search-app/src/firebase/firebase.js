import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import { getDatabase, ref, set } from "firebase/database";

const config = {
  apiKey: "AIzaSyAlx7NLSfWvOYIUsT1YSIICW3s17BS3oZI",
  authDomain: "gif-search-app-39faa.firebaseapp.com",
  projectId: "gif-search-app-39faa",
  storageBucket: "gif-search-app-39faa.appspot.com",
  messagingSenderId: "954418677105",
  appId: "1:954418677105:web:cf01c1c71cb877e04662d0",
  measurementId: "G-75Y0HLMX40"
};


//create new user from sign-up form//
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const collectionRef = firestore.collection('users');

  const snapShot = await userRef.get();
  const collectionSnapshot = await collectionRef.get();

  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        user: {
          displayName,
          email,
          createdAt,
          ...additionalData
        },
        data: {
          additionalData
        }
      })
    } catch(error) {
      console.log('error creating account', error)
    }
  }
  return userRef;
};

export const onLoginData = async(userAuth) => {

  const dataRef = await firestore.collection(`users`).doc(userAuth);
  const data = await dataRef.get();

  if (!data.exists) {
    console.log('no data for user')
  } else {
    console.log(data.data())
    return data.data();
  }
};


export const saveDataToFirebase = async (userAuth, data) => {

  const userRef = firestore.doc(`users/${userAuth}`);
  const collectionRef = firestore.collection(`users/${userAuth}/data`);
  const userData = firestore.collection('users').doc(userAuth);

  try {
    await userData.update({
      data
    })
  } catch(error) {
    console.log('Error saving data', error)
  }

};



// Initialize Firebase
firebase.initializeApp(config);
// const app = initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const analytics = firebase.analytics();

//Google sign in//
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
