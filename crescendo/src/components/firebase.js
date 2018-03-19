import * as firebase from "firebase";
import 'firebase/firestore';
const config = {
    apiKey: "AIzaSyBEkvHvnrUqcwbUdme_TDGPvAkYuDAnfnE",
    authDomain: "crescendo-ee989.firebaseapp.com",
    databaseURL: "https://crescendo-ee989.firebaseio.com",
    projectId: "crescendo-ee989",
    storageBucket: "crescendo-ee989.appspot.com",
    messagingSenderId: "347848090497"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;