// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtb2X6zOwP_XGqWU2L_u1OhWdR3GkvvCg",
  authDomain: "user-email-password-auth-4d4cb.firebaseapp.com",
  projectId: "user-email-password-auth-4d4cb",
  storageBucket: "user-email-password-auth-4d4cb.appspot.com",
  messagingSenderId: "476999639686",
  appId: "1:476999639686:web:c2efe2ea56dbe45334a707"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 export default auth;
