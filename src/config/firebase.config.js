import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDjehHq0V1umvq0MJLQpTiWaMrYXJ1q50U",
  authDomain: "clean-co-live-client-765cb.firebaseapp.com",
  projectId: "clean-co-live-client-765cb",
  storageBucket: "clean-co-live-client-765cb.appspot.com",
  messagingSenderId: "69600189682",
  appId: "1:69600189682:web:83f708b8e05fb7be57c46b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);