// Register
document.getElementById("registerForm")?.addEventListener("submit", function(e){
    e.preventDefault();
    let email = document.getElementById("regEmail").value;
    let password = document.getElementById("regPassword").value;
    auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
        alert("Registration successful!");
        window.location.href = "dashboard.html";
    })
    .catch(error => alert(error.message));
});

// Login
document.getElementById("loginForm")?.addEventListener("submit", function(e){
    e.preventDefault();
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;
    auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
        window.location.href = "dashboard.html";
    })
    .catch(error => alert(error.message));
});

// Logout
function logout(){
    auth.signOut().then(() => {
        window.location.href = "index.html";
    });
}
