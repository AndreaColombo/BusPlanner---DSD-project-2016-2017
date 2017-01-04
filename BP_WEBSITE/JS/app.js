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

        var query = firebase.database().ref("Bus").orderByChild('Bus_id');
        query.once("value")
            .then(function (snapshot) {
                //bus is the function in script.js
                var result = getBus(snapshot);
                $("#main").html(result);
                document.onload = getMapBus();
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
                document.onload = initeMapRoute(1);
                var markers = initeMapAddRoute();
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

                document.onload(drawChart(), drawChartStop());

                //document.onload = drawChart();

            });


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
        zoom: 9,
        center: {lat: -26.195246, lng: 28.034088}
    });


    var query = firebase.database().ref("Bus");
    query.once("value")
        .then(function(snapshot) {
            snapshot.forEach(function(d){
                var locations = [];
                locations.push({ lat: parseFloat(d.child("Latitude").val()), lng: parseFloat(d.child("Longitude").val()) });

                // Add some markers to the map.
                // Note: The code uses the JavaScript Array.prototype.map() method to
                // create an array of markers based on a given "locations" array.
                // The map() method here has nothing to do with the Google Maps API.
                var markers = locations.map(function(location, i) {
                    return new google.maps.Marker({
                        position: location,
                        label: d.child("Bus_id").val().toString()
                    });
                });



                // Add a marker clusterer to manage the markers.
                var markerCluster = new MarkerClusterer(map, markers,
                    {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

            });

        });

}


function insertBus(count){

    const inputCapacity = document.getElementById("addBusCapacity");
    const inputType = document.getElementById("addBusType");
    const inputDriver = document.getElementById("addBusDriver");
    const inputLatitude = document.getElementById("addBusLatitude");
    const inputLongitude = document.getElementById("addBusLongitude");

    const dbRefBus = firebase.database().ref('Bus');

    //save the new data in the database

    dbRefBus.child('Bus'+ count).set({
        Bus_capacity: inputCapacity.value.toString(),
        Bus_id: count,
        Bus_type: inputType.value.toString(),
        Driver_id: inputDriver.value.toString(),
        Latitude: inputLatitude.value.toString(),
        Longitude: inputLongitude.value.toString()

    });
    
    dbRefBus.once('child_added', snap => {
        var busList = document.getElementById('busListGroup');
        busList.innerHTML = busList.innerHTML + '<div class="list-group-item" id="busItem'+snap.child('Bus_id').val()+'" align="center"><h5>Bus Id: ' + snap.child('Bus_id').val() +
                ' &emsp;<a href="#" data-toggle="modal"  data-target="#modalView' + snap.child('Bus_id').val() + '">Info</a>&emsp;' + '<a href="#" data-toggle="modal" data-target="#modalModify' + snap.child('Bus_id').val() + '">Modify</a>&emsp;' + '<a href="#" data-toggle="modal" data-target="#modalDelete' + snap.child('Bus_id').val() + '">Delete</a></h5></div><div id="modalView' + snap.child('Bus_id').val() + '" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Bus ' + snap.child('Bus_id').val() + ' Information</h4></div><div class="modal-body"><p>Bus capacity: ' + snap.child('Bus_capacity').val() + '<br>Bus Type:' + snap.child('Bus_type').val() + '<br>Driver Id: ' + snap.child('Driver_id').val() + '<br>Latitude: ' + snap.child('Latitude').val() + '<br>Longitude: ' + snap.child('Longitude').val() + '<br></p></div><div class="modal-footer"><button href="#" type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div><div id="modalModify' + snap.child('Bus_id').val() + '" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Insert the value of the Bus ' + snap.child('Bus_id').val() + ' to modify</h4></div><div class="modal-body"><form>' +
            '<div class="form-group">' +
            '<label for="id">Bus Id:</label>' +
            '<input type="text" class="form-control" id="busId' + snap.child('Bus_id').val() + '" value="' + snap.child("Bus_id").val() + '">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="capacity">Capacity:</label>' +
            '<input type="text" class="form-control" id="busCapacity' + snap.child('Bus_id').val() + '" value="' + snap.child("Bus_capacity").val() + '">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="type">Type:</label>' +
            '<input type="text" class="form-control" id="busType' + snap.child('Bus_id').val() + '" value="' + snap.child("Bus_type").val() + '">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="driver">Driver:</label>' +
            '<input type="text" class="form-control" id="busDriver' + snap.child('Bus_id').val() + '" value="' + snap.child("Driver_id").val() + '">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="latitude">Latitude:</label>' +
            '<input type="text" class="form-control " id="busLatitude' + snap.child('Bus_id').val() + '" value="' + snap.child("Latitude").val() + '" disabled>' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="longitude">Longitude:</label>' +
            '<input type="text" class="form-control " id="busLongitude' + snap.child('Bus_id').val() + '" value="' + snap.child("Longitude").val() + '" disabled>' +
            '</div>' +
            //i have to put in get data the dynamic index
            '<button href="#" type="submit" onclick="modifyBusData(' + snap.child('Bus_id').val() + ')" id="submitModBus' + snap.child('Bus_id').val() + '" class="btn btn-default">Submit</button>' +
            '</form></div><div class="modal-footer"><button href="#" type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div><div id="modalDelete' + snap.child('Bus_id').val() + '" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Deleting the bus ' + snap.child('Bus_id').val() + '</h4></div><div class="modal-body"><div>' +
            '<p>Bus capacity: ' + snap.child('Bus_capacity').val() + '<br>' +
            'Bus Type:' + snap.child('Bus_type').val() + '<br>' +
            'Driver Id: ' + snap.child('Driver_id').val() + '<br>' +
            'Latitude: ' + snap.child('Latitude').val() + '<br>' +
            'Longitude: ' + snap.child('Longitude').val() + '<br>' +
            '</p>' +
            //i have to put in get data the dynamic index
            '<button href="#" type="submit" onclick="deleteBus(' + snap.child('Bus_id').val() + ')" id="deleteBus' + snap.child('Bus_id').val() + '" class="btn btn-default" data-dismiss="modal">Delete</button>' +
            '</div></div><div class="modal-footer"><button href="#" type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>';
    });
}
/*
function testHide(){
    var div = document.getElementsByName("listRoute");
    if (div.style.display !== "none") {
        div.style.display = "none";
    }
    else {
        div.style.display = "block";
    }

}
*/


function insertRoute(markers){

    console.log("YES it works");
    console.log(markers);

    const inputRouteId = document.getElementById("addRouteId");
    const inputName = document.getElementById("addRouteName");


    const dbRefBus = firebase.database().ref();

    //save the new data in the databse

    dbRefBus.child('Route/'+'Route'+ inputRouteId.value.toString()).set({
        Route_id: inputRouteId.value.toString(),
        Route_name: inputName.value.toString(),
        id: inputRouteId.value.toString(),
    });

    for(var i=0; i < markers.length; i++){
        var name = markers[i].name;
        var latitude = markers[i].marker.getPosition().lat();
        var longitude = markers[i].marker.getPosition().lng();
        var stopNumber = markers[i].stopNumber;
        console.log(latitude);
        dbRefBus.child('Route/'+'Route'+ inputRouteId.value.toString()+'/BusStops/'+'BusStops'+stopNumber.toString()).set({
            Name: name,
            Stop_id: stopNumber.toString(),
        });


        dbRefBus.child('Route/'+'Route'+ inputRouteId.value.toString()+'/BusStops/'+'BusStops'+stopNumber.toString() + '/Point').set({
            Latitude: latitude.toString(),
            Longitude: longitude.toString(),
        });


    }


}

function deleteBus(num){

    const dbRefBus = firebase.database().ref('Bus');
    const dbRefBusN = dbRefBus.child('Bus'+ num);
    //i have to test the remove command
    dbRefBusN.remove();
    document.getElementById('busItem'+num).remove();
}

function insertDriver(count){

    const inputName = document.getElementById("addDriverName");
    const inputNumber = document.getElementById("addNumber");
    const inputDescription = document.getElementById("addDescription");
    const inputImage = document.getElementById("addImage");

    const dbRef = firebase.database().ref('Driver');

    //save the new data in the databse

    dbRef.child('Driver'+ count).set({
        Driver_id: count,
        Driver_name: inputName.value.toString(),
        Mobile_number: inputNumber.value.toString(),
        Description: inputDescription.value.toString(),
        Image: inputImage.value.toString()
    });

    dbRef.once('child_added', snap => {
        var driversList = document.getElementById('driversListGroup');
        driversList.innerHTML = driversList.innerHTML + '<div class="row" id="driverItem'+snap.child('Driver_id').val()+'" style=" margin: 10px"><div class="col-md-1 col-sm-1 col-xs-1"></div><div class="col-md-3 col-sm-3 col-xs-3">' +
             '<img src="Images/'+snap.child('Image').val() +'" class="img-circle" id="imageDriver">' +
             '</div>' +
             '<div class="col-md-7 col-sm-7 col-xs-7">' +
                '<h3 id="dName'+snap.child('Driver_id').val()+'">'+ snap.child('Driver_name').val()+'</h3>' +
                '<p id="dDescription'+snap.child('Driver_id').val()+'" style="font-size: medium">'+snap.child('Description').val() +'</p><h4 align="center">'+
        ' &emsp;<a href="#" data-toggle="modal" data-target="#modalView' + snap.child('Driver_id').val() + '">Info</a>&emsp;' + '<a href="#" data-toggle="modal" data-target="#modalModify' + snap.child('Driver_id').val() + '">Modify</a>&emsp;' + '<a href="#" data-toggle="modal" data-target="#modalDelete' + snap.child('Driver_id').val() + '">Delete</a></h4></div></div><div id="modalView' + snap.child('Driver_id').val() + '" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">' + snap.child('Driver_name').val() + ' Information</h4></div><div class="modal-body"><p>Driver ID: ' + snap.child('Driver_id').val() + '<br>Driver Name: ' + snap.child('Driver_name').val() + '<br>Mobile Number: ' + snap.child('Mobile_number').val() + '<br>Date of birth: ' + snap.child('Date_birth').val() + '<br></p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div><div id="modalModify' + snap.child('Driver_id').val() + '" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Insert the value of the Driver ' + snap.child('Driver_name').val() + ' to modify</h4></div><div class="modal-body"><form>' +
            '<div class="form-group">' +
            '<label for="id">Driver Id:</label>' +
            '<input type="text" class="form-control" id="driverId' + snap.child('Driver_id').val() + '" value="' + snap.child("Driver_id").val() + '">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="capacity">Name:</label>' +
            '<input type="text" class="form-control" id="driverName' + snap.child('Driver_id').val() + '" value="' + snap.child("Driver_name").val() + '">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="type">Date of birth:</label>' +
            '<input type="text" class="form-control" id="driverDateBirth' + snap.child('Driver_id').val() + '" value="' + snap.child("Date_birth").val() + '">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="driver">Mobile number:</label>' +
            '<input type="text" class="form-control" id="driverNumber' + snap.child('Driver_id').val() + '" value="' + snap.child("Mobile_number").val() + '">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="latitude">Description:</label>' +
            '<input type="text" class="form-control " id="driverDescription' + snap.child('Driver_id').val() + '" value="' + snap.child("Description").val() + '">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="longitude">Image:</label>' +
            '<input type="text" class="form-control " id="driverImage' + snap.child('Driver_id').val() + '" value="' + snap.child("Image").val() + '">' +
            '</div>' +
            //i have to put in get data the dynamic index
            '<button type="submit" onclick="modifyDriverData(' + snap.child('Driver_id').val() + ')" id="submitModBus' + snap.child('Driver_id').val() + '" class="btn btn-default">Submit</button>' +
            '</form></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div><div id="modalDelete' + snap.child('Driver_id').val() + '" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Deleting ' + snap.child('Driver_name').val() + ' from the driver list</h4></div><div class="modal-body"><div>' +
            '<p>Driver ID: ' + snap.child('Driver_id').val() + '<br>' +
            'Driver Name: ' + snap.child('Driver_name').val() + '<br>' +
            'Mobile Number: ' + snap.child('Mobile_number').val() + '<br>' +
            'Date of birth: ' + snap.child('Date_birth').val() + '<br>' +
            '</p><button type="submit" onclick="deleteDriver(' + snap.child('Driver_id').val() + ')" id="deleteDriver' + snap.child('Driver_id').val() + '" class="btn btn-default" data-dismiss="modal">Delete</button>' +
            '</div></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>';
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
    
    document.getElementById('dName'+num).innerHTML = inputName.value.toString();
    document.getElementById("dDescription"+num).innerHTML = inputDescription.value.toString();
    document.getElementById("dImage"+num).innerHTML = inputImange.value.toString();
}


function deleteDriver(num){

    const dbRefBus = firebase.database().ref().child('Driver');
    const dbRefBusN = dbRefBus.child('Driver'+ num);
    //i have to test the remove command
    dbRefBusN.remove();
    document.getElementById('driverItem'+num).remove();
}

function drawChart456() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
    ]);

    var options = {
        title: 'My Daily Activities'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}


function initeMapRoute(num){
    
    var routes = firebase.database().ref("Route");
    routes.once("value").then(function(snapshot) {
        var specificRoute;
        var numberOfChildren = snapshot.numChildren();
        for(var i=1; i<=numberOfChildren; i++) {
            specificRoute = document.getElementById('Route'+i);
            if(specificRoute.classList.contains('active')){
                specificRoute.classList.remove('active');
            }
        }
        document.getElementById('Route'+num).classList.add('active');
    });
    
    var uluru = {lat: -26.195246, lng: 28.034088};
        var routeMap = new google.maps.Map(document.getElementById('mapRoute'), {
            center: uluru,
            zoom: 11,
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
    
    var query = routes.child("Route"+ num).child("BusStops");
    query.once("value").then(function(snapshot) {
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
                map: routeMap,
                label: d.child("Stop_id").val()
            });
            marker.addListener('click', function() {
                infowindow.open(routeMap, marker);
            });
        });
    });
}

