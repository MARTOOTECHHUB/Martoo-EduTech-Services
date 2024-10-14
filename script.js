// script.js

function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show"); // Toggle the show class to display/hide the menu
}

// Sign-in functionality
function signIn() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Retrieve stored credentials from localStorage
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    // Check if the username and password match
    if (username === storedUsername && password === storedPassword) {
        alert("Sign-in successful!");
        // Redirect to another page or perform another action here
        window.location.href = "index.html"; // Redirect to home page
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

// Function to store account details during account creation
function createAccount() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Store the username and password in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Account created successfully!");
    // Optionally, redirect to sign-in page
    window.location.href = "sign-in.html";
}
