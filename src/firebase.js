import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCcvGrnrR0BHbiBRpZGBxm1xLLWskGOsJQ",
    authDomain: "bookshelfjn.firebaseapp.com",
    projectId: "bookshelfjn",
    storageBucket: "bookshelfjn.appspot.com",
    messagingSenderId: "152225474372",
    appId: "1:152225474372:web:795e18742e917d45c39911",
    measurementId: "G-L4HXF2WPXK"
};

firebase.initializeApp(firebaseConfig);

export default firebase;