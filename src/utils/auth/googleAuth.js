import { app, db } from '@/firebase.config';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const provider = new GoogleAuthProvider(); // determina o serviço usado para login
const auth = getAuth(app);

export function signInGoogle() {
  return signInWithPopup(auth, provider).then(async (result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken; // recupera o token de acesso
    const user = result.user; // recupera informações do usuário

    // objeto com os dados que serão usados na aplicação
    const userInfo = {
      displayName: user.providerData[0].displayName, // nome do usuário
      photo: user.providerData[0].photoURL, // url da imagem de perfil
    };

    // se o token existir significa que a autenticação foi um sucesso
    if (token) {
      sessionStorage.setItem('@AuthFirebase:token', token); // salva o token no session storage
      sessionStorage.setItem('@AuthFirebase:user', JSON.stringify(userInfo)); // salva o perfil do usuário no session storage

      // objeto com os dados do usuário que serão salvos no banco de dados
      const userData = {
        name: user.displayName,
      };

      const docRef = doc(db, 'users', user.uid); // define um novo documento a ser salvo no banco de dados
      await setDoc(docRef, userData, { merge: true }); // salva o documento com os dados do usuário no banco de dados
    }

    return userInfo;
  });
}

export function signOutGoogle() {
  /** Remove os dados do usuário da session storage */
  signOut(auth).then(() => {
    sessionStorage.removeItem('@AuthFirebase:token');
    sessionStorage.removeItem('@AuthFirebase:user');
  });
}
