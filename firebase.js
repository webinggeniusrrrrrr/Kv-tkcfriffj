
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCqbjev_7RmRSf-HyLDoy7dSep9z_Lvkus",
    authDomain: "login-4e9e5.firebaseapp.com",
    projectId: "login-4e9e5",
    storageBucket: "login-4e9e5.firebasestorage.app",
    messagingSenderId: "753278937945",
    appId: "1:753278937945:web:23f0d6e688c3b23d15ba48",
    measurementId: "G-M2HMQ59FBM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
