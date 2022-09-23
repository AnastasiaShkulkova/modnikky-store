import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDubknzz9w6DfgKVCI2oss9zNohJ_jBS9w",
  authDomain: "modnikky-app.firebaseapp.com",
  projectId: "modnikky-app",
  storageBucket: "modnikky-app.appspot.com",
  messagingSenderId: "833542381918",
  appId: "1:833542381918:web:1590eb87294c4abd5eefcf",
};
firebase.initializeApp(firebaseConfig);

export const database = firebase.database;
export const auth = firebase.auth();

export default firebase;
