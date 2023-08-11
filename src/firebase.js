import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBqkIekMy9fzPvIU-Aox23n15FZqGWl75I",
  authDomain: "giveaway-app-f782a.firebaseapp.com",
  projectId: "giveaway-app-f782a",
  storageBucket: "giveaway-app-f782a.appspot.com",
  messagingSenderId: "172288930940",
  appId: "1:172288930940:web:525a94396d4229bf2485f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
