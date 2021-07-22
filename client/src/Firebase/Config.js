import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyDdbs8BACaHJ8AoPZoj2pVv1ABt0W2g6A0",
    authDomain: "appkinne.firebaseapp.com",
    projectId: "appkinne",
    storageBucket: "appkinne.appspot.com",
    messagingSenderId: "923288863612",
    appId: "1:923288863612:web:d45a06104fe3aab4b39af9",
    measurementId: "G-DMD6D8DJSW"
};
  // Initialize Firebase

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore(); 
const storage=firebase.storage()

// auth.useEmulator('http://localhost:9099');
// if (window.location.hostname === 'localhost') {
   
//    db.useEmulator('localhost', '8080');
 
// }
//
export { db, auth,storage };
export default firebase;