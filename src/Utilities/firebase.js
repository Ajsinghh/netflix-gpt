// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbHb5J9aJ71UXdWNSqUeCcP9NBOd0ZIQ8",
  authDomain: "netflix-gpt-ef6d6.firebaseapp.com",
  projectId: "netflix-gpt-ef6d6",
  storageBucket: "netflix-gpt-ef6d6.appspot.com",
  messagingSenderId: "711091923304",
  appId: "1:711091923304:web:0863d7e6b0458171d30edd",
  measurementId: "G-Y4NHL0BM1P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

