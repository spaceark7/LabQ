import firebase from 'firebase/app'
import 'firebase/auth'

const firebase_app = firebase.initializeApp({
    apiKey: "AIzaSyA2n09eLSNI-UtYPjFOFy99txIyh5sfYE0",
    authDomain: "auth-dev-b1c5e.firebaseapp.com",
    projectId: "auth-dev-b1c5e",
    storageBucket: "auth-dev-b1c5e.appspot.com",
    messagingSenderId: "549056157533",
    appId: "1:549056157533:web:bf44559748b39c5e537ab4"
})

export default firebase_app;
export const auth = firebase_app.auth();