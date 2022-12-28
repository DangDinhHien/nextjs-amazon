import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDxArd4ZY1BENG5nZ-HPe0wfg5Q_rKYPQQ",
  authDomain: "nextjs-6f87f.firebaseapp.com",
  projectId: "nextjs-6f87f",
  storageBucket: "nextjs-6f87f.appspot.com",
  messagingSenderId: "730299636618",
  appId: "1:730299636618:web:6117056b797d9a92f54673"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export default db;
