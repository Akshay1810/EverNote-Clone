import firebase from "firebase/app";
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBh6XQuzvJACT0sjVHsj2MLNOQat4LDC4w",
  authDomain: "evernote-clone-eb43f.firebaseapp.com",
  projectId: "evernote-clone-eb43f",
  storageBucket: "evernote-clone-eb43f.appspot.com",
  messagingSenderId: "947216182126",
  appId: "1:947216182126:web:0e1ad839252189fed1ef7f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase