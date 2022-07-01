
var firebaseConfig = {
    apiKey: "AIzaSyDtdZJh7f9FlgjLZpDGHpAUiZD_qjD15os",
    authDomain: "israelxtrem-86ab7.firebaseapp.com",
    projectId: "israelxtrem-86ab7",
    storageBucket: "israelxtrem-86ab7.appspot.com",
    messagingSenderId: "490542924965",
    appId: "1:490542924965:web:56e679532c6fbe66a8794c",
    measurementId: "G-G5WV7X5RF9"
      };

      firebase.initializeApp(firebaseConfig);
      

function signUp(){

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = firebase.auth().createUserWithEmailAndPassword(email.value, password.value).then(function(user) {
        var user = firebase.auth().currentUser;
        logUser(user); // Optional
    }, function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(error.message)
    });
    
    function logUser(user) {
        var ref = firebase.database().ref("users");
        var obj = {
            name: getId("name"),
            familyName: getId("familyName"),
            emaill: getId("email")
        };
        ref.push(obj);

         function getId(id){
            return document.getElementById(id).value;
        }
        alert("Registration was successful!")
        moveToLogin()
    }

}

function signIn(){
		
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = firebase.auth().signInWithEmailAndPassword(email.value, password.value);
    promise.then((userCredential) => {
        var code = prompt(["If you admin, enter admin code, else enter '0'"], ["Enter code here..."]);
        if(code == '1111'){
            window.location.assign("adminPage.html");
        }
        else if(code == '0'){
            window.location.assign("map.html");
        }
        else{
            alert("Your admin code is incorrect!");
            window.location.replace("login.html");
        }
        
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
    
}

function editData(){
    var trackType = document.getElementById("trackType").value;
    var price = document.getElementById("price").value;
    var city = document.getElementById("city").value;
    var telephone = document.getElementById("telephone").value;
    var hours = document.getElementById("hours").value;

    if(price == "" || city == "" || telephone == "" || hours == ""){
        alert("Please fill all the required fields!");
    } 
    else{
        firebase.database().ref().child(trackType).update({ 
            Name: trackType,
            Price: price,
            City: city,
            Telephone: telephone,
            Hours: hours
        });

        alert("The data was successfully updated!");
    }
}

function moveToMap(){
    window.location.assign("map.html");
}
function moveToSignUp(){
    window.location.assign("register.html");
}
function moveToEdit(){
    window.location.assign("editData.html");
}
function moveToLogin(){
    window.location.replace("Login.html");
}

