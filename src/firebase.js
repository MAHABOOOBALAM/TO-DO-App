import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCTxVLq-JLUtd2cRQzCzJ0mn2ygypk41F4",
    authDomain: "todo-app-29cc9.firebaseapp.com",
    projectId: "todo-app-29cc9",
    storageBucket: "todo-app-29cc9.appspot.com",
    messagingSenderId: "744814080451",
    appId: "1:744814080451:web:80adf4b47d4699ada70d76"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;