import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

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
}




// Initialize Firebase
firebase.initializeApp(config);
// const app = initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Google sign in//
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
