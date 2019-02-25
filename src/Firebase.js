import * as firebase from "firebase";
import firestore from "firebase/firestore";

const settings = { timestampsInSnapshots: true };

var config = {
  apiKey: "AIzaSyAv91UKvyXwysiSepDX4FR5BvN8OsjiU-E",
  authDomain: "forreact-f7133.firebaseapp.com",
  databaseURL: "https://forreact-f7133.firebaseio.com",
  projectId: "forreact-f7133",
  storageBucket: "forreact-f7133.appspot.com",
  messagingSenderId: "612021074709"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
