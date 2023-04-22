import { app, db } from '@/firebase.config';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export function signInGoogle() {
  return signInWithPopup(auth, provider).then(async (result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;

    if (token) {
      sessionStorage.setItem('@AuthFirebase:token', token);
      sessionStorage.setItem('@AuthFirebase:user', JSON.stringify(user));

      const userData = {
        name: user.displayName,
      };

      const docRef = doc(db, 'users', user.uid);
      await setDoc(docRef, userData, { merge: true });
    }

    console.log(user);
    return {
      displayName: user.providerData[0].displayName,
      photo: user.providerData[0].photoURL,
    };
  });
}

export function signOutGoogle() {
  signOut(auth).then(() => {
    sessionStorage.removeItem('@AuthFirebase:token');
    sessionStorage.removeItem('@AuthFirebase:user');
  });
}
