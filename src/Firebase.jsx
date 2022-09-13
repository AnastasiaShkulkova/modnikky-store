import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAaefsazoNyPKWc1pAlD9XHsLG12v_TtA8",
  authDomain: "fir-training-164e4.firebaseapp.com",
  projectId: "fir-training-164e4",
  storageBucket: "fir-training-164e4.appspot.com",
  messagingSenderId: "801466295534",
  appId: "1:801466295534:web:a6b693ccfe168ce0557fff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(firebaseConfig)
