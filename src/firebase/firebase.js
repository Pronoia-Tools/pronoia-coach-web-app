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
  apiKey: "AIzaSyBriu0YdHPwvlAcvDYc56mL5umAmmbVdmc",
  authDomain: "pronoia-test-1aeb6.firebaseapp.com",
  projectId: "pronoia-test-1aeb6",
  storageBucket: "pronoia-test-1aeb6.appspot.com",
  messagingSenderId: "708314955027",
  appId: "1:708314955027:web:ceca3710741075f1cfeee6",
  measurementId: "G-9RSPL2CTJ8"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
