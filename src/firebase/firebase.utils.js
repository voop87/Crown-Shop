
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const config = {
	apiKey: "AIzaSyBi53cqzxn8H2impdpSs6NQgGbUYSxs_P4",
  authDomain: "react-shop-f317d.firebaseapp.com",
  projectId: "react-shop-f317d",
  storageBucket: "react-shop-f317d.appspot.com",
  messagingSenderId: "849351371879",
  appId: "1:849351371879:web:514722edd28f609a1cf8c2"
};

const firebase = initializeApp(config);

export const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);


export const db = getFirestore(firebase);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(db, 'users', userAuth.uid);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('create user error', error.message);
    }
  }

  return userRef;
};



export default firebase;