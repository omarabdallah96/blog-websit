import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyCi76nczGIPtCftTgD8D7fozAkhZacUmpM",
    authDomain: "blog-59d98.firebaseapp.com",
    projectId: "blog-59d98",
    storageBucket: "blog-59d98.appspot.com",
    messagingSenderId: "246915929349",
    appId: "1:246915929349:web:6523c66a605124fb39d36c",
    measurementId: "G-VCWJFX101F"
  };
   const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default fire;