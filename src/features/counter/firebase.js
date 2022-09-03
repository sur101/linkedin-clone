import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBXJ-B1yOrlFPVltVMihi4HzuyDwfaU2dE",
    authDomain: "linkedin-clone-f64a0.firebaseapp.com",
    projectId: "linkedin-clone-f64a0",
    storageBucket: "linkedin-clone-f64a0.appspot.com",
    messagingSenderId: "988803783128",
    appId: "1:988803783128:web:b4e7495948df9e71ecbaad",
    measurementId: "G-EFHWYYXNG3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };