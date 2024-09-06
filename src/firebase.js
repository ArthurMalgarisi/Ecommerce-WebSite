import firebase from "firebase";

const firebaseConfig = {

    apiKey: "AIzaSyAjEXKgs8klPfT_T8PCNOYPxtqcIZYFS6c",

    authDomain: "e-commerce-arthur.firebaseapp.com",

    projectId: "e-commerce-arthur",

    storageBucket: "e-commerce-arthur.appspot.com",

    messagingSenderId: "191212442124",

    appId: "1:191212442124:web:37c2ad9aa0d2f54383d429"

};



const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

