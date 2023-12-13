// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAP5urdoMmY4wB0Fml8UT9E4Q309mDIK88',
  authDomain: 'cinema-booking-auth.firebaseapp.com',
  projectId: 'cinema-booking-auth',
  storageBucket: 'cinema-booking-auth.appspot.com',
  messagingSenderId: '800656198694',
  appId: '1:800656198694:web:192ea40f81391c96156ae7',
  measurementId: 'G-ZK1QQVHJ95',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
