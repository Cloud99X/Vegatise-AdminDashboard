import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDx-2puIGm-YZKSTB_L5XfYwx1fNnK2HLc",
    authDomain: "vegatise-1bad9.firebaseapp.com",
    projectId: "vegatise-1bad9",
    storageBucket: "vegatise-1bad9.appspot.com",
    messagingSenderId: "1093917437851",
    appId: "1:1093917437851:web:13bb3bb85d56dfacc63b3e",
    measurementId: "G-575G4P997X"
};

const firebaseApp = initializeApp(firebaseConfig);

// Export the initialized Firebase app
export default firebaseApp;