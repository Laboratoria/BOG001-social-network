// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from 'firebase/app';

// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB8mjbw1ZN7VfV-Ejeb8-Wqz4aXt2HXgdY',
  authDomain: 'physport-dfb88.firebaseapp.com',
  databaseURL: 'https://physport-dfb88.firebaseio.com',
  projectId: 'physport-dfb88',
  storageBucket: 'physport-dfb88.appspot.com',
  messagingSenderId: '580315971427',
  appId: '1:580315971427:web:05abf4935feae5648ddd56',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();
export const timeStamp = firebase.firestore.FieldValue.serverTimestamp();
// export const storage = firebase.storage();
// export const getData = database.collection('events').doc();
// export const userCurrent = firebase.auth().currentUser;
