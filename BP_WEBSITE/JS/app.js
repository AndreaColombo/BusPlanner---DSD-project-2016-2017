/**loading modal -- spinner*/
var email;
var password;
var logout;
var driverMap;
var markerClusterer1;

$(document).ready(function() {
    
    // Load home main 
    var result = home();
    var result2 = header();
    $('#header').html(result2);
    $("#main").html(result);
    window.location.hash = "home";
    
    // Get elements from DOM
    /*
    const btnLogin = document.getElementById('btnLogin');
    const btnMap = document.getElementById('btnMap');
    const btnRead = document.getElementById('btnRead');
    const preObject = document.getElementById('Login');
    const ulList = document.getElementById('list');
    const btnWrite = document.getElementById('btnWrite');
    */
    // Create references
    const dbRefLogin = firebase.database().ref().child('Login');
    //const dbRefList = dbRefLogin.child('Login1');
    const dbRefObject = firebase.database().ref().child('Bus');
    const dbRefList = dbRefObject.child('Bus1');
    
    $( "body" ).on( "click", "#btnUser",function(e){
        var result = mainUser();
        var result2 = headerUser();
        $('#header').html(result2);
        $("#main").html(result);
        window.location.hash = "homeUser";
        e.preventDefault(); 
    });
    
    $( "body" ).on( "click", "#btnFleetAndDriver",function(e){
        var result = homeFleetAndDriver();
        var result2 = headerFleetAndDriver();
        $('#header').html(result2);
        $("#main").html(result);
        window.location.hash = "homeFleetAndDriver";
        e.preventDefault();
    });
    
    $( "body" ).on( "click", "#btnLogo1User",function(e){
        var result = home();
        var result2 = header();
        $("#header").html(result2);
        $("#main").html(result);
        window.location.hash = "home";
        e.preventDefault();
    });
    
    $( "body" ).on( "click", "#btnLogo2User",function(e){
        var result = home();
        var result2 = header();
        $("#header").html(result2);
        $("#main").html(result);
        window.location.hash = "home";
        e.preventDefault();
    });
    
    $( "body" ).on( "click", "#btnLogo1FleetDriver",function(e){
        var result = home();
        var result2 = header();
        $("#header").html(result2);
        $("#main").html(result);
        window.location.hash = "home";
        e.preventDefault();
    });
    
    $( "body" ).on( "click", "#btnLogo2FleetDriver",function(e){
        var result = home();
        var result2 = header();
        $("#header").html(result2);
        $("#main").html(result);
        window.location.hash = "home";
        e.preventDefault();
    });
    
    $('body').on('click', '#btnLogo1Fleet', function(e) {
        //document.getElementById('map').classList.add('hide');
        var result = mainFleet();
        var result2 = headerFleet();
        $('#header').html(result2);
        $("#main").html(result);
        window.location.hash = "homeFleet";
        e.preventDefault(); 
    });
    
    $('body').on('click', '#btnLogo2Fleet', function(e) {
        //document.getElementById('map').classList.add('hide');
        var result = mainFleet();
        var result2 = headerFleet();
        $('#header').html(result2);
        $("#main").html(result);
        window.location.hash = "homeFleet";
        e.preventDefault(); 
    });
    
    $('body').on('click', '#btnLogo1Driver', function(e) {
        //document.getElementById('map').classList.add('hide');
        //document.getElementById('main').classList.remove('hide');
        var result = mainDriver();
        $("#main").html(result);
        window.location.hash = "homeDriver";
        e.preventDefault(); 
    });
    
    $('body').on('click', '#btnLogo2Driver', function(e) {
        //document.getElementById('map').classList.add('hide');
        //document.getElementById('main').classList.remove('hide');
        var result = mainDriver();
        $("#main").html(result);
        window.location.hash = "homeDriver";
        e.preventDefault(); 
    });
    
    $('body').on('click', '#btnLogout', function(e) {
        //document.getElementById('map').classList.add('hide');
        var result = homeFleetAndDriver();
        var result2 = headerFleetAndDriver();
        $('#header').html(result2);
        $("#main").html(result);
        window.location.hash = "home";
        e.preventDefault(); 
    });
    
    // Add login event
    $("body").on("click", "#btnLogin", function (e){
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
                            var query = firebase.database().ref().child("Route").child("Route1").child("BusStops");
                            query.orderByChild("Stop_id").once("value")
                                .then(function (snapshot) {
                                    var changeHeader = headerDriver();
                                    $('#header').html(changeHeader);
                                    var result = mainDriver(snapshot);
                                    $('#main').html(result);
                                    document.onload = getMapDriver();
                                });
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

        var query = firebase.database().ref().child("Driver");
        query.once("value")
            .then(function (snapshot) {
                //bus is the function in script.js
                var result = getDriver(snapshot);
                $("#main").html(result);
            });

        window.location.hash = "fleetBus";
        e.preventDefault();
    });


    // loading the route page
    $("body").on("click", "#btnRoute", function (e){

        var query = firebase.database().ref().child("Route");
        query.once("value")
            .then(function (snapshot) {
                //bus is the function in script.js
                var result = getRoute(snapshot);
                $("#main").html(result);
            });

        window.location.hash = "fleetRoute";
        e.preventDefault();
    });


    // loading the user request page
    $("body").on("click", "#btnRequest", function (e){
        
        var query = firebase.database().ref().child("UserRequest");
        query.once("value")
            .then(function (snapshot) {
                //getRequest is the function in script.js
                var result = getRequest(snapshot);
                $("#main").html(result);
            });
        console.log("i'm here");
        window.location.hash = "fleetRequest";
        e.preventDefault();
    });
    
    /*
    document.getElementById('signup').addEventListener('click', e => {
        $("#main").html(' ');
        document.getElementById('firebaseui-auth-container').classList.remove('hide');
        document.getElementById('map').classList.add('hide');
        document.getElementById('Login').classList.add('hide');
        document.getElementById('list').classList.add('hide');
        var uiConfig = {
            'signInSuccessUrl': '<url-to-redirect-to-on-success>',
            'signInOptions': [
                // Leave the lines as is for the providers you want to offer your users.
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.TwitterAuthProvider.PROVIDER_ID,
                firebase.auth.GithubAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ],
            // Terms of service url.
            'tosUrl': '<your-tos-url>',
        };

        // Initialize the FirebaseUI Widget using Firebase.
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        
        // The start method will wait until the DOM is loaded.
        ui.start('#firebaseui-auth-container', uiConfig); 
        window.location.hash = "signup";
        e.preventDefault();
    });

    // Show login form
    btnLogin.addEventListener('click', e => {
        document.getElementById('firebaseui-auth-container').classList.add('hide');
        document.getElementById('map').classList.add('hide');
        document.getElementById('Login').classList.add('hide');
        document.getElementById('list').classList.add('hide');
        var result = login();
        $('#main').html(result);
        window.location.hash = "login";
        e.preventDefault();
    });
    
    btnMap.addEventListener('click', e => {
        document.getElementById('firebaseui-auth-container').classList.add('hide');
        $("#main").html(' ');
        document.getElementById('Login').classList.add('hide');
        document.getElementById('list').classList.add('hide');
        document.getElementById('map').classList.remove('hide');
        
    var uluru = {lat: 64.01, lng: 19.05};
          var map = new google.maps.Map(document.getElementById('map'), {
            center: {
              lat: 64.01,
              lng: 19.05
            },
            zoom: 14,
            styles: [{
              featureType: 'poi',
              stylers: [{
              visibility: 'on'
            }] // Turn off points of interest.
            }, {
              featureType: 'transit.station',
              stylers: [{
              visibility: 'on'
            }] // Turn off bus stations, train stations, etc.
            }],
            disableDoubleClickZoom: false
	
          });
		 
		//HERE THE INFO FROM DB 
		var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';
   
  var query = firebase.database().ref("UserRequest").orderByKey();
query.once("value")
  .then(function(snapshot) {
    
    for (var i = 1; i <= 2; ++i) {
   var lat = snapshot.child("UserRequest"+i+"/Latitude").val(); 
     
      var long = snapshot.child("UserRequest"+i+"/Longitude").val(); 
       
         var status = snapshot.child("UserRequest"+i+"/Status").val(); 
          var latLng = new google.maps.LatLng(lat,long);
                     
                    var infowindow = new google.maps.InfoWindow({
            content: status
        });
                    var marker = new google.maps.Marker({
                            position: latLng,
                        map: map,
						title:status
                    });
                     marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
  }
});
		  //here to read from db THE MARK IS FOR EACH POINT
		  //TITLE SHOULD BE UNIQUE
        window.location.hash = "map";
        e.preventDefault();
    });
    
    // Add login event
    $( "body" ).on( "click", "#btnLogin2",function(e){
        document.getElementById('firebaseui-auth-container').classList.add('hide');
        document.getElementById('map').classList.add('hide');
        document.getElementById('Login').classList.add('hide');
        document.getElementById('list').classList.add('hide');

        var found = false;
        dbRefLogin.once('value')
            .then(function(snapshot) {
                snapshot.forEach(function(d) {
                    if(email == d.child('User_name').val() && pass == d.child('Password').val()) {
                        found = true;
                        
                        // Fleet manager's home
                        if(d.child('User_type_id').val() == 1) {
                            $('#main').html();
                        } 
                        // Bus driver's home
                        else {
                            $('#main').html();
                        }
                        
                        console.log('You are registered.');
                    } 
                });
            if(found == false) {
                console.log('You are not registered. Please click the SignUp button to register.');
            }
        });
    });

    // Add signup event
    $( "body" ).on( "click", "#btnSignUp",function(e){
        document.getElementById('firebaseui-auth-container').classList.add('hide');
        document.getElementById('map').classList.add('hide');
        document.getElementById('Login').classList.add('hide');
        document.getElementById('list').classList.add('hide');

        var found = false;
        var count = 0;
        dbRefLogin.once('value')
            .then(function(snapshot) {
                snapshot.forEach(function(d) {
                    count++;
                    if(email == d.child('User_name').val() && pass == d.child('Password').val()) {
                        console.log('You are already registered.');
                        found = true;
                    } 
                });
            if(found == false) {
                count++;
                
                dbRefLogin.push().set({
                    Login_id: count,
                    Password: pass,
                    User_name: email,
                    User_type_id: '1'
                });
            }
        });
    });
    
    // Add logout event
    $( "body" ).on( "click", "#btnLogout",function(e){
        document.getElementById('firebaseui-auth-container').classList.add('hide');
        document.getElementById('map').classList.add('hide');
        document.getElementById('Login').classList.add('hide');
        document.getElementById('list').classList.add('hide');
       firebase.auth().signOut(); 
    });
    
    
    // Add a realtime listener: lets me know every single time the authentication state changes
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log(firebaseUser);
            logout.classList.remove('hide');
        } else {
            console.log('not logged in');
            logout.classList.add('hide');
        }
    });
    

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

    // Sync object and list changes, reading from database
    btnRead.addEventListener('click', e => {
        $('#main').html(' ');
        document.getElementById('firebaseui-auth-container').classList.add('hide');
        document.getElementById('map').classList.add('hide');
        document.getElementById('Login').classList.remove('hide');
        document.getElementById('list').classList.remove('hide');
        
        dbRefLogin.on('value', snap => {
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
    
    // Write on database
    btnWrite.addEventListener('click', e => {
        $('#main').html(' ');
        document.getElementById('firebaseui-auth-container').classList.add('hide');
        document.getElementById('map').classList.add('hide');
        document.getElementById('Login').classList.remove('hide');
        document.getElementById('list').classList.add('hide');
        
        dbRefList.set({
            Login_id: '1',
            Password: 'abcdefg',
            User_name: 'Ste',
            User_type_id: '1'
        });
        
        dbRefLogin.on('value', snap => {
            preObject.innerText = JSON.stringify(snap.val(), null, 3);
        });
        window.location.hash = "write";
        e.preventDefault();
    });
    */
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

function getMapDriver() {
    
    var uluru = {lat: -26.195246, lng: 28.034088};
        driverMap = new google.maps.Map(document.getElementById('map1'), {
            center: uluru,
            zoom: 10,
            styles: [{
                featureType: 'poi',
                stylers: [{
                visibility: 'on'
                }] // Turn off points of interest.
            }, {
                featureType: 'transit.station',
                stylers: [{
                    visibility: 'on'
                }] // Turn off bus stations, train stations, etc.
            }],
            disableDoubleClickZoom: false
        });
    
    var route1 = firebase.database().ref('Route').child('Route1').child('BusStops');
    var allMarkers = [];
    route1.once("value").then(function(snapshot) {
        snapshot.forEach(function(d) {
            var lat = d.child('Point').child('Latitude').val();
            var long = d.child('Point').child('Longitude').val();
            var status = d.child('Name').val();
            var latLng = new google.maps.LatLng(lat,long);
            var infowindow = new google.maps.InfoWindow({
                content: status
            });
            var marker = new google.maps.Marker({
                position: latLng,
                map: driverMap,
                title: d.child('Stop_id').val()
            });
            allMarkers.push(marker);
            marker.addListener('click', function() {
                infowindow.open(driverMap, marker);
            });
        });
        markerClusterer1 = new MarkerClusterer(driverMap, allMarkers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    });
        
    var userRequests = firebase.database().ref('UserRequest');
    userRequests.once("value").then(function(snapshot) {
        snapshot.forEach(function(d) {
            var latUser = d.child('starting_bus_stop').child('Point').child('Latitude').val();
            var longUser = d.child('starting_bus_stop').child('Point').child('Longitude').val();
            var statusUser = d.child('starting_bus_stop').child('Name').val();
            var latLngUser = new google.maps.LatLng(latUser,longUser);
            var infowindowUser = new google.maps.InfoWindow({
                content: statusUser
            });
            var iconUser = {
                url: "https://cdn1.iconfinder.com/data/icons/map-objects/154/map-object-user-login-man-point-512.png", // url
                scaledSize: new google.maps.Size(40, 45) // scaled size
            };
            var markerUser = new google.maps.Marker({
                position: latLngUser,
                map: driverMap,
                title: d.child('id').val(),
                icon: iconUser
            });
            markerUser.addListener('click', function() {
                infowindowUser.open(driverMap, markerUser);
            });
        });
    });
}

function changeMarker(id) {
    var markers = markerClusterer1.getMarkers();
    var myMarker;
    for(var i=0; i < markers.length; i++) {
        if(markers[i].getTitle() == id) {
            myMarker = markers[i];
        }
    }
    var icon = {
        url: "http://www.clker.com/cliparts/j/4/u/5/C/k/marker-md.png", // url
        scaledSize: new google.maps.Size(22, 38) // scaled size
    };
    myMarker.setIcon(icon);
}

//get data from a form, num is the dynamic index of the bus, num = d.child('Bus_id').val()
function modifyBusData(num){


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

    var map = new google.maps.Map(document.getElementById('mapBus'), {
        zoom: 12,
        center: {lat: -26.324, lng: 28.000}
    });


    var query = firebase.database().ref("Bus");
    query.once("value")
        .then(function(snapshot) {
            //dbRefStepLong = snapshot.child("Route"+ num).child("Longitude");
            snapshot.forEach(function(d){
                //console.log("Latitude: "+ d.val() +" Longitude: "+dbRefStepLong.child(cont.toString()).val());
                var locations = [];
                locations.push({ lat: parseFloat(d.child("Latitude").val()), lng: parseFloat(d.child("Longitude").val()) });
                console.log(locations);

                // Add some markers to the map.
                // Note: The code uses the JavaScript Array.prototype.map() method to
                // create an array of markers based on a given "locations" array.
                // The map() method here has nothing to do with the Google Maps API.
                var markers = locations.map(function(location, i) {
                    return new google.maps.Marker({
                        position: location,
                        label: d.child("Bus_id").val()
                    });
                });





                // Add a marker clusterer to manage the markers.
                var markerCluster = new MarkerClusterer(map, markers,
                    {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

            });

            //console.log(locations);
        });
}


function insertBus(){

    const inputBusId = document.getElementById("addBusId");
    const inputCapacity = document.getElementById("addBusCapacity");
    const inputType = document.getElementById("addBusType");
    const inputDriver = document.getElementById("addBusDriver");
    const inputLatitude = document.getElementById("addBusLatitude");
    const inputLongitude = document.getElementById("addBusLongitude");

    const dbRefBus = firebase.database().ref();

    //save the new data in the databse

    dbRefBus.child('Bus/'+'Bus'+ inputBusId.value.toString()).set({
        Bus_capacity: inputCapacity.value.toString(),
        Bus_id: inputBusId.value.toString(),
        Bus_type: inputType.value.toString(),
        Driver_id: inputDriver.value.toString(),
        Latitude: inputLatitude.value.toString(),
        Longitude: inputLongitude.value.toString()

    });

}

function deleteBus(num){

    const dbRefBus = firebase.database().ref().child('Bus');
    const dbRefBusN = dbRefBus.child('Bus'+ num);
    //i have to test the remove command
    dbRefBusN.remove();

}


function insertDriver(){

    const inputDriverId = document.getElementById("addDriverId");
    const inputName = document.getElementById("addDriverName");
    const inputNumber = document.getElementById("addNumber");
    const inputDescription = document.getElementById("addDescription");
    const inputImage = document.getElementById("addImage");


    const dbRef = firebase.database().ref();

    //save the new data in the databse

    dbRef.child('Driver/'+'Driver'+ inputDriverId.value.toString()).set({
        Driver_id: inputDriverId.value.toString(),
        Driver_name: inputName.value.toString(),
        Mobile_number: inputNumber.value.toString(),
        Description: inputDescription.value.toString(),
        Image: inputImage.value.toString()

    });

}


//get data from a form, num is the dynamic index of the bus, num = d.child('Bus_id').val()
function modifyDriverData(num){


    const inputDriverId = document.getElementById("driverId"+num);
    const inputName = document.getElementById("driverName"+num);
    const inputDate = document.getElementById("driverDateBirth"+num);
    const inputNumber = document.getElementById("driverNumber"+num);
    const inputDescription = document.getElementById("driverDescription"+num);
    const inputImange = document.getElementById("driverImage"+num);

    const dbRefBus = firebase.database().ref().child('Driver');
    const dbRefBusN = dbRefBus.child('Driver'+ num);





    dbRefBusN.set({
        Driver_id: inputDriverId.value.toString(),
        Driver_name: inputName.value.toString(),
        Date_birth: inputDate.value.toString(),
        Mobile_number: inputNumber.value.toString(),
        Description: inputDescription.value.toString(),
        Image: inputImange.value.toString()

    });


}


function deleteDriver(num){

    const dbRefBus = firebase.database().ref().child('Driver');
    const dbRefBusN = dbRefBus.child('Driver'+ num);
    //i have to test the remove command
    dbRefBusN.remove();

}

function getDiagram(){

}


function initeMapRoute(num){
    var map = new google.maps.Map(document.getElementById('mapRoute'), {
        zoom: 12,
        center: {lat: -26.324, lng: 28.000}
    });


    var query = firebase.database().ref("Route");
    query.once("value")
        .then(function(snapshot) {
            //dbRefStepLong = snapshot.child("Route"+ num).child("Longitude");
            snapshot.child("Route"+ num).child("BusStops").forEach(function(d){
                //console.log("Latitude: "+ d.val() +" Longitude: "+dbRefStepLong.child(cont.toString()).val());
                var locations = [];
                locations.push({ lat: parseFloat(d.child("Point").child("Latitude").val()), lng: parseFloat(d.child("Point").child("Longitude").val()) });
                console.log(locations);

                // Add some markers to the map.
                // Note: The code uses the JavaScript Array.prototype.map() method to
                // create an array of markers based on a given "locations" array.
                // The map() method here has nothing to do with the Google Maps API.
                var markers = locations.map(function(location, i) {
                    return new google.maps.Marker({
                        position: location,
                        label: d.child("Stop_id").val()
                    });
                });





                // Add a marker clusterer to manage the markers.
                var markerCluster = new MarkerClusterer(map, markers,
                    {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

            });

            //console.log(locations);
        });


}


/*
var locations = [

    {lat: -31.563910, lng: 147.154312},
    {lat: -33.718234, lng: 150.363181},
    {lat: -33.727111, lng: 150.371124},
    {lat: -33.848588, lng: 151.209834},
    {lat: -33.851702, lng: 151.216968},
    {lat: -34.671264, lng: 150.863657},
    {lat: -35.304724, lng: 148.662905},
    {lat: -36.817685, lng: 175.699196},
    {lat: -36.828611, lng: 175.790222},
    {lat: -37.750000, lng: 145.116667},
    {lat: -37.759859, lng: 145.128708},
    {lat: -37.765015, lng: 145.133858},
    {lat: -37.770104, lng: 145.143299},
    {lat: -37.773700, lng: 145.145187},
    {lat: -37.774785, lng: 145.137978},
    {lat: -37.819616, lng: 144.968119},
    {lat: -38.330766, lng: 144.695692},
    {lat: -39.927193, lng: 175.053218},
    {lat: -41.330162, lng: 174.865694},
    {lat: -42.734358, lng: 147.439506},
    {lat: -42.734358, lng: 147.501315},
    {lat: -42.735258, lng: 147.438000},
    {lat: -43.999792, lng: 170.463352}
]
*/