function initeMapAddRoute(){

    var map;
    var markers = [];
    var cont = 1;

    var haightAshbury = new google.maps.LatLng(-26.195246, 28.034088);
    var mapOptions = {
        zoom: 12,
        center: haightAshbury,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };
    map = new google.maps.Map(document.getElementById('mapRouteAdd'),
        mapOptions);

    google.maps.event.addListener(map, 'click', function(event) {
            markers = addMarker(event.latLng);
    });

    $("#addingRouteModal").on("shown.bs.modal", function () {
        google.maps.event.trigger(map, "resize");
    });



    // Add a marker to the map and push to the array.
    function addMarker(location) {




        var marker = new google.maps.Marker({
            position: location,
            map: map,
            label: (cont++).toString(),

        });


        var nameStop = document.getElementById("stopName").value.toString();

        //the info clicking on the marker
         var contentString = '<div><h4>'+ nameStop +'</h4></div>';

         var infowindow = new google.maps.InfoWindow({
         content: contentString,
         maxWidth: 200
         });


         infowindow.open(map, marker);
         marker.addListener('click', function() {
            infowindow.open(map, marker);
         });


        markers.push({marker: marker, stopNumber: cont-1, name: nameStop});
        console.log(markers+" the latitude is: "+ markers[0].marker.getPosition().lat());
        return markers;
    }

    document.getElementById("submitModBus").onclick = function () {
        insertRoute(markers);
    };
}

