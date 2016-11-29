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
        url: "api/homeFleet.php",
        crossDomain: true,
    }).success(function(result){
        $("#main").html(result);
    });
    window.location.hash = "homeFleet";
    
    // Get elements from DOM
    const btnBus = document.getElementById('btnBus');
    const btnLogo1 = document.getElementById('btnLogo1');
    const btnLogo2 = document.getElementById('btnLogo2');
    

    //the loading of the page for manage the bus
    $("body").on("click", "#btnBus", function (e){

        var query = firebase.database().ref().child("Bus");
        query.once("value")
            .then(function (snapshot) {
                //bus is the function in script.js
                var result = bus(snapshot);
                $("#main").html(result);
            });

        window.location.hash = "fleetBus";
        e.preventDefault();
    });


    btnLogo1.addEventListener('click', e => {
        document.getElementById('firebaseui-auth-container').classList.add('hide');
        document.getElementById('map').classList.add('hide');
        document.getElementById('Login').classList.add('hide');
        document.getElementById('list').classList.add('hide');
        $.ajax({
            type:'GET',
            url: "api/homeFleet.php",
            crossDomain: true,
        }).success(function(result){
            $("#main").html(result);
        });
        window.location.hash = "homeFleet";
        e.preventDefault();
    });
    
    btnLogo2.addEventListener('click', e => {
        document.getElementById('firebaseui-auth-container').classList.add('hide');
        document.getElementById('map').classList.add('hide');
        document.getElementById('Login').classList.add('hide');
        document.getElementById('list').classList.add('hide');
        $.ajax({
            type:'GET',
            url: "api/homeFleet.php",
            crossDomain: true,
        }).success(function(result){
            $("#main").html(result);
        });
        window.location.hash = "homeFleet1";
        e.preventDefault();
    });
    
    btnLogo1.addEventListener('click', e => {
        document.getElementById('firebaseui-auth-container').classList.add('hide');
        document.getElementById('map').classList.add('hide');
        document.getElementById('Login').classList.add('hide');
        document.getElementById('list').classList.add('hide');
        $.ajax({
            type:'GET',
            url: "api/home.php",
            crossDomain: true,
        }).success(function(result){
            $("#main").html(result);
        });
        window.location.hash = "home";
        e.preventDefault();
    });
   
    /*
    function getBusFromDatabase() {
        var query = firebase.database().ref("Bus").orderByKey();
        query.once("value")
            .then(function(snapshot){
                snapshot.forEach(function(childSnaphot){
                    var key = childSnaphot.key;
                    var childData = childSnaphot.val();
                    return childData;
                    console.log(childData);
                })
            })
    }
    */
    // Create references
    const dbRefObject = firebase.database().ref().child('Bus');
    const dbRefList = dbRefObject.child('Bus1');
    
    
/*
    btnBus.addEventListener('click', e => {
        $('#main').html(' ');
    document.getElementById('firebaseui-auth-container').classList.add('hide');
    document.getElementById('map').classList.add('hide');
    document.getElementById('Bus').classList.remove('hide');
    document.getElementById('list').classList.remove('hide');
    console.log("ciao");

    dbRefObject.on('value', snap => {
        preObject.innerText = JSON.stringify(snap.val(), null, 3);
    });

    dbRefList.on('child_added', snap => {
        const li = document.createElement('li');
    li.innerText = snap.val();
    li.id = snap.key;
    ulList.appendChild(li);
    });

    dbRefList.on('child_changed', snap => {
        const liChanged = document.getElementById(snap.key);
    liChanged.innerText = snap.val();
    });

    dbRefList.on('child_removed', snap => {
        const liToRemove = document.getElementById(snap.key);
    liToRemove.remove();
    });
    window.location.hash = "read";
    e.preventDefault();
    });
*/
    
   
    


 
    
   

    
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
