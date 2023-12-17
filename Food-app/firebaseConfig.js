import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {

    apiKey: "AIzaSyBqMVLsE28fZMxfRJsbxCQ_kfvgp3yd6vI",

    authDomain: "foodtruckapp-cc910.firebaseapp.com",

    projectId: "foodtruckapp-cc910",

    storageBucket: "foodtruckapp-cc910.appspot.com",

    messagingSenderId: "438354046037",

    appId: "1:438354046037:web:8fb25e8f802ea71828b8dc",

    measurementId: "G-7BT98SR2EL"

};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

export { firebase, auth };