function setStopName(markers, cont){
    console.log("HI GUIZZ" + markers[0].position +" "+ markers[0].stopNumber+" "+ markers[0].name);
    var busStopName = document.getElementById("busStopNameMap").toString();
    console.log(busStopName);
    markers[cont].name = busStopName;
    console.log(markers[0].position +" "+ markers[0].stopNumber+" "+ markers[0].name);

}

function drawChart(){

    var query = firebase.database().ref("UserRequest");
    query.once("value")
        .then(function(snapshot) {
            var variables = [];
            snapshot.forEach(function(d){
                var route = d.child("route_id").val();
                var x = false;
                for (var i = 0; i < variables.length && x == false; i++) {
                    if(variables[i].route == route ){
                        variables[i].utilization++;
                        x = true;
                    }
                }

                if(variables.length == 0 || x == false){
                    variables.push({ route: route, utilization: 1})
                }
            });
            var chart = new CanvasJS.Chart("piechart", {
                    title:{
                        text: "Route Utilization"
                    },
                    animationEnabled: true,
                    legend:{
                        verticalAlign: "bottom",
                        horizontalAlign: "center"
                    },
                    data: [
                        {
                            indexlabelFontSize: 20,
                            indexLabelFontFamily: "Monospace",
                            indexLabelFontColor: "darkgrey",
                            indexLabelPlacement: "outsize",
                            type: "pie",
                            showInLegend: true,
                            toolTipContent:"{y} - <strong>#percent%</strong>",
                            dataPoints:[
                            ]

                        }
                    ]
                });

            for(var i = 0; i < variables.length; i++){
                chart.options.data[0].dataPoints.push({y: variables[i].utilization, legendText:"Route "+ variables[i].route, indexLabel:"Route "+ variables[i].route });
            }
            chart.render();
        });
}

