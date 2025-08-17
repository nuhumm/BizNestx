document.getElementById("uploadBtn")?.addEventListener("click", function(){
    let file = document.getElementById("fileInput").files[0];
    let user = auth.currentUser;

    if(file && user){
        let storageRef = storage.ref(`uploads/${user.uid}/${file.name}`);
        storageRef.put(file).then(() => {
            alert("File uploaded successfully!");
        });
    }
});
