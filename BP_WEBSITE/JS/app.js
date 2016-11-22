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
        url: "api/home.php",
        crossDomain: true,
    }).success(function(result){
        $("#main").html(result);
    });
    window.location.hash = "home";
    
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
    
    // Create references
    const dbRefObject = firebase.database().ref().child('Login');
    const dbRefList = dbRefObject.child('Login1');
    
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
        $.ajax({
            type:'GET',
            url: "api/login.php",
            crossDomain: true,
        }).success(function(result){
            $("#main").html(result);
        });
        window.location.hash = "login";
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
    
    btnLogo2.addEventListener('click', e => {
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
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        title:'HERE WE SAY THIS IS THE MAINS STATION. OTHER MARKS SHOULD BE MADE WITHIN A LOOP, AS LONG AS WE HAVE DATA FROM DB, SHOW MARK'
    });
    
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

    //read from JSON

  
    //here to read from db THE MARK IS FOR EACH POINT
    //TITLE SHOULD BE UNIQUE
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        title:User_type_id+'HERE WE SHOULD READ FROM DB KJFKLDSJFKLSDFJSLKFJ'
    });
    
    firebase.database().ref('users').on('value', function(snapshot) {
        var msg = snapshot.val();
        for (i in msg) {
            firebase.database().ref('users/' + i +"/vehicles").on('value', function(snapshot) {
                var gig = snapshot.val();
                console.log ("Inside the for loop");
                var latLng = new google.maps.LatLng(gig.latitude, gig.longitude);
                var marker = new google.maps.Marker({
                    position: latLng,
                    map: map,
				    title:'HERE WE SHOULD READ FROM DB '
                });
            });
        }
        console.log (msg)
    });
        window.location.hash = "map";
        e.preventDefault();
    });
    
    // Add login event
    $( "body" ).on( "click", "#btnLogin2",function(e){
        document.getElementById('firebaseui-auth-container').classList.add('hide');
        document.getElementById('map').classList.add('hide');
        document.getElementById('Login').classList.add('hide');
        document.getElementById('list').classList.add('hide');
        // Get email and psw
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        
        // Sign in
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });

    // Add signup event
    $( "body" ).on( "click", "#btnSignUp",function(e){
        document.getElementById('firebaseui-auth-container').classList.add('hide');
        document.getElementById('map').classList.add('hide');
        document.getElementById('Login').classList.add('hide');
        document.getElementById('list').classList.add('hide');
        //Get email and psw
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        
        //Sign in
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });
    
    // Add logout event
    $( "body" ).on( "click", "#btnLogout",function(e){
        document.getElementById('firebaseui-auth-container').classList.add('hide');
        document.getElementById('map').classList.add('hide');
        document.getElementById('Login').classList.add('hide');
        document.getElementById('list').classList.add('hide');
       firebase.auth().signOut(); 
    });
    /*
    // Add a realtime listener: lets me know every single time the authentication state changes
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');
        } else {
            console.log('not logged in');
            btnLogout.classList.add('hide');
        }
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
    
    // Sync object and list changes, reading from database
    btnRead.addEventListener('click', e => {
        $('#main').html(' ');
        document.getElementById('firebaseui-auth-container').classList.add('hide');
        document.getElementById('map').classList.add('hide');
        document.getElementById('Login').classList.remove('hide');
        document.getElementById('list').classList.remove('hide');
        
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
        
        dbRefObject.on('value', snap => {
            preObject.innerText = JSON.stringify(snap.val(), null, 3);
        });
        window.location.hash = "write";
        e.preventDefault();
    });
});