//d is the snapshot od the database
function drawChartGoogle() {

    var variables = [];
    var route1 = 1;
    var route2 = 1;
    var route3 = 1;
    var route4 = 1;
    var route5 = 1;

    var query = firebase.database().ref("UserRequest");
    query.once("value")
        .then(function(snapshot) {
            snapshot.forEach(function(d){
                var route = d.child("route_id").val();

                var x = false;
                for (var i = 0; i < variables.length && x == false; i++) {
                    if(variables[i].route == route ){
                        variables[i].utilization++;
                        x = true;
                    }
                }

                if(variables.length == 0 || x == false){
                    variables.push({ route: route, utilization: 1})
                }

                route1 = variables[0].utilization;
                route2 = variables[1].utilization;
                route3 = variables[2].utilization;
                route4 = variables[3].utilization;
                route5 = variables[4].utilization;

                data = new google.visualization.DataTable();
                data.addColumn('string', 'Topping');
                data.addColumn('number', 'Slices');
                data.addRows([
                    ['Route 1', route1],
                    ['Route 2', route2],
                    ['Route 3', route3],
                    ['Route 4', route4],
                    ['Route 5', route5]
                ]);

                var options = {
                    title: 'Route utilization'
                };

                var chart = new google.visualization.PieChart(document.getElementById('piechart'));

                chart.draw(data, options);
            });

            route1 = variables[0].utilization;
            route2 = variables[1].utilization;
            route3 = variables[2].utilization;
            route4 = variables[3].utilization;
            route5 = variables[4].utilization;

            data = new google.visualization.DataTable();
            data.addColumn('string', 'Topping');
            data.addColumn('number', 'Slices');
            data.addRows([
                ['Route 1', route1],
                ['Route 2', route2],
                ['Route 3', route3],
                ['Route 4', route4],
                ['Route 5', route5]
            ]);

            var options = {
                title: 'Route utilization'
            };

            var chart = new google.visualization.PieChart(document.getElementById('piechart'));

            chart.draw(data, options);



        });

}


