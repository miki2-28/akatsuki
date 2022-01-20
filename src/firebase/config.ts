// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAaskZD_zh24dMjT-plRop7NLX145Smpew',
  authDomain: 'twilight-moon.firebaseapp.com',
  projectId: 'twilight-moon',
  storageBucket: 'twilight-moon.appspot.com',
  messagingSenderId: '977422192811',
  appId: '1:977422192811:web:38f6793c638bdf24d5a7ee',
  measurementId: 'G-LV36BWBG82',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
