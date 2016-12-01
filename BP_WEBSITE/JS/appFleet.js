$( document ).ready(function() {
    
    // Load home main 
    var result = home();
    var result2 = header();
    $('#header').html(result2);
    $("#main").html(result);
    window.location.hash = "home";
    /*
    $.ajax({
        type:'GET',
        url: "api/homeFleet.php",
        crossDomain: true,
    }).success(function(result){
        $("#main").html(result);
    });
    window.location.hash = "homeFleet";
    */
    // Get elements from DOM
    const btnBus = document.getElementById('btnBus');
    const btnLogo1 = document.getElementById('btnLogo1');
    const btnLogo2 = document.getElementById('btnLogo2');
    
    // Create references
    const dbRefLogin = firebase.database().ref().child('Login');
    const dbRefObject = firebase.database().ref().child('Bus');
    const dbRefList = dbRefObject.child('Bus1');
    
    // Add home event
    btnLogo1.addEventListener('click', e => {
        document.getElementById('map').classList.add('hide');
        document.getElementById('list').classList.add('hide');
        var result = home();
        var result2 = header();
        $('#header').html(result2);
        $("#main").html(result);
        window.location.hash = "home";
        e.preventDefault(); 
    });
    
    // Add home event
    btnLogo2.addEventListener('click', e => {
        document.getElementById('map').classList.add('hide');
        document.getElementById('list').classList.add('hide');
        var result = home();
        var result2 = header();
        $('#header').html(result2);
        $("#main").html(result);
        window.location.hash = "home";
        e.preventDefault(); 
    });
    
    $('body').on('click', '#btnLogo1Fleet', function(e) {
        document.getElementById('map').classList.add('hide');
        document.getElementById('list').classList.add('hide');
        var result = homeFleet();
        var result2 = headerFleet();
        $('#header').html(result2);
        $("#main").html(result);
        window.location.hash = "homeFleet";
        e.preventDefault(); 
    });
    
    $('body').on('click', '#btnLogo2Fleet', function(e) {
        document.getElementById('map').classList.add('hide');
        document.getElementById('list').classList.add('hide');
        var result = homeFleet();
        var result2 = headerFleet();
        $('#header').html(result2);
        $("#main").html(result);
        window.location.hash = "homeFleet";
        e.preventDefault(); 
    });
    
    $('body').on('click', '#btnLogo1Driver', function(e) {
        document.getElementById('map').classList.add('hide');
        document.getElementById('list').classList.add('hide');
        var result = homeDriver();
        var result2 = headerDriver();
        $('#header').html(result2);
        $("#main").html(result);
        window.location.hash = "homeDriver";
        e.preventDefault(); 
    });
    
    $('body').on('click', '#btnLogo1Driver', function(e) {
        document.getElementById('map').classList.add('hide');
        document.getElementById('list').classList.add('hide');
        var result = homeDriver();
        var result2 = headerDriver();
        $('#header').html(result2);
        $("#main").html(result);
        window.location.hash = "homeDriver";
        e.preventDefault(); 
    });
    
    $('body').on('click', '#btnLogout', function(e) {
        document.getElementById('map').classList.add('hide');
        document.getElementById('list').classList.add('hide');
        var result = home();
        var result2 = header();
        $('#header').html(result2);
        $("#main").html(result);
        window.location.hash = "home";
        e.preventDefault(); 
    });
    
    // Add login event
    $("body").on("click", "#btnLogin", function (e){
        document.getElementById('map').classList.add('hide');
        document.getElementById('list').classList.add('hide');

        var found = false;
        dbRefLogin.once('value')
            .then(function(snapshot) {
                snapshot.forEach(function(d) {
                    if(email == d.child('User_name').val() && pass == d.child('Password').val()) {
                        found = true;
                        
                        // Fleet manager's home
                        if(d.child('User_type_id').val() == 1) {
                            var changeHeader = headerFleet();
                            var changeMain = mainFleet();
                            $('#header').html(changeHeader);
                            $('#main').html(changeMain);
                            window.location.hash = "homeFleet";
                        } 
                        // Bus driver's home
                        else {
                            var changeHeader = headerDriver();
                            var changeMain = mainDriver();
                            $('#header').html(changeHeader);
                            $('#main').html(changeMain);
                            window.location.hash = "homeDriver";
                        }
                    } 
                });
            if(found == false) {
                $('#\\#loginModal').modal('show');
            }
        });
    });

    //the loading of the page for manage the bus
    $("body").on("click", "#btnBus", function (e){

        var query = firebase.database().ref().child("Bus");
        query.once("value")
            .then(function (snapshot) {
                //bus is the function in script.js
                var result = getBus(snapshot);
                $("#main").html(result);
            });

        window.location.hash = "fleetBus";
        e.preventDefault();
    });

    $("body").on("click", "#btnDriver", function (e){

        var query = firebase.database().ref().child("Bus");
        query.once("value")
            .then(function (snapshot) {
                //bus is the function in script.js
                var result = getDriver(snapshot);
                $("#main").html(result);
            });

        window.location.hash = "fleetBus";
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

function getEmailAndPassword(txtEmail, txtPassword) {
        email = txtEmail.value;
        pass = txtPassword.value;
}



//get data from a form, num is the dynamic index of the bus, num = d.child('Bus_id').val()
function getData(num){


    const inputBusId = document.getElementById("busId"+num);
    const inputCapacity = document.getElementById("busCapacity"+num);
    const inputType = document.getElementById("busType"+num);
    const inputDriver = document.getElementById("busDriver"+num);
    const inputLatitude = document.getElementById("busLatitude"+num);
    const inputLongitude = document.getElementById("busLongitude"+num);

    const dbRefBus = firebase.database().ref().child('Bus');
    const dbRefBusN = dbRefBus.child('Bus'+ num);





    dbRefBusN.set({
        Bus_capacity: inputCapacity.value.toString(),
        Bus_id: inputBusId.value.toString(),
        Bus_type: inputType.value.toString(),
        Driver_id: inputDriver.value.toString(),
        Latitude: inputLatitude.value.toString(),
        Longitude: inputLongitude.value.toString()

    });



}


function getMapBus(){
    var mapCanvas = document.getElementById("mapBus");
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}
