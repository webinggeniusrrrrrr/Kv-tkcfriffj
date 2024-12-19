import { auth } from 'firebase.js'; 
const signupBtn = document.getElementById('signup-btn');
const signupEmail = document.getElementById('signup-email');
const signupPassword = document.getElementById('signup-password');
const signupErrorMessage = document.getElementById('signup-error-message'); 

signupBtn.addEventListener('click', () => {
  createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("User created:", user);
      // Redirect to the login page after successful signup
      window.location.href = 'index.html'; 
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Signup Error:", errorCode, errorMessage);
      signupErrorMessage.textContent = errorMessage; 
    });
});
