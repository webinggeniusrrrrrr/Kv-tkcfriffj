import { auth } from 'firebase.js'; 

const loginBtn = document.getElementById('login-btn');
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');
const loginErrorMessage = document.getElementById('login-error-message'); 

loginBtn.addEventListener('click', () => {
  signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("User logged in:", user);
      // Redirect to the desired page after successful login
      window.location.href = 'dashboard.html'; 
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Login Error:", errorCode, errorMessage);
      loginErrorMessage.textContent = errorMessage; 
    });
});
