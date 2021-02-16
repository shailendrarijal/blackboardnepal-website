import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/auth';

if (typeof window !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyDcFoit6ZZ222wJDxrgOAaOHUvEBaknGM8',
    authDomain: 'blackboardnepal-a1255.firebaseapp.com',
    databaseURL: 'https://blackboardnepal-a1255-default-rtdb.firebaseio.com',
    projectId: 'blackboardnepal-a1255',
    storageBucket: 'blackboardnepal-a1255.appspot.com',
    messagingSenderId: '458097770254',
    appId: '1:458097770254:web:602219fe1b30058caf215f',
    measurementId: 'G-2L6JVLG839'
  });
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
}

const analytics = firebase.analytics;

export default firebase;
export {analytics};