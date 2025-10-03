// script.js file
document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.password-toggle');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const passwordInput = document.getElementById(targetId);

            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                button.textContent = 'Hide';
            } else {
                passwordInput.type = 'password';
                button.textContent = 'Show';
            }
        });
    });
});


    // Get all the image elements
    const images = document.querySelectorAll('.slider-image');
    let currentIndex = 0;
    const intervalTime = 2000; // 2000 milliseconds = 2 seconds

    function nextImage() {
        // 1. Remove the 'active' class from the current image
        images[currentIndex].classList.remove('active');

        // 2. Calculate the index for the next image
        // The `% images.length` ensures it loops back to 0 after the last image
        currentIndex = (currentIndex + 1) % images.length;

        // 3. Add the 'active' class to the new image
        images[currentIndex].classList.add('active');
    }

    // Start the slider: call the 'nextImage' function every 2 seconds
    setInterval(nextImage, intervalTime);

// Firebase Configs---
// SignUp to Redirect Login

let usernameEl = document.getElementById("username");
let emailEl = document.getElementById("email");
let passwordEl = document.getElementById("password");
let confirmPasswordEl = document.getElementById("confirmPassword"); 
let messageEl = document.getElementById("message");
let fb = firebase.auth();

// redirecttosignin

function redirectToSignIn () {
    window.location.href = "./login.html"; 
}



function signUp () {

    fb
    .createUserWithEmailAndPassword(emailEl.value, passwordEl.value) 
    .then((userCredential) => {
        messageEl.innerHTML = "User created successfully!"; 
        messageEl.style.color = "green";
        
        // 2. 3000 milliseconds 
        setTimeout(() => {
            messageEl.innerHTML = "Waiting...";
            redirectToSignIn(); 
        }, 3000); // 3000 milliseconds = 3 seconds
        
    })
    .catch((error) => {
        // ... (Error handling code)
    });
}




function signIn() {
    messageEl.innerHTML = "Waiting... Please wait a moment."; 
    messageEl.style.color = "blue"; 
    fb
    .signInWithEmailAndPassword(emailEl.value, passwordEl.value)
    .then((userCredential) => {
        
        
        
        // messageEl.innerHTML = "SignIn successfully! Redirecting to Home..."; 
        // messageEl.style.color = "green";
        
       
        setTimeout(() => {
            window.location.href = "home.html"; 
        }, 3000); // 3 seconds delay
        
    })
    .catch((error) => {
        var errorMessage = error.message;
        messageEl.innerHTML = "Error: " + errorMessage;
        messageEl.style.color = "Red";
    });
}

// logout 


function logout() {
    
    fb.signOut()
    .then(() => {
        messageEl.innerHTML = "Logged out successfully. Redirecting...";
        messageEl.style.color = "green";
        
        // redirect
        window.location.href = "./login.html"; 
    })
    .catch((error) => {
       
        
        
        var errorMessage = error.message;
        messageEl.innerHTML = "Error during logout: " + errorMessage;
        messageEl.style.color = "Red";
    });
}


 
