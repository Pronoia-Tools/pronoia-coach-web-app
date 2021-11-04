import firebase from "firebase/compat/app";
import "firebase/compat/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyBfOh7yoqgGMrMsTxoKoMhP6_9bkUDP0i0",
//   authDomain: "fir-react-upload-5daa4.firebaseapp.com",
//   databaseURL: "https://fir-react-upload-5daa4.firebaseio.com",
//   projectId: "fir-react-upload-5daa4",
//   storageBucket: "fir-react-upload-5daa4.appspot.com",
//   messagingSenderId: "320567469168",
//   appId: "1:320567469168:web:32ea5afe821f2b2cc800b5",
//   measurementId: "G-BLDN7GB52Y"
// };

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_APIKEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.VUE_APP_FIREBASE_APPID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENTID
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
