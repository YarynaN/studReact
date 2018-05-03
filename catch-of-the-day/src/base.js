import Rebase from 're-base'; 
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBQ4xfKRkdjClBIxGEDZAWct3aR_exBCZE",
    authDomain: "catch-of-the-day-yaryna-n.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-yaryna-n.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//named export
export { firebaseApp };

//default export
export default base;