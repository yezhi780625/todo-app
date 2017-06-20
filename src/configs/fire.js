import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBcN3KafoVFyrg_z43veGZUzE1VKHslSRM",
    authDomain: "todo-app-823bd.firebaseapp.com",
    databaseURL: "https://todo-app-823bd.firebaseio.com",
    projectId: "todo-app-823bd",
    storageBucket: "todo-app-823bd.appspot.com",
    messagingSenderId: "887137244257"
  };
  
var fire = firebase.initializeApp(config);
export default fire;