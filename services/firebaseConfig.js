import { firebase, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // Firebase credentials
  apiKey: 'AIzaSyD4wrKg-m5c8j8ZV_6hkQMGulbetnHGRPA',
  authDomain: 'airbnb-clone-4bf98.firebaseapp.com',
  projectId: 'airbnb-clone-4bf98',
  storageBucket: 'airbnb-clone-4bf98.appspot.com',
  messagingSenderId: '227426414245',
  appId: '1:227426414245:web:ba73ca6d2d74738278674c',
  measurementId: 'G-T9FPEPX4NE',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export { firebase };
