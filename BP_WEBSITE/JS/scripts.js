// Map initialization
/*
function initMap() {
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
}*/