import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA0JvsbLEQYWje51XrKO3qa3e8hOngOZN4',
  authDomain: 'portfolio-projects-6855a.firebaseapp.com',
  projectId: 'portfolio-projects-6855a',
  storageBucket: 'portfolio-projects-6855a.appspot.com',
  messagingSenderId: '1052520309326',
  appId: '1:1052520309326:web:905fe66c0a57769479991f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
