import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB-gCgHwIZ5s4q30CyaRCdpP0cFXM7NywQ",
  authDomain: "career-accelerator.firebaseapp.com",
  databaseURL: "https://career-accelerator-default-rtdb.firebaseio.com",
  projectId: "career-accelerator",
  storageBucket: "career-accelerator.appspot.com",
  messagingSenderId: "199237949489",
  appId: "1:199237949489:web:e08318deb831be63791d10",
  measurementId: "G-Z96Y08GHFJ",
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();
