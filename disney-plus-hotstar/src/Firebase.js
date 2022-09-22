import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';



const firebaseConfig = {

  apiKey: "AIzaSyCg49WC-ModZI4TmsVIMVD2sbegzTLOixY",

  authDomain: "disney-plus-clone-12cbb.firebaseapp.com",

  projectId: "disney-plus-clone-12cbb",

  storageBucket: "disney-plus-clone-12cbb.appspot.com",

  messagingSenderId: "536893542829",

  appId: "1:536893542829:web:8c0f900ea9b82b6182d124"

}


const firebaseApp =firebase.initializeApp(firebaseConfig);
const dbConfig =firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth , provider, storage}

export default dbConfig;