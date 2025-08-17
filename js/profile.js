document.getElementById("saveProfile")?.addEventListener("click", function(){
    let user = auth.currentUser;
    if(user){
        db.collection("users").doc(user.uid).set({
            name: document.getElementById("name").value,
            businessName: document.getElementById("businessName").value,
            contact: document.getElementById("contact").value
        }).then(() => {
            alert("Profile updated!");
        });
    }
});
