// firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA20HhYTK8ZHiDIrmEbFLMNlpDhilJyjI",
    authDomain: "biznest-8382f.firebaseapp.com",
    projectId: "biznest-8382f",
    storageBucket: "biznest-8382f.appspot.com",
    messagingSenderId: "4455245673",
    appId: "1:4455245673:web:0c05e6da1a2ca80a057ff8"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
