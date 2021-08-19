import firebase from 'firebase/app'
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyBwANXBFUumoKJaC5dRs1v7BC2qUyVoKhc",
    authDomain: "wddm-121-e398c.firebaseapp.com",
    projectId: "wddm-121-e398c",
    storageBucket: "wddm-121-e398c.appspot.com",
    messagingSenderId: "486108358256",
    appId: "1:486108358256:web:2fe729801d42ef70beb6b5"
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase