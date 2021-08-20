import firebase from 'firebase';
const firebaseConfig = {
   apiKey: "AIzaSyDY2TozjMwbVYSJwvSvsi8MIyX7Pmkptww",
   authDomain: "hostel-allocation-665ad.firebaseapp.com",
   projectId: "hostel-allocation-665ad",
   storageBucket: "hostel-allocation-665ad.appspot.com",
   messagingSenderId: "163105023770",
   appId: "1:163105023770:web:41fd442430db871a0c6ea3"
 };
 // Initialize Firebase
 const fire=firebase.initializeApp(firebaseConfig);

 export default fire;
