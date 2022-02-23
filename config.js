import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDynWn4Du3O59ovD1ih-OUIxwm6ABGRcok",
  authDomain: "project-72-6d0d2.firebaseapp.com",
  projectId: "project-72-6d0d2",
  storageBucket: "project-72-6d0d2.appspot.com",
  messagingSenderId: "664971559558",
  appId: "1:664971559558:web:8f5460e274d8038f514707",
  measurementId: "G-CPRE2W8PRV"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