function deleteRoute(routeId) {

    console.log("I'm going to delete the route selected "+ routeId.toString());
    if (confirm("Are you sure to cancel the route?") == true) {
        const dbRefRoute = firebase.database().ref().child('Route');
        const dbRefRouteSelected = dbRefRoute.child('Route'+ routeId.toString());
        dbRefRouteSelected.remove();
    } else {
    }


}


function drawChartStop(){
    var query = firebase.database().ref("UserRequest");
    query.once("value")
        .then(function(snapshot) {
            var variables = [];
            snapshot.forEach(function(d){
                //starting bus stop utilization
                var routeStart = d.child("starting_bus_stop").child("Name").val();

                var x = false;
                for (var i = 0; i < variables.length && x == false; i++) {
                    if(variables[i].stopName == routeStart ){
                        variables[i].utilization++;
                        x = true;
                    }
                }

                if(variables.length == 0 || x == false){
                    variables.push({ stopName: routeStart, utilization: 1})
                }

                //ending bus stop utilization

                var routeEnd = d.child("ending_bus_stop").child("Name").val();

                var y = false;
                for (var j = 0; j < variables.length && y == false; j++) {
                    if(variables[j].stopName == routeEnd ){
                        variables[j].utilization++;
                        y = true;
                    }
                }

                if(variables.length == 0 || y == false){
                    variables.push({ stopName: routeEnd, utilization: 1})
                }



            });
            var chart = new CanvasJS.Chart("piechartstop", {
                title:{
                    text: "Top 5 Stop Utilization"
                },
                animationEnabled: true,
                legend:{
                    verticalAlign: "bottom",
                    horizontalAlign: "center"
                },
                data: [
                    {
                        indexlabelFontSize: 20,
                        indexLabelFontFamily: "Monospace",
                        indexLabelFontColor: "darkgrey",
                        indexLabelPlacement: "outsize",
                        type: "pie",
                        showInLegend: true,
                        toolTipContent:"{y} - <strong>#percent%</strong>",
                        dataPoints:[
                        ]

                    }
                ]
            });

            //sorting algorithm
            for(var k = 0; k < variables.length-1; k++)
                for(var j = k+1; j < variables.length; j++)
                    if(variables[k].utilization < variables[j].utilization) {
                        var t = variables[k];
                        variables[k] = variables[j];
                        variables[j] = t;
                    }

            for(var i = 0; i < 5; i++){
                chart.options.data[0].dataPoints.push({y: variables[i].utilization, legendText:"Stop "+ variables[i].stopName, indexLabel:"Stop "+ variables[i].stopName });
            }

            console.log(chart.options.data[0].dataPoints);
            chart.render();
        });


}


function drawChart1(){

    var firebaseData = firebase.database().ref("UserRequest").responseText;

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable(firebaseData);

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, {width: 400, height: 240});
}