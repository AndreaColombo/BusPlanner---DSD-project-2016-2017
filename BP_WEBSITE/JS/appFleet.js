/**loading modal -- spinner*/
$body = $("body");

$(document).on({
    ajaxStart: function() {
        $body.addClass("loading");    },
    ajaxStop: function() { $body.removeClass("loading"); }
});

$( document ).ready(function() {
    
    // Load home main 
    $.ajax({
        type:'GET',
        url: "api/homeFleetManager.php",
        crossDomain: true,
    }).success(function(result){
        $("#main").html(result);
    });
    window.location.hash = "homeFleetManager";
    
    // Get elements from DOM
    /*
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    */
    const btnLogin = document.getElementById('btnLogin');
    const btnLogo1 = document.getElementById('btnLogo1');
    const btnLogo2 = document.getElementById('btnLogo2');
    const btnMap = document.getElementById('btnMap');
    const btnRead = document.getElementById('btnRead');
    const preObject = document.getElementById('Login');
    const ulList = document.getElementById('list');
    const btnWrite = document.getElementById('btnWrite');
    
    
    
 


    
   
    

    

    
   
    


 
    
   

    
    /*
    // Read from database
    btnRead.addEventListener('click', e => {
        document.getElementById('firebaseui-auth-container').classList.add('hide');
        document.getElementById('map').classList.add('hide');
        var ref = firebase.database().ref("Login");
        ref.once("value").then(function(snapshot) {
           var name = snapshot.child("Login1").val(); // { first: "Ada", last: "Lovelace"}
           console.log(name);
	       var Login_id = snapshot.child("Login1").child("Login_id").val(); // "Ada"
	       document.write(Login_id);
	       var Password = snapshot.child("Login1").child("Password").val(); // "Lovelace"
	       document.write(Password);
	       var User_name = snapshot.child("Login1").child("User_name").val();
	       document.write(User_name);
	       var User_type_id= snapshot.child("Login1").child("User_type_id").val();
	       document.write(User_type_id);
        });
    });
    */
    

    

});
