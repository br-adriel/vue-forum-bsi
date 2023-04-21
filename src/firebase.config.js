import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: VUE_APP_process.env.apiKey,
  authDomain: VUE_APP_process.env.authDomain,
  projectId: VUE_APP_process.env.projectId,
  storageBucket: VUE_APP_process.env.storageBucket,
  messagingSenderId: VUE_APP_process.env.messagingSenderId,
  appId: VUE_APP_process.env.appId,
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
