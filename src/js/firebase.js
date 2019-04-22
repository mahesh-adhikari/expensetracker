import firebase from "firebase";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyD9EhjfrwCgT7nO0RtpxB3DnC3cul9s4m8",
  authDomain: "aarambha-abc.firebaseapp.com",
  databaseURL: "https://aarambha-abc.firebaseio.com",
  projectId: "aarambha-abc",
  storageBucket: "aarambha-abc.appspot.com",
  messagingSenderId: "108719500181"
};
firebase.initializeApp(config);
//const db = firebase.firestore();
//db.settings({ timestampsInSnapshots: true});

export default {
  db: firebase.firestore()
};
