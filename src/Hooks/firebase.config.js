// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTdcCVhSCBpEqb0WEo6TV2pJFkh_5lrCI",
  authDomain: "e-learning-5b477.firebaseapp.com",
  projectId: "e-learning-5b477",
  storageBucket: "e-learning-5b477.appspot.com",
  messagingSenderId: "873056108998",
  appId: "1:873056108998:web:5148ef38778d25ac54b2c7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